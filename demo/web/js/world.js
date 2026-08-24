"use strict";
/*
 * 返潮 H00-R0 —— 场景构建
 * 原则：先是一个真实营业中的 2001 年婚宴后场，再是恐怖游戏场景。
 * 异常只允许从材料受力、柜脚、门框下部、身体姿态、声音错位读出；
 * 无可见海水、无水线、无蓝色滤镜、无海洋装饰。
 * 静态几何按材质合批；实用光源 + 一次性烘焙阴影。
 */
import * as THREE from "three";
import { mergeGeometries } from "../lib/BufferGeometryUtils.js";
import {
  ROOMS, LOW_ZONE, PRESS_MARKS, ARCHIVE_POINT, floorHeightAt,
} from "./contract.js";
import { srand, rnd } from "./materials.js";

const rr = (a, b) => a + rnd() * (b - a);

// ---------- 合批器 ----------
function makeBucket() {
  const map = new Map();
  return {
    add(mat, geo, x, y, z, ry = 0, rx = 0, rz = 0) {
      const m = new THREE.Matrix4()
        .makeRotationFromEuler(new THREE.Euler(rx, ry, rz))
        .setPosition(x, y, z);
      geo.applyMatrix4(m);
      if (!map.has(mat)) map.set(mat, []);
      map.get(mat).push(geo);
    },
    flush(parent, { shadows = true } = {}) {
      for (const [mat, geos] of map) {
        const merged = mergeGeometries(geos, false);
        const mesh = new THREE.Mesh(merged, mat);
        mesh.castShadow = shadows;
        mesh.receiveShadow = true;
        parent.add(mesh);
      }
      map.clear();
    },
  };
}

function scaleUV(geo, su, sv) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv);
  return geo;
}

const boxG = (w, h, d, su = null, sv = null) => {
  const g = new THREE.BoxGeometry(w, h, d);
  if (su !== null) scaleUV(g, su, sv);
  return g;
};
const cylG = (rt, rb, h, seg = 12, su = 1, sv = 1) => scaleUV(new THREE.CylinderGeometry(rt, rb, h, seg), su, sv);
const planeG = (w, h, su = 1, sv = 1) => scaleUV(new THREE.PlaneGeometry(w, h), su, sv);

