// Round4 交互手感验证：真实按键路径（keydown E）走「摘→挂」，并验证涟漪/FOV冲击/屏缘威胁指示
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'test', 'peek');
mkdirSync(OUT, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png' };
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
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));

const ev = (fn) => page.evaluate(fn);
async function until(fn, timeout = 60000, poll = 500) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await ev(fn)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}

await page.goto('http://localhost:8811/index.html'.replace('8811', '8813'));
await page.waitForTimeout(2500);
await page.click('#startBtn');
await until(() => window.__agenda && window.__agenda.beat >= 1);
await until(() => +getComputedStyle(document.getElementById('fade')).opacity < 0.1, 30000);

const R = {};

// —— 1. 摘绳（真实 E 键）：站到拦门绳 A 结正前方 ——
await ev(() => {
  const p = window.__game.player;
  // 结 A 在 (14.72,1.5,-4.0)；站 (13.3,-4.0) 望向 +X（yaw=-PI/2），眼高≈1.62 → 微俯
  p.teleport(13.3, -4.0, -Math.PI / 2);
  p.pitch = -0.08;
});
await page.waitForTimeout(1200);
R.reticleBefore = await ev(() => document.getElementById('reticleWrap').className);
R.promptBefore = await ev(() => document.getElementById('prompt').textContent.trim());
// 目标结应有呼吸放大（scale > 1.1）
R.knotScale = await ev(() => {
  const c = window.__game.sys.cords.find(c => c.tag === 'doorE');
  return c ? +Math.max(c.knotA.scale.x, c.knotB.scale.x).toFixed(2) : 'no-cord';
});
await page.screenshot({ path: join(OUT, 'r4a_aim_grab.png') });
await page.keyboard.press('KeyE');
R.held = await until(() => !!window.__game.sys.held, 8000, 200);
R.rippleClass = await ev(() => document.getElementById('ripple')?.className ?? 'missing');
R.fovKick = await ev(() => +window.__game.player.camera.fov.toFixed(2));
await page.screenshot({ path: join(OUT, 'r4b_grabbed.png') });

// —— 2. 挂钩（真实 E 键）：转向空钩 hE_free (14.72,1.6,-1.6) ——
await ev(() => {
  const p = window.__game.player;
  p.teleport(13.3, -1.6, -Math.PI / 2);
  p.pitch = -0.02;
});
await page.waitForTimeout(900);
R.reticleHang = await ev(() => document.getElementById('reticleWrap').className);
await page.screenshot({ path: join(OUT, 'r4c_aim_hang.png') });
await page.keyboard.press('KeyE');
R.hung = await until(() => !window.__game.sys.held, 8000, 200);
R.doorOpen = await ev(() => {
  const bar = window.__game.L.colliders.find(c => c.minX === 14.4);
  return bar ? !!bar.disabled : 'not-found';
});

// —— 3. 滞回吸附：微偏视线后目标不应立刻丢失 ——
await ev(() => {
  const p = window.__game.player;
  p.teleport(13.3, -1.6, -Math.PI / 2);   // 现在 hE_free 上挂着绳，结就在钩上
  p.pitch = -0.02;
});
await until(() => document.getElementById('reticleWrap').className === 'ret-grab', 8000, 200);
const aimOn = await ev(() => document.getElementById('reticleWrap').className);
await ev(() => { window.__game.player.yaw += 0.34; }); // 偏 ~19.5°（dot≈0.94 > 0.5，滞回应保持）
await page.waitForTimeout(900);
const aimOff = await ev(() => document.getElementById('reticleWrap').className);
R.sticky = { aimOn, afterDeviation: aimOff };

// —— 4. 屏缘威胁指示：强制侍应在玩家右侧警戒 ——
await ev(() => {
  const g = window.__game, p = g.player;
  p.teleport(25, -6.2, -Math.PI / 2); p.pitch = 0;
  const w = g.waiters[0];
  w.setVisible(true);
  w.group.position.set(25, 0, -10.5);   // 玩家南侧（面朝 +X → 左手侧）
  w.state = 'alert'; w.alertTimer = 99;
});
await until(() => +window.__game.ui.el.threatL.style.opacity > 0.3, 8000, 300);
R.threat = await ev(() => ({
  L: window.__game.ui.el.threatL.style.opacity,
  R: window.__game.ui.el.threatR.style.opacity,
}));
await page.screenshot({ path: join(OUT, 'r4d_threat_edge.png') });

console.log(JSON.stringify(R, null, 2));
console.log('errors:', errors.length ? errors : 'none');
await browser.close();
server.close();
process.exit(errors.length ? 1 : 0);
