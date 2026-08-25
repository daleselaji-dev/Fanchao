// 实体 —— 宴席工位命名法（05_DESIGN_V2/07）：司仪 / 侍应 / 浮客 / 回眸客 / 新娘
// 禁止任何"X鬼"命名。每个实体 = 婚宴工位 × 残骸功能。
import * as THREE from 'three';
import * as TX from './textures.js';

const skinMat = (kind) => new THREE.MeshStandardMaterial({ map: TX.skinFace(kind), roughness: 0.6 });

// ---------- 通用人形装配 ----------
function humanoid({ suit = 0x28221e, shirt = 0xd8d4c8, skin = 'waiter', hair = 0x14100c, dress = false, armMat = null }) {
  const g = new THREE.Group();
  const suitMat = new THREE.MeshStandardMaterial({ color: suit, roughness: 0.82 });
  const shirtMat = new THREE.MeshStandardMaterial({ color: shirt, roughness: 0.85 });
  const hairMat = new THREE.MeshStandardMaterial({ color: hair, roughness: 0.9 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0x1a1614, roughness: 0.9 });

  if (dress) {
    const pts = [];
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      pts.push(new THREE.Vector2(0.3 - t * 0.14 + Math.sin(t * 3.14) * 0.02, t * 1.28));
    }
    const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 10), suitMat);
    body.castShadow = true;
    g.add(body);
  } else {
    // 裤腿
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.085, 0.72, 8), legMat);
      leg.position.set(s * 0.1, 0.42, 0);
      leg.castShadow = true;
      g.add(leg);
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.24), new THREE.MeshStandardMaterial({ color: 0x0d0b09, roughness: 0.4 }));
      shoe.position.set(s * 0.1, 0.045, 0.04);
      g.add(shoe);
    }
    // 上身（西装/马甲）
    const tpts = [];
    const prof = [[0.16, 0], [0.19, 0.12], [0.2, 0.3], [0.185, 0.44], [0.21, 0.5], [0.05, 0.56]];
    for (const [r, y] of prof) tpts.push(new THREE.Vector2(r, y));
    const torso = new THREE.Mesh(new THREE.LatheGeometry(tpts, 10), suitMat);
    torso.scale.set(1.25, 1, 0.85);
    torso.position.y = 0.78;
    torso.castShadow = true;
    g.add(torso);
    // 衬衫前胸 V 形
    const v = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.26), shirtMat);
    v.position.set(0, 1.14, 0.155);
    g.add(v);
  }
  // 手臂
  const armM = armMat || suitMat;
  const arms = {};
  for (const s of [-1, 1]) {
    const shoulder = new THREE.Group();
    shoulder.position.set(s * 0.24, 1.3, 0);
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.32, 8), suitMat);
    upper.position.y = -0.16;
    shoulder.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -0.33;
    const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.038, 0.3, 8), armM);
    fore.position.y = -0.15;
    elbow.add(fore);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), skinMat(skin));
    hand.position.y = -0.32;
    elbow.add(hand);
    shoulder.add(elbow);
    shoulder.rotation.z = s * 0.1;
    g.add(shoulder);
    arms[s < 0 ? 'left' : 'right'] = { shoulder, elbow, hand };
  }
  // 颈 + 头
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.09, 8), skinMat(skin));
  neck.position.y = 1.4;
  g.add(neck);
  const head = new THREE.Group();
  head.position.y = 1.56;
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 12), skinMat(skin));
  skull.scale.set(0.92, 1.08, 0.98);
  skull.rotation.y = Math.PI / 2; // 面部贴图朝 +Z
  skull.castShadow = true;
  head.add(skull);
  const hairM = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hairMat);
  hairM.scale.set(0.95, 1.05, 1.0);
  hairM.position.set(0, 0.015, -0.015);
  head.add(hairM);
  g.add(head);
  return { group: g, arms, head };
}

