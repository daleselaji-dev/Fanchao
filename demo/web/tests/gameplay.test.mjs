"use strict";
/*
 * 返潮 H00-R0 玩法深化层回归测试（Node，无浏览器）
 * 覆盖：借视信号过载/冷却/回落、实体圈数计数、脚下表面裁决、
 *       借视不改变实体行为（信息工具不是遥控器）。
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import { JACK, surfaceAt, CARPET_RECT, ENTITY_SPEED } from "../js/contract.js";
import { createSim, simStep, resetSim, drainEvents, jackLive } from "../js/sim.js";

const DT = 1 / 60;
const stepN = (sim, n, input = {}) => { for (let i = 0; i < n; i++) simStep(sim, DT, input); };
const teleport = (sim, x, z) => { sim.player.x = x; sim.player.z = z; };

test("借视：短按不过载；持续超过 maxHold 过载并进入冷却，冷却结束恢复", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  drainEvents(sim);

  // 短按 1 秒：保持 SYNC
  stepN(sim, 60, { jack: true });
  assert.equal(sim.jack.state, "SYNC");
  assert.ok(drainEvents(sim).some(e => e.type === "jack-on"));
  assert.ok(jackLive(sim, true));

  // 松手回落
  stepN(sim, 90, {});
  assert.ok(sim.jack.heldT < 0.05, "松手后接入时长应回落");
  assert.ok(drainEvents(sim).some(e => e.type === "jack-off"));

  // 长按超过 maxHold：过载
  const need = Math.ceil((JACK.maxHold + 0.2) / DT);
  stepN(sim, need, { jack: true });
  assert.equal(sim.jack.state, "COOLDOWN");
  assert.equal(sim.jack.overloads, 1);
  assert.ok(drainEvents(sim).some(e => e.type === "jack-overload"));
  assert.ok(!jackLive(sim, true), "过载中即使按住也不可接入");

  // 冷却期间按住无效
  stepN(sim, Math.ceil(JACK.cooldown / DT / 2), { jack: true });
  assert.equal(sim.jack.state, "COOLDOWN");

  // 冷却结束恢复
  stepN(sim, Math.ceil(JACK.cooldown / DT), { jack: false });
  assert.equal(sim.jack.state, "SYNC");
  assert.ok(drainEvents(sim).some(e => e.type === "jack-recover"));
});

test("借视：接入不改变实体速度与模式（信息工具不是遥控器）", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  stepN(sim, 10);
  assert.equal(sim.entity.mode, "MOVE");
  let x0 = sim.entity.x, z0 = sim.entity.z;
  stepN(sim, 60, { jack: true });   // 全程按住借视
  const d = Math.hypot(sim.entity.x - x0, sim.entity.z - z0);
  assert.ok(d <= ENTITY_SPEED * 1.05, `借视时实体速度 ${d} 不得改变`);
  assert.equal(sim.entity.mode, "MOVE");
});

test("实体圈数：完成一整圈后 loops+1 并发 entity-loop 事件", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  sim.entity.pauseRemaining = 0.01;
  teleport(sim, 6.5, 5);   // 玩家远离路线
  let loopEvents = 0, guard = 0;
  while (sim.entity.loops < 1 && guard < 30000) {
    simStep(sim, DT, {});
    guard++;
    for (const ev of drainEvents(sim)) if (ev.type === "entity-loop") loopEvents = ev.loops;
  }
  assert.ok(guard < 30000, "一圈应在限时内完成");
  assert.equal(sim.entity.loops, 1);
  assert.equal(loopEvents, 1);
});

test("复位：借视与圈数全部归零", () => {
  const sim = createSim();
  stepN(sim, 2, { moveX: 1, moveZ: 0 });
  const need = Math.ceil((JACK.maxHold + 0.2) / DT);
  stepN(sim, need, { jack: true });
  assert.equal(sim.jack.state, "COOLDOWN");
  sim.entity.loops = 3;
  resetSim(sim, "TEST");
  assert.equal(sim.jack.state, "SYNC");
  assert.equal(sim.jack.heldT, 0);
  assert.equal(sim.jack.cooldown, 0);
  assert.equal(sim.jack.overloads, 0);
  assert.equal(sim.entity.loops, 0);
});

test("表面裁决：地毯/水磨石/水泥/沉积四种脚感分区正确", () => {
  assert.equal(surfaceAt({ x: 19, z: 5 }), "carpet", "A 厅中央是地毯");
  assert.equal(surfaceAt({ x: 3.5, z: 5 }), "terrazzo", "A 厅边缘是水磨石");
  assert.equal(surfaceAt({ x: 18, z: 12.5 }), "terrazzo", "B 走廊浅处是水磨石");
  assert.equal(surfaceAt({ x: 10, z: 16.2 }), "sediment", "低处巷是压实沉积");
  assert.equal(surfaceAt({ x: 30, z: 21 }), "concrete", "D 卸货区是水泥");
  // 地毯矩形与世界几何一致
  assert.equal(CARPET_RECT.x + CARPET_RECT.w / 2, 19);
  assert.equal(CARPET_RECT.z + CARPET_RECT.d / 2, 5.1);
});
