"use strict";
/*
 * 返席人（M01 候选）——像还在上班的人，先于像怪物。
 * 造型：旧蓝工装 + 本白围裙 + 卷起的袖口 + 深色毛料裤；
 *       疲惫的溜肩与微驼背；手里的金属托盘；头常年低着。
 * 面部前侧是干燥石化的复眼壳，平时被低头姿态与阴影藏住；
 * 只有证据窗口（每圈≤1次、≤1.6s、玩家在低处换来）里，
 * 它会在 E/B 交界抬头侧转——转动是分级卡顿的，像旧机械不像脖子。
 * 合同：不追、不冲刺、不跳脸、不转头看玩家。
 * 圈数递进（sim.entity.loops）只改变姿态语气，不改变任何行为合同。
 */
import * as THREE from "three";
import { floorHeightAt } from "./contract.js";

const cyl = (rt, rb, h, seg = 10) => new THREE.CylinderGeometry(rt, rb, h, seg);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const sph = (r, ws = 12, hs = 10) => new THREE.SphereGeometry(r, ws, hs);

export function createEntity(scene, M) {
  const root = new THREE.Group();
  const mesh = (geo, mat, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, rz);
    return m;
  };

  // ---- 骨盆 ----
  const hips = new THREE.Group();
  hips.position.y = 1.0;
  root.add(hips);
  hips.add(mesh(box(0.31, 0.2, 0.21), M.trousers, 0, -0.06, 0));
  hips.add(mesh(box(0.33, 0.045, 0.23), M.plasticBlack, 0, 0.05, 0));   // 皮带

  // ---- 腿（锥形大腿/小腿 + 两段式工鞋）----
  const mkLeg = (side) => {
    const g = new THREE.Group();
    g.position.set(0.095 * side, -0.02, 0);
    const thigh = mesh(cyl(0.082, 0.066, 0.44), M.trousers, 0, -0.22, 0);
    const knee = new THREE.Group();
    knee.position.y = -0.44;
    const calf = mesh(cyl(0.06, 0.044, 0.42), M.trousers, 0, -0.21, 0);
    // 裤脚（略外扩，盖住鞋口）
    const hem = mesh(cyl(0.062, 0.07, 0.09), M.trousers, 0, -0.4, 0);
    const shoe = new THREE.Group();
    shoe.position.set(0, -0.455, 0.02);
    shoe.add(mesh(box(0.105, 0.075, 0.2), M.shoes, 0, 0, 0));
    shoe.add(mesh(box(0.095, 0.05, 0.1), M.shoes, 0, -0.008, 0.13));    // 鞋头
    shoe.add(mesh(box(0.11, 0.02, 0.31), M.rubber, 0, -0.046, 0.045)); // 胶底
    knee.add(calf, hem, shoe);
    g.add(thigh, knee);
    g.userData.knee = knee;
    return g;
  };
  const legL = mkLeg(-1), legR = mkLeg(1);
  hips.add(legL, legR);

  // ---- 躯干（溜肩 + 微驼背 + 工装细节）----
  const torso = new THREE.Group();
  torso.position.y = 0.06;
  hips.add(torso);
  torso.add(mesh(cyl(0.155, 0.168, 0.16), M.jacket, 0, 0.07, 0));                    // 腰
  const chest = mesh(cyl(0.175, 0.152, 0.35), M.jacket, 0, 0.3, 0);
  chest.scale.z = 0.78;
  torso.add(chest);
  const hunch = mesh(sph(0.145), M.jacket, 0, 0.44, -0.075);                          // 驼背
  hunch.scale.set(1.25, 0.85, 0.7);
  torso.add(hunch);
  const shoulders = mesh(cyl(0.06, 0.06, 0.42, 8), M.jacket, 0, 0.5, 0, 0, 0, Math.PI / 2);
  shoulders.scale.y = 1.0;
  torso.add(shoulders);                                                              // 肩桥（溜肩线）
  // 领口（后高前开）
  torso.add(mesh(box(0.16, 0.05, 0.03), M.jacket, 0, 0.545, -0.1));
  torso.add(mesh(box(0.03, 0.06, 0.1), M.jacket, -0.085, 0.53, 0.075, 0, 0.5, 0));
  torso.add(mesh(box(0.03, 0.06, 0.1), M.jacket, 0.085, 0.53, 0.075, 0, -0.5, 0));
  // 前襟扣子 + 胸袋
  for (let i = 0; i < 3; i++) torso.add(mesh(cyl(0.012, 0.012, 0.008, 8), M.plasticBlack, 0.015, 0.36 - i * 0.11, 0.132, Math.PI / 2));
  torso.add(mesh(box(0.09, 0.1, 0.012), M.jacket, -0.09, 0.37, 0.128));
  // 后颈露出的一点皮肤
  torso.add(mesh(cyl(0.05, 0.058, 0.1, 8), M.skin, 0, 0.585, -0.005));
  // 围裙（从腰垂到膝下；走路时轻摆）
  const apron = new THREE.Group();
  apron.position.set(0, 0.12, 0.13);
  const apronCloth = mesh(new THREE.PlaneGeometry(0.34, 0.62, 1, 3), M.apron, 0, -0.31, 0.012);
  apron.add(apronCloth);
  apron.add(mesh(box(0.36, 0.02, 0.01), M.apron, 0, -0.005, 0.012));   // 系带边
  torso.add(apron);

  // ---- 头（默认低着，前倾）----
  const headG = new THREE.Group();
  headG.position.set(0, 0.6, 0.02);
  torso.add(headG);
  const skull = mesh(sph(0.094, 16, 14), M.skin, 0, 0.075, 0);
  skull.scale.set(0.9, 1.08, 0.96);
  const jaw = mesh(sph(0.068, 12, 10), M.skin, 0, 0.018, 0.02);
  jaw.scale.set(0.86, 0.66, 0.9);
  const earL = mesh(box(0.014, 0.036, 0.026), M.skin, -0.084, 0.062, 0.004);
  const earR = mesh(box(0.014, 0.036, 0.026), M.skin, 0.084, 0.062, 0.004);
  const hair = mesh(sph(0.099, 16, 12), M.hair, 0, 0.088, -0.018);
  hair.scale.set(0.95, 1.0, 0.95);
  const nape = mesh(sph(0.07, 10, 8), M.hair, 0, 0.03, -0.062);
  nape.scale.set(0.9, 0.9, 0.6);
  // 前侧复眼壳：覆盖面部的干燥半壳 + 壳沿干裂圈
  const shellMat = M.compound.clone();
  shellMat.emissiveMap = shellMat.map;   // 证据窗口里按复眼纹理发微光（干壳反光，不是灯泡）
  const shell = mesh(
    new THREE.SphereGeometry(0.088, 20, 16, -Math.PI / 2.6, Math.PI / 1.35, Math.PI * 0.18, Math.PI * 0.62),
    shellMat, 0, 0.062, 0.024
  );
  shell.scale.set(1.0, 1.14, 1.06);
  const rimMat = M.compound.clone();
  rimMat.color = new THREE.Color(0x5c5142);
  const rim = mesh(new THREE.TorusGeometry(0.083, 0.007, 6, 18, Math.PI * 1.15), rimMat, 0, 0.062, 0.028, 0.35, 0, Math.PI * 0.93);
  headG.add(skull, jaw, earL, earR, hair, nape, shell, rim);
  headG.rotation.x = 0.42;  // 低头

  // ---- 手臂（锥形上下臂 + 卷袖口 + 皮肤前臂 + 五指手）----
  const mkArm = (side) => {
    const g = new THREE.Group();
    g.position.set(0.215 * side, 0.5, 0.0);
    g.add(mesh(sph(0.055, 10, 8), M.jacket, 0, 0, 0));                          // 肩头
    g.add(mesh(cyl(0.052, 0.045, 0.3), M.jacket, 0, -0.15, 0));                 // 上臂
    const elbow = new THREE.Group();
    elbow.position.y = -0.3;
    elbow.add(mesh(cyl(0.055, 0.055, 0.05), M.jacket, 0, -0.02, 0));            // 卷起的袖口
    elbow.add(mesh(cyl(0.04, 0.034, 0.2), M.skin, 0, -0.14, 0));                // 露出的前臂
    const hand = new THREE.Group();
    hand.position.y = -0.26;
    hand.add(mesh(box(0.062, 0.08, 0.03), M.skin, 0, -0.04, 0.004));            // 掌
    hand.add(mesh(box(0.055, 0.055, 0.026), M.skin, 0, -0.1, 0.018, -0.55));    // 并拢的四指（扣住盘沿）
    hand.add(mesh(box(0.02, 0.045, 0.022), M.skin, 0.036 * side, -0.055, 0.024, -0.3, 0, -0.35 * side)); // 拇指
    elbow.add(hand);
    g.add(elbow);
    g.userData.elbow = elbow;
    // 端盘姿势
    g.rotation.x = -0.42;
    elbow.rotation.x = -1.18;
    g.rotation.z = -0.1 * side;
    return g;
  };
  const armL = mkArm(-1), armR = mkArm(1);
  torso.add(armL, armR);
  // 右上臂红袖标（还在上班的人）
  const band = mesh(cyl(0.056, 0.056, 0.05, 10), M.clothRed, 0.215, 0.4, 0);
  band.rotation.z = 0.1;
  torso.add(band);

  // ---- 托盘（带沿的金属盘 + 收场餐具 + 搭在左前臂的灰布）----
  const trayG = new THREE.Group();
  trayG.position.set(0, 0.28, 0.32);
  trayG.add(mesh(box(0.46, 0.022, 0.32), M.steel, 0, 0, 0));
  const trayRim = mesh(new THREE.TorusGeometry(0.225, 0.011, 6, 22), M.steelDull, 0, 0.014, 0, Math.PI / 2);
  trayRim.scale.set(1, 0.72, 1);
  trayG.add(trayRim);
  trayG.add(mesh(cyl(0.08, 0.06, 0.05), M.porcelain, 0.08, 0.045, -0.02));
  trayG.add(mesh(cyl(0.07, 0.07, 0.018), M.porcelain, -0.1, 0.03, 0.05));
  trayG.add(mesh(cyl(0.075, 0.05, 0.045), M.porcelain, -0.09, 0.062, 0.05));
  trayG.add(mesh(cyl(0.028, 0.028, 0.1, 8), M.glassGreen, 0.16, 0.07, 0.08));
  torso.add(trayG);
  const armCloth = mesh(box(0.09, 0.2, 0.05), M.apron, -0.3, 0.16, 0.2, -0.5, 0, 0.1);
  torso.add(armCloth);

  // ---- 影子贴片 ----
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.95), M.blob);
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
  let twitch = 0;          // 单帧微搐余量
  let twitchNext = 6 + Math.random() * 4;

  // 分级卡顿转头：连续输入 → 台阶输出（旧机械不是脖子）
  const stepped = (raw, q = 0.22) => {
    const k = raw / q, f = Math.floor(k), r = k - f;
    const s = r < 0.35 ? 0 : r > 0.68 ? 1 : (r - 0.35) / 0.33;
    return (f + s * s * (3 - 2 * s)) * q;
  };

  function update(simE, evidenceActive, dt) {
    const loops = simE.loops || 0;
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
    const dist = Math.hypot(dx, dz);
    const speed = dist / Math.max(1e-4, dt);
    breathe += dt;

    // 偶发单帧微搐（圈数越多越频繁——语气变化，不是行为变化）
    twitchNext -= dt;
    if (twitchNext <= 0) {
      twitch = 1;
      twitchNext = (loops >= 2 ? 4 : 6.5) + Math.random() * 4;
    }
    twitch *= Math.max(0, 1 - dt * 13);

    // 头的基础低垂度：圈数多了略微「松」一点
    const baseBow = loops >= 1 ? 0.36 : 0.42;

    if (simE.mode !== "WAIT") waitT = 0;
    if (simE.mode === "MOVE" && speed > 0.05) {
      walkPhase += dist * 4.4;
      const s = Math.sin(walkPhase), c = Math.cos(walkPhase);
      // 腿：摆胯 + 屈膝
      legL.rotation.x = s * 0.52;
      legR.rotation.x = -s * 0.52;
      legL.userData.knee.rotation.x = Math.max(0, -c) * 0.78 + 0.06;
      legR.userData.knee.rotation.x = Math.max(0, c) * 0.78 + 0.06;
      // 骨盆：起伏 + 侧倾 + 旋转
      hips.position.y = 1.0 + Math.abs(c) * 0.03;
      hips.rotation.z = s * 0.035;
      hips.rotation.y = s * 0.055;
      // 躯干：反向旋转抵消 + 端盘前倾
      torso.rotation.y = -s * 0.045;
      torso.rotation.x = 0.065 + Math.abs(s) * 0.012;
      torso.rotation.z = -s * 0.022;
      // 肩桥微反摆（端着盘，幅度很小）
      armL.rotation.x = -0.42 - s * 0.05;
      armR.rotation.x = -0.42 + s * 0.05;
      // 头：落步滞后的小点头 + 低垂
      headG.rotation.x = baseBow + Math.sin(walkPhase * 2 - 0.7) * 0.016;
      // 围裙摆动（滞后于腿）
      apron.rotation.x = 0.05 + Math.sin(walkPhase - 1.0) * 0.06;
      // 托盘保持水平里的一点点没保持住
      trayG.rotation.z = s * 0.014;
      trayG.rotation.x = Math.abs(c) * 0.012;
      workT = 0;
    } else if (simE.mode === "WAIT") {
      // 等待：停住，只剩呼吸。开头一个小欠身（还在上班的人的礼数），然后不看你。
      waitT += dt;
      const bow = Math.max(0, Math.sin(Math.min(Math.PI, waitT * 2.6))) * 0.1;
      const b = Math.sin(breathe * 1.4) * 0.006;
      legL.rotation.x *= 0.9; legR.rotation.x *= 0.9;
      legL.userData.knee.rotation.x *= 0.9; legR.userData.knee.rotation.x *= 0.9;
      hips.position.y = 1.0 + b;
      hips.rotation.z *= 0.9; hips.rotation.y *= 0.9;
      torso.rotation.x = 0.08 + bow + b * 0.5;
      torso.rotation.y *= 0.9;
      torso.rotation.z *= 0.9;
      headG.rotation.x = baseBow + bow * 0.5;
      apron.rotation.x *= 0.92;
      trayG.rotation.z *= 0.9; trayG.rotation.x *= 0.9;
      // 呼吸落在肩上（驼背的人呼吸在背上看得见）
      hunch.position.y = 0.44 + b * 0.8;
    } else {
      // WORK：普通工作动作
      workT += dt;
      legL.rotation.x *= 0.85; legR.rotation.x *= 0.85;
      legL.userData.knee.rotation.x *= 0.85; legR.userData.knee.rotation.x *= 0.85;
      hips.rotation.z *= 0.9; hips.rotation.y *= 0.9;
      torso.rotation.y *= 0.9;
      apron.rotation.x *= 0.94;
      trayG.rotation.z *= 0.9; trayG.rotation.x *= 0.9;
      const act = simE.act;
      if (act === "tray") {
        // 放盘：深弯腰把托盘送低，再直起
        const k = Math.sin(Math.min(Math.PI, workT * 1.6));
        torso.rotation.x = 0.08 + k * 0.55;
        armL.rotation.x = -0.42 - k * 0.42;
        armR.rotation.x = -0.42 - k * 0.42;
        hips.position.y = 1.0 - k * 0.1;
        headG.rotation.x = baseBow + k * 0.1;
      } else if (act === "wipe") {
        // 擦手：两手在身前小幅交替摩擦
        const k = Math.sin(workT * 9);
        torso.rotation.x = 0.12;
        armL.userData.elbow.rotation.x = -1.18 + k * 0.12;
        armR.userData.elbow.rotation.x = -1.18 - k * 0.12;
        hips.position.y = 1.0;
      } else if (act === "wash") {
        // 洗涤：弯身、双臂缓慢画圈——没有一滴水声
        torso.rotation.x = 0.3 + Math.sin(workT * 2.2) * 0.03;
        armL.userData.elbow.rotation.x = -1.32 + Math.sin(workT * 2.6) * 0.18;
        armR.userData.elbow.rotation.x = -1.32 + Math.cos(workT * 2.6) * 0.18;
        hips.position.y = 0.97;
      } else if (act === "check") {
        // E/B 交界的一拍停顿：站直、不动，只剩呼吸——比任何动作都不对劲
        const b2 = Math.sin(breathe * 1.2) * 0.004;
        torso.rotation.x += (0.03 - torso.rotation.x) * Math.min(1, dt * 6);
        armL.rotation.x += (-0.3 - armL.rotation.x) * Math.min(1, dt * 5);
        armR.rotation.x += (-0.3 - armR.rotation.x) * Math.min(1, dt * 5);
        hips.position.y = 1.005 + b2;
        // 圈数≥2：即使没有证据窗口，check 时头也微微歪向西边——它在「学会」这个停顿
        if (loops >= 2 && evidenceActive <= 0) {
          headG.rotation.z += (-0.08 - headG.rotation.z) * Math.min(1, dt * 3);
          headG.rotation.y += (0.22 - headG.rotation.y) * Math.min(1, dt * 2);
        }
      } else {
        // boxes：整理箱位，反复小幅下蹲搬正
        const k = (Math.sin(workT * 2.4) + 1) / 2;
        torso.rotation.x = 0.1 + k * 0.3;
        hips.position.y = 1.0 - k * 0.08;
        armL.rotation.x = -0.42 - k * 0.3;
        armR.rotation.x = -0.42 - k * 0.3;
      }
    }

    // 证据窗口：E/B 交界停顿时身体朝北（刚从 E 出来），巷里蹲守的玩家在它左侧（西）。
    // 头+肩向左转——但转动是分级卡顿的：停顿、跳一格、再停顿。转得比礼貌该有的多一点。
    const targetBlend = evidenceActive > 0 ? 1 : 0;
    evidenceBlend += (targetBlend - evidenceBlend) * Math.min(1, dt * (targetBlend ? 5 : 3));
    const headYawRaw = evidenceBlend * 1.15;
    const headYaw = stepped(headYawRaw, 0.23);
    if (evidenceActive > 0 || evidenceBlend > 0.02) {
      headG.rotation.x = baseBow - evidenceBlend * (baseBow + 0.1);
      headG.rotation.y = headYaw;
      headG.rotation.z = -evidenceBlend * 0.12 + twitch * 0.05;
      torso.rotation.y = evidenceBlend * 0.35;
      // 完全转到位后的微小定格颤（幅度一根头发丝）
      if (evidenceBlend > 0.96) headG.rotation.y = headYaw + Math.sin(breathe * 37) * 0.006;
    } else {
      headG.rotation.y *= 0.9;
      headG.rotation.z = headG.rotation.z * 0.9 + twitch * 0.06;
    }
    // 4~5 米外它只有十来个像素——发光必须强到「脸上有东西泛微光」能隔着巷子读出来。
    // 色温压冷：暖调贴图 × 偏青绿的发光 → 骨灰色矿物微光，不是橙色灯泡。
    shellMat.emissive.setRGB(evidenceBlend * 1.6, evidenceBlend * 2.15, evidenceBlend * 2.05);

    // 影子跟随
    blob.position.y = 0.02;
  }

  return { root, headG, jackCam, update };
}
