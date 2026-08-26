// 实体特写补拍（面部朝向修复后）：司仪 / 新娘 / 回眸客
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
await new Promise(r => server.listen(8819, r));
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome', headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const ev = (fn) => page.evaluate(fn);
await page.goto('http://localhost:8819/index.html');
await page.waitForTimeout(2500);
await page.click('#startBtn');
const t0 = Date.now();
while (Date.now() - t0 < 60000) {
  if (await ev(() => window.__agenda && window.__agenda.beat >= 1)) break;
  await page.waitForTimeout(500);
}
await ev(() => {
  const g = window.__game;
  for (const id of ['card', 'subtitle', 'prompt', 'objective']) {
    const el = g.ui.el[id]; if (el) { el.style.transition = 'none'; el.style.opacity = 0; }
  }
});

// —— 司仪：舞台前 1.8m 仰拍（他在 0.6 台上）——
await ev(() => {
  const g = window.__game;
  const p = g.player;
  p.teleport(0, -16.3, 0); p.pitch = 0.32;
  const proto = g.L.lights.hall.find(l => l.isPointLight);
  const fill = proto.clone();
  fill.color.setHex(0xffdcb6); fill.intensity = 4; fill.distance = 5; fill.castShadow = false;
  fill.position.set(0.8, 2.4, -17.0);
  g.scene.add(fill);
  window.__fill = fill;
  g.mc.speak(30); // 口部钙化蠕动入镜
});
await page.waitForTimeout(2000);
await ev(() => { for (const id of ['card', 'subtitle']) { const el = window.__game.ui.el[id]; if (el) el.style.opacity = 0; } });
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_mc.png') });

// —— 新娘：主桌旁强制 show，正面 1.6m ——
await ev(() => {
  const g = window.__game;
  g.bride.show(-2.5, -11.5, 0); // yaw=0 面向 +Z
  const p = g.player;
  p.teleport(-2.5, -9.9, 0); p.pitch = 0.06;
  window.__fill.position.set(-1.8, 1.8, -10.4);
});
await page.waitForTimeout(1600);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_bride.png') });

// —— 回眸客：连廊 appearAt，侧后 45°（她永远面向你）——
await ev(() => {
  const g = window.__game;
  g.gazer.appearAt(-17.1, 11.5);
  const p = g.player;
  p.teleport(-17.1, 14.2, 0); p.pitch = 0.04;
  window.__fill.position.set(-17.6, 1.9, 13.2);
  window.__fill.intensity = 2.2;
});
await page.waitForTimeout(2600);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_gazer.png') });

console.log('done');
await browser.close(); server.close(); process.exit(0);
