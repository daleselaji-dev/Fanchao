// 《返潮 FANCHAO》——「喜宴」垂直切片
// 主机制：牵红（红绳席位系统）· CRT 预现为辅助层 · 议程时钟六拍
import * as THREE from 'three';
import { buildLevel } from './level.js';
import { CordSystem, WristCord } from './cords.js';
import { MC, Waiter, Guests, Gazer, Bride } from './entities.js';
import { AudioEngine } from './audio.js';
import { Player } from './player.js';
import { Post } from './post.js';
import { CRTManager } from './crt.js';
import { UI } from './ui.js';
import { Agenda } from './agenda.js';
import { Atmosphere } from './atmo.js';
import * as TX from './textures.js';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d0a08);
const camera = new THREE.PerspectiveCamera(66, window.innerWidth / window.innerHeight, 0.05, 140);

// ---------- 世界 ----------
const L = buildLevel(scene, renderer);

// 正门外的散场空地（终局）
{
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 24), new THREE.MeshStandardMaterial({ color: 0x1c1a18, roughness: 0.95 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.01, 12);
  scene.add(ground);
  // 夜幕背景板：挡住背后海洋馆水面板穿帮，让门外只剩夜与雾
  const night = new THREE.Mesh(new THREE.PlaneGeometry(70, 20), new THREE.MeshBasicMaterial({ color: 0x05070a, fog: false }));
  night.position.set(0, 6, 19.6); night.rotation.y = Math.PI;
  scene.add(night);
  const mist = new THREE.Mesh(new THREE.PlaneGeometry(34, 9), new THREE.MeshBasicMaterial({ color: 0xb8c4be, transparent: true, opacity: 0.3, depthWrite: false }));
  mist.position.set(0, 3.2, 16.5); mist.rotation.y = Math.PI;
  scene.add(mist);
  const mist2 = new THREE.Mesh(new THREE.PlaneGeometry(26, 5), new THREE.MeshBasicMaterial({ color: 0x8f9c94, transparent: true, opacity: 0.2, depthWrite: false }));
  mist2.position.set(2, 1.6, 13); mist2.rotation.y = Math.PI;
  scene.add(mist2);
  for (let i = 0; i < 4; i++) {
    const hl = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6), L.dyn.headlights.mat);
    hl.position.set(-6 + i * 4 + (i % 2), 0.9, 13 + (i % 2) * 1.5);
    hl.rotation.y = Math.PI;
    scene.add(hl);
  }
  L.colliders.push({ minX: -7, minZ: 0, maxX: -6.5, maxZ: 12 });
  L.colliders.push({ minX: 6.5, minZ: 0, maxX: 7, maxZ: 12 });
}

// ---------- 音频 / UI / 玩家 ----------
const audio = new AudioEngine();
const ui = new UI();
const player = new Player(camera, canvas);
player.yaw = 0; // 面向舞台（-Z）

