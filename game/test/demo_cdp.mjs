// 实机演示编排：playwright 启动 Electron，做平滑运镜巡演（配合录屏）
import { _electron } from 'playwright-core';

const app = await _electron.launch({
  executablePath: '/workspace/game/node_modules/.bin/electron',
  args: ['/tmp/fanchao-app', '--no-sandbox'],
  env: { ...process.env, DISPLAY: ':1' },
});
const page = await app.firstWindow();
const ev = (fn, arg) => page.evaluate(fn, arg);
await page.waitForFunction(() => !!window.__game && !!window.__agenda, null, { timeout: 60000 });

// 页面内注入平滑运镜协程
await ev(() => {
  const g = window.__game;
  window.__fly = (x, z, yaw, pitch, dur) => new Promise(res => {
    const p = g.player;
    const x0 = p.pos.x, z0 = p.pos.z, y0 = p.yaw, pi0 = p.pitch;
    let dy = yaw - y0;
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    const t0 = performance.now();
    const step = () => {
      const t = Math.min(1, (performance.now() - t0) / (dur * 1000));
      const s = t * t * (3 - 2 * t); // smoothstep
      p.pos.x = x0 + (x - x0) * s;
      p.pos.z = z0 + (z - z0) * s;
      p.yaw = y0 + dy * s;
      p.pitch = pi0 + (pitch - pi0) * s;
      if (t < 1) requestAnimationFrame(step); else res();
    };
    step();
  });
  window.__go = async (list) => {
    for (const [x, z, yaw, pitch, dur, hold] of list) {
      await window.__fly(x, z, yaw, pitch, dur);
      await new Promise(r => setTimeout(r, hold * 1000));
    }
  };
});

const beat = () => ev(() => window.__agenda.beat);
async function waitBeat(t, ms = 60000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    if (await beat() >= t) return true;
    await page.waitForTimeout(300);
  }
  return false;
}

console.log('connected, beat =', await beat());
if (await beat() < 1) {
  await page.locator('#startBtn').dispatchEvent('click');
  await waitBeat(1, 30000);
  await page.waitForTimeout(2500); // 开场淡入
}

// ---- 第一幕：大厅推进主桌，触发入席广播 ----
await ev(() => { window.__agenda.grace = 20; });
await ev(() => window.__go([[0, -8.5, Math.PI, 0.02, 3.2, 0.6]]));
await waitBeat(1.5);
await page.waitForTimeout(5200); // 红帖卡 + 广播

// ---- 第二幕：东门红绳特写 → 摘绳挂钩 ----
await ev(() => window.__go([[11.2, -6.0, -Math.PI / 2 + 0.28, 0.04, 3.0, 1.2]]));
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'doorE');
  if (cord) g.sys.grab(cord, 'a');
});
await page.waitForTimeout(1600);
await ev(() => { const g = window.__game; g.sys.hang(g.sys.hook('hE_free')); });
await page.waitForTimeout(1400);

// ---- 第三幕：服务走廊，侍应上绳滑行 ----
await ev(() => window.__go([[17, -6.2, -Math.PI / 2, 0.0, 2.6, 0.4]]));
await waitBeat(2);
await ev(() => window.__go([[24.5, -6.9, -Math.PI / 2, 0.0, 2.4, 0.3]]));
// 等侍应滑到面前
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    const w = window.__game.waiters[0];
    if ((w.state === 'ride' && Math.abs(w.group.position.x - 28) < 6) || performance.now() - t0 > 25000) res();
    else setTimeout(chk, 300);
  };
  chk();
}));
await page.waitForTimeout(2500);

// ---- 第四幕：大堂点火 + 点名寄挂 ----
await ev(() => window.__go([[34, 10, Math.PI, 0.0, 2.6, 0.3], [38, 17, Math.PI * 0.9, 0.02, 2.2, 0.5]]));
await waitBeat(3);
await page.waitForTimeout(9000); // 点火演出（灯光沉降/雾）
await ev(() => { window.__agenda.grace = 20; window.__agenda.triggerCall(true); });
await page.waitForTimeout(4500); // 腕绳发光 + 红脉冲
await ev(() => window.__go([[43.5, 24, Math.PI / 2, 0.05, 2.2, 0.4]]));
await ev(() => { if (window.__agenda.call.active) window.__agenda.resolveCall(); });
await page.waitForTimeout(2500);

