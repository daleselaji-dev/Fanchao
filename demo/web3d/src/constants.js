// H00-R0 空间与行为常量。平面数值原样搬运自 demo/web/main.js（2D 基线，禁改）；
// 坐标映射：2D (x, y) → 3D (x, z)，y 为高度。单位：米。

export const WORLD = { w: 38, h: 27 };

// 墙体（碰撞 + 视线遮挡），h 为平面深度（2D 的 h），wallH 统一 2.8
export const WALLS = [
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

export const WALL_H = 2.8;
export const DOOR_H = 2.1;
export const EYE_H = 1.6;

// 门洞（用于门楣与地面门槛）：{x, y, w, h}（平面范围）
export const DOORWAYS = [
  { x: 17,  y: 9.5,  w: 2,   h: 0.6 },   // A/B 服务门
  { x: 8,   y: 17.3, w: 1.6, h: 0.6 },   // C 门
  { x: 18,  y: 17.3, w: 1.6, h: 0.6 },   // E 门
  { x: 28,  y: 17.3, w: 3,   h: 0.6 },   // D 开口
];

// 家具（碰撞体），height 为 3D 高度
export const FURN = [
  { x: 2.6,  y: 2.0,  w: 1.2, h: 0.9, height: 1.15, c: 0x4d443a, label: "音箱" },
  { x: 32.6, y: 7.6,  w: 1.6, h: 1.0, height: 0.9,  c: 0x5a5044, label: "备餐车" },
  { x: 4,    y: 10.4, w: 11,  h: 1.3, height: 0.9,  c: 0x8b8378, label: "服务台" },
  { x: 21.5, y: 10.4, w: 11,  h: 1.3, height: 0.9,  c: 0x8b8378, label: "保温台" },
  { x: 6,    y: 15.0, w: 6,   h: 1.1, height: 1.2,  c: 0x6e675c, label: "器材架" },
  { x: 14,   y: 15.0, w: 7,   h: 1.1, height: 1.2,  c: 0x6e675c, label: "器材架（低处）" },
  { x: 3.2,  y: 19.0, w: 4.6, h: 1.5, height: 0.9,  c: 0x42403c, label: "录像卡座" },
  { x: 11.6, y: 19.2, w: 0.9, h: 4.2, height: 1.9,  c: 0x575349, label: "磁带架" },
  { x: 14.5, y: 23.6, w: 5.5, h: 1.2, height: 0.85, c: 0x7a7d74, label: "洗涤台" },
  { x: 22.4, y: 19.4, w: 1.0, h: 3.4, height: 1.5,  c: 0x6d7068, label: "沥水架" },
  { x: 14.9, y: 19.4, w: 1.6, h: 1.2, height: 0.5,  c: 0x5d5a50, label: "器材篮" },
  { x: 26,   y: 20.5, w: 1.6, h: 1.6, height: 0.6,  c: 0x6b5c46, label: "货箱" },
  { x: 27.9, y: 22.7, w: 1.6, h: 1.6, height: 0.6,  c: 0x6b5c46, label: "" },
  { x: 32.6, y: 20.9, w: 1.6, h: 1.6, height: 0.6,  c: 0x6b5c46, label: "" },
  { x: 31,   y: 18.6, w: 4.4, h: 1.0, height: 1.0,  c: 0x5a5044, label: "卸货台" },
];

// 圆桌（A 婚宴厅），桌面高 0.75；主桌 = TABLES[0]
export const TABLES = [
  { x: 9,  y: 5,   r: 2.1 },
  { x: 20, y: 4.2, r: 2.1 },
  { x: 29, y: 5.6, r: 2.1 },
];
export const TABLE_H = 0.75;
export const MAIN_TABLE = 0;

export const ROOMS = [
  { id: "A", name: "A 宴会厅",     x: 2,    y: 1.5,  w: 33.4, h: 8.0,  c: 0x554138 },
  { id: "B", name: "B 服务走廊",   x: 2,    y: 10.1, w: 33.4, h: 7.2,  c: 0x46524c },
  { id: "C", name: "C 录像/广播室", x: 2,    y: 17.9, w: 11,   h: 7.6,  c: 0x434a4f },
  { id: "E", name: "E 洗涤/器材间", x: 13.6, y: 17.9, w: 10.4, h: 7.6,  c: 0x494e46 },
  { id: "D", name: "D 卸货口",     x: 24.6, y: 17.9, w: 10.8, h: 7.6,  c: 0x4f4536 },
];

// 低处区域：只改变声学状态与材料证据，不画线、不变色（调试层除外）
export const LOW_ZONE = { x: 3, y: 15.0, w: 19, h: 2.3 };

// 同一不可见高度的材料后果（柜脚/门框下部受压痕），静态证据
export const PRESS_MARKS = [
  { x: 6.3,  y: 16.15 }, { x: 8.6, y: 16.15 }, { x: 11.6, y: 16.15 },
  { x: 14.3, y: 16.15 }, { x: 17.2, y: 16.15 }, { x: 20.6, y: 16.15 },
  { x: 8.15, y: 17.15 }, { x: 9.45, y: 17.15 },
  { x: 18.15, y: 17.15 }, { x: 19.45, y: 17.15 },
];

// 实体旧后勤路线 D→B→C门外→E→D（15 航点，平面数值对齐 2D 基线）。
// reverse: 折返段——到达该航点的移动保持原朝向、倒着走（M05 行为合同第 7 条）。
export const ROUTE = [
  { x: 30.5, y: 21.8, pause: 2.2, act: "整理箱位" },
  { x: 29.5, y: 17.6, pause: 0 },
  { x: 29.5, y: 13.8, pause: 0 },
  { x: 13.0, y: 13.8, pause: 0 },
  { x: 13.0, y: 16.6, pause: 0 },
  { x: 8.8,  y: 16.6, pause: 2.6, act: "在 C 门外放盘" },
  { x: 13.0, y: 16.6, pause: 0, reverse: true },
  { x: 18.8, y: 16.6, pause: 0.8, act: "擦手" },
  { x: 18.8, y: 20.5, pause: 0 },
  { x: 17.2, y: 22.6, pause: 3.2, act: "洗涤与放置" },
  { x: 18.8, y: 20.5, pause: 0, reverse: true },
  { x: 18.8, y: 16.6, pause: 0, reverse: true },
  { x: 22.6, y: 16.6, pause: 0 },
  { x: 29.5, y: 15.5, pause: 0 },
  { x: 29.5, y: 17.6, pause: 0 },
];

export const PLAYER_START = { x: 6.5, y: 7.8 };
export const ARCHIVE_POINT = { x: 5.5, y: 19.75 };
export const ARCHIVE_RADIUS = 2.4;
export const PLAYER_SPEED = 3.6;
export const ENTITY_SPEED = 1.5;
export const PLAYER_R = 0.35;
export const ENTITY_R = 0.42;
export const YIELD_TRIGGER = 1.2;   // 让行触发距离
export const YIELD_RELEASE = 1.5;   // 让行解除距离
export const YIELD_AHEAD = 1.3;     // 前向锥探测点
export const YIELD_AHEAD_R = 0.95;  // 前向锥半径
export const ENTITY_HOLD = 10;      // 节拍钟启动后实体在 D 的滞留秒数

// 固定机位（调试层标注，对齐 2D 基线三机位）
export const CAMS = [
  { x: 17.9, y: 8.6,  a: Math.PI / 2,    name: "Cam_A_B" },
  { x: 5.0,  y: 24.4, a: -Math.PI / 4,   name: "Cam_C_Door" },
  { x: 21.5, y: 19.0, a: Math.PI * 0.85, name: "Cam_E_B" },
];

// 节拍提示（玩家可见文本：只有操作提示，零解释）
export const BEATS = [
  { t0: 0,  t1: 12, hint: "从 A 宴会厅出发：找到通往后场的服务门（南侧门洞）" },
  { t0: 12, t1: 28, hint: "B 走廊二选一：沿服务台的浅处线，或贴器材架穿低处线（听伴奏的变化）" },
  { t0: 28, t1: 43, hint: "进入 C，走到卡座 2.4 米内按 E 归档" },
  { t0: 43, t1: 60, hint: "选择返程路线：浅处更稳，低处更快但会与他的班次路线交叉" },
  { t0: 60, t1: 76, hint: "他继续干活，从不回头。想看他的正面——游戏不拦你" },
  { t0: 76, t1: 90, hint: "回到 A 宴会厅，完成回路" },
];