// ---------- 司仪（Hero 实体：口封而声不止） ----------
export class MC {
  constructor(scene) {
    const h = humanoid({ suit: 0x6e1013, shirt: 0xe8e0d0, skin: 'mc', hair: 0x0d0a08 });
    this.group = h.group;
    this.arms = h.arms;
    this.head = h.head;
    // 金色领结
    const bowMat = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.7, roughness: 0.35 });
    for (const s of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.07, 6), bowMat);
      wing.rotation.z = s * Math.PI / 2;
      wing.position.set(s * 0.035, 1.37, 0.13);
      this.group.add(wing);
    }
    // 胸花（红绢花 + 绿叶——喜宴工位证）
    {
      const fl = new THREE.Group();
      const petalMat = new THREE.MeshStandardMaterial({ color: 0xc01018, roughness: 0.65, emissive: 0x28060a });
      for (let i = 0; i < 6; i++) {
        const p = new THREE.Mesh(new THREE.SphereGeometry(0.022, 6, 5), petalMat);
        const a = (i / 6) * Math.PI * 2;
        p.position.set(Math.cos(a) * 0.028, Math.sin(a) * 0.028, 0);
        p.scale.z = 0.5;
        fl.add(p);
      }
      const heart = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5),
        new THREE.MeshStandardMaterial({ color: 0xd8b050, roughness: 0.5 }));
      heart.position.z = 0.012; fl.add(heart);
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.014, 0.05, 5),
        new THREE.MeshStandardMaterial({ color: 0x2e5c34, roughness: 0.8 }));
      leaf.position.set(-0.04, -0.03, -0.005); leaf.rotation.z = 1.1; fl.add(leaf);
      fl.position.set(0.13, 1.22, 0.15);
      this.group.add(fl);
    }
    // 口部鱼籽状钙化增生（几何层，2 米读）—— 湿光质感，烛光下颗颗可辨
    const roeMat = new THREE.MeshStandardMaterial({ color: 0xe4dbc2, roughness: 0.22, envMapIntensity: 1.6, transparent: true, opacity: 0.97, emissive: 0x0c0a06 });
    const roe = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 6, 6), roeMat, 90);
    const dum = new THREE.Object3D();
    TX.srand(404);
    for (let i = 0; i < 90; i++) {
      // 分布在头部前下方（口周），按唇形分层
      const a = (TX.rnd() - 0.5) * 1.5;       // 水平角
      const b = -0.35 - TX.rnd() * 0.45;      // 垂直角（下半脸）
      const r = 0.115;
      const x = Math.sin(a) * Math.cos(b) * r * 0.92;
      const y = Math.sin(b) * r * 1.08;
      const z = Math.cos(a) * Math.cos(b) * r * 0.98;
      dum.position.set(x, y + 0.01, z + 0.005);
      dum.scale.setScalar(0.006 + TX.rnd() * 0.012);
      dum.updateMatrix();
      roe.setMatrixAt(i, dum.matrix);
    }
    this.head.add(roe);
    this.roe = roe;
    // 有线麦克风（右手），线没入舞台地板
    const mic = new THREE.Group();
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.023, 0.18, 8), new THREE.MeshStandardMaterial({ color: 0x1c1a18, roughness: 0.5 }));
    mic.add(handle);
    const micHead = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.9, roughness: 0.35 }));
    micHead.position.y = 0.11;
    mic.add(micHead);
    mic.position.set(0, -0.32, 0.06);
    mic.rotation.x = -0.9;
    this.arms.right.elbow.add(mic);
    // 麦线（从手垂到台面没入地板）
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 });
    const cable = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.28, 0.95, 0.12),
      new THREE.Vector3(0.34, 0.5, 0.3),
      new THREE.Vector3(0.2, 0.05, 0.5),
      new THREE.Vector3(-0.3, 0.01, 0.7),
      new THREE.Vector3(-0.5, -0.4, 0.75),
    ]), 16, 0.012, 6), cableMat);
    this.group.add(cable);
    // 姿势
    this.arms.right.shoulder.rotation.x = -0.9;
    this.arms.right.elbow.rotation.x = -0.9;
    this.arms.left.shoulder.rotation.z = -0.15;
    this.group.position.set(0, 0.6, -18.2); // 站在舞台上
    this.group.scale.setScalar(1.06);
    scene.add(this.group);
    this.gestureT = -1;
    this.sync = 0;         // 同步律：0=声先手后 → 1=完全同步（终局）
    this.silenced = false; // 剪缆后失声
    this._t = 0;
  }
  gesture() { this.gestureT = 0; }
  update(dt, playerPos) {
    this._t += dt;
    // 呼吸
    const b = 1 + Math.sin(this._t * 1.1) * 0.008;
    this.group.scale.set(1.06, 1.06 * b, 1.06);
    // 头缓慢追踪玩家（只在宴会厅内）
    const inHall = playerPos.z < 1 && Math.abs(playerPos.x) < 16;
    if (inHall && !this.silenced) {
      const dx = playerPos.x - this.group.position.x;
      const dz = playerPos.z - this.group.position.z;
      const yaw = Math.atan2(dx, dz);
      this.head.rotation.y += (THREE.MathUtils.clamp(yaw, -0.9, 0.9) - this.head.rotation.y) * dt * 0.4;
    }
    // 报幕手势（声先手后：广播开始后由 agenda 延时调用 gesture）
    if (this.gestureT >= 0) {
      this.gestureT += dt;
      const k = Math.min(1, this.gestureT / 0.8);
      const lift = Math.sin(k * Math.PI) * 0.9;
      this.arms.left.shoulder.rotation.x = -lift;
      if (this.gestureT > 2.2) { this.gestureT = -1; this.arms.left.shoulder.rotation.x = 0; }
    }
    if (this.silenced) {
      // 失声后：垂手，头低下
      this.head.rotation.x += (0.5 - this.head.rotation.x) * dt;
      this.arms.right.shoulder.rotation.x += (0 - this.arms.right.shoulder.rotation.x) * dt * 2;
      this.arms.right.elbow.rotation.x += (0 - this.arms.right.elbow.rotation.x) * dt * 2;
    }
  }
}