// ---------- 红绳系统：礼钩布点 ----------
const sys = new CordSystem(scene, audio);
// 宴会厅
sys.addHook('hE_doorL', 14.72, 1.5, -4.0, -1, 0, 0);
sys.addHook('hE_doorR', 14.72, 1.5, -8.2, -1, 0, 0);
sys.addHook('hE_free', 14.72, 1.6, -1.6, -1, 0, 0);
sys.addHook('hStageL', -6, 2.3, -16.85, 0, 0, 1);
sys.addHook('hStageR', 6, 2.3, -16.85, 0, 0, 1);
sys.addHook('hW_wall', -14.72, 1.6, -10, 1, 0, 0);
sys.addHook('hE_wall', 14.72, 1.6, -10, -1, 0, 0);
sys.addHook('hW_free', -14.72, 1.6, -2.5, 1, 0, 0);
sys.addHook('hMainA', 1.1, 0.95, -12.2, 0, 0, 1);
sys.addHook('hMainB', 3.2, 0.95, -14.6, 1, 0, 0);
// 服务走廊（之字巡逻网）
sys.addHook('hC1', 17, 2.0, -7.75, 0, 0, 1);
sys.addHook('hC2', 23, 2.0, -4.65, 0, 0, -1);
sys.addHook('hC3', 29, 2.0, -7.75, 0, 0, 1);
sys.addHook('hC4', 35, 2.0, -4.65, 0, 0, -1);
sys.addHook('hC5', 39.7, 2.0, -6.4, -1, 0, 0);
sys.addHook('hC6', 36.7, 2.0, 2, 1, 0, 0);
sys.addHook('hC7', 39.7, 2.0, 8, -1, 0, 0);
sys.addHook('hC8', 36.7, 2.0, 13.4, 1, 0, 0);
sys.addHook('hAlcove', 19.5, 2.0, -7.75, 0, 0, 1);
// 大堂
sys.addHook('hDesk', 44.7, 1.3, 24, -1, 0, 0);
sys.addHook('hCol1', 30.7, 1.7, 18, 1, 0, 0);
sys.addHook('hCol2', 41.3, 1.7, 26, -1, 0, 0);
sys.addHook('hWest1', 24.35, 1.6, 19.8, 1, 0, 0);
sys.addHook('hWest2', 24.35, 1.6, 23.4, 1, 0, 0);
sys.addHook('hLFree', 28, 1.7, 29.6, 0, 0, -1);
// 海洋馆连廊
sys.addHook('hGateTop', 4, 3.25, 22, 0, 0, 1, true); // 闸门卷筒（锁定）
sys.addHook('hJam', 7.5, 1.5, 20.42, 0, 0, 1);
sys.addHook('hWinch', 11, 2.7, 20.42, 0, 0, 1);
sys.addHook('hSnap', 5.6, 1.1, 23.5, 0, 0, -1);
sys.addHook('hAqP1', 21, 2.0, 20.42, 0, 0, 1);
sys.addHook('hAqP2', 15, 2.0, 23.5, 0, 0, -1);
sys.addHook('hAqP3', 9, 2.0, 20.42, 0, 0, 1);
// 绞盘视觉（金色滑轮）
{
  const pulley = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 16), new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.85, roughness: 0.35 }));
  pulley.position.set(11, 2.85, 20.45);
  scene.add(pulley);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.26),
    new THREE.MeshStandardMaterial({ map: TX.signage('绞 盘', '#e8d8b0', '#33403a', 80), roughness: 0.9 }));
  sign.position.set(11, 2.2, 20.48);
  scene.add(sign);
}

// 初始绳网
sys.addCord('hE_doorL', 'hE_doorR', { tag: 'doorE', slack: 0.25, rideable: false });
sys.addCord('hC1', 'hC2'); sys.addCord('hC2', 'hC3'); sys.addCord('hC3', 'hC4');
sys.addCord('hC4', 'hC5'); sys.addCord('hC5', 'hC6'); sys.addCord('hC6', 'hC7'); sys.addCord('hC7', 'hC8');
sys.addCord('hWest1', 'hWest2', { tag: 'doorC', slack: 0.25, rideable: false });
sys.addCord('hCol1', 'hCol2'); sys.addCord('hCol2', 'hDesk');
sys.addCord('hGateTop', 'hJam', { tag: 'gate', slack: 0.15, rideable: false, fixedEnd: 'a' });
sys.addCord('hAqP1', 'hAqP2'); sys.addCord('hAqP2', 'hAqP3');

// 拦门绳的物理屏障
const barriers = [
  { tag: 'doorE', a: 'hE_doorL', b: 'hE_doorR', col: { minX: 14.4, minZ: -8.2, maxX: 15.6, maxZ: -4.0, disabled: false } },
  { tag: 'doorC', a: 'hWest1', b: 'hWest2', col: { minX: 23.9, minZ: 19.8, maxX: 24.9, maxZ: 23.4, disabled: false } },
];
barriers.forEach(b => L.colliders.push(b.col));

// ---------- 腕绳 ----------
const wrist = new WristCord(scene);
// 预铺：从上宾席一路拖到玩家开场位
for (let i = 0; i <= 12; i++) {
  const t = i / 12;
  wrist.trail.push(new THREE.Vector3(2.1 * (1 - t), 0.06, -13.5 + t * 10.5));
}

// ---------- 实体 ----------
const mc = new MC(scene);
const waiters = [new Waiter(scene, 0), new Waiter(scene, 1), new Waiter(scene, 2)];
const guests = new Guests(scene, 44);
const gazer = new Gazer(scene);
const bride = new Bride(scene);

// ---------- CRT ----------
const crt = new CRTManager(renderer, scene, L.screens, L.future);

// ---------- 后处理 ----------
const post = new Post(renderer, window.innerWidth, window.innerHeight);

