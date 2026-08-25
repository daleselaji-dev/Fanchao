"use strict";
/*
 * 返潮 H00-R0《婚宴后场：返席》 Web 行为灰盒
 * 目的：把 Round 2 行为合同变成可运行、可截图的活文档。
 * 边界：只验证空间闭环 / 归档任务 / 实体回返 / 让行 / 声学状态 / 复位；
 *       不承担时代底片、材质、灯光、镜头手感（属于 UE 5.8 主线的 Gate）。
 * 行为数值对齐 demo/ue/H00_Source：归档半径 2.4m，实体 1.5m/s，玩家 3.6m/s，工作停留 ~1.4s+。
 */

// ---------- 世界几何（单位：米，y 向下） ----------
const WORLD = { w: 38, h: 27 };
const S = 28, OX = 8, OY = 6; // 像素缩放与偏移

// 墙体：碰撞 + 视线遮挡
const WALLS = [
  { x: 1.4, y: 0.9,  w: 35.2, h: 0.6 },              // 外墙北
  { x: 1.4, y: 25.5, w: 35.2, h: 0.6 },              // 外墙南
  { x: 1.4, y: 0.9,  w: 0.6,  h: 25.2 },             // 外墙西
  { x: 35.4, y: 0.9, w: 0.6,  h: 25.2 },             // 外墙东
  { x: 2,   y: 9.5,  w: 15,   h: 0.6 },              // A/B 墙（西段，门洞 x17–19）
  { x: 19,  y: 9.5,  w: 16.4, h: 0.6 },              // A/B 墙（东段）
  { x: 2,   y: 17.3, w: 6,    h: 0.6 },              // B/南排墙（C 门洞 x8–9.6）
  { x: 9.6, y: 17.3, w: 8.4,  h: 0.6 },              // （E 门洞 x18–19.6）
  { x: 19.6, y: 17.3, w: 8.4, h: 0.6 },              // （D 开口 x28–31）
  { x: 31,  y: 17.3, w: 4.4,  h: 0.6 },
  { x: 13,  y: 17.9, w: 0.6,  h: 7.6 },              // C/E 隔墙
  { x: 24,  y: 17.9, w: 0.6,  h: 7.6 },              // E/D 隔墙
];

// 家具：碰撞，不挡视线（后场家具多为低位）
const FURN = [
  { x: 2.6,  y: 2.0,  w: 1.2, h: 0.9, c: "#4d443a", label: "音箱" },
  { x: 32.6, y: 7.6,  w: 1.6, h: 1.0, c: "#5a5044", label: "备餐车" },
  { x: 4,    y: 10.4, w: 11,  h: 1.3, c: "#8b8378", label: "服务台（浅处服务线）" },
  { x: 21.5, y: 10.4, w: 11,  h: 1.3, c: "#8b8378", label: "保温台" },
  { x: 6,    y: 15.0, w: 6,   h: 1.1, c: "#6e675c", label: "器材架" },
  { x: 14,   y: 15.0, w: 7,   h: 1.1, c: "#6e675c", label: "器材架（低处器材线）" },
  { x: 3.2,  y: 19.0, w: 4.6, h: 1.5, c: "#42403c", label: "录像卡座 REC/PAUSE" },
  { x: 11.6, y: 19.2, w: 0.9, h: 4.2, c: "#575349", label: "磁带架" },
  { x: 14.5, y: 23.6, w: 5.5, h: 1.2, c: "#7a7d74", label: "洗涤台" },
  { x: 22.4, y: 19.4, w: 1.0, h: 3.4, c: "#6d7068", label: "沥水架" },
  { x: 14.9, y: 19.4, w: 1.6, h: 1.2, c: "#5d5a50", label: "器材篮" },
  { x: 26,   y: 20.5, w: 1.6, h: 1.6, c: "#6b5c46", label: "货箱" },
  { x: 27.9, y: 22.7, w: 1.6, h: 1.6, c: "#6b5c46", label: "" },
  { x: 32.6, y: 20.9, w: 1.6, h: 1.6, c: "#6b5c46", label: "" },
  { x: 31,   y: 18.6, w: 4.4, h: 1.0, c: "#5a5044", label: "卸货台" },
];

// 圆桌（A 婚宴厅）
const TABLES = [
  { x: 9,  y: 5,   r: 2.1 },
  { x: 20, y: 4.2, r: 2.1 },
  { x: 29, y: 5.6, r: 2.1 },
];

// 房间区域（标签与判定）
const ROOMS = [
  { id: "A", name: "A 婚宴厅（公共现实底片）",   x: 2,    y: 1.5,  w: 33.4, h: 8.0,  c: "#7c5a4b" },
  { id: "B", name: "B 后场服务走廊",             x: 2,    y: 10.1, w: 33.4, h: 7.2,  c: "#5f7169" },
  { id: "C", name: "C 录像/广播室",              x: 2,    y: 17.9, w: 11,   h: 7.6,  c: "#5c646a" },
  { id: "E", name: "E 洗涤/器材间",              x: 13.6, y: 17.9, w: 10.4, h: 7.6,  c: "#63695f" },
  { id: "D", name: "D 卸货口",                   x: 24.6, y: 17.9, w: 10.8, h: 7.6,  c: "#6d5f4c" },
];