// ---------- 侍应（巡回威胁：只沿红绳走） ----------
export class Waiter {
  constructor(scene, id) {
    this.id = id;
    const driftTex = TX.drift();
    const armMat = new THREE.MeshStandardMaterial({ ...driftTex });
    const h = humanoid({ suit: 0x17181c, shirt: 0xe4e0d4, skin: 'waiter', hair: 0x100d0a, armMat });
    this.group = h.group;
    this.arms = h.arms;
    this.head = h.head;
    // 白衬衫长袖 → 前臂浪蚀浮木已由 armMat 实现；颈部同材质环
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.055, 0.06, 8), armMat);
    collar.position.y = 1.44;
    this.group.add(collar);
    // 托盘（端得极稳——无论怎么走，托盘永远水平）——三人菜色各异
    const tray = new THREE.Group();
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.22, 0.02, 14), new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.9, roughness: 0.3 }));
    tray.add(plate);
    if (id === 0) {
      // 分层沉积截面的「菜」
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.09, 12), new THREE.MeshStandardMaterial({ ...TX.sediment() }));
      dish.position.y = 0.06;
      tray.add(dish);
    } else if (id === 1) {
      // 一摞白瓷碗（微微过高）
      const bowlMat = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.18, envMapIntensity: 1.2 });
      for (let k = 0; k < 6; k++) {
        const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.085 - k * 0.002, 0.06, 0.045, 10), bowlMat);
        bowl.position.y = 0.035 + k * 0.042;
        bowl.rotation.y = k * 0.4;
        tray.add(bowl);
      }
    } else {
      // 金属菜罩（看不见里面是什么）
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.15, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.5),
        new THREE.MeshStandardMaterial({ color: 0xb8b4a8, metalness: 0.95, roughness: 0.18, envMapIntensity: 1.8 }));
      dome.position.y = 0.02;
      tray.add(dome);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.02, 8, 6), new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.8, roughness: 0.3 }));
      knob.position.y = 0.17;
      tray.add(knob);
    }
    tray.position.set(-0.22, 1.08, 0.24);
    this.group.add(tray);
    // 腰围黑围裙
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.42),
      new THREE.MeshStandardMaterial({ color: 0x0f0f12, roughness: 0.9, side: THREE.DoubleSide }));
    apron.position.set(0, 0.72, 0.19);
    apron.rotation.x = 0.06;
    this.group.add(apron);
    // 三人体态差异：身高 / 头微倾角度
    this.group.scale.setScalar(0.98 + id * 0.045);
    this.head.rotation.z = (id - 1) * 0.06;
    this.arms.left.shoulder.rotation.x = -0.85;
    this.arms.left.elbow.rotation.x = -0.75;
    // 右手上举抓绳（索道姿态签名）
    this.arms.right.shoulder.rotation.x = Math.PI - 0.2;
    this.arms.right.elbow.rotation.x = 0.25;
    // 前倾
    this.group.rotation.x = 0.045;
    scene.add(this.group);
    this.state = 'idle'; // idle|ride|stand|walk|chase|return
    this.cord = null;
    this.t = 0;
    this.dir = 1;
    this.speed = 0.92;
    this.standTimer = 0;
    this.targetPos = new THREE.Vector3();
    this.yaw = 0;
    this._bob = Math.random() * 6;
    this.visible = false;
    this.group.visible = false;
  }
  setVisible(v) { this.visible = v; this.group.visible = v; }
  mountNearest(sys, pos) {
    let best = null, bd = 1e9;
    for (const c of sys.cords) {
      if (!c.rideable || c.tag === 'deco' || !c.a || !c.b) continue;
      const d = c.pointAt(0.5).distanceTo(pos);
      if (d < bd) { bd = d; best = c; }
    }
    if (best) {
      this.cord = best;
      this.t = 0.5;
      this.dir = Math.random() > 0.5 ? 1 : -1;
      this.state = 'ride';
      const p = best.pointAt(this.t);
      this.group.position.set(p.x, 0, p.z);
    } else {
      this.state = 'stand';
      this.standTimer = 3;
    }
  }
  onTopologyChange(sys, cord) {
    if (this.cord === cord && this.state === 'ride') {
      this.state = 'stand';
      this.standTimer = 2.6;
      this.cord = null;
    }
  }
  // 预告→追逐：先停 0.9 秒，头部猛地转向玩家（可学习的威胁前摇）
  startChase(instant = false) {
    if (this.state === 'escorting' || this.state === 'chase') return;
    if (instant || this.state === 'alert') { this.state = 'chase'; return; }
    this.state = 'alert';
    this.alertTimer = 0.9;
  }
  stopChase(sys) {
    if (this.state === 'chase' || this.state === 'alert') { this.state = 'stand'; this.standTimer = 1.2; }
  }
  update(dt, sys, playerPos, onCatch, audio) {
    if (!this.visible) return;
    this._bob += dt;
    const g = this.group;
    let moving = false, mv = new THREE.Vector3();
    if (this.state === 'alert') {
      // 定住——只有头部锁向玩家
      this.alertTimer -= dt;
      const dx = playerPos.x - g.position.x, dz = playerPos.z - g.position.z;
      const targetYaw = Math.atan2(dx, dz);
      let dd = targetYaw - this.yaw;
      while (dd > Math.PI) dd -= Math.PI * 2;
      while (dd < -Math.PI) dd += Math.PI * 2;
      this.head.rotation.y += (THREE.MathUtils.clamp(dd, -1.2, 1.2) - this.head.rotation.y) * Math.min(1, dt * 14);
      if (!this._alertSting) { this._alertSting = true; audio?.sting(0.3); }
      if (this.alertTimer <= 0) { this.state = 'chase'; this._alertSting = false; }
    } else if (this.head.rotation.y !== 0 && this.state !== 'chase') {
      this.head.rotation.y += (0 - this.head.rotation.y) * dt * 3;
    }
    if (this.state === 'ride' && this.cord) {
      if (!sys.cords.includes(this.cord) || !this.cord.a || !this.cord.b) {
        this.state = 'stand'; this.standTimer = 2.6; this.cord = null;
      } else {
        const len = Math.max(0.5, this.cord.length);
        this.t += (this.speed / len) * this.dir * dt;
        if (this.t >= 1 || this.t <= 0) {
          const arriveHook = this.t >= 1 ? this.cord.b : this.cord.a;
          this.t = THREE.MathUtils.clamp(this.t, 0, 1);
          // 选下一根绳
          const options = arriveHook.cords.filter(c => c !== this.cord && c.rideable && c.a && c.b && c.tag !== 'deco');
          if (options.length > 0) {
            const next = options[(Math.random() * options.length) | 0];
            this.cord = next;
            this.t = next.a === arriveHook ? 0 : 1;
            this.dir = next.a === arriveHook ? 1 : -1;
          } else {
            this.dir *= -1; // 折返
            if (Math.random() < 0.3 && audio) audio.pluck(60, 0.12);
          }
        }
        const p = this.cord.pointAt(this.t);
        mv.set(p.x - g.position.x, 0, p.z - g.position.z);
        g.position.set(p.x, 0, p.z);
        moving = true;
        this.cord.mat.emissiveIntensity = 1.6; // 载客的绳微亮
        // 滑行途中撞上玩家也会被引座
        if (g.position.distanceTo(playerPos) < 0.85) { onCatch(this); return; }
      }
    } else if (this.state === 'stand') {
      this.standTimer -= dt;
      if (this.standTimer <= 0) this.state = 'walk';
    } else if (this.state === 'walk') {
      // 走向最近的可乘绳
      let best = null, bd = 1e9, bp = null;
      for (const c of sys.cords) {
        if (!c.rideable || c.tag === 'deco' || !c.a || !c.b) continue;
        for (const e of ['a', 'b']) {
          const p = c.endPos(e);
          const d = p.distanceTo(g.position);
          if (d < bd) { bd = d; best = c; bp = p; }
        }
      }
      if (best) {
        mv.set(bp.x - g.position.x, 0, bp.z - g.position.z);
        const d = mv.length();
        if (d < 0.4) {
          this.cord = best;
          this.t = best.endPos('a').distanceTo(g.position) < best.endPos('b').distanceTo(g.position) ? 0 : 1;
          this.dir = this.t === 0 ? 1 : -1;
          this.state = 'ride';
        } else {
          mv.normalize().multiplyScalar(0.75 * dt);
          g.position.add(mv);
          moving = true;
        }
      } else { this.state = 'stand'; this.standTimer = 3; }
    } else if (this.state === 'chase') {
      mv.set(playerPos.x - g.position.x, 0, playerPos.z - g.position.z);
      const d = mv.length();
      if (d < 0.95) { onCatch(this); return; }
      mv.normalize().multiplyScalar(1.5 * dt);
      g.position.add(mv);
      moving = true;
    }
    // 朝向
    if (moving && mv.lengthSq() > 1e-8) {
      const targetYaw = Math.atan2(mv.x, mv.z);
      let d = targetYaw - this.yaw;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      this.yaw += d * Math.min(1, dt * 6);
      g.rotation.y = this.yaw;
    }
    // 匀速滑行的非人感：轻浮 + 不迈步
    g.position.y = Math.sin(this._bob * 2.6) * 0.018 + 0.01;
    // 抓绳手只在乘绳时上举
    const rideArm = this.state === 'ride' ? Math.PI - 0.2 : -0.1;
    this.arms.right.shoulder.rotation.x += (rideArm - this.arms.right.shoulder.rotation.x) * dt * 4;
  }
}

