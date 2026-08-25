// 离线逐帧渲染巡演：__fixedDt 固定步长 + 逐帧截图 + ffmpeg 合成
// 产出 60 秒 @30fps 的全流程电影感巡演（六拍 → 剪缆 → 散场）
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync, existsSync, rmSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';
import { execSync } from 'child_process';

const ROOT = new URL('..', import.meta.url).pathname;
const FRAMES = '/tmp/cine_frames';
rmSync(FRAMES, { recursive: true, force: true });
mkdirSync(FRAMES, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript' };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(8813, r));

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
page.on('pageerror', e => console.log('PAGEERROR:', e.message));

await page.goto('http://localhost:8813/index.html');
await page.waitForFunction(() => !!window.__game && !!window.__agenda, null, { timeout: 60000 });
await page.waitForTimeout(800);
await page.click('#startBtn');
await page.waitForFunction(() => window.__agenda.beat >= 1, null, { timeout: 30000 });

// 冻结游戏时间，注入时间轴驱动器
await page.evaluate(() => {
  window.__fixedDt = 0;
  const FPS = 24;
  // 机位关键帧：[t, x, z, yaw, pitch]（段间 smoothstep 插值）
  const K = [
    [0.0, 0, -3.0, Math.PI, 0.02],
    [4.0, 0, -9.6, Math.PI, 0.02],      // 推向主桌（触发拍1）
    [8.5, 0.6, -10.2, Math.PI + 0.18, 0.0], // 入席广播演出
    [10.0, 9.6, -6.0, -Math.PI / 2 + 0.30, 0.05], // 转向东门红绳
    [13.5, 11.3, -6.0, -Math.PI / 2 + 0.26, 0.04], // 摘绳/挂钩特写
    [15.5, 17.0, -6.2, -Math.PI / 2, 0.0],  // 进服务走廊（触发拍2）
    [19.0, 25.0, -6.9, -Math.PI / 2, 0.0],  // 看侍应上绳滑行
    [21.5, 33.0, 12.0, Math.PI * 0.98, 0.0], // 进大堂（触发拍3点火）
    [25.0, 37.5, 17.0, Math.PI * 0.88, 0.02], // 大堂全景（吊灯/水族缸）
    [29.0, 42.6, 22.6, Math.PI / 2 + 0.3, 0.05], // 点名→冲向礼钩
    [31.0, 20.5, 22.0, Math.PI / 2 + 0.35, 0.02], // 海洋馆玻璃廊（触发拍4）
    [34.5, 12.5, 22.0, Math.PI / 2, 0.06],  // 闸门绞盘升起
    [36.5, 1.0, 22.0, Math.PI / 2, 0.0],    // 员工连廊（触发拍4.5）
    [38.0, -17.1, 12.5, 0, 0.0],            // 回眸客对视
    [40.0, -13.5, -6.0, Math.PI / 2 + 0.6, 0.0], // 回到宴会厅West侧（触发拍5）
    [44.0, 0, -4.5, 0, 0.02],               // 喉道化大厅环视
    [46.0, 2.4, -12.4, 0.4, -0.05],         // 上宾席前
    [50.5, 2.4, -12.4, 0.4, -0.05],         // 长按剪缆（保持机位）
    [53.0, 0, -2.0, Math.PI, 0.0],          // 转身走向正门
    [56.0, 0, 6.4, Math.PI, 0.0],           // 出门（触发好结局）
    [60.0, 0, 7.0, Math.PI, 0.0],
  ];
  // 事件：[t, fn]
  const g = window.__game, a = window.__agenda;
  const E = [
    [10.8, () => { const c = g.sys.cords.find(c => c.tag === 'doorE'); if (c) g.sys.grab(c, 'a'); }],
    [12.6, () => { g.sys.hang(g.sys.hook('hE_free')); }],
    [26.0, () => { a.grace = 999; a.triggerCall(true); }],
    [29.6, () => { if (a.call.active) a.resolveCall(); }],
    [32.0, () => { const c = g.sys.cords.find(c => c.tag === 'gate'); if (c) { g.sys.grab(c, 'b'); g.sys.hang(g.sys.hook('hWinch')); } }],
    [45.2, () => { const c = g.sys.cords.find(c => c.tag === 'seatlock'); if (c && !g.sys.held) { g.sys.grab(c, 'a'); g.sys.hang(g.sys.hook('hE_free')); } }],
    [46.4, () => { g.player.eDown = true; }],
    [49.4, () => { g.player.eDown = false; }],
  ];
  const lerp = (a, b, s) => a + (b - a) * s;
  // 离线渲染时 UI 的 setTimeout/CSS 过渡按真实时间跑，会在视频里一闪而过——关键窗口强制可见
  const uiForce = (t) => {
    const ui = g.ui;
    if (t > 4.4 && t < 8.4) ui.el.card.style.opacity = 1;        // 议程红帖
    if (t > 49 && t < 54.5) ui.el.subtitle.style.opacity = 1;    // 剪缆后字幕
  };
  window.__cineApply = (frame) => {
    const t = frame / FPS;
    uiForce(t);
    if (!a.ended) a.grace = 999; // 巡演豁免引座
    let i = 0;
    while (i < K.length - 1 && K[i + 1][0] <= t) i++;
    const A = K[i], B = K[Math.min(i + 1, K.length - 1)];
    const span = Math.max(1e-6, B[0] - A[0]);
    let s = Math.min(1, Math.max(0, (t - A[0]) / span));
    s = s * s * (3 - 2 * s);
    const p = g.player;
    p.pos.x = lerp(A[1], B[1], s);
    p.pos.z = lerp(A[2], B[2], s);
    let dy = B[3] - A[3];
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    p.yaw = A[3] + dy * s;
    p.pitch = lerp(A[4], B[4], s);
    p.seated = false;
    for (const ev of E) {
      if (!ev.done && t >= ev[0]) { ev.done = true; try { ev[1](); } catch (e) { console.log('ev err', e); } }
    }
  };
  // 单帧推进：设机位 + 解冻一个 rAF 周期（一次往返完成；截图自会强制合成）
  window.__stepFrame = (frame) => new Promise(res => {
    window.__cineApply(frame);
    window.__fixedDt = 1 / FPS;
    requestAnimationFrame(() => {
      window.__fixedDt = 0;
      res();
    });
  });
});

const TOTAL = 60 * 24;
const t0 = Date.now();
for (let f = 0; f < TOTAL; f++) {
  await page.evaluate((fr) => window.__stepFrame(fr), f);
  await page.screenshot({ path: join(FRAMES, `f${String(f).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 88 });
  if (f % 120 === 0) {
    const st = await page.evaluate(() => ({ beat: window.__agenda.beat, ended: window.__agenda.ended, fin: !!window.__agenda._finished }));
    console.log(`frame ${f}/${TOTAL}`, JSON.stringify(st), `${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
}
console.log('state:', await page.evaluate(() => ({ beat: window.__agenda.beat, ended: window.__agenda.ended, fin: !!window.__agenda._finished })));
await browser.close();
server.close();

mkdirSync(join(ROOT, 'media'), { recursive: true });
execSync(`ffmpeg -y -loglevel error -framerate 24 -i ${FRAMES}/f%05d.jpg -c:v libx264 -pix_fmt yuv420p -crf 23 -preset medium "${join(ROOT, 'media', 'demo_flythrough_60s.mp4')}"`);
console.log('video written:', join(ROOT, 'media', 'demo_flythrough_60s.mp4'));
process.exit(0);
