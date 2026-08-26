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
  // 预热 2d 上下文并声明频繁回读：SwiftShader/软渲染下避免 GPU 回读（getImageData 提速 10~50 倍）
  c.getContext('2d', { willReadFrequently: true });
  return c;
}

function tex(c, repeatX = 1, repeatY = 1, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// 粗糙度贴图（线性空间）
function roughTex(c, repeatX = 1, repeatY = 1) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeatX, repeatY);
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

// ---------- 水磨石（大堂/宴会厅地面）v1.5：1024 分辨率 + 粗糙度分层 ----------
export function terrazzo() {
  srand(11);
  const w = 1024, h = 1024;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#b9ab92'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [185, 171, 146], 18, 0.5);
  // 骨料碎片：一次生成，色/高/粗糙三图共用
  const cols = ['#d8cdb8', '#9c8f78', '#c4b49a', '#7e7260', '#e2d9c6', '#8d6f5a', '#5f584c'];
  const chips = [];
  for (let i = 0; i < 8200; i++) {
    const x = rnd() * w, y = rnd() * h, r = 1.5 + rnd() * 8;
    const ci = (rnd() * cols.length) | 0;
    const verts = [];
    for (let a = 0; a < 6; a++) {
      const ang = (a / 6) * Math.PI * 2;
      verts.push([Math.cos(ang) * r * (0.6 + rnd() * 0.6), Math.sin(ang) * r * (0.6 + rnd() * 0.6)]);
    }
    chips.push({ x, y, r, ci, verts, hi: rnd() });
  }
  const drawChips = (cx, fill) => {
    for (const ch of chips) {
      cx.fillStyle = fill(ch);
      cx.beginPath();
      cx.moveTo(ch.x + ch.verts[0][0], ch.y + ch.verts[0][1]);
      for (let a = 1; a < 6; a++) cx.lineTo(ch.x + ch.verts[a][0], ch.y + ch.verts[a][1]);
      cx.closePath(); cx.fill();
    }
  };
  drawChips(ctx, ch => cols[ch.ci]);
  // 骨料内缘高光（打磨截面的微反光）
  for (const ch of chips) {
    if (ch.hi < 0.6) continue;
    ctx.fillStyle = 'rgba(255,250,238,0.14)';
    ctx.beginPath(); ctx.arc(ch.x - ch.r * 0.25, ch.y - ch.r * 0.25, ch.r * 0.32, 0, Math.PI * 2); ctx.fill();
  }
  // 分格铜条（十字分格——真实水磨石分仓浇筑）
  ctx.strokeStyle = 'rgba(112,88,46,0.9)'; ctx.lineWidth = 5;
  ctx.strokeRect(2, 2, w - 4, h - 4);
  ctx.beginPath(); ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h); ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2); ctx.stroke();
  ctx.strokeStyle = 'rgba(196,164,96,0.5)'; ctx.lineWidth = 1.5;
  ctx.strokeRect(4, 4, w - 8, h - 8);
  // 污渍与失泽
  stains(ctx, w, h, 14, [60, 52, 40], 240, 0.10);
  stains(ctx, w, h, 8, [30, 30, 34], 170, 0.08);
  // 高度图（骨料微凸 + 铜条缝下陷）
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  drawChips(hctx, ch => ch.hi > 0.5 ? '#8a8a8a' : '#757575');
  hctx.fillStyle = '#5a5a5a';
  hctx.fillRect(0, 0, w, 5); hctx.fillRect(0, 0, 5, h);
  hctx.fillRect(w / 2 - 2, 0, 4, h); hctx.fillRect(0, h / 2 - 2, w, 4);
  // 粗糙度图：打磨面光滑（暗），污渍与缝粗糙（亮）
  const rc = canvas(w, h), rctx = rc.getContext('2d');
  rctx.fillStyle = '#6a6a6a'; rctx.fillRect(0, 0, w, h);
  drawChips(rctx, ch => ch.hi > 0.5 ? '#4e4e4e' : '#5e5e5e');
  srand(311);
  stains(rctx, w, h, 16, [188, 188, 188], 220, 0.35);  // 失泽区变粗糙
  stains(rctx, w, h, 10, [40, 40, 40], 150, 0.3);      // 磨亮区更滑（走的人多）
  rctx.fillStyle = '#b0b0b0';
  rctx.fillRect(0, 0, w, 5); rctx.fillRect(0, 0, 5, h);
  rctx.fillRect(w / 2 - 2, 0, 4, h); rctx.fillRect(0, h / 2 - 2, w, 4);
  return {
    map: tex(c, 3, 3), normalMap: normalFromHeight(hc, 1.15),
    roughnessMap: roughTex(rc, 3, 3), roughness: 1.0, metalness: 0.04,
  };
}

