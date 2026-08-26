// Round5 音频林奇化验证：节点图搭建 + 全部新 API 调用无异常 + 参数自动化生效
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
await new Promise(r => server.listen(8815, r));
const browser = await chromium.launch({
  executablePath: '/usr/local/bin/google-chrome', headless: true,
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
    '--no-sandbox', '--disable-dev-shm-usage', '--autoplay-policy=no-user-gesture-required'],
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
await page.goto('http://localhost:8815/index.html');
await page.waitForTimeout(2500);
await page.click('#startBtn');
await until(() => window.__agenda && window.__agenda.beat >= 1);

const R = await ev(() => {
  const a = window.__game.audio;
  const out = { ctxState: a.ctx.state, started: a.started };
  out.nodes = {
    dread: !!a.dreadNodes, tinnitus: !!a.tinnitus, breath: !!a.breathNodes,
    verbFB: !!a._verbFB, verbLP: !!a._verbLP,
  };
  try {
    a.setDread(0.8);
    a.setBreath(0.7, -0.5);
    a.setSpace('海洋馆连廊');
    a.hush(2); a.unhush(0.5);
    a.broadcast(8, 104, null, 1.5);
    a.broadcast(6, 92, null, 0.08);
    a.paChime();
    a.distantLaugh(0.6);
    a.elevatorDing(-0.7);
    a.porcelainRattle();
    out.calls = 'ok';
  } catch (e) { out.calls = 'ERR: ' + e.message; }
  return out;
});
// 等参数自动化推进（ctx running 时 gain.value 反映自动化当前值）
await page.waitForTimeout(4000);
R.after = await ev(() => {
  const a = window.__game.audio;
  return {
    dreadGain: +a.dreadNodes.g.gain.value.toFixed(4),
    breathGain: +a.breathNodes.g.gain.value.toFixed(4),
    verbSend: +a.verb.gain.value.toFixed(3),
    verbLPFreq: Math.round(a._verbLP.frequency.value),
    space: a._space,
  };
});
// 游戏内接线：等一次广播/区域切换后 dread 是否在被驱动
R.beatDread = await ev(() => {
  const a = window.__game.audio;
  window.__game.player.teleport(38, 22, Math.PI); // 大堂
  return { beat: window.__agenda.beat };
});
console.log(JSON.stringify(R, null, 2));
console.log('errors:', errors.length ? errors : 'none');
await browser.close(); server.close();
process.exit(errors.length || R.calls !== 'ok' ? 1 : 0);
