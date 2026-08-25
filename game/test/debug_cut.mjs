// 终局剪缆定位脚本：时间加速 + 探针轮询，不截图
import { chromium } from 'playwright-core';
import { readFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const MIME = { '.html': 'text/html', '.js': 'text/javascript' };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(8812, r));

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
page.on('pageerror', e => console.log('PAGEERROR:', e.message));

const ev = (fn, arg) => page.evaluate(fn, arg);
async function until(fn, timeout = 120000, poll = 500) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await ev(fn)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}
async function untilArg(fn, arg, timeout = 120000, poll = 500) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await page.evaluate(fn, arg)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}

await page.goto('http://localhost:8812/index.html');
const ready = await until(() => !!window.__game && !!window.__agenda, 60000);
console.log('game ready:', ready);
await page.waitForTimeout(1000);
await page.click('#startBtn');
const b1 = await until(() => window.__agenda.beat >= 1);
console.log('beat1:', b1, 'beat =', await ev(() => window.__agenda.beat));
await ev(() => { window.__timeScale = 3; });
console.log('started, timeScale=3');

const hops = [
  [[0, -11], 1.5], [[17, -6.2], 2], [[38, 17], 3], [[20, 22], 4], [[1, 22], 4.5], [[-13.5, -6], 5],
];
for (const [[x, z], target] of hops) {
  await ev(([x, z]) => {
    const a = window.__agenda;
    if (window.__game.player.seated) a.standUp();
    a.grace = 30;
    window.__game.player.teleport(x, z, 0);
  }, [x, z]);
  const ok = await untilArg((t) => window.__agenda.beat >= t, target);
  console.log('beat', target, ok ? 'ok' : 'TIMEOUT',
    JSON.stringify(await ev(() => [window.__agenda.beat, +window.__game.player.pos.x.toFixed(1), +window.__game.player.pos.z.toFixed(1)])));
  if (!ok) process.exit(1);
}
const throatOk = await until(() => window.__game.L.dyn.throat.visible, 90000);
console.log('throat:', throatOk);

const pre = await ev(() => {
  const g = window.__game;
  const a = window.__agenda;
  if (g.player.seated) a.standUp();
  a.grace = 60;
  const cord = g.sys.cords.find(c => c.tag === 'seatlock');
  const r1 = cord ? g.sys.grab(cord, 'a') : 'no-cord';
  const r2 = g.sys.hang(g.sys.hook('hE_free'));
  g.player.teleport(2.4, -12.4, 0.4);
  g.player.pitch = -0.05;
  return { r1, r2, held: !!g.sys.held };
});
console.log('pre:', JSON.stringify(pre));
await page.waitForTimeout(500);
await page.keyboard.down('e');
for (let i = 0; i < 60; i++) {
  await page.waitForTimeout(500);
  const st = await ev(() => ({
    cut: window.__cut, ended: window.__agenda.ended,
    eDown: window.__game.player.eDown,
    pos: [+window.__game.player.pos.x.toFixed(1), +window.__game.player.pos.z.toFixed(1)],
  }));
  console.log(i, JSON.stringify(st));
  if (st.ended) break;
}
await page.keyboard.up('e');
console.log('final ended:', await ev(() => window.__agenda.ended));
await browser.close();
server.close();
process.exit(0);
