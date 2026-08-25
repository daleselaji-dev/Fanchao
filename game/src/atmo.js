// 氛围渲染层 —— 体积光锥 / 漂尘粒子 / 海洋馆焦散
// 全部程序化：光锥用径向渐变贴图 + 加法混合；尘埃走顶点着色器漂移（零 CPU 开销）；
// 焦散用双层滚动网纹。所有元素受灯光倍率联动（返潮点火后同步变暗）。
import * as THREE from 'three';

function gradTex(draw, w = 128, h = 128) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}

// 竖直光锥贴图：顶亮底透，横向柔和衰减
const coneTexCache = {};
function coneTex(tint = '255,228,180') {
  if (coneTexCache[tint]) return coneTexCache[tint];
  // 只做纵向渐变：圆柱侧面绕周均匀，双面加法混合天然产生「边缘增亮」的体积感
  const t = gradTex((ctx, w, h) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);
    const v = ctx.createLinearGradient(0, 0, 0, h);
    v.addColorStop(0, `rgba(${tint},0.7)`);
    v.addColorStop(0.35, `rgba(${tint},0.3)`);
    v.addColorStop(1, `rgba(${tint},0)`);
    ctx.fillStyle = v;
    ctx.fillRect(0, 0, w, h);
  }, 64, 256);
  coneTexCache[tint] = t;
  return t;
}

export class Atmosphere {
  constructor(scene) {
    this.scene = scene;
    this.cones = [];   // { mesh, group, base, light? }
    this.dust = [];    // { points, mat }
    this.caustics = [];
    this.time = 0;
  }

