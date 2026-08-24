"use strict";
/*
 * 返潮 H00-R0 —— 程序化材质库
 * 全部贴图由 canvas 生成：无外部资源、可离线、确定性（种子随机）。
 * 方向：2001 年北方沿海婚宴后场 —— 白瓷砖+绿墙裙、水磨石、暖瓶、红桌布、
 *       不锈钢台、铁皮柜、纸箱、CRT。营业中的旧，不是废墟的旧。
 */
import * as THREE from "three";

// ---------- 种子随机 ----------
let _seed = 20010514;
export function srand(seed) { _seed = seed >>> 0; }
export function rnd() {
  _seed = (_seed * 1664525 + 1013904223) >>> 0;
  return _seed / 4294967296;
}
const rr = (a, b) => a + rnd() * (b - a);
const ri = (a, b) => Math.floor(rr(a, b + 1));
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];

// ---------- canvas 工具 ----------
export function makeCanvas(w, h) {
  const c = (typeof OffscreenCanvas !== "undefined" && false) ? new OffscreenCanvas(w, h) : document.createElement("canvas");
  c.width = w; c.height = h;
  return c;
}

function canvasTex(c, { repeatX = 1, repeatY = 1, srgb = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// 颗粒噪点（叠脏）
function grime(ctx, w, h, n, alpha, dark = true, sizeMax = 2.4) {
  for (let i = 0; i < n; i++) {
    const g = dark ? ri(8, 70) : ri(180, 250);
    ctx.fillStyle = `rgba(${g},${g},${Math.max(0, g - ri(0, 20))},${alpha * rnd()})`;
    ctx.fillRect(rr(0, w), rr(0, h), rr(0.5, sizeMax), rr(0.5, sizeMax));
  }
}

// 大块污渍
function blotches(ctx, w, h, n, color, aMax = 0.1, rMax = 60) {
  for (let i = 0; i < n; i++) {
    const x = rr(0, w), y = rr(0, h), r = rr(rMax * 0.25, rMax);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color.replace("@A", (aMax * rnd()).toFixed(3)));
    g.addColorStop(1, color.replace("@A", "0"));
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
}

// 竖向流挂痕
function streaks(ctx, w, h, n, y0, len, color, aMax = 0.12) {
  for (let i = 0; i < n; i++) {
    const x = rr(0, w), l = rr(len * 0.3, len);
    const g = ctx.createLinearGradient(0, y0, 0, y0 + l);
    g.addColorStop(0, color.replace("@A", (aMax * rnd()).toFixed(3)));
    g.addColorStop(1, color.replace("@A", "0"));
    ctx.fillStyle = g;
    ctx.fillRect(x, y0, rr(1.5, 5), l);
  }
}

const FONT = "'WenQuanYi Micro Hei','Noto Sans CJK SC','PingFang SC','Microsoft YaHei',sans-serif";

// ============================================================
// 贴图生成器
// ============================================================

// 白瓷砖 + 绿墙裙（宽 2m × 全墙高；u 每 2m 重复）
export function texTileWall(heightM, { grimeAmt = 1, wainscot = 1.25 } = {}) {
  srand(7101 + Math.round(heightM * 100));
  const PX = 128;                       // 每米像素
  const w = 2 * PX, h = Math.round(heightM * PX);
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  // 勾缝底色
  x.fillStyle = "#9d9686"; x.fillRect(0, 0, w, h);
  const T = Math.round(0.152 * PX);     // 15cm 砖 + 缝
  const wainRow = Math.floor((heightM - wainscot) * PX); // 从顶往下算的墙裙起点（贴图 y 向下 = 墙顶到墙脚）
  for (let ty = 0; ty < h; ty += T) {
    for (let tx = 0; tx < w; tx += T) {
      const lowPart = ty + T * 0.5 > wainRow;
      const trimRow = Math.abs(ty - wainRow) < T * 0.6;
      let col;
      if (trimRow) col = `hsl(${ri(160, 170)},${ri(22, 28)}%,${ri(16, 20)}%)`;         // 深绿压边
      else if (lowPart) col = `hsl(${ri(158, 168)},${ri(18, 25)}%,${ri(30, 37)}%)`;    // 绿墙裙
      else col = `hsl(${ri(43, 52)},${ri(9, 15)}%,${ri(84, 90)}%)`;                    // 白瓷砖
      x.fillStyle = col;
      x.fillRect(tx + 2, ty + 2, T - 4, T - 4);
      // 高光边（釉面感）
      x.fillStyle = "rgba(255,255,255,0.10)";
      x.fillRect(tx + 2, ty + 2, T - 4, 3);
      x.fillStyle = "rgba(0,0,0,0.10)";
      x.fillRect(tx + 2, ty + T - 5, T - 4, 3);
      if (rnd() < 0.03) { // 裂/污砖
        x.fillStyle = "rgba(60,50,35,0.25)";
        x.fillRect(tx + 2, ty + 2, T - 4, T - 4);
      }
    }
  }
  // 天花线附近积尘 + 墙脚泛碱
  streaks(x, w, h, 26 * grimeAmt, 0, h * 0.35, "rgba(70,62,44,@A)", 0.10);
  streaks(x, w, h, 18 * grimeAmt, h - h * 0.22, h * 0.22, "rgba(52,48,36,@A)", 0.16);
  blotches(x, w, h, 10 * grimeAmt, "rgba(80,70,50,@A)", 0.07, 90);
  grime(x, w, h, 2400 * grimeAmt, 0.05);
  return c;
}

// A 婚宴厅墙：奶黄乳胶漆 + 酒红木墙裙 + 金线
export function texHallWall(heightM) {
  srand(8802);
  const PX = 110;
  const w = 2 * PX, h = Math.round(heightM * PX);
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#d8c9a8"; x.fillRect(0, 0, w, h);
  // 乳胶漆滚涂不匀
  blotches(x, w, h, 26, "rgba(255,244,214,@A)", 0.14, 90);
  blotches(x, w, h, 18, "rgba(140,116,80,@A)", 0.08, 110);
  const wainH = Math.round(1.0 * PX);
  const y0 = h - wainH;
  // 酒红木墙裙（竖板条）
  for (let tx = 0; tx < w; tx += 24) {
    x.fillStyle = `hsl(${ri(2, 10)},${ri(38, 48)}%,${ri(16, 22)}%)`;
    x.fillRect(tx, y0, 23, wainH);
    x.fillStyle = "rgba(255,190,140,0.06)";
    x.fillRect(tx + 2, y0, 4, wainH);
  }
  // 金色压条
  x.fillStyle = "#8a6c30"; x.fillRect(0, y0 - 8, w, 8);
  x.fillStyle = "#c8a34e"; x.fillRect(0, y0 - 7, w, 3);
  streaks(x, w, h, 20, 0, h * 0.3, "rgba(90,74,46,@A)", 0.08);
  grime(x, w, h, 1500, 0.045);
  return c;
}

// 水磨石地面（1m tile）
export function texTerrazzo() {
  srand(3301);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#a8a294"; x.fillRect(0, 0, s, s);
  blotches(x, s, s, 8, "rgba(120,112,96,@A)", 0.25, 70);
  for (let i = 0; i < 2600; i++) {
    const t = rnd();
    x.fillStyle = t < 0.5 ? `rgba(${ri(200, 235)},${ri(196, 228)},${ri(186, 214)},0.9)` :
      t < 0.8 ? `rgba(${ri(50, 90)},${ri(48, 84)},${ri(44, 74)},0.9)` :
        `rgba(${ri(130, 170)},${ri(70, 95)},${ri(60, 80)},0.85)`;   // 砖红石粒
    const r = rr(0.6, 2.6);
    x.beginPath(); x.arc(rr(0, s), rr(0, s), r, 0, 7); x.fill();
  }
  // 分格铜条
  x.strokeStyle = "rgba(120,100,60,0.55)"; x.lineWidth = 2;
  x.strokeRect(0, 0, s, s);
  grime(x, s, s, 700, 0.05);
  return c;
}

// 下沉巷/卸货区水泥地（压实碎屑、干燥沉积、无水渍反光）
export function texConcrete({ sediment = 0 } = {}) {
  srand(4404 + sediment * 7);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#7e786c"; x.fillRect(0, 0, s, s);
  blotches(x, s, s, 20, "rgba(52,48,40,@A)", 0.2, 60);
  blotches(x, s, s, 10, "rgba(150,142,126,@A)", 0.14, 50);
  grime(x, s, s, 3200, 0.09);
  // 压实的干燥沉积（低处特征：细粉状、被脚步压出的致密感）
  if (sediment > 0) {
    blotches(x, s, s, 26, "rgba(126,116,94,@A)", 0.22, 44);
    for (let i = 0; i < 900; i++) {
      x.fillStyle = `rgba(${ri(120, 150)},${ri(110, 136)},${ri(92, 112)},${rr(0.05, 0.2)})`;
      x.fillRect(rr(0, s), rr(0, s), rr(1, 3), rr(0.5, 1.4));
    }
  }
  // 裂缝
  for (let i = 0; i < 5; i++) {
    x.strokeStyle = "rgba(40,36,30,0.4)"; x.lineWidth = rr(0.6, 1.4);
    x.beginPath();
    let px = rr(0, s), py = rr(0, s);
    x.moveTo(px, py);
    for (let k = 0; k < 7; k++) { px += rr(-26, 26); py += rr(-26, 26); x.lineTo(px, py); }
    x.stroke();
  }
  return c;
}

// A 厅地毯（暗红几何团花，磨旧）
export function texCarpet() {
  srand(5505);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#5e1f1c"; x.fillRect(0, 0, s, s);
  x.strokeStyle = "rgba(160,120,70,0.5)"; x.lineWidth = 3;
  x.strokeRect(18, 18, s - 36, s - 36);
  x.strokeStyle = "rgba(150,60,50,0.6)"; x.lineWidth = 2;
  for (let i = 0; i < 4; i++) {
    const o = 40 + i * 44;
    x.beginPath(); x.arc(s / 2, s / 2, o, 0, 7); x.stroke();
  }
  x.fillStyle = "rgba(190,140,80,0.35)";
  for (let a = 0; a < 12; a++) {
    const ang = a / 12 * Math.PI * 2;
    x.beginPath(); x.arc(s / 2 + Math.cos(ang) * 84, s / 2 + Math.sin(ang) * 84, 7, 0, 7); x.fill();
  }
  grime(x, s, s, 2600, 0.10);
  blotches(x, s, s, 14, "rgba(20,10,8,@A)", 0.22, 60);
  return c;
}

// 红桌布（缎面 + 压折线）
export function texClothRed() {
  srand(6606);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#9c1f1a"; x.fillRect(0, 0, s, s);
  // 缎面横丝
  for (let i = 0; i < 220; i++) {
    x.fillStyle = `rgba(${ri(190, 235)},${ri(50, 80)},${ri(45, 70)},${rr(0.03, 0.1)})`;
    x.fillRect(0, rr(0, s), s, rr(0.6, 1.6));
  }
  // 折叠压痕（婚宴桌布从库房拿出来都是井字折痕）
  x.fillStyle = "rgba(60,10,8,0.28)";
  for (const p of [0.25, 0.5, 0.75]) { x.fillRect(0, s * p, s, 2); x.fillRect(s * p, 0, 2, s); }
  x.fillStyle = "rgba(255,180,160,0.10)";
  for (const p of [0.25, 0.5, 0.75]) { x.fillRect(0, s * p + 2, s, 1.4); x.fillRect(s * p + 2, 0, 1.4, s); }
  blotches(x, s, s, 6, "rgba(40,8,8,@A)", 0.16, 40);
  return c;
}

// 桌裙（竖直百褶）
export function texPleats() {
  srand(6707);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  for (let tx = 0; tx < s; tx += 16) {
    const g = x.createLinearGradient(tx, 0, tx + 16, 0);
    g.addColorStop(0, "#5e100e");
    g.addColorStop(0.45, "#a82420");
    g.addColorStop(0.75, "#c53a30");
    g.addColorStop(1, "#701512");
    x.fillStyle = g;
    x.fillRect(tx, 0, 16, s);
  }
  grime(x, s, s, 260, 0.05);
  return c;
}

// 不锈钢台面（拉丝）
export function texSteel() {
  srand(7707);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#9ba0a2"; x.fillRect(0, 0, s, s);
  for (let i = 0; i < 900; i++) {
    const v = ri(120, 210);
    x.fillStyle = `rgba(${v},${v + 3},${v + 6},${rr(0.05, 0.22)})`;
    x.fillRect(rr(-20, s), rr(0, s), rr(30, 150), rr(0.5, 1.2));
  }
  blotches(x, s, s, 8, "rgba(60,60,58,@A)", 0.10, 60);
  grime(x, s, s, 420, 0.05);
  return c;
}

// 军绿/灰绿铁皮柜漆面
export function texEnamel(hue = 150, sat = 10, lit = 34) {
  srand(7808 + hue);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = `hsl(${hue},${sat}%,${lit}%)`; x.fillRect(0, 0, s, s);
  blotches(x, s, s, 16, "rgba(0,0,0,@A)", 0.14, 60);
  blotches(x, s, s, 10, "rgba(255,255,240,@A)", 0.05, 40);
  // 磕碰掉漆
  for (let i = 0; i < 26; i++) {
    x.fillStyle = `rgba(${ri(90, 130)},${ri(80, 110)},${ri(60, 80)},${rr(0.4, 0.85)})`;
    x.fillRect(rr(0, s), rr(0, s), rr(1, 6), rr(1, 4));
  }
  grime(x, s, s, 900, 0.06);
  return c;
}

// 旧木（桌、门框、椅）
export function texWood(l0 = 26, l1 = 34) {
  srand(8909 + l0);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = `hsl(${ri(18, 26)},${ri(30, 40)}%,${ri(l0, l1)}%)`; x.fillRect(0, 0, s, s);
  for (let i = 0; i < 90; i++) {
    x.strokeStyle = `hsla(${ri(14, 26)},${ri(28, 45)}%,${ri(l0 - 12, l0 + 6)}%,${rr(0.15, 0.5)})`;
    x.lineWidth = rr(0.6, 2.4);
    x.beginPath();
    const y = rr(0, s);
    x.moveTo(0, y);
    for (let k = 1; k <= 8; k++) x.lineTo(k * s / 8, y + Math.sin(k * 1.7 + i) * rr(1, 5));
    x.stroke();
  }
  blotches(x, s, s, 8, "rgba(30,18,8,@A)", 0.18, 50);
  grime(x, s, s, 500, 0.06);
  return c;
}

// 纸箱（含印字）
export function texCardboard(label = "玻璃器皿\n小心轻放") {
  srand(9010 + label.length);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#a4805a"; x.fillRect(0, 0, s, s);
  for (let i = 0; i < 160; i++) {
    x.fillStyle = `rgba(${ri(120, 190)},${ri(95, 150)},${ri(60, 105)},${rr(0.06, 0.16)})`;
    x.fillRect(0, rr(0, s), s, rr(1, 3));
  }
  // 胶带
  x.fillStyle = "rgba(196,186,150,0.85)";
  x.fillRect(0, 8, s, 26);
  x.fillStyle = "rgba(120,104,70,0.4)"; x.fillRect(0, 8, s, 3); x.fillRect(0, 31, s, 3);
  // 印字
  x.fillStyle = "rgba(50,34,22,0.75)";
  x.font = `bold 34px ${FONT}`;
  x.textAlign = "center";
  label.split("\n").forEach((line, i) => x.fillText(line, s / 2, 110 + i * 46));
  x.strokeStyle = "rgba(50,34,22,0.5)"; x.lineWidth = 3;
  x.strokeRect(28, 64, s - 56, 130);
  grime(x, s, s, 800, 0.08);
  return c;
}

// 手写婚宴菜单（贴墙）
export function texMenuPaper() {
  srand(9111);
  const w = 256, h = 384;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#ded4b8"; x.fillRect(0, 0, w, h);
  blotches(x, w, h, 8, "rgba(150,120,70,@A)", 0.12, 60);
  x.fillStyle = "rgba(120,20,16,0.9)";
  x.font = `bold 30px ${FONT}`;
  x.textAlign = "center";
  x.fillText("十月二日 婚宴菜单", w / 2, 44);
  x.strokeStyle = "rgba(120,20,16,0.55)"; x.lineWidth = 2;
  x.beginPath(); x.moveTo(24, 56); x.lineTo(w - 24, 56); x.stroke();
  const dishes = ["拌三丝", "酱牛肉", "花生米", "清蒸黄花鱼", "四喜丸子", "红烧海参", "溜肥肠", "香酥鸡", "白灼海螺", "八宝饭", "三鲜汤"];
  x.font = `24px ${FONT}`;
  x.fillStyle = "rgba(40,32,24,0.85)";
  x.textAlign = "left";
  dishes.forEach((d, i) => x.fillText(`${i + 1}. ${d}`, 42, 96 + i * 26));
  x.font = `20px ${FONT}`;
  x.fillStyle = "rgba(40,32,24,0.7)";
  x.fillText("17:30 开席 · 付记账房", 42, 96 + dishes.length * 26 + 8);
  grime(x, w, h, 300, 0.05);
  return c;
}

// 红纸囍字（A 厅）
export function texHappiness() {
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#a3120e"; x.fillRect(0, 0, s, s);
  blotches(x, s, s, 6, "rgba(60,4,4,@A)", 0.25, 80);
  x.fillStyle = "#e8b74a";
  x.font = `bold 190px ${FONT}`;
  x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("囍", s / 2, s / 2 + 10);
  return c;
}

// 红横幅（宴会厅）
export function texBanner(text) {
  const w = 1024, h = 96;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#a61410"; x.fillRect(0, 0, w, h);
  blotches(x, w, h, 8, "rgba(60,4,4,@A)", 0.2, 60);
  x.fillStyle = "#f2df9a";
  x.font = `bold 56px ${FONT}`;
  x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText(text, w / 2, h / 2 + 2);
  return c;
}

// 值班表 / 通知纸
export function texNotice(title, lines) {
  srand(9333 + title.length);
  const w = 256, h = 192;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#d6cdb4"; x.fillRect(0, 0, w, h);
  blotches(x, w, h, 5, "rgba(130,110,70,@A)", 0.14, 50);
  x.fillStyle = "rgba(30,26,22,0.9)";
  x.font = `bold 26px ${FONT}`; x.textAlign = "center";
  x.fillText(title, w / 2, 36);
  x.font = `18px ${FONT}`; x.textAlign = "left";
  x.fillStyle = "rgba(40,36,30,0.8)";
  lines.forEach((l, i) => x.fillText(l, 20, 70 + i * 26));
  grime(x, w, h, 200, 0.05);
  return c;
}

// 安全出口灯（自发光）
export function texExitSign() {
  const w = 256, h = 96;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#0d2417"; x.fillRect(0, 0, w, h);
  x.fillStyle = "#5ef08a";
  x.font = `bold 56px ${FONT}`;
  x.textAlign = "center"; x.textBaseline = "middle";
  x.fillText("安全出口", w / 2 + 20, h / 2 + 2);
  // 小人
  x.fillStyle = "#5ef08a";
  x.beginPath(); x.arc(30, 30, 9, 0, 7); x.fill();
  x.fillRect(22, 40, 18, 26);
  return c;
}

// 小警示牌
export function texSign(text, fg = "#d8cfb0", bg = "#7e2016") {
  const w = 256, h = 128;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = bg; x.fillRect(0, 0, w, h);
  x.strokeStyle = fg; x.lineWidth = 4; x.strokeRect(8, 8, w - 16, h - 16);
  x.fillStyle = fg;
  const lines = text.split("\n");
  const fs = lines.length > 1 ? 40 : 52;
  x.font = `bold ${fs}px ${FONT}`;
  x.textAlign = "center"; x.textBaseline = "middle";
  lines.forEach((l, i) => x.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * (fs + 6)));
  grime(x, w, h, 200, 0.1);
  return c;
}

// 录像卡座面板（REC/PAUSE）
export function texDeckFace() {
  const w = 512, h = 128;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#232324"; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 300; i++) {
    const v = ri(30, 70);
    x.fillStyle = `rgba(${v},${v},${v},0.4)`;
    x.fillRect(rr(0, w), rr(0, h), rr(10, 60), 1);
  }
  // 带仓
  x.fillStyle = "#101011"; x.fillRect(30, 34, 190, 56);
  x.strokeStyle = "#3c3c3e"; x.lineWidth = 2; x.strokeRect(30, 34, 190, 56);
  x.fillStyle = "#6a6a66"; x.font = "bold 15px monospace"; x.textAlign = "left";
  x.fillText("VHS", 40, 28);
  // 按键排
  const keys = ["REW", "PLAY", "FF", "STOP", "REC", "PAUSE"];
  keys.forEach((k, i) => {
    const bx = 250 + i * 42;
    x.fillStyle = i >= 4 ? "#5a2320" : "#3a3a3c";
    x.fillRect(bx, 44, 36, 30);
    x.fillStyle = "#c9c2ae"; x.font = "bold 10px monospace"; x.textAlign = "center";
    x.fillText(k, bx + 18, 92);
  });
  // 计数器
  x.fillStyle = "#0e1a10"; x.fillRect(250, 16, 120, 20);
  x.fillStyle = "#7de08a"; x.font = "bold 14px monospace";
  x.fillText("0:47:12", 310, 31);
  x.fillStyle = "#8f8878"; x.font = `bold 13px ${FONT}`; x.textAlign = "left";
  x.fillText("归档：REC + PAUSE", 388, 31);
  return c;
}

