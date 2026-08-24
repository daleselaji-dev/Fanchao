"use strict";
/*
 * 返潮 H00-R0 —— 行为状态机（纯逻辑，Node/浏览器共用）
 * 渲染与音频只订阅事件，不参与裁决；测试直接驱动本模块。
 * 合同：实体不攻击、不冲刺、不跳脸、不推回；速度恒定 1.5m/s；
 *       让行 = 玩家占道时原地等待；证据每圈 ≤1 次、≤1.6s、需低处+视线+距离。
 */

import {
  ROUTE, PLAYER_START, ARCHIVE_POINT, ARCHIVE_RADIUS,
  PLAYER_SPEED, ENTITY_SPEED, PLAYER_R, ENTITY_R, EVIDENCE,
  dist2d, isLow, losClear, roomOf, moveWithCollision, floorHeightAt,
} from "./contract.js";

export function createSim() {
  return {
    t: 0,
    clockStarted: false,
    player: { x: PLAYER_START.x, z: PLAYER_START.z, yaw: PLAYER_START.yaw, speed: 0 },
    archived: false,
    archivedAt: -99,
    completed: false,
    entity: {
      x: ROUTE[0].x, z: ROUTE[0].z, yaw: -Math.PI / 2,
      next: 1,
      pauseRemaining: Infinity,  // 起始滞留 D；节拍钟启动后放行
      mode: "WORK",              // WORK / MOVE / WAIT
      act: "boxes",
      stepAcc: 0,
      waitSince: -1,
    },
    evidence: { active: 0, shownThisLoop: false, loopsShown: 0, totalShown: 0, maxActiveSeen: 0 },
    lowNow: false,
    yieldCount: 0,
    lastYieldAt: -99,
    events: [],   // 每步产生的事件（音频/日志/HUD 消费后清空）
  };
}

function emit(sim, type, data) {
  sim.events.push({ type, t: sim.t, ...data });
}