// ---------- 氛围层：体积光锥 / 漂尘 / 焦散 ----------
const atmo = new Atmosphere(scene);
// 宴会厅吊灯光锥
atmo.addCone(0, 5.2, -5, 0.75, 3.4, 5.2, 0.055, 'hall');
atmo.addCone(0, 5.2, -12, 0.75, 3.4, 5.2, 0.055, 'hall');
// 舞台追光锥（斜射）
{
  const sc = atmo.addCone(0, 0, 0, 0.35, 2.5, 8.4, 0.06, 'hall');
  sc.position.set(0, 4.0, -15.1);
  const dir = new THREE.Vector3(0, 1.4 - 6.6, -18.2 + 12).normalize();
  sc.quaternion.setFromUnitVectors(new THREE.Vector3(0, -1, 0), dir);
}
// 大堂主吊灯 + 正门海雾透光
atmo.addCone(36, 6.4, 22, 1.5, 5.4, 6.6, 0.05, 'lobby');
atmo.addShaft(36, 2.4, 28.6, 6.2, 4.6, Math.PI, 0, 0.045, 'lobby', '185,210,200');
// 服务走廊荧光灯片（跟随灯管闪烁）
for (const tube of L.dyn.tubes) {
  const lp = tube.light.position;
  atmo.addCone(lp.x, 3.1, lp.z, 0.45, 1.35, 3.0, 0.05, 'corridor', '208,238,218', tube.light);
}
// 员工连廊灯泡小光锥（跟随摇晃灯泡）
for (const b of L.dyn.bulbs) {
  atmo.addCone(b.light.position.x, 2.65, b.light.position.z, 0.1, 0.7, 2.5, 0.035, 'connector', '255,214,150', b.light);
}
// 海洋馆焦散（地面 + 南墙）
atmo.addCaustics(2.5, 0.045, 22, 43, 4.2, -Math.PI / 2, 0, 0.16, 'aqua');
atmo.addCaustics(2.5, 1.6, 20.2, 43, 3.0, 0, 0, 0.07, 'aqua');
// 漂尘
atmo.addDust([-14, 0.3, -19, 14, 6.4, -0.5], 320, 0.035, 0xd8c8a8, 0.5, 'hall');
atmo.addDust([25, 0.3, 15, 47, 7.4, 29], 260, 0.035, 0xd0c4a4, 0.45, 'lobby');
atmo.addDust([-18, 0.2, 20.3, 23, 3.2, 23.8], 240, 0.03, 0x9fd8cc, 0.55, 'aqua');
atmo.addDust([16, 0.3, -7.6, 39.5, 3, 13.5], 170, 0.028, 0xc8d8be, 0.4, 'corridor');
atmo.addDust([-18.6, 0.3, -7, -15.6, 2.8, 19], 120, 0.03, 0xd8c8a8, 0.4, 'connector');
// 贴地雾层（v1.5：分层薄雾——大厅红金雾腰 / 海洋馆冷雾 / 大堂门口海雾渗入）
atmo.addGroundFog(0, 0.28, -10, 30, 20, 0.14, 'hall', '186,140,110');
atmo.addGroundFog(0, 0.85, -14, 26, 11, 0.08, 'hall', '200,130,100');
atmo.addGroundFog(2.5, 0.32, 22, 43, 4.4, 0.2, 'aqua', '140,196,186');
atmo.addGroundFog(36, 0.3, 26.5, 22, 8, 0.16, 'lobby', '176,186,176');
atmo.addGroundFog(-17.1, 0.26, 6, 4.2, 26, 0.15, 'connector', '190,200,196');
atmo.addGroundFog(0, 0.4, 11, 30, 15, 0.24, 'lobby', '168,182,172'); // 门外散场夜雾

// ---------- 区域 ----------
function regionAt(pos) {
  for (const r of L.regions) {
    if (pos.x >= r.box[0] && pos.z >= r.box[1] && pos.x <= r.box[2] && pos.z <= r.box[3]) return r;
  }
  return { name: '', mat: 'terrazzo' };
}
function regionNameAt(pos) { return regionAt(pos).name; }

// ---------- 议程导演 ----------
const g = {
  scene, L, sys, wrist, player, audio, ui, crt, mc, waiters, guests, gazer, bride, post,
  regionNameAt,
};
const agenda = new Agenda(g);

