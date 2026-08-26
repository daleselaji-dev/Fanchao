// 震惊①招牌画面补拍：走廊灭灯后全黑中自发光绳网 + 侍应贴身滑过
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
await new Promise(r => server.listen(8821, r));
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome', headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const ev = (fn) => page.evaluate(fn);
async function until(fn, timeout = 90000, poll = 600) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await ev(fn)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}
await page.goto('http://localhost:8821/index.html');
await page.waitForTimeout(2500);
await page.click('#startBtn');
await until(() => window.__agenda && window.__agenda.beat >= 1);
await ev(() => {
  const g = window.__game, a = window.__agenda;
  a.grace = 9999;
  const p = g.player;
  p.teleport(24.5, -7.5, -Math.PI / 2 - 0.12); p.pitch = 0.14;
  for (const id of ['card', 'subtitle', 'prompt', 'objective']) {
    const el = g.ui.el[id]; if (el) { el.style.transition = 'none'; el.style.opacity = 0; }
  }
  a._shockCorridor(); // 真实演出：逐管熄灭 → 全黑 → 绳网自发光 → 侍应滑过
});
// 等全黑 + 绳自发光
await until(() => {
  const g = window.__game, a = window.__agenda;
  const dark = g.L.dyn.tubes.filter(t => t.light.position.z < 0).every(t => t.light.intensity < 0.01);
  return dark && g.sys.cords.some(c => c.mat.emissiveIntensity > 2);
}, 120000);
await ev(() => { for (const id of ['card', 'subtitle']) { const el = window.__game.ui.el[id]; if (el) el.style.opacity = 0; } });
await page.waitForTimeout(400);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_shock1.png') });
// 等侍应滑到镜头附近再拍一张
await until(() => Math.abs(window.__game.waiters[0].group.position.x - 25.5) < 3.5, 60000);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_shock1_waiter.png') });
console.log('done');
await browser.close(); server.close(); process.exit(0);
