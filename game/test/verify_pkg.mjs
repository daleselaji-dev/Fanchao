// 发布包验证：用 Linux Electron 壳加载打包用 app 目录（与 win64 asar 同内容），
// 确认能启动、进拍 1、渲染出画面。用法：node test/verify_pkg.mjs <appDir>
import { _electron } from 'playwright-core';

const appDir = process.argv[2] || '/tmp/pkg/app';
const app = await _electron.launch({
  executablePath: new URL('../node_modules/.bin/electron', import.meta.url).pathname,
  args: [appDir, '--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  env: { ...process.env, DISPLAY: ':1' },
});
const page = await app.firstWindow();
await page.waitForFunction(() => !!window.__game && !!window.__agenda, null, { timeout: 60000 });
await page.locator('#startBtn').dispatchEvent('click');
const t0 = Date.now();
let beat1 = false;
while (Date.now() - t0 < 40000) {
  if (await page.evaluate(() => window.__agenda.beat >= 1)) { beat1 = true; break; }
  await page.waitForTimeout(400);
}
await page.waitForTimeout(2500);
await page.screenshot({ path: new URL('./shots/pkg_electron_boot.png', import.meta.url).pathname });
const version = await page.evaluate(() => document.title);
console.log(JSON.stringify({ beat1, title: version }));
await app.close();
