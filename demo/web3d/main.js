// 返潮 H00-R0《婚宴后场》 Three.js 3D 灰盒——装配与主循环。
// 回路：持录像带 → C 卡座归档 → 返回 A。无结算、无解释；玩家可见文本只有操作提示。
// 行为基线沿用 demo/web/（2D 灰盒）；实体形象与恐怖表现按 docs/game-design/07（M05 双背）。

import * as THREE from "three";
import {
  WALLS, ROOMS, LOW_ZONE, ARCHIVE_POINT, ARCHIVE_RADIUS, ENTITY_HOLD, BEATS,
} from "./src/constants.js";
import { buildWorld, updateSteam } from "./src/world.js";
import { createFigure } from "./src/figure.js";
import { createPlayer } from "./src/player.js";
import { createEntityState, stepEntity, dist2 } from "./src/entity.js";
import { createAudio } from "./src/audio.js";
import { applySceneParams } from "./src/shots.js";

// ---------- 基础 ----------
const canvas = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 90);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const scene = new THREE.Scene();
const world = buildWorld(scene);
const player = createPlayer(camera, canvas);
scene.add(player.mesh);
const entity = createEntityState();
const figure = createFigure();
scene.add(figure.group);
const audio = createAudio();

const state = {
  clockStarted: false,
  t: 0,
  elapsed: 0,
  archived: false,
  archivedAt: -99,
  completed: false,
  inLow: false,
  logs: [],
};

// ---------- HUD（纯 DOM；玩家可见文本只有操作提示） ----------
const el = {
  hint: document.getElementById("hint"),
  chip: document.getElementById("chip"),
  overlay: document.getElementById("overlay"),
  keys: document.getElementById("keys"),
};
function setHint(t) { el.hint.textContent = t || ""; }
function setChip(t) { el.chip.textContent = t; }
function log(msg) {
  state.logs.push(msg);
  if (state.logs.length > 300) state.logs.shift();
  console.log(`W3D | ${msg}`);
}
// 自动化验证钩子（无 UI）
window.__W3D = { state, entity, player: player.state, logs: state.logs };

// ---------- 工具 ----------
const inRect = (x, z, r) => x >= r.x && x <= r.x + r.w && z >= r.y && z <= r.y + r.h;
function roomOf(x, z) {
  for (const r of ROOMS) if (inRect(x, z, r)) return r.id;
  return "?";
}
function segRectHit(x1, z1, x2, z2, r) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  let tmin = 0;
  let tmax = 1;
  for (const [p, d, lo, hi] of [[x1, dx, r.x, r.x + r.w], [z1, dz, r.y, r.y + r.h]]) {
    if (Math.abs(d) < 1e-9) {
      if (p < lo || p > hi) return false;
      continue;
    }
    let t1 = (lo - p) / d;
    let t2 = (hi - p) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return false;
  }
  return true;
}
const losClear = () => !WALLS.some(w => segRectHit(player.state.x, player.state.z, entity.x, entity.z, w));
function entityPan() {
  const s = Math.sin(player.state.yaw);
  const c = Math.cos(player.state.yaw);
  return ((entity.x - player.state.x) * -s + (entity.z - player.state.z) * c) / 10;
}

// ---------- 交互 ----------
function tryArchive() {
  const d = dist2(player.state.x, player.state.z, ARCHIVE_POINT.x, ARCHIVE_POINT.y);
  log(`Archive interaction distance: ${(d).toFixed(2)}m.`);
  if (d > ARCHIVE_RADIUS) {
    setHint("走到 C 房卡座 2.4 米内再按 E");
    return;
  }
  if (state.archived) {
    setHint("录像带已归档。沿任一路线返回 A 宴会厅");
    return;
  }
  state.archived = true;
  state.archivedAt = state.t;
  audio.playArchive();
  player.tape.visible = false;
  setChip("已归档");
  el.chip.classList.add("done");
  log("Archive state changed: COMPLETE.");
  log("CRT: ordinary wedding footage for a few seconds. No explanation.");
  setHint("归档完成。屏幕上是普通婚宴画面。选择返程路线");
}

function resetDemo(reason) {
  player.reset();
  Object.assign(entity, createEntityState());
  state.clockStarted = false;
  state.t = 0;
  state.archived = false;
  state.archivedAt = -99;
  state.completed = false;
  player.tape.visible = true;
  setChip("手里：婚宴录像带");
  el.chip.classList.remove("done");
  world.crtBlocks.visible = false;
  world.crtScreen.material.color.setHex(0x191916);
  log(`Reset: player, task and route restored. RESET_REASON=${reason}.`);
  setHint("已复位。WASD 移动，把录像带送到 C 房卡座（按 E 归档）");
}

window.addEventListener("keydown", (ev) => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(ev.code)) ev.preventDefault();
  if (audio.init()) audio.resume();
  if (ev.code === "KeyE") tryArchive();
  if (ev.code === "KeyR") resetDemo("MANUAL");
  if (ev.code === "KeyV") {
    world.debugGroup.visible = !world.debugGroup.visible;
    log(`Debug layer ${world.debugGroup.visible ? "ON" : "OFF"} (route, low zone, cams).`);
  }
  if (ev.code === "KeyM") {
    audio.setMuted(!audio.muted);
    log(`Audio ${audio.muted ? "muted" : "unmuted"}.`);
  }
});
window.addEventListener("pointerdown", () => {
  if (audio.init()) audio.resume();
  el.overlay.classList.add("hidden");
});