// 录像带
export function texTapeLabel() {
  srand(9555);
  const w = 128, h = 64;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#181819"; x.fillRect(0, 0, w, h);
  x.fillStyle = "#cfc6ae"; x.fillRect(14, 18, 100, 28);
  x.fillStyle = "rgba(40,30,20,0.9)";
  x.font = `bold 15px ${FONT}`; x.textAlign = "center";
  x.fillText("婚宴 10.2", w / 2, 38);
  return c;
}

// 复眼壳（干燥石化的海洋复眼前侧）
export function texCompoundEye() {
  srand(9666);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#8e836b"; x.fillRect(0, 0, s, s);
  // 六角小眼阵列（干壳，非湿润）
  const R = 13;
  for (let row = 0; row < s / R + 2; row++) {
    for (let col = 0; col < s / R + 2; col++) {
      const cx0 = col * R * 1.05 + (row % 2 ? R * 0.5 : 0);
      const cy0 = row * R * 0.92;
      const rad = R * rr(0.34, 0.5);
      const g = x.createRadialGradient(cx0 - rad * 0.3, cy0 - rad * 0.3, 0, cx0, cy0, rad);
      const dead = rnd() < 0.14;
      if (dead) {
        g.addColorStop(0, "#6f6450"); g.addColorStop(1, "#4a4234");
      } else {
        g.addColorStop(0, "#cfc2a0"); g.addColorStop(0.55, "#a2957a"); g.addColorStop(1, "#5c5342");
      }
      x.fillStyle = g;
      x.beginPath(); x.arc(cx0, cy0, rad, 0, 7); x.fill();
    }
  }
  // 干裂纹
  for (let i = 0; i < 8; i++) {
    x.strokeStyle = "rgba(40,34,26,0.5)"; x.lineWidth = rr(0.8, 1.6);
    x.beginPath();
    let px = rr(0, s), py = rr(0, s);
    x.moveTo(px, py);
    for (let k = 0; k < 6; k++) { px += rr(-30, 30); py += rr(-30, 30); x.lineTo(px, py); }
    x.stroke();
  }
  blotches(x, s, s, 10, "rgba(210,200,170,@A)", 0.1, 40);
  return c;
}