// ---------- 浮客（氛围群体：悬浮的宾客） ----------
export class Guests {
  constructor(scene, count = 44) {
    this.count = count;
    const bodyGeo = new THREE.LatheGeometry(
      [[0.2, 0], [0.23, 0.35], [0.2, 0.8], [0.23, 1.05], [0.2, 1.3], [0.05, 1.42]].map(([r, y]) => new THREE.Vector2(r, y)), 8);
    const headGeo = new THREE.SphereGeometry(0.105, 10, 8);
    const bodyMat = new THREE.MeshStandardMaterial({ roughness: 0.88 });
    const headMat = new THREE.MeshStandardMaterial({ color: 0xd8b094, roughness: 0.65 });
    this.bodies = new THREE.InstancedMesh(bodyGeo, bodyMat, count);
    this.heads = new THREE.InstancedMesh(headGeo, headMat, count);
    this.bodies.castShadow = true;
    const palette = [0x6a4a52, 0x4a5468, 0x8e3038, 0x5c5648, 0x3c3644, 0x9a4a42];
    this.data = [];
    TX.srand(777);
    for (let i = 0; i < count; i++) {
      this.bodies.setColorAt(i, new THREE.Color(palette[(TX.rnd() * palette.length) | 0]));
      this.data.push({
        pos: new THREE.Vector3(), yaw: TX.rnd() * Math.PI * 2, targetYaw: null,
        phase: TX.rnd() * 6.28, scale: 0.94 + TX.rnd() * 0.12,
      });
    }
    scene.add(this.bodies, this.heads);
    this._dum = new THREE.Object3D();
    this.mode = 'hidden';
  }
  // 布席：宴会态（围桌散站）
  layoutParty(tables) {
    TX.srand(888);
    let i = 0;
    for (const d of this.data) {
      const [tx, tz] = tables[i % tables.length];
      const a = TX.rnd() * Math.PI * 2, r = 1.9 + TX.rnd() * 0.8;
      d.pos.set(tx + Math.cos(a) * r, 0, tz + Math.sin(a) * r);
      d.pos.x = THREE.MathUtils.clamp(d.pos.x, -14, 14);
      d.pos.z = THREE.MathUtils.clamp(d.pos.z, -16.5, -1);
      d.yaw = a + Math.PI / 2 + (TX.rnd() - 0.5);
      d.targetYaw = null;
      i++;
    }
    this.mode = 'party';
  }
  // 布席：终局（全体面向主桌，环形站列）
  layoutFinale(center) {
    TX.srand(999);
    let i = 0;
    for (const d of this.data) {
      const ring = i % 3;
      const a = (i / this.count) * Math.PI * 2 + ring * 0.35;
      const r = 4.2 + ring * 1.9 + TX.rnd() * 0.5;
      d.pos.set(center[0] + Math.cos(a) * r, 0, center[1] + Math.sin(a) * r * 0.72);
      d.pos.x = THREE.MathUtils.clamp(d.pos.x, -14, 14);
      d.pos.z = THREE.MathUtils.clamp(d.pos.z, -19, -1.2);
      d.yaw = Math.atan2(center[0] - d.pos.x, center[1] - d.pos.z);
      d.targetYaw = null;
      i++;
    }
    this.mode = 'finale';
  }
  hide() { this.mode = 'hidden'; }
  // 议程推进的一拍：全体同步转向
  turnTo(x, z) {
    for (const d of this.data) d.targetYaw = Math.atan2(x - d.pos.x, z - d.pos.z);
  }
  update(dt, t) {
    const vis = this.mode !== 'hidden';
    this.bodies.visible = this.heads.visible = vis;
    if (!vis) return;
    const dum = this._dum;
    for (let i = 0; i < this.count; i++) {
      const d = this.data[i];
      if (d.targetYaw !== null) {
        let dd = d.targetYaw - d.yaw;
        while (dd > Math.PI) dd -= Math.PI * 2;
        while (dd < -Math.PI) dd += Math.PI * 2;
        d.yaw += dd * Math.min(1, dt * 1.2);
        if (Math.abs(dd) < 0.02) d.targetYaw = null;
      }
      // 悬浮：脚尖离地半寸，衣摆缓慢漂动
      const fy = 0.04 + Math.sin(t * 0.7 + d.phase) * 0.025;
      const sway = Math.sin(t * 0.5 + d.phase * 2) * 0.02;
      dum.position.set(d.pos.x, fy, d.pos.z);
      dum.rotation.set(sway, d.yaw, sway * 0.7);
      dum.scale.setScalar(d.scale);
      dum.updateMatrix();
      this.bodies.setMatrixAt(i, dum.matrix);
      dum.position.y = fy + 1.52 * d.scale;
      dum.updateMatrix();
      this.heads.setMatrixAt(i, dum.matrix);
    }
    this.bodies.instanceMatrix.needsUpdate = true;
    this.heads.instanceMatrix.needsUpdate = true;
    if (this.bodies.instanceColor) this.bodies.instanceColor.needsUpdate = true;
  }
}

