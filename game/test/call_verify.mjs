// 点名寄挂机制定向验证：triggerCall → 腕绳亮 → resolveCall 寄挂 → 段数递减
import { chromium } from 'playwright-core';
import { readFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.png': 'image/png' };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(8820, r));
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome', headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const errors = [];
page.on('pageerror', e => errors.push(e.message));
const ev = (fn) => page.evaluate(fn);
async function until(fn, timeout = 60000, poll = 500) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await ev(fn)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}
await page.goto('http://localhost:8820/index.html');
await page.waitForTimeout(2500);
await page.click('#startBtn');
await until(() => window.__agenda && window.__agenda.beat >= 1);

const R = {};
R.segsBefore = await ev(() => window.__game.wrist.segments);
await ev(() => { window.__agenda.grace = 999; window.__agenda.triggerCall(true); });
R.callActive = await until(() => window.__agenda.call.active, 15000, 300);
// 腕绳应在点名时进入发亮状态（emissive 提升）
R.wristGlow = await ev(() => {
  const w = window.__game.wrist;
  return w.mat ? +w.mat.emissiveIntensity.toFixed(2) : 'no-mat';
});
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_call.png') });
await ev(() => { window.__game.player.teleport(43.5, 24, Math.PI / 2); window.__agenda.resolveCall(); });
await page.waitForTimeout(1200);
R.callEnded = await ev(() => !window.__agenda.call.active);
R.segsAfter = await ev(() => window.__game.wrist.segments);
console.log(JSON.stringify(R, null, 2));
console.log('errors:', errors.length ? errors : 'none');
await browser.close(); server.close();
process.exit(errors.length || !R.callActive || !R.callEnded || R.segsAfter >= R.segsBefore ? 1 : 0);
