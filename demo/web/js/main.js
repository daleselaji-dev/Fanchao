"use strict";
/*
 * 返潮 H00-R0《婚宴后场：返席》—— 最终 Demo 装配
 * 行为裁决在 sim（与 Node 测试同一模块），渲染/音频只订阅。
 * 操作：鼠标转向 · WASD 移动 · E 归档 · 按住 Q 借视 · R 复位 · V 设计标注 · M 静音
 */
import * as THREE from "three";
import {
  ROUTE, LOW_ZONE, CAMS, ARCHIVE_POINT, ARCHIVE_RADIUS, BEATS, EYE_HEIGHT,
  dist2d, roomOf, isLow, losClear, floorHeightAt,
} from "./contract.js";
import { createSim, simStep, resetSim, drainEvents } from "./sim.js";
import { buildMaterials } from "./materials.js";
import { buildWorld } from "./world.js";
import { createEntity } from "./entity.js";
import { createPlayer } from "./player.js";
import { createAudio } from "./audio.js";
import { createPost } from "./post.js";

const qs = new URLSearchParams(location.search);
const TEST_MODE = qs.has("test");

// ---------- DOM ----------
const canvas = document.getElementById("view");
const overlay = document.getElementById("overlay");
const promptEl = document.getElementById("prompt");
const captionEl = document.getElementById("caption");
const chipEl = document.getElementById("chip");

let captionTimer = 0;
function caption(text, dur = 3.4) {
  captionEl.textContent = text;
  captionEl.classList.add("show");
  captionTimer = dur;
}

// ---------- three ----------
const renderer = new THREE.WebGLRenderer({
  canvas, antialias: false, powerPreference: "high-performance",
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NoToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(68, 16 / 9, 0.06, 70);
scene.add(camera);

const { M, T } = buildMaterials(renderer);
const { colliders, dynamics } = buildWorld(scene, M, T);
const entity = createEntity(scene, M);
const player = createPlayer(camera, canvas);
player.buildHand(M);
const audio = createAudio();
const post = createPost(renderer);

const sim = createSim();

// ---------- 标注层（V，默认关。设计工具，不属于正式画面）----------
const anno = new THREE.Group();
anno.visible = false;
scene.add(anno);
{
  const pts = [];
  for (let i = 0; i <= ROUTE.length; i++) {
    const w = ROUTE[i % ROUTE.length];
    pts.push(new THREE.Vector3(w.x, floorHeightAt(w.x, w.z) + 0.05, w.z));
  }
  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: 0x9ab07f })
  );
  anno.add(line);
  for (const w of ROUTE) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6),
      new THREE.MeshBasicMaterial({ color: w.pause ? 0xc9b57a : 0x9ab07f }));
    m.position.set(w.x, floorHeightAt(w.x, w.z) + 0.05, w.z);
    anno.add(m);
  }
  const lz = new THREE.Mesh(
    new THREE.BoxGeometry(LOW_ZONE.w, 0.02, LOW_ZONE.d),
    new THREE.MeshBasicMaterial({ color: 0xd8b98a, wireframe: true })
  );
  lz.position.set(LOW_ZONE.x + LOW_ZONE.w / 2, 0.02, LOW_ZONE.z + LOW_ZONE.d / 2);
  anno.add(lz);
  for (const c of CAMS) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 6),
      new THREE.MeshBasicMaterial({ color: 0x7d968e }));
    cone.position.set(c.x, 2.2, c.z);
    cone.rotation.z = Math.PI / 2;
    cone.rotation.y = -c.a;
    anno.add(cone);
  }
}

// ---------- 输入 ----------
let wantArchive = false;
let jackHeld = false;
let muted = false;
let started = false;

window.addEventListener("keydown", (e) => {
  if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.code)) e.preventDefault();
  if (!started) return;
  if (e.code === "KeyE") wantArchive = true;
  if (e.code === "KeyQ") jackHeld = true;
  if (e.code === "KeyR") {
    resetSim(sim, "MANUAL");
    caption("复位到 00 秒");
    chipEl.textContent = "TAPE IN HAND";
    chipEl.className = "hand";
    player.hand.visible = true;
    crtMode = "static";
  }
  if (e.code === "KeyV") {
    anno.visible = !anno.visible;
    caption(anno.visible ? "设计标注层：开（旧路线 / 低处 / 机位）" : "设计标注层：关", 2);
  }
  if (e.code === "KeyM") { muted = !muted; caption(muted ? "静音" : "声音开", 1.5); }
});
window.addEventListener("keyup", (e) => { if (e.code === "KeyQ") jackHeld = false; });

