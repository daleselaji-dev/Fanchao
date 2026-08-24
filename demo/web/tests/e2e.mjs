"use strict";
/*
 * 端到端实机通关（Playwright + 系统 Chrome + SwiftShader WebGL）
 * 机器人以真实输入走完 60–90 秒主路径：
 *   A 读场 → 服务门 → 走廊听声 → 下低处巷 → C 归档看 CRT →
 *   等实体进 E → 出门蹲守 → 侧向证据 → 返程回 A → 让行验证 → 复位验证
 * 逻辑用 step()（不渲染）跑满帧率，节拍点用 render() 出实机截图。
 * 运行：node demo/web/tests/e2e.mjs [shotsDir]
 */
import { launch, snap } from "./shot.mjs";

const SHOTS = process.argv[2] || "/tmp/shots/e2e";
import { mkdirSync } from "node:fs";
mkdirSync(SHOTS, { recursive: true });

const { browser, page, server } = await launch();
const fails = [];
const check = (cond, name) => {
  console.log(`${cond ? "PASS" : "FAIL"} | ${name}`);
  if (!cond) fails.push(name);
};

// 页面内机器人：朝目标转向 + 按 W，直到到达（每步 1/60s，走完整逻辑管线）
await page.evaluate(() => {
  const H = window.__H00;
  H.start();
  window.__bot = {
    // 返回耗时（秒）；超时返回 -1
    walkTo(x, z, budget = 30) {
      let t = 0;
      const H = window.__H00;
      while (t < budget) {
        const p = H.sim.player;
        const dx = x - p.x, dz = z - p.z;
        if (Math.hypot(dx, dz) < 0.25) { H.pressKey("KeyW", false); return t; }
        H.setYaw(Math.atan2(-dx, -dz), 0);
        H.pressKey("KeyW", true);
        H.step(1 / 60);
        t += 1 / 60;
      }
      H.pressKey("KeyW", false);
      return -1;
    },
    dwell(sec) {
      const H = window.__H00;
      let n = Math.round(sec * 60);
      while (n--) H.step(1 / 60);
    },
    // 步进直到条件成立（cond 是字符串表达式）
    until(cond, budget = 60) {
      const H = window.__H00;
      const f = new Function("H", `return (${cond});`);
      let t = 0;
      while (t < budget) {
        if (f(H)) return t;
        H.step(1 / 60);
        t += 1 / 60;
      }
      return -1;
    },
    lookAt(x, z, pitch = 0) {
      const H = window.__H00;
      const p = H.sim.player;
      H.setYaw(Math.atan2(-(x - p.x), -(z - p.z)), pitch);
    },
  };
});

const shot = async (name, look) => {
  await page.evaluate(([look]) => {
    if (look) window.__bot.lookAt(look[0], look[1], look[2] || 0);
    window.__H00.step(1 / 60);   // 让相机吃到新朝向
    window.__H00.render();
  }, [look]);
  await snap(page, `${SHOTS}/${name}.png`);
  console.log("shot |", name);
};

// ---------- 主路径 ----------
const T = {};
T.start = await page.evaluate(() => { window.__bot.dwell(2.5); return window.__H00.sim.t; });
await shot("01_hall_read", [18, 9.5]);

let r = await page.evaluate(() => window.__bot.walkTo(18, 8.8, 25));
check(r >= 0, `A→服务门（${r.toFixed?.(1)}s）`);
r = await page.evaluate(() => window.__bot.walkTo(18, 12.6, 10));
check(r >= 0, "进走廊");
await page.evaluate(() => window.__bot.dwell(2.5));
await shot("02_corridor_listen", [30, 13.5]);

r = await page.evaluate(() => window.__bot.walkTo(13, 12.8, 15));
check(r >= 0, "浅处服务线西行");
r = await page.evaluate(() => window.__bot.walkTo(13, 16.5, 10));
check(r >= 0, "从巷口下低处");
const lowState = await page.evaluate(() => window.__H00.sim.lowNow);
check(lowState === true, "低处声学状态激活");
await shot("03_lane_descend", [4, 16.6, 0.1]);

r = await page.evaluate(() => window.__bot.walkTo(8.8, 16.5, 10));
check(r >= 0, "低处巷西行到 C 门");
r = await page.evaluate(() => window.__bot.walkTo(8.8, 19.2, 10));
check(r >= 0, "过门槛坡进 C");
r = await page.evaluate(() => window.__bot.walkTo(6.2, 21.2, 10));
check(r >= 0, "站到卡座前");
await shot("04_deck_prompt", [4.3, 19.7, 0.12]);

// 归档
await page.evaluate(() => { window.__bot.lookAt(4.35, 19.7, 0.1); window.__H00.pressArchive(); window.__H00.step(1 / 60); });
const archived = await page.evaluate(() => window.__H00.sim.archived);
check(archived, "E 键归档成功（半径 2.4m 合同）");
const crtMode = await page.evaluate(() => { window.__bot.dwell(1.2); return window.__H00.crtMode(); });
check(crtMode === "footage", "CRT 播放普通婚宴画面");
await shot("05_crt_footage", [4.35, 19.6, 0.06]);

