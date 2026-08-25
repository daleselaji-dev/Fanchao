// 「牵红」红绳席位系统 —— 主机制。
// 规则见 06_GAMEPLAY_CORE/01_玩法内核_牵红.md：
//   红绳即动线（侍应只沿绳走）· 红绳即机关（拦门/吊闸）· 红绳即席位（玩家腕绳）
import * as THREE from 'three';

const CORD_RED = 0xa50f16;
const CORD_EMISSIVE = 0x3d0407;
const GLOW_EMISSIVE = 0xff2a22;

export class Hook {
  constructor(id, pos, normal = new THREE.Vector3(0, 0, 1)) {
    this.id = id;
    this.pos = pos.clone();
    this.normal = normal.clone();
    this.cords = []; // 挂在此钩上的绳端
    this.group = new THREE.Group();
    this.group.position.copy(pos);
    this._build();
  }
  _build() {
    // 金色礼钩：底座圆盘 + 弯钩
    const gold = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.85, roughness: 0.35, emissive: 0x2a1c05 });
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.07, 0.03, 10), gold);
    base.rotation.x = Math.PI / 2;
    this.group.add(base);
    const hookCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0.015),
      new THREE.Vector3(0, -0.01, 0.09),
      new THREE.Vector3(0, -0.075, 0.115),
      new THREE.Vector3(0, -0.12, 0.07),
    ]);
    const hook = new THREE.Mesh(new THREE.TubeGeometry(hookCurve, 10, 0.016, 6), gold);
    this.group.add(hook);
    // 醒目度：微弱金色自发光点
    this.marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xd8b050, emissive: 0x66481a, emissiveIntensity: 1 })
    );
    this.marker.position.set(0, -0.05, 0.1);
    this.group.add(this.marker);
    this.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), this.normal);
    this.group.position.copy(this.pos);
  }
  setHighlight(on) {
    this.marker.material.emissiveIntensity = on ? 6 : 1;
    this.marker.scale.setScalar(on ? 1.8 : 1);
  }
}

let cordUid = 0;

export class Cord {
  constructor(sys, hookA, hookB, opts = {}) {
    this.sys = sys;
    this.id = 'cord' + (cordUid++);
    this.a = hookA; // Hook 或 null（被手持）
    this.b = hookB;
    this.slack = opts.slack ?? 0.5;     // 松弛度（下垂量系数）
    this.tag = opts.tag || '';           // doorE / gate / patrol ...
    this.rideable = opts.rideable !== false;
    this.fixedEnd = opts.fixedEnd || null; // 该端不可摘（如闸门卷筒端）
    this.heldEnd = null;                 // 'a' | 'b' | null
    this.mat = new THREE.MeshStandardMaterial({
      color: CORD_RED, emissive: CORD_EMISSIVE, emissiveIntensity: 1.2, roughness: 0.75,
    });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.mat);
    this.mesh.castShadow = false;
    this.mesh.userData.cord = this;
    // 端头结与穗（可交互目标）
    const knotGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const knotMat = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.7, roughness: 0.4 });
    const tasselGeo = new THREE.ConeGeometry(0.035, 0.16, 8);
    const tasselMat = new THREE.MeshStandardMaterial({ color: 0x8e0c12, roughness: 0.9 });
    this.knotA = new THREE.Group();
    this.knotA.add(new THREE.Mesh(knotGeo, knotMat));
    const tA = new THREE.Mesh(tasselGeo, tasselMat); tA.position.y = -0.11; this.knotA.add(tA);
    this.knotB = this.knotA.clone();
    this.knotA.userData = { cord: this, end: 'a' };
    this.knotB.userData = { cord: this, end: 'b' };
    this.knotA.traverse(o => o.userData = { cord: this, end: 'a' });
    this.knotB.traverse(o => o.userData = { cord: this, end: 'b' });
    this.curve = null;
    this.length = 1;
    this._wave = 0; // 拨动振动
    if (hookA) hookA.cords.push(this);
    if (hookB) hookB.cords.push(this);
    this.rebuild();
  }

  endPos(end) {
    if (this.heldEnd === end) return this.sys.handPos;
    const h = end === 'a' ? this.a : this.b;
    return h ? h.pos : this.sys.handPos;
  }

  rebuild() {
    const pa = this.endPos('a'), pb = this.endPos('b');
    const dist = pa.distanceTo(pb);
    this.length = dist;
    const sag = Math.min(1.2, dist * 0.055 * (1 + this.slack));
    const mid = pa.clone().lerp(pb, 0.5);
    mid.y -= sag;
    const q1 = pa.clone().lerp(pb, 0.25); q1.y -= sag * 0.72;
    const q3 = pa.clone().lerp(pb, 0.75); q3.y -= sag * 0.72;
    this.curve = new THREE.CatmullRomCurve3([pa, q1, mid, q3, pb]);
    const oldGeo = this.mesh.geometry;
    this.mesh.geometry = new THREE.TubeGeometry(this.curve, 16, 0.024, 6);
    if (oldGeo) oldGeo.dispose();
    this.knotA.position.copy(pa);
    this.knotB.position.copy(pb);
  }

  pointAt(t) { return this.curve.getPointAt(THREE.MathUtils.clamp(t, 0, 1)); }

  vibrate() { this._wave = 1; }

  update(dt) {
    if (this._wave > 0) {
      this._wave = Math.max(0, this._wave - dt * 1.4);
      const s = 1 + Math.sin(performance.now() * 0.04) * 0.012 * this._wave;
      this.mesh.scale.set(1, s, 1);
      this.mat.emissiveIntensity = 1.2 + this._wave * 1.5;
    }
    if (this.heldEnd) this.rebuild();
  }

  detach(end) {
    const h = end === 'a' ? this.a : this.b;
    if (h) {
      const i = h.cords.indexOf(this);
      if (i >= 0) h.cords.splice(i, 1);
    }
    if (end === 'a') this.a = null; else this.b = null;
    this.heldEnd = end;
    this.rebuild();
  }

  attach(end, hook) {
    if (end === 'a') this.a = hook; else this.b = hook;
    hook.cords.push(this);
    this.heldEnd = null;
    this.rebuild();
  }

  otherHook(hook) { return this.a === hook ? this.b : this.a; }
}

