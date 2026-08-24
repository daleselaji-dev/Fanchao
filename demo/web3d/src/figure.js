// M05 双背 占位形象（几何拼装，零贴图）。形象宪法：docs/game-design/07 §3。
// 身体前后镜像对称：正面 = 第二个后背（驼肩、肩胛、领口、发旋两面都有；无脸、无眼、无嘴）。
// 局部 +X 为行进正方向；倒走由状态机（reversing）负责，此处步态不变——这正是设计。

import * as THREE from "three";

const M = {
  workwear: new THREE.MeshLambertMaterial({ color: 0x3e4a56 }),
  workwearDark: new THREE.MeshLambertMaterial({ color: 0x33404a }),
  collar: new THREE.MeshLambertMaterial({ color: 0x4c5a66 }),
  pants: new THREE.MeshLambertMaterial({ color: 0x2f3338 }),
  shoes: new THREE.MeshLambertMaterial({ color: 0x1b1917 }),
  hair: new THREE.MeshLambertMaterial({ color: 0x1f1b17 }),
  whorl: new THREE.MeshLambertMaterial({ color: 0x120f0d }),
  skin: new THREE.MeshLambertMaterial({ color: 0xb08a6e }),
  rag: new THREE.MeshLambertMaterial({ color: 0x8f8878 }),
};

function bx(parent, w, h, d, mat, x, y, z) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

export function createFigure() {
  const group = new THREE.Group();
  const body = new THREE.Group(); // 步态微沉浮
  group.add(body);

  // 骨盆与躯干（宽度沿 z=左右，深度沿 x=前后；前后完全对称）
  bx(body, 0.2, 0.18, 0.34, M.pants, 0, 0.92, 0);
  bx(body, 0.24, 0.52, 0.42, M.workwear, 0, 1.24, 0);
  bx(body, 0.3, 0.24, 0.46, M.workwear, 0, 1.5, 0);       // 圆上背（两面都是「上背」）

  // 肩胛骨突起：±x 两面各两块
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      bx(body, 0.05, 0.2, 0.12, M.workwearDark, sx * 0.175, 1.44, sz * 0.1);
    }
  }
  // 领口：±x 两面
  for (const sx of [-1, 1]) bx(body, 0.03, 0.06, 0.2, M.collar, sx * 0.16, 1.6, 0);

  // 双肩：左肩（-z）低 4cm——左右不对称让他读成一个具体的人
  bx(body, 0.28, 0.12, 0.15, M.workwear, 0, 1.5, -0.255);  // 左
  bx(body, 0.28, 0.12, 0.15, M.workwear, 0, 1.54, 0.255);  // 右

  // 头：陷在耸起的双肩之间；头发盖顶并垂到 ±x 两面的「后颈」；两面各一个发旋
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 12), M.skin);
  head.position.set(0, 1.66, 0);
  body.add(head);
  const hairCap = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 12), M.hair);
  hairCap.scale.set(1.02, 0.92, 1.06);
  hairCap.position.set(0, 1.69, 0);
  body.add(hairCap);
  for (const sx of [-1, 1]) {
    bx(body, 0.05, 0.12, 0.17, M.hair, sx * 0.095, 1.62, 0); // 两面的后颈发
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.012, 10), M.whorl);
    w.rotation.z = Math.PI / 2;
    w.position.set(sx * 0.128, 1.7, 0.01 * sx);
    body.add(w);
  }

  // 手臂（绕 z 轴前后摆）：左 -z 低肩、右 +z
  const arms = [];
  for (const [sz, shoulderY] of [[-1, 1.47], [1, 1.51]]) {
    const pivot = new THREE.Group();
    pivot.position.set(0, shoulderY, sz * 0.26);
    bx(pivot, 0.1, 0.52, 0.09, M.workwear, 0, -0.26, 0);
    bx(pivot, 0.07, 0.1, 0.075, M.skin, 0, -0.57, 0);
    body.add(pivot);
    arms.push(pivot);
  }
  // 右手一块擦桌布
  const rag = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.02, 0.13), M.rag);
  rag.position.set(0.02, -0.63, 0);
  arms[1].add(rag);

  // 腿（绕 z 轴摆；右腿步幅短 15%）
  const legs = [];
  for (const sz of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(0, 0.9, sz * 0.095);
    bx(pivot, 0.13, 0.82, 0.14, M.pants, 0, -0.42, 0);
    const foot = bx(pivot, 0.2, 0.07, 0.11, M.shoes, 0.03, -0.86, 0);
    foot.userData.isFoot = true;
    body.add(pivot);
    legs.push(pivot);
  }

  // 动画：dtAnim 由主循环给出（WAIT 时为 0 → 完全静止，合同第 8 条）
  function update(e, mode) {
    group.position.set(e.x, 0, e.z);
    group.rotation.y = -e.yaw; // 局部 +X 对准路线朝向

    if (mode === "MOVE") {
      const ph = (e.walkPhase / 0.84) * Math.PI * 2; // 0.42s 一步
      const swing = 0.5;
      legs[0].rotation.z = Math.sin(ph) * swing;
      legs[1].rotation.z = -Math.sin(ph) * swing * 0.85; // 右腿步幅短 15%
      arms[0].rotation.z = -Math.sin(ph) * 0.22;
      arms[1].rotation.z = Math.sin(ph) * 0.2;
      body.position.y = Math.abs(Math.sin(ph)) * 0.022;
    } else if (mode === "WORK") {
      const wp = e.workPhase * 2 * Math.PI * 0.8;
      legs[0].rotation.z = 0;
      legs[1].rotation.z = 0;
      arms[1].rotation.z = -0.85 + Math.sin(wp) * 0.18;     // 右臂擦拭
      arms[1].rotation.x = Math.cos(wp) * 0.14;
      arms[0].rotation.z = -0.4;                            // 左臂托着
      arms[0].rotation.x = 0;
      body.position.y = Math.sin(wp * 0.5) * 0.008;
    }
    // WAIT：什么都不改——上一帧的姿势原样冻结
  }

  return { group, update };
}
