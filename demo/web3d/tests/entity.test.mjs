// M05 双背 行为合同自动测试（node --test demo/web3d/tests/）
// 每条用例对应 docs/game-design/08_Demo机制与工作流.md §5 的一条合同。

import { test } from "node:test";
import assert from "node:assert/strict";
import {
  ROUTE, ENTITY_SPEED, ENTITY_HOLD, ARCHIVE_POINT, ARCHIVE_RADIUS,
} from "../src/constants.js";
import { createEntityState, stepEntity, placeOnRoute, dist2 } from "../src/entity.js";

const DT = 1 / 60;
const FAR = { x: -100, z: -100 };

function freshRunning() {
  const e = createEntityState();
  e.pauseRemaining = ENTITY_HOLD;
  return e;
}

function simulate(e, seconds, player = FAR, onStep = null) {
  const all = [];
  for (let t = 0; t < seconds; t += DT) {
    const p = typeof player === "function" ? player(t, e) : player;
    const events = stepEntity(e, p, DT, true);
    all.push(...events);
    if (onStep) onStep(t, e, events);
  }
  return all;
}

test("合同1：航点按顺序推进，不跳点", () => {
  const e = freshRunning();
  const events = simulate(e, 200);
  const reached = events.filter(ev => ev.type === "reached").map(ev => ev.index);
  assert.ok(reached.length >= ROUTE.length + 2, "应至少走完一圈多");
  for (let i = 1; i < reached.length; i++) {
    assert.equal(reached[i], (reached[i - 1] + 1) % ROUTE.length, `第 ${i} 次到点应顺序推进`);
  }
});

test("合同2：MOVE 时速度恒为 1.5 m/s，玩家无法改变它", () => {
  const e = freshRunning();
  let prev = { x: e.x, z: e.z };
  simulate(e, 120, FAR, (t, ent, events) => {
    const moved = dist2(ent.x, ent.z, prev.x, prev.z);
    const arrived = events.some(ev => ev.type === "reached");
    if (ent.mode === "MOVE" && !arrived && moved > 0) {
      assert.ok(Math.abs(moved - ENTITY_SPEED * DT) < 1e-6, `速度必须恒定：${moved / DT}`);
    }
    prev = { x: ent.x, z: ent.z };
  });
});

test("合同3：工作点按 pause 时长停留（C 门外 2.6s）", () => {
  const e = freshRunning();
  let workStart = -1;
  let workDur = -1;
  let inWork5 = false;
  simulate(e, 200, FAR, (t, ent, events) => {
    if (events.some(ev => ev.type === "reached" && ev.index === 5)) {
      workStart = t;
      inWork5 = true;
    }
    if (inWork5 && ent.mode === "MOVE" && workDur < 0 && workStart >= 0 && t > workStart) {
      workDur = t - workStart;
      inWork5 = false;
    }
  });
  assert.ok(workDur > 0, "应在航点 5 进入 WORK");
  assert.ok(Math.abs(workDur - 2.6) < 0.1, `停留时长应约 2.6s，实际 ${workDur.toFixed(2)}s`);
});

test("合同4：玩家占据前进方向锥 → WAIT（让行不推回）", () => {
  const e = createEntityState();
  placeOnRoute(e, 2.5); // B 走廊长直段（向西）
  const px = e.x - 1.0;  // 正前方 1.0m
  const before = { x: e.x, z: e.z };
  stepEntity(e, { x: px, z: e.z }, DT, true);
  assert.equal(e.mode, "WAIT");
  assert.equal(e.x, before.x, "WAIT 不得位移");
  assert.equal(e.z, before.z, "WAIT 不得位移");
});

test("合同5：玩家离开 >1.5m → 解除让行恢复 MOVE", () => {
  const e = createEntityState();
  placeOnRoute(e, 2.5);
  stepEntity(e, { x: e.x - 1.0, z: e.z }, DT, true);
  assert.equal(e.mode, "WAIT");
  // 玩家退到 1.4m：仍未解除
  stepEntity(e, { x: e.x - 1.4, z: e.z }, DT, true);
  assert.equal(e.mode, "WAIT");
  // 玩家退到 2.5m：解除
  stepEntity(e, { x: e.x - 2.5, z: e.z }, DT, true);
  assert.equal(e.mode, "MOVE");
});