// ============================================================
export function buildWorld(scene, M, T) {
  const B = makeBucket();
  const NB = makeBucket();   // 灯具等不投影几何（防阴影痤疮）
  const colliders = { rects: [], circles: [] };
  const dynamics = { flickers: [], guests: [], crt: null, lights: {} };
  const cR = (x, z, w, d) => colliders.rects.push({ x, z, w, d });
  const cC = (x, z, r) => colliders.circles.push({ x, z, r });

  // ============ 地面 ============
  // A 厅：水磨石 + 中央地毯
  {
    const g = planeG(33.4, 8.6, 33.4 / 1.5, 8.6 / 1.5);
    B.add(M.terrazzo, g.rotateX(-Math.PI / 2), 18.7, 0, 5.5);
    const carpet = planeG(26, 6.2, 26 / 2, 6.2 / 2);
    B.add(M.carpet, carpet.rotateX(-Math.PI / 2), 19, 0.012, 5.1);
  }
  // B 走廊平地（绕开下沉巷）
  {
    const north = planeG(33.4, 4.9, 33.4 / 1.5, 4.9 / 1.5);
    B.add(M.terrazzo, north.rotateX(-Math.PI / 2), 18.7, 0, 12.55); // z10.1–15.0
    const west = planeG(1.0, 2.3, 1 / 1.5, 2.3 / 1.5);
    B.add(M.terrazzo, west.rotateX(-Math.PI / 2), 2.5, 0, 16.15);   // x2–3
    const east = planeG(13.4, 2.3, 13.4 / 1.5, 2.3 / 1.5);
    B.add(M.terrazzo, east.rotateX(-Math.PI / 2), 28.7, 0, 16.15);  // x22–35.4
    const doorAB = planeG(2, 0.6, 2 / 1.5, 0.6 / 1.5);
    B.add(M.terrazzo, doorAB.rotateX(-Math.PI / 2), 18, 0, 9.8);
  }
  // 下沉器材巷：按 floorHeightAt 位移的网格（与 sim 完全一致）
  {
    const seg = 96, segZ = 12;
    const g = new THREE.PlaneGeometry(19, 2.3, seg, segZ);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + 12.5, z = pos.getZ(i) + 16.15;
      pos.setY(i, floorHeightAt(x, z));
    }
    g.computeVertexNormals();
    scaleUV(g, 19 / 2, 2.3 / 2);
    B.add(M.sediment, g, 12.5, 0, 16.15);
  }
  // C/E 门槛坡
  for (const dx of [8.8, 18.8]) {
    const g = new THREE.PlaneGeometry(1.6, 0.6, 8, 6);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + dx, z = pos.getZ(i) + 17.6;
      pos.setY(i, floorHeightAt(x, Math.min(17.9, Math.max(17.3, z))) + 0.001);
    }
    g.computeVertexNormals();
    B.add(M.concrete, g, dx, 0, 17.6);
  }
  // C / E 房间：水磨石；D + D 门口：水泥
  B.add(M.terrazzo, planeG(11, 7.6, 11 / 1.5, 7.6 / 1.5).rotateX(-Math.PI / 2), 7.5, 0, 21.7);
  B.add(M.terrazzo, planeG(10.4, 7.6, 10.4 / 1.5, 7.6 / 1.5).rotateX(-Math.PI / 2), 18.8, 0, 21.7);
  B.add(M.concrete, planeG(10.8, 7.6, 10.8 / 2, 7.6 / 2).rotateX(-Math.PI / 2), 30, 0, 21.7);
  B.add(M.concrete, planeG(3, 0.6, 1.5, 0.3).rotateX(-Math.PI / 2), 29.5, 0, 17.6);

  // ============ 墙面（按房间贴面）============
  const wall = (mat, x0, x1, z, h, { y0 = 0, faceN = false, vScale = 1 } = {}) => {
    // 沿 x 的墙板；faceN=true 表示法线朝 -z（房间在北侧）
    const w = x1 - x0;
    const g = boxG(w, h - y0, 0.1, w / 2, vScale);
    B.add(mat, g, (x0 + x1) / 2, (h + y0) / 2, z + (faceN ? -0.05 : 0.05));
  };
  const wallX = (mat, z0, z1, x, h, { y0 = 0, faceW = false, vScale = 1 } = {}) => {
    const d = z1 - z0;
    const g = boxG(0.1, h - y0, d, d / 2, vScale);
    B.add(mat, g, x + (faceW ? -0.05 : 0.05), (h + y0) / 2, (z0 + z1) / 2);
  };

  // A 厅四面（奶黄+酒红木裙）
  wall(M.hallWall, 2, 35.4, 1.5, 4.2);                       // 北
  wall(M.hallWall, 2, 17, 9.5, 4.2, { faceN: true });        // A/B 墙西段
  wall(M.hallWall, 19, 35.4, 9.5, 4.2, { faceN: true });     // A/B 墙东段
  wall(M.hallWall, 17, 19, 9.5, 4.2, { y0: 2.25, faceN: true }); // 门上过梁
  wallX(M.hallWall, 1.5, 9.5, 2, 4.2);                       // 西
  wallX(M.hallWall, 1.5, 9.5, 35.4, 4.2, { faceW: true });   // 东

  // B 走廊（白瓷砖+绿墙裙，贴图 v=全高 3m）
  wall(M.tileB, 2, 17, 10.1, 3.0);
  wall(M.tileB, 19, 35.4, 10.1, 3.0);
  wall(M.tileB, 17, 19, 10.1, 3.0, { y0: 2.25 });
  wallX(M.tileB, 10.1, 17.3, 2, 3.0);
  wallX(M.tileB, 10.1, 17.3, 35.4, 3.0, { faceW: true });
  // B 南墙（下沉巷段延伸到 -0.45 墙基）
  const southB = (x0, x1) => {
    const w = x1 - x0;
    const g = boxG(w, 3.45, 0.1, w / 2, 1.15);
    B.add(M.tileB, g, (x0 + x1) / 2, 3.45 / 2 - 0.45, 17.3 - 0.05);
  };
  southB(2, 8); southB(9.6, 18); southB(19.6, 28); southB(31, 35.4);
  wall(M.tileB, 8, 9.6, 17.3, 3.0, { y0: 2.02, faceN: true });
  wall(M.tileB, 18, 19.6, 17.3, 3.0, { y0: 2.02, faceN: true });
  wall(M.tileB, 28, 31, 17.3, 3.0, { y0: 2.55, faceN: true });

  // C 房
  wall(M.tileCE, 2, 8, 17.9, 2.8);
  wall(M.tileCE, 9.6, 13, 17.9, 2.8);
  wall(M.tileCE, 8, 9.6, 17.9, 2.8, { y0: 2.02 });
  wall(M.tileCE, 2, 13, 25.5, 2.8, { faceN: true });
  wallX(M.tileCE, 17.9, 25.5, 2, 2.8);
  wallX(M.tileCE, 17.9, 25.5, 13, 2.8, { faceW: true });
  // E 房
  wall(M.tileCE, 13.6, 18, 17.9, 2.8);
  wall(M.tileCE, 19.6, 24, 17.9, 2.8);
  wall(M.tileCE, 18, 19.6, 17.9, 2.8, { y0: 2.02 });
  wall(M.tileCE, 13.6, 24, 25.5, 2.8, { faceN: true });
  wallX(M.tileCE, 17.9, 25.5, 13.6, 2.8);
  wallX(M.tileCE, 17.9, 25.5, 24, 2.8, { faceW: true });
  // D 卸货区（水泥）
  wall(M.concreteWall, 24.6, 28, 17.9, 3.5);
  wall(M.concreteWall, 31, 35.4, 17.9, 3.5);
  wall(M.concreteWall, 28, 31, 17.9, 3.5, { y0: 2.55 });
  wall(M.concreteWall, 24.6, 35.4, 25.5, 3.5, { faceN: true }); // 南墙（含卷帘段，卷帘另建）
  wallX(M.concreteWall, 17.9, 25.5, 24.6, 3.5);
  wallX(M.concreteWall, 17.9, 25.5, 35.4, 3.5, { faceW: true });

  // 门洞侧壁（洞内侧面）
  const jamb = (x, z0, z1, h, mat) => {
    const g = boxG(0.08, h, z1 - z0, (z1 - z0) / 2, 1);
    B.add(mat, g, x, h / 2, (z0 + z1) / 2);
  };
  jamb(17.04, 9.5, 10.1, 2.25, M.wood); jamb(18.96, 9.5, 10.1, 2.25, M.wood);
  jamb(8.04, 17.3, 17.9, 2.02, M.woodDark); jamb(9.56, 17.3, 17.9, 2.02, M.woodDark);
  jamb(18.04, 17.3, 17.9, 2.02, M.woodDark); jamb(19.56, 17.3, 17.9, 2.02, M.woodDark);
  jamb(28.05, 17.3, 17.9, 2.55, M.concreteWall); jamb(30.95, 17.3, 17.9, 2.55, M.concreteWall);

  // ============ 天花 ============
  const ceil = (mat, x, z, w, d, y) => {
    const g = planeG(w, d, w / 2.2, d / 2.2);
    g.rotateX(Math.PI / 2);
    B.add(mat, g, x, y, z);
  };
  ceil(M.ceilA, 18.7, 5.5, 33.4, 8.6, 4.2);
  ceil(M.ceilB, 18.7, 13.7, 33.4, 7.8, 3.0);
  ceil(M.ceilB, 7.5, 21.7, 11.2, 7.8, 2.8);
  ceil(M.ceilB, 18.8, 21.7, 10.6, 7.8, 2.8);
  ceil(M.ceilB, 30, 21.7, 11, 7.8, 3.5);
  // 门洞顶
  ceil(M.ceilB, 18, 9.8, 2.2, 0.8, 2.25);
  ceil(M.ceilB, 8.8, 17.6, 1.8, 0.8, 2.02);
  ceil(M.ceilB, 18.8, 17.6, 1.8, 0.8, 2.02);
  ceil(M.ceilB, 29.5, 17.6, 3.2, 0.8, 2.55);

  // ============ A 婚宴厅道具 ============
  srand(510022);
  // 舞台背景（北墙西侧）：红幕板 + 囍 + 对联条幅 + 小串灯
  {
    B.add(M.clothRed, boxG(5.2, 2.6, 0.08, 2.6, 1.3), 6.2, 1.9, 1.62);
    B.add(M.happiness, planeG(1.5, 1.5), 6.2, 2.1, 1.68);
    B.add(M.clothRed, boxG(0.42, 2.4, 0.05, 0.3, 1.6), 3.4, 1.7, 1.66);
    B.add(M.clothRed, boxG(0.42, 2.4, 0.05, 0.3, 1.6), 9.0, 1.7, 1.66);
    // 小平台
    B.add(M.wood, boxG(5.6, 0.22, 1.6, 3, 0.8), 6.2, 0.11, 2.4);
    cR(3.4, 1.6, 5.6, 1.6);
    // 串灯（自发光小球一排）
    for (let i = 0; i < 12; i++) {
      B.add(M.bulbWarm, new THREE.SphereGeometry(0.028, 6, 5), 3.8 + i * 0.42, 3.28 + Math.sin(i * 1.2) * 0.06, 1.62);
    }
  }
  // 音箱堆（西北角，伴奏声源）
  {
    B.add(M.plasticBlack, boxG(0.62, 0.9, 0.5, 1, 1), 3.0, 0.45, 2.2);
    B.add(M.plasticBlack, boxG(0.56, 0.72, 0.46, 1, 1), 3.0, 1.26, 2.22, 0.06);
    B.add(M.enamelGrey, boxG(0.8, 0.75, 0.55, 1, 1), 3.1, 0.375, 3.0);  // 功放柜
    B.add(M.plasticBlack, boxG(0.7, 0.08, 0.45, 1, 1), 3.1, 0.79, 3.0); // 调音台
  }
  // 圆桌 ×3（红布 + 桌裙 + 收场中的台面）
  const tableSpots = [[9, 5], [20, 4.2], [29, 5.6]];
  for (const [tx, tz] of tableSpots) {
    B.add(M.pleats, cylG(1.06, 1.06, 0.74, 20, 6, 1), tx, 0.37, tz);
    const top = new THREE.CylinderGeometry(1.12, 1.12, 0.045, 20);
    scaleUV(top, 2, 2);
    B.add(M.clothRed, top, tx, 0.765, tz);
    // 台面收场残局：碗碟堆、酒瓶、杯
    const n = 5 + Math.floor(rnd() * 4);
    for (let i = 0; i < n; i++) {
      const a = rnd() * Math.PI * 2, r0 = rr(0.2, 0.85);
      const px = tx + Math.cos(a) * r0, pz = tz + Math.sin(a) * r0;
      const kind = rnd();
      if (kind < 0.42) B.add(M.porcelain, cylG(0.075, 0.05, rr(0.03, 0.11), 10), px, 0.79 + 0.05, pz);
      else if (kind < 0.62) B.add(M.porcelain, cylG(0.1, 0.1, 0.022, 12), px, 0.8, pz);
      else if (kind < 0.82) B.add(M.chrome, cylG(0.028, 0.028, rr(0.08, 0.12), 8), px, 0.85, pz);
      else B.add(M.plasticBlack, cylG(0.038, 0.034, 0.26, 8), px, 0.9, pz); // 酒瓶
    }
    // 椅子（红椅套，收场：部分歪斜/离位）
    const chairs = 7 + Math.floor(rnd() * 2);
    for (let i = 0; i < chairs; i++) {
      const a = (i / chairs) * Math.PI * 2 + rr(-0.12, 0.12);
      const cd = rr(1.45, 1.8);
      const cx = tx + Math.cos(a) * cd, cz = tz + Math.sin(a) * cd;
      const face = a + Math.PI + rr(-0.5, 0.5);
      B.add(M.pleats, boxG(0.44, 0.47, 0.44, 1.4, 0.7), cx, 0.235, cz, -face);
      B.add(M.clothRed, boxG(0.44, 0.55, 0.06, 1.4, 0.8), cx + Math.cos(a) * 0.2, 0.74, cz + Math.sin(a) * 0.2, -face);
      cC(cx, cz, 0.26);
    }
  }
  // 备餐车（东侧，堆着折好的红桌布）
  {
    B.add(M.steelDull, boxG(1.5, 0.06, 0.9, 1.2, 0.8), 33.4, 0.86, 7.95);
    B.add(M.steelDull, boxG(1.5, 0.06, 0.9, 1.2, 0.8), 33.4, 0.36, 7.95);
    for (const [px, pz] of [[32.72, 7.55], [34.08, 7.55], [32.72, 8.35], [34.08, 8.35]]) {
      B.add(M.chrome, cylG(0.022, 0.022, 0.9, 8), px, 0.45, pz);
    }
    for (let i = 0; i < 4; i++) {
      B.add(M.clothRed, boxG(rr(0.9, 1.2), 0.12, rr(0.5, 0.7), 1.6, 0.5), 33.4 + rr(-0.1, 0.1), 0.95 + i * 0.12, 7.95 + rr(-0.08, 0.08), rr(-0.1, 0.1));
    }
  }
  // 靠墙叠椅 + 斜靠的折叠圆桌面（收场感）
  for (let i = 0; i < 3; i++) {
    B.add(M.pleats, boxG(0.46, 0.5, 0.46, 1.4, 0.7), 34.4, 0.25 + i * 0.42, 3.2 + i * 0.05, 0.12 * i);
    B.add(M.clothRed, boxG(0.46, 0.5, 0.06, 1.4, 0.7), 34.62, 0.62 + i * 0.42, 3.2, 0, 0, 0.5);
  }
  cR(34.0, 2.8, 1.2, 1.0);
  B.add(M.wood, cylG(0.9, 0.9, 0.05, 18), 34.6, 0.92, 5.4, 0, 0, Math.PI / 2 - 0.18);
  B.add(M.wood, cylG(0.9, 0.9, 0.05, 18), 34.52, 0.92, 5.6, 0, 0, Math.PI / 2 - 0.24);
  cR(34.1, 4.6, 1.3, 1.6);
  // 北墙窗（夜色 + 厚红帘，帘基本拉上）
  for (const wx of [14, 22, 30]) {
    B.add(M.plasticBlack, planeG(1.6, 1.8), wx, 2.5, 1.57);
    B.add(M.clothRed, boxG(1.1, 2.2, 0.14, 1.2, 1.4), wx - 0.9, 2.3, 1.68);
    B.add(M.clothRed, boxG(1.1, 2.2, 0.14, 1.2, 1.4), wx + 0.9, 2.3, 1.68);
    B.add(M.wood, cylG(0.03, 0.03, 2.6, 8), wx, 3.46, 1.7, 0, 0, Math.PI / 2);
  }

  // ============ A/B 双开弹簧门（常开，固定在 B 侧墙上）============
  for (const s of [-1, 1]) {
    const g = new THREE.Group();
    const leaf = new THREE.Mesh(boxG(0.95, 2.2, 0.05, 0.5, 1.1), M.wood);
    leaf.position.set(0.475 * s, 1.1, 0);
    const kick = new THREE.Mesh(boxG(0.95, 0.5, 0.06, 0.5, 0.3), M.steelDull);
    kick.position.set(0.475 * s, 0.28, 0);
    const window = new THREE.Mesh(new THREE.CircleGeometry(0.14, 14), M.plasticBlack);
    window.position.set(0.475 * s, 1.55, 0.031);
    g.add(leaf, kick, window);
    g.position.set(18 + 1.0 * s, 0, 10.12);
    g.rotation.y = s * Math.PI / 2.35;
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    scene.add(g);
  }

  // ============ B 走廊道具 ============
  srand(510033);
  // 西服务台（不锈钢台 + 柜体 + 台面物）
  const counter = (x0, len, z) => {
    B.add(M.enamelGreen, boxG(len, 0.82, 1.24, len / 1.6, 0.8), x0 + len / 2, 0.41, z + 0.65);
    B.add(M.steel, boxG(len + 0.06, 0.05, 1.3, len / 1.6, 1), x0 + len / 2, 0.845, z + 0.65);
    B.add(M.steelDull, boxG(len, 0.04, 1.1, len / 1.6, 1), x0 + len / 2, 0.18, z + 0.65);
  };
  counter(4, 11, 10.4);
  counter(21.5, 11, 10.4);
  // 台面物：暖瓶、碗堆、托盘、保温桶
  const bowlsStack = (x, z, n) => { for (let i = 0; i < n; i++) B.add(M.porcelain, cylG(0.085, 0.055, 0.05, 10), x, 0.895 + i * 0.038, z); };
  for (const [bx, bz] of [[5.2, 11], [5.5, 11.15], [5.85, 10.95], [10.2, 11.05], [10.55, 11.1], [24.5, 11], [24.85, 11.1]]) bowlsStack(bx, bz, 4 + Math.floor(rnd() * 5));
  for (const [tx2, tz2] of [[7.2, 11.05], [13.4, 11.0], [23, 11.05], [27.8, 11.1]]) {
    B.add(M.thermos, cylG(0.085, 0.095, 0.34, 10, 1, 1), tx2, 1.04, tz2);
    B.add(M.plasticBeige, cylG(0.05, 0.06, 0.05, 8), tx2, 1.23, tz2);
  }
  for (const [px2, pz2] of [[8.6, 11.05], [26.2, 11.05]]) {
    B.add(M.steel, boxG(0.5, 0.03, 0.35, 0.5, 0.3), px2, 0.885, pz2, rr(-0.2, 0.2));
  }
  for (const [px3, pz3] of [[30.2, 11.1], [31.4, 11.05]]) {  // 保温桶
    B.add(M.steelDull, cylG(0.19, 0.19, 0.42, 12), px3, 1.08, pz3);
    B.add(M.steelDull, cylG(0.2, 0.05, 0.06, 12), px3, 1.33, pz3);
  }
  // 墙上：菜单、值班表、通知、后场牌、配电箱、电缆
  B.add(M.menu, planeG(0.62, 0.94), 6.4, 1.7, 10.16);
  B.add(M.notice1, planeG(0.56, 0.42), 12.2, 1.66, 10.16);
  B.add(M.notice2, planeG(0.56, 0.42), 23.4, 1.62, 10.16);
  B.add(M.signBack, planeG(0.6, 0.3), 18, 2.42, 10.16);
  B.add(M.enamelGrey, boxG(0.5, 0.7, 0.16, 0.5, 0.6), 33.8, 1.7, 10.2);
  B.add(M.rubber, boxG(8, 0.05, 0.04, 6, 0.2), 29.8, 2.62, 10.14);
  B.add(M.rubber, boxG(0.05, 1.2, 0.04, 0.2, 1), 33.8, 2.15, 10.14);
  // 灭火器
  B.add(M.lantern, cylG(0.08, 0.08, 0.5, 10), 2.35, 0.6, 11.5);
  B.add(M.plasticBlack, cylG(0.02, 0.02, 0.18, 6), 2.35, 0.9, 11.5, 0, 0, 0.5);
  // 器材架 ×2（军绿角钢架，南脚立在巷沿）
  const rack = (x0, len) => {
    for (const lz of [14.05, 14.85]) {
      for (let px4 = x0 + 0.1; px4 <= x0 + len; px4 += (len - 0.2) / 3) {
        B.add(M.enamelGreen, boxG(0.06, 1.9, 0.06, 0.2, 1.6), px4, 0.95, lz);
      }
    }
    for (const sy of [0.32, 0.95, 1.58]) {
      B.add(M.enamelGreen, boxG(len, 0.05, 0.95, len / 1.6, 0.8), x0 + len / 2, sy, 14.45);
    }
    // 架上内容：纸箱、白布卷、塑料筐、捆好的红桌布
    let px5 = x0 + 0.45;
    while (px5 < x0 + len - 0.4) {
      const w = rr(0.5, 0.85);
      const kind = rnd();
      const sy = [0.32, 0.95, 1.58][Math.floor(rnd() * 3)] + 0.028;
      if (kind < 0.4) B.add(rnd() < 0.5 ? M.cardboard1 : M.cardboard2, boxG(w, rr(0.3, 0.5), 0.7, 1, 1), px5 + w / 2, sy + 0.18, 14.45, rr(-0.06, 0.06));
      else if (kind < 0.65) B.add(M.clothRed, boxG(w, 0.24, 0.6, 1, 0.4), px5 + w / 2, sy + 0.12, 14.45, rr(-0.08, 0.08));
      else if (kind < 0.85) B.add(M.plasticBeige, boxG(w * 0.8, 0.26, 0.55, 1, 0.4), px5 + w / 2, sy + 0.13, 14.45, rr(-0.06, 0.06));
      else B.add(M.porcelain, cylG(0.16, 0.13, 0.3, 10), px5 + w / 2, sy + 0.15, 14.45);
      px5 += w + rr(0.08, 0.3);
    }
  };
  rack(6, 6); rack(14, 7);
  // 巷内：西端停一辆平板推车（占位，路线之外）
  {
    B.add(M.steelDull, boxG(1.6, 0.08, 0.75, 1.4, 0.7), 5.2, -0.35 + 0.36, 16.4);
    for (const [wx2, wz2] of [[4.5, 16.1], [5.9, 16.1], [4.5, 16.7], [5.9, 16.7]]) {
      B.add(M.rubber, cylG(0.1, 0.1, 0.05, 10), wx2, -0.35 + 0.1, wz2, 0, 0, Math.PI / 2);
    }
    B.add(M.cardboard1, boxG(0.7, 0.5, 0.55, 1, 1), 5.0, -0.35 + 0.65, 16.4, 0.2);
    B.add(M.enamelGreen, cylG(0.04, 0.04, 1.0, 8), 5.2, -0.35 + 0.9, 16.3, 0, 0, 1.2);
    cR(4.3, 15.9, 1.8, 1.0);
  }
  // 巷沿黄黑警示条（旧、磨损——正常安全设施，不是异常标记）
  {
    const g = boxG(17.6, 0.02, 0.1, 8, 0.1);
    B.add(M.enamelGrey, g, 12.3, 0.012, 15.02);
  }
  // 天花电缆桥架 + 管线
  B.add(M.enamelGrey, boxG(30, 0.06, 0.3, 15, 0.3), 18.5, 2.86, 13.2);
  B.add(M.rubber, cylG(0.035, 0.035, 30, 8, 8, 1), 18.5, 2.92, 13.55, 0, 0, Math.PI / 2);
  B.add(M.rubber, cylG(0.022, 0.022, 30, 8, 8, 1), 18.5, 2.9, 12.9, 0, 0, Math.PI / 2);

  // ============ C 录像/广播室 ============
  srand(510044);
  {
    // 老木写字台（卡座站）
    B.add(M.woodDark, boxG(2.4, 0.06, 1.1, 2, 1), 4.6, 0.76, 19.75);
    B.add(M.woodDark, boxG(0.55, 0.72, 1.0, 0.5, 0.7), 3.6, 0.36, 19.75);
    B.add(M.woodDark, boxG(0.55, 0.72, 1.0, 0.5, 0.7), 5.6, 0.36, 19.75);
    // 卡座（面板朝东，玩家从门进来看到正面）
    B.add(M.plasticBlack, boxG(0.62, 0.16, 0.42, 1, 1), 4.35, 0.87, 19.7);
    B.add(M.deckFace, planeG(0.6, 0.15), 4.35, 0.87, 19.92);
    // CRT 监视器（在卡座上方的架子上，屏幕朝东南门口）
    const crtGroup = new THREE.Group();
    const shell = new THREE.Mesh(boxG(0.52, 0.42, 0.46, 1, 1), M.crtShell);
    const screen = new THREE.Mesh(planeG(0.38, 0.29), M.crtScreen);
    screen.position.set(0, 0.01, 0.235);
    shell.castShadow = true;
    crtGroup.add(shell, screen);
    crtGroup.position.set(4.35, 1.32, 19.7);
    crtGroup.rotation.y = 0.5;
    scene.add(crtGroup);
    dynamics.crt = { group: crtGroup, screen };
    // 台灯（暖光池）
    B.add(M.enamelGrey, cylG(0.09, 0.13, 0.03, 10), 6.1, 0.81, 19.5);
    B.add(M.enamelGrey, cylG(0.015, 0.015, 0.5, 6), 6.05, 1.05, 19.55, 0, 0, 0.35);
    B.add(M.enamelGrey, cylG(0.11, 0.16, 0.14, 10), 5.9, 1.32, 19.7, 0, 0.4, 0.9);
    B.add(M.bulbWarm, new THREE.SphereGeometry(0.045, 8, 6), 5.86, 1.28, 19.74);
    // 桌面杂物：磁带堆、纸、电话
    for (let i = 0; i < 3; i++) B.add(M.tapeLabel, boxG(0.19, 0.028, 0.11, 1, 1), 5.3 + rr(-0.05, 0.05), 0.805 + i * 0.03, 20.1 + rr(-0.03, 0.03), rr(-0.3, 0.3));
    B.add(M.menu, planeG(0.3, 0.21), 4.0, 0.795, 20.2, 0, -Math.PI / 2, 0.3);
    B.add(M.plasticBlack, boxG(0.22, 0.09, 0.16, 1, 1), 3.6, 0.84, 19.4, 0.3);
    // 木椅
    B.add(M.woodDark, boxG(0.42, 0.05, 0.4, 0.4, 0.4), 5.1, 0.45, 21.0, 0.4);
    B.add(M.woodDark, boxG(0.42, 0.5, 0.05, 0.4, 0.4), 5.28, 0.72, 21.16, 0.4);
    for (const [lx, lz] of [[4.92, 20.84], [5.3, 20.88], [4.9, 21.2], [5.28, 21.24]]) B.add(M.woodDark, boxG(0.04, 0.45, 0.04, 0.1, 0.4), lx, 0.22, lz);
    cC(5.1, 21.0, 0.3);
    // 磁带架（贴 tapeSpines 的高架）
    B.add(M.woodDark, boxG(0.9, 2.2, 4.2, 0.9, 2), 12.05, 1.1, 21.3);
    B.add(M.tapeSpines, planeG(4.2, 2.0, 2, 1), 11.58, 1.12, 21.3, 0, -Math.PI / 2);
    // 广播角：壁挂号角喇叭 + 麦克风
    B.add(M.enamelGrey, cylG(0.02, 0.16, 0.3, 10), 2.4, 2.3, 22.5, 0, 0, -1.2);
    B.add(M.plasticBlack, cylG(0.02, 0.02, 0.35, 6), 4.0, 0.95, 19.3, 0, 0, 0.2);
    B.add(M.plasticBlack, new THREE.SphereGeometry(0.035, 8, 6), 4.06, 1.12, 19.28);
    // 挂钟（停在 19:47——与录像时间码一致，媒介前夜的小错位）
    B.add(M.plasticBeige, cylG(0.16, 0.16, 0.04, 16), 4.6, 2.2, 18.0, Math.PI / 2, 0, 0);
    B.add(M.plasticBlack, boxG(0.015, 0.1, 0.01, 0.1, 0.1), 4.6, 2.23, 17.975, 0, 0, 2.4);
    B.add(M.plasticBlack, boxG(0.015, 0.07, 0.01, 0.1, 0.1), 4.62, 2.2, 17.975, 0, 0, -1.05);
    // 纸箱堆
    B.add(M.cardboard2, boxG(0.7, 0.5, 0.6, 1, 1), 10.2, 0.25, 24.6, 0.2);
    B.add(M.cardboard1, boxG(0.6, 0.45, 0.55, 1, 1), 10.25, 0.72, 24.6, -0.1);
    cR(9.8, 24.2, 1.0, 0.9);
  }

  // ============ E 洗涤/器材间 ============
  srand(510055);
  {
    // 洗涤台（干的——你听不到一滴水）
    B.add(M.steelDull, boxG(5.5, 0.85, 1.2, 4, 0.8), 17.25, 0.425, 24.2);
    B.add(M.steel, boxG(5.56, 0.05, 1.26, 4, 1), 17.25, 0.875, 24.2);
    for (const bx2 of [15.6, 17.25, 18.9]) {
      B.add(M.plasticBlack, boxG(1.0, 0.02, 0.7, 1, 0.7), bx2, 0.87, 24.15);
      B.add(M.chrome, cylG(0.018, 0.018, 0.3, 8), bx2 - 0.2, 1.05, 24.55, 0, 0, 0);
      B.add(M.chrome, cylG(0.016, 0.016, 0.22, 8), bx2 - 0.2, 1.16, 24.45, Math.PI / 2.4, 0, 0);
    }
    // 沥水架：斜靠的托盘与蒸屉
    B.add(M.enamelGreen, boxG(1.0, 1.7, 3.4, 1, 1.4), 22.9, 0.85, 21.1);
    for (let i = 0; i < 6; i++) {
      B.add(M.steel, boxG(0.02, 0.5, 0.36, 0.1, 0.4), 22.5, 0.6 + (i % 3) * 0.5, 19.8 + i * 0.5, 0, 0, 0.18);
    }
    // 器材篮 + 倒扣桶 + 拖把（干）
    B.add(M.plasticBeige, boxG(1.5, 0.5, 1.1, 1.4, 0.5), 15.7, 0.25, 20.0);
    B.add(M.clothRed, boxG(1.2, 0.2, 0.8, 1, 0.3), 15.7, 0.58, 20.0, 0.1);
    for (const [ux, uz] of [[20.8, 24.0], [21.4, 24.15], [21.1, 23.5]]) {
      B.add(M.plasticBeige, cylG(0.16, 0.13, 0.3, 10), ux, 0.15, uz);
    }
    B.add(M.wood, cylG(0.02, 0.02, 1.5, 6), 13.85, 0.8, 23.8, 0, 0, 0.22);
    B.add(M.clothRed, boxG(0.12, 0.3, 0.1, 0.2, 0.3), 13.98, 0.16, 23.86);
    // 毛巾杆 + 挂布
    B.add(M.chrome, cylG(0.015, 0.015, 1.4, 8), 17.2, 1.5, 24.9, 0, 0, Math.PI / 2);
    B.add(M.porcelain, boxG(0.4, 0.5, 0.02, 0.4, 0.5), 16.8, 1.26, 24.88);
    B.add(M.clothRed, boxG(0.36, 0.44, 0.02, 0.3, 0.4), 17.6, 1.29, 24.88);
    // 墙面搁板 + 皂盒（无水渍）
    B.add(M.wood, boxG(2.4, 0.04, 0.3, 2, 0.3), 20.5, 1.7, 25.32);
    for (let i = 0; i < 4; i++) B.add(M.plasticBeige, boxG(0.24, 0.18, 0.16, 0.3, 0.2), 19.6 + i * 0.55, 1.82, 25.32);
  }

  // ============ D 卸货口 ============
  srand(510066);
  {
    // 卷帘门（南墙，下缘留 0.55m 缝，外面是冷光）
    for (let i = 0; i < 11; i++) {
      B.add(M.enamelGrey, boxG(5, 0.26, 0.06, 4, 0.2), 31, 0.72 + i * 0.27, 25.44);
    }
    B.add(M.steelDull, boxG(5.2, 0.3, 0.3, 4, 0.3), 31, 3.4, 25.4);
    // 缝里的冷光板（外部路灯/月光，不是水下光）
    const slit = new THREE.Mesh(planeG(4.9, 0.5), new THREE.MeshBasicMaterial({ color: 0x8ea89a }));
    slit.position.set(31, 0.3, 25.52);
    slit.rotation.y = Math.PI;
    scene.add(slit);
    // 卸货台
    B.add(M.concreteWall, boxG(4.4, 0.55, 1.0, 4, 0.5), 33.2, 0.275, 19.1);
    B.add(M.steelDull, boxG(4.4, 0.05, 0.12, 4, 0.1), 33.2, 0.575, 18.66);
    // 木托板 + 纸箱垛
    B.add(M.wood, boxG(1.2, 0.12, 1.0, 1.2, 1), 26.6, 0.06, 23.8);
    const crateAt = (x, z, n) => {
      for (let i = 0; i < n; i++) {
        B.add(i % 2 ? M.cardboard1 : M.cardboard2, boxG(rr(0.62, 0.8), 0.52, rr(0.6, 0.72), 1, 1), x + rr(-0.06, 0.06), 0.26 + i * 0.53, z + rr(-0.06, 0.06), rr(-0.15, 0.15));
      }
    };
    crateAt(26.6, 20.9, 3); crateAt(28.6, 23.2, 2); crateAt(33.2, 21.4, 3); crateAt(31.6, 23.9, 1);
    // 磅秤（2001 标配）
    B.add(M.enamelGreen, boxG(0.6, 0.12, 0.8, 0.6, 0.7), 25.4, 0.06, 19.0);
    B.add(M.enamelGreen, boxG(0.1, 1.15, 0.1, 0.2, 1), 25.15, 0.65, 18.75);
    B.add(M.plasticBeige, boxG(0.34, 0.24, 0.08, 0.4, 0.2), 25.15, 1.3, 18.8);
    cR(25.0, 18.6, 0.8, 1.2);
    // 手推车 + 缆绳圈
    B.add(M.steelDull, boxG(0.55, 1.2, 0.06, 0.5, 1), 34.9, 0.62, 22.6, 0, 0, -0.3);
    B.add(M.rubber, cylG(0.14, 0.14, 0.06, 10), 34.78, 0.15, 22.9, 0, 0, Math.PI / 2);
    B.add(M.rubber, new THREE.TorusGeometry(0.3, 0.05, 8, 16), 25.6, 0.06, 24.8, Math.PI / 2);
    // 应急双头灯（灭着）+ 出口方向牌
    B.add(M.enamelGrey, boxG(0.3, 0.1, 0.1, 0.3, 0.1), 29.5, 3.1, 18.05);
    B.add(M.tubeOff, new THREE.SphereGeometry(0.045, 8, 6), 29.35, 3.02, 18.08);
    B.add(M.tubeOff, new THREE.SphereGeometry(0.045, 8, 6), 29.65, 3.02, 18.08);
  }

  // ============ 受压材料证据（柜脚/门框下部/巷底沉积）============
  {
    // 器材架南脚：压痕贴花（漆面压白微裂 + 干沉积）
    for (const m of PRESS_MARKS) {
      const g = planeG(0.5, 0.32);
      B.add(M.pressMark, g, m.x, floorHeightAt(m.x, m.z) + 0.16, m.z < 17 ? 15.06 : 17.24);
    }
    // C/E 门框下段：受压变形色斑（贴在门框脚）
    for (const dx of [8.1, 9.5, 18.1, 19.5]) {
      B.add(M.pressMark, planeG(0.22, 0.4), dx, -0.35 + 0.2, 17.24);
    }
    // 巷底沉积带（干燥压实，靠南墙基）
    const g2 = planeG(18.6, 0.5, 9, 0.5);
    g2.rotateX(-Math.PI / 2);
    B.add(M.sediment, g2, 12.3, -0.345, 17.02);
  }

  // ============ 灯具几何 + 光源 ============
  const lightsGroup = new THREE.Group();
  scene.add(lightsGroup);
  const addPoint = (color, int, dist, x, y, z, { shadow = false, decay = 1.8 } = {}) => {
    const L = new THREE.PointLight(color, int, dist, decay);
    L.position.set(x, y, z);
    if (shadow) {
      L.castShadow = true;
      L.shadow.mapSize.set(512, 512);
      L.shadow.bias = -0.006;
      L.shadow.normalBias = 0.05;
      L.shadow.camera.near = 0.12;
    }
    lightsGroup.add(L);
    return L;
  };

  // A 厅吊灯 ×3（暖，收场调暗，东侧那盏半死）
  const pendant = (x, z, int, shadow) => {
    NB.add(M.rubber, cylG(0.012, 0.012, 0.7, 6), x, 3.85, z);
    NB.add(M.enamelGrey, cylG(0.06, 0.24, 0.2, 12), x, 3.42, z);
    NB.add(M.bulbWarm, new THREE.SphereGeometry(0.05, 8, 6), x, 3.34, z);
    return addPoint(0xffb265, int, 12, x, 3.3, z, { shadow });
  };
  pendant(9, 4.8, 60, true);
  pendant(20, 4.4, 55, true);
  const deadPendant = pendant(29, 5.2, 20, false);
  deadPendant.color.setHex(0xff9d55);
  // 舞台红纸灯笼余光
  addPoint(0xd94a2c, 7, 6.5, 6.2, 2.6, 2.4);
  B.add(M.lantern, new THREE.SphereGeometry(0.14, 10, 8), 3.6, 3.0, 1.9);
  B.add(M.lantern, new THREE.SphereGeometry(0.14, 10, 8), 8.8, 3.0, 1.9);
  // A/B 墙壁灯 ×4（贝壳形奶罩壁灯，2001 宴会厅标配）
  for (const sx2 of [6, 14, 22, 30]) {
    NB.add(M.bulbWarm, new THREE.SphereGeometry(0.055, 8, 6), sx2, 2.6, 9.28);
    NB.add(M.enamelGrey, cylG(0.11, 0.16, 0.18, 10), sx2, 2.52, 9.34, 0, 0, 0);
    addPoint(0xffc180, 11, 6.5, sx2, 2.62, 9.12);
  }
  // 红横幅（横跨 A/B 墙上方，面向宴会厅）
  B.add(M.banner, planeG(9.5, 0.7, 1, 1), 18, 3.5, 9.38, 0, Math.PI);

  // B 走廊日光灯（两根好、一根闪、巷上两根死/垂危）
  const tube = (x, z, y, state) => {
    NB.add(M.fixture, boxG(1.3, 0.06, 0.14, 1.2, 0.1), x, y + 0.05, z);
    const mat = state === "off" ? M.tubeOff : (state === "flicker" || state === "dying" ? M.tubeOn.clone() : M.tubeOn);
    const t = new THREE.Mesh(cylG(0.02, 0.02, 1.2, 8), mat);
    t.position.set(x, y, z);
    t.rotation.z = Math.PI / 2;
    scene.add(t);
    let L = null;
    if (state !== "off") {
      L = addPoint(0xcfe3c9, state === "dying" ? 10 : 34, 13, x, y - 0.1, z, { shadow: state === "on-shadow" });
    }
    if (state === "flicker" || state === "dying") dynamics.flickers.push({ mesh: t, light: L, base: L.intensity, mode: state, t: rnd() * 10 });
    return L;
  };
  tube(6.5, 12.1, 2.84, "on");
  tube(13, 12.1, 2.84, "on-shadow");
  tube(19.5, 12.1, 2.84, "flicker");
  tube(26, 12.1, 2.84, "on-shadow");
  tube(10, 16.2, 2.84, "off");     // 巷上的死灯管
  tube(16, 16.2, 2.84, "dying");   // 垂危：暗、偶尔喘
  tube(31.5, 16.2, 2.84, "on");

  // 安全出口灯（A/B 门上方，B 侧）
  {
    const sign = new THREE.Mesh(planeG(0.52, 0.2), M.exit);
    sign.position.set(18, 2.5, 10.22);
    scene.add(sign);
    addPoint(0x49c96e, 2.6, 4.0, 18, 2.4, 10.5);
  }

  // C：台灯暖池 + CRT 荧光
  addPoint(0xffc37c, 20, 7.5, 5.9, 1.6, 19.9, { shadow: true });
  dynamics.lights.crtGlow = addPoint(0x9fb4a2, 2.6, 4.0, 4.8, 1.45, 20.2);
  // C 天花死灯管
  tube(8, 21.5, 2.64, "off");

  // E：中央单管
  tube(18.8, 21.5, 2.64, "on-shadow");

  // D：卷帘缝冷光（低角度扫进来）+ 内门口绿应急余光
  {
    const spot = new THREE.SpotLight(0xc4d8cc, 110, 18, 0.62, 0.6, 1.4);
    spot.position.set(31, 0.42, 26.6);
    spot.target.position.set(29.4, 0.8, 20.5);
    spot.castShadow = true;
    spot.shadow.mapSize.set(1024, 1024);
    spot.shadow.bias = -0.005;
    spot.shadow.normalBias = 0.04;
    scene.add(spot, spot.target);
    addPoint(0x74b083, 2.4, 5.0, 29.5, 2.9, 17.9);
  }

  // 环境底光（很低，只防死黑）
  const hemi = new THREE.HemisphereLight(0x403a30, 0x191512, 1.0);
  scene.add(hemi);

  // ============ A 厅里的人（收场宾客与员工——共同体仍在维持礼数）============
  const figure = (opts) => {
    const g = new THREE.Group();
    const suit = new THREE.MeshStandardMaterial({ color: opts.suit, roughness: 0.9 });
    const torso = new THREE.Mesh(boxG(0.4, 0.55, 0.24, 0.4, 0.5), suit);
    torso.position.y = opts.seated ? 0.72 : 1.12;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), M.skin);
    head.position.y = opts.seated ? 1.12 : 1.52;
    head.scale.set(0.9, 1.1, 0.95);
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.115, 10, 8), M.hair);
    hair.position.set(0, (opts.seated ? 1.12 : 1.52) + 0.025, -0.012);
    hair.scale.set(0.92, 0.95, 0.92);
    g.add(torso, head, hair);
    if (opts.seated) {
      const lap = new THREE.Mesh(boxG(0.4, 0.16, 0.4, 0.4, 0.2), suit);
      lap.position.set(0, 0.42, 0.1);
      g.add(lap);
    } else {
      const legs = new THREE.Mesh(boxG(0.34, 0.8, 0.22, 0.3, 0.7), M.trousers);
      legs.position.y = 0.42;
      g.add(legs);
    }
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    return g;
  };
  {
    const g1 = figure({ suit: 0x2c2c30, seated: true });
    g1.position.set(20.9, 0.05, 3.3); g1.rotation.y = Math.PI * 0.9;
    const g2 = figure({ suit: 0x6e1f24, seated: true });
    g2.position.set(19.2, 0.05, 3.5); g2.rotation.y = Math.PI * 1.15;
    const g3 = figure({ suit: 0x3a4148, seated: false });   // 收杯子的员工
    g3.position.set(28.2, 0, 4.6); g3.rotation.y = -0.6;
    scene.add(g1, g2, g3);
    dynamics.guests.push({ g: g1, phase: 0, amp: 0.02 }, { g: g2, phase: 2.1, amp: 0.016 }, { g: g3, phase: 4.2, amp: 0.05, bend: true });
    cC(20.9, 3.3, 0.3); cC(19.2, 3.5, 0.3); cC(28.2, 4.6, 0.3);
  }

  // ============ 收尾 ============
  B.flush(scene);
  NB.flush(scene, { shadows: false });

  // 雾与背景（干燥室内的空气密度，不是水下）
  scene.background = new THREE.Color(0x0a0908);
  scene.fog = new THREE.FogExp2(0x0e0c0a, 0.032);
  scene.environment = T.env;

  return { colliders, dynamics };
}