// 低处区域：只改变声学状态与材料证据，不画线、不变色（标注模式除外）
const LOW_ZONE = { x: 3, y: 15.0, w: 19, h: 2.3 };

// 同一不可见高度留下的材料后果（柜脚/门框下部受压痕），静态证据，不是彩色路线
const PRESS_MARKS = [
  { x: 6.3,  y: 16.15 }, { x: 8.6, y: 16.15 }, { x: 11.6, y: 16.15 },
  { x: 14.3, y: 16.15 }, { x: 17.2, y: 16.15 }, { x: 20.6, y: 16.15 },
  { x: 8.15, y: 17.15 }, { x: 9.45, y: 17.15 },   // C 门框下部
  { x: 18.15, y: 17.15 }, { x: 19.45, y: 17.15 }, // E 门框下部
];

// 固定机位（标注层，对齐 Round 3 验证机位）
const CAMS = [
  { x: 17.9, y: 8.6,  a: Math.PI / 2,  name: "Cam_A_B" },
  { x: 5.0,  y: 24.4, a: -Math.PI / 4, name: "Cam_C_Door" },
  { x: 21.5, y: 19.0, a: Math.PI * 0.85, name: "Cam_E_B" },
];

// 实体旧后勤路线：D → B → C门外 → E → D（对齐 UE H00DemoDirector 航点结构）
const ROUTE = [
  { x: 30.5, y: 21.8, pause: 2.2, act: "整理箱位" },
  { x: 29.5, y: 17.6, pause: 0 },
  { x: 29.5, y: 13.8, pause: 0 },
  { x: 13.0, y: 13.8, pause: 0 },
  { x: 13.0, y: 16.6, pause: 0 },
  { x: 8.8,  y: 16.6, pause: 2.6, act: "在 C 门外放盘" },
  { x: 13.0, y: 16.6, pause: 0 },
  { x: 18.8, y: 16.6, pause: 0.8, act: "擦手" },
  { x: 18.8, y: 20.5, pause: 0 },
  { x: 17.2, y: 22.6, pause: 3.2, act: "洗涤与放置" },
  { x: 18.8, y: 20.5, pause: 0 },
  { x: 18.8, y: 16.6, pause: 0, evidence: true }, // E/B 交界：侧向证据触发点
  { x: 22.6, y: 16.6, pause: 0 },
  { x: 29.5, y: 15.5, pause: 0 },
  { x: 29.5, y: 17.6, pause: 0 },
];

const PLAYER_START = { x: 6.5, y: 7.8 };
const ARCHIVE_POINT = { x: 5.5, y: 19.75 };
const ARCHIVE_RADIUS = 2.4;     // 对齐 UE 240UU
const PLAYER_SPEED = 3.6;       // 对齐 UE 360UU/s
const ENTITY_SPEED = 1.5;       // 对齐 UE 150UU/s
const PLAYER_R = 0.35, ENTITY_R = 0.42;

const BEATS = [
  { t0: 0,  t1: 12, hint: "从 A 婚宴厅出发：找到通往后场的服务门（下方门洞）" },
  { t0: 12, t1: 28, hint: "B 走廊二选一：沿服务台的浅处线，或从器材凹位穿低处线（听伴奏的变化）" },
  { t0: 28, t1: 43, hint: "进入 C，在卡座 2.4m 内按 E 完成 REC/PAUSE 归档" },
  { t0: 43, t1: 60, hint: "选择返程路线：浅处更稳，低处更快但会与实体的旧路线交叉" },
  { t0: 60, t1: 76, hint: "实体继续普通工作；若你在低处且视线可及，E/B 交界会有一次短暂侧向证据" },
  { t0: 76, t1: 90, hint: "回到 A 婚宴厅，完成循环；实体沿旧路线离开" },
];

// ---------- 运行状态 ----------
const state = {
  player: { x: PLAYER_START.x, y: PLAYER_START.y, a: Math.PI / 2 },
  keys: {},
  clockStarted: false,
  t: 0,
  archived: false,
  archivedAt: -99,
  completed: false,
  entity: {
    x: ROUTE[0].x, y: ROUTE[0].y, a: -Math.PI / 2,
    next: 1, pauseRemaining: Infinity, // 起始滞留在 D，节拍钟启动后再放行
    mode: "WORK",                      // WORK / MOVE / WAIT
    actLabel: "整理箱位",
    stepAcc: 0,
  },
  evidence: { active: 0, shownThisLoop: false },
  showAnnotations: false,
  muted: false,
  lowZoneNow: false,
  logs: [],
  frozen: false,
};

// ---------- 工具 ----------
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const inRect = (p, r) => p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;

function log(msg) {
  state.logs.push(msg);
  if (state.logs.length > 200) state.logs.shift();
  const el = document.getElementById("log");
  el.textContent = state.logs.slice(-40).join("\n");
  el.scrollTop = el.scrollHeight;
}

