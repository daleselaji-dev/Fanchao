// 程序化纹理库 —— 全部纹理由 canvas 生成，零外部文件。
// 美术基准：05_DESIGN_V2/08_美术方向锁定.md（红金婚宴 × 水磨石 × 荧光灯 × 海雾）
import * as THREE from 'three';

let SEED = 20010923;
export function srand(s) { SEED = s; }
export function rnd() {
  SEED = (SEED * 1103515245 + 12345) & 0x7fffffff;
  return SEED / 0x7fffffff;
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function tex(c, repeatX = 1, repeatY = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// 由高度图 canvas 生成法线贴图
export function normalFromHeight(hc, strength = 1.5) {
  const w = hc.width, h = hc.height;
  const src = hc.getContext('2d').getImageData(0, 0, w, h).data;
  const out = canvas(w, h);
  const ctx = out.getContext('2d');
  const img = ctx.createImageData(w, h);
  const d = img.data;
  const hgt = (x, y) => {
    x = (x + w) % w; y = (y + h) % h;
    return src[(y * w + x) * 4] / 255;
  };
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = (hgt(x - 1, y) - hgt(x + 1, y)) * strength;
      const dy = (hgt(x, y - 1) - hgt(x, y + 1)) * strength;
      const len = Math.sqrt(dx * dx + dy * dy + 1);
      const i = (y * w + x) * 4;
      d[i] = ((dx / len) * 0.5 + 0.5) * 255;
      d[i + 1] = ((dy / len) * 0.5 + 0.5) * 255;
      d[i + 2] = ((1 / len) * 0.5 + 0.5) * 255;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(out);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 4;
  return t;
}

function noiseFill(ctx, w, h, base, vary, alpha = 1) {
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      const v = (rnd() - 0.5) * vary;
      ctx.fillStyle = `rgba(${Math.max(0, Math.min(255, base[0] + v))|0},${Math.max(0, Math.min(255, base[1] + v))|0},${Math.max(0, Math.min(255, base[2] + v))|0},${alpha})`;
      ctx.fillRect(x, y, 2, 2);
    }
  }
}

