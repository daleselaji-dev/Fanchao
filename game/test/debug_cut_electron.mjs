// Electron 下剪缆定位：直奔终局 + 探针采样
import { _electron } from 'playwright-core';

const app = await _electron.launch({
  executablePath: '/workspace/game/node_modules/.bin/electron',
  args: ['/tmp/fanchao-app', '--no-sandbox'],
  env: { ...process.env, DISPLAY: ':1' },
});
const page = await app.firstWindow();
const ev = (fn, arg) => page.evaluate(fn, arg);
await page.waitForFunction(() => !!window.__game && !!window.__agenda, null, { timeout: 60000 });

async function untilArg(fn, arg, timeout = 60000, poll = 300) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeout) {
    if (await page.evaluate(fn, arg)) return true;
    await page.waitForTimeout(poll);
  }
  return false;
}

await page.locator('#startBtn').dispatchEvent('click');
console.log('b1:', await untilArg((t) => window.__agenda.beat >= t, 1));

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
  console.log('beat', target, ok ? 'ok' : 'TIMEOUT');
  if (!ok) process.exit(1);
}
console.log('throat:', await untilArg(() => window.__game.L.dyn.throat.visible, null, 60000));

const pre = await ev(() => {
  const g = window.__game, a = window.__agenda;
  if (g.player.seated) a.standUp();
  a.grace = 60;
  const cord = g.sys.cords.find(c => c.tag === 'seatlock');
  const r1 = cord ? g.sys.grab(cord, 'a') : 'no-cord';
  const r2 = g.sys.hang(g.sys.hook('hE_free'));
  g.player.teleport(2.4, -12.4, 0.4);
  g.player.pitch = -0.05;
  return { r1, r2 };
});
console.log('pre:', JSON.stringify(pre));
await page.waitForTimeout(500);
await page.keyboard.down('e');
for (let i = 0; i < 30; i++) {
  await page.waitForTimeout(700);
  const st = await ev(() => {
    window.__agenda.grace = 60;
    return { cut: window.__cut, ended: window.__agenda.ended, eDown: window.__game.player.eDown };
  });
  console.log(i, JSON.stringify(st));
  if (st.ended) break;
}
await page.keyboard.up('e');
console.log('final:', await ev(() => window.__agenda.ended));
await app.close();
