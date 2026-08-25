// 自动化冒烟测试：启动 Demo → 驱动六拍主循环 → 截图存档
// 注意：headless SwiftShader 软渲染帧率低，游戏 dt 上限 0.05s → 游戏内时间约为真实时间的 1/3~1/5，
// 因此等待时长按放大系数处理，并用 __agenda 状态轮询代替固定等待。
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'test', 'shots');
mkdirSync(OUT, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png' };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(8811, r));

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
page.on('console', m => { if (m.type() === 'error' && !m.text().includes('404')) errors.push('CONSOLE: ' + m.text()); });

const shot = (name) => page.screenshot({ path: join(OUT, name) });
const ev = (fn) => page.evaluate(fn);
// 被引座后自动站起
async function unseat() {
  await ev(() => {
    const a = window.__agenda, g = window.__game;
    if (g.player.seated) a.standUp();
    // 进行中的引座（黑幕已起、落座回调未到）也取消并复位黑幕
    a.escorting = false;
    g.ui.fade(0, 0.5);
    a.grace = 10;
  });
}
// 等待游戏内条件
async function until(fn, timeout = 90000, poll = 800) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await ev(fn)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}

await page.goto('http://localhost:8811/index.html');
await page.waitForTimeout(2500);
await shot('01_title.png');
// v1.0 UI 元素在位
const uiDom = await ev(() => ({
  menu: !!document.getElementById('ctlBtn') && !!document.getElementById('pauseRestart'),
  reticle: !!document.getElementById('reticleWrap'),
  cutring: !!document.getElementById('cutring'),
  endCard: !!document.getElementById('endCard'),
}));

await page.click('#startBtn');
await until(() => window.__agenda && window.__agenda.beat >= 1);
// 等开场黑幕淡完再截
await until(() => +getComputedStyle(document.getElementById('fade')).opacity < 0.1, 30000);
await page.waitForTimeout(4000);
await shot('02_hall_spawn.png');

// —— 拍1：走到主桌 → 入席广播 ——
await ev(() => { window.__game.player.teleport(0, -11, 0); });
const b15 = await until(() => window.__agenda.beat >= 1.5);
await page.waitForTimeout(9000);
await shot('03_hall_maintable_announce.png');

// —— 主机制：摘拦门绳 → 挂空钩 ——
await ev(() => { const p = window.__game.player; p.teleport(11.5, -6, -Math.PI / 2 + 0.3); p.pitch = 0.05; });
await page.waitForTimeout(1500);
await shot('04_door_cord.png');
// 交互准星应处于「可摘」状态
const reticleGrab = await ev(() => document.getElementById('reticleWrap').className);
const grabbed = await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'doorE');
  if (!cord) return 'no-cord';
  g.sys.grab(cord, 'a');
  return g.sys.held ? 'held' : 'fail';
});
await page.waitForTimeout(600);
await shot('05_cord_held.png');
const hung = await ev(() => window.__game.sys.hang(window.__game.sys.hook('hE_free')) ? 'hung' : 'fail');
const doorEOpen = await ev(() => {
  // 屏障应已解除
  const bar = window.__game.L.colliders.find(c => c.minX === 14.4);
  return bar ? (bar.disabled ? 'open' : 'closed') : 'not-found';
});

// —— 拍2：走廊（侍应上绳） ——
await ev(() => { window.__game.player.teleport(17, -6.2, -Math.PI / 2); });
const b2 = await until(() => window.__agenda.beat >= 2);
await until(() => window.__game.waiters[0].state === 'ride');
await ev(() => { const p = window.__game.player; p.teleport(26, -6.9, -Math.PI / 2); p.pitch = 0.0; });
// 震惊节拍①：走廊灭灯横穿
const shock1 = await until(() => window.__agenda._shock1, 40000);
await page.waitForTimeout(2500);
await shot('06a_shock_corridor_blackout.png');
// 等灯光恢复
await until(() => (window.__agenda.lightMult.corridor ?? 1) > 0.4, 60000);
// 等侍应滑到镜头前
await until(() => Math.abs(window.__game.waiters[0].group.position.x - 30) < 5, 40000);
await shot('06_corridor_waiter_on_cord.png');
const waiterState = await ev(() => window.__game.waiters.map(w => `${w.id}:${w.state}:${w.visible}`).join(' '));

