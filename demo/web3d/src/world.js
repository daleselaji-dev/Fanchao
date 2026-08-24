// H00 场景灰盒：五区闭环 + W00 散场宴会厅元素。
// 纪律（08 §2/§9）：程序化几何 + 纯色材质分区；零贴图、零采样、无蓝滤镜、无可见水。

import * as THREE from "three";
import {
  WALLS, WALL_H, DOOR_H, DOORWAYS, FURN, TABLES, TABLE_H, MAIN_TABLE,
  ROOMS, LOW_ZONE, PRESS_MARKS, ROUTE, CAMS,
} from "./constants.js";

const lambert = (color) => new THREE.MeshLambertMaterial({ color });

function box(scene, x, y0, z, w, h, d, mat) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x + w / 2, y0 + h / 2, z + d / 2);
  scene.add(m);
  return m;
}

function makeChair(matSeat, matLeg) {
  const g = new THREE.Group();
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.06, 0.46), matSeat);
  seat.position.y = 0.45;
  g.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.55, 0.06), matSeat);
  back.position.set(0, 0.75, -0.21); // 椅背在 -z，椅面朝 +z
  g.add(back);
  for (const [lx, lz] of [[-0.18, -0.19], [0.18, -0.19], [-0.18, 0.19], [0.18, 0.19]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.45, 0.05), matLeg);
    leg.position.set(lx, 0.225, lz);
    g.add(leg);
  }
  return g;
}