// 拓扑变化 → 侍应重算
sys.onTopologyChange = (cord) => {
  waiters.forEach(w => w.onTopologyChange(sys, cord));
};
sys.onNoise = (v) => agenda.addNoise(v);

// 脚步
player.onStep = (region, run) => {
  let mat = region.mat;
  if (region.name === '宴会厅' && Math.abs(player.pos.x) > 2.2) mat = 'terrazzo';
  if (region.name === '大堂' && Math.abs(player.pos.x - 36) > 2.4) mat = 'terrazzo';
  else if (region.name === '大堂') mat = 'carpet';
  audio.footstep(mat, run);
  agenda.addNoise(run ? 0.07 : 0.016);
};

// 侍应抓到玩家
const onCatch = (w) => agenda.escort(w);

// ---------- 闸门逻辑 ----------
let gateSnapDone = false;
function updateGate(dt) {
  const gate = L.dyn.gate;
  const cord = sys.cords.find(c => c.tag === 'gate');
  let speed = 0.55;
  if (cord && !cord.heldEnd) {
    const hookB = cord.b === sys.hook('hGateTop') ? cord.a : cord.b;
    if (hookB === sys.hook('hJam')) gate.targetY = 1.6;
    else if (hookB === sys.hook('hWinch')) {
      gate.targetY = 4.9; speed = 0.5;
      // 绞盘齿咔嗒（安静解法的声音签名）
      if (Math.abs(gate.y - gate.targetY) > 0.02 && Math.floor(gate.y * 6) !== Math.floor((gate.y - speed * dt) * 6)) audio.ratchet();
    }
    else if (hookB === sys.hook('hSnap')) {
      gate.targetY = 4.9; speed = 6;
      if (!gateSnapDone && gate.y < 4.5) {
        gateSnapDone = true;
        audio.thud(0.9);
        agenda.addNoise(1.3);
        ui.subtitle('闸门弹上去的巨响撞在玻璃上——裂纹沿着预现里的弧线爬了出来。', 6);
        L.dyn.cracks.forEach(c => { c.material.opacity = 0.85; });
        crt.setStatic('T07', true);
        for (let i = 0; i < 4; i++) setTimeout(() => audio.glassCreak(), i * 700);
        post.shock = 1.4;
      }
    } else gate.targetY = gate.y;
  }
  if (Math.abs(gate.y - gate.targetY) > 0.01) {
    const dir = Math.sign(gate.targetY - gate.y);
    gate.y += dir * speed * dt;
    if (dir > 0 && gate.y > gate.targetY) gate.y = gate.targetY;
    if (dir < 0 && gate.y < gate.targetY) gate.y = gate.targetY;
    gate.group.position.y = gate.y;
    if (speed < 1 && Math.random() < dt * 3) audio.creakLow();
  }
  gate.collider.disabled = gate.y > 3.1;
}