// 旧蓝工装
export function texJacket() {
  srand(9777);
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = "#2e4a66"; x.fillRect(0, 0, s, s);
  for (let i = 0; i < 400; i++) {
    x.fillStyle = `rgba(${ri(50, 90)},${ri(80, 115)},${ri(120, 160)},${rr(0.05, 0.14)})`;
    x.fillRect(0, rr(0, s), s, 1);
    x.fillStyle = `rgba(${ri(20, 40)},${ri(35, 55)},${ri(60, 85)},${rr(0.04, 0.1)})`;
    x.fillRect(rr(0, s), 0, 1, s);
  }
  // 洗旧泛白
  blotches(x, s, s, 14, "rgba(160,180,200,@A)", 0.12, 60);
  blotches(x, s, s, 8, "rgba(10,16,26,@A)", 0.16, 50);
  grime(x, s, s, 600, 0.05);
  return c;
}

// 天花（走廊水泥板 / 大厅石膏板）
export function texCeiling(panel = false) {
  srand(9888 + (panel ? 1 : 0));
  const s = 256;
  const c = makeCanvas(s, s); const x = c.getContext("2d");
  x.fillStyle = panel ? "#c9c2ae" : "#8d887c";
  x.fillRect(0, 0, s, s);
  if (panel) {
    x.strokeStyle = "rgba(90,84,70,0.5)"; x.lineWidth = 2;
    x.strokeRect(0, 0, s / 2, s / 2); x.strokeRect(s / 2, 0, s / 2, s / 2);
    x.strokeRect(0, s / 2, s / 2, s / 2); x.strokeRect(s / 2, s / 2, s / 2, s / 2);
    blotches(x, s, s, 8, "rgba(140,110,60,@A)", 0.18, 60); // 水渍陈年黄斑（干的）
  } else {
    blotches(x, s, s, 16, "rgba(50,46,40,@A)", 0.16, 70);
  }
  grime(x, s, s, 900, 0.06);
  return c;
}

