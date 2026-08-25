"use strict";
/*
 * 返潮 H00-R0《婚宴后场：返席》—— 行为合同（唯一事实源）
 * 本文件是纯数据 + 纯函数：无 three.js、无 DOM，Node 与浏览器共用。
 * 数值对齐 UE 主线（demo/ue/H00_Source）与灰盒 v1：
 *   归档半径 2.4m / 玩家 3.6m/s / 实体 1.5m/s / 证据 ≤1.6s 每圈一次
 * 坐标系：米制。平面 x 向东、z 向南（与灰盒俯视图 y 一致）；y 向上。
 */

export const WORLD = { w: 38, d: 27 };

// 墙体（平面碰撞 + 视线遮挡；门洞已挖出）
export const WALLS = [
  { x: 1.4,  z: 0.9,  w: 35.2, d: 0.6 },   // 外墙北
  { x: 1.4,  z: 25.5, w: 35.2, d: 0.6 },   // 外墙南
  { x: 1.4,  z: 0.9,  w: 0.6,  d: 25.2 },  // 外墙西
  { x: 35.4, z: 0.9,  w: 0.6,  d: 25.2 },  // 外墙东
  { x: 2,    z: 9.5,  w: 15,   d: 0.6 },   // A/B 墙西段（门洞 x17–19）
  { x: 19,   z: 9.5,  w: 16.4, d: 0.6 },   // A/B 墙东段
  { x: 2,    z: 17.3, w: 6,    d: 0.6 },   // B/南排墙（C 门洞 x8–9.6）
  { x: 9.6,  z: 17.3, w: 8.4,  d: 0.6 },   // （E 门洞 x18–19.6）
  { x: 19.6, z: 17.3, w: 8.4,  d: 0.6 },   // （D 开口 x28–31）
  { x: 31,   z: 17.3, w: 4.4,  d: 0.6 },
  { x: 13,   z: 17.9, w: 0.6,  d: 7.6 },   // C/E 隔墙
  { x: 24,   z: 17.9, w: 0.6,  d: 7.6 },   // E/D 隔墙
];

// 门洞（视觉：门框 + 过梁；行为：无碰撞）
export const DOORS = [
  { id: "AB", x: 17,  z: 9.5,  w: 2,   d: 0.6, h: 2.25, dir: "z" }, // A→B 服务门
  { id: "C",  x: 8,   z: 17.3, w: 1.6, d: 0.6, h: 2.02, dir: "z" }, // C 录像室门
  { id: "E",  x: 18,  z: 17.3, w: 1.6, d: 0.6, h: 2.02, dir: "z" }, // E 洗涤间门
  { id: "D",  x: 28,  z: 17.3, w: 3,   d: 0.6, h: 2.55, dir: "z" }, // D 卸货卷帘口
];

// 核心家具碰撞（行为合同级；视觉道具的附加碰撞在 world 注册后合并）
export const FURN = [
  { x: 2.6,  z: 1.8,  w: 1.3, d: 1.3, tag: "speaker" },      // A 音箱堆
  { x: 32.6, z: 7.4,  w: 1.6, d: 1.1, tag: "cart" },         // A 备餐车
  { x: 4,    z: 10.4, w: 11,  d: 1.3, tag: "counterW" },     // B 服务台（浅处服务线）
  { x: 21.5, z: 10.4, w: 11,  d: 1.3, tag: "counterE" },     // B 保温台
  { x: 6,    z: 13.9, w: 6,   d: 1.1, tag: "rackW" },        // B 器材架（立在下沉巷北沿）
  { x: 14,   z: 13.9, w: 7,   d: 1.1, tag: "rackE" },        // B 器材架（x12–14 留过巷口）
  { x: 3.2,  z: 19.0, w: 4.6, d: 1.5, tag: "deck" },         // C 录像卡座 REC/PAUSE
  { x: 11.6, z: 19.2, w: 0.9, d: 4.2, tag: "tapeShelf" },    // C 磁带架
  { x: 14.5, z: 24.2, w: 5.5, d: 1.2, tag: "sink" },         // E 洗涤台（贴南墙）
  { x: 22.4, z: 19.4, w: 1.0, d: 3.4, tag: "drain" },        // E 沥水架
  { x: 14.9, z: 19.4, w: 1.6, d: 1.2, tag: "basket" },       // E 器材篮
  { x: 26,   z: 20.5, w: 1.6, d: 1.6, tag: "crate" },        // D 货箱
  { x: 27.9, z: 22.7, w: 1.6, d: 1.6, tag: "crate" },
  { x: 32.6, z: 20.9, w: 1.6, d: 1.6, tag: "crate" },
  { x: 31,   z: 18.6, w: 4.4, d: 1.0, tag: "dock" },         // D 卸货台
];

