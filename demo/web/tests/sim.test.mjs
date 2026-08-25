"use strict";
/*
 * 返潮 H00-R0 行为合同回归测试（Node，无浏览器）
 * 运行：npm test（node --test demo/web/tests/）
 * 覆盖：归档 / 让行不推回 / 证据次数与时长 / 声学状态 / 复位 / 禁声单 / 节拍可行性
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  ROUTE, ARCHIVE_POINT, ARCHIVE_RADIUS, ENTITY_SPEED, EVIDENCE,
  BANNED_SOUND_PATTERN, losClear, isLow, floorHeightAt, LOW_ZONE, dist2d,
} from "../js/contract.js";
import { createSim, simStep, resetSim, drainEvents } from "../js/sim.js";
import { SOUND_MANIFEST } from "../js/audio-manifest.js";

const DT = 1 / 60;

function stepN(sim, n, input = {}) {
  for (let i = 0; i < n; i++) simStep(sim, DT, input);
}

// 把玩家瞬移（测试快捷方式：绕过碰撞，只测状态机）
function teleport(sim, x, z) { sim.player.x = x; sim.player.z = z; }

// 简易机器人：以合同速度走向目标（走真实碰撞裁决）
function walkTo(sim, target, maxSeconds = 30) {
  let t = 0;
  while (dist2d(sim.player, target) > 0.25 && t < maxSeconds) {
    const dx = target.x - sim.player.x, dz = target.z - sim.player.z;
    const m = Math.hypot(dx, dz);
    simStep(sim, DT, { moveX: dx / m, moveZ: dz / m });
    t += DT;
  }
  return t;
}

test("归档：距离门槛 2.4m，成功一次，不重复", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 }); // 启动节拍钟
  teleport(sim, ARCHIVE_POINT.x + ARCHIVE_RADIUS + 1, ARCHIVE_POINT.z);
  simStep(sim, DT, { wantArchive: true });
  assert.equal(sim.archived, false);
  assert.ok(drainEvents(sim).some(e => e.type === "archive-too-far"));

  teleport(sim, ARCHIVE_POINT.x + 1.0, ARCHIVE_POINT.z);
  simStep(sim, DT, { wantArchive: true });
  assert.equal(sim.archived, true);
  assert.ok(drainEvents(sim).some(e => e.type === "archive-complete"));

  simStep(sim, DT, { wantArchive: true });
  assert.ok(drainEvents(sim).some(e => e.type === "archive-already"));
});

test("实体：速度恒定 1.5m/s，不因玩家距离改变", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  stepN(sim, 10);
  assert.equal(sim.entity.mode, "MOVE");
  // 远离玩家时测速
  let x0 = sim.entity.x, z0 = sim.entity.z;
  stepN(sim, 60);
  const dFar = Math.hypot(sim.entity.x - x0, sim.entity.z - z0);
  // 玩家贴近（但不占道）时测速：速度不得提升
  teleport(sim, sim.entity.x + 2.5, sim.entity.z + 2.5);
  x0 = sim.entity.x; z0 = sim.entity.z;
  stepN(sim, 60);
  const dNear = Math.hypot(sim.entity.x - x0, sim.entity.z - z0);
  assert.ok(dFar <= ENTITY_SPEED * 1.05, `远端速度 ${dFar} 超速`);
  assert.ok(dNear <= ENTITY_SPEED * 1.05, `近端速度 ${dNear} 超速（禁冲刺）`);
});

test("让行：玩家占道→实体原地等待，绝不推动玩家；离开→恢复", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  // 让实体走到 D→B 的直线段上
  while (sim.entity.next !== 3) stepN(sim, 10);
  // 玩家站到实体行进方向正前方
  const e = sim.entity, target = ROUTE[e.next];
  const vx = target.x - e.x, vz = target.z - e.z, m = Math.hypot(vx, vz);
  teleport(sim, e.x + (vx / m) * 1.0, e.z + (vz / m) * 1.0);
  const px = sim.player.x, pz = sim.player.z;
  stepN(sim, 180); // 3 秒
  assert.equal(sim.entity.mode, "WAIT", "实体应原地等待");
  assert.equal(sim.player.x, px, "实体不得推动玩家 x");
  assert.equal(sim.player.z, pz, "实体不得推动玩家 z");
  const frozen = { x: sim.entity.x, z: sim.entity.z };
  stepN(sim, 60);
  assert.ok(dist2d(sim.entity, frozen) < 1e-9, "等待时实体不得移动");
  // 玩家离开
  teleport(sim, 5, 5);
  stepN(sim, 30);
  assert.equal(sim.entity.mode, "MOVE", "玩家离开后应恢复移动");
});

test("证据：需要低处+视线+距离；每圈至多一次；时长≤2s", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  // 真实节拍：实体进 E 洗涤（wp8）时玩家才下低处巷，蹲守 E/B 交界西侧；
  // 证据结束后退回浅处走廊，下一圈重复。
  teleport(sim, 16.5, 12.3);
  let evidenceEvents = 0, maxDur = 0, loops = 0, guard = 0;
  while (loops < 2 && guard < 60000) {
    simStep(sim, DT, {});
    guard++;
    for (const ev of drainEvents(sim)) {
      if (ev.type === "entity-waypoint" && ev.index === 8) teleport(sim, 14, 16.9);
      if (ev.type === "evidence-start") { evidenceEvents++; maxDur = Math.max(maxDur, EVIDENCE.duration); }
      if (ev.type === "evidence-end") teleport(sim, 16.5, 12.3);
      if (ev.type === "entity-waypoint" && ev.index === 0) loops++;
    }
  }
  assert.ok(isLow({ x: 14, z: 16.9 }), "蹲守点必须在低处");
  assert.ok(guard < 60000, "回路应在限时内完成两圈");
  assert.equal(evidenceEvents, 2, "两圈应各触发一次（玩家每圈蹲守）");
  assert.ok(maxDur <= 2.0, `证据时长 ${maxDur}s 必须 ≤2s`);
  assert.equal(sim.evidence.totalShown, 2);
});

test("证据：玩家不在低处则永不触发", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  teleport(sim, 16.5, 12.3); // 走廊浅处，非低处，不占道
  assert.ok(!isLow(sim.player));
  let evidenceEvents = 0, loops = 0, guard = 0;
  while (loops < 2 && guard < 60000) {
    simStep(sim, DT, {});
    guard++;
    for (const ev of drainEvents(sim)) {
      if (ev.type === "evidence-start") evidenceEvents++;
      if (ev.type === "entity-waypoint" && ev.index === 0) loops++;
    }
  }
  assert.equal(loops, 2, "实体应正常完成两圈");
  assert.equal(evidenceEvents, 0, "浅处蹲守不应得到证据（信息要用低处风险换）");
});

test("声学状态：低处进出产生事件；地面高度连续", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  teleport(sim, 10, 16.2);
  simStep(sim, DT, {});
  assert.ok(drainEvents(sim).some(e => e.type === "acoustic-low"));
  teleport(sim, 10, 12.5);
  simStep(sim, DT, {});
  assert.ok(drainEvents(sim).some(e => e.type === "acoustic-normal"));
  // 凹槽几何沿 C 门中线连续（含门槛坡，无瞬移台阶）
  let prev = floorHeightAt(8.8, 14.0);
  for (let z = 14.0; z < 19.0; z += 0.02) {
    const h = floorHeightAt(8.8, z);
    assert.ok(Math.abs(h - prev) < 0.05, `地面高度突变 @z=${z}`);
    prev = h;
  }
  assert.ok(Math.abs(floorHeightAt(10, 16.15) + 0.35) < 1e-6, "凹槽核心应为 -0.35m");
  assert.ok(Math.abs(floorHeightAt(8.8, 17.9)) < 1e-6, "门槛坡顶应回到房间地面");
});

test("复位：状态机完整回到 00 秒", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  teleport(sim, ARCHIVE_POINT.x + 1, ARCHIVE_POINT.z);
  simStep(sim, DT, { wantArchive: true });
  stepN(sim, 600);
  resetSim(sim, "TEST");
  assert.equal(sim.t, 0);
  assert.equal(sim.clockStarted, false);
  assert.equal(sim.archived, false);
  assert.equal(sim.completed, false);
  assert.equal(sim.entity.next, 1);
  assert.equal(sim.entity.mode, "WORK");
  assert.equal(sim.entity.pauseRemaining, Infinity);
  assert.equal(sim.evidence.active, 0);
  const fresh = createSim();
  assert.equal(sim.player.x, fresh.player.x);
  assert.equal(sim.player.z, fresh.player.z);
});

test("声源清单：无水声、无警笛、无怪物主题", () => {
  for (const id of SOUND_MANIFEST) {
    assert.ok(!BANNED_SOUND_PATTERN.test(id), `声源 ${id} 命中禁单`);
  }
  assert.ok(SOUND_MANIFEST.length >= 12, "声景必须足够密（≥12 种声源）");
});

test("视线：墙体遮挡、门洞通过", () => {
  assert.equal(losClear({ x: 6, z: 8 }, { x: 6, z: 12 }), false, "A/B 墙应挡视线");
  assert.equal(losClear({ x: 18, z: 8.8 }, { x: 18, z: 11 }), true, "A/B 门洞应通视线");
  assert.equal(losClear({ x: 8.8, z: 16.6 }, { x: 8.8, z: 19 }), true, "C 门洞应通视线");
});

test("节拍可行性：主路径（含蹲守证据）60–90 秒内完成", () => {
  const sim = createSim();
  let total = 0;
  const leg = (x, z, budget) => {
    const t = walkTo(sim, { x, z }, budget);
    total += t;
    assert.ok(t < budget, `walkTo(${x},${z}) 用时 ${t.toFixed(1)}s 超预算 ${budget}s`);
  };
  // 00–12 A 内读场 + 走到服务门
  const dwell = (sec) => { let n = Math.round(sec / DT); while (n--) { simStep(sim, DT, {}); total += DT; } };
  dwell(4);                       // 读懂婚宴收场
  leg(18, 8.8, 20);               // A→服务门
  leg(18, 12.6, 10);              // 进走廊
  dwell(3);                       // 听墙后工作声
  leg(13, 12.8, 15);              // 浅处服务线西行到过巷口
  leg(13, 16.5, 10);              // 从巷口下低处
  leg(8.8, 16.5, 10);             // 低处巷西行到 C 门
  leg(8.8, 19.2, 10);             // 过门槛坡进 C
  leg(6.2, 21.2, 10);             // 站到卡座台前（半径 2.4m 内）
  dwell(1);
  simStep(sim, DT, { wantArchive: true }); total += DT;
  assert.equal(sim.archived, true, "应完成归档");
  dwell(3);                       // 看 CRT 婚宴画面
  // 在 C 内等实体经过 C 门外并进 E 洗涤（wp8），再出门 —— 对齐节拍表 43–60
  let waitEnterE = 0;
  let entered = false;
  while (!entered && waitEnterE < 45) {
    simStep(sim, DT, {}); waitEnterE += DT; total += DT;
    for (const ev of drainEvents(sim)) {
      if (ev.type === "entity-waypoint" && ev.index === 8) entered = true;
    }
  }
  assert.ok(entered, "实体应在 45s 内进入 E");
  leg(8.8, 16.6, 10);             // 出 C 下低处巷
  leg(14, 16.9, 10);              // 蹲守 E/B 交界西侧
  // 蹲守低处等待侧向证据（洗涤 3.2s + 折返 ≈6s）
  let waited = 0;
  while (sim.evidence.totalShown === 0 && waited < 20) {
    simStep(sim, DT, {}); waited += DT; total += DT;
  }
  assert.ok(sim.evidence.totalShown >= 1, "低处蹲守应换到一次侧向证据");
  leg(13, 14.5, 10);              // 从巷口上浅处
  leg(18, 12.6, 20);              // 返程
  leg(18, 8.6, 10);               // 穿服务门回 A
  assert.equal(sim.completed, true, "回 A 应判定循环完成");
  assert.ok(total >= 45 && total <= 95, `全程 ${total.toFixed(1)}s 应落在 45–95s 体验窗`);
});