  // ---------- 体积光锥 ----------
  // group: 灯光分组名（联动 agenda.lightMult）；light: 可选，跟随其闪烁
  addCone(x, yTop, z, rTop, rBot, height, opacity, group, tint = '255,228,180', light = null) {
    const geo = new THREE.CylinderGeometry(rTop, rBot, height, 14, 1, true);
    const mat = new THREE.MeshBasicMaterial({
      map: coneTex(tint), transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      fog: false,
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, yTop - height / 2, z);
    m.renderOrder = 5;
    this.scene.add(m);
    this.cones.push({ mesh: m, mat, base: opacity, group, light });
    return m;
  }

  // 斜射光板（门缝/玻璃投入的光——平面版光锥）
  addShaft(x, y, z, w, h, ry, rz, opacity, group, tint = '210,235,225') {
    const mat = new THREE.MeshBasicMaterial({
      map: coneTex(tint), transparent: true, opacity,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
      fog: false,
    });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    m.rotation.y = ry; m.rotation.z = rz;
    m.renderOrder = 5;
    this.scene.add(m);
    this.cones.push({ mesh: m, mat, base: opacity, group, light: null });
    return m;
  }

  // ---------- 漂尘（顶点着色器漂移，零 CPU） ----------
  addDust(box, count, size = 0.035, color = 0xd8c8a8, opacity = 0.5, group = 'hall') {
    const [x1, y1, z1, x2, y2, z2] = box;
    const pos = new Float32Array(count * 3);
    const phase = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = x1 + Math.random() * (x2 - x1);
      pos[i * 3 + 1] = y1 + Math.random() * (y2 - y1);
      pos[i * 3 + 2] = z1 + Math.random() * (z2 - z1);
      phase[i] = Math.random() * 6.28;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: size * 500 },
        uColor: { value: new THREE.Color(color) },
        uOpacity: { value: opacity },
      },
      vertexShader: /* glsl */`
        uniform float uTime;
        uniform float uSize;
        attribute float aPhase;
        varying float vTw;
        void main() {
          vec3 p = position;
          p.x += sin(uTime * 0.13 + aPhase) * 0.55 + sin(uTime * 0.31 + aPhase * 2.0) * 0.2;
          p.y += sin(uTime * 0.09 + aPhase * 1.7) * 0.4;
          p.z += cos(uTime * 0.11 + aPhase) * 0.55;
          vTw = 0.55 + 0.45 * sin(uTime * (0.8 + fract(aPhase) * 1.6) + aPhase * 7.0);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uSize / max(1.0, -mv.z);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vTw;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d) * uOpacity * vTw;
          gl_FragColor = vec4(uColor, a);
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const pts = new THREE.Points(geo, mat);
    pts.renderOrder = 6;
    pts.frustumCulled = false;
    this.scene.add(pts);
    this.dust.push({ points: pts, mat, group, base: opacity });
    return pts;
  }

  // ---------- 焦散（海洋馆地面/南墙的活动水纹） ----------
  _causticTex() {
    if (this._ct) return this._ct;
    const c = document.createElement('canvas');
    c.width = 256; c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 256, 256);
    // 手绘 Voronoi 感觉的亮网
    ctx.strokeStyle = 'rgba(150,255,235,0.55)';
    ctx.lineWidth = 2.4;
    const nodes = [];
    for (let i = 0; i < 42; i++) nodes.push([Math.random() * 256, Math.random() * 256]);
    for (const [x, y] of nodes) {
      ctx.beginPath();
      const n = 5 + (Math.random() * 3 | 0);
      for (let k = 0; k <= n; k++) {
        const a = (k / n) * Math.PI * 2;
        const r = 14 + Math.random() * 26;
        const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
        if (k === 0) ctx.moveTo(px, py); else
          ctx.quadraticCurveTo(x + Math.cos(a - 0.4) * r * 1.35, y + Math.sin(a - 0.4) * r * 1.35, px, py);
      }
      ctx.stroke();
    }
    ctx.filter = 'blur(2px)';
    ctx.drawImage(c, 0, 0);
    ctx.filter = 'none';
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    this._ct = t;
    return t;
  }

  addCaustics(x, y, z, w, h, rx, ry, opacity = 0.1, group = 'aqua') {
    for (let layer = 0; layer < 2; layer++) {
      const t = this._causticTex().clone();
      t.needsUpdate = true;
      t.repeat.set(w / 6, h / 6);
      const mat = new THREE.MeshBasicMaterial({
        map: t, transparent: true, opacity: opacity * (layer ? 0.6 : 1),
        blending: THREE.AdditiveBlending, depthWrite: false, color: 0x59d8c8, fog: false,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.position.set(x, y + layer * 0.012, z);
      m.rotation.x = rx; m.rotation.y = ry;
      m.renderOrder = 4;
      this.scene.add(m);
      this.caustics.push({ mesh: m, mat, tex: t, dir: layer ? -1 : 1, base: opacity * (layer ? 0.6 : 1), group });
    }
  }

  update(dt, lightMult) {
    this.time += dt;
    for (const c of this.cones) {
      const mult = lightMult[c.group] ?? 1;
      let k = mult;
      if (c.light) k *= THREE.MathUtils.clamp(c.light.intensity / Math.max(0.01, c.light.userData.base ?? c.light.intensity), 0, 1.4);
      c.mat.opacity = c.base * k * (0.94 + Math.sin(this.time * 1.7 + c.mesh.position.x) * 0.06);
    }
    for (const d of this.dust) {
      d.mat.uniforms.uTime.value = this.time;
      d.mat.uniforms.uOpacity.value = d.base * (0.4 + 0.6 * (lightMult[d.group] ?? 1));
    }
    for (const c of this.caustics) {
      c.tex.offset.x += dt * 0.021 * c.dir;
      c.tex.offset.y += dt * 0.013 * c.dir;
      const s = 1 + Math.sin(this.time * 0.5 * c.dir) * 0.06;
      c.mat.opacity = c.base * (lightMult[c.group] ?? 1) * (0.8 + Math.sin(this.time * 1.1 + c.dir) * 0.2) * s;
    }
  }
}
