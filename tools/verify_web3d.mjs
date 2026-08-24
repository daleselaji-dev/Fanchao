// 浏览器实走回路验证（开发期工具，非交付依赖）。
// 用真实键盘事件驱动玩家走完 出发→归档→让行验证→返回 A 的完整回路，
// 逐条断言行为合同的运行时表现。用法：
//   npm i puppeteer-core --prefix /tmp/pptr && node tools/verify_web3d.mjs
// 需要本机 google-chrome 与仓库根目录的 http 服务（脚本自启）。

import { createRequire } from "node:module";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const require = createRequire("/tmp/pptr/node_modules/");
const puppeteer = require("puppeteer-core");

const PORT = 8791;
const server = spawn("python3", ["-m", "http.server", String(PORT)], {
  cwd: new URL("..", import.meta.url).pathname,
  stdio: "ignore",
});
await sleep(1200);

const browser = await puppeteer.launch({
  executablePath: "/usr/local/bin/google-chrome",
  headless: "new",
  args: [
    "--no-sandbox", "--disable-dev-shm-usage",
    "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
    "--window-size=1280,720", "--autoplay-policy=no-user-gesture-required",
  ],
});
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });
const consoleLogs = [];
page.on("console", (m) => consoleLogs.push(m.text()));
await page.goto(`http://127.0.0.1:${PORT}/demo/web3d/`, { waitUntil: "networkidle0" });
await sleep(800);

const failures = [];
function assert(cond, name) {
  console.log((cond ? "PASS " : "FAIL ") + name);
  if (!cond) failures.push(name);
}

const read = () => page.evaluate(() => ({
  px: __W3D.player.x, pz: __W3D.player.z,
  ex: __W3D.entity.x, ez: __W3D.entity.z,
  emode: __W3D.entity.mode, enext: __W3D.entity.next,
  archived: __W3D.state.archived, completed: __W3D.state.completed,
  t: __W3D.state.t, inLow: __W3D.state.inLow,
  figureVisible: __W3D.isFigureVisible(),
  logs: __W3D.logs.slice(-30),
}));

await page.mouse.click(640, 360); // 关闭遮罩（headless 无指针锁，WASD 仍可用）
await sleep(300);

// 键盘寻路：玩家朝向固定 π/2（面向 +z），W=+z S=-z A=+x D=-x
async function goTo(tx, tz, timeoutMs = 30000) {
  const t0 = Date.now();
  while (Date.now() - t0 < timeoutMs) {
    const s = await read();
    const dx = tx - s.px;
    const dz = tz - s.pz;
    if (Math.hypot(dx, dz) < 0.35) {
      for (const k of ["KeyW", "KeyS", "KeyA", "KeyD"]) await page.keyboard.up(k);
      return true;
    }
    const want = new Set();
    if (dz > 0.15) want.add("KeyW");
    if (dz < -0.15) want.add("KeyS");
    if (dx > 0.15) want.add("KeyA");
    if (dx < -0.15) want.add("KeyD");
    for (const k of ["KeyW", "KeyS", "KeyA", "KeyD"]) {
      if (want.has(k)) await page.keyboard.down(k);
      else await page.keyboard.up(k);
    }
    await sleep(70);
  }
  for (const k of ["KeyW", "KeyS", "KeyA", "KeyD"]) await page.keyboard.up(k);
  return false;
}

// ---- 出发 → C 房卡座（节拍 1–3）----
assert(await goTo(17.9, 7.6), "寻路：A 厅内移动到服务门前");
let s = await read();
assert(s.t > 0, "节拍钟随移动启动");
assert(await goTo(17.9, 12.6), "寻路：穿过 A/B 服务门进入 B 走廊");
assert(await goTo(13.0, 13.4), "寻路：B 走廊向西");
assert(await goTo(13.0, 16.7), "寻路：穿器材架间隙进入低处线");
s = await read();
assert(s.inLow === true, "低处声学状态触发（LOW）");
assert(await goTo(8.8, 16.7), "寻路：低处线西行到 C 门外");
assert(await goTo(8.7, 19.6), "寻路：穿 C 门进入 C 房");
assert(await goTo(7.0, 21.3), "寻路：绕到卡座南侧 2.4m 内");
await page.keyboard.press("KeyE");
await sleep(400);
s = await read();
assert(s.archived === true, "按 E 完成归档");
assert(s.logs.some(l => l.includes("Archive state changed: COMPLETE")), "归档日志落盘");

// ---- 在 C 房等实体完成洗涤段（它此间会来 C 门外放盘：门框时刻）----
let sawDoorWork = false;
{
  const t0 = Date.now();
  while (Date.now() - t0 < 90000) {
    s = await read();
    if (s.logs.some(l => l.includes("Worker task: 在 C 门外放盘"))) sawDoorWork = true;
    if (s.enext >= 10) break; // 它已离开洗涤台开始倒走返程
    await sleep(300);
  }
}
assert(sawDoorWork, "实体按班表在 C 门外放盘（门框时刻发生过）");

// ---- 让行验证：抢到 E/B 交界以东、站上它去 D 的路线 ----
assert(await goTo(8.8, 18.6), "寻路：返身出 C 房");
assert(await goTo(8.8, 16.7), "寻路：回到低处线");
assert(await goTo(21.5, 16.65, 40000), "寻路：沿走廊东行站上返程路线");
let sawWait = false;
{
  const t0 = Date.now();
  while (Date.now() - t0 < 80000) {
    s = await read();
    if (s.emode === "WAIT") { sawWait = true; break; }
    await sleep(200);
  }
}
assert(sawWait, "实体因玩家挡路进入 WAIT（让行不推回）");
const waitPos = { x: s.ex, z: s.ez };
await sleep(1500);
s = await read();
assert(s.emode === "WAIT" && s.ex === waitPos.x && s.ez === waitPos.z, "WAIT 期间实体完全静止");
assert(s.logs.some(l => l.includes("No push, no chase")), "让行日志落盘");
// 玩家向北让开 → 实体恢复
assert(await goTo(21.5, 14.0), "寻路：向北让开路线");
let resumed = false;
{
  const t1 = Date.now();
  while (Date.now() - t1 < 20000) {
    s = await read();
    if (s.emode !== "WAIT") { resumed = true; break; }
    await sleep(200);
  }
}
assert(resumed, "玩家离开后实体恢复 MOVE");

// ---- 返回 A，完成回路（节拍 6）----
assert(await goTo(17.9, 12.8), "寻路：返程回到服务门");
assert(await goTo(17.9, 8.6), "寻路：穿门回到 A 宴会厅");
await sleep(600);
s = await read();
assert(s.completed === true, "回路完成（归档后回到 A）");
assert(s.logs.some(l => l.includes("Loop complete")), "回路完成日志落盘");
console.log(`回路用时（节拍钟）：${s.t.toFixed(1)}s`);
assert(s.t >= 45 && s.t <= 120, "回路用时在可玩窗口内");

// ---- R 复位 ----
await page.keyboard.press("KeyR");
await sleep(300);
s = await read();
assert(s.archived === false && s.t === 0 && Math.abs(s.px - 6.5) < 0.01, "R 复位全量还原");

const errors = consoleLogs.filter(l => /error/i.test(l) && !/dbus|swiftshader/i.test(l));
assert(errors.length === 0, `浏览器 console 无错误（${errors.length}）`);

await browser.close();
server.kill();
console.log(failures.length ? `\n共 ${failures.length} 项失败` : "\n浏览器实走验证：全部通过");
process.exit(failures.length ? 1 : 0);