// ---------- 交互 ----------
const seatPos = new THREE.Vector3(2.1, 0, -13.5);
let cutHold = 0;
function updateInteract(dt) {
  // 被引座：站起
  if (player.seated) {
    ui.reticle('');
    if (player.holdE > 1.2) agenda.standUp();
    return;
  }
  // 终局剪缆 —— 在自己席位前，剪缆优先于一切（含点名寄挂）
  if (agenda.beat >= 5 && !agenda.ended) {
    const lock = sys.cords.find(c => c.tag === 'seatlock');
    const seatFree = !(lock && !lock.heldEnd &&
      ((lock.a === sys.hook('hMainA') && lock.b === sys.hook('hMainB')) ||
        (lock.a === sys.hook('hMainB') && lock.b === sys.hook('hMainA'))));
    const d = player.pos.distanceTo(seatPos);
    window.__cut = {
      d: +d.toFixed(2), seatFree, eDown: player.eDown, cutHold: +cutHold.toFixed(2),
      seated: player.seated, escorting: agenda.escorting, callActive: agenda.call.active,
      held: !!sys.held, lockEnds: lock ? [lock.a?.id || 'held', lock.b?.id || 'held'].join('~') : 'none',
    };
    if (d < 2.0) {
      if (!seatFree) {
        ui.prompt('席位被红绳捆着 —— 先<b>摘下</b>捆席的绳（对准绳端按 E）');
        ui.cutRing(0);
      } else if (player.eDown) {
        cutHold += dt;
        ui.prompt('别松手 —— <b>剪断腕绳</b>', 'E');
        ui.reticle('park');
        ui.cutRing(cutHold / 2.2);
        // 越剪越狠的反馈：相机抖 + 心跳 + 红脉冲
        player.kick((Math.random() - 0.5) * 0.02 * (1 + cutHold), (Math.random() - 0.5) * 0.012 * cutHold);
        post.redPulse = Math.max(post.redPulse, cutHold / 2.2 * 0.7);
        waiters.forEach(w => { if (w.visible) w.startChase(); });
        if (Math.floor(cutHold * 3) !== Math.floor((cutHold - dt) * 3)) audio.heartbeat();
        if (Math.floor(cutHold * 6) !== Math.floor((cutHold - dt) * 6)) audio.pluck(300 + cutHold * 300, 0.12, 0.99);
        if (cutHold >= 2.2) { agenda._cut(); cutHold = 0; ui.cutRing(0); }
        return;
      } else {
        cutHold = 0;
        ui.cutRing(0);
        ui.prompt('在你的席位前，<b>长按</b>剪断腕绳', 'E');
      }
    } else {
      cutHold = 0;
      ui.cutRing(0);
    }
  }
  // 点名寄挂
  if (agenda.call.active) {
    const h = sys.nearestHook(player.pos, 2.4);
    sys.hooks.forEach(hh => hh.setHighlight(false));
    if (h) {
      h.setHighlight(true);
      ui.reticle('park');
      ui.prompt('把腕绳<b>寄挂</b>到这只礼钩上', 'E');
      if (player.ePressedThisFrame) {
        agenda.resolveCall();
        h.pop();
        player.kick(-0.03);
        // 钩上留个红结
        const knot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0x8e0c12, roughness: 0.8 }));
        knot.position.copy(h.pos);
        scene.add(knot);
        ui.prompt('');
        ui.reticle('');
      }
      return;
    }
  }
  // 摘/挂（带滞回吸附：一旦锁定，视线稍偏也不丢——手感不「滑脱」）
  const camPos = camera.position;
  let target = sys.nearestTarget(camPos, player.lookDir, 2.8);
  if (!target && _lastTarget) {
    // 滞回：旧目标仍在范围内且视线偏差不大 → 保持锁定
    const p = _lastTarget.type === 'cordEnd' ? _lastTarget.cord.endPos(_lastTarget.end) : _lastTarget.hook.pos;
    const v = p.clone().sub(camPos);
    const d = v.length();
    const stillValid = _lastTarget.type === 'cordEnd'
      ? (!sys.held && sys.cords.includes(_lastTarget.cord) && _lastTarget.cord.fixedEnd !== _lastTarget.end)
      : (!!sys.held && !_lastTarget.hook.locked && _lastTarget.hook.cords.length < 3);
    if (stillValid && d < 2.9 && v.normalize().dot(player.lookDir) > 0.5) {
      target = { ..._lastTarget, pos: p, dist: d };
    }
  }
  _lastTarget = target;
  sys.hooks.forEach(h => h.setHighlight(false));
  // 目标绳结呼吸放大（所有结先复位）
  _interactT += dt;
  for (const c of sys.cords) { c.knotA.scale.setScalar(1); c.knotB.scale.setScalar(1); }
  if (target) {
    if (target.type === 'cordEnd') {
      target.cord.mat.emissiveIntensity = 2.8;
      const kn = target.end === 'a' ? target.cord.knotA : target.cord.knotB;
      kn.scale.setScalar(1.35 + Math.sin(_interactT * 9) * 0.14);
      ui.reticle('grab');
      const tagTip = { doorE: '（拦门绳）', doorC: '（拦门绳）', gate: '（闸门吊绳）', seatlock: '（捆席绳）' }[target.cord.tag] || '';
      ui.prompt(`<b>摘</b>下红绳${tagTip}`, 'E');
      if (player.ePressedThisFrame) {
        sys.grab(target.cord, target.end);
        audio.whoosh(0.14);
        player.kick(-0.035, 0.012);
        player.punchFov(-3.2);
        ui.ripple();
      }
    } else if (target.type === 'hook') {
      target.hook.setHighlight(true);
      ui.reticle('hang');
      const tip = { hWinch: '（绞盘 · 安静）', hSnap: '（卡扣 · 巨响）', hJam: '（卡死位）' }[target.hook.id] || '';
      ui.prompt(`把绳<b>挂</b>上礼钩${tip}`, 'E');
      if (player.ePressedThisFrame) {
        sys.hang(target.hook);
        player.kick(0.028, -0.01);
        player.punchFov(2.6);
        ui.ripple();
      }
    }
  } else if (sys.held) {
    ui.reticle('');
    ui.prompt('拿着红绳 —— 走向<b>呼吸发亮</b>的礼钩挂上', 'E');
  } else if (!agenda.call.active && !(agenda.beat >= 5 && player.pos.distanceTo(seatPos) < 2.0)) {
    ui.reticle('');
    ui.prompt('');
  }
}
let _lastTarget = null;
let _interactT = 0;