test("合同6：朝向只由路线决定，与玩家位置无关（从不面向玩家）", () => {
  const a = freshRunning();
  const b = freshRunning();
  const yawsA = [];
  const yawsB = [];
  simulate(a, 150, FAR, (t, ent) => yawsA.push(ent.yaw));
  // 玩家绕实体 3m 转圈（不触发让行锥），朝向序列必须与玩家在无穷远时完全一致
  simulate(b, 150, (t, ent) => ({
    x: ent.x + 3 * Math.cos(t * 1.7),
    z: ent.z + 3 * Math.sin(t * 1.7),
  }), (t, ent) => yawsB.push(ent.yaw));
  assert.deepEqual(yawsA, yawsB);
});

test("合同7：折返段不转身——朝向保持、倒着走", () => {
  const e = freshRunning();
  let checked = false;
  simulate(e, 200, FAR, (t, ent, events) => {
    if (ent.mode === "MOVE" && ent.next === 6 && !checked) {
      // 段 5→6 向东（+x），但朝向应保持 4→5 的向西（π）
      assert.ok(Math.abs(Math.abs(ent.yaw) - Math.PI) < 1e-9, `折返段朝向应保持 π，实际 ${ent.yaw}`);
      assert.equal(ent.reversing, true);
      const facing = { x: Math.cos(ent.yaw), z: Math.sin(ent.yaw) };
      const target = ROUTE[6];
      const vel = { x: target.x - ent.x, z: target.y - ent.z };
      const dot = facing.x * vel.x + facing.z * vel.z;
      assert.ok(dot < 0, "位移方向必须与朝向相反（倒走）");
      checked = true;
    }
  });
  assert.ok(checked, "应经过折返段 5→6");
});

test("合同8：WAIT 完全静止——步态相位、位置、朝向全部冻结", () => {
  const e = createEntityState();
  placeOnRoute(e, 2.5);
  stepEntity(e, FAR, DT, true); // 先动一帧积累相位
  stepEntity(e, { x: e.x - 1.0, z: e.z }, DT, true);
  assert.equal(e.mode, "WAIT");
  const snap = { x: e.x, z: e.z, yaw: e.yaw, walkPhase: e.walkPhase };
  for (let i = 0; i < 120; i++) stepEntity(e, { x: e.x - 1.0, z: e.z }, DT, true);
  assert.equal(e.x, snap.x);
  assert.equal(e.z, snap.z);
  assert.equal(e.yaw, snap.yaw);
  assert.equal(e.walkPhase, snap.walkPhase, "WAIT 中步态相位不得推进");
});

test("合同9：归档半径 2.4m 判定", () => {
  const inside = dist2(ARCHIVE_POINT.x - 2.3, ARCHIVE_POINT.y, ARCHIVE_POINT.x, ARCHIVE_POINT.y);
  const outside = dist2(ARCHIVE_POINT.x - 2.5, ARCHIVE_POINT.y, ARCHIVE_POINT.x, ARCHIVE_POINT.y);
  assert.ok(inside <= ARCHIVE_RADIUS, "2.3m 应可归档");
  assert.ok(outside > ARCHIVE_RADIUS, "2.5m 不应可归档");
});

test("合同10：R 复位全量还原初始状态", () => {
  const e = freshRunning();
  simulate(e, 47);
  const fresh = createEntityState();
  assert.deepEqual(createEntityState(), fresh, "复位状态必须确定");
  assert.equal(fresh.x, ROUTE[0].x);
  assert.equal(fresh.z, ROUTE[0].y);
  assert.equal(fresh.next, 1);
  assert.equal(fresh.mode, "WORK");
  assert.equal(fresh.pauseRemaining, Infinity);
  assert.equal(fresh.walkPhase, 0);
  assert.equal(fresh.loops, 0);
});

test("合同11：整圈用时（含 D 滞留）落在 60–120s", () => {
  const e = freshRunning();
  let loopTime = -1;
  simulate(e, 200, FAR, (t, ent, events) => {
    if (loopTime < 0 && events.some(ev => ev.type === "reached" && ev.index === 0)) {
      loopTime = t;
    }
  });
  assert.ok(loopTime > 0, "应完成一圈");
  assert.ok(loopTime >= 60 && loopTime <= 120, `整圈用时 ${loopTime.toFixed(1)}s 应在 60–120s`);
});

test("合同12：节拍钟未启动时实体滞留在 D 不动", () => {
  const e = createEntityState();
  for (let i = 0; i < 300; i++) stepEntity(e, FAR, DT, false);
  assert.equal(e.x, ROUTE[0].x);
  assert.equal(e.z, ROUTE[0].y);
  assert.equal(e.mode, "WORK");
});