// input: { moveX, moveZ ∈ [-1,1]（本地意愿，已含朝向）, wantArchive, extraColliders }
export function simStep(sim, dt, input = {}) {
  const p = sim.player, e = sim.entity;
  const colliders = input.extraColliders || null;

  // ---- 玩家移动（碰撞裁决在合同层）----
  const mx = input.moveX || 0, mz = input.moveZ || 0;
  const mag = Math.hypot(mx, mz);
  if (mag > 1e-4) {
    if (!sim.clockStarted) {
      sim.clockStarted = true;
      e.pauseRemaining = 10;  // 00–12s：实体已在 D，但不让玩家看见
      emit(sim, "clock-start");
    }
    const nx = mx / Math.max(1, mag), nz = mz / Math.max(1, mag);
    const withEntity = {
      rects: colliders?.rects || [],
      circles: [...(colliders?.circles || []), { x: e.x, z: e.z, r: ENTITY_R }],
    };
    moveWithCollision(p, PLAYER_R, nx * PLAYER_SPEED * dt, nz * PLAYER_SPEED * dt, withEntity);
    p.speed = Math.min(1, mag) * PLAYER_SPEED;
  } else {
    p.speed = 0;
  }
  if (sim.clockStarted) sim.t += dt;

  // ---- 声学状态（低处 = 界面之下，物理高度驱动）----
  const low = isLow(p);
  if (low !== sim.lowNow) {
    sim.lowNow = low;
    emit(sim, low ? "acoustic-low" : "acoustic-normal");
  }

  // ---- 归档 ----
  if (input.wantArchive) {
    const d = dist2d(p, ARCHIVE_POINT);
    if (d > ARCHIVE_RADIUS) {
      emit(sim, "archive-too-far", { d });
    } else if (sim.archived) {
      emit(sim, "archive-already");
    } else {
      sim.archived = true;
      sim.archivedAt = sim.t;
      emit(sim, "archive-complete");
    }
  }

  // ---- 实体：回返状态机 ----
  if (e.pauseRemaining !== Infinity || sim.clockStarted) {
    if (e.mode === "WORK") {
      if (sim.clockStarted) e.pauseRemaining -= dt;
      if (e.pauseRemaining <= 0) {
        e.mode = "MOVE"; e.act = "";
        emit(sim, "entity-move-start");
      }
    } else {
      const target = ROUTE[e.next];
      const vx = target.x - e.x, vz = target.z - e.z;
      const d = Math.hypot(vx, vz);
      // 让行：玩家占用路线前方 → 原地等待（不推、不追、不绕）
      const aheadX = e.x + (vx / (d || 1)) * 1.3, aheadZ = e.z + (vz / (d || 1)) * 1.3;
      const playerBlocks = dist2d(p, e) < 1.15 || Math.hypot(p.x - aheadX, p.z - aheadZ) < 0.95;
      if (playerBlocks) {
        if (e.mode !== "WAIT") {
          e.mode = "WAIT";
          e.waitSince = sim.t;
          if (sim.t - sim.lastYieldAt > 2) {
            sim.lastYieldAt = sim.t;
            sim.yieldCount++;
            emit(sim, "entity-yield");
          }
        }
      } else if (e.mode === "WAIT" && dist2d(p, e) > 1.5) {
        e.mode = "MOVE";
        emit(sim, "entity-resume");
      }
      if (e.mode === "MOVE") {
        if (d < 0.12) {
          e.x = target.x; e.z = target.z;
          const reached = e.next;
          e.next = (e.next + 1) % ROUTE.length;
          emit(sim, "entity-waypoint", { index: reached });
          if (reached === 0) sim.evidence.shownThisLoop = false;
          if (target.pause > 0) {
            e.mode = "WORK"; e.pauseRemaining = target.pause; e.act = target.act || "";
            emit(sim, "entity-work", { act: e.act });
          }
          // E/B 交界：一次性短暂侧向证据（低处 + 视线 + 距离，全部由玩家换来）
          if (target.evidence && !sim.evidence.shownThisLoop &&
              isLow(p) && losClear(p, e) && dist2d(p, e) < EVIDENCE.maxDist) {
            sim.evidence.active = EVIDENCE.duration;
            sim.evidence.shownThisLoop = true;
            sim.evidence.loopsShown++;
            sim.evidence.totalShown++;
            emit(sim, "evidence-start");
          }
        } else {
          e.yaw = Math.atan2(vx, vz);   // three.js 约定：yaw 绕 y，0 朝 +z
          e.x += (vx / d) * ENTITY_SPEED * dt;
          e.z += (vz / d) * ENTITY_SPEED * dt;
          e.stepAcc += dt;
          if (e.stepAcc > 0.46) {
            e.stepAcc = 0;
            emit(sim, "entity-step", { x: e.x, z: e.z });
          }
        }
      }
    }
  }
  if (sim.evidence.active > 0) {
    sim.evidence.active -= dt;
    sim.evidence.maxActiveSeen = Math.max(sim.evidence.maxActiveSeen, EVIDENCE.duration);
    if (sim.evidence.active <= 0) emit(sim, "evidence-end");
  }

  // ---- 循环完成：归档后回到 A ----
  if (sim.archived && !sim.completed && roomOf(p) === "A") {
    sim.completed = true;
    emit(sim, "loop-complete");
  }

  return sim;
}

export function resetSim(sim, reason = "MANUAL") {
  const fresh = createSim();
  Object.assign(sim.player, fresh.player);
  Object.assign(sim.entity, fresh.entity);
  sim.t = 0;
  sim.clockStarted = false;
  sim.archived = false;
  sim.archivedAt = -99;
  sim.completed = false;
  sim.evidence.active = 0;
  sim.evidence.shownThisLoop = false;
  sim.lowNow = false;
  sim.events.length = 0;
  emit(sim, "reset", { reason });
  return sim;
}

export function drainEvents(sim) {
  const out = sim.events.slice();
  sim.events.length = 0;
  return out;
}

// 实体足部/玩家足部高度（跟随低处凹槽）
export const groundY = (p) => floorHeightAt(p.x, p.z);