function stains(ctx, w, h, n, color, maxR, alpha) {
  for (let i = 0; i < n; i++) {
    const x = rnd() * w, y = rnd() * h, r = (0.25 + rnd() * 0.75) * maxR;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},${alpha})`);
    g.addColorStop(1, `rgba(${color[0]},${color[1]},${color[2]},0)`);
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
}

// ---------- 水磨石（大堂/宴会厅地面） ----------
export function terrazzo() {
  srand(11);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#b9ab92'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [185, 171, 146], 18, 0.5);
  // 骨料碎片
  const cols = ['#d8cdb8', '#9c8f78', '#c4b49a', '#7e7260', '#e2d9c6', '#8d6f5a', '#5f584c'];
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * w, y = rnd() * h, r = 1 + rnd() * 4.5;
    ctx.fillStyle = cols[(rnd() * cols.length) | 0];
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    for (let a = 1; a < 6; a++) {
      const ang = (a / 6) * Math.PI * 2;
      const rr = r * (0.6 + rnd() * 0.6);
      ctx.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr);
    }
    ctx.closePath(); ctx.fill();
  }
  // 分格铜条
  ctx.strokeStyle = 'rgba(90,72,40,0.85)'; ctx.lineWidth = 3;
  ctx.strokeRect(1, 1, w - 2, h - 2);
  // 污渍与失泽
  stains(ctx, w, h, 9, [60, 52, 40], 130, 0.10);
  stains(ctx, w, h, 5, [30, 30, 34], 90, 0.08);
  // 高度图
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  srand(11);
  for (let i = 0; i < 2600; i++) {
    const x = rnd() * w, y = rnd() * h, r = 1 + rnd() * 4.5;
    rnd();
    hctx.fillStyle = rnd() > 0.5 ? '#8a8a8a' : '#757575';
    hctx.beginPath(); hctx.arc(x, y, r, 0, Math.PI * 2); hctx.fill();
    for (let a = 1; a < 6; a++) rnd();
  }
  hctx.fillStyle = '#5a5a5a'; hctx.fillRect(0, 0, w, 3); hctx.fillRect(0, 0, 3, h);
  return { map: tex(c, 6, 6), normalMap: normalFromHeight(hc, 1.0), roughness: 0.42, metalness: 0.04 };
}

// ---------- 白瓷砖（服务走廊墙裙） ----------
export function tiles(grimeLevel = 0.6) {
  srand(23);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  hctx.fillStyle = '#909090'; hctx.fillRect(0, 0, w, h);
  const tw = 128, th = 128;
  for (let ty = 0; ty < h; ty += th) {
    for (let tx = 0; tx < w; tx += tw) {
      const shade = 226 + (rnd() - 0.5) * 14;
      ctx.fillStyle = `rgb(${shade|0},${(shade - 4)|0},${(shade - 12)|0})`;
      ctx.fillRect(tx + 3, ty + 3, tw - 6, th - 6);
      const gl = ctx.createLinearGradient(tx, ty, tx + tw, ty + th);
      gl.addColorStop(0, 'rgba(255,255,255,0.12)');
      gl.addColorStop(0.5, 'rgba(255,255,255,0)');
      gl.addColorStop(1, 'rgba(0,0,0,0.10)');
      ctx.fillStyle = gl; ctx.fillRect(tx + 3, ty + 3, tw - 6, th - 6);
      hctx.fillStyle = '#aaaaaa'; hctx.fillRect(tx + 4, ty + 4, tw - 8, th - 8);
    }
  }
  ctx.strokeStyle = 'rgba(120,112,96,1)'; ctx.lineWidth = 5;
  for (let ty = 0; ty <= h; ty += th) { ctx.beginPath(); ctx.moveTo(0, ty); ctx.lineTo(w, ty); ctx.stroke(); }
  for (let tx = 0; tx <= w; tx += tw) { ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx, h); ctx.stroke(); }
  stains(ctx, w, h, 14 * grimeLevel, [92, 74, 50], 90, 0.22 * grimeLevel);
  stains(ctx, w, h, 8 * grimeLevel, [40, 44, 38], 60, 0.18 * grimeLevel);
  return { map: tex(c, 4, 1.6), normalMap: normalFromHeight(hc, 2.0), roughness: 0.28, metalness: 0.0 };
}

// ---------- 灰泥墙面（可带污渍） ----------
export function plaster(base = [214, 206, 190], grime = 0.7) {
  srand(37 + base[0]);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, base, 16, 0.45);
  stains(ctx, w, h, 16 * grime, [base[0] - 70, base[1] - 70, base[2] - 66], 120, 0.16 * grime);
  stains(ctx, w, h, 6 * grime, [70, 60, 45], 160, 0.12 * grime);
  // 顶部下垂水渍
  for (let i = 0; i < 8 * grime; i++) {
    const x = rnd() * w, len = 60 + rnd() * 200, ww = 6 + rnd() * 24;
    const g = ctx.createLinearGradient(x, 0, x, len);
    g.addColorStop(0, `rgba(88,74,54,${0.18 * grime})`);
    g.addColorStop(1, 'rgba(88,74,54,0)');
    ctx.fillStyle = g; ctx.fillRect(x - ww / 2, 0, ww, len);
  }
  const hc = canvas(256, 256), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 256, 256);
  srand(9);
  for (let i = 0; i < 1400; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#878787' : '#797979';
    hctx.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 3, 1 + rnd() * 3);
  }
  return { map: tex(c, 3, 1.5), normalMap: normalFromHeight(hc, 0.8), roughness: 0.92, metalness: 0.0 };
}

// ---------- 红绒布（桌布/椅套/幕布） ----------
export function velvet(dark = 0) {
  srand(53 + dark);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const r0 = 132 - dark * 46, g0 = 16 - dark * 5, b0 = 22 - dark * 8;
  ctx.fillStyle = `rgb(${r0},${g0},${b0})`; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [r0, g0, b0], 26, 0.55);
  // 绒面丝光
  for (let i = 0; i < 40; i++) {
    const x = rnd() * w, y = rnd() * h, r = 20 + rnd() * 50;
    const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
    gg.addColorStop(0, `rgba(${r0 + 55},${g0 + 14},${b0 + 16},0.10)`);
    gg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  const hc = canvas(128, 128), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 128, 128);
  srand(3);
  for (let i = 0; i < 900; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#848484' : '#7c7c7c';
    hctx.fillRect(rnd() * 128, rnd() * 128, 2, 2);
  }
  return { map: tex(c, 2, 2), normalMap: normalFromHeight(hc, 0.6), roughness: 0.88, metalness: 0.0 };
}

// ---------- 囍字大横幅（舞台背景） ----------
export function xiBanner() {
  const w = 1024, h = 640;
  const c = canvas(w, h), ctx = c.getContext('2d');
  // 红幕底
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#7e0e14'); g.addColorStop(0.5, '#a01820'); g.addColorStop(1, '#6b0a10');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  // 幕布竖褶
  srand(77);
  for (let x = 0; x < w; x += 18) {
    const a = 0.10 + rnd() * 0.12;
    const grad = ctx.createLinearGradient(x, 0, x + 18, 0);
    grad.addColorStop(0, `rgba(0,0,0,${a})`);
    grad.addColorStop(0.5, 'rgba(255,80,80,0.05)');
    grad.addColorStop(1, `rgba(0,0,0,${a})`);
    ctx.fillStyle = grad; ctx.fillRect(x, 0, 18, h);
  }
  // 金环
  ctx.strokeStyle = '#d8a83a'; ctx.lineWidth = 10;
  ctx.beginPath(); ctx.arc(w / 2, h / 2, 190, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(216,168,58,0.5)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(w / 2, h / 2, 205, 0, Math.PI * 2); ctx.stroke();
  // 囍
  ctx.fillStyle = '#e7b64c';
  ctx.font = '300px "Noto Sans SC","Microsoft YaHei",serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 6;
  ctx.fillText('囍', w / 2, h / 2 + 14);
  ctx.shadowColor = 'transparent';
  // 两侧竖联
  ctx.font = '84px "Noto Sans SC","Microsoft YaHei",serif';
  const left = '天赐良缘', right = '永结同心';
  for (let i = 0; i < 4; i++) {
    ctx.fillText(left[i], w * 0.16, h * 0.18 + i * 108);
    ctx.fillText(right[i], w * 0.84, h * 0.18 + i * 108);
  }
  return tex(c, 1, 1);
}

// ---------- 地毯（红色走道毯） ----------
export function carpet() {
  srand(91);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#6e1013'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [110, 16, 19], 24, 0.6);
  // 金边纹样
  ctx.strokeStyle = 'rgba(190,150,60,0.8)'; ctx.lineWidth = 6;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.strokeStyle = 'rgba(190,150,60,0.35)'; ctx.lineWidth = 2;
  ctx.strokeRect(22, 22, w - 44, h - 44);
  stains(ctx, w, h, 6, [30, 20, 18], 60, 0.25);
  const hc = canvas(128, 128), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 128, 128);
  srand(7);
  for (let i = 0; i < 2000; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#868686' : '#7a7a7a';
    hctx.fillRect(rnd() * 128, rnd() * 128, 1, 1);
  }
  return { map: tex(c, 1, 8), normalMap: normalFromHeight(hc, 0.7), roughness: 0.95, metalness: 0.0 };
}

// ---------- 绿漆墙裙 ----------
export function greenWainscot() {
  srand(101);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#3d5a48'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [61, 90, 72], 10, 0.4);
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(255,255,255,0.08)'); g.addColorStop(1, 'rgba(0,0,0,0.22)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  stains(ctx, w, h, 10, [24, 30, 26], 70, 0.25);
  // 磨损露底
  for (let i = 0; i < 12; i++) {
    ctx.fillStyle = 'rgba(150,140,120,0.10)';
    const x = rnd() * w, y = h * 0.6 + rnd() * h * 0.4;
    ctx.beginPath(); ctx.ellipse(x, y, 8 + rnd() * 26, 4 + rnd() * 8, rnd(), 0, Math.PI * 2); ctx.fill();
  }
  return { map: tex(c, 4, 1), roughness: 0.5, metalness: 0.05 };
}

// ---------- 木纹（总台/门/浪蚀浮木共用底） ----------
export function wood(dark = 0.0, groove = 1.0) {
  srand(113 + (dark * 40) | 0);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const r0 = 96 - dark * 40, g0 = 58 - dark * 26, b0 = 36 - dark * 16;
  ctx.fillStyle = `rgb(${r0},${g0},${b0})`; ctx.fillRect(0, 0, w, h);
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  for (let x = 0; x < w; x++) {
    const wave = Math.sin(x * 0.11) * 6 + Math.sin(x * 0.037) * 14;
    for (let y = 0; y < h; y += 4) {
      const v = Math.sin((y + wave) * 0.16 * groove) * 0.5 + 0.5;
      ctx.fillStyle = `rgba(0,0,0,${v * 0.22})`;
      ctx.fillRect(x, y, 1, 4);
      hctx.fillStyle = `rgb(${128 - v * 34},${128 - v * 34},${128 - v * 34})`;
      hctx.fillRect(x, y, 1, 4);
    }
  }
  stains(ctx, w, h, 5, [20, 14, 10], 60, 0.2);
  return { map: tex(c, 2, 2), normalMap: normalFromHeight(hc, 1.6), roughness: 0.62, metalness: 0.02 };
}

// ---------- 桌牌 ----------
export function tableCard(text, flipped = false) {
  const w = 256, h = 160;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = flipped ? '#8e1016' : '#a51920';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#d8a83a'; ctx.lineWidth = 6; ctx.strokeRect(8, 8, w - 16, h - 16);
  ctx.fillStyle = '#e7c25c';
  ctx.font = `${text.length > 2 ? 64 : 84}px "Noto Sans SC","Microsoft YaHei",serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + 4);
  return tex(c, 1, 1);
}

