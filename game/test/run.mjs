// 自动化冒烟测试：启动 Demo → 驱动六拍主循环 → 截图存档
// 用法：node test/run.mjs
import { chromium } from 'playwright-core';
import { mkdirSync } from 'fs';
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
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
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

await page.goto('http://localhost:8811/index.html');
await page.waitForTimeout(2500);
await page.screenshot({ path: join(OUT, '01_title.png') });

// 开席
await page.click('#startBtn');
await page.waitForTimeout(4000);
const shot = async (name) => page.screenshot({ path: join(OUT, name) });
const ev = (fn) => page.evaluate(fn);
await shot('02_hall_spawn.png');

// 走到主桌 → 议程二
await ev(() => { window.__game.player.teleport(0, -11, 0); });
await page.waitForTimeout(6000);
await shot('03_hall_maintable_announce.png');

// 看东门拦门绳
await ev(() => { const p = window.__game.player; p.teleport(11.5, -6, -Math.PI / 2 + 0.3); p.pitch = 0.05; });
await page.waitForTimeout(1200);
await shot('04_door_cord.png');

// 摘拦门绳 → 挂到空钩（模拟主机制）
const grabbed = await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'doorE');
  if (!cord) return 'no-cord';
  g.sys.grab(cord, 'a');
  return g.sys.held ? 'held' : 'fail';
});
await page.waitForTimeout(800);
await shot('05_cord_held.png');
const hung = await ev(() => {
  const g = window.__game;
  const ok = g.sys.hang(g.sys.hook('hE_free'));
  return ok ? 'hung' : 'fail';
});

// 进走廊 → 议程三（侍应上线）
await ev(() => { window.__game.player.teleport(17, -6.2, -Math.PI / 2); });
await page.waitForTimeout(6000);
await ev(() => { const p = window.__game.player; p.teleport(24, -6.2, -Math.PI / 2); p.pitch = 0.0; });
await page.waitForTimeout(2500);
await shot('06_corridor_waiter_on_cord.png');
const waiterState = await ev(() => window.__game.waiters.map(w => `${w.id}:${w.state}:${w.visible}`).join(' '));

// 看 T02 CRT 预现
await ev(() => { const p = window.__game.player; p.teleport(27.5, -5.4, Math.PI * 0.72); p.pitch = -0.12; });
await page.waitForTimeout(1500);
await shot('07_crt_t02.png');

// 进大堂 → 议程四（返潮点火）
await ev(() => { const p = window.__game.player; p.teleport(38, 17, Math.PI); p.pitch = 0.06; });
await page.waitForTimeout(9000);
await ev(() => { const p = window.__game.player; p.teleport(33, 26, Math.PI * 1.0); p.pitch = 0.04; p.yaw = 2.6; });
await page.waitForTimeout(3000);
await shot('08_lobby_after_ignition.png');
const beat3 = await ev(() => window.__agenda.beat);
// 点名应已触发或即将触发 → 等待并寄挂
await page.waitForTimeout(6000);
await shot('09_call_active.png');
const callState = await ev(() => window.__agenda.call.active);
await ev(() => {
  const g = window.__game;
  g.player.teleport(43.5, 24, Math.PI / 2);
});
await page.waitForTimeout(400);
const parked = await ev(() => {
  const a = window.__agenda;
  if (a.call.active) { a.resolveCall(); return 'parked'; }
  return 'no-call';
});

// 摘大堂拦门绳去连廊
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'doorC');
  if (cord) { g.sys.grab(cord, 'a'); g.sys.hang(g.sys.hook('hLFree')); }
});

// 海洋馆玻璃廊 → 议程五
await ev(() => { const p = window.__game.player; p.teleport(20, 22, Math.PI / 2 + 0.35); p.pitch = 0.02; });
await page.waitForTimeout(7000);
await shot('10_aquarium_corridor.png');
// 闸门吊绳挂到绞盘（安静解法）
const gateRes = await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'gate');
  if (!cord) return 'no-gate-cord';
  g.sys.grab(cord, 'b');
  g.sys.hang(g.sys.hook('hWinch'));
  return 'winched';
});
await page.waitForTimeout(8000);
const gateY = await ev(() => window.__game.L.dyn.gate.y.toFixed(2));
await ev(() => { const p = window.__game.player; p.teleport(6.5, 22, Math.PI / 2); });
await page.waitForTimeout(1000);
await shot('11_gate_rising.png');

// 连廊（回眸客）
await ev(() => { const p = window.__game.player; p.teleport(1, 22, Math.PI / 2); });
await page.waitForTimeout(1000);
await ev(() => { const p = window.__game.player; p.teleport(-17.1, 12, Math.PI); });
await page.waitForTimeout(3000);
await shot('12_connector_gazer.png');

// 回宴会厅 → 议程六（送入洞房 / 喉道化）
await ev(() => { const p = window.__game.player; p.teleport(-13.5, -6, Math.PI / 2 + 0.6); });
await page.waitForTimeout(9000);
await ev(() => { const p = window.__game.player; p.teleport(-8, -8, 1.9); p.pitch = 0.02; });
await page.waitForTimeout(2500);
await shot('13_finale_throat_hall.png');
const beat5 = await ev(() => window.__agenda.beat);

// 摘捆席绳 + 剪缆
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'seatlock');
  if (cord) { g.sys.grab(cord, 'a'); g.sys.hang(g.sys.hook('hE_free')); }
  g.player.teleport(2.1, -12.2, 0.3);
});
await page.waitForTimeout(1000);
await shot('14_at_vip_seat.png');
await page.keyboard.down('e');
await page.waitForTimeout(3000);
await page.keyboard.up('e');
await page.waitForTimeout(3000);
const ended = await ev(() => window.__agenda.ended);
await shot('15_after_cut.png');

// 散场
await ev(() => { const p = window.__game.player; p.teleport(0, -2, Math.PI); });
await page.waitForTimeout(4000);
await ev(() => { const p = window.__game.player; p.teleport(0, 6.2, Math.PI); });
await page.waitForTimeout(5000);
await shot('16_good_end.png');
const finished = await ev(() => !!window.__agenda._finished);

console.log(JSON.stringify({
  grabbed, hung, waiterState, beat3, callState, parked, gateRes, gateY, beat5, ended, finished,
  errors: errors.slice(0, 12),
}, null, 2));

await browser.close();
server.close();
process.exit(errors.length > 0 ? 2 : 0);