function segRectHit(x1, y1, x2, y2, r) {
  // 线段与 AABB 相交（slab 法）
  const dx = x2 - x1, dy = y2 - y1;
  let tmin = 0, tmax = 1;
  for (const [p, d, lo, hi] of [[x1, dx, r.x, r.x + r.w], [y1, dy, r.y, r.y + r.h]]) {
    if (Math.abs(d) < 1e-9) { if (p < lo || p > hi) return false; continue; }
    let t1 = (lo - p) / d, t2 = (hi - p) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  return true;
}
const losClear = (a, b) => !WALLS.some(w => segRectHit(a.x, a.y, b.x, b.y, w));

function collideCircleRect(p, r, rect) {
  const cx = clamp(p.x, rect.x, rect.x + rect.w);
  const cy = clamp(p.y, rect.y, rect.y + rect.h);
  return Math.hypot(p.x - cx, p.y - cy) < r;
}

function moveWithCollision(p, r, dx, dy, blockers) {
  // 分轴移动实现贴墙滑动；实体永不推动玩家（合同：不碰撞推回）
  const tryAxis = (nx, ny) => {
    const np = { x: nx, y: ny };
    for (const w of WALLS) if (collideCircleRect(np, r, w)) return false;
    for (const f of FURN) if (collideCircleRect(np, r, f)) return false;
    for (const t of TABLES) if (Math.hypot(np.x - t.x, np.y - t.y) < r + t.r) return false;
    for (const b of blockers || []) if (Math.hypot(np.x - b.x, np.y - b.y) < r + b.r) return false;
    return true;
  };
  if (tryAxis(p.x + dx, p.y)) p.x += dx;
  if (tryAxis(p.x, p.y + dy)) p.y += dy;
}

function roomOf(p) {
  for (const r of ROOMS) if (inRect(p, r)) return r.id;
  return "?";
}

// ---------- 声音（全部程序化，无外部素材；不使用水声） ----------
const audio = { ctx: null, master: null, musicFilter: null, musicGain: null, notes: 0, nextNote: 0 };
const SCALE = [392, 440, 523.25, 587.33, 659.25, 523.25, 440, 349.23]; // 远处宴会伴奏动机

function audioInit() {
  if (audio.ctx || state.frozen) return;
  try {
    audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) { return; }
  audio.master = audio.ctx.createGain();
  audio.master.gain.value = 0.9;
  audio.master.connect(audio.ctx.destination);
  audio.musicGain = audio.ctx.createGain();
  audio.musicGain.gain.value = 0.12;
  audio.musicFilter = audio.ctx.createBiquadFilter();
  audio.musicFilter.type = "lowpass";
  audio.musicFilter.frequency.value = 2600;
  audio.musicGain.connect(audio.musicFilter).connect(audio.master);
  audio.nextNote = audio.ctx.currentTime + 0.2;
  log("H00 | Audio context started (procedural, no assets, no water sounds).");
}

function audioTick() {
  if (!audio.ctx || state.muted) return;
  const ct = audio.ctx.currentTime;
  // 伴奏调度
  while (audio.nextNote < ct + 0.4) {
    const f = SCALE[audio.notes % SCALE.length];
    const osc = audio.ctx.createOscillator();
    const g = audio.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = f;
    g.gain.setValueAtTime(0.0001, audio.nextNote);
    g.gain.linearRampToValueAtTime(0.5, audio.nextNote + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, audio.nextNote + 0.8);
    osc.connect(g).connect(audio.musicGain);
    osc.start(audio.nextNote); osc.stop(audio.nextNote + 0.85);
    audio.nextNote += 0.9;
    audio.notes++;
  }
  // 距离衰减 + 低处声学状态（变厚变远：砍高频、略升增益）
  const d = Math.max(1, dist(state.player, { x: 3.2, y: 2.45 }));
  const base = clamp(2.2 / d, 0.03, 0.55) * 0.35;
  const low = state.lowZoneNow;
  const inA = roomOf(state.player) === "A";
  audio.musicGain.gain.setTargetAtTime(low ? base * 1.35 : base, audio.ctx.currentTime, 0.15);
  audio.musicFilter.frequency.setTargetAtTime(low ? 420 : (inA ? 2600 : 1300), audio.ctx.currentTime, 0.15);
}

function playStep(d, pan) {
  if (!audio.ctx || state.muted) return;
  const ct = audio.ctx.currentTime;
  const osc = audio.ctx.createOscillator();
  const g = audio.ctx.createGain();
  const p = audio.ctx.createStereoPanner ? audio.ctx.createStereoPanner() : null;
  osc.type = "square"; osc.frequency.value = 130 + Math.random() * 40;
  const vol = clamp(1.4 / (d * d), 0.003, 0.16);
  g.gain.setValueAtTime(vol, ct);
  g.gain.exponentialRampToValueAtTime(0.0001, ct + 0.07);
  if (p) { p.pan.value = clamp(pan, -1, 1); osc.connect(g).connect(p).connect(audio.master); }
  else osc.connect(g).connect(audio.master);
  osc.start(ct); osc.stop(ct + 0.08);
}

function playClink(d) {
  if (!audio.ctx || state.muted) return;
  const ct = audio.ctx.currentTime;
  const osc = audio.ctx.createOscillator();
  const g = audio.ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(1500, ct);
  osc.frequency.exponentialRampToValueAtTime(880, ct + 0.12);
  g.gain.setValueAtTime(clamp(1.8 / (d * d), 0.004, 0.2), ct);
  g.gain.exponentialRampToValueAtTime(0.0001, ct + 0.28);
  osc.connect(g).connect(audio.master);
  osc.start(ct); osc.stop(ct + 0.3);
}

function playArchiveClick() {
  if (!audio.ctx || state.muted) return;
  const ct = audio.ctx.currentTime;
  [0, 0.14].forEach(off => {
    const osc = audio.ctx.createOscillator();
    const g = audio.ctx.createGain();
    osc.type = "square"; osc.frequency.value = 240;
    g.gain.setValueAtTime(0.18, ct + off);
    g.gain.exponentialRampToValueAtTime(0.0001, ct + off + 0.05);
    osc.connect(g).connect(audio.master);
    osc.start(ct + off); osc.stop(ct + off + 0.06);
  });
}

// ---------- 交互 ----------
function tryArchive() {
  const d = dist(state.player, ARCHIVE_POINT);
  log(`H00 | Archive interaction distance: ${(d * 100).toFixed(1)}.`);
  if (d > ARCHIVE_RADIUS) {
    setHint("需要走到 C 房间 REC/PAUSE 卡座 2.4m 内再按 E");
    return;
  }
  if (state.archived) {
    setHint("录像带已归档。沿浅处服务线或低处器材线返回 A");
    return;
  }
  state.archived = true;
  state.archivedAt = state.t;
  playArchiveClick();
  document.getElementById("tape-chip").textContent = "ARCHIVED";
  document.getElementById("tape-chip").className = "chip chip-archived";
  document.getElementById("task-text").textContent = "任务：沿任一路线返回 A 宴会厅（路线是信息与风险的交换，无对错）";
  log("H00 | Archive state changed: COMPLETE.");
  log("H00 | CRT: ordinary wedding footage for a few seconds. No monster, no explanation.");
  setHint("归档完成。屏幕上是普通婚宴画面。选择返程路线");
}

function resetDemo(reason) {
  state.player.x = PLAYER_START.x; state.player.y = PLAYER_START.y; state.player.a = Math.PI / 2;
  state.clockStarted = false; state.t = 0;
  state.archived = false; state.archivedAt = -99; state.completed = false;
  const e = state.entity;
  e.x = ROUTE[0].x; e.y = ROUTE[0].y; e.next = 1;
  e.pauseRemaining = Infinity; e.mode = "WORK"; e.actLabel = "整理箱位";
  state.evidence.active = 0; state.evidence.shownThisLoop = false;
  document.getElementById("tape-chip").textContent = "TAPE IN HAND";
  document.getElementById("tape-chip").className = "chip chip-hand";
  document.getElementById("task-text").textContent = "任务：把婚宴录像带插回 C 房间卡座，按 REC/PAUSE 归档";
  log(`H00 | Reset: player, archive state, and returner route restored. RESET_REASON=${reason}.`);
  setHint("已复位到 00 秒。用 WASD 开始移动");
}

function setHint(text) {
  document.getElementById("hint-overlay").textContent = text || "";
}

// ---------- 更新 ----------
let yieldLoggedAt = -99;
function update(dt) {
  const p = state.player, e = state.entity;

  // 玩家移动
  let dx = 0, dy = 0;
  if (state.keys["KeyW"] || state.keys["ArrowUp"]) dy -= 1;
  if (state.keys["KeyS"] || state.keys["ArrowDown"]) dy += 1;
  if (state.keys["KeyA"] || state.keys["ArrowLeft"]) dx -= 1;
  if (state.keys["KeyD"] || state.keys["ArrowRight"]) dx += 1;
  if (dx || dy) {
    if (!state.clockStarted) {
      state.clockStarted = true;
      e.pauseRemaining = 10; // 00–12 秒：实体已在 D，但不让玩家看见
      log("H00 | Beat clock started.");
    }
    const n = Math.hypot(dx, dy);
    p.a = Math.atan2(dy, dx);
    moveWithCollision(p, PLAYER_R, (dx / n) * PLAYER_SPEED * dt, (dy / n) * PLAYER_SPEED * dt,
      [{ x: e.x, y: e.y, r: ENTITY_R }]);
  }
  if (state.clockStarted) state.t += dt;

  // 低处声学状态
  const low = inRect(p, LOW_ZONE);
  if (low !== state.lowZoneNow) {
    state.lowZoneNow = low;
    const el = document.getElementById("acoustic-state");
    if (low) {
      el.textContent = "低处 —— 伴奏变厚、变远（同一高度的后果，不是滤镜）";
      el.className = "state-low";
      log("H00 | Acoustic state: LOW (music thicker and farther; no water, no filter).");
    } else {
      el.textContent = "正常 —— 伴奏来自 A 宴会厅音箱";
      el.className = "state-normal";
      log("H00 | Acoustic state: NORMAL.");
    }
  }

  // 实体：回返状态机（不追逐、不冲刺、不推回）
  if (e.pauseRemaining !== Infinity || state.clockStarted) {
    if (e.mode === "WORK") {
      if (state.clockStarted) e.pauseRemaining -= dt;
      if (e.pauseRemaining <= 0) { e.mode = "MOVE"; e.actLabel = ""; }
    } else {
      const target = ROUTE[e.next];
      const vx = target.x - e.x, vy = target.y - e.y;
      const d = Math.hypot(vx, vy);
      // 让行：玩家占用路线前方时原地等待
      const aheadX = e.x + (vx / (d || 1)) * 1.3, aheadY = e.y + (vy / (d || 1)) * 1.3;
      const playerBlocks = dist(p, e) < 1.15 || Math.hypot(p.x - aheadX, p.y - aheadY) < 0.95;
      if (playerBlocks) {
        if (e.mode !== "WAIT") {
          e.mode = "WAIT";
          if (state.t - yieldLoggedAt > 2) {
            yieldLoggedAt = state.t;
            log("H00 | Returner waiting: route occupied by player. No push, no chase.");
          }
        }
      } else if (e.mode === "WAIT" && dist(p, e) > 1.5) {
        e.mode = "MOVE";
      }
      if (e.mode === "MOVE") {
        if (d < 0.12) {
          e.x = target.x; e.y = target.y;
          const reached = e.next;
          e.next = (e.next + 1) % ROUTE.length;
          log(`H00 | Returner reached route point ${reached}.`);
          if (reached === 0) state.evidence.shownThisLoop = false;
          if (target.pause > 0) {
            e.mode = "WORK"; e.pauseRemaining = target.pause; e.actLabel = target.act || "";
            playClink(Math.max(1, dist(p, e)));
          }
          // E/B 交界：一次性短暂侧向证据（需要玩家在低处且视线可及）
          if (target.evidence && !state.evidence.shownThisLoop &&
              inRect(p, LOW_ZONE) && losClear(p, e) && dist(p, e) < 8) {
            state.evidence.active = 1.6;
            state.evidence.shownThisLoop = true;
            log("H00 | Evidence: petrified compound-eye front side, brief lateral view (1.6s). No jumpscare.");
          }
        } else {
          e.a = Math.atan2(vy, vx);
          e.x += (vx / d) * ENTITY_SPEED * dt;
          e.y += (vy / d) * ENTITY_SPEED * dt;
          e.stepAcc += dt;
          if (e.stepAcc > 0.42) {
            e.stepAcc = 0;
            playStep(Math.max(1, dist(p, e)), (e.x - p.x) / 12);
          }
        }
      }
    }
  }
  if (state.evidence.active > 0) state.evidence.active -= dt;

  // 循环完成：归档后回到 A
  if (state.archived && !state.completed && roomOf(p) === "A") {
    state.completed = true;
    log("H00 | Demo loop complete: player returned to A. Returner keeps its old route. No ending explained.");
    setHint("循环完成（A→B→C→B→A）。实体仍沿旧路线工作。按 R 复位重看");
  }

  // 节拍高亮
  const items = document.querySelectorAll("#beats li");
  items.forEach((li, i) => {
    li.classList.toggle("active", state.clockStarted && state.t >= BEATS[i].t0 && state.t < BEATS[i].t1);
    li.classList.toggle("done", state.clockStarted && state.t >= BEATS[i].t1);
  });
  if (state.clockStarted && !state.completed) {
    const b = BEATS.find(b => state.t >= b.t0 && state.t < b.t1);
    if (b) setHint(b.hint);
    else if (state.t >= 90) setHint("节拍结束，自由复盘。实体继续旧路线；按 R 复位");
  }

  audioTick();
}

// ---------- 渲染 ----------
const cv = document.getElementById("stage");
const cx = cv.getContext("2d");
const px = v => OX + v * S, py = v => OY + v * S;

function drawRect(r, color) {
  cx.fillStyle = color;
  cx.fillRect(px(r.x), py(r.y), r.w * S, r.h * S);
}

function render() {
  cx.fillStyle = "#14120f";
  cx.fillRect(0, 0, cv.width, cv.height);
  cx.textBaseline = "top";

  // 房间地面
  for (const r of ROOMS) drawRect(r, r.c);
  // 门洞地面（连通提示）
  cx.fillStyle = "#8a8172";
  cx.fillRect(px(17), py(9.5), 2 * S, 0.6 * S);
  cx.fillRect(px(8), py(17.3), 1.6 * S, 0.6 * S);
  cx.fillRect(px(18), py(17.3), 1.6 * S, 0.6 * S);
  cx.fillRect(px(28), py(17.3), 3 * S, 0.6 * S);

  // 材料证据（柜脚/门框下部同高受压痕，静态深色小痕，不是路线标记）
  cx.fillStyle = "rgba(30,26,20,0.75)";
  for (const m of PRESS_MARKS) cx.fillRect(px(m.x) - 3, py(m.y) - 2, 6, 4);

  // 墙体
  for (const w of WALLS) drawRect(w, "#cfc6b4");

  // 家具
  for (const f of FURN) {
    drawRect(f, f.c);
    if (f.label) {
      cx.fillStyle = "rgba(232,224,204,0.75)";
      cx.font = "11px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
      // 贴着北墙的台面标签画在下方，避免被墙裁切
      const labelY = f.y < 11 && f.y > 9 ? py(f.y + f.h) + 3 : py(f.y) - 13;
      cx.fillText(f.label, px(f.x), labelY);
    }
  }
  // 圆桌（事件红桌面，对齐灰盒渲染）
  for (const t of TABLES) {
    cx.fillStyle = "#c25040";
    cx.beginPath(); cx.arc(px(t.x), py(t.y), t.r * S, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = "#a03e30";
    cx.beginPath(); cx.arc(px(t.x), py(t.y), t.r * S * 0.7, 0, Math.PI * 2); cx.fill();
  }

  // 房间标签
  cx.font = "bold 15px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
  cx.fillStyle = "rgba(240,232,212,0.85)";
  cx.fillText("A 婚宴厅", px(3), py(8.4));
  cx.fillText("B 后场服务走廊", px(3), py(13.2));
  cx.fillText("C 录像/广播室", px(2.6), py(24.4));
  cx.fillText("E 洗涤/器材间", px(14.2), py(18.3));
  cx.fillText("D 卸货口", px(25.2), py(24.4));

  // C 卡座交互提示与 CRT
  const nearDeck = dist(state.player, ARCHIVE_POINT) <= ARCHIVE_RADIUS;
  if (nearDeck) {
    cx.strokeStyle = "rgba(216,208,189,0.5)";
    cx.setLineDash([6, 6]);
    cx.beginPath();
    cx.arc(px(ARCHIVE_POINT.x), py(ARCHIVE_POINT.y), ARCHIVE_RADIUS * S, 0, Math.PI * 2);
    cx.stroke();
    cx.setLineDash([]);
    cx.fillStyle = "#e8e0cc";
    cx.font = "12px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
    cx.fillText(state.archived ? "已归档" : "按 E：插带并 REC/PAUSE", px(3.4), py(21.0));
  }
  // CRT 屏幕：归档后几秒显示普通婚宴画面（无怪物、无解释）
  const sinceArchive = state.t - state.archivedAt;
  cx.fillStyle = "#1b1a17";
  cx.fillRect(px(3.6), py(19.15), 1.7 * S, 1.2 * S);
  if (state.archived && sinceArchive < 5) {
    cx.fillStyle = "#8d7454";
    cx.fillRect(px(3.7), py(19.25), 1.5 * S, 1.0 * S);
    cx.fillStyle = "#c25040";
    cx.fillRect(px(3.85), py(19.85), 0.5 * S, 0.3 * S); // 席面
    cx.fillRect(px(4.55), py(19.9), 0.4 * S, 0.25 * S);
    cx.fillStyle = "#e8dcc0";
    cx.fillRect(px(4.0), py(19.4), 0.16 * S, 0.34 * S);  // 站位人影
    cx.fillRect(px(4.5), py(19.42), 0.16 * S, 0.32 * S);
  } else {
    cx.fillStyle = "#2a2a26";
    cx.fillRect(px(3.7), py(19.25), 1.5 * S, 1.0 * S);
  }

  // 标注层（V）：机位、实体旧路线、低处范围 —— 设计标注，不进入正式画面
  if (state.showAnnotations) {
    cx.strokeStyle = "rgba(216,185,138,0.9)";
    cx.setLineDash([8, 6]);
    cx.strokeRect(px(LOW_ZONE.x), py(LOW_ZONE.y), LOW_ZONE.w * S, LOW_ZONE.h * S);
    cx.setLineDash([]);
    cx.fillStyle = "rgba(216,185,138,0.9)";
    cx.font = "11px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
    cx.fillText("低处（设计标注：仅声学与材料后果，游戏内不可见）", px(LOW_ZONE.x), py(LOW_ZONE.y) - 14);

    cx.strokeStyle = "rgba(154,176,127,0.8)";
    cx.setLineDash([4, 5]);
    cx.beginPath();
    cx.moveTo(px(ROUTE[0].x), py(ROUTE[0].y));
    for (let i = 1; i <= ROUTE.length; i++) {
      const w = ROUTE[i % ROUTE.length];
      cx.lineTo(px(w.x), py(w.y));
    }
    cx.stroke();
    cx.setLineDash([]);
    ROUTE.forEach((w, i) => {
      cx.fillStyle = w.pause > 0 ? "#c9b57a" : "rgba(154,176,127,0.9)";
      cx.beginPath(); cx.arc(px(w.x), py(w.y), 4, 0, Math.PI * 2); cx.fill();
      if (w.act) {
        cx.fillStyle = "rgba(201,181,122,0.95)";
        cx.fillText(`${i} ${w.act}`, px(w.x) + 7, py(w.y) - 5);
      }
    });
    cx.fillStyle = "rgba(154,176,127,0.9)";
    cx.fillText("实体旧后勤路线 D→B→C门外→E→D（设计标注）", px(23.2), py(13.0));

    for (const c of CAMS) {
      cx.save();
      cx.translate(px(c.x), py(c.y));
      cx.rotate(c.a);
      cx.fillStyle = "rgba(125,150,142,0.28)";
      cx.beginPath();
      cx.moveTo(0, 0); cx.arc(0, 0, 3.6 * S, -0.42, 0.42); cx.closePath(); cx.fill();
      cx.fillStyle = "#7d968e";
      cx.fillRect(-6, -6, 12, 12);
      cx.restore();
      cx.fillStyle = "#a9c2b8";
      cx.font = "11px monospace";
      cx.fillText(c.name, px(c.x) + 9, py(c.y) + 6);
    }
  }

  // 实体：视线被墙挡住时不渲染（声音先于画面）
  const e = state.entity;
  const visible = losClear(state.player, e);
  const audible = dist(state.player, e) < 24; // 后场安静，规律的工作鞋/金属盘声传得远（声音先于画面）
  if (!visible && audible && (e.mode === "MOVE" || e.actLabel)) {
    // 只给声音涟漪，不给位置实体（半径模糊化）
    const rr = 0.9 + (state.t % 1.2) * 1.4;
    cx.strokeStyle = "rgba(200,188,160,0.22)";
    cx.beginPath(); cx.arc(px(e.x), py(e.y), rr * S, 0, Math.PI * 2); cx.stroke();
    cx.strokeStyle = "rgba(200,188,160,0.10)";
    cx.beginPath(); cx.arc(px(e.x), py(e.y), (rr + 0.9) * S, 0, Math.PI * 2); cx.stroke();
  }
  if (visible) {
    cx.save();
    cx.translate(px(e.x), py(e.y));
    cx.rotate(e.a);
    // 背影主体：普通后勤工作者（旧蓝工服、肩线、托盘）
    cx.fillStyle = "#3f4a52";
    cx.beginPath(); cx.arc(0, 0, ENTITY_R * S, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = "#2f373d";
    cx.fillRect(-ENTITY_R * S, -3, ENTITY_R * S * 0.7, 6); // 背側
    cx.fillStyle = "#8f8878";
    cx.fillRect(ENTITY_R * S * 0.45, -5, 5, 10); // 手中金属盘
    if (state.evidence.active > 0) {
      // 侧向证据：前侧干燥石化结构（短暂、点刻质感、非蓝色、非跳脸）
      cx.fillStyle = "#d8d0bd";
      cx.beginPath(); cx.arc(ENTITY_R * S * 0.35, 0, ENTITY_R * S * 0.62, -1.25, 1.25); cx.closePath(); cx.fill();
      cx.fillStyle = "#a99f88";
      for (let i = 0; i < 14; i++) {
        const aa = -1.1 + i * 0.17, rr2 = ENTITY_R * S * (0.28 + (i % 3) * 0.12);
        cx.fillRect(Math.cos(aa) * rr2 + ENTITY_R * S * 0.32, Math.sin(aa) * rr2, 2, 2);
      }
    }
    cx.restore();
    const tag = e.mode === "WAIT" ? "等待：路线被玩家占用（不推挤、不追逐）"
      : (state.evidence.active > 0 ? "侧向证据：前侧干燥石化结构（短暂）"
        : (e.actLabel ? `工作：${e.actLabel}` : ""));
    if (tag) {
      cx.font = "12px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
      cx.fillStyle = "rgba(23,21,18,0.8)";
      const tw = cx.measureText(tag).width;
      cx.fillRect(px(e.x) - tw / 2 - 5, py(e.y) - ENTITY_R * S - 24, tw + 10, 18);
      cx.fillStyle = "#e0d6b8";
      cx.fillText(tag, px(e.x) - tw / 2, py(e.y) - ENTITY_R * S - 21);
    }
  }

  // 玩家（旧蓝工服 + 朝向 + 手持录像带）
  const p = state.player;
  cx.save();
  cx.translate(px(p.x), py(p.y));
  cx.rotate(p.a);
  cx.fillStyle = "#4a6478";
  cx.beginPath(); cx.arc(0, 0, PLAYER_R * S, 0, Math.PI * 2); cx.fill();
  cx.fillStyle = "#dbe4ea";
  cx.fillRect(PLAYER_R * S * 0.4, -2, 6, 4); // 朝向
  if (!state.archived) {
    cx.fillStyle = "#1e1c19";
    cx.fillRect(-3, PLAYER_R * S * 0.5, 8, 5); // 手中录像带
  }
  cx.restore();
  cx.font = "11px 'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif";
  cx.fillStyle = "#cfe0ee";
  cx.fillText("玩家", px(p.x) - 11, py(p.y) + PLAYER_R * S + 4);

  // 计时
  cx.font = "12px monospace";
  cx.fillStyle = "#8f8878";
  cx.fillText(state.clockStarted ? `t = ${state.t.toFixed(1)}s` : "t = 00.0s（按移动键启动节拍钟）", 12, 10);
}

// ---------- 输入 ----------
window.addEventListener("keydown", ev => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(ev.code)) ev.preventDefault();
  audioInit();
  if (audio.ctx && audio.ctx.state === "suspended") audio.ctx.resume();
  state.keys[ev.code] = true;
  if (ev.code === "KeyE") tryArchive();
  if (ev.code === "KeyR") resetDemo("MANUAL");
  if (ev.code === "KeyV") {
    state.showAnnotations = !state.showAnnotations;
    log(`H00 | Annotation layer ${state.showAnnotations ? "ON" : "OFF"} (cams, old route, low zone).`);
  }
  if (ev.code === "KeyM") {
    state.muted = !state.muted;
    log(`H00 | Audio ${state.muted ? "muted" : "unmuted"}.`);
  }
});
window.addEventListener("keyup", ev => { state.keys[ev.code] = false; });
window.addEventListener("pointerdown", () => {
  audioInit();
  if (audio.ctx && audio.ctx.state === "suspended") audio.ctx.resume();
});

// ---------- 截图场景模式（?px=&py=&ent=&…&freeze=1，用于生成文档配图） ----------
function applySceneParams() {
  const q = new URLSearchParams(location.search);
  if (!q.size) return;
  if (q.get("bare")) document.body.classList.add("bare"); // 只留画布（分镜截图用）
  const num = k => q.has(k) ? parseFloat(q.get(k)) : null;
  if (num("px") !== null) { state.player.x = num("px"); state.player.y = num("py") ?? state.player.y; }
  if (num("pa") !== null) state.player.a = num("pa");
  if (num("ent") !== null) {
    const i = Math.floor(num("ent")) % ROUTE.length;
    const f = num("ent") - Math.floor(num("ent"));
    const a = ROUTE[i], b = ROUTE[(i + 1) % ROUTE.length];
    state.entity.x = a.x + (b.x - a.x) * f;
    state.entity.y = a.y + (b.y - a.y) * f;
    state.entity.a = Math.atan2(b.y - a.y, b.x - a.x);
    state.entity.next = (i + 1) % ROUTE.length;
    state.entity.mode = "MOVE";
    state.entity.pauseRemaining = 0;
    state.entity.actLabel = "";
  }
  if (q.get("entwork")) { state.entity.mode = "WORK"; state.entity.actLabel = q.get("entwork"); }
  if (q.get("wait")) { state.entity.mode = "WAIT"; }
  if (q.get("archived")) {
    state.archived = true; state.archivedAt = 0; state.t = 2;
    document.getElementById("tape-chip").textContent = "ARCHIVED";
    document.getElementById("tape-chip").className = "chip chip-archived";
    document.getElementById("task-text").textContent = "任务：沿任一路线返回 A 宴会厅（路线是信息与风险的交换，无对错）";
  }
  if (q.get("evidence")) { state.evidence.active = 1.6; }
  if (q.get("cams")) state.showAnnotations = true;
  if (num("beat") !== null) {
    state.clockStarted = true;
    const b = BEATS[Math.min(5, Math.max(0, Math.floor(num("beat"))))];
    state.t = q.get("archived") ? Math.max((b.t0 + b.t1) / 2, state.archivedAt + 2) : (b.t0 + b.t1) / 2;
    setHint(b.hint);
    document.querySelectorAll("#beats li").forEach((li, i) => {
      li.classList.toggle("active", i === Math.floor(num("beat")));
      li.classList.toggle("done", i < Math.floor(num("beat")));
    });
  }
  if (q.get("crt") && state.archived) state.archivedAt = state.t - 2; // 截图用：让 CRT 处于婚宴画面窗口内
  if (q.get("hint")) setHint(q.get("hint"));
  (q.get("seedlog") || "").split("|").filter(Boolean).forEach(l => log(l));
  // 冻结模式下 update 不运行，手动同步声学状态面板
  if (inRect(state.player, LOW_ZONE)) {
    state.lowZoneNow = true;
    const el = document.getElementById("acoustic-state");
    el.textContent = "低处 —— 伴奏变厚、变远（同一高度的后果，不是滤镜）";
    el.className = "state-low";
  }
  if (q.get("freeze")) state.frozen = true;
}

// ---------- 主循环 ----------
log("H00 | Scene built: A/B/C/D/E, archive station, returner route D-B-C-E-D.");
log("H00 | Contract: no attack, no sprint, no jumpscare, no push-back, no visible water, no blue filter.");
setHint("WASD 移动开始。任务：把录像带送到 C 房间卡座归档");
applySceneParams();

let lastT = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - lastT) / 1000);
  lastT = now;
  update(dt);
  render();
  requestAnimationFrame(frame);
}
if (state.frozen) {
  render();
} else {
  requestAnimationFrame(frame);
}
