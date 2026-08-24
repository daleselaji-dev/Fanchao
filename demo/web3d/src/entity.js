// M05 双背 行为状态机（纯函数，不依赖 three，可被 node --test 与主循环共用）。
// 行为合同见 docs/game-design/03_核心玩法.md §3.1 与 docs/game-design/08_Demo机制与工作流.md §5：
//   WORK / MOVE / WAIT 三态；匀速 1.5 m/s；让行不推回；等待时完全静止；
//   朝向只由路线决定（从不面向玩家）；折返段（reverse 航点）不转身、倒着走。

import {
  ROUTE, ENTITY_SPEED, YIELD_TRIGGER, YIELD_RELEASE, YIELD_AHEAD, YIELD_AHEAD_R,
} from "./constants.js";

export function dist2(ax, az, bx, bz) {
  return Math.hypot(ax - bx, az - bz);
}

export function createEntityState() {
  return {
    x: ROUTE[0].x,
    z: ROUTE[0].y,
    yaw: Math.atan2(ROUTE[1].y - ROUTE[0].y, ROUTE[1].x - ROUTE[0].x),
    next: 1,
    mode: "WORK",             // WORK / MOVE / WAIT
    pauseRemaining: Infinity, // 节拍钟启动前滞留在 D（由调用方置为 ENTITY_HOLD）
    actLabel: ROUTE[0].act || "",
    reversing: false,         // 当前段是否倒走（朝向不变、位移反向）
    walkPhase: 0,             // 步态相位：MOVE 时推进，WAIT/WORK 冻结
    workPhase: 0,             // 工作动作相位：WORK 时推进
    loops: 0,                 // 完成整圈次数（回到航点 0 时 +1）
  };
}

// 推进一帧。clockRunning=false 时实体保持初始滞留（对齐 2D 基线语义）。
// 返回事件数组：{type:"reached", index} / {type:"work", act} / {type:"step"} / {type:"wait"} / {type:"resume"}
export function stepEntity(e, player, dt, clockRunning = true) {
  const events = [];
  if (e.mode === "WORK") {
    if (clockRunning && e.pauseRemaining !== Infinity) {
      e.pauseRemaining -= dt;
      e.workPhase += dt;
      if (e.pauseRemaining <= 0) {
        e.mode = "MOVE";
        e.actLabel = "";
        e.reversing = !!ROUTE[e.next].reverse;
      }
    } else if (clockRunning) {
      e.workPhase += dt;
    }
    return events;
  }

  const target = ROUTE[e.next];
  const vx = target.x - e.x;
  const vz = target.y - e.z;
  const d = Math.hypot(vx, vz) || 1e-9;

  // 让行：玩家太近，或占据前进方向锥 → WAIT（不推挤、不加速、不绕行）
  const aheadX = e.x + (vx / d) * YIELD_AHEAD;
  const aheadZ = e.z + (vz / d) * YIELD_AHEAD;
  const playerNear = dist2(player.x, player.z, e.x, e.z) < YIELD_TRIGGER;
  const playerAhead = dist2(player.x, player.z, aheadX, aheadZ) < YIELD_AHEAD_R;
  if (playerNear || playerAhead) {
    if (e.mode !== "WAIT") {
      e.mode = "WAIT";
      events.push({ type: "wait" });
    }
    return events; // 完全静止：位置、朝向、步态相位全部冻结
  }
  if (e.mode === "WAIT") {
    if (dist2(player.x, player.z, e.x, e.z) > YIELD_RELEASE) {
      e.mode = "MOVE";
      events.push({ type: "resume" });
    } else {
      return events;
    }
  }

  // 朝向只由路线决定：正常段 = 路径方向；reverse 段 = 保持原朝向、倒着走。
  e.reversing = !!target.reverse;
  if (!target.reverse) {
    e.yaw = Math.atan2(vz, vx);
  }

  const step = ENTITY_SPEED * dt;
  if (d <= step + 0.02) {
    e.x = target.x;
    e.z = target.y;
    const reached = e.next;
    e.next = (e.next + 1) % ROUTE.length;
    events.push({ type: "reached", index: reached });
    if (reached === 0) e.loops += 1;
    if (target.pause > 0) {
      e.mode = "WORK";
      e.pauseRemaining = target.pause;
      e.actLabel = target.act || "";
      e.workPhase = 0;
      events.push({ type: "work", act: e.actLabel });
    }
  } else {
    e.x += (vx / d) * step;
    e.z += (vz / d) * step;
    const prevPhase = e.walkPhase;
    e.walkPhase += dt;
    // 每 0.42s 一步（对齐 2D 基线步频）
    if (Math.floor(e.walkPhase / 0.42) > Math.floor(prevPhase / 0.42)) {
      events.push({ type: "step" });
    }
  }
  return events;
}

// 把实体直接放到路线进度 p（整数部分=起始航点，小数部分=段内插值），供截图确定性复现。
export function placeOnRoute(e, p) {
  const i = ((Math.floor(p) % ROUTE.length) + ROUTE.length) % ROUTE.length;
  const f = p - Math.floor(p);
  const a = ROUTE[i];
  const b = ROUTE[(i + 1) % ROUTE.length];
  e.x = a.x + (b.x - a.x) * f;
  e.z = a.y + (b.y - a.y) * f;
  e.next = (i + 1) % ROUTE.length;
  e.mode = "MOVE";
  e.pauseRemaining = 0;
  e.actLabel = "";
  e.reversing = !!b.reverse;
  if (!b.reverse) {
    e.yaw = Math.atan2(b.y - a.y, b.x - a.x);
  } else {
    // 折返段的朝向 = 折返前最后一个正常段的方向
    let j = i;
    for (let k = 0; k < ROUTE.length; k++) {
      const seg = ROUTE[(j + 1) % ROUTE.length];
      if (!seg.reverse) break;
      j = (j - 1 + ROUTE.length) % ROUTE.length;
    }
    const a2 = ROUTE[j];
    const b2 = ROUTE[(j + 1) % ROUTE.length];
    e.yaw = Math.atan2(b2.y - a2.y, b2.x - a2.x);
  }
}