// —— 改挂巡逻绳（改道验证） ——
const reroute = await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c =>
    (c.a === g.sys.hook('hC2') && c.b === g.sys.hook('hC3')) ||
    (c.b === g.sys.hook('hC2') && c.a === g.sys.hook('hC3')));
  if (!cord) return 'no-c2c3';
  const end = cord.a === g.sys.hook('hC3') ? 'a' : 'b';
  g.sys.grab(cord, end);
  g.sys.hang(g.sys.hook('hAlcove'));
  return 'rerouted';
});
// 看 T02 CRT（电视在 26.5,-7.5，从东北侧看向它）
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(28, -5.2, 0.58); p.pitch = -0.12; });
await page.waitForTimeout(4000);
await shot('07_crt_t02.png');

// —— 拍3：大堂（返潮点火） ——
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(38, 17, Math.PI); });
const b3 = await until(() => window.__agenda.beat >= 3);
// 等点火完成（雾变浓）
await until(() => window.__game.L.dyn.fog.density > 0.02, 60000);
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(30, 27, 2.4); p.pitch = 0.06; });
await page.waitForTimeout(2500);
await shot('08_lobby_after_ignition.png');
// 等脚本点名
const gotCall = await until(() => window.__agenda.call.active, 160000);
await page.waitForTimeout(1200);
await shot('09_call_active.png');
// 寄挂
const parked = await ev(() => {
  const a = window.__agenda;
  if (!a.call.active) return 'no-call';
  window.__game.player.teleport(43.5, 24, Math.PI / 2);
  a.resolveCall();
  return 'parked';
});
const wristSegs = await ev(() => window.__game.wrist.segments);

// —— 出大堂：摘连廊拦门绳 ——
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'doorC');
  if (cord) { g.sys.grab(cord, 'a'); g.sys.hang(g.sys.hook('hLFree')); }
});

// —— 拍4：海洋馆玻璃廊 ——
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(20, 22, Math.PI / 2 + 0.35); p.pitch = 0.02; });
const b4 = await until(() => window.__agenda.beat >= 4);
await unseat();
await page.waitForTimeout(6000);
await shot('10_aquarium_corridor.png');
// 震惊节拍②：暗影撞玻璃
await ev(() => { const p = window.__game.player; p.teleport(14, 22, Math.PI - 0.5); p.pitch = -0.05; });
const shock2 = await until(() => window.__agenda._shock2, 30000);
await page.waitForTimeout(1800);
await shot('10a_shock_glass_slam.png');
await until(() => (window.__agenda.lightMult.aqua ?? 1) > 0.4, 40000);
// 闸门吊绳 → 绞盘（安静解法）
const gateRes = await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'gate');
  if (!cord) return 'no-gate-cord';
  g.sys.grab(cord, 'b');
  g.sys.hang(g.sys.hook('hWinch'));
  return 'winched';
});
const gateRose = await until(() => window.__game.L.dyn.gate.y > 3.2, 90000);
await ev(() => { const p = window.__game.player; p.teleport(7.5, 22, Math.PI / 2); p.pitch = 0.05; });
await page.waitForTimeout(1500);
await shot('11_gate_risen.png');

// —— 连廊（回眸客） ——
await ev(() => { const p = window.__game.player; p.teleport(1, 22, Math.PI / 2); });
await until(() => window.__agenda.beat >= 4.5);
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(-17.1, 13, 0); p.pitch = 0.0; });
await page.waitForTimeout(4000);
await shot('12_connector_gazer.png');
// 震惊节拍③：灯泡爆裂
await ev(() => { const p = window.__game.player; p.teleport(-17.1, 10, 0); });
const shock3 = await until(() => window.__agenda._shock3, 30000);
await page.waitForTimeout(1500);
await shot('12a_shock_bulb_burst.png');
const gazerVisible = await ev(() => window.__game.gazer.group.visible);

