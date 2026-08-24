"use strict";
/*
 * 第一人称控制器 —— 有重量的步态：
 * 加速度包络（不瞬起瞬停）、里程驱动的头部起伏、落步事件、
 * 站定后的呼吸摆动、进出低处时的身体下降。
 * 数值合同：最大速度 3.6 m/s（对齐 UE 360UU/s），由 sim 裁决碰撞。
 */
import * as THREE from "three";
import { EYE_HEIGHT, floorHeightAt } from "./contract.js";

export function createPlayer(camera, dom) {
  const state = {
    yaw: Math.PI,          // 初始面向南（后场方向的门在南侧）
    pitch: 0,
    move: { f: 0, s: 0 },  // 平滑后的前/侧输入
    bobPhase: 0,
    bobAmp: 0,
    stillT: 0,
    locked: false,
    enabled: true,
    onStep: null,          // (strength, low) => void
  };
  const keys = {};

  // ---- 指针锁定 ----
  const requestLock = () => { if (!state.locked) dom.requestPointerLock?.(); };
  document.addEventListener("pointerlockchange", () => {
    state.locked = document.pointerLockElement === dom;
  });
  dom.addEventListener("mousemove", (e) => {
    if (!state.locked || !state.enabled) return;
    state.yaw -= e.movementX * 0.0021;
    state.pitch -= e.movementY * 0.0019;
    state.pitch = Math.max(-1.35, Math.min(1.35, state.pitch));
  });

  window.addEventListener("keydown", (e) => { keys[e.code] = true; });
  window.addEventListener("keyup", (e) => { keys[e.code] = false; });

  // ---- 手持录像带（任务实体感）----
  const hand = new THREE.Group();
  camera.add(hand);
  let handMeshes = null;
  function buildHand(M) {
    // 右手自然下垂持带：只在画面右下角露出一角（第一人称的身体在场感）
    // 袖口离镜头近，同款工装布在近距+灯下会亮成蓝块——单独压暗
    const sleeveMat = M.jacket.clone();
    sleeveMat.color.setScalar(0.5);
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.2, 0.09), sleeveMat);
    sleeve.position.set(0.27, -0.34, -0.38);
    sleeve.rotation.set(-0.5, 0.15, -0.15);
    const palm = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.09, 0.055), M.skin);
    palm.position.set(0.285, -0.43, -0.42);
    palm.rotation.set(-0.4, 0.1, -0.1);
    const tape = new THREE.Mesh(new THREE.BoxGeometry(0.104, 0.188, 0.025), M.tapeLabel);
    tape.position.set(0.29, -0.5, -0.45);
    tape.rotation.set(-0.35, 0.3, -0.12);
    hand.add(sleeve, palm, tape);
    handMeshes = { sleeve, palm, tape };
  }
  function hideTape() {
    if (handMeshes) { hand.visible = false; }
  }

  // ---- 每帧 ----
  function readInput() {
    let f = 0, s = 0;
    if (keys["KeyW"] || keys["ArrowUp"]) f += 1;
    if (keys["KeyS"] || keys["ArrowDown"]) f -= 1;
    if (keys["KeyA"] || keys["ArrowLeft"]) s -= 1;
    if (keys["KeyD"] || keys["ArrowRight"]) s += 1;
    return { f, s };
  }

  function update(dt, simPlayer, jack) {
    const raw = state.enabled && !jack ? readInput() : { f: 0, s: 0 };
    // 加速度包络：起步 ~0.25s，停步 ~0.18s
    const ka = 1 - Math.exp(-dt * 7.5);
    const kd = 1 - Math.exp(-dt * 11);
    state.move.f += ((raw.f) - state.move.f) * (Math.abs(raw.f) > 0 ? ka : kd);
    state.move.s += ((raw.s) - state.move.s) * (Math.abs(raw.s) > 0 ? ka : kd);
    if (raw.f === 0 && Math.abs(state.move.f) < 0.01) state.move.f = 0;
    if (raw.s === 0 && Math.abs(state.move.s) < 0.01) state.move.s = 0;

    // 世界方向（yaw：0 朝 -z? 用 sin/cos 组合：前 = (-sin(yaw), -cos(yaw))？
    // 约定：yaw=π 时面向 +z（南）。forward = (sin(yaw), cos(yaw)) * -1? 直接推导：
    // camera.rotation.y = yaw，three 相机 -z 朝前 → 前向 = (-sin(yaw), -cos(yaw))
    const fx = -Math.sin(state.yaw), fz = -Math.cos(state.yaw);
    const sx = -fz, sz = fx;
    const mx = fx * state.move.f + sx * state.move.s;
    const mz = fz * state.move.f + sz * state.move.s;

    // 步态：里程驱动
    const speed = simPlayer.speed;
    const speedN = speed / 3.6;
    if (speed > 0.2) {
      state.stillT = 0;
      const stride = 1.9;   // 步频系数
      const prev = state.bobPhase;
      state.bobPhase += speed * dt * stride;
      state.bobAmp += (1 - state.bobAmp) * Math.min(1, dt * 6);
      // 落步：相位过半周期
      if (Math.floor(prev / Math.PI) !== Math.floor(state.bobPhase / Math.PI)) {
        state.onStep?.(speedN, floorHeightAt(simPlayer.x, simPlayer.z) < -0.15,
          Math.floor(state.bobPhase / Math.PI) % 2 === 0);
      }
    } else {
      state.stillT += dt;
      state.bobAmp *= Math.max(0, 1 - dt * 5);
    }

    // 相机位姿
    const ground = floorHeightAt(simPlayer.x, simPlayer.z);
    const bobY = Math.sin(state.bobPhase * 2) * 0.028 * state.bobAmp * (0.4 + speedN * 0.6);
    const bobX = Math.sin(state.bobPhase) * 0.016 * state.bobAmp;
    const breathY = Math.sin(performance.now() * 0.00115) * (0.004 + Math.min(state.stillT, 4) * 0.0016);
    const breathP = Math.sin(performance.now() * 0.00115 + 0.8) * 0.0022;

    camera.position.set(
      simPlayer.x + sx * bobX,
      ground + EYE_HEIGHT + bobY + breathY,
      simPlayer.z + sz * bobX
    );
    camera.rotation.order = "YXZ";
    camera.rotation.y = state.yaw;
    camera.rotation.x = state.pitch + breathP + bobY * 0.15;
    camera.rotation.z = Math.sin(state.bobPhase) * 0.006 * state.bobAmp;

    // 手持带的摆动
    if (hand.visible) {
      hand.position.set(bobX * 0.5, -bobY * 0.6, 0);
      hand.rotation.z = Math.sin(state.bobPhase) * 0.02 * state.bobAmp;
      hand.rotation.x = -bobY * 0.8;
    }

    return { mx, mz };
  }

  return { state, keys, update, requestLock, buildHand, hideTape, hand };
}
