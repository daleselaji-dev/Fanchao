"use strict";
/*
 * 声源清单（纯数据）。音频引擎只允许注册这里列出的 id；
 * 测试用 BANNED_SOUND_PATTERN 对本清单与运行时注册表双重断言：
 * 无水声、无警笛、无怪物主题 —— E 是洗涤间，但你听不到一滴水。
 */
export const SOUND_MANIFEST = [
  "band-organ",     // A 厅伴奏电子琴（千禧婚宴走场循环）
  "band-pad",       // 伴奏和声垫
  "murmur-hall",    // A 厅收场人声底噪（不可辨词）
  "hum-fluoro",     // 日光灯 100Hz 镇流器嗡声（每根灯管独立点源）
  "buzz-flicker",   // 坏灯管间歇打火
  "crt-whine",      // CRT 行频高频（C 房间）
  "crt-footage",    // 归档后 CRT 里的婚宴录像声（经媒介失真）
  "vent-room",      // 后场通风机低频房间底噪（恒定，无波动）
  "exit-sign",      // 安全出口灯微弱电流声
  "step-player",    // 玩家脚步（水磨石/凹槽水泥两种硬度）
  "step-entity",    // 返席人工作鞋（更硬、更规律）
  "cloth-entity",   // 返席人衣料摩擦
  "clink-dish",     // 杯碟/金属盘放置
  "cloth-wipe",     // 擦手布
  "crate-shift",    // 箱位挪动
  "deck-click",     // 卡座 REC/PAUSE 机械键
  "deck-motor",     // 卡座走带电机
  "tape-insert",    // 插带
  "jack-static",    // 借视接入的信号底噪
  "breath-player",  // 玩家呼吸（低速率，气声）
];