// ---- 第五幕：海洋馆玻璃廊 + 闸门绞盘 ----
await ev(() => { window.__agenda.grace = 30; });
await ev(() => window.__go([[20, 22, Math.PI / 2 + 0.35, 0.02, 3.0, 0.8]]));
await waitBeat(4);
await page.waitForTimeout(4000);
await ev(() => {
  const g = window.__game;
  const cord = g.sys.cords.find(c => c.tag === 'gate');
  if (cord) { g.sys.grab(cord, 'b'); g.sys.hang(g.sys.hook('hWinch')); }
});
await ev(() => window.__go([[13, 22, Math.PI / 2, 0.06, 2.4, 0.3]]));
// 等闸门升起
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    if (window.__game.L.dyn.gate.y > 3.2 || performance.now() - t0 > 30000) res();
    else setTimeout(chk, 300);
  };
  chk();
}));
await page.waitForTimeout(1500);

// ---- 第六幕：员工连廊回眸客 → 终局喉道化 ----
await ev(() => window.__go([[1, 22, Math.PI / 2, 0.0, 2.2, 0.2]]));
await waitBeat(4.5);
await ev(() => window.__go([[-17.1, 12, 0, 0.0, 2.6, 2.2]])); // 看回眸客
await ev(() => { window.__agenda.grace = 30; });
await ev(() => window.__go([[-13.5, -6, Math.PI / 2 + 0.6, 0.0, 2.6, 0.3]]));
await waitBeat(5);
// 等喉道化收网完成
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    if (window.__game.L.dyn.throat.visible || performance.now() - t0 > 40000) res();
    else setTimeout(chk, 300);
  };
  chk();
}));
await ev(() => { window.__agenda.grace = 60; if (window.__game.player.seated) window.__agenda.standUp(); });
await ev(() => window.__go([[0, -4.5, 0, 0.02, 3.0, 3.0]])); // 环视终局大厅

// ---- 第七幕：摘捆席绳 → 席前长按剪缆 → 散场 ----
await ev(() => {
  const g = window.__game;
  const lock = g.sys.cords.find(c => c.tag === 'seatlock');
  if (lock && !g.sys.held) { g.sys.grab(lock, 'a'); g.sys.hang(g.sys.hook('hE_free')); }
});
await ev(() => window.__go([[2.4, -12.4, 0.4, -0.05, 2.4, 0.6]]));
await page.keyboard.down('e');
// 等剪断
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    window.__agenda.grace = 60;
    if (window.__agenda.ended || performance.now() - t0 > 30000) res();
    else setTimeout(chk, 300);
  };
  chk();
}));
await page.keyboard.up('e');
console.log('cut:', await ev(() => window.__agenda.ended));
await page.waitForTimeout(6000); // 静默 + 字幕
// 走向正门散场
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    if (window.__game.L.dyn.doorSOpen || performance.now() - t0 > 20000) res();
    else setTimeout(chk, 300);
  };
  chk();
}));
await ev(() => window.__go([[0, -2, Math.PI, 0.0, 2.6, 1.0], [0, 6.2, Math.PI, 0.0, 3.4, 0.5]]));
// 等结算卡
await ev(() => new Promise(res => {
  const t0 = performance.now();
  const chk = () => {
    const e = document.getElementById('end');
    if ((e && e.style.display !== 'none' && +getComputedStyle(e).opacity > 0.8) || performance.now() - t0 > 30000) res();
    else setTimeout(chk, 400);
  };
  chk();
}));
await page.waitForTimeout(3000);
console.log('finished:', await ev(() => !!window.__agenda._finished));
await app.close();
