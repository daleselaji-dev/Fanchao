// 快速视觉检查：多机位截图（开发迭代用，不属于冒烟测试）
import { chromium } from 'playwright-core';
import { mkdirSync, readFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { join, extname } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'test', 'peek');
mkdirSync(OUT, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript' };
const server = createServer((req, res) => {
  let p = join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (p.endsWith('/')) p += 'index.html';
  if (!existsSync(p)) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[extname(p)] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise(r => server.listen(8822, r));

const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const errors = [];
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE: ' + m.text()); });

await page.goto('http://localhost:8822/index.html');
await page.waitForTimeout(2500);
await page.screenshot({ path: join(OUT, 'p00_title.png') });
await page.click('#startBtn');
await page.waitForTimeout(3000);

// 机位列表 [x, z, yaw, pitch, 名字, 额外脚本]
const views = JSON.parse(process.argv[2] || 'null') || [
  [0, -4, Math.PI, 0.02, 'p01_hall'],
  [10, -6, -Math.PI / 2, 0.0, 'p02_hall_east'],
  [18, -6.2, -Math.PI / 2, 0.0, 'p03_corridor'],
  [38, 16.5, Math.PI * 0.98, 0.05, 'p04_lobby'],
  [20, 22, Math.PI / 2 + 0.3, 0.02, 'p05_aqua'],
  [-17.1, 16, 0, 0.0, 'p06_connector'],
];
for (const [x, z, yaw, pitch, name] of views) {
  await page.evaluate(([x, z, yaw, pitch]) => {
    const p = window.__game.player;
    p.teleport(x, z, yaw);
    p.pitch = pitch;
  }, [x, z, yaw, pitch]);
  await page.waitForTimeout(1400);
  await page.screenshot({ path: join(OUT, name + '.png') });
}
console.log(JSON.stringify({ errors: errors.slice(0, 8) }));
await browser.close();
server.close();
