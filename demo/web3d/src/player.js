// 玩家控制器：PointerLock + WASD（3.6 m/s），肩后第三人称，圆形碰撞体贴墙滑动。
// 实体永不推动玩家；玩家也穿不过实体（让行由实体承担，见 entity.js）。

import * as THREE from "three";
import {
  WALLS, FURN, TABLES, PLAYER_SPEED, PLAYER_R, ENTITY_R, PLAYER_START, EYE_H,
} from "./constants.js";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

function circleHitsRect(px, pz, r, rect) {
  const cx = clamp(px, rect.x, rect.x + rect.w);
  const cz = clamp(pz, rect.y, rect.y + rect.h);
  return Math.hypot(px - cx, pz - cz) < r;
}

export function canStand(px, pz, r, entity) {
  for (const w of WALLS) if (circleHitsRect(px, pz, r, w)) return false;
  for (const f of FURN) if (circleHitsRect(px, pz, r, f)) return false;
  for (const t of TABLES) if (Math.hypot(px - t.x, pz - t.y) < r + t.r) return false;
  if (entity && Math.hypot(px - entity.x, pz - entity.z) < r + ENTITY_R) return false;
  return true;
}

export function createPlayer(camera, canvas) {
  const state = {
    x: PLAYER_START.x,
    z: PLAYER_START.y,
    yaw: Math.PI / 2, // 朝南（面向后场）
    pitch: -0.05,
    keys: new Set(),
    locked: false,
    moving: false,
  };

  // 占位体：素色胶囊 + 手中录像带
  const mesh = new THREE.Group();
  const capsule = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.26, 1.06, 4, 10),
    new THREE.MeshLambertMaterial({ color: 0x4a6478 }),
  );
  capsule.position.y = 0.79;
  mesh.add(capsule);
  const tape = new THREE.Mesh(
    new THREE.BoxGeometry(0.19, 0.03, 0.11),
    new THREE.MeshLambertMaterial({ color: 0x191713 }),
  );
  tape.position.set(0.28, 1.0, 0.18);
  mesh.add(tape);

  canvas.addEventListener("click", () => {
    if (!state.locked) canvas.requestPointerLock();
  });
  document.addEventListener("pointerlockchange", () => {
    state.locked = document.pointerLockElement === canvas;
    document.body.classList.toggle("locked", state.locked);
  });
  document.addEventListener("mousemove", (ev) => {
    if (!state.locked) return;
    state.yaw += ev.movementX * 0.0024;
    state.pitch = clamp(state.pitch - ev.movementY * 0.0022, -0.62, 0.5);
  });
  window.addEventListener("keydown", (ev) => state.keys.add(ev.code));
  window.addEventListener("keyup", (ev) => state.keys.delete(ev.code));
  window.addEventListener("blur", () => state.keys.clear());

  function update(dt, entity) {
    let fx = 0;
    let fz = 0;
    const k = state.keys;
    if (k.has("KeyW") || k.has("ArrowUp")) fx += 1;
    if (k.has("KeyS") || k.has("ArrowDown")) fx -= 1;
    if (k.has("KeyA") || k.has("ArrowLeft")) fz -= 1;
    if (k.has("KeyD") || k.has("ArrowRight")) fz += 1;
    state.moving = !!(fx || fz);
    if (state.moving) {
      const n = Math.hypot(fx, fz);
      const c = Math.cos(state.yaw);
      const s = Math.sin(state.yaw);
      // 前向 (c, s)，右向 (-s, c)
      const dx = ((c * fx - s * fz) / n) * PLAYER_SPEED * dt;
      const dz = ((s * fx + c * fz) / n) * PLAYER_SPEED * dt;
      // 分轴移动贴墙滑动
      if (canStand(state.x + dx, state.z, PLAYER_R, entity)) state.x += dx;
      if (canStand(state.x, state.z + dz, PLAYER_R, entity)) state.z += dz;
    }
    syncCamera();
    mesh.position.set(state.x, 0, state.z);
    mesh.rotation.y = -state.yaw + Math.PI / 2;
  }

  function syncCamera() {
    const c = Math.cos(state.yaw);
    const s = Math.sin(state.yaw);
    const cp = Math.cos(state.pitch);
    const f = new THREE.Vector3(c * cp, Math.sin(state.pitch), s * cp);
    const pivot = new THREE.Vector3(state.x, EYE_H, state.z);
    const right = new THREE.Vector3(-s, 0, c);
    const desired = pivot.clone().addScaledVector(f, -2.4).addScaledVector(right, 0.38);
    desired.y = Math.max(0.35, desired.y + 0.18);
    // 沿视线取样防穿墙：从 pivot 往外走，撞体即收
    let t = 1;
    const steps = 24;
    for (let i = 1; i <= steps; i++) {
      const q = pivot.clone().lerp(desired, i / steps);
      if (!canStand(q.x, q.z, 0.18, null) || q.y > 2.62) {
        t = (i - 1) / steps;
        break;
      }
    }
    camera.position.copy(pivot.clone().lerp(desired, Math.max(0.12, t)));
    camera.lookAt(pivot.clone().addScaledVector(f, 1.6));
  }

  function reset() {
    state.x = PLAYER_START.x;
    state.z = PLAYER_START.y;
    state.yaw = Math.PI / 2;
    state.pitch = -0.05;
    syncCamera();
    mesh.position.set(state.x, 0, state.z);
  }

  return { state, mesh, tape, update, reset, syncCamera };
}