// ---------- 白瓷砖（服务走廊墙裙）v1.5：1024 + 釉面/污渍粗糙度分层 + 湿痕 ----------
export function tiles(grimeLevel = 0.6) {
  srand(23);
  const w = 1024, h = 1024;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  const rc = canvas(w, h), rctx = rc.getContext('2d');
  hctx.fillStyle = '#909090'; hctx.fillRect(0, 0, w, h);
  rctx.fillStyle = '#c8c8c8'; rctx.fillRect(0, 0, w, h); // 缝隙基底：粗糙
  const tw = 256, th = 256;
  for (let ty = 0; ty < h; ty += th) {
    for (let tx = 0; tx < w; tx += tw) {
      const shade = 226 + (rnd() - 0.5) * 14;
      ctx.fillStyle = `rgb(${shade|0},${(shade - 4)|0},${(shade - 12)|0})`;
      ctx.fillRect(tx + 6, ty + 6, tw - 12, th - 12);
      // 釉面斜向反光渐变
      const gl = ctx.createLinearGradient(tx, ty, tx + tw, ty + th);
      gl.addColorStop(0, 'rgba(255,255,255,0.14)');
      gl.addColorStop(0.5, 'rgba(255,255,255,0)');
      gl.addColorStop(1, 'rgba(0,0,0,0.10)');
      ctx.fillStyle = gl; ctx.fillRect(tx + 6, ty + 6, tw - 12, th - 12);
      // 龟裂纹（老釉面细裂）
      if (rnd() > 0.55) {
        ctx.strokeStyle = 'rgba(150,140,120,0.28)'; ctx.lineWidth = 1;
        let cx0 = tx + rnd() * tw, cy0 = ty + rnd() * th;
        ctx.beginPath(); ctx.moveTo(cx0, cy0);
        for (let k = 0; k < 5; k++) { cx0 += (rnd() - 0.5) * 70; cy0 += (rnd() - 0.5) * 70; ctx.lineTo(cx0, cy0); }
        ctx.stroke();
      }
      // 高度：砖面微鼓
      const hg = hctx.createRadialGradient(tx + tw / 2, ty + th / 2, 10, tx + tw / 2, ty + th / 2, tw * 0.7);
      hg.addColorStop(0, '#b2b2b2'); hg.addColorStop(1, '#9a9a9a');
      hctx.fillStyle = hg; hctx.fillRect(tx + 8, ty + 8, tw - 16, th - 16);
      // 粗糙度：釉面光滑（暗），随机微变
      rctx.fillStyle = `rgb(${52 + (rnd() * 26)|0},${52 + (rnd() * 26)|0},${52 + (rnd() * 26)|0})`;
      rctx.fillRect(tx + 8, ty + 8, tw - 16, th - 16);
    }
  }
  ctx.strokeStyle = 'rgba(120,112,96,1)'; ctx.lineWidth = 9;
  for (let ty = 0; ty <= h; ty += th) { ctx.beginPath(); ctx.moveTo(0, ty); ctx.lineTo(w, ty); ctx.stroke(); }
  for (let tx = 0; tx <= w; tx += tw) { ctx.beginPath(); ctx.moveTo(tx, 0); ctx.lineTo(tx, h); ctx.stroke(); }
  // 缝隙积垢线
  ctx.strokeStyle = `rgba(78,66,46,${0.5 * grimeLevel})`; ctx.lineWidth = 3;
  for (let ty = 0; ty <= h; ty += th) { ctx.beginPath(); ctx.moveTo(0, ty + 4); ctx.lineTo(w, ty + 4); ctx.stroke(); }
  stains(ctx, w, h, 26 * grimeLevel, [92, 74, 50], 160, 0.22 * grimeLevel);
  stains(ctx, w, h, 15 * grimeLevel, [40, 44, 38], 110, 0.18 * grimeLevel);
  // 自上而下的湿痕（渗水沿缝下淌——干后留矿痕）
  for (let i = 0; i < 7 * grimeLevel; i++) {
    const x = rnd() * w, len = 200 + rnd() * 500, ww = 10 + rnd() * 30;
    const g = ctx.createLinearGradient(x, 0, x, len);
    g.addColorStop(0, `rgba(96,88,70,${0.22 * grimeLevel})`);
    g.addColorStop(0.7, `rgba(110,104,88,${0.1 * grimeLevel})`);
    g.addColorStop(1, 'rgba(96,88,70,0)');
    ctx.fillStyle = g; ctx.fillRect(x - ww / 2, 0, ww, len);
    // 湿痕区域在粗糙度上反而更光（水膜残留感）
    const rg = rctx.createLinearGradient(x, 0, x, len);
    rg.addColorStop(0, 'rgba(30,30,30,0.5)'); rg.addColorStop(1, 'rgba(30,30,30,0)');
    rctx.fillStyle = rg; rctx.fillRect(x - ww / 2, 0, ww, len);
  }
  return {
    map: tex(c, 2, 0.8), normalMap: normalFromHeight(hc, 2.2),
    roughnessMap: roughTex(rc, 2, 0.8), roughness: 1.0, metalness: 0.0,
  };
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

// ---------- 红绒布（椅套/幕布）v1.5：512 + 绒毛方向丝光 ----------
export function velvet(dark = 0) {
  srand(53 + dark);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const r0 = 132 - dark * 46, g0 = 16 - dark * 5, b0 = 22 - dark * 8;
  ctx.fillStyle = `rgb(${r0},${g0},${b0})`; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [r0, g0, b0], 26, 0.55);
  // 绒毛压向纹（手抚过的方向差——绒布的签名）
  for (let i = 0; i < 26; i++) {
    const x = rnd() * w, y = rnd() * h, rr = 40 + rnd() * 120, ang = rnd() * Math.PI;
    ctx.save();
    ctx.translate(x, y); ctx.rotate(ang);
    const gg = ctx.createLinearGradient(-rr, 0, rr, 0);
    gg.addColorStop(0, 'rgba(0,0,0,0)');
    gg.addColorStop(0.5, `rgba(${Math.min(255, r0 + 62)},${g0 + 16},${b0 + 18},0.13)`);
    gg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.ellipse(0, 0, rr, rr * 0.38, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  // 绒面丝光点
  for (let i = 0; i < 60; i++) {
    const x = rnd() * w, y = rnd() * h, r = 30 + rnd() * 80;
    const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
    gg.addColorStop(0, `rgba(${Math.min(255, r0 + 55)},${g0 + 14},${b0 + 16},0.08)`);
    gg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  const hc = canvas(256, 256), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 256, 256);
  srand(3);
  for (let i = 0; i < 3400; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#848484' : '#7c7c7c';
    hctx.fillRect(rnd() * 256, rnd() * 256, 2, 2);
  }
  return { map: tex(c, 2, 2), normalMap: normalFromHeight(hc, 0.6), roughness: 0.88, metalness: 0.0 };
}

// ---------- 涤纶桌布（v1.5 新增：垂坠褶皱 + 熨痕 + 酒渍） ----------
export function tablecloth() {
  srand(61);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  const rc = canvas(w, h), rctx = rc.getContext('2d');
  ctx.fillStyle = '#a01018'; ctx.fillRect(0, 0, w, h);
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  rctx.fillStyle = '#9a9a9a'; rctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [160, 16, 24], 14, 0.4);
  // 垂坠竖褶（桌布沿裙边的自然褶皱——UV 横向环绕桌裙）
  for (let x = 0; x < w; x += 4) {
    const fold = Math.sin(x * 0.10) * 0.5 + Math.sin(x * 0.031 + 1.7) * 0.35 + Math.sin(x * 0.007) * 0.15;
    const l = fold * 0.5 + 0.5;
    ctx.fillStyle = `rgba(${l > 0.5 ? 255 : 0},${l > 0.5 ? 90 : 0},${l > 0.5 ? 80 : 0},${Math.abs(l - 0.5) * 0.5})`;
    ctx.fillRect(x, 0, 4, h);
    hctx.fillStyle = `rgb(${(104 + l * 62)|0},${(104 + l * 62)|0},${(104 + l * 62)|0})`;
    hctx.fillRect(x, 0, 4, h);
    // 褶峰的涤纶反光更强
    rctx.fillStyle = `rgb(${(176 - l * 88)|0},${(176 - l * 88)|0},${(176 - l * 88)|0})`;
    rctx.fillRect(x, 0, 4, h);
  }
  // 熨烫折痕（十字形——从仓库里拿出来直接铺上）
  ctx.strokeStyle = 'rgba(255,120,110,0.16)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, h * 0.5); ctx.lineTo(w, h * 0.5); ctx.stroke();
  hctx.strokeStyle = '#989898'; hctx.lineWidth = 3;
  hctx.beginPath(); hctx.moveTo(0, h * 0.5); hctx.lineTo(w, h * 0.5); hctx.stroke();
  // 酒渍/油点
  srand(67);
  stains(ctx, w, h, 5, [70, 8, 12], 46, 0.35);
  stains(rctx, w, h, 5, [30, 30, 30], 46, 0.5);
  // 织纹微点
  for (let i = 0; i < 4200; i++) {
    ctx.fillStyle = `rgba(255,150,140,${0.02 + rnd() * 0.03})`;
    ctx.fillRect(rnd() * w, rnd() * h, 1.5, 1.5);
  }
  return {
    map: tex(c, 2, 1), normalMap: normalFromHeight(hc, 2.6),
    roughnessMap: roughTex(rc, 2, 1), roughness: 1.0, metalness: 0.0,
  };
}

// ---------- 金箔（v1.5 新增：舞台沿口/藻井线脚的锤揲金层） ----------
export function goldFoil() {
  srand(71);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const hc = canvas(w, h), hctx = hc.getContext('2d');
  const rc = canvas(w, h), rctx = rc.getContext('2d');
  ctx.fillStyle = '#c79a3a'; ctx.fillRect(0, 0, w, h);
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, w, h);
  rctx.fillStyle = '#4a4a4a'; rctx.fillRect(0, 0, w, h);
  // 贴箔方格（每张金箔一块，边缘微错位——手工贴金的签名）
  const sq = 64;
  for (let ty = 0; ty < h; ty += sq) {
    for (let tx = 0; tx < w; tx += sq) {
      const tone = 190 + rnd() * 40;
      ctx.fillStyle = `rgba(${tone|0},${(tone * 0.76)|0},${(tone * 0.3)|0},0.5)`;
      ctx.fillRect(tx + 1, ty + 1, sq - 2, sq - 2);
      ctx.strokeStyle = 'rgba(96,66,20,0.5)'; ctx.lineWidth = 1.5;
      ctx.strokeRect(tx + 0.5, ty + 0.5, sq - 1, sq - 1);
      hctx.fillStyle = rnd() > 0.5 ? '#868686' : '#7a7a7a';
      hctx.fillRect(tx + 1, ty + 1, sq - 2, sq - 2);
    }
  }
  // 锤揲凹痕与磨损露底
  for (let i = 0; i < 130; i++) {
    const x = rnd() * w, y = rnd() * h, r = 3 + rnd() * 9;
    ctx.fillStyle = `rgba(${120 + rnd() * 60|0},${80 + rnd() * 40|0},${20 + rnd() * 20|0},0.3)`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    hctx.fillStyle = '#727272';
    hctx.beginPath(); hctx.arc(x, y, r, 0, Math.PI * 2); hctx.fill();
    rctx.fillStyle = 'rgba(150,150,150,0.55)';
    rctx.beginPath(); rctx.arc(x, y, r, 0, Math.PI * 2); rctx.fill();
  }
  return {
    map: tex(c, 1, 1), normalMap: normalFromHeight(hc, 1.4),
    roughnessMap: roughTex(rc, 1, 1), roughness: 1.0, metalness: 0.9,
  };
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

// ---------- 地毯（红色走道毯）v1.5：512 + 团花纹样 + 踩踏磨痕 ----------
export function carpet() {
  srand(91);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#6e1013'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [110, 16, 19], 24, 0.6);
  // 金边纹样（双线 + 回纹角）
  ctx.strokeStyle = 'rgba(190,150,60,0.8)'; ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, w - 40, h - 40);
  ctx.strokeStyle = 'rgba(190,150,60,0.35)'; ctx.lineWidth = 4;
  ctx.strokeRect(44, 44, w - 88, h - 88);
  // 回纹角饰
  ctx.strokeStyle = 'rgba(190,150,60,0.55)'; ctx.lineWidth = 4;
  [[64, 64], [w - 64, 64], [64, h - 64], [w - 64, h - 64]].forEach(([cx, cy]) => {
    ctx.strokeRect(cx - 18, cy - 18, 36, 36);
    ctx.strokeRect(cx - 8, cy - 8, 16, 16);
  });
  // 中央团花（婚庆毯的圆形缠枝纹）
  ctx.strokeStyle = 'rgba(190,150,60,0.45)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(w / 2, h / 2, 92, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(w / 2, h / 2, 70, 0, Math.PI * 2); ctx.stroke();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const px = w / 2 + Math.cos(a) * 81, py = h / 2 + Math.sin(a) * 81;
    ctx.beginPath(); ctx.arc(px, py, 13, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.fillStyle = 'rgba(190,150,60,0.4)';
  ctx.font = '52px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('囍', w / 2, h / 2 + 2);
  // 踩踏磨痕（中线走道被踩得发暗发亮）
  const wear = ctx.createLinearGradient(0, 0, w, 0);
  wear.addColorStop(0, 'rgba(0,0,0,0)');
  wear.addColorStop(0.5, 'rgba(30,6,6,0.28)');
  wear.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = wear; ctx.fillRect(0, 0, w, h);
  stains(ctx, w, h, 9, [30, 20, 18], 110, 0.25);
  const hc = canvas(256, 256), hctx = hc.getContext('2d');
  hctx.fillStyle = '#808080'; hctx.fillRect(0, 0, 256, 256);
  srand(7);
  for (let i = 0; i < 7000; i++) {
    hctx.fillStyle = rnd() > 0.5 ? '#868686' : '#7a7a7a';
    hctx.fillRect(rnd() * 256, rnd() * 256, 1.5, 1.5);
  }
  return { map: tex(c, 1, 4), normalMap: normalFromHeight(hc, 0.7), roughness: 0.95, metalness: 0.0 };
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
  const w = 1024, h = 1024;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#2a7a86'); g.addColorStop(0.45, '#155059'); g.addColorStop(1, '#072028');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  // 上层光带（水面透下来的光）
  for (let i = 0; i < 44; i++) {
    const x = rnd() * w, ww = 18 + rnd() * 90;
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
  for (let i = 0; i < 2600; i++) {
    const y = rnd() * h;
    ctx.fillStyle = `rgba(140,210,200,${0.03 + rnd() * 0.09 * (1 - y / h)})`;
    ctx.fillRect(rnd() * w, y, 1 + rnd() * 2.5, 1 + rnd() * 2.5);
  }
  // 深处的暗影轮廓（负空间——像有什么，看不清）
  for (let i = 0; i < 6; i++) {
    const x = rnd() * w, y = h * 0.35 + rnd() * h * 0.5, r = 140 + rnd() * 300;
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
// v1.0：512 分辨率 + 分层皮肤（底色/血色/毛孔/油湿高光）+ 不对称五官
export function skinFace(kind = 'mc') {
  srand(kind === 'mc' ? 191 : 193);
  const w = 512, h = 512;
  const c = canvas(w, h), ctx = c.getContext('2d');
  ctx.fillStyle = '#c8a084'; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [200, 160, 132], 12, 0.4);
  // 血色分区：颧骨/鼻头偏红，眼下青灰
  stains(ctx, w, h, 4, [190, 120, 105], 90, 0.2);
  ctx.fillStyle = 'rgba(150,140,140,0.16)';
  ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.47, 34, 14, 0.1, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.475, 34, 14, -0.1, 0, Math.PI * 2); ctx.fill();
  // 毛孔
  for (let i = 0; i < 2600; i++) {
    ctx.fillStyle = `rgba(120,86,66,${0.03 + rnd() * 0.05})`;
    ctx.fillRect(rnd() * w, rnd() * h, 1.4, 1.4);
  }
  const asym = kind === 'mc' ? 6 : 0; // 司仪：右眼低半分——正常里的一点点不对
  // 眼窝阴影
  ctx.fillStyle = 'rgba(70,50,44,0.5)';
  ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.42, 30, 17, 0.06, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.42 + asym, 30, 17, -0.06, 0, Math.PI * 2); ctx.fill();
  if (kind === 'mc') {
    // 睁大的眼 + 高光（永远看着你）
    ctx.fillStyle = 'rgba(232,226,214,0.9)';
    ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.42, 13, 8, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.42 + asym, 13, 8, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(20,16,14,0.95)';
    ctx.beginPath(); ctx.ellipse(w * 0.38, h * 0.42, 6.5, 6.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.62, h * 0.42 + asym, 6.5, 6.5, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect(w * 0.38 - 2, h * 0.42 - 4, 3, 3); ctx.fillRect(w * 0.62 - 2, h * 0.42 + asym - 4, 3, 3);
    // 眼睑垂坠
    ctx.strokeStyle = 'rgba(96,66,54,0.7)'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(w * 0.31, h * 0.405);
    ctx.quadraticCurveTo(w * 0.38, h * 0.385, w * 0.45, h * 0.405); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w * 0.55, h * 0.405 + asym);
    ctx.quadraticCurveTo(w * 0.62, h * 0.385 + asym, w * 0.69, h * 0.405 + asym); ctx.stroke();
  } else {
    // 侍应：闭目——两道安静的睑线 + 礼貌的浅笑（线宽加粗：3 米外也要读得出「他闭着眼」）
    ctx.strokeStyle = 'rgba(74,46,38,0.95)'; ctx.lineWidth = 5.5;
    ctx.beginPath(); ctx.moveTo(w * 0.3, h * 0.42);
    ctx.quadraticCurveTo(w * 0.38, h * 0.45, w * 0.46, h * 0.42); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w * 0.54, h * 0.42);
    ctx.quadraticCurveTo(w * 0.62, h * 0.45, w * 0.7, h * 0.42); ctx.stroke();
    // 睫毛影
    ctx.strokeStyle = 'rgba(88,58,48,0.4)'; ctx.lineWidth = 9;
    ctx.beginPath(); ctx.moveTo(w * 0.31, h * 0.44);
    ctx.quadraticCurveTo(w * 0.38, h * 0.465, w * 0.45, h * 0.44); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(w * 0.55, h * 0.44);
    ctx.quadraticCurveTo(w * 0.62, h * 0.465, w * 0.69, h * 0.44); ctx.stroke();
    // 颊侧立体阴影（脸不再是一张白纸）
    ctx.fillStyle = 'rgba(140,96,76,0.22)';
    ctx.beginPath(); ctx.ellipse(w * 0.27, h * 0.56, 26, 44, 0.2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.73, h * 0.56, 26, 44, -0.2, 0, Math.PI * 2); ctx.fill();
  }
  // 眉
  ctx.strokeStyle = 'rgba(46,32,26,0.8)'; ctx.lineWidth = 5;
  ctx.beginPath(); ctx.moveTo(w * 0.3, h * 0.355);
  ctx.quadraticCurveTo(w * 0.38, h * 0.335, w * 0.46, h * 0.35); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.54, h * 0.35 + asym * 0.5);
  ctx.quadraticCurveTo(w * 0.62, h * 0.335 + asym * 0.5, w * 0.7, h * 0.355 + asym * 0.5); ctx.stroke();
  // 鼻影 + 法令纹
  ctx.fillStyle = 'rgba(150,110,90,0.4)';
  ctx.beginPath(); ctx.ellipse(w * 0.5, h * 0.55, 11, 24, 0, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(140,96,76,0.4)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w * 0.44, h * 0.6);
  ctx.quadraticCurveTo(w * 0.42, h * 0.66, w * 0.44, h * 0.7); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.56, h * 0.6);
  ctx.quadraticCurveTo(w * 0.58, h * 0.66, w * 0.56, h * 0.7); ctx.stroke();
  if (kind === 'mc') {
    // 司仪：口部鱼籽状钙化增生（层层卵粒封死唇形）——外圈稀疏内圈致密
    for (let i = 0; i < 480; i++) {
      const ang = rnd() * Math.PI * 2, rr = Math.pow(rnd(), 0.7) * 62;
      const x = w * 0.5 + Math.cos(ang) * rr * 1.5, y = h * 0.68 + Math.sin(ang) * rr * 0.62;
      const r = 2.5 + rnd() * 6;
      const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
      g.addColorStop(0, 'rgba(240,231,208,0.96)');
      g.addColorStop(0.55, 'rgba(206,189,158,0.92)');
      g.addColorStop(1, 'rgba(130,112,88,0.85)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      // 卵粒高光（湿）
      ctx.fillStyle = 'rgba(255,252,240,0.5)';
      ctx.beginPath(); ctx.arc(x - r * 0.3, y - r * 0.35, r * 0.22, 0, Math.PI * 2); ctx.fill();
    }
    // 钙化边缘的皮肤泛红发亮
    const ring = ctx.createRadialGradient(w * 0.5, h * 0.68, 55, w * 0.5, h * 0.68, 110);
    ring.addColorStop(0, 'rgba(178,92,74,0.3)');
    ring.addColorStop(1, 'rgba(178,92,74,0)');
    ctx.fillStyle = ring;
    ctx.beginPath(); ctx.arc(w * 0.5, h * 0.68, 110, 0, Math.PI * 2); ctx.fill();
  } else {
    // 侍应：安静的浅笑（弧度礼貌到不自然）
    ctx.strokeStyle = 'rgba(96,58,48,0.95)'; ctx.lineWidth = 5.5;
    ctx.beginPath(); ctx.moveTo(w * 0.4, h * 0.68);
    ctx.quadraticCurveTo(w * 0.5, h * 0.735, w * 0.6, h * 0.68); ctx.stroke();
    ctx.strokeStyle = 'rgba(190,140,120,0.5)'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(w * 0.41, h * 0.695);
    ctx.quadraticCurveTo(w * 0.5, h * 0.75, w * 0.59, h * 0.695); ctx.stroke();
    // 嘴角两点浅涡（笑得太标准了）
    ctx.fillStyle = 'rgba(120,76,62,0.5)';
    ctx.beginPath(); ctx.arc(w * 0.385, h * 0.682, 3.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(w * 0.615, h * 0.682, 3.4, 0, Math.PI * 2); ctx.fill();
  }
  // 油湿高光（额头/鼻梁/颧骨）
  [[0.5, 0.28, 60, 26], [0.5, 0.5, 10, 34], [0.33, 0.5, 20, 10], [0.67, 0.5, 20, 10]].forEach(([fx, fy, rx, ry]) => {
    const g = ctx.createRadialGradient(w * fx, h * fy, 0, w * fx, h * fy, Math.max(rx, ry));
    g.addColorStop(0, 'rgba(255,238,220,0.18)');
    g.addColorStop(1, 'rgba(255,238,220,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.ellipse(w * fx, h * fy, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
  });
  if (kind === 'mc') {
    // 司仪：下颌青灰胡茬（细密点阵）+ 太阳穴汗珠沟（长时间主持的湿）
    for (let i = 0; i < 900; i++) {
      const x = w * (0.3 + rnd() * 0.4), y = h * (0.74 + rnd() * 0.16);
      const dx = (x - w * 0.5) / (w * 0.22), dy = (y - h * 0.8) / (h * 0.12);
      if (dx * dx + dy * dy > 1.4) continue;
      ctx.fillStyle = `rgba(52,44,40,${0.1 + rnd() * 0.14})`;
      ctx.fillRect(x, y, 1.2, 1.6);
    }
    for (const [fx, fy] of [[0.24, 0.36], [0.76, 0.37], [0.27, 0.46]]) {
      ctx.strokeStyle = 'rgba(255,244,228,0.28)';
      ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(w * fx, h * fy);
      ctx.quadraticCurveTo(w * fx + 3, h * (fy + 0.05), w * fx - 2, h * (fy + 0.1)); ctx.stroke();
      ctx.fillStyle = 'rgba(255,248,236,0.5)';
      ctx.beginPath(); ctx.arc(w * fx - 2, h * (fy + 0.1), 2.2, 0, Math.PI * 2); ctx.fill();
    }
    // 泛红的耳缘（长时间供灯烤着）
    ctx.fillStyle = 'rgba(196,96,72,0.3)';
    ctx.beginPath(); ctx.ellipse(w * 0.09, h * 0.5, 18, 30, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(w * 0.91, h * 0.5, 18, 30, 0, 0, Math.PI * 2); ctx.fill();
  } else {
    // 侍应：左眼下一道干涸的水线（哭过？溅过？没人问过）
    ctx.strokeStyle = 'rgba(180,180,190,0.22)';
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(w * 0.375, h * 0.455);
    ctx.quadraticCurveTo(w * 0.37, h * 0.55, w * 0.385, h * 0.64); ctx.stroke();
    ctx.strokeStyle = 'rgba(150,140,150,0.14)';
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(w * 0.376, h * 0.47);
    ctx.quadraticCurveTo(w * 0.372, h * 0.55, w * 0.386, h * 0.62); ctx.stroke();
    // 颈侧一小片盐渍白霜（海水干了之后留下的）
    for (let i = 0; i < 60; i++) {
      const x = w * (0.62 + rnd() * 0.14), y = h * (0.86 + rnd() * 0.1);
      ctx.fillStyle = `rgba(228,224,214,${0.08 + rnd() * 0.1})`;
      ctx.fillRect(x, y, 1.5 + rnd() * 2, 1.2);
    }
  }
  return tex(c, 1, 1);
}

// ---------- 新娘盖头（红绸 + 绣金囍纹 + 垂穗边） ----------
export function veilSilk() {
  srand(233);
  const w = 256, h = 256;
  const c = canvas(w, h), ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#a50f16'); g.addColorStop(0.6, '#8e0c12'); g.addColorStop(1, '#6b080e');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  noiseFill(ctx, w, h, [150, 16, 22], 18, 0.35);
  // 绸面竖向丝光
  for (let x = 0; x < w; x += 10) {
    ctx.fillStyle = `rgba(255,120,110,${0.03 + rnd() * 0.05})`;
    ctx.fillRect(x, 0, 3, h);
  }
  // 绣金囍纹（环形排布——针脚感：字下衬一圈暗金锁边）
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (let i = 0; i < 6; i++) {
    const x = 24 + i * 42, y = h * 0.35 + (i % 2) * 26;
    ctx.fillStyle = 'rgba(120,84,20,0.8)';
    ctx.font = '30px serif';
    ctx.fillText('囍', x + 1, y + 1.5);
    ctx.fillStyle = 'rgba(224,176,64,0.95)';
    ctx.font = '28px serif';
    ctx.fillText('囍', x, y);
    // 金线反光点（刺绣的高光颗粒）
    for (let k = 0; k < 7; k++) {
      ctx.fillStyle = `rgba(255,226,150,${0.3 + rnd() * 0.4})`;
      ctx.fillRect(x - 12 + rnd() * 24, y - 12 + rnd() * 24, 1.4, 1.4);
    }
  }
  // 缠枝纹暗绣（同色深纹——只有转动时能看见）
  ctx.strokeStyle = 'rgba(120,10,16,0.55)';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, h * 0.55 + i * 18);
    for (let x = 0; x <= w; x += 8) {
      ctx.lineTo(x, h * 0.55 + i * 18 + Math.sin(x * 0.11 + i * 2) * 6);
    }
    ctx.stroke();
  }
  // 底缘金线（双道）+ 垂穗
  ctx.strokeStyle = '#d8a83a'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(0, h - 26); ctx.lineTo(w, h - 26); ctx.stroke();
  ctx.strokeStyle = '#a87c22'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0, h - 31); ctx.lineTo(w, h - 31); ctx.stroke();
  ctx.strokeStyle = '#d8a83a'; ctx.lineWidth = 2;
  for (let x = 6; x < w; x += 13) {
    ctx.beginPath(); ctx.moveTo(x, h - 24); ctx.lineTo(x + (rnd() - 0.5) * 4, h - 4); ctx.stroke();
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