// 暖瓶花皮
export function texThermos() {
  srand(9999);
  const w = 128, h = 128;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#b23530"; x.fillRect(0, 0, w, h);
  for (let i = 0; i < 20; i++) {
    x.fillStyle = `rgba(240,200,170,${rr(0.5, 0.9)})`;
    const fx = rr(0, w), fy = rr(0, h);
    for (let p = 0; p < 5; p++) {
      const a = p / 5 * Math.PI * 2;
      x.beginPath(); x.arc(fx + Math.cos(a) * 5, fy + Math.sin(a) * 5, 3.4, 0, 7); x.fill();
    }
    x.fillStyle = "#e8c04a";
    x.beginPath(); x.arc(fx, fy, 2.6, 0, 7); x.fill();
  }
  grime(x, w, h, 200, 0.08);
  return c;
}

// 磁带架标签墙（一排排 VHS 带脊）
export function texTapeSpines() {
  srand(11111);
  const w = 256, h = 256;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  x.fillStyle = "#26221e"; x.fillRect(0, 0, w, h);
  const rows = 6, tapeH = h / rows;
  for (let r = 0; r < rows; r++) {
    for (let tx = 0; tx < w;) {
      const tw = ri(16, 24);
      x.fillStyle = `hsl(${ri(20, 220)},${ri(4, 18)}%,${ri(10, 22)}%)`;
      x.fillRect(tx + 1, r * tapeH + 3, tw - 2, tapeH - 6);
      x.fillStyle = `rgba(210,200,170,${rr(0.5, 0.85)})`;
      x.fillRect(tx + 3, r * tapeH + tapeH * 0.3, tw - 6, tapeH * 0.34);
      if (rnd() < 0.3) { // 缺带的黑洞
        x.fillStyle = "#0c0a09";
        x.fillRect(tx + 1, r * tapeH + 3, tw - 2, tapeH - 6);
      }
      tx += tw;
    }
  }
  grime(x, w, h, 500, 0.08);
  return c;
}