overlay.addEventListener("click", () => {
  if (started) return;
  started = true;
  overlay.classList.add("hidden");
  audio.start();
  audio.resume();
  if (!TEST_MODE) player.requestLock();
});
canvas.addEventListener("click", () => {
  if (started && !TEST_MODE) { player.requestLock(); audio.resume(); }
});

// ---------- CRT 状态 ----------
let crtMode = "static";
let crtT = 0, crtRedraw = 0;

// ---------- 节拍字幕（只给前两拍与归档后的一句，极简）----------
let beatShown = new Set();

// ---------- 主循环 ----------
let last = performance.now();
let flickerLevel = 0, dyingLevel = 0;

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  tick(dt);
  if (!TEST_MODE) requestAnimationFrame(frame);
}

function tick(dt, doRender = true) {
  // ---- 玩家输入 → sim ----
  const mv = player.update(dt, sim.player, jackHeld);
  simStep(sim, dt, {
    moveX: started ? mv.mx : 0,
    moveZ: started ? mv.mz : 0,
    wantArchive,
    extraColliders: colliders,
  });
  wantArchive = false;

  // ---- 事件 ----
  const pPos = { x: sim.player.x, z: sim.player.z };
  const ePos = { x: sim.entity.x, z: sim.entity.z };
  for (const ev of drainEvents(sim)) {
    audio.onEvent(ev, { playerPos: pPos, entityPos: ePos });
    switch (ev.type) {
      case "archive-complete":
        chipEl.textContent = "ARCHIVED";
        chipEl.className = "archived";
        player.hideTape();
        crtMode = "footage"; crtT = 0;
        caption("REC/PAUSE。屏幕上是普通的婚宴画面。", 4);
        break;
      case "archive-too-far":
        caption("要走到卡座跟前", 2);
        break;
      case "loop-complete":
        caption("回到宴会厅了。它还在里面上班。", 5);
        break;
      case "acoustic-low":
        // 不出 UI 提示——声音自己说话
        break;
    }
    console.log(`H00 | ${ev.type}${ev.act ? " " + ev.act : ""}${ev.index !== undefined ? " #" + ev.index : ""} t=${sim.t.toFixed(1)}`);
  }

  // ---- 实体 ----
  entity.update(sim.entity, sim.evidence.active, dt);

  // ---- CRT ----
  crtT += dt;
  crtRedraw -= dt;
  if (crtMode === "footage" && crtT > 6.5) crtMode = "static";
  if (crtRedraw <= 0 && dynamics.crt) {
    crtRedraw = 1 / 12;
    T.crtCanvas.draw(crtMode, crtT);
    T.crtTex.needsUpdate = true;
    if (dynamics.lights.crtGlow) {
      const flick = crtMode === "footage" ? 1.1 + Math.random() * 0.45 : 0.55 + Math.random() * 0.15;
      dynamics.lights.crtGlow.intensity = flick;
      dynamics.lights.crtGlow.color.setHex(crtMode === "footage" ? 0xc8b06a : 0x9fb4a2);
    }
  }

  // ---- 灯管闪烁 ----
  flickerLevel = 0; dyingLevel = 0;
  for (const f of dynamics.flickers) {
    f.t += dt;
    if (f.mode === "flicker") {
      // 半随机打火：大部分时间亮，偶发抖动
      const spike = Math.sin(f.t * 31) * Math.sin(f.t * 7.7) > 0.86 ? Math.random() : 0;
      const on = 1 - spike * 0.9;
      f.light.intensity = f.base * on;
      f.mesh.material.color.setScalar(0.35 + on * 0.65);
      flickerLevel = Math.max(flickerLevel, spike);
    } else {
      // 垂危：低位喘息
      const b = 0.22 + Math.max(0, Math.sin(f.t * 0.7)) * 0.3 + (Math.random() < 0.008 ? 0.35 : 0);
      f.light.intensity = f.base * b * 1.1;
      f.mesh.material.color.setScalar(0.2 + b * 0.45);
      dyingLevel = Math.max(dyingLevel, b);
    }
  }

  // ---- A 厅人物微动 ----
  for (const g of dynamics.guests) {
    const t = performance.now() * 0.001 + g.phase;
    g.g.rotation.y += Math.sin(t * 0.4) * 0.0006;
    g.g.position.y = (g.g.position.y || 0) * 0 + (g.bend ? Math.max(0, Math.sin(t * 0.5)) * -0.06 : Math.sin(t * 1.3) * g.amp * 0.3);
  }

  // ---- HUD ----
  const nearDeck = dist2d(sim.player, ARCHIVE_POINT) <= ARCHIVE_RADIUS;
  if (nearDeck && !sim.archived) {
    promptEl.textContent = "E — 插带 · REC/PAUSE";
    promptEl.classList.add("show");
  } else {
    promptEl.classList.remove("show");
  }
  if (captionTimer > 0) {
    captionTimer -= dt;
    if (captionTimer <= 0) captionEl.classList.remove("show");
  }
  // 前两拍的一次性字幕
  if (sim.clockStarted && !sim.archived) {
    for (let i = 0; i < 2; i++) {
      const b = BEATS[i];
      if (sim.t >= b.t0 && sim.t < b.t1 && !beatShown.has(i) && b.hint) {
        beatShown.add(i);
        caption(b.hint, 4);
      }
    }
  }

  // ---- 音频 ----
  const playerY = floorHeightAt(sim.player.x, sim.player.z) + EYE_HEIGHT;
  audio.update(dt, {
    playerPos: pPos,
    playerY,
    yaw: player.state.yaw,
    low: sim.lowNow,
    room: roomOf(sim.player),
    entityPos: ePos,
    crtMode,
    jack: jackHeld,
    flickerLevel,
    dyingLevel,
    stillT: player.state.stillT,
    evidenceActive: sim.evidence.active,
    muted,
  });
  audio.playerStepHook = null;

  // ---- 渲染（借视 = 从返席人头部看世界）----
  if (doRender) renderOnce(dt);
}