export function buildWorld(scene) {
  scene.background = new THREE.Color(0x14110d);
  scene.fog = new THREE.Fog(0x14110d, 20, 52);

  // ---- 地面（房间分区色）与门槛 ----
  const base = new THREE.Mesh(new THREE.PlaneGeometry(60, 50), lambert(0x0e0c0a));
  base.rotation.x = -Math.PI / 2;
  base.position.set(19, -0.02, 13.5);
  scene.add(base);
  for (const r of ROOMS) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(r.w, r.h), lambert(r.c));
    f.rotation.x = -Math.PI / 2;
    f.position.set(r.x + r.w / 2, 0, r.y + r.h / 2);
    scene.add(f);
  }
  for (const d of DOORWAYS) {
    const f = new THREE.Mesh(new THREE.PlaneGeometry(d.w, d.h), lambert(0x6b6353));
    f.rotation.x = -Math.PI / 2;
    f.position.set(d.x + d.w / 2, 0.004, d.y + d.h / 2);
    scene.add(f);
  }

  // ---- 吊顶 ----
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(35.2, 25.2), lambert(0x38332c));
  ceil.rotation.x = Math.PI / 2;
  ceil.position.set(19, WALL_H, 13.2);
  scene.add(ceil);

  // ---- 墙体与门楣 ----
  const wallMat = lambert(0x8a857c);
  for (const w of WALLS) box(scene, w.x, 0, w.y, w.w, WALL_H, w.h, wallMat);
  for (const d of DOORWAYS) {
    box(scene, d.x, DOOR_H, d.y, d.w, WALL_H - DOOR_H, d.h, wallMat);
    // 门框侧柱（读出「门」而不是墙缺口）
    const jamb = lambert(0x746e63);
    box(scene, d.x - 0.07, 0, d.y, 0.07, DOOR_H, d.h, jamb);
    box(scene, d.x + d.w, 0, d.y, 0.07, DOOR_H, d.h, jamb);
  }

  // ---- 家具 ----
  for (const f of FURN) box(scene, f.x, 0, f.y, f.w, f.height, f.h, lambert(f.c));

  // ---- 柜脚/门框下部受压痕（材料证据，不是路线标记） ----
  const markMat = new THREE.MeshBasicMaterial({ color: 0x17130e });
  for (const m of PRESS_MARKS) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.1), markMat);
    p.position.set(m.x, 0.025, m.y);
    scene.add(p);
  }

  // ---- 圆桌：桌布裙边 + 红台布 + 转盘 + 菜品占位 + 热气 ----
  const steam = [];
  const skirtMat = lambert(0xc9c2b2);
  const topMat = lambert(0x93362c);
  const susanMat = lambert(0xd6cfbf);
  const dishMats = [lambert(0xb98d5a), lambert(0xd8d2c4), lambert(0x8f4b38), lambert(0xa8a08c)];
  const steamMat = new THREE.MeshBasicMaterial({
    color: 0xefe8da, transparent: true, opacity: 0.14, depthWrite: false, side: THREE.DoubleSide,
  });
  TABLES.forEach((t, ti) => {
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(t.r, t.r, TABLE_H - 0.04, 28), skirtMat);
    skirt.position.set(t.x, (TABLE_H - 0.04) / 2, t.y);
    scene.add(skirt);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(t.r + 0.03, t.r + 0.03, 0.05, 28), topMat);
    top.position.set(t.x, TABLE_H - 0.02, t.y);
    scene.add(top);
    const susan = new THREE.Mesh(new THREE.CylinderGeometry(t.r * 0.5, t.r * 0.5, 0.05, 24), susanMat);
    susan.position.set(t.x, TABLE_H + 0.03, t.y);
    scene.add(susan);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + ti;
      const dish = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.14, 0.06, 14), dishMats[i % dishMats.length]);
      dish.position.set(t.x + Math.cos(a) * t.r * 0.32, TABLE_H + 0.09, t.y + Math.sin(a) * t.r * 0.32);
      scene.add(dish);
      if (i % 2 === 0) {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.95), steamMat.clone());
        s.position.set(dish.position.x, TABLE_H + 0.75, dish.position.z);
        s.userData.phase = ti * 1.3 + i * 0.7;
        scene.add(s);
        steam.push(s);
      }
    }
  });

  // ---- 椅群：全部朝向主桌，含 2 把倒地的（W00） ----
  const chairSeat = lambert(0x7a3630);
  const chairLeg = lambert(0x2e2a26);
  const main = TABLES[MAIN_TABLE];
  const faceMain = (g) => {
    const dx = main.x - g.position.x;
    const dz = main.y - g.position.z;
    g.rotation.y = Math.atan2(dx, dz); // 椅面(+z)指向主桌
  };
  const chairSpots = [
    // 主桌四把
    { t: 0, a: 0.4, r: 2.6 }, { t: 0, a: 1.7, r: 2.7 }, { t: 0, a: 3.3, r: 2.6 }, { t: 0, a: 4.9, r: 2.75 },
    // 桌 2 三把（一把倒地）
    { t: 1, a: 0.9, r: 2.65 }, { t: 1, a: 2.6, r: 2.7, fallen: true }, { t: 1, a: 4.4, r: 2.6 },
    // 桌 3 三把（一把倒地、一把被推远）
    { t: 2, a: 1.2, r: 2.6 }, { t: 2, a: 3.6, r: 3.4 }, { t: 2, a: 5.1, r: 2.7, fallen: true },
  ];
  for (const s of chairSpots) {
    const t = TABLES[s.t];
    const g = makeChair(chairSeat, chairLeg);
    g.position.set(t.x + Math.cos(s.a) * s.r, 0, t.y + Math.sin(s.a) * s.r);
    faceMain(g);
    if (s.fallen) {
      g.rotation.x = -Math.PI / 2; // 向后倒，椅面仍指向主桌
      g.position.y = 0.24;
    }
    scene.add(g);
  }

  // ---- 门口横幅：名字位置是两块干净的空白（W00） ----
  const banner = new THREE.Group();
  const cloth = new THREE.Mesh(new THREE.PlaneGeometry(7.4, 0.72), lambert(0x9c2f26));
  banner.add(cloth);
  for (const off of [-1.9, 1.9]) {
    const blank = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.44), lambert(0xe6ddc9));
    blank.position.set(off, 0, 0.01);
    banner.add(blank);
  }
  const mid = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), lambert(0xc8a24a));
  mid.position.set(0, 0, 0.01);
  banner.add(mid);
  banner.position.set(18.2, 2.2, 1.53);
  scene.add(banner);

  // ---- C 房 CRT（卡座上方，熄屏；归档后亮 3 秒普通画面色块） ----
  const crtBody = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5, 0.55), lambert(0x35332e));
  crtBody.position.set(5.5, 0.9 + 0.25, 19.55);
  scene.add(crtBody);
  const crtScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.5, 0.38),
    new THREE.MeshBasicMaterial({ color: 0x191916 }),
  );
  crtScreen.position.set(5.5, 1.16, 19.83);
  scene.add(crtScreen);
  const crtBlocks = new THREE.Group();
  const blockA = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), new THREE.MeshBasicMaterial({ color: 0xa8442f }));
  blockA.position.set(-0.1, -0.06, 0.005);
  const blockB = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.09), new THREE.MeshBasicMaterial({ color: 0xa8442f }));
  blockB.position.set(0.12, -0.05, 0.005);
  const figA = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.14), new THREE.MeshBasicMaterial({ color: 0xe4d8bc }));
  figA.position.set(-0.02, 0.06, 0.005);
  const figB = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.13), new THREE.MeshBasicMaterial({ color: 0xe4d8bc }));
  figB.position.set(0.1, 0.06, 0.005);
  crtBlocks.add(blockA, blockB, figA, figB);
  crtBlocks.visible = false;
  crtScreen.add(crtBlocks);

  // ---- 灯光：A 厅暖钨丝 3 盏 + 后场冷白 2 盏 + C/D 各 1 盏 ----
  scene.add(new THREE.HemisphereLight(0xcabfa8, 0x2c2620, 0.62));
  const warm = 0xffd2a0;
  for (const t of TABLES) {
    const l = new THREE.PointLight(warm, 24, 0, 2);
    l.position.set(t.x, 2.3, t.y);
    scene.add(l);
  }
  const cool = 0xdfe8ea;
  const lb = new THREE.PointLight(cool, 15, 0, 2);
  lb.position.set(16.5, 2.3, 13.6);
  scene.add(lb);
  const le = new THREE.PointLight(cool, 12, 0, 2);
  le.position.set(18.5, 2.3, 21.0);
  scene.add(le);
  const lc = new THREE.PointLight(0xcfd6da, 14, 0, 2);
  lc.position.set(6.5, 2.3, 21.5);
  scene.add(lc);
  const ld = new THREE.PointLight(0xd8cdb4, 12, 0, 2);
  ld.position.set(29.5, 2.3, 21.0);
  scene.add(ld);

  // ---- 调试标注层（V，默认关）：路线、航点、低处、机位——纯线框，无文字 ----
  const debugGroup = new THREE.Group();
  debugGroup.visible = false;
  const routePts = [...ROUTE, ROUTE[0]].map(p => new THREE.Vector3(p.x, 0.08, p.y));
  const routeLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(routePts),
    new THREE.LineBasicMaterial({ color: 0x9ab07f }),
  );
  debugGroup.add(routeLine);
  ROUTE.forEach((p) => {
    const dot = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.12),
      new THREE.MeshBasicMaterial({ color: p.pause > 0 ? 0xc9b57a : 0x9ab07f }),
    );
    dot.position.set(p.x, 0.12, p.y);
    debugGroup.add(dot);
  });
  const lowBox = new THREE.Mesh(
    new THREE.BoxGeometry(LOW_ZONE.w, 1.0, LOW_ZONE.h),
    new THREE.MeshBasicMaterial({ color: 0xd8b98a, wireframe: true }),
  );
  lowBox.position.set(LOW_ZONE.x + LOW_ZONE.w / 2, 0.5, LOW_ZONE.y + LOW_ZONE.h / 2);
  debugGroup.add(lowBox);
  for (const c of CAMS) {
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.5, 4),
      new THREE.MeshBasicMaterial({ color: 0x7d968e, wireframe: true }),
    );
    cone.position.set(c.x, 1.4, c.y);
    cone.rotation.set(Math.PI / 2, 0, -c.a);
    debugGroup.add(cone);
  }
  scene.add(debugGroup);

  return { steam, crtScreen, crtBlocks, debugGroup };
}

// 热气动画：缓慢上升、循环、面向相机（billboard）
export function updateSteam(steam, elapsed, camera) {
  for (const s of steam) {
    const t = (elapsed * 0.14 + s.userData.phase) % 1;
    s.position.y = TABLE_H + 0.45 + t * 0.9;
    s.material.opacity = 0.16 * (1 - t) * (0.4 + 0.6 * Math.min(1, t * 4));
    s.quaternion.copy(camera.quaternion);
  }
}