// ---------- CRT 动态画面 ----------
export function makeCRT() {
  const w = 192, h = 144;
  const c = makeCanvas(w, h); const x = c.getContext("2d");
  const draw = (mode, t) => {
    if (mode === "off") {
      x.fillStyle = "#0a0c0a"; x.fillRect(0, 0, w, h);
      const g = x.createRadialGradient(w * 0.3, h * 0.25, 4, w * 0.3, h * 0.25, 60);
      g.addColorStop(0, "rgba(90,100,90,0.10)"); g.addColorStop(1, "rgba(0,0,0,0)");
      x.fillStyle = g; x.fillRect(0, 0, w, h);
      return;
    }
    if (mode === "static") {
      // 营业中的监看画面：走廊固定机位（媒介前夜——屏幕先于身体在场）
      x.fillStyle = "#1b241c"; x.fillRect(0, 0, w, h);
      // 走廊透视线
      const g1 = x.createRadialGradient(w * 0.46, h * 0.42, 4, w * 0.46, h * 0.42, w * 0.6);
      g1.addColorStop(0, "rgba(150,168,142,0.5)"); g1.addColorStop(1, "rgba(10,14,10,0)");
      x.fillStyle = g1; x.fillRect(0, 0, w, h);
      x.strokeStyle = "rgba(170,186,158,0.4)"; x.lineWidth = 2;
      x.beginPath(); x.moveTo(0, h * 0.88); x.lineTo(w * 0.46, h * 0.46); x.stroke();
      x.beginPath(); x.moveTo(w, h * 0.92); x.lineTo(w * 0.46, h * 0.46); x.stroke();
      x.beginPath(); x.moveTo(0, h * 0.12); x.lineTo(w * 0.46, h * 0.4); x.stroke();
      x.fillStyle = "rgba(200,214,188,0.5)";
      x.fillRect(w * 0.3, h * 0.28, 10, 3); x.fillRect(w * 0.52, h * 0.3, 8, 2.5);
      for (let i = 0; i < 340; i++) {
        const v = ri(30, 120);
        x.fillStyle = `rgba(${v},${v + 8},${v},${rr(0.06, 0.3)})`;
        x.fillRect(rr(0, w), rr(0, h), 1.8, 1.8);
      }
      x.fillStyle = "rgba(0,0,0,0.25)";
      for (let y = Math.floor(t * 24) % 2; y < h; y += 2) x.fillRect(0, y, w, 1);
      x.fillStyle = "rgba(200,214,188,0.75)"; x.font = "bold 10px monospace";
      x.fillText("CAM-2 B廊", 6, 13);
      x.fillText("19:47", w - 40, 13);
      return;
    }
    // footage：归档后回放的普通婚宴画面（消费级录像质感）
    srand(1000 + Math.floor(t * 12));
    x.fillStyle = "#2a1c12"; x.fillRect(0, 0, w, h);
    // 暖厅
    const g0 = x.createRadialGradient(w / 2, h * 0.4, 8, w / 2, h * 0.4, w * 0.65);
    g0.addColorStop(0, "#7a5028"); g0.addColorStop(1, "#241408");
    x.fillStyle = g0; x.fillRect(0, 0, w, h);
    // 圆桌红布
    for (const [tx, ty, tr] of [[w * 0.28, h * 0.68, 26], [w * 0.68, h * 0.72, 30], [w * 0.5, h * 0.55, 18]]) {
      x.fillStyle = "#8e241c";
      x.beginPath(); x.ellipse(tx, ty, tr, tr * 0.42, 0, 0, 7); x.fill();
      x.fillStyle = "rgba(230,220,190,0.8)";
      for (let i = 0; i < 5; i++) x.fillRect(tx - tr * 0.7 + i * tr * 0.35, ty - 2, 4, 2.4);
    }
    // 站着的人影（普通宾客，轻微摆动）
    for (const [px0, s0] of [[0.36, 1], [0.44, 0.94], [0.62, 1.05], [0.78, 0.9]]) {
      const sway = Math.sin(t * 1.3 + px0 * 20) * 1.4;
      x.fillStyle = `rgba(${ri(30, 60)},${ri(24, 44)},${ri(20, 36)},0.95)`;
      x.fillRect(w * px0 + sway, h * 0.34, 9 * s0, 30 * s0);
      x.fillStyle = "#caa27c";
      x.beginPath(); x.arc(w * px0 + sway + 4.5 * s0, h * 0.31, 4.4 * s0, 0, 7); x.fill();
    }
    // 囍字红幅
    x.fillStyle = "#7e100c"; x.fillRect(w * 0.42, h * 0.08, w * 0.16, h * 0.2);
    x.fillStyle = "rgba(230,180,80,0.9)"; x.font = `bold 16px ${FONT}`; x.textAlign = "center";
    x.fillText("囍", w * 0.5, h * 0.23);
    x.textAlign = "left";
    // 时间码
    x.fillStyle = "rgba(235,235,225,0.85)"; x.font = "bold 10px monospace";
    x.fillText("PLAY ▶", 6, 12);
    x.fillText("2001.10.02 19:47", 6, h - 8);
    // 隔行 + 噪声
    x.fillStyle = "rgba(0,0,0,0.22)";
    for (let y = (Math.floor(t * 30) % 2); y < h; y += 2) x.fillRect(0, y, w, 1);
    for (let i = 0; i < 120; i++) {
      const v = ri(140, 240);
      x.fillStyle = `rgba(${v},${v},${v},${rr(0.03, 0.14)})`;
      x.fillRect(rr(0, w), rr(0, h), rr(1, 3), 1);
    }
    // 场滚
    const roll = (t * 34) % (h * 3);
    if (roll < h) {
      x.fillStyle = "rgba(255,255,255,0.06)";
      x.fillRect(0, roll, w, 5);
    }
  };
  draw("static", 0);
  return { canvas: c, draw };
}