function renderOnce(dt) {
  const cam = jackHeld ? entity.jackCam : camera;
  if (jackHeld) {
    entity.jackCam.aspect = camera.aspect;
    entity.jackCam.updateProjectionMatrix();
  }
  post.render(scene, cam, dt, jackHeld);
}

player.state.onStep = (strength, low, side) => audio.playerStep(strength, low, side);

// ---------- 尺寸 ----------
function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  post.setSize(w, h);
}
window.addEventListener("resize", resize);
resize();

// 阴影烘焙：首帧后冻结（静态场景 + 动态实体用贴片影）
renderer.shadowMap.autoUpdate = true;
let shadowBaked = false;
function bakeShadows() {
  if (shadowBaked) return;
  shadowBaked = true;
  renderer.shadowMap.autoUpdate = false;
}

// ---------- 测试钩子 ----------
window.__H00 = {
  sim,
  contract: { ROUTE, ARCHIVE_POINT, ARCHIVE_RADIUS },
  audioRegistry: () => audio.registry,
  setYaw: (y, p = 0) => { player.state.yaw = y; player.state.pitch = p; },
  getYaw: () => player.state.yaw,
  keys: player.keys,
  pressArchive: () => { wantArchive = true; },
  holdJack: (v) => { jackHeld = v; },
  reset: () => { resetSim(sim, "TEST"); crtMode = "static"; },
  tick: (dt) => tick(dt),
  step: (dt) => tick(dt, false),
  render: () => renderOnce(1 / 60),
  pressKey: (code, down) => { player.keys[code] = down; },
  start: () => { if (!started) { started = true; overlay.classList.add("hidden"); audio.start(); audio.resume(); } },
  toggleAnno: () => { anno.visible = !anno.visible; },
  rendererInfo: () => renderer.info.render,
  crtMode: () => crtMode,
  raycastCenter: (nx = 0, ny = 0) => {
    const rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2(nx, ny), camera);
    const hits = rc.intersectObjects(scene.children, true).slice(0, 3);
    return hits.map((h) => ({
      dist: +h.distance.toFixed(2),
      point: [+h.point.x.toFixed(2), +h.point.y.toFixed(2), +h.point.z.toFixed(2)],
      mat: h.object.material && h.object.material.uuid ? Object.keys(M).find((k) => M[k] === h.object.material) || h.object.material.type : "?",
    }));
  },
};

// ---------- 启动 ----------
console.log("H00 | 最终 Demo 装配完成。行为合同：不攻击、不冲刺、不跳脸、不推回；无可见水、无水声、无蓝滤镜。");
if (TEST_MODE) {
  // 测试模式：不跑 RAF，由 Playwright 手动 tick；先渲染两帧完成阴影烘焙
  tick(1 / 60); tick(1 / 60);
  bakeShadows();
} else {
  requestAnimationFrame((t0) => {
    last = t0;
    requestAnimationFrame(frame);
    setTimeout(bakeShadows, 300);
  });
}
