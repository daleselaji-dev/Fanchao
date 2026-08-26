// 侍应特写补拍：白手套/黑领结/胸牌/闭目浅笑（亮处正面）
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
await new Promise(r => server.listen(8816, r));
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome', headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage({ viewport: { width: 1152, height: 648 } });
const ev = (fn) => page.evaluate(fn);
await page.goto('http://localhost:8816/index.html');
await page.waitForTimeout(2500);
await page.click('#startBtn');
const t0 = Date.now();
while (Date.now() - t0 < 60000) {
  if (await ev(() => window.__agenda && window.__agenda.beat >= 1)) break;
  await page.waitForTimeout(500);
}
await ev(() => {
  const g = window.__game;
  const w = g.waiters[0];
  w.setVisible(true);
  // 主桌旁亮处；玩家在其 +Z 侧 1.9m，yaw=0 看向 -Z
  w.group.position.set(2.5, 0, -11.5);
  w.group.rotation.y = 0;  // atan2(dx,dz)=0 → 面向 +Z（即面向玩家）
  w.yaw = 0;
  w.state = 'stand'; w.standTimer = 999;
  const p = g.player;
  p.teleport(2.5, -10.35, 0);
  p.pitch = -0.02;
  // 摄影补光：克隆一盏现成点光贴在机位旁（仅拍摄用）
  const proto = g.L.lights.hall.find(l => l.isPointLight);
  const fill = proto.clone();
  fill.color.setHex(0xffd9b0);
  fill.intensity = 5; fill.distance = 5; fill.castShadow = false;
  fill.position.set(3.3, 1.85, -10.3); // 45° 侧上方主光（有立体阴影）
  g.scene.add(fill);
  // 清场 UI：红帖/字幕/提示不入镜
  for (const id of ['card', 'subtitle', 'prompt', 'objective']) {
    const el = g.ui.el[id]; if (el) { el.style.transition = 'none'; el.style.opacity = 0; }
  }
});
await page.waitForTimeout(2200);
await ev(() => { for (const id of ['card', 'subtitle']) { const el = window.__game.ui.el[id]; if (el) el.style.opacity = 0; } });
await page.waitForTimeout(300);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_waiter.png') });
// 侧 45° 机位（看清托盘与胸牌立体感）
await ev(() => {
  const g = window.__game, w = g.waiters[0];
  w.state = 'stand'; w.standTimer = 999;
  const p = g.player;
  p.teleport(3.9, -10.1, Math.PI / 4); // 东北侧，yaw=π/4 → lookDir(-0.7,·,-0.7) 朝西南
  p.pitch = 0.1;
});
await page.waitForTimeout(1500);
await page.screenshot({ path: join(ROOT, 'test', 'peek', 'r6_waiter_b.png') });
await browser.close(); server.close(); process.exit(0);