// ---------- 威胁声像：最近的活动侍应（耳机可辨方位） ----------
const _tv = new THREE.Vector3();
function updateThreatAudio() {
  let best = null, bd = 1e9;
  for (const w of waiters) {
    if (!w.visible) continue;
    const d = w.group.position.distanceTo(player.pos);
    if (d < bd) { bd = d; best = w; }
  }
  if (!best || bd > 14) { audio.setThreat(0, 0); audio.setCordHum(0, 0); audio.setBreath(0, 0); ui.threat(0, 0); return; }
  // 方位（右为正）
  _tv.copy(best.group.position).sub(player.pos);
  const f = player.forward;
  const pan = THREE.MathUtils.clamp(_tv.x * (-f.z) - _tv.z * (-f.x), -8, 8) / 8;
  const chasing = best.state === 'chase' || best.state === 'alert';
  const v = THREE.MathUtils.clamp(1 - bd / 14, 0, 1);
  audio.setThreat(chasing ? Math.min(1, v * 1.6 + 0.25) : v * 0.4, pan);
  // 绳鸣：贴近载客红绳
  audio.setCordHum(best.state === 'ride' ? v * v : 0, pan);
  // 近身呼吸：4.5m 内他的吸气比脚步先到——耳机上方位极准
  audio.setBreath(THREE.MathUtils.clamp(1 - bd / 4.5, 0, 1), pan);
  // 屏缘威胁指示：追逐中按方位泛红（听觉之外的第二读法）
  ui.threat(chasing ? Math.min(1, v * 1.3 + 0.15) : 0, pan);
}

// ---------- 屏障随绳网开合 ----------
function updateBarriers() {
  for (const b of barriers) {
    const cord = sys.cords.find(c => c.tag === b.tag);
    const closed = !!(cord && !cord.heldEnd &&
      ((cord.a === sys.hook(b.a) && cord.b === sys.hook(b.b)) ||
        (cord.a === sys.hook(b.b) && cord.b === sys.hook(b.a))));
    b.col.disabled = !closed;
  }
}