// —— 拍5：终局宴会厅（喉道化） ——
// 从这里起开 3 倍时间加速：终局的 after(5) 收网、剪缆长按、散场 after(4)
// 都按游戏时间推进，帧饥饿下 1 倍速要等数分钟。
await unseat();
await ev(() => { window.__timeScale = 3; const p = window.__game.player; p.teleport(-13.5, -6, Math.PI / 2 + 0.6); });
const b5 = await until(() => window.__agenda.beat >= 5);
const throatOk = await until(() => window.__game.L.dyn.throat.visible, 180000, 1200);
if (!throatOk) errors.push('TIMEOUT: throat/finale cord net never appeared');
await page.waitForTimeout(4000);
await unseat();
await ev(() => { const p = window.__game.player; p.teleport(0, -4.5, 0); p.pitch = 0.02; });
await page.waitForTimeout(2500);
await shot('13_finale_throat_hall.png');

// —— 摘捆席绳 → 剪缆 ——
await unseat();
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'seatlock');
  if (cord) { g.sys.grab(cord, 'a'); g.sys.hang(g.sys.hook('hE_free')); }
  g.player.teleport(2.4, -12.4, 0.4);
  g.player.pitch = -0.05;
});
await page.waitForTimeout(1500);
await shot('14_at_vip_seat.png');
// headless 帧饥饿：evaluate 轮询会挤占 rAF，游戏时间推进极慢。
// 剪缆需持续累积 2.2 游戏秒 → 时间加速 + 低频轮询。
// 恢复循环：豁免引座（grace 刷新）+ 拉回席位 + 若捆席绳被复原则重新摘挂。
await page.keyboard.down('e');
let cutOk = false;
let cutRingSeen = false;
const cutSamples = [];
{
  const t0 = Date.now();
  while (Date.now() - t0 < 240000) {
    const st = await ev(() => {
      const a = window.__agenda, g = window.__game;
      a.grace = 30;
      if (g.player.seated) { a.standUp(); a.grace = 30; }
      const p = g.player.pos;
      if (Math.hypot(p.x - 2.1, p.z + 13.5) > 1.8) g.player.teleport(2.4, -12.4, 0.4);
      // 捆席绳仍锁着 → 补一次摘/挂（模拟玩家操作）
      const lock = g.sys.cords.find(c => c.tag === 'seatlock');
      if (lock && !lock.heldEnd && !g.sys.held &&
        ((lock.a === g.sys.hook('hMainA') && lock.b === g.sys.hook('hMainB')) ||
          (lock.a === g.sys.hook('hMainB') && lock.b === g.sys.hook('hMainA')))) {
        g.sys.grab(lock, 'a');
        g.sys.hang(g.sys.hook('hE_free'));
      }
      return {
        cut: window.__cut, ended: a.ended,
        ring: +getComputedStyle(document.getElementById('cutring')).opacity,
      };
    });
    cutSamples.push(st.cut);
    if (st.ring > 0.5) cutRingSeen = true;
    if (st.ended) { cutOk = true; break; }
    await page.waitForTimeout(1500);
  }
}
await page.keyboard.up('e');
await page.waitForTimeout(5000);
await shot('15_after_cut.png');

// —— 散场 ——
await until(() => !!window.__game.L.dyn.doorSOpen, 120000, 1500);
await ev(() => { const p = window.__game.player; p.teleport(0, -2, Math.PI); p.pitch = 0.0; });
await page.waitForTimeout(6000);
await shot('16_exit_doors.png');
await ev(() => { const p = window.__game.player; p.teleport(0, 6.2, Math.PI); });
const finished = await until(() => !!window.__agenda._finished, 120000, 1500);
// 结算卡在 _goodEnd 后 3.2 游戏秒才出现 → 等 DOM 可见再截
await until(() => {
  const e = document.getElementById('end');
  return e && e.style.display !== 'none' && +getComputedStyle(e).opacity > 0.8;
}, 90000, 1500);
await page.waitForTimeout(1500);
await shot('17_good_end.png');

console.log(JSON.stringify({
  uiDom, reticleGrab, b15, grabbed, hung, doorEOpen, b2, shock1, waiterState, reroute, b3, gotCall, parked, wristSegs,
  b4, shock2, gateRes, gateRose, gazerVisible, shock3, b5, cutOk, cutRingSeen, finished,
  cutSamples: cutSamples.filter((_, i) => i % 5 === 0).slice(-6),
  errors: errors.slice(0, 12),
}, null, 2));

await browser.close();
server.close();
process.exit(errors.length > 0 ? 2 : 0);