// A 婚宴厅圆桌（收场中的婚宴）
export const TABLES = [
  { x: 9,    z: 5,   r: 1.05 },
  { x: 13.6, z: 6.3, r: 1.05 },
  { x: 20,   z: 4.2, r: 1.05 },
  { x: 25.6, z: 6.6, r: 1.05 },
  { x: 29,   z: 5.6, r: 1.05 },
];

export const ROOMS = [
  { id: "A", name: "A 婚宴厅",       x: 2,    z: 1.5,  w: 33.4, d: 8.0,  ceil: 4.2 },
  { id: "B", name: "B 后场服务走廊", x: 2,    z: 10.1, w: 33.4, d: 7.2,  ceil: 3.0 },
  { id: "C", name: "C 录像/广播室",  x: 2,    z: 17.9, w: 11,   d: 7.6,  ceil: 2.8 },
  { id: "E", name: "E 洗涤/器材间",  x: 13.6, z: 17.9, w: 10.4, d: 7.6,  ceil: 2.8 },
  { id: "D", name: "D 卸货口",       x: 24.6, z: 17.9, w: 10.8, d: 7.6,  ceil: 3.5 },
];

// 低处：沿南墙下沉的器材推车巷（同一不可见高度界面之下）。
// 不画线、不变色；进入的证据是身体下降、声学变厚、柜脚与门框下部的受压后果。
// 北沿是斜坡（推车用），南沿直抵南排墙基；C/E 门洞内有磨损水泥门槛坡连回房间地面。
export const LOW_ZONE = { x: 3, z: 15.0, w: 19, d: 2.3 };
export const LOW_DEPTH = 0.35;   // 下沉深度（米）
export const LOW_RAMP = 0.7;     // 北沿/东西端过渡坡宽度
export const DOOR_THRESHOLDS = [
  { x: 8,  w: 1.6 },   // C 门槛坡（z 17.3–17.9）
  { x: 18, w: 1.6 },   // E 门槛坡
];

// 材料证据锚点（柜脚/门框下部受压痕，静态，不是路线标记）
export const PRESS_MARKS = [
  { x: 6.3,  z: 16.15 }, { x: 8.6,  z: 16.15 }, { x: 11.6, z: 16.15 },
  { x: 14.3, z: 16.15 }, { x: 17.2, z: 16.15 }, { x: 20.6, z: 16.15 },
  { x: 8.15, z: 17.15 }, { x: 9.45, z: 17.15 },   // C 门框下部
  { x: 18.15, z: 17.15 }, { x: 19.45, z: 17.15 }, // E 门框下部
];

// 固定机位（标注层，对齐 Round 3 验证机位）
export const CAMS = [
  { x: 17.9, z: 8.6,  a: Math.PI / 2,    name: "Cam_A_B" },
  { x: 5.0,  z: 24.4, a: -Math.PI / 4,   name: "Cam_C_Door" },
  { x: 21.5, z: 19.0, a: Math.PI * 0.85, name: "Cam_E_B" },
];

// 实体旧后勤路线：D → B → C门外 → E → D（对齐 UE H00DemoDirector 航点结构）
export const ROUTE = [
  { x: 30.5, z: 21.8, pause: 2.2, act: "boxes" },   // 整理箱位
  { x: 29.5, z: 17.6, pause: 0 },
  { x: 29.5, z: 13.8, pause: 0 },
  { x: 13.0, z: 13.8, pause: 0 },
  { x: 13.0, z: 16.6, pause: 0 },
  { x: 8.8,  z: 16.6, pause: 2.6, act: "tray" },    // 在 C 门外放盘
  { x: 13.0, z: 16.6, pause: 0 },
  { x: 18.8, z: 16.6, pause: 0.8, act: "wipe" },    // 擦手
  { x: 18.8, z: 20.5, pause: 0 },
  { x: 17.2, z: 23.5, pause: 3.2, act: "wash" },    // 洗涤与放置（无水声）
  { x: 18.8, z: 20.5, pause: 0 },
  // E/B 交界：路线固定的一拍停顿（不因玩家而变）；玩家蹲在低处才换到侧向证据
  { x: 18.8, z: 16.6, pause: 1.6, act: "check", evidence: true },
  { x: 22.6, z: 16.6, pause: 0 },
  { x: 29.5, z: 15.5, pause: 0 },
  { x: 29.5, z: 17.6, pause: 0 },
];

// 出生朝向 -1.25：开场静帧顺着 A 厅纵深看过圆桌与吊灯，直到远端服务门
export const PLAYER_START = { x: 6.5, z: 7.8, yaw: -1.25 };
export const ARCHIVE_POINT = { x: 5.5, z: 19.75 };
export const ARCHIVE_RADIUS = 2.4;   // 对齐 UE 240UU
export const PLAYER_SPEED = 3.6;     // 对齐 UE 360UU/s
export const ENTITY_SPEED = 1.5;     // 对齐 UE 150UU/s，恒定，不因玩家改变
export const PLAYER_R = 0.35;
export const ENTITY_R = 0.42;
export const EYE_HEIGHT = 1.62;