// ---------- 环境动态演出 ----------
let creakTimer = 5, glassTimer = 7, lynchTimer = 16;
function updateAmbience(dt, t) {
  // 荧光灯闪
  for (const tube of L.dyn.tubes) {
    const flicker = tube.flicker || agenda.beat >= 3;
    if (flicker && Math.random() < dt * (tube.flicker ? 2.2 : 0.5)) {
      const v = 0.25 + Math.random() * 0.75;
      tube.mat.emissiveIntensity = 2.6 * v;
      tube.light.intensity = tube.light.userData.base * v * (agenda.lightMult.corridor ?? 1);
    }
  }
  // 大堂吊灯摇晃（点火后）
  if (agenda.beat >= 3) {
    const ch = L.dyn.lobbyChand;
    ch.group.rotation.z = Math.sin(t * 0.6) * 0.05;
    ch.group.rotation.x = Math.cos(t * 0.43) * 0.04;
    ch.group.position.x = 36 + Math.sin(t * 0.6) * 0.3;
  }
  // 水光
  L.dyn.waterLights.forEach((wl, i) => {
    wl.intensity = wl.userData.base * (0.7 + Math.sin(t * (0.8 + i * 0.3) + i * 2) * 0.3);
    wl.position.x += Math.sin(t * 0.22 + i * 3) * dt * 1.2;
  });
  // 连廊灯泡摇
  for (const b of L.dyn.bulbs) {
    b.group.rotation.x = Math.sin(t * 1.1 + b.phase) * 0.14;
    b.group.rotation.z = Math.cos(t * 0.9 + b.phase) * 0.1;
  }
  // 红灯笼微摆（点火后摆幅加大——像有水流过大厅）+ 烛心呼吸
  const lanSway = agenda.beat >= 3 ? 0.12 : 0.04;
  for (const ln of L.dyn.lanterns) {
    ln.group.rotation.x = Math.sin(t * 0.7 + ln.phase) * lanSway;
    ln.group.rotation.z = Math.cos(t * 0.55 + ln.phase) * lanSway * 0.7;
    if (ln.glowMat) ln.glowMat.opacity = 0.8 + Math.sin(t * 2.3 + ln.phase * 3) * 0.12 + Math.sin(t * 7.1 + ln.phase) * 0.06;
  }
  // 桌面红烛焰苗（摇曳 + 微缩放）
  if (L.dyn.flames) for (const f of L.dyn.flames) {
    const s = 1 + Math.sin(t * 9 + f.phase) * 0.12 + Math.sin(t * 23 + f.phase * 2) * 0.07;
    f.mesh.scale.set(s, 1 / s * (1 + Math.sin(t * 5.7 + f.phase) * 0.1), 1);
    f.mesh.position.y = f.y0 + Math.sin(t * 11 + f.phase) * 0.004;
    f.mat.opacity = 0.85 + Math.sin(t * 13 + f.phase) * 0.12;
  }
  // 海里漂游的红盖头（缓慢翻卷下沉又浮起）
  if (L.dyn.veilDrift) {
    const v = L.dyn.veilDrift;
    v.rotation.x = t * 0.11; v.rotation.y = Math.sin(t * 0.07) * 1.2; v.rotation.z = t * 0.05;
    v.position.y = 2.0 + Math.sin(t * 0.13) * 0.5;
    v.position.x = 8 + Math.sin(t * 0.05) * 2.5;
  }
  // 海草摆动
  if (L.dyn.kelps) for (const k of L.dyn.kelps) {
    k.mesh.rotation.z = Math.sin(t * 0.4 + k.phase) * 0.12;
    k.mesh.position.x += Math.sin(t * 0.23 + k.phase) * dt * 0.15;
  }
  // 连廊胶帘摆动
  if (L.dyn.strips) for (const s of L.dyn.strips) {
    s.mesh.rotation.x = Math.sin(t * 0.8 + s.phase) * 0.05;
  }
  // 水中光柱摆动 + 暗影缓移
  if (L.dyn.beams) {
    for (const b of L.dyn.beams) {
      b.mesh.position.x = b.x0 + Math.sin(t * 0.18 + b.phase) * 2.4;
      b.mesh.rotation.z = 0.25 + Math.sin(t * 0.22 + b.phase) * 0.1;
      b.mesh.material.opacity = 0.1 + Math.sin(t * 0.35 + b.phase) * 0.05;
    }
    L.dyn.seaShade.position.x = -6 + Math.sin(t * 0.05) * 12;
    L.dyn.seaShade.position.y = 3.2 + Math.sin(t * 0.11) * 0.8;
  }
  // 区域触发音
  const rn = regionNameAt(player.pos);
  audio.setLayer('water', rn === '海洋馆连廊' ? 0.05 : 0.0, 1.5);
  // 空间自适应混响：换房间时耳朵先知道（瓷砖短亮/大堂厚软/海洋馆长暗）
  audio.setSpace(rn);
  // 低频不安随议程逐拍加深；收声期间反而更沉（静默是压着的，不是空的）
  {
    const b = agenda.beat;
    let dread = b >= 5 ? 0.85 : b >= 4 ? 0.62 : b >= 3 ? 0.48 : b >= 2 ? 0.3 : 0.16;
    if (audio.hushed) dread = Math.min(1, dread + 0.3);
    audio.setDread(dread);
  }
  // 区域电影曝光：喜宴过亮的日常 vs 服务区过暗的通道（林奇双态）
  {
    const late = agenda.beat >= 5;
    const EXP = late
      ? { '宴会厅': 1.1, '服务走廊': 0.98, '大堂': 1.04, '海洋馆连廊': 1.02, '员工连廊': 0.94 }
      : { '宴会厅': 1.32, '服务走廊': 1.0, '大堂': 1.16, '海洋馆连廊': 1.06, '员工连廊': 0.95 };
    post.exposureTarget = EXP[rn] ?? 1.12;
  }
  // 静默低压：收声期间画面失血
  post.dreadTarget = audio.hushed ? 1 : 0;
  if (rn === '员工连廊') {
    creakTimer -= dt;
    if (creakTimer <= 0) { creakTimer = 4 + Math.random() * 6; audio.creakLow(); }
  }
  // 林奇氛围事件（低频率，不解释）：隔墙笑声戛然而止 / 永不开门的电梯到站铃 / 暗处水滴
  lynchTimer -= dt;
  if (lynchTimer <= 0 && !audio.hushed) {
    lynchTimer = 20 + Math.random() * 26;
    if (rn === '大堂') audio.elevatorDing(Math.random() < 0.5 ? -0.7 : 0.7);
    else if (rn === '宴会厅' && agenda.beat >= 2) audio.distantLaugh((Math.random() - 0.5) * 1.2);
    else if (rn === '服务走廊') audio.drip((Math.random() - 0.5) * 1.4);
  }
  if (rn === '海洋馆连廊' && agenda.beat >= 4) {
    glassTimer -= dt;
    if (glassTimer <= 0) { glassTimer = 5 + Math.random() * 7; audio.glassCreak(); }
  }
  // 正门滑开
  if (L.dyn.doorSOpen) {
    const { dL, dR } = L.dyn.doorS.userData;
    dL.position.x += (-3.2 - dL.position.x) * dt * 0.8;
    dR.position.x += (3.2 - dR.position.x) * dt * 0.8;
  }
  // 距离剔除：远处灯光降载
  for (const grp of Object.keys(L.lights)) {
    for (const l of L.lights[grp]) {
      const d = l.position.distanceTo(player.pos);
      l.visible = d < 55;
    }
  }
}

