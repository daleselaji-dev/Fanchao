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
  const mist = new THREE.Mesh(new THREE.PlaneGeometry(30, 8), new THREE.MeshBasicMaterial({ color: 0xb8c4be, transparent: true, opacity: 0.18, depthWrite: false }));
  mist.position.set(0, 3, 16); mist.rotation.y = Math.PI;
  scene.add(mist);
  for (let i = 0; i < 4; i++) {
    const hl = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.6), L.dyn.headlights.mat);
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
    else if (hookB === sys.hook('hWinch')) { gate.targetY = 4.9; speed = 0.5; }
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
      } else if (player.eDown) {
        cutHold += dt;
        ui.prompt(`<b>剪断腕绳</b> …… ${Math.min(100, (cutHold / 2.2 * 100)).toFixed(0)}%`);
        waiters.forEach(w => { if (w.visible) w.startChase(); });
        if (Math.floor(cutHold * 3) !== Math.floor((cutHold - dt) * 3)) audio.heartbeat();
        if (cutHold >= 2.2) { agenda._cut(); cutHold = 0; }
        return;
      } else {
        cutHold = 0;
        ui.prompt('<b>长按 E</b> —— 在你的席位前，剪断腕绳');
      }
    } else {
      cutHold = 0;
    }
  }
  // 点名寄挂
  if (agenda.call.active) {
    const h = sys.nearestHook(player.pos, 2.4);
    sys.hooks.forEach(hh => hh.setHighlight(false));
    if (h) {
      h.setHighlight(true);
      ui.prompt('<b>E</b> —— 把腕绳<b>寄挂</b>到这只礼钩上');
      if (player.ePressedThisFrame) {
        agenda.resolveCall();
        // 钩上留个红结
        const knot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0x8e0c12, roughness: 0.8 }));
        knot.position.copy(h.pos);
        scene.add(knot);
        ui.prompt('');
      }
      return;
    }
  }
  // 摘/挂
  const camPos = camera.position;
  const target = sys.nearestTarget(camPos, player.lookDir, 2.8);
  sys.hooks.forEach(h => h.setHighlight(false));
  if (target) {
    if (target.type === 'cordEnd') {
      target.cord.mat.emissiveIntensity = 2.8;
      const tagTip = { doorE: '（拦门绳）', doorC: '（拦门绳）', gate: '（闸门吊绳）', seatlock: '（捆席绳）' }[target.cord.tag] || '';
      ui.prompt(`<b>E</b> —— <b>摘</b>下红绳${tagTip}`);
      if (player.ePressedThisFrame) sys.grab(target.cord, target.end);
    } else if (target.type === 'hook') {
      target.hook.setHighlight(true);
      const tip = { hWinch: '（绞盘 · 安静）', hSnap: '（卡扣 · 巨响）', hJam: '（卡死位）' }[target.hook.id] || '';
      ui.prompt(`<b>E</b> —— 把绳<b>挂</b>上礼钩${tip}`);
      if (player.ePressedThisFrame) sys.hang(target.hook);
    }
  } else if (sys.held) {
    ui.prompt('拿着红绳 —— 走到<b>发亮的礼钩</b>前挂上（E）');
  } else if (!agenda.call.active && !(agenda.beat >= 5 && player.pos.distanceTo(seatPos) < 2.0)) {
    ui.prompt('');
  }
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
let creakTimer = 5, glassTimer = 7;
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
  if (rn === '员工连廊') {
    creakTimer -= dt;
    if (creakTimer <= 0) { creakTimer = 4 + Math.random() * 6; audio.creakLow(); }
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

// ---------- 标题 / 启动 ----------
const titleEl = document.getElementById('title');
const startBtn = document.getElementById('startBtn');
const resumeEl = document.getElementById('resume');
let started = false;
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
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(0.05, clock.getDelta()) * (window.__timeScale || 1);
  const t = clock.elapsedTime;

  player.update(dt, L.colliders, regionAt);
  if (started) {
    agenda.update(dt);
    updateGate(dt);
    updateBarriers();
    updateInteract(dt);
    updateAmbience(dt, t);
    sys.update(dt, player.handPos());
    wrist.record(player.pos);
    wrist.update(dt, player.handPos());
    mc.update(dt, player.pos);
    for (const w of waiters) w.update(dt, sys, player.pos, onCatch, audio);
    guests.update(dt, t);
    gazer.update(dt, player.pos, t);
    bride.update(dt);
    crt.update(dt, player.pos);
  }
  post.render(scene, camera, dt, t);
}
loop();