// ---------- 指示牌 / 门牌 ----------
export function signage(text, fg = '#e8e2d2', bg = '#233225', fs = 96) {
  const w = 512, h = 160;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 4; ctx.strokeRect(6, 6, w - 12, h - 12);
  ctx.fillStyle = fg;
  ctx.font = `${fs}px "Noto Sans SC","Microsoft YaHei",sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + 4);
  return tex(c, 1, 1);
}

// ---------- 海水（海洋馆玻璃后） ----------
export function seaWater() {
  srand(131);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#2a7a86'); g.addColorStop(0.45, '#155059'); g.addColorStop(1, '#072028');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  // 上层光带（水面透下来的光）
  for (let i = 0; i < 26; i++) {
    const x = rnd() * w, ww = 12 + rnd() * 50;
    const lg = ctx.createLinearGradient(x, 0, x + ww * 0.4, h * 0.55);
    lg.addColorStop(0, `rgba(120,220,210,${0.10 + rnd() * 0.12})`);
    lg.addColorStop(1, 'rgba(120,220,210,0)');
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.moveTo(x, 0); ctx.lineTo(x + ww, 0);
    ctx.lineTo(x + ww * 0.55 + 26, h * 0.6); ctx.lineTo(x + 26, h * 0.6);
    ctx.closePath(); ctx.fill();
  }
  // 悬浮颗粒
  for (let i = 0; i < 700; i++) {
    const y = rnd() * h;
    ctx.fillStyle = `rgba(140,210,200,${0.03 + rnd() * 0.09 * (1 - y / h)})`;
    ctx.fillRect(rnd() * w, y, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  // 深处的暗影轮廓（负空间——像有什么，看不清）
  for (let i = 0; i < 4; i++) {
    const x = rnd() * w, y = h * 0.35 + rnd() * h * 0.5, r = 80 + rnd() * 160;
    const gg = ctx.createRadialGradient(x, y, r * 0.2, x, y, r);
    gg.addColorStop(0, 'rgba(0,4,6,0.55)');
    gg.addColorStop(1, 'rgba(0,4,6,0)');
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  return tex(c, 2, 1);
}

// ---------- 沉积层（托盘上的菜/走廊堆积） ----------
export function sediment() {
  srand(151);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#54483a'; ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 8 + (rnd() * 10) | 0) {
    const shade = 60 + rnd() * 50;
    ctx.fillStyle = `rgba(${shade + 20|0},${shade|0},${shade * 0.7|0},0.8)`;
    ctx.fillRect(0, y, w, 5 + rnd() * 8);
  }
  for (let i = 0; i < 300; i++) {
    ctx.fillStyle = `rgba(200,190,160,${0.06 + rnd() * 0.1})`;
    ctx.fillRect(rnd() * w, rnd() * h, 2 + rnd() * 5, 1 + rnd() * 2);
  }
  return { map: tex(c, 1, 1), roughness: 0.9, metalness: 0.0 };
}

// ---------- 婚礼请柬红纸 ----------
export function redPaper() {
  const c = canvas(64, 64), ctx = c.getContext('2d');
  ctx.fillStyle = '#b3121c'; ctx.fillRect(0, 0, 64, 64);
  ctx.fillStyle = 'rgba(255,220,120,0.9)';
  ctx.font = '40px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('囍', 32, 34);
  return tex(c, 1, 1);
}

// ---------- 混凝土（连廊/旧冷库） ----------
export function concrete() {
  srand(171);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#6e6a62'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [110, 106, 98], 18, 0.5);
  stains(ctx, w, h, 18, [40, 40, 40], 140, 0.16);
  stains(ctx, w, h, 8, [55, 62, 58], 100, 0.14);
  // 模板缝
  ctx.strokeStyle = 'rgba(0,0,0,0.28)'; ctx.lineWidth = 3;
  for (let y = 0; y < h; y += 170) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  const hc = canvas(256, 256), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 256, 256);
  srand(5);
  for (let i = 0; i < 900; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#858585' : '#7b7b7b';
    hctx.fillRect(rnd() * 256, rnd() * 256, 2 + rnd() * 4, 2 + rnd() * 4);
  }
  return { map: tex(c, 3, 2), normalMap: normalFromHeight(hc, 1.0), roughness: 0.95, metalness: 0.0 };
}

// ---------- 皮肤 / 面部（实体用，含司仪口部钙化） ----------
export function skinFace(kind = 'mc') {
  srand(kind === 'mc' ? 191 : 193);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#c8a084'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [200, 160, 132], 14, 0.4);
  // 眼窝阴影（贴图 UV：面部映射在前半球）
  ctx.fillStyle = 'rgba(70,50,44,0.55)';
  ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.42, 15, 9, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.42, 15, 9, 0, 0, Math.PI * 2); ctx.fill();
  // 瞳
  ctx.fillStyle = 'rgba(20,16,14,0.95)';
  ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.42, 5, 4, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.42, 5, 4, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.fillRect(w * 0.38 - 1, h * 0.42 - 2, 2, 2); ctx.fillRect(w * 0.62 - 1, h * 0.42 - 2, 2, 2);
  // 鼻影
  ctx.fillStyle = 'rgba(150,110,90,0.4)';
  ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.55, 6, 12, 0, 0, Math.PI * 2); ctx.fill();
  if (kind === 'mc') {
    // 司仪：口部鱼籽状钙化增生（层层卵粒封死唇形）
    for (let i = 0; i < 220; i++) {
      const ang = rnd() * Math.PI * 2, rr = rnd() * 30;
      const x = w * 0.5 + Math.cos(ang) * rr * 1.5, y = h * 0.68 + Math.sin(ang) * rr * 0.62;
      const r = 1.5 + rnd() * 3.2;
      const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
      g.addColorStop(0, 'rgba(238,228,205,0.95)');
      g.addColorStop(0.7, 'rgba(205,188,158,0.9)');
      g.addColorStop(1, 'rgba(140,120,96,0.8)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  } else {
    // 侍应：安静的嘴，微下垂
    ctx.strokeStyle = 'rgba(110,70,60,0.8)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(w * 0.42, h * 0.68);
    ctx.quadraticCurveTo(w * 0.5, h * 0.71, w * 0.58, h * 0.68); ctx.stroke();
  }
  return tex(c, 1, 1);
}

// ---------- 浪蚀浮木（侍应前臂/颈） ----------
export function drift() {
  srand(211);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#8d7a64'; ctx.fillRect(0, 0, w, h);
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y++) {
    const wob = Math.sin(y * 0.08) * 8 + Math.sin(y * 0.023) * 20;
    for (let x = 0; x < w; x += 3) {
      const v = Math.sin((x + wob) * 0.22) * 0.5 + 0.5;
      ctx.fillStyle = `rgba(40,30,22,${v * 0.4})`;
      ctx.fillRect(x, y, 3, 1);
      hctx.fillStyle = `rgb(${128 - v * 52|0},${128 - v * 52|0},${128 - v * 52|0})`;
      hctx.fillRect(x, y, 3, 1);
    }
  }
  return { map: tex(c, 1, 1), normalMap: normalFromHeight(hc, 2.2), roughness: 0.85, metalness: 0.0 };
}

// ---------- 环境贴图（简易室内反射） ----------
export function makeEnvMap(renderer) {
  const scn = new THREE.Scene();
  scn.background = new THREE.Color(0x1a1210);
  const top = new THREE.Mesh(new THREE.SphereGeometry(10, 16, 8),
    new THREE.MeshBasicMaterial({ color: 0x552218, side: THREE.BackSide }));
  scn.add(top);
  const l1 = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
  l1.position.set(0, 6, 0); scn.add(l1);
  const l2 = new THREE.Mesh(new THREE.SphereGeometry(0.9, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff5040 }));
  l2.position.set(4, 2, -4); scn.add(l2);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const rt = pmrem.fromScene(scn, 0.2);
  pmrem.dispose();
  return rt.texture;
}