export const EVIDENCE = {
  duration: 1.6,   // ≤2s 合同上限内
  maxDist: 8,
  maxPerLoop: 1,
};

export const BEATS = [
  { t0: 0,  t1: 12, hint: "把录像带插回 C 房间的卡座。后场入口在南侧。" },
  { t0: 12, t1: 28, hint: "走廊二选一：沿服务台走，或从南侧器材槽下去。" },
  { t0: 28, t1: 43, hint: "在卡座前按 E：插带，REC/PAUSE。" },
  { t0: 43, t1: 60, hint: "带子归档了。回宴会厅。" },
  { t0: 60, t1: 76, hint: "" },
  { t0: 76, t1: 90, hint: "" },
];

// ---------- 纯函数 ----------
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const dist2d = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
export const inRect = (p, r) => p.x >= r.x && p.x <= r.x + r.w && p.z >= r.z && p.z <= r.z + r.d;

export function roomOf(p) {
  for (const r of ROOMS) if (inRect(p, r)) return r.id;
  return "?";
}

function smoothstep(a, b, v) {
  const t = clamp((v - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

// 地面高度：下沉巷 -LOW_DEPTH；北沿与东西端为坡，南沿直抵墙基；门洞内门槛坡升回房间
export function floorHeightAt(x, z) {
  // C/E 门洞内的门槛坡（墙厚 0.6m 内从槽底升到房间地面）
  for (const d of DOOR_THRESHOLDS) {
    if (x >= d.x && x <= d.x + d.w && z >= 17.3 && z <= 17.9) {
      return -LOW_DEPTH * (1 - smoothstep(17.3, 17.9, z));
    }
  }
  const L = LOW_ZONE;
  if (x < L.x || x > L.x + L.w || z < L.z || z > L.z + L.d) return 0;
  const fx = Math.min(smoothstep(L.x, L.x + LOW_RAMP, x), smoothstep(L.x + L.w, L.x + L.w - LOW_RAMP, x));
  const fn = smoothstep(L.z, L.z + LOW_RAMP, z);
  return -LOW_DEPTH * Math.min(fx, fn);
}

// 低处判定：物理上处于界面之下（声学状态与证据条件共用）
export const isLow = (p) => floorHeightAt(p.x, p.z) <= -0.15;

// 线段与 AABB 相交（slab 法，用于视线）
export function segRectHit(x1, z1, x2, z2, r) {
  const dx = x2 - x1, dz = z2 - z1;
  let tmin = 0, tmax = 1;
  for (const [p, d, lo, hi] of [[x1, dx, r.x, r.x + r.w], [z1, dz, r.z, r.z + r.d]]) {
    if (Math.abs(d) < 1e-9) { if (p < lo || p > hi) return false; continue; }
    let t1 = (lo - p) / d, t2 = (hi - p) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  return true;
}
export const losClear = (a, b) => !WALLS.some(w => segRectHit(a.x, a.z, b.x, b.z, w));

export function collideCircleRect(p, r, rect) {
  const cx = clamp(p.x, rect.x, rect.x + rect.w);
  const cz = clamp(p.z, rect.z, rect.z + rect.d);
  return Math.hypot(p.x - cx, p.z - cz) < r;
}

/*
 * 分轴移动实现贴墙滑动。
 * colliders: { rects: [...], circles: [{x,z,r}] }（world 可在合同碰撞外附加道具碰撞）
 * 实体永不推动玩家（合同：不碰撞推回）——实体只作为玩家的阻挡圆存在。
 */
export function moveWithCollision(p, radius, dx, dz, colliders) {
  const rects = colliders?.rects || [];
  const circles = colliders?.circles || [];
  const free = (nx, nz) => {
    const np = { x: nx, z: nz };
    for (const w of WALLS) if (collideCircleRect(np, radius, w)) return false;
    for (const f of FURN) if (collideCircleRect(np, radius, f)) return false;
    for (const t of TABLES) if (Math.hypot(nx - t.x, nz - t.z) < radius + t.r) return false;
    for (const r of rects) if (collideCircleRect(np, radius, r)) return false;
    for (const c of circles) if (Math.hypot(nx - c.x, nz - c.z) < radius + c.r) return false;
    return true;
  };
  if (free(p.x + dx, p.z)) p.x += dx;
  if (free(p.x, p.z + dz)) p.z += dz;
}

// 声音禁单：任何注册进音频总线的声源 id 命中即违反合同（无水声、无警笛、无怪物主题）
export const BANNED_SOUND_PATTERN = /water|rain|drip|wave|ocean|splash|siren|monster/i;