// ---------- 声音节奏（工作声定时器） ----------
let wipeTimer = 0;

// ---------- 更新 ----------
function update(dt) {
  if (player.state.moving && !state.clockStarted) {
    state.clockStarted = true;
    entity.pauseRemaining = ENTITY_HOLD;
    log("Beat clock started.");
  }
  player.update(dt, entity);
  if (state.clockStarted) state.t += dt;

  // 低处声学状态（不变色、不画线）
  const low = inRect(player.state.x, player.state.z, LOW_ZONE);
  if (low !== state.inLow) {
    state.inLow = low;
    log(low
      ? "Acoustic state: LOW (music thicker and farther; no water, no filter)."
      : "Acoustic state: NORMAL.");
  }

  // 实体推进
  const visible = losClear();
  const d = Math.max(0.6, dist2(player.state.x, player.state.z, entity.x, entity.z));
  const events = stepEntity(entity, { x: player.state.x, z: player.state.z }, dt, state.clockStarted);
  for (const ev of events) {
    if (ev.type === "reached") log(`Worker reached route point ${ev.index}.`);
    if (ev.type === "work") {
      log(`Worker task: ${ev.act}.`);
      audio.playClink(d, entityPan(), !visible);
    }
    if (ev.type === "wait") log("Worker waiting: route occupied by player. No push, no chase, dead still.");
    if (ev.type === "resume") log("Worker resumed the old route.");
    if (ev.type === "step" && d < 26) audio.playStep(d, entityPan(), !visible);
  }
  if (entity.mode === "WORK" && state.clockStarted) {
    wipeTimer -= dt;
    if (wipeTimer <= 0 && d < 22) {
      wipeTimer = 0.62;
      audio.playWipe(d, entityPan(), !visible);
    }
  }

  // 声音先于画面：视线被墙挡住时不渲染实体
  figure.group.visible = visible;
  figure.update(entity, entity.mode);

  // CRT 回放窗口
  const playing = state.archived && state.t - state.archivedAt < 3;
  world.crtBlocks.visible = playing;
  world.crtScreen.material.color.setHex(playing ? 0x7d6a4e : 0x191916);

  // 回路完成：归档后回到 A（只落一行日志，无结算）
  if (state.archived && !state.completed && roomOf(player.state.x, player.state.z) === "A") {
    state.completed = true;
    log("Loop complete: player returned to A. Worker keeps the old route. Nothing is explained.");
    setHint("回路完成。他还在按原路线干活。按 R 复位重看");
  }

  // 节拍提示
  if (state.clockStarted && !state.completed) {
    const b = BEATS.find(x => state.t >= x.t0 && state.t < x.t1);
    if (b) setHint(b.hint);
    else if (state.t >= 90) setHint("自由复盘。他继续他的班。按 R 复位");
  }

  audio.tickMusic(player.state, low, roomOf(player.state.x, player.state.z));
  updateSteam(world.steam, state.elapsed, camera);
}

// ---------- 截图模式与主循环 ----------
setChip("手里：婚宴录像带");
setHint("点击画面锁定鼠标。WASD 移动，把录像带送到 C 房卡座（按 E 归档）");
log("Scene built: A/B/C/D/E, W00 hall, archive deck, worker route D-B-C-E-D.");
log("Contract: no chase, no jumpscare, no push-back, no visible water, no blue filter, zero lore text.");

const shot = applySceneParams({
  playerState: player.state,
  entity,
  camera,
  syncCamera: player.syncCamera,
});
if (shot.archived) {
  state.archived = true;
  state.archivedAt = 0;
  state.t = shot.crt ? 1.5 : 10;
  player.tape.visible = false;
  setChip("已归档");
  el.chip.classList.add("done");
  setHint(shot.crt ? "归档完成。屏幕上是普通婚宴画面。选择返程路线" : "已归档。沿任一路线返回 A 宴会厅");
}
if (!shot.hud) document.body.classList.add("nohud");
if (shot.debug) world.debugGroup.visible = true;

if (shot.frozen) {
  el.overlay.classList.add("hidden");
  // 确定性冻结帧：摆好姿势、渲染一次
  const poseMode = entity.mode === "WAIT" ? "MOVE" : entity.mode; // WAIT 也要有一个被冻住的步中姿势
  figure.update(entity, poseMode);
  figure.group.visible = true;
  const playing = state.archived && shot.crt;
  world.crtBlocks.visible = playing;
  world.crtScreen.material.color.setHex(playing ? 0x7d6a4e : 0x191916);
  if (!shot.fixedCam) player.syncCamera();
  player.mesh.position.set(player.state.x, 0, player.state.z);
  player.mesh.rotation.y = -player.state.yaw + Math.PI / 2;
  updateSteam(world.steam, 0.6, camera);
  // 持续重绘同一冻结帧，保证 headless 截屏时 compositor 一定拿到画面
  renderer.setAnimationLoop(() => renderer.render(scene, camera));
  log("Frozen deterministic frame rendered (screenshot mode).");
} else {
  let last = performance.now();
  renderer.setAnimationLoop((now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    state.elapsed += dt;
    update(dt);
    renderer.render(scene, camera);
  });
}