// ---------- 腕绳（玩家的席位缆） ----------
export class WristCord {
  constructor(scene) {
    this.scene = scene;
    this.trail = [];       // 身后拖行的路径点
    this.maxLen = 46;      // 每寄挂一次变短
    this.segments = 4;     // 剩余「寄挂」次数的视觉表达（终局须剩 1）
    this.glow = 0;         // 点名时发亮
    this.mat = new THREE.MeshStandardMaterial({
      color: CORD_RED, emissive: CORD_EMISSIVE, emissiveIntensity: 1.4, roughness: 0.8,
    });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.mat);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
    this._rebuildTimer = 0;
  }
  record(pos) {
    const p = pos.clone(); p.y = 0.06;
    if (this.trail.length === 0 || this.trail[this.trail.length - 1].distanceToSquared(p) > 0.55) {
      this.trail.push(p);
      while (this.trail.length > this.maxLen) this.trail.shift();
    }
  }
  shorten() {
    this.maxLen = Math.max(10, this.maxLen - 12);
    while (this.trail.length > this.maxLen) this.trail.shift();
    this.segments = Math.max(0, this.segments - 1);
    const dk = 1 - this.segments * 0.12;
    this.mat.color.setRGB(0.65 * (1 - dk * 0.5), 0.05, 0.07);
  }
  update(dt, handPos) {
    this.glow = Math.max(0, this.glow - dt * 0.7);
    this.mat.emissiveIntensity = 1.4 + this.glow * 9;
    this.mat.emissive.setHex(this.glow > 0.15 ? GLOW_EMISSIVE : CORD_EMISSIVE);
    this._rebuildTimer -= dt;
    if (this._rebuildTimer > 0 || this.trail.length < 2) return;
    this._rebuildTimer = 0.12;
    const pts = this.trail.slice();
    pts.push(handPos.clone());
    const curve = new THREE.CatmullRomCurve3(pts);
    const old = this.mesh.geometry;
    this.mesh.geometry = new THREE.TubeGeometry(curve, Math.min(64, pts.length * 2), 0.016, 5);
    if (old) old.dispose();
  }
}

