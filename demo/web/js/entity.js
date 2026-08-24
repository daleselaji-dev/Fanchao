"use strict";
/*
 * 返席人（M01 占位候选）——像还在上班的人。
 * 造型：旧蓝工装、疲惫肩线、手里的金属托盘；头常年低着。
 * 面部前侧是干燥石化的复眼壳，但平时被低头姿态与阴影藏住；
 * 只有证据窗口（每圈≤1次、≤1.6s、玩家在低处换来）里，
 * 它会在 E/B 交界抬头侧转——你看得出错误，认不全形态。
 * 合同：不追、不冲刺、不跳脸、不转头看玩家。
 */
import * as THREE from "three";
import { floorHeightAt } from "./contract.js";

export function createEntity(scene, M) {
  const root = new THREE.Group();

  // ---- 下身 ----
  const hips = new THREE.Group();
  hips.position.y = 0.96;
  root.add(hips);

  const mkLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(0.1 * side, 0, 0);
    const upper = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.46, 0.17), M.trousers);
    upper.position.y = -0.23;
    const knee = new THREE.Group();
    knee.position.y = -0.46;
    const lower = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.44, 0.15), M.trousers);
    lower.position.y = -0.22;
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.26), M.shoes);
    shoe.position.set(0, -0.44, 0.05);
    knee.add(lower, shoe);
    g.add(upper, knee);
    g.userData.knee = knee;
    return g;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  hips.add(legL, legR);

  // ---- 上身（微驼的肩线）----
  const torso = new THREE.Group();
  torso.position.y = 0.06;
  hips.add(torso);
  const jacket = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.56, 0.26), M.jacket);
  jacket.position.y = 0.32;
  // 肩线（略溜肩）
  const shoulderPad = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.24), M.jacket);
  shoulderPad.position.y = 0.58;
  shoulderPad.rotation.z = 0.0;
  // 后领 + 露出的一点后颈
  const nape = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.06, 0.1, 8), M.skin);
  nape.position.set(0, 0.66, -0.01);
  torso.add(jacket, shoulderPad, nape);

  // ---- 头（默认低着，前倾）----
  const headG = new THREE.Group();
  headG.position.set(0, 0.7, 0.02);
  torso.add(headG);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.093, 12, 10), M.skin);
  skull.scale.set(0.92, 1.06, 0.98);
  skull.position.y = 0.07;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.098, 12, 10), M.hair);
  hair.scale.set(0.95, 1.02, 0.95);
  hair.position.set(0, 0.085, -0.018);
  // 前侧复眼壳：覆盖面部的干燥半壳
  const shellMat = M.compound.clone();
  shellMat.emissiveMap = shellMat.map;   // 证据窗口里按复眼纹理发微光（干壳反光，不是灯泡）
  const shell = new THREE.Mesh(
    new THREE.SphereGeometry(0.088, 14, 12, -Math.PI / 2.6, Math.PI / 1.35, Math.PI * 0.18, Math.PI * 0.62),
    shellMat
  );
  shell.position.set(0, 0.062, 0.022);
  shell.scale.set(1.0, 1.12, 1.05);
  headG.add(skull, hair, shell);
  headG.rotation.x = 0.42;  // 低头

  // ---- 手臂 + 托盘（端在身前）----
  const mkArm = (side) => {
    const g = new THREE.Group();
    g.position.set(0.25 * side, 0.55, 0.02);
    const upper = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.34, 0.13), M.jacket);
    upper.position.y = -0.17;
    const elbow = new THREE.Group();
    elbow.position.y = -0.33;
    const fore = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.3, 0.1), M.jacket);
    fore.position.y = -0.14;
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.09), M.skin);
    hand.position.y = -0.32;
    elbow.add(fore, hand);
    g.add(upper, elbow);
    g.userData.elbow = elbow;
    // 端盘姿势
    g.rotation.x = -0.45;
    elbow.rotation.x = -1.15;
    g.rotation.z = -0.12 * side;
    return g;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  torso.add(armL, armR);
  const tray = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.03, 0.32), M.steel);
  tray.position.set(0, 0.30, 0.33);
  const trayDish = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.05, 10), M.porcelain);
  trayDish.position.set(0.08, 0.34, 0.3);
  const trayDish2 = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 10), M.porcelain);
  trayDish2.position.set(-0.1, 0.33, 0.36);
  torso.add(tray, trayDish, trayDish2);

  // ---- 影子贴片 ----
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.y = 0.02;
  root.add(blob);

  root.traverse(o => { if (o.isMesh && o !== blob) { o.castShadow = false; o.receiveShadow = true; } });
  scene.add(root);

  // 借视相机（挂在头部，比人眼略低——它不完全是人）
  const jackCam = new THREE.PerspectiveCamera(55, 16 / 9, 0.05, 60);
  jackCam.position.set(0, 0.06, 0.1);
  jackCam.rotation.y = Math.PI;   // three 相机 -z 朝前，转身对齐身体 +z
  headG.add(jackCam);

  // ---- 动画状态 ----
  let walkPhase = 0;
  let prevX = null, prevZ = null;
  let workT = 0;
  let waitT = 0;
  let evidenceBlend = 0;   // 0..1 抬头侧转
  let breathe = 0;

  function update(simE, evidenceActive, dt) {
    // 位置与朝向（yaw 平滑，避免瞬转）
    const gy = floorHeightAt(simE.x, simE.z);
    root.position.set(simE.x, gy, simE.z);
    let dy = simE.yaw - root.rotation.y;
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    root.rotation.y += dy * Math.min(1, dt * 7);

    // 里程驱动步态
    const dx = prevX === null ? 0 : simE.x - prevX;
    const dz = prevZ === null ? 0 : simE.z - prevZ;
    prevX = simE.x; prevZ = simE.z;
    const speed = Math.hypot(dx, dz) / Math.max(1e-4, dt);
    breathe += dt;

    if (simE.mode !== "WAIT") waitT = 0;
    if (simE.mode === "MOVE" && speed > 0.05) {
      walkPhase += Math.hypot(dx, dz) * 4.4;
      const s = Math.sin(walkPhase), c = Math.cos(walkPhase);
      legL.rotation.x = s * 0.55;
      legR.rotation.x = -s * 0.55;
      legL.userData.knee.rotation.x = Math.max(0, -c) * 0.7;
      legR.userData.knee.rotation.x = Math.max(0, c) * 0.7;
      hips.position.y = 0.96 + Math.abs(c) * 0.028;
      hips.rotation.z = s * 0.03;
      torso.rotation.x = 0.06 + Math.abs(s) * 0.012;   // 端盘走路的微前倾
      torso.rotation.z = -s * 0.02;
      workT = 0;
    } else if (simE.mode === "WAIT") {
      // 等待：停住，只剩呼吸。开头一个小欠身（还在上班的人的礼数），然后不看你。
      waitT += dt;
      const bow = Math.max(0, Math.sin(Math.min(Math.PI, waitT * 2.6))) * 0.1;
      const b = Math.sin(breathe * 1.4) * 0.006;
      legL.rotation.x *= 0.9; legR.rotation.x *= 0.9;
      legL.userData.knee.rotation.x *= 0.9; legR.userData.knee.rotation.x *= 0.9;
      hips.position.y = 0.96 + b;
      hips.rotation.z *= 0.9;
      torso.rotation.x = 0.08 + bow + b * 0.5;
      torso.rotation.z *= 0.9;
    } else {
      // WORK：普通工作动作
      workT += dt;
      legL.rotation.x *= 0.85; legR.rotation.x *= 0.85;
      legL.userData.knee.rotation.x *= 0.85; legR.userData.knee.rotation.x *= 0.85;
      hips.rotation.z *= 0.9;
      const act = simE.act;
      if (act === "tray") {
        // 放盘：深弯腰把托盘送低，再直起
        const k = Math.sin(Math.min(Math.PI, workT * 1.6));
        torso.rotation.x = 0.08 + k * 0.55;
        armL.rotation.x = -0.45 - k * 0.4;
        armR.rotation.x = -0.45 - k * 0.4;
        hips.position.y = 0.96 - k * 0.1;
      } else if (act === "wipe") {
        // 擦手：两手在身前小幅交替摩擦
        const k = Math.sin(workT * 9);
        torso.rotation.x = 0.12;
        armL.userData.elbow.rotation.x = -1.15 + k * 0.12;
        armR.userData.elbow.rotation.x = -1.15 - k * 0.12;
        hips.position.y = 0.96;
      } else if (act === "wash") {
        // 洗涤：弯身、双臂缓慢画圈——没有一滴水声
        torso.rotation.x = 0.3 + Math.sin(workT * 2.2) * 0.03;
        armL.userData.elbow.rotation.x = -1.3 + Math.sin(workT * 2.6) * 0.18;
        armR.userData.elbow.rotation.x = -1.3 + Math.cos(workT * 2.6) * 0.18;
        hips.position.y = 0.93;
      } else if (act === "check") {
        // E/B 交界的一拍停顿：站直、不动，只剩呼吸——比任何动作都不对劲
        const b2 = Math.sin(breathe * 1.2) * 0.004;
        torso.rotation.x += (0.03 - torso.rotation.x) * Math.min(1, dt * 6);
        armL.rotation.x += (-0.3 - armL.rotation.x) * Math.min(1, dt * 5);
        armR.rotation.x += (-0.3 - armR.rotation.x) * Math.min(1, dt * 5);
        hips.position.y = 0.965 + b2;
      } else {
        // boxes：整理箱位，反复小幅下蹲搬正
        const k = (Math.sin(workT * 2.4) + 1) / 2;
        torso.rotation.x = 0.1 + k * 0.3;
        hips.position.y = 0.96 - k * 0.08;
        armL.rotation.x = -0.45 - k * 0.3;
        armR.rotation.x = -0.45 - k * 0.3;
      }
    }

    // 证据窗口：E/B 交界停顿时身体朝北（刚从 E 出来），巷里蹲守的玩家在它左侧（西）。
    // 头+肩向左转——转得比礼貌该有的多一点，前侧复眼壳进入侧向视线。
    const targetBlend = evidenceActive > 0 ? 1 : 0;
    evidenceBlend += (targetBlend - evidenceBlend) * Math.min(1, dt * (targetBlend ? 6 : 3));
    headG.rotation.x = 0.42 - evidenceBlend * 0.52;
    headG.rotation.y = evidenceBlend * 1.15;
    headG.rotation.z = -evidenceBlend * 0.12;
    torso.rotation.y = evidenceBlend * 0.35;
    // 4~5 米外它只有十来个像素——发光必须强到「脸上有东西泛微光」能隔着巷子读出来。
    // 色温压冷：暖调贴图 × 偏青绿的发光 → 骨灰色矿物微光，不是橙色灯泡。
    shellMat.emissive.setRGB(evidenceBlend * 1.6, evidenceBlend * 2.15, evidenceBlend * 2.05);

    // 影子跟随
    blob.position.y = 0.02;
  }

  return { root, headG, jackCam, update };
}