// 等实体经过 C 门外并进 E（对齐节拍表 43–60）
r = await page.evaluate(() => window.__bot.until("H.sim.entity.next === 9", 60));
check(r >= 0, `实体进 E 洗涤（等待 ${r.toFixed?.(1)}s）`);
// 出 C，蹲守低处巷
r = await page.evaluate(() => window.__bot.walkTo(8.8, 16.6, 12));
check(r >= 0, "出 C 下低处巷");
r = await page.evaluate(() => window.__bot.walkTo(14.2, 16.9, 10));
check(r >= 0, "蹲守 E/B 交界西侧");
// 等证据
r = await page.evaluate(() => {
  window.__bot.lookAt(18.8, 16.6, 0.02);
  return window.__bot.until("H.sim.evidence.active > 1.2", 30);
});
check(r >= 0, `侧向证据触发（等待 ${r.toFixed?.(1)}s）`);
await shot("06_evidence", [18.8, 16.5, 0.02]);
const evTotal = await page.evaluate(() => window.__H00.sim.evidence.totalShown);
check(evTotal === 1, "证据每圈至多一次");

// 借视（Q）：短暂接入返席人视角——信息工具，也是不安来源
await page.evaluate(() => {
  window.__H00.holdJack(true);
  for (let i = 0; i < 55; i++) window.__H00.step(1 / 60);
});
await shot("06b_jack", null);
await page.evaluate(() => {
  window.__H00.holdJack(false);
  for (let i = 0; i < 20; i++) window.__H00.step(1 / 60);
});

// 返程
r = await page.evaluate(() => { window.__bot.dwell(2); return window.__bot.walkTo(13, 14.5, 10); });
check(r >= 0, "从巷口上浅处");
r = await page.evaluate(() => window.__bot.walkTo(18, 12.6, 20));
check(r >= 0, "返程走廊");
r = await page.evaluate(() => window.__bot.walkTo(18, 8.6, 10));
check(r >= 0, "穿服务门回 A");
const completed = await page.evaluate(() => window.__H00.sim.completed);
check(completed, "循环完成（A→B→C→B→A）");
const totalT = await page.evaluate(() => window.__H00.sim.t);
check(totalT >= 45 && totalT <= 95, `主路径实机用时 ${totalT.toFixed(1)}s ∈ [45,95]`);
await shot("07_back_hall", [9, 4.5]);

// ---------- 让行验证：站到实体路线前方 ----------
r = await page.evaluate(() => {
  const H = window.__H00;
  // 先回走廊（经服务门），再到走廊长直线上的拦截点站住
  window.__bot.walkTo(18, 12.6, 20);
  window.__bot.walkTo(16, 13.8, 15);
  // 等实体从东侧走来（wp3 = 走廊直线西行）
  window.__bot.until("H.sim.entity.next === 3 && H.sim.entity.mode === 'MOVE' && H.sim.entity.x > 20", 180);
  window.__bot.lookAt(H.sim.entity.x, H.sim.entity.z);
  window.__bot.dwell(0.6);   // 让减速包络归零，再记录基准位置
  const px = H.sim.player.x, pz = H.sim.player.z;
  // 等它走近，然后看它是否停下
  window.__bot.until("Math.hypot(H.sim.entity.x - H.sim.player.x, H.sim.entity.z - H.sim.player.z) < 2.4", 40);
  window.__bot.dwell(2.5);
  return {
    mode: H.sim.entity.mode,
    pushed: Math.hypot(H.sim.player.x - px, H.sim.player.z - pz),
    yields: H.sim.yieldCount,
    dist: Math.hypot(H.sim.entity.x - H.sim.player.x, H.sim.entity.z - H.sim.player.z),
  };
});
check(r.mode === "WAIT", "让行：实体原地等待");
check(r.pushed < 1e-9, "让行：实体绝不推动玩家");
check(r.yields >= 1, "让行事件已记录");
await shot("08_yield", null);

// ---------- 声源禁单 ----------
const reg = await page.evaluate(() => window.__H00.audioRegistry());
const banned = reg.filter(id => /water|rain|drip|wave|ocean|splash|siren|monster/i.test(id));
check(banned.length === 0, `运行时声源无禁单项（${reg.length} 个已注册）`);

// ---------- 复位验证 ----------
const rst = await page.evaluate(() => {
  const H = window.__H00;
  H.reset();
  H.step(1 / 60);
  return {
    t: H.sim.t, archived: H.sim.archived, completed: H.sim.completed,
    px: H.sim.player.x, pz: H.sim.player.z,
    en: H.sim.entity.next, emode: H.sim.entity.mode,
  };
});
check(rst.t === 0 && !rst.archived && !rst.completed, "复位：时钟/归档/完成态清零");
check(Math.abs(rst.px - 6.5) < 1e-6 && Math.abs(rst.pz - 7.8) < 1e-6, "复位：玩家回出生点");
check(rst.en === 1 && rst.emode === "WORK", "复位：实体回 D 起点");

// ---------- 收尾 ----------
await browser.close();
server.kill();
console.log("");
if (fails.length) {
  console.log(`E2E 未过：${fails.length} 项`);
  for (const f of fails) console.log("  -", f);
  process.exit(1);
} else {
  console.log("E2E 全部通过");
}