// ---------- 绳网系统 ----------
export class CordSystem {
  constructor(scene, audio) {
    this.scene = scene;
    this.audio = audio;
    this.hooks = new Map();
    this.cords = [];
    this.held = null;      // 手持中的绳
    this.handPos = new THREE.Vector3();
    this.group = new THREE.Group();
    scene.add(this.group);
    this.onTopologyChange = null; // 回调：绳网重排（侍应重算）
    this.onNoise = null;
  }

  addHook(id, x, y, z, nx = 0, ny = 0, nz = 1, locked = false) {
    const h = new Hook(id, new THREE.Vector3(x, y, z), new THREE.Vector3(nx, ny, nz).normalize());
    h.locked = locked;
    if (locked) h.marker.visible = false;
    this.hooks.set(id, h);
    this.group.add(h.group);
    return h;
  }

  hook(id) { return this.hooks.get(id); }

  addCord(idA, idB, opts = {}) {
    const c = new Cord(this, this.hooks.get(idA), this.hooks.get(idB), opts);
    this.cords.push(c);
    this.group.add(c.mesh, c.knotA, c.knotB);
    return c;
  }

  removeCord(c) {
    ['a', 'b'].forEach(e => {
      const h = e === 'a' ? c.a : c.b;
      if (h) { const i = h.cords.indexOf(c); if (i >= 0) h.cords.splice(i, 1); }
    });
    const i = this.cords.indexOf(c);
    if (i >= 0) this.cords.splice(i, 1);
    this.group.remove(c.mesh, c.knotA, c.knotB);
    c.mesh.geometry.dispose();
  }

  clearAllCords() {
    [...this.cords].forEach(c => this.removeCord(c));
  }

  grab(cord, end) {
    if (this.held) return false;
    cord.detach(end);
    this.held = cord;
    this.audio?.pluck(70 + Math.random() * 30, 0.35);
    cord.vibrate();
    this.onTopologyChange?.(cord);
    return true;
  }

  hang(hook) {
    if (!this.held) return false;
    const c = this.held;
    c.attach(c.heldEnd === null ? 'a' : c.heldEnd, hook); // heldEnd 记录在 detach 时
    this.held = null;
    this.audio?.pluck(120 + Math.random() * 60, 0.4);
    c.vibrate();
    this.onTopologyChange?.(c);
    this.onNoise?.(0.25, hook.pos);
    return true;
  }

  // 找最近可交互目标：绳端(可摘) 或 礼钩(手持时可挂)
  nearestTarget(camPos, camDir, maxDist = 2.7) {
    let best = null, bestScore = 0.62;
    const v = new THREE.Vector3();
    if (!this.held) {
      for (const c of this.cords) {
        if (c.tag === 'deco') continue;
        for (const end of ['a', 'b']) {
          if (c.fixedEnd === end) continue;
          const p = c.endPos(end);
          v.copy(p).sub(camPos);
          const d = v.length();
          if (d > maxDist) continue;
          v.normalize();
          const dot = v.dot(camDir);
          if (dot > bestScore + Math.min(0.3, d * 0.06)) {
            bestScore = dot; best = { type: 'cordEnd', cord: c, end, pos: p, dist: d };
          }
        }
      }
    } else {
      for (const h of this.hooks.values()) {
        if (h.locked || h.cords.length >= 3) continue;
        v.copy(h.pos).sub(camPos);
        const d = v.length();
        if (d > maxDist) continue;
        v.normalize();
        const dot = v.dot(camDir);
        if (dot > bestScore) {
          bestScore = dot; best = { type: 'hook', hook: h, pos: h.pos, dist: d };
        }
      }
    }
    return best;
  }

  // 寄挂点名用：最近的礼钩（无方向要求）
  nearestHook(pos, maxDist = 2.4) {
    let best = null, bd = maxDist;
    for (const h of this.hooks.values()) {
      if (h.locked) continue;
      const d = h.pos.distanceTo(pos);
      if (d < bd) { bd = d; best = h; }
    }
    return best;
  }

  update(dt, handPos) {
    this.handPos.copy(handPos);
    for (const c of this.cords) c.update(dt);
  }
}