// ---------- 回眸客（非敌对指针：上一场许潮的伴娘） ----------
export class Gazer {
  constructor(scene) {
    this.group = new THREE.Group();
    const mat = new THREE.MeshBasicMaterial({
      color: 0xaebfc4, transparent: true, opacity: 0.32,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const mat2 = mat.clone(); mat2.opacity = 0.14;
    const dressGeo = new THREE.LatheGeometry(
      [[0.26, 0], [0.2, 0.5], [0.17, 0.95], [0.2, 1.2], [0.17, 1.35], [0.04, 1.45]].map(([r, y]) => new THREE.Vector2(r, y)), 10);
    const b1 = new THREE.Mesh(dressGeo, mat);
    this.group.add(b1);
    const b2 = new THREE.Mesh(dressGeo, mat2);
    b2.position.set(0.04, 0, -0.02);
    this.group.add(b2); // 多重曝光
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), mat);
    head.position.y = 1.58;
    this.group.add(head);
    const hairGeo = new THREE.ConeGeometry(0.12, 0.5, 8);
    const hair = new THREE.Mesh(hairGeo, mat2);
    hair.position.set(0, 1.42, -0.08);
    this.group.add(hair);
    // 垂到腰际的长发（背身剪影的关键读法）
    const longHair = new THREE.Mesh(new THREE.PlaneGeometry(0.26, 0.75), mat2);
    longHair.position.set(0, 1.15, -0.14);
    longHair.rotation.x = 0.08;
    this.group.add(longHair);
    // 腕上剪断的旧绳头
    const stub = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2, 5),
      new THREE.MeshBasicMaterial({ color: 0x8e1418, transparent: true, opacity: 0.6 }));
    stub.position.set(0.24, 0.95, 0.05);
    stub.rotation.z = 0.4;
    this.group.add(stub);
    this.group.visible = false;
    scene.add(this.group);
    this.opacity = 0;
    this.mats = [mat, mat2];
    this.fixedYaw = null;
    this.dissolving = false;
  }
  appearAt(x, z, fixedYaw = null) {
    this.group.position.set(x, 0.05, z);
    this.group.visible = true;
    this.opacity = 0;
    this.dissolving = false;
    this.fixedYaw = fixedYaw;
  }
  vanish() { this.dissolving = true; }
  update(dt, playerPos, t) {
    if (!this.group.visible) return;
    if (this.dissolving) {
      this.opacity = Math.max(0, this.opacity - dt * 1.6);
      if (this.opacity <= 0) { this.group.visible = false; return; }
    } else {
      this.opacity = Math.min(1, this.opacity + dt * 0.8);
      const d = this.group.position.distanceTo(playerPos);
      if (d < 2.6) this.dissolving = true; // 不可接近：走近即散
    }
    const flicker = 0.8 + Math.sin(t * 9.7) * 0.1 + Math.sin(t * 23.3) * 0.06;
    this.mats[0].opacity = 0.32 * this.opacity * flicker;
    this.mats[1].opacity = 0.14 * this.opacity * flicker;
    // 永远回眸看向玩家（或凝视固定方向——终局指向锚点）
    const yaw = this.fixedYaw !== null ? this.fixedYaw
      : Math.atan2(playerPos.x - this.group.position.x, playerPos.z - this.group.position.z);
    this.group.rotation.y += (yaw - this.group.rotation.y) * dt * 2;
    this.group.position.y = 0.05 + Math.sin(t * 0.9) * 0.03;
  }
}