// ---------- 标题 / 启动 / 暂停 ----------
const titleEl = document.getElementById('title');
const startBtn = document.getElementById('startBtn');
const resumeEl = document.getElementById('resume');
const ctlBtn = document.getElementById('ctlBtn');
const ctlPanel = document.getElementById('ctlPanel');
let started = false;
ctlBtn.addEventListener('click', () => {
  ctlPanel.style.display = ctlPanel.style.display === 'block' ? 'none' : 'block';
});
startBtn.addEventListener('click', () => {
  audio.init();
  titleEl.style.opacity = 0;
  setTimeout(() => { titleEl.style.display = 'none'; }, 900);
  player.enabled = true;
  player.lock();
  if (!started) { started = true; agenda.start(); }
});
document.addEventListener('pointerlockchange', () => {
  if (!started) return;
  resumeEl.style.display = document.pointerLockElement === canvas ? 'none' : 'flex';
});
resumeEl.addEventListener('click', () => player.lock());
document.getElementById('pauseRestart').addEventListener('click', (e) => {
  e.stopPropagation();
  location.reload();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  post.resize(window.innerWidth, window.innerHeight);
});

// ---------- 主循环 ----------
// QA 钩子（自动化验证用）
window.__game = g;
window.__agenda = agenda;

const clock = new THREE.Clock();
let fixedT = 0;
function loop() {
  requestAnimationFrame(loop);
  // __fixedDt：离线逐帧渲染（固定步长）；__timeScale：加速（自动化测试用）
  let dt, t;
  if (window.__fixedDt !== undefined) {
    dt = window.__fixedDt;
    fixedT += dt;
    t = fixedT;
    clock.getDelta();
  } else {
    dt = Math.min(0.05, clock.getDelta()) * (window.__timeScale || 1);
    t = clock.elapsedTime;
  }

  player.update(dt, L.colliders, regionAt);
  if (started) {
    agenda.update(dt);
    updateGate(dt);
    updateBarriers();
    updateInteract(dt);
    updateThreatAudio();
    updateAmbience(dt, t);
    sys.update(dt, player.handPos());
    wrist.record(player.pos);
    wrist.update(dt, player.handPos());
    mc.update(dt, player.pos);
    for (const w of waiters) w.update(dt, sys, player.pos, onCatch, audio);
    guests.update(dt, t);
    // 回眸客：喂入「被直视程度」——被正眼看时她会退进空气里
    if (gazer.group.visible) {
      const toG = gazer.group.position.clone().setY(1.3).sub(camera.position).normalize();
      gazer.lookDot = toG.dot(player.lookDir);
    }
    gazer.update(dt, player.pos, t);
    bride.update(dt, player.pos);
    crt.update(dt, player.pos);
    atmo.update(dt, agenda.lightMult);
  }
  post.render(scene, camera, dt, t);
}
loop();