// ============================================================
// 材质组装
// ============================================================
export function buildMaterials(renderer) {
  const M = {};
  const T = {};

  // 环境反射：手绘 equirect（暗棚顶 + 几条冷灯 + 暖地反）
  {
    const w = 128, h = 64;
    const c = makeCanvas(w, h); const x = c.getContext("2d");
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, "#1c1e1c");
    g.addColorStop(0.42, "#3a352c");
    g.addColorStop(0.58, "#4a4136");
    g.addColorStop(1, "#171310");
    x.fillStyle = g; x.fillRect(0, 0, w, h);
    for (let i = 0; i < 5; i++) {
      x.fillStyle = "rgba(200,215,205,0.55)";
      x.fillRect(10 + i * 24, 10 + (i % 2) * 5, 14, 3);
    }
    x.fillStyle = "rgba(220,160,90,0.35)";
    x.fillRect(30, 40, 26, 8);
    const envTex = new THREE.CanvasTexture(c);
    envTex.mapping = THREE.EquirectangularReflectionMapping;
    envTex.colorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer);
    T.env = pmrem.fromEquirectangular(envTex).texture;
    pmrem.dispose();
  }

  const std = (opts) => new THREE.MeshStandardMaterial(opts);

  // 墙面
  T.tile30 = canvasTex(texTileWall(3.0));
  T.tile28 = canvasTex(texTileWall(2.8, { grimeAmt: 1.3 }));
  M.tileB = std({ map: T.tile30, roughness: 0.34, metalness: 0.0, envMapIntensity: 0.5 });
  M.tileCE = std({ map: T.tile28, roughness: 0.38, metalness: 0.0, envMapIntensity: 0.4 });
  T.hallWall = canvasTex(texHallWall(4.2));
  M.hallWall = std({ map: T.hallWall, roughness: 0.85, envMapIntensity: 0.15 });
  T.concreteWall = canvasTex(texConcrete());
  M.concreteWall = std({ map: T.concreteWall, roughness: 0.95, envMapIntensity: 0.08 });

  // 地面
  T.terrazzo = canvasTex(texTerrazzo());
  M.terrazzo = std({ map: T.terrazzo, roughness: 0.42, envMapIntensity: 0.45 });
  T.concrete = canvasTex(texConcrete());
  M.concrete = std({ map: T.concrete, roughness: 0.9, envMapIntensity: 0.1 });
  T.sediment = canvasTex(texConcrete({ sediment: 1 }));
  M.sediment = std({ map: T.sediment, roughness: 0.95, envMapIntensity: 0.06 });
  T.carpet = canvasTex(texCarpet());
  M.carpet = std({ map: T.carpet, roughness: 0.95, envMapIntensity: 0.04 });

  // 天花
  T.ceilB = canvasTex(texCeiling(false));
  M.ceilB = std({ map: T.ceilB, roughness: 0.9, envMapIntensity: 0.06 });
  T.ceilA = canvasTex(texCeiling(true));
  M.ceilA = std({ map: T.ceilA, roughness: 0.85, envMapIntensity: 0.08 });

  // 家具材质
  T.steel = canvasTex(texSteel());
  M.steel = std({ map: T.steel, roughness: 0.36, metalness: 0.86, envMapIntensity: 0.9 });
  M.steelDull = std({ map: T.steel, roughness: 0.55, metalness: 0.7, envMapIntensity: 0.6 });
  T.enamelGreen = canvasTex(texEnamel(150, 10, 32));
  M.enamelGreen = std({ map: T.enamelGreen, roughness: 0.5, metalness: 0.25, envMapIntensity: 0.4 });
  T.enamelGrey = canvasTex(texEnamel(40, 5, 42));
  M.enamelGrey = std({ map: T.enamelGrey, roughness: 0.55, metalness: 0.2, envMapIntensity: 0.35 });
  T.wood = canvasTex(texWood());
  M.wood = std({ map: T.wood, roughness: 0.62, envMapIntensity: 0.25 });
  T.woodDark = canvasTex(texWood(14, 20));
  M.woodDark = std({ map: T.woodDark, roughness: 0.7, envMapIntensity: 0.2 });
  T.clothRed = canvasTex(texClothRed());
  M.clothRed = std({ map: T.clothRed, roughness: 0.62, envMapIntensity: 0.25 });
  T.pleats = canvasTex(texPleats());
  M.pleats = std({ map: T.pleats, roughness: 0.7, envMapIntensity: 0.18 });
  T.cardboard1 = canvasTex(texCardboard("玻璃器皿\n小心轻放"));
  M.cardboard1 = std({ map: T.cardboard1, roughness: 0.92, envMapIntensity: 0.05 });
  T.cardboard2 = canvasTex(texCardboard("即墨老酒\n此面向上"));
  M.cardboard2 = std({ map: T.cardboard2, roughness: 0.92, envMapIntensity: 0.05 });
  M.porcelain = std({ color: 0xe9e4d8, roughness: 0.22, envMapIntensity: 0.9 });
  T.thermos = canvasTex(texThermos());
  M.thermos = std({ map: T.thermos, roughness: 0.32, envMapIntensity: 0.7 });
  M.plasticBeige = std({ color: 0xb0a88e, roughness: 0.6, envMapIntensity: 0.3 });
  M.plasticBlack = std({ color: 0x1c1c1d, roughness: 0.5, envMapIntensity: 0.4 });
  M.rubber = std({ color: 0x17181a, roughness: 0.95, envMapIntensity: 0.04 });
  M.chrome = std({ color: 0x9aa0a4, roughness: 0.3, metalness: 0.95, envMapIntensity: 1.0 });

  // 纸品与标牌
  T.menu = canvasTex(texMenuPaper());
  M.menu = std({ map: T.menu, roughness: 0.9, envMapIntensity: 0.05 });
  T.happiness = canvasTex(texHappiness());
  M.happiness = std({ map: T.happiness, roughness: 0.85, envMapIntensity: 0.06 });
  T.banner = canvasTex(texBanner("热烈祝贺　陈府 · 于府　联姻志喜"));
  M.banner = std({ map: T.banner, roughness: 0.8, envMapIntensity: 0.08 });
  T.notice1 = canvasTex(texNotice("后场值班", ["白班：老纪 / 小满", "晚班：陈其  录像：临时工", "散场后统一交回钥匙"]));
  M.notice1 = std({ map: T.notice1, roughness: 0.9, envMapIntensity: 0.05 });
  T.notice2 = canvasTex(texNotice("通  知", ["近日底层柜脚受潮变形", "系旧楼沉降，与海无关", "勿信传言 · 照常营业"]));
  M.notice2 = std({ map: T.notice2, roughness: 0.9, envMapIntensity: 0.05 });
  T.exit = canvasTex(texExitSign());
  M.exit = std({ map: T.exit, emissive: 0x2fae51, emissiveMap: T.exit, emissiveIntensity: 1.6, roughness: 0.6 });
  T.signHead = canvasTex(texSign("小心碰头"));
  M.signHead = std({ map: T.signHead, roughness: 0.85, envMapIntensity: 0.06 });
  T.signBack = canvasTex(texSign("后场重地\n闲人免进", "#d8cfb0", "#274a38"));
  M.signBack = std({ map: T.signBack, roughness: 0.85, envMapIntensity: 0.06 });
  T.deckFace = canvasTex(texDeckFace());
  M.deckFace = std({ map: T.deckFace, roughness: 0.5, metalness: 0.3, envMapIntensity: 0.5 });
  T.tapeLabel = canvasTex(texTapeLabel());
  M.tapeLabel = std({ map: T.tapeLabel, roughness: 0.6, envMapIntensity: 0.2 });
  T.tapeSpines = canvasTex(texTapeSpines());
  M.tapeSpines = std({ map: T.tapeSpines, roughness: 0.8, envMapIntensity: 0.1 });

  // CRT
  const crt = makeCRT();
  T.crtCanvas = crt;
  T.crtTex = new THREE.CanvasTexture(crt.canvas);
  T.crtTex.colorSpace = THREE.SRGBColorSpace;
  M.crtScreen = new THREE.MeshBasicMaterial({ map: T.crtTex });
  M.crtShell = std({ color: 0x8e8874, roughness: 0.6, envMapIntensity: 0.3 });

  // 实体
  T.jacket = canvasTex(texJacket());
  M.jacket = std({ map: T.jacket, roughness: 0.85, envMapIntensity: 0.1 });
  M.trousers = std({ color: 0x23252a, roughness: 0.92, envMapIntensity: 0.06 });
  M.hair = std({ color: 0x141210, roughness: 0.75, envMapIntensity: 0.15 });
  M.skin = std({ color: 0x8a6a52, roughness: 0.65, envMapIntensity: 0.2 });
  T.compound = canvasTex(texCompoundEye());
  M.compound = std({ map: T.compound, roughness: 0.55, envMapIntensity: 0.35, emissive: 0x000000 });
  M.shoes = std({ color: 0x191512, roughness: 0.5, envMapIntensity: 0.3 });

  // 灯具
  M.tubeOn = new THREE.MeshBasicMaterial({ color: 0xd7e6d2 });
  M.tubeOff = std({ color: 0x555a52, roughness: 0.4 });
  M.fixture = std({ color: 0x6a6e66, roughness: 0.55, metalness: 0.5, envMapIntensity: 0.4 });
  M.bulbWarm = new THREE.MeshBasicMaterial({ color: 0xffd9a0 });
  M.lantern = new THREE.MeshBasicMaterial({ color: 0xff5a3a });
  M.emergGreen = new THREE.MeshBasicMaterial({ color: 0x9fe8b0 });

  // 影子贴片
  {
    const s2 = 128;
    const c = makeCanvas(s2, s2); const x = c.getContext("2d");
    const g = x.createRadialGradient(s2 / 2, s2 / 2, 4, s2 / 2, s2 / 2, s2 / 2);
    g.addColorStop(0, "rgba(0,0,0,0.5)");
    g.addColorStop(1, "rgba(0,0,0,0)");
    x.fillStyle = g; x.fillRect(0, 0, s2, s2);
    const t = new THREE.CanvasTexture(c);
    M.blob = new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false });
  }

  // 受压痕迹贴花（柜脚/门框下部：漆面压白微裂 + 干沉积）
  {
    srand(13131);
    const w2 = 128, h2 = 64;
    const c = makeCanvas(w2, h2); const x = c.getContext("2d");
    x.clearRect(0, 0, w2, h2);
    const g = x.createLinearGradient(0, 0, 0, h2);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(0.55, "rgba(178,168,140,0.30)");
    g.addColorStop(1, "rgba(120,110,88,0.55)");
    x.fillStyle = g; x.fillRect(0, 0, w2, h2);
    for (let i = 0; i < 40; i++) {  // 压白微裂
      x.strokeStyle = `rgba(220,214,192,${rr(0.15, 0.5)})`;
      x.lineWidth = 1;
      const sx = rr(0, w2), sy = rr(h2 * 0.4, h2);
      x.beginPath(); x.moveTo(sx, sy); x.lineTo(sx + rr(-8, 8), sy + rr(-10, 4)); x.stroke();
    }
    const t = new THREE.CanvasTexture(c);
    M.pressMark = new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: 0.95 });
  }

  return { M, T };
}