// ---------- 新娘（盖头之下不揭示） ----------
export class Bride {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    const redSilk = new THREE.MeshStandardMaterial({ color: 0xa50f16, roughness: 0.55, emissive: 0x25040a });
    // 坐姿身形
    const body = new THREE.Mesh(new THREE.LatheGeometry(
      [[0.26, 0], [0.3, 0.2], [0.24, 0.5], [0.26, 0.75], [0.2, 0.95], [0.06, 1.05]].map(([r, y]) => new THREE.Vector2(r, y)), 10), redSilk);
    body.castShadow = true;
    this.group.add(body);
    // 盖头（红绸罩住整个头——边缘绣金，烛光下唯一可读的細節）
    const veil = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.42, 10, 3, true),
      new THREE.MeshStandardMaterial({ map: TX.veilSilk(), roughness: 0.5, side: THREE.DoubleSide, emissive: 0x30060a }));
    veil.position.y = 1.22;
    this.group.add(veil);
    // 凤冠（金带 + 珠串垂旒，微颤）
    const gold = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.85, roughness: 0.3, envMapIntensity: 1.6 });
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.018, 6, 18), gold);
    band.rotation.x = Math.PI / 2;
    band.position.y = 1.36;
    this.group.add(band);
    this.beads = [];
    for (let i = 0; i < 7; i++) {
      const a = -0.9 + i * 0.3;
      const string = new THREE.Group();
      for (let k = 0; k < 4; k++) {
        const bead = new THREE.Mesh(new THREE.SphereGeometry(0.011, 6, 5), gold);
        bead.position.y = -0.035 * (k + 1);
        string.add(bead);
      }
      string.position.set(Math.sin(a) * 0.14, 1.36, Math.cos(a) * 0.14);
      this.group.add(string);
      this.beads.push({ g: string, phase: i * 1.1 });
    }
    const crownTop = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.1, 8), gold);
    crownTop.position.y = 1.42;
    this.group.add(crownTop);
    // 搭在膝上的手
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshStandardMaterial({ color: 0xc8a084, roughness: 0.7 }));
    hand.position.set(0.1, 0.55, 0.2);
    this.group.add(hand);
    const hand2 = hand.clone(); hand2.position.x = -0.1;
    this.group.add(hand2);
    this.group.visible = false;
    scene.add(this.group);
    this._t = 0;
  }
  show(x, z, yaw) {
    this.group.position.set(x, 0.42, z);
    this.group.rotation.y = yaw;
    this.group.visible = true;
    // 主桌下：她与玩家的绳在这里汇成同一个结（终局可见，不解释）
    if (!this._knot) {
      this._knot = new THREE.Group();
      const cordMat = new THREE.MeshStandardMaterial({ color: 0xa50f16, emissive: 0x3d0407, emissiveIntensity: 1.2, roughness: 0.75 });
      const seat = new THREE.Vector3(2.1, 0.1, -13.5);
      const mid = new THREE.Vector3(0.4, 0.08, -13.6);
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
        new THREE.Vector3(x, 0.5, z),
        new THREE.Vector3(x + 0.4, 0.06, z + 0.3),
        mid,
        new THREE.Vector3(1.4, 0.05, -13.4),
        seat,
      ]), 20, 0.018, 5), cordMat);
      this._knot.add(tube);
      const knot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), cordMat);
      knot.position.copy(mid);
      this._knot.add(knot);
      this.scene.add(this._knot);
    }
  }
  update(dt) {
    if (!this.group.visible) return;
    this._t += dt;
    const b = 1 + Math.sin(this._t * 0.8) * 0.01;
    this.group.scale.set(1, b, 1);
    // 珠旒微颤——她在极轻地抖
    for (const bd of this.beads) {
      bd.g.rotation.x = Math.sin(this._t * 7.3 + bd.phase) * 0.06;
      bd.g.rotation.z = Math.cos(this._t * 8.1 + bd.phase) * 0.05;
    }
  }
}
