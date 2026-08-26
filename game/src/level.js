// 关卡构建 —— 南方大酒店（1F 环线）+ 员工连廊 + 海洋馆玻璃廊
// 空间基准：05_DESIGN_V2/03_世界与空间.md；美术基准：08_美术方向锁定.md 与两批原型图
import * as THREE from 'three';
import * as TX from './textures.js';

export function buildLevel(scene, renderer) {
  const L = {
    colliders: [],        // {minX,minZ,maxX,maxZ}
    regions: [],          // {name, box, mat}
    lights: { hall: [], corridor: [], lobby: [], aqua: [], connector: [] },
    screens: [],          // CRT 定义
    future: {},           // 预现层组（只在 CRT 渲染时可见）
    dyn: {},              // 动态对象（吊灯、闸门、裂纹层…）
    mats: {},
  };

  const envMap = TX.makeEnvMap(renderer);
  scene.environment = envMap;

  // ---------- 材质 ----------
  const terr = TX.terrazzo();
  const M = L.mats;
  M.terrazzo = new THREE.MeshStandardMaterial({ ...terr, envMapIntensity: 0.5 });
  M.terrazzoDark = new THREE.MeshStandardMaterial({ ...terr, color: 0x8f8579, envMapIntensity: 0.3 });
  const til = TX.tiles();
  M.tiles = new THREE.MeshStandardMaterial({ ...til, envMapIntensity: 0.6 });
  M.tiles.userData.tileEvery = 1.3;
  const pla = TX.plaster();
  M.plaster = new THREE.MeshStandardMaterial({ ...pla });
  M.plaster.userData.tileEvery = 3.6;
  const plaRed = TX.plaster([158, 96, 84], 0.9);
  M.plasterHall = new THREE.MeshStandardMaterial({ ...plaRed });
  M.plasterHall.userData.tileEvery = 4.2;
  const vel = TX.velvet();
  M.velvet = new THREE.MeshStandardMaterial({ ...vel });
  const velD = TX.velvet(1);
  M.velvetDark = new THREE.MeshStandardMaterial({ ...velD });
  const tcl = TX.tablecloth();
  M.tablecloth = new THREE.MeshStandardMaterial({ ...tcl });
  const gf = TX.goldFoil();
  M.goldFoil = new THREE.MeshStandardMaterial({ ...gf, envMapIntensity: 1.5 });
  const car = TX.carpet();
  M.carpet = new THREE.MeshStandardMaterial({ ...car });
  M.wainscot = new THREE.MeshStandardMaterial({ ...TX.greenWainscot() });
  const wd = TX.wood();
  M.wood = new THREE.MeshStandardMaterial({ ...wd, envMapIntensity: 0.5 });
  const con = TX.concrete();
  M.concrete = new THREE.MeshStandardMaterial({ ...con });
  M.concrete.userData.tileEvery = 3.4;
  M.concreteWet = new THREE.MeshStandardMaterial({ ...con, color: 0x565650, roughness: 0.24, envMapIntensity: 1.2 });
  M.gold = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.9, roughness: 0.3, envMapIntensity: 1.4 });
  M.steel = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.95, roughness: 0.22, envMapIntensity: 1.6 });
  M.steelDark = new THREE.MeshStandardMaterial({ color: 0x3c4044, metalness: 0.8, roughness: 0.5 });
  M.black = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.8 });
  M.white = new THREE.MeshStandardMaterial({ color: 0xd8d4c8, roughness: 0.85 });
  M.ceiling = new THREE.MeshStandardMaterial({ color: 0x5e564c, roughness: 0.95 });
  M.ceilingHall = new THREE.MeshStandardMaterial({ color: 0x4a3230, roughness: 0.95 });
  M.glassSea = new THREE.MeshStandardMaterial({
    map: TX.seaWater(), roughness: 0.05, metalness: 0.3,
    envMapIntensity: 2.0, emissive: 0x0a3038, emissiveIntensity: 0.55,
  });
  M.sediment = new THREE.MeshStandardMaterial({ ...TX.sediment() });
  M.porcelain = new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.15, envMapIntensity: 1.2 });
  M.bottleGreen = new THREE.MeshStandardMaterial({ color: 0x1a4a2a, roughness: 0.05, metalness: 0.1, envMapIntensity: 1.8 });
  M.calcite = new THREE.MeshStandardMaterial({ color: 0xd9d2be, roughness: 0.65 });

  // ---------- 工具 ----------
  const box = (w, h, d, mat, x, y, z, opts = {}) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    if (opts.ry) m.rotation.y = opts.ry;
    if (opts.rx) m.rotation.x = opts.rx;
    m.castShadow = !!opts.cast; m.receiveShadow = opts.recv !== false;
    scene.add(m);
    if (opts.collide) L.colliders.push({ minX: x - w / 2 - 0.05, minZ: z - d / 2 - 0.05, maxX: x + w / 2 + 0.05, maxZ: z + d / 2 + 0.05 });
    return m;
  };
  const plane = (w, h, mat, x, y, z, ry = 0, rx = 0) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z); m.rotation.y = ry; m.rotation.x = rx;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };
  // 地面按尺寸平铺
  const floorMat = (base, w, h, per = 2.6) => {
    const m = base.clone();
    for (const ch of ['map', 'normalMap', 'roughnessMap']) {
      if (m[ch]) { m[ch] = m[ch].clone(); m[ch].needsUpdate = true; m[ch].repeat.set(w / per, h / per); }
    }
    return m;
  };
  const collide = (x1, z1, x2, z2) => L.colliders.push({ minX: Math.min(x1, x2), minZ: Math.min(z1, z2), maxX: Math.max(x1, x2), maxZ: Math.max(z1, z2) });

  // 按墙面尺寸平铺贴图（避免长墙 UV 拉伸）
  const tiledMat = (mat, w, h) => {
    const per = mat.userData.tileEvery;
    if (!per) return mat;
    const key = `${mat.uuid}_${(w / per).toFixed(1)}_${(h / per).toFixed(1)}`;
    tiledMat.cache = tiledMat.cache || {};
    if (tiledMat.cache[key]) return tiledMat.cache[key];
    const m = mat.clone();
    for (const ch of ['map', 'normalMap', 'roughnessMap']) {
      if (m[ch]) { m[ch] = m[ch].clone(); m[ch].needsUpdate = true; m[ch].repeat.set(Math.max(1, w / per), Math.max(0.6, h / per)); }
    }
    tiledMat.cache[key] = m;
    return m;
  };

  // 带门洞的墙（沿 X 或 Z）
  function wallX(z, x1, x2, h, mat, gaps = [], y0 = 0, thick = 0.3) {
    let segs = [[x1, x2]];
    for (const [g1, g2] of gaps) {
      const out = [];
      for (const [a, b] of segs) {
        if (g2 <= a || g1 >= b) { out.push([a, b]); continue; }
        if (g1 > a) out.push([a, g1]);
        if (g2 < b) out.push([g2, b]);
      }
      segs = out;
    }
    for (const [a, b] of segs) box(b - a, h, thick, tiledMat(mat, b - a, h), (a + b) / 2, y0 + h / 2, z, { collide: true });
    // 门楣
    for (const [g1, g2] of gaps) box(g2 - g1, h - 2.3, thick, tiledMat(mat, g2 - g1, h - 2.3), (g1 + g2) / 2, y0 + 2.3 + (h - 2.3) / 2, z);
  }
  function wallZ(x, z1, z2, h, mat, gaps = [], y0 = 0, thick = 0.3) {
    let segs = [[z1, z2]];
    for (const [g1, g2] of gaps) {
      const out = [];
      for (const [a, b] of segs) {
        if (g2 <= a || g1 >= b) { out.push([a, b]); continue; }
        if (g1 > a) out.push([a, g1]);
        if (g2 < b) out.push([g2, b]);
      }
      segs = out;
    }
    for (const [a, b] of segs) box(thick, h, b - a, tiledMat(mat, b - a, h), x, y0 + h / 2, (a + b) / 2, { collide: true });
    for (const [g1, g2] of gaps) box(thick, h - 2.3, g2 - g1, tiledMat(mat, g2 - g1, h - 2.3), x, y0 + 2.3 + (h - 2.3) / 2, (g1 + g2) / 2);
  }

  const pointLight = (color, intensity, dist, x, y, z, group, cast = false) => {
    const l = new THREE.PointLight(color, intensity, dist, 1.8);
    l.position.set(x, y, z);
    if (cast) { l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.004; }
    scene.add(l);
    l.userData.base = intensity;
    L.lights[group].push(l);
    return l;
  };

  // ============================================================
  // 1F 宴会厅  x[-15,15] z[-20,0] 高7
  // ============================================================
  plane(30, 20, floorMat(M.terrazzo, 30, 20), 0, 0, -10, 0, -Math.PI / 2).receiveShadow = true;
  plane(30, 20, M.ceilingHall, 0, 7, -10, 0, Math.PI / 2);
  // 走道红毯
  const aisle = plane(4.2, 17, M.carpet, 0, 0.02, -8.5, 0, -Math.PI / 2);
  aisle.material = M.carpet;
  wallX(-20, -15, 15, 7, M.plasterHall, [[-8, 8]]);      // 北墙（舞台后墙，大开口放幕布）
  wallX(0, -15, 15, 7, M.plasterHall, [[-1.8, 1.8]]);    // 南墙 主入口（终局开启）
  wallZ(-15, -20, 0, 7, M.plasterHall, [[-7.6, -4.4]]);  // 西墙 连廊门
  wallZ(15, -20, 0, 7, M.plasterHall, [[-7.6, -4.4]]);   // 东墙 服务走廊门
  // 南门（双开板式木门 + 金线嵌板，终局前关闭）
  const doorS = new THREE.Group();
  const mkDoorLeaf = (x) => {
    const leaf = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.7, 3.4, 0.12), M.wood);
    leaf.add(body);
    // 双嵌板 + 金线压边
    for (const [py, ph] of [[0.9, 1.35], [-0.75, 1.5]]) {
      const panel = new THREE.Mesh(new THREE.BoxGeometry(1.3, ph, 0.05), M.wood);
      panel.position.set(0, py, 0.06);
      leaf.add(panel);
      const trim = new THREE.Mesh(new THREE.BoxGeometry(1.38, ph + 0.08, 0.02), M.goldFoil);
      trim.position.set(0, py, 0.045);
      leaf.add(trim);
    }
    // 金色长拉手
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.75, 8), M.gold);
    handle.position.set(x < 0 ? 0.66 : -0.66, 0.05, 0.14);
    leaf.add(handle);
    // 门上红纸「囍」
    const xi = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.MeshStandardMaterial({ map: TX.redPaper(), roughness: 0.85 }));
    xi.position.set(0, 1.55, 0.09); xi.rotation.z = 0.06 * (x < 0 ? 1 : -1);
    leaf.add(xi);
    leaf.position.set(x, 1.7, 0);
    scene.add(leaf);
    return leaf;
  };
  const dL = mkDoorLeaf(-0.85);
  const dR = mkDoorLeaf(0.85);
  // 门框 + 门楣金匾
  box(0.22, 3.6, 0.4, M.wood, -1.85, 1.8, 0, {}); box(0.22, 3.6, 0.4, M.wood, 1.85, 1.8, 0, {});
  box(4.1, 0.24, 0.4, M.wood, 0, 3.7, 0, {});
  plane(2.6, 0.5, new THREE.MeshStandardMaterial({ map: TX.signage('百年好合', '#e7c25c', '#6e0d12', 96), roughness: 0.8 }), 0, 3.1, -0.22, Math.PI);
  doorS.userData = { dL, dR };
  L.dyn.doorS = doorS;
  collide(-1.8, -0.2, 1.8, 0.2); // 南门关闭碰撞（终局移除）
  L.dyn.doorSCollider = L.colliders[L.colliders.length - 1];

  // 舞台
  box(16, 0.6, 3.2, M.velvetDark, 0, 0.3, -18.4, { collide: true });
  box(16.1, 0.1, 3.26, M.goldFoil, 0, 0.62, -18.4, {}); // 台沿金箔压条
  box(4, 0.15, 1.2, M.velvetDark, 0, 0.07, -16.6, {}); // 台阶
  box(4.04, 0.04, 1.24, M.goldFoil, 0, 0.155, -16.6, {});
  // 舞台背景幕 + 囍横幅
  const banner = plane(14, 5.4, new THREE.MeshStandardMaterial({ map: TX.xiBanner(), roughness: 0.85 }), 0, 3.6, -19.7);
  banner.material.emissive = new THREE.Color(0x1a0304);
  // 侧幕
  box(1.6, 6.4, 0.4, M.velvet, -7.4, 3.2, -19.4, {});
  box(1.6, 6.4, 0.4, M.velvet, 7.4, 3.2, -19.4, {});
  // 音箱
  box(0.7, 1.1, 0.6, M.black, -7.2, 1.75, -17.6, { cast: true });
  box(0.7, 1.1, 0.6, M.black, 7.2, 1.75, -17.6, { cast: true });
  box(0.12, 1.2, 0.12, M.steelDark, -7.2, 0.6, -17.6, {});
  box(0.12, 1.2, 0.12, M.steelDark, 7.2, 0.6, -17.6, {});

  // 投影幕 T03（舞台左侧壁挂）
  const t03mat = new THREE.MeshBasicMaterial({ color: 0x9db8b0 });
  const t03 = plane(3.6, 2.7, t03mat, -11.5, 4.0, -19.55);
  L.screens.push({ id: 'T03', mesh: t03, mat: t03mat, kind: 'vcr' });

  // 圆桌组件（实例化）
  const tablePos = [
    [-6.5, -6], [6.5, -6], [-11, -9.5], [11, -9.5],
    [-6.5, -12.5], [6.5, -12.5], [-11, -3], [11, -3],
  ];
  const mainTable = [0, -13.5];
  const tableGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.76, 20);
  const clothGeo = new THREE.CylinderGeometry(1.18, 1.45, 0.76, 20, 1, true);
  const susanGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.04, 18);
  const glassSusan = new THREE.MeshStandardMaterial({ color: 0x9aa89a, roughness: 0.05, metalness: 0.4, envMapIntensity: 1.6 });
  const chairGeo = new THREE.CylinderGeometry(0.22, 0.26, 0.52, 10);
  const chairBackGeo = new THREE.BoxGeometry(0.44, 0.62, 0.09);
  const plateGeo = new THREE.CylinderGeometry(0.12, 0.09, 0.025, 12);
  const cupGeo = new THREE.CylinderGeometry(0.03, 0.024, 0.09, 8);
  const bottleGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.3, 8);

  const allTables = [...tablePos, mainTable];
  const plates = new THREE.InstancedMesh(plateGeo, M.porcelain, allTables.length * 8);
  const cups = new THREE.InstancedMesh(cupGeo, M.porcelain, allTables.length * 8);
  const chairs = new THREE.InstancedMesh(chairGeo, M.velvet, allTables.length * 6);
  const chairBacks = new THREE.InstancedMesh(chairBackGeo, M.velvet, allTables.length * 6);
  plates.castShadow = cups.castShadow = false; chairs.castShadow = true;
  let pi = 0, ci = 0;
  const dummy = new THREE.Object3D();
  allTables.forEach(([tx, tz], ti) => {
    const main = ti === allTables.length - 1;
    const t = new THREE.Mesh(tableGeo, M.wood);
    t.position.set(tx, 0.38, tz); t.castShadow = true; scene.add(t);
    const cl = new THREE.Mesh(clothGeo, M.tablecloth);
    cl.position.set(tx, 0.38, tz); cl.rotation.y = ti * 0.9; scene.add(cl);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(1.16, 1.16, 0.03, 20), M.tablecloth);
    top.position.set(tx, 0.775, tz); scene.add(top);
    const su = new THREE.Mesh(susanGeo, glassSusan);
    su.position.set(tx, 0.81, tz); scene.add(su);
    collide(tx - 1.25, tz - 1.25, tx + 1.25, tz + 1.25);
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      dummy.position.set(tx + Math.cos(a) * 0.92, 0.8, tz + Math.sin(a) * 0.92);
      dummy.rotation.set(0, 0, 0); dummy.updateMatrix();
      plates.setMatrixAt(pi, dummy.matrix);
      dummy.position.set(tx + Math.cos(a) * 0.78, 0.85, tz + Math.sin(a) * 0.78);
      dummy.updateMatrix();
      cups.setMatrixAt(pi, dummy.matrix);
      pi++;
    }
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2 + (main ? 0.5 : 0);
      const cx = tx + Math.cos(a) * 1.62, cz = tz + Math.sin(a) * 1.62;
      dummy.position.set(cx, 0.26, cz);
      dummy.rotation.set(0, -a + Math.PI / 2, 0); dummy.updateMatrix();
      chairs.setMatrixAt(ci, dummy.matrix);
      dummy.position.set(cx + Math.cos(a) * 0.24, 0.82, cz + Math.sin(a) * 0.24);
      dummy.updateMatrix();
      chairBacks.setMatrixAt(ci, dummy.matrix);
      ci++;
    }
    // 酒瓶
    const b = new THREE.Mesh(bottleGeo, M.bottleGreen);
    b.position.set(tx + 0.4, 0.95, tz + 0.2); b.castShadow = true; scene.add(b);
  });
  scene.add(plates, cups, chairs, chairBacks);

  // 主桌：上宾空席（红绸椅背 + 桌牌）+ 多摆的碗筷 + 倒扣的第八杯
  const seatX = mainTable[0] + 2.1, seatZ = mainTable[1];
  const vipChair = new THREE.Group();
  const vc1 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.0, 0.5), M.velvet);
  vc1.position.y = 0.5; vipChair.add(vc1);
  const vc2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.72, 0.1), M.velvet);
  vc2.position.set(0, 1.3, 0.22); vipChair.add(vc2);
  const silk = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.9), new THREE.MeshStandardMaterial({ color: 0xc01018, roughness: 0.7, side: THREE.DoubleSide, emissive: 0x30040a }));
  silk.position.set(0, 1.35, 0.28); silk.rotation.x = -0.15; vipChair.add(silk);
  vipChair.position.set(seatX, 0, seatZ);
  vipChair.rotation.y = -Math.PI / 2;
  scene.add(vipChair);
  L.dyn.vipChair = vipChair;
  const cardMat = new THREE.MeshStandardMaterial({ map: TX.tableCard('上宾'), roughness: 0.8, side: THREE.DoubleSide });
  const card = plane(0.28, 0.18, cardMat, mainTable[0] + 1.0, 0.89, mainTable[1], -Math.PI / 2);
  card.rotation.x = -0.3;
  L.dyn.vipCard = card;
  // 玩家桌牌（伴娘）—— 坏结局用
  const cardYouMat = new THREE.MeshStandardMaterial({ map: TX.tableCard('伴娘'), roughness: 0.8, side: THREE.DoubleSide });
  const cardYou = plane(0.28, 0.18, cardYouMat, mainTable[0] - 1.0, 0.89, mainTable[1], Math.PI / 2);
  cardYou.rotation.x = -0.3;
  L.dyn.cardYou = { mesh: cardYou, mat: cardYouMat, flip: TX.tableCard('上宾', true) };

  // 枝形吊灯 ×2
  function chandelier(x, z, group) {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.06, 8, 24), M.gold);
    ring.rotation.x = Math.PI / 2; g.add(ring);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.05, 8, 20), M.gold);
    ring2.rotation.x = Math.PI / 2; ring2.position.y = 0.4; g.add(ring2);
    const bulbMat = new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffb45e, emissiveIntensity: 2.2 });
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), bulbMat);
      b.position.set(Math.cos(a) * 0.9, 0.12, Math.sin(a) * 0.9);
      g.add(b);
    }
    const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.4, 6), M.gold);
    chain.position.y = 1.0; g.add(chain);
    g.position.set(x, 5.4, z);
    scene.add(g);
    const l = pointLight(0xffc078, 55, 26, x, 5.0, z, group, group === 'hall');
    return { group: g, light: l, bulbMat };
  }
  L.dyn.chand1 = chandelier(0, -5, 'hall');
  L.dyn.chand2 = chandelier(0, -12, 'hall');
  // 壁灯
  [[-14.7, -4], [-14.7, -12], [14.7, -4], [14.7, -12]].forEach(([x, z]) => {
    const sc = box(0.24, 0.5, 0.18, M.gold, x, 3.2, z, {});
    sc.material = M.gold;
    pointLight(0xffb060, 8, 9, x + (x < 0 ? 0.4 : -0.4), 3.3, z, 'hall');
  });
  // 舞台追光
  const spot = new THREE.SpotLight(0xffe0b0, 260, 30, 0.32, 0.45, 1.4);
  spot.position.set(0, 6.6, -12);
  spot.target.position.set(0, 1.4, -18.2);
  spot.castShadow = true; spot.shadow.mapSize.set(1024, 1024); spot.shadow.bias = -0.002;
  scene.add(spot, spot.target);
  L.lights.hall.push(spot);
  spot.userData.base = 260;
  L.dyn.stageSpot = spot;

  // 彩带（喜事层，正常态高挂 / 终局下垂）
  const garlandMat = new THREE.MeshStandardMaterial({ color: 0xb01218, emissive: 0x2a0406, roughness: 0.8 });
  const garlandGold = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.6, roughness: 0.4 });
  L.dyn.garlands = [];
  for (let i = 0; i < 5; i++) {
    const x0 = -15, x1 = 15, z = -17 + i * 3.6;
    const pts = [];
    for (let k = 0; k <= 16; k++) {
      const t = k / 16;
      pts.push(new THREE.Vector3(x0 + (x1 - x0) * t, 6.4 - Math.sin(t * Math.PI) * 0.9, z));
    }
    const g = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.035, 5), i % 2 ? garlandGold : garlandMat);
    scene.add(g);
    L.dyn.garlands.push(g);
  }
  // 气球簇
  const balloonMat = new THREE.MeshStandardMaterial({ color: 0xc01822, roughness: 0.25, envMapIntensity: 1.2 });
  const balloonGold = new THREE.MeshStandardMaterial({ color: 0xd8b050, roughness: 0.25, envMapIntensity: 1.2 });
  [[-13.5, -1.5], [13.5, -1.5], [-13.5, -18], [13.5, -18]].forEach(([x, z], i) => {
    for (let k = 0; k < 5; k++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 10), k % 2 ? balloonGold : balloonMat);
      b.position.set(x + (Math.sin(k * 2.1) * 0.3), 2.2 + k * 0.28, z + Math.cos(k * 1.7) * 0.3);
      b.scale.y = 1.15;
      scene.add(b);
    }
  });
  // 墙面囍字红纸
  const xiMat = new THREE.MeshStandardMaterial({ map: TX.redPaper(), roughness: 0.9 });
  [[-15, -9, Math.PI / 2], [15, -9, -Math.PI / 2], [-8, 0.15 - 0.0, 0], [8, 0, 0]].forEach(([x, z, ry], i) => {
    if (i < 2) plane(1.1, 1.1, xiMat, x + (x < 0 ? 0.16 : -0.16), 3.4, z, ry);
    else plane(1.1, 1.1, xiMat, x, 3.4, -0.16, Math.PI);
  });

  // 喉道化覆盖层（终局显形）：墙面内收的肋弧
  const throat = new THREE.Group();
  const ribMat = new THREE.MeshStandardMaterial({ color: 0x6b4a3c, roughness: 0.85, emissive: 0x120a06 });
  for (let i = 0; i < 7; i++) {
    const z = -16.5 + i * 2.6;
    const r = 10.6 - Math.abs(i - 3) * 0.45;
    const rib = new THREE.Mesh(new THREE.TorusGeometry(r, 0.62 - 0.04 * Math.abs(i - 3), 9, 26, Math.PI), ribMat);
    rib.position.set(0, 0.1, z);
    rib.scale.set(1.32, 0.66, 1); // 压扁成软腭弧，顶部低于天花
    rib.rotation.z = (i % 2 ? 1 : -1) * 0.05;
    throat.add(rib);
  }
  throat.visible = false;
  scene.add(throat);
  L.dyn.throat = throat;

  L.regions.push({ name: '宴会厅', box: [-15, -20, 15, 0], mat: 'carpet' });

  // ============================================================
  // 服务走廊 A x[15,40] z[-8,-4.4] + B x[36.4,40] z[-4.4,14] 高3.2
  // ============================================================
  plane(25, 3.6, floorMat(M.terrazzoDark, 25, 3.6), 27.5, 0, -6.2, 0, -Math.PI / 2);
  plane(3.6, 18.4, floorMat(M.terrazzoDark, 3.6, 18.4), 38.2, 0, 4.8, 0, -Math.PI / 2);
  plane(25, 3.6, M.ceiling, 27.5, 3.2, -6.2, 0, Math.PI / 2);
  plane(3.6, 18.4, M.ceiling, 38.2, 3.2, 4.8, 0, Math.PI / 2);
  // 墙：下段瓷砖 + 上段灰泥
  function corrWallX(z, x1, x2, gaps = []) {
    wallX(z, x1, x2, 1.25, M.tiles, gaps);
    wallX(z, x1, x2, 1.95, M.plaster, gaps, 1.25);
  }
  function corrWallZ(x, z1, z2, gaps = []) {
    wallZ(x, z1, z2, 1.25, M.tiles, gaps);
    wallZ(x, z1, z2, 1.95, M.plaster, gaps, 1.25);
  }
  corrWallX(-8, 15, 40, []);                    // 南墙
  corrWallX(-4.4, 15, 36.4, []);                // 北墙（A 段）
  corrWallZ(40, -8, 14, []);                    // 东墙
  corrWallZ(36.4, -4.4, 14, []);                // B 段西墙
  // 假门（工作间/后厨）
  const doorInset = new THREE.MeshStandardMaterial({ color: 0x2e2620, roughness: 0.9 });
  [[20, -8], [28, -8], [34, -8]].forEach(([x, z]) => {
    plane(1.1, 2.2, doorInset, x, 1.1, z + 0.16);
    plane(0.9, 0.28, new THREE.MeshStandardMaterial({ map: TX.signage(x === 28 ? '工作间' : '后厨', '#ddd6c2', '#37322a', 88), roughness: 0.9 }), x, 2.42, z + 0.17);
  });
  plane(0.9, 0.28, new THREE.MeshStandardMaterial({ map: TX.signage('宴会厅 →', '#e8e2d2', '#233225', 80), roughness: 0.9 }), 16.5, 2.5, -4.6 - 0.16, Math.PI);
  // 荧光灯管
  L.dyn.tubes = [];
  const tubeMat = () => new THREE.MeshStandardMaterial({ color: 0xeaf2e6, emissive: 0xcfe8d8, emissiveIntensity: 2.6 });
  [[18, -6.2, 0], [25, -6.2, 0], [32, -6.2, 0], [38.2, -1, 1], [38.2, 5, 1], [38.2, 11, 1]].forEach(([x, z, rot], i) => {
    const tm = tubeMat();
    const t = box(rot ? 0.12 : 1.4, 0.06, rot ? 1.4 : 0.12, tm, x, 3.12, z, {});
    const l = pointLight(0xd8f0dc, i % 2 === 0 ? 16 : 12, 11, x, 2.8, z, 'corridor');
    L.dyn.tubes.push({ mesh: t, mat: tm, light: l, flicker: i === 2 });
  });
  // 堆积道具：盘堆推车（收窄点1）
  function cart(x, z, ry) {
    const g = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.6), M.steel);
    frame.position.y = 0.85; g.add(frame);
    const lower = frame.clone(); lower.position.y = 0.3; g.add(lower);
    for (const [dx, dz] of [[-0.5, -0.25], [0.5, -0.25], [-0.5, 0.25], [0.5, 0.25]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.85, 6), M.steelDark);
      leg.position.set(dx, 0.45, dz); g.add(leg);
    }
    for (let s = 0; s < 3; s++) {
      const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.34, 12), M.porcelain);
      stack.position.set(-0.32 + s * 0.32, 1.07, 0); g.add(stack);
    }
    const cloth = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), M.velvet);
    cloth.position.set(0.2, 0.62, 0.31); cloth.rotation.x = -0.2; g.add(cloth);
    g.position.set(x, 0, z); g.rotation.y = ry;
    scene.add(g);
    collide(x - 0.65, z - 0.4, x + 0.65, z + 0.4);
    return g;
  }
  cart(22, -7.4, 0);
  cart(38.9, 2, Math.PI / 2);
  // 红色塑料筐堆（收窄点2）
  const crateMat = new THREE.MeshStandardMaterial({ color: 0x8e1a14, roughness: 0.8 });
  for (let i = 0; i < 4; i++) box(0.6, 0.35, 0.42, crateMat, 30.5 + (i % 2) * 0.65, 0.18 + Math.floor(i / 2) * 0.37, -7.5, { collide: i < 2 });
  // 沉积层薄板（踢脚沿线）
  for (let i = 0; i < 6; i++) {
    const s = box(1.6 + Math.random() * 1.2, 0.1 + Math.random() * 0.14, 0.24, M.sediment, 17 + i * 3.8, 0.08, -7.75, {});
    s.rotation.z = (Math.random() - 0.5) * 0.06;
  }
  // 管线
  box(24.9, 0.1, 0.1, M.steelDark, 27.5, 3.0, -7.7, {});
  box(0.1, 0.1, 18.2, M.steelDark, 39.7, 3.0, 4.8, {});
  L.regions.push({ name: '服务走廊', box: [15, -8, 40, -4.4], mat: 'terrazzo' });
  L.regions.push({ name: '服务走廊', box: [36.4, -4.4, 40, 14], mat: 'terrazzo' });

  // ============================================================
  // 大堂 x[24,48] z[14,30] 高8
  // ============================================================
  plane(24, 16, floorMat(M.terrazzo, 24, 16), 36, 0, 22, 0, -Math.PI / 2);
  plane(24, 16, M.ceiling, 36, 8, 22, 0, Math.PI / 2);
  plane(4.5, 14, M.carpet, 36, 0.02, 22.8, 0, -Math.PI / 2);
  wallX(30, 24, 48, 8, M.plaster, [[33, 39]]);          // 北墙 正门
  wallX(14, 24, 48, 8, M.plaster, [[36.4, 40]]);        // 南墙 走廊口
  wallZ(24, 14, 30, 8, M.plaster, [[20, 23.2]]);        // 西墙 连廊门
  wallZ(48, 14, 30, 8, M.plaster, []);                  // 东墙
  // 玻璃正门（锁死）+ 门外雾与车灯
  const glassDoor = new THREE.MeshStandardMaterial({ color: 0x30393a, roughness: 0.04, metalness: 0.4, transparent: true, opacity: 0.5, envMapIntensity: 2 });
  box(6, 3.4, 0.1, glassDoor, 36, 1.7, 30, {});
  collide(32.8, 29.8, 39.2, 30.2);
  box(0.14, 3.4, 0.14, M.steel, 33, 1.7, 30, {}); box(0.14, 3.4, 0.14, M.steel, 39, 1.7, 30, {}); box(0.14, 3.4, 0.14, M.steel, 36, 1.7, 30, {});
  // 门外：海雾中的车灯（径向柔光贴图 + 加法混合 → 雾里的光球而非硬边方块）
  const fogGlow = new THREE.MeshBasicMaterial({ color: 0xc8d4c8, transparent: true, opacity: 0.22, depthWrite: false });
  plane(14, 6, fogGlow, 36, 2.5, 36, Math.PI);
  const glowCv = document.createElement('canvas'); glowCv.width = glowCv.height = 128;
  const gctx = glowCv.getContext('2d');
  const gr = gctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,244,210,1)'); gr.addColorStop(0.25, 'rgba(255,236,190,0.55)');
  gr.addColorStop(0.6, 'rgba(220,200,160,0.14)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  gctx.fillStyle = gr; gctx.fillRect(0, 0, 128, 128);
  const glowTex = new THREE.CanvasTexture(glowCv);
  const head1 = new THREE.MeshBasicMaterial({
    map: glowTex, color: 0xfff2cc, transparent: true, opacity: 0.0,
    depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
  });
  const hl1 = plane(2.6, 1.7, head1, 33.5, 1.0, 35, Math.PI);
  const hl2 = plane(2.6, 1.7, head1, 38.5, 1.0, 35.5, Math.PI);
  L.dyn.headlights = { mat: head1, m1: hl1, m2: hl2 };
  // 镜面柱 ×4
  [[30, 18], [42, 18], [30, 26], [42, 26]].forEach(([x, z]) => {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 8, 20), M.steel);
    c.position.set(x, 4, z); c.castShadow = true; scene.add(c);
    collide(x - 0.6, z - 0.6, x + 0.6, z + 0.6);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.62, 0.3, 20), M.gold);
    cap.position.set(x, 0.15, z); scene.add(cap);
  });
  // 大吊灯
  const bigCh = chandelier(36, 22, 'lobby');
  bigCh.group.scale.setScalar(1.8);
  bigCh.group.position.y = 6.2;
  bigCh.light.position.y = 5.8;
  bigCh.light.intensity = 110; bigCh.light.userData.base = 110;
  bigCh.light.castShadow = true; bigCh.light.shadow.mapSize.set(512, 512);
  L.dyn.lobbyChand = bigCh;
  // 总台（红木）
  box(1.2, 1.1, 7, M.wood, 45.5, 0.55, 22, { collide: true, cast: true });
  box(1.5, 0.08, 7.4, M.wood, 45.5, 1.14, 22, {});
  // 台灯
  const lampShade = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.24, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0x1c5038, roughness: 0.4, side: THREE.DoubleSide }));
  lampShade.position.set(45.5, 1.5, 19.5); scene.add(lampShade);
  box(0.04, 0.34, 0.04, M.gold, 45.5, 1.3, 19.5, {});
  pointLight(0xffd090, 10, 7, 45.5, 1.45, 19.5, 'lobby');
  // 电话
  box(0.26, 0.1, 0.2, M.black, 45.5, 1.22, 24, {});
  // 大红横幅
  const bannerMat = new THREE.MeshStandardMaterial({ map: TX.signage('热烈祝贺周府千金于归之喜', '#e7c25c', '#8e0c12', 60), roughness: 0.85 });
  const lobbyBanner = plane(14, 1.1, bannerMat, 36, 6.2, 29.7, Math.PI);
  lobbyBanner.rotation.z = 0.012;
  // 塑料绿植
  const plantMat = new THREE.MeshStandardMaterial({ color: 0x2e5c34, roughness: 0.85 });
  [[25.5, 28.5], [46.5, 28.5], [25.5, 15.5]].forEach(([x, z]) => {
    box(0.5, 0.5, 0.5, new THREE.MeshStandardMaterial({ color: 0x7a2e22, roughness: 0.9 }), x, 0.25, z, { collide: true });
    for (let k = 0; k < 6; k++) {
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.9, 6), plantMat);
      leaf.position.set(x + Math.sin(k * 2.4) * 0.2, 0.9 + (k % 3) * 0.14, z + Math.cos(k * 1.9) * 0.2);
      leaf.rotation.set(Math.sin(k) * 0.5, 0, Math.cos(k * 1.3) * 0.5);
      scene.add(leaf);
    }
  });
  // 行李堆 + 沙发
  box(0.7, 0.5, 0.45, new THREE.MeshStandardMaterial({ color: 0x4a3828, roughness: 0.9 }), 34, 0.25, 28.6, {});
  box(0.6, 0.42, 0.4, new THREE.MeshStandardMaterial({ color: 0x35424e, roughness: 0.9 }), 34.7, 0.21, 28.3, {});
  box(2.2, 0.45, 0.9, M.velvetDark, 27, 0.32, 24.5, { collide: true });
  box(2.2, 0.7, 0.24, M.velvetDark, 27, 0.85, 24.9, {});
  // 连廊门牌
  plane(1.6, 0.5, new THREE.MeshStandardMaterial({ map: TX.signage('员工通道 · 海洋馆连廊', '#d8e6dc', '#22322a', 56), roughness: 0.9 }), 24.4, 2.7, 21.6, Math.PI / 2);
  // 上二楼楼梯（装饰性，金色围栏杆封住）
  for (let i = 0; i < 6; i++) box(3, 0.18, 0.34, M.terrazzoDark, 47.2 - i * 0.0, 0.2 + i * 0.18, 15.6 + i * 0.34, {});
  box(3, 0.06, 0.06, M.gold, 47.2, 1.05, 16.2, { ry: 0 });
  collide(45.6, 15.3, 48, 17.8);
  // 返潮后的负形凹坑（上宾外板脱离处——软体缺失的证据）
  L.dyn.pits = [];
  const pitMat = new THREE.MeshStandardMaterial({ color: 0x0c0e10, roughness: 0.15, metalness: 0.4, envMapIntensity: 1.4 });
  [[31, 20, 2.6, 1.5, 0.4], [39, 24.5, 3.4, 1.8, -0.7], [35, 17.5, 2.0, 1.2, 1.9]].forEach(([x, z, a, b, r]) => {
    const p = new THREE.Mesh(new THREE.CircleGeometry(1, 24), pitMat);
    p.scale.set(a, b, 1);
    p.rotation.x = -Math.PI / 2; p.rotation.z = r;
    p.position.set(x, 0.035, z);
    p.visible = false;
    scene.add(p);
    L.dyn.pits.push(p);
  });
  // T01 前台监控 CRT
  L.regions.push({ name: '大堂', box: [24, 14, 48, 30], mat: 'terrazzo' });

  // ============================================================
  // 海洋馆玻璃廊 x[-19,24] z[20,24] 高3.4
  // ============================================================
  plane(43, 4, floorMat(M.concreteWet, 43, 4, 3.2), 2.5, 0, 22, 0, -Math.PI / 2);
  plane(43, 4, M.ceiling, 2.5, 3.4, 22, 0, Math.PI / 2);
  // 南墙（混凝土+瓷砖裙）
  wallX(20, -19, 24, 1.25, M.tiles, [[-19, -15.2]]);
  wallX(20, -19, 24, 2.15, M.concrete, [[-19, -15.2]], 1.25);
  // 北墙 = 玻璃 + 钢竖框；玻璃后是海
  const seaPlane = plane(46, 8, new THREE.MeshBasicMaterial({ map: TX.seaWater() }), 2.5, 2.5, 26.5, Math.PI);
  // 水中光柱（玻璃后缓慢摆动的丁达尔光）
  L.dyn.beams = [];
  const beamMat = new THREE.MeshBasicMaterial({ color: 0x66d8c8, transparent: true, opacity: 0.14, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const beam = new THREE.Mesh(new THREE.PlaneGeometry(1.4 + i * 0.4, 7), beamMat);
    beam.position.set(-14 + i * 8, 2.8, 25.4);
    beam.rotation.z = 0.25;
    scene.add(beam);
    L.dyn.beams.push({ mesh: beam, phase: i * 1.7, x0: -14 + i * 8 });
  }
  // 水中悬浮的暗影轮廓（负空间——像有东西，永远看不清）
  const shadowMat = new THREE.MeshBasicMaterial({ color: 0x02090c, transparent: true, opacity: 0.85, depthWrite: false });
  const shade1 = new THREE.Mesh(new THREE.SphereGeometry(2.6, 12, 8), shadowMat);
  shade1.scale.set(2.2, 0.7, 0.5);
  shade1.position.set(-6, 3.4, 26.2);
  scene.add(shade1);
  L.dyn.seaShade = shade1;
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x9fc8c2, roughness: 0.03, metalness: 0.0, transparent: true, opacity: 0.18,
    envMapIntensity: 2.2,
  });
  for (let i = 0; i < 12; i++) {
    const x = -17.2 + i * 3.6;
    plane(3.5, 3.4, glassMat, x, 1.7, 24);
    box(0.14, 3.4, 0.2, M.steelDark, x + 1.78, 1.7, 24, {});
  }
  collide(-19, 23.8, 24, 24.3);
  box(0.14, 3.4, 0.2, M.steelDark, -19, 1.7, 24, {});
  // 西端封墙（转入连廊）
  box(0.3, 3.4, 4.2, M.concrete, -19, 1.7, 22, { collide: true });
  // 玻璃裂纹层（噪声后显形）
  const crackTexC = document.createElement('canvas');
  crackTexC.width = 256; crackTexC.height = 256;
  const cctx = crackTexC.getContext('2d');
  cctx.strokeStyle = 'rgba(220,240,240,0.9)'; cctx.lineWidth = 2;
  for (let i = 0; i < 7; i++) {
    cctx.beginPath();
    let x = 128, y = 128;
    cctx.moveTo(x, y);
    for (let k = 0; k < 6; k++) {
      x += (Math.random() - 0.5) * 90; y += (Math.random() - 0.5) * 90;
      cctx.lineTo(x, y);
    }
    cctx.stroke();
  }
  const crackTex = new THREE.CanvasTexture(crackTexC);
  const crackMat = new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, opacity: 0.0, depthWrite: false });
  L.dyn.cracks = [];
  [[-2, 23.85], [6, 23.85], [14, 23.85]].forEach(([x, z]) => {
    const c = plane(3.2, 3.2, crackMat.clone(), x, 1.7, z, Math.PI);
    L.dyn.cracks.push(c);
  });
  // 海洋馆灯箱
  const boxSign = new THREE.MeshStandardMaterial({ map: TX.signage('蚀湾海洋馆', '#bfeee8', '#0d2b31', 88), emissive: 0x1d5a5c, emissiveIntensity: 1.6, roughness: 0.6 });
  plane(3.2, 0.9, boxSign, 21.5, 2.8, 20.2, 0);
  pointLight(0x66c8c0, 9, 8, 21.5, 2.6, 21, 'aqua');
  // 售票台（T07 所在）
  box(2, 1.05, 0.8, M.wood, 21.6, 0.53, 20.7, { collide: true });
  // 检修闸（红绳吊闸）
  const gate = new THREE.Group();
  const grate = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.2, 3.8), M.steelDark);
  gate.add(grate);
  for (let i = 0; i < 6; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3.2, 0.06), M.steel);
    bar.position.set(0, 0, -1.7 + i * 0.68);
    gate.add(bar);
  }
  const gateSign = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.4), new THREE.MeshStandardMaterial({ map: TX.signage('检修闸 · 禁止通行', '#e8d8b0', '#5a2018', 64), roughness: 0.9 }));
  gateSign.rotation.y = Math.PI / 2;
  gateSign.position.set(0.11, 0.4, 0);
  gate.add(gateSign);
  gate.position.set(4, 1.6, 22);
  scene.add(gate);
  L.dyn.gate = { group: gate, y: 1.6, targetY: 1.6, collider: { minX: 3.7, minZ: 20, maxX: 4.3, maxZ: 24 } };
  L.colliders.push(L.dyn.gate.collider);
  // 闸门导轨
  box(0.24, 3.4, 0.24, M.steelDark, 4, 1.7, 20.25, {});
  box(0.24, 3.4, 0.24, M.steelDark, 4, 1.7, 23.75, {});
  // 应急灯（绿）
  const emerMat = new THREE.MeshStandardMaterial({ color: 0x2a6040, emissive: 0x1d6644, emissiveIntensity: 2.4 });
  [[-16, 20.3], [10, 20.3], [22, 20.3]].forEach(([x, z]) => {
    box(0.34, 0.16, 0.1, emerMat, x, 3.0, z + 0.05, {});
  });
  pointLight(0x3f9a68, 7, 9, -16, 2.8, 21, 'aqua');
  pointLight(0x3f9a68, 6, 9, 10, 2.8, 21, 'aqua');
  // 水光（玻璃投进来的动态光）
  const waterLight1 = pointLight(0x4fa8a0, 38, 18, -6, 2.4, 22.3, 'aqua');
  const waterLight2 = pointLight(0x4fa8a0, 34, 18, 12, 2.4, 22.3, 'aqua');
  const waterLight3 = pointLight(0x4fa8a0, 30, 16, -15, 2.4, 22.3, 'aqua');
  L.dyn.waterLights = [waterLight1, waterLight2, waterLight3];
  // 水槽灯箱带（沿玻璃顶）
  const tankStrip = new THREE.Mesh(new THREE.BoxGeometry(43, 0.1, 0.16),
    new THREE.MeshStandardMaterial({ color: 0x9fe8dc, emissive: 0x5fc8bc, emissiveIntensity: 1.8 }));
  tankStrip.position.set(2.5, 3.3, 23.85);
  scene.add(tankStrip);
  // 水洼
  const puddleMat = new THREE.MeshStandardMaterial({ color: 0x1a2224, roughness: 0.03, metalness: 0.5, envMapIntensity: 2.4, transparent: true, opacity: 0.8 });
  [[-8, 22.6, 1.6], [2, 21.4, 1.1], [16, 22.8, 2.0]].forEach(([x, z, s]) => {
    const p = new THREE.Mesh(new THREE.CircleGeometry(1, 20), puddleMat);
    p.rotation.x = -Math.PI / 2; p.scale.set(s, s * 0.55, 1);
    p.position.set(x, 0.02, z);
    scene.add(p);
  });
  L.regions.push({ name: '海洋馆连廊', box: [-19, 20, 24, 24], mat: 'wet' });

  // ============================================================
  // 员工连廊（旧冷库）x[-19,-15.2] z[-7.6,20] 高3
  // ============================================================
  plane(3.8, 27.6, floorMat(M.concrete, 3.8, 27.6, 3.2), -17.1, 0, 6.2, 0, -Math.PI / 2);
  plane(3.8, 27.6, M.ceiling, -17.1, 3, 6.2, 0, Math.PI / 2);
  wallZ(-19, -7.6, 20, 3, M.concrete, []);
  wallZ(-15.2, -4.4, 20, 3, M.concrete, [[-7.6, -4.4]]);
  wallX(-7.6, -19, -15.2, 3, M.concrete, []);
  // 旧冷库门框（内嵌）
  [[-18.8, 2], [-18.8, 10]].forEach(([x, z]) => {
    plane(1.4, 2.2, doorInset, x + 0.16, 1.1, z, Math.PI / 2);
    box(0.1, 2.4, 1.6, M.steelDark, x + 0.05, 1.2, z, {});
  });
  plane(0.8, 0.3, new THREE.MeshStandardMaterial({ map: TX.signage('旧冷库 · 3', '#cfd8ce', '#2e3630', 76), roughness: 0.9 }), -18.7, 2.3, 6, Math.PI / 2);
  // 冷管 + 附居钙化
  box(0.12, 0.12, 27, M.steelDark, -18.6, 2.6, 6.2, {});
  for (let i = 0; i < 9; i++) {
    const lump = new THREE.Mesh(new THREE.SphereGeometry(0.09 + Math.random() * 0.1, 7, 7), M.calcite);
    lump.position.set(-18.55, 2.5 + Math.random() * 0.24, -5 + i * 2.8 + Math.random());
    lump.scale.y = 0.7;
    scene.add(lump);
  }
  // 吊灯泡 ×3（摇晃）
  L.dyn.bulbs = [];
  [[-17.1, -3], [-17.1, 6], [-17.1, 15]].forEach(([x, z], i) => {
    const g = new THREE.Group();
    const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.7, 5), M.black);
    wire.position.y = 0.35; g.add(wire);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), new THREE.MeshStandardMaterial({ color: 0xffd9a0, emissive: 0xffc070, emissiveIntensity: 2.4 }));
    g.add(bulb);
    g.position.set(x, 2.6, z);
    scene.add(g);
    const l = pointLight(0xffc078, 9, 8, x, 2.4, z, 'connector');
    L.dyn.bulbs.push({ group: g, light: l, phase: i * 2.1 });
  });
  // 上一场伴娘的旧断绳（叙事物）
  const oldCord = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3([
      new THREE.Vector3(-17.5, 0.03, -5.5), new THREE.Vector3(-17.0, 0.05, -5.8),
      new THREE.Vector3(-16.6, 0.03, -5.5), new THREE.Vector3(-16.4, 0.04, -6.0),
    ]), 12, 0.02, 5),
    new THREE.MeshStandardMaterial({ color: 0x4a1214, roughness: 0.95 })
  );
  scene.add(oldCord);
  L.regions.push({ name: '员工连廊', box: [-19, -7.6, -15.2, 20], mat: 'metal' });

  // ============================================================
  // CRT 电视机（实体） T01 大堂总台 / T02 服务走廊 / T07 售票台
  // ============================================================
  function crtTV(x, y, z, ry, id, camPos, camLook) {
    const g = new THREE.Group();
    const shellMat = new THREE.MeshStandardMaterial({ color: 0x3a3630, roughness: 0.55 });
    const shell = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.5, 0.5), shellMat);
    shell.castShadow = true;
    g.add(shell);
    const front = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.52, 0.04), new THREE.MeshStandardMaterial({ color: 0x2c2824, roughness: 0.5 }));
    front.position.z = 0.25;
    g.add(front);
    const scrMat = new THREE.MeshBasicMaterial({ color: 0x223330 });
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.38), scrMat);
    scr.position.set(-0.03, 0.02, 0.275);
    g.add(scr);
    // 旋钮
    for (let i = 0; i < 2; i++) {
      const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.02, 8), M.steelDark);
      knob.rotation.x = Math.PI / 2;
      knob.position.set(0.25, 0.08 - i * 0.1, 0.276);
      g.add(knob);
    }
    g.position.set(x, y, z); g.rotation.y = ry;
    scene.add(g);
    const gl = new THREE.PointLight(0x66d8cc, 4, 4, 2);
    gl.position.set(x, y + 0.1, z);
    scene.add(gl);
    L.screens.push({ id, mesh: scr, mat: scrMat, kind: 'preview', camPos, camLook, glow: gl, group: g });
    return g;
  }
  // T02 服务走廊（钢架上）
  box(0.5, 1.15, 0.5, M.steelDark, 26.5, 0.58, -7.5, { collide: true });
  crtTV(26.5, 1.42, -7.5, 0.25, 'T02',
    new THREE.Vector3(26.5, 2.2, -6.8), new THREE.Vector3(34, 1.2, -5.6));
  // T01 大堂总台
  crtTV(45.4, 1.45, 26, -Math.PI / 2 - 0.2, 'T01',
    new THREE.Vector3(44, 3.4, 26), new THREE.Vector3(34, 2.2, 21));
  // T07 售票台
  crtTV(21.6, 1.3, 20.75, Math.PI + 0.15, 'T07',
    new THREE.Vector3(18, 1.9, 21.2), new THREE.Vector3(4, 1.6, 22.6));

  // ============================================================
  // 预现层（只在 CRT 第二相机里可见）
  // ============================================================
  const futMat = new THREE.MeshBasicMaterial({ color: 0xff3830, wireframe: false });
  const futLine = new THREE.MeshBasicMaterial({ color: 0xff5040 });
  const futDark = new THREE.MeshBasicMaterial({ color: 0x14181c });
  // — 走廊：下一档绳网 + 侍应标记
  const fc = new THREE.Group();
  const mkLine = (p1, p2, mat = futLine) => {
    const dir = p2.clone().sub(p1);
    const len = dir.length();
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len, 5), mat);
    m.position.copy(p1).add(p2).multiplyScalar(0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    return m;
  };
  fc.add(mkLine(new THREE.Vector3(16.2, 2.05, -6.2), new THREE.Vector3(35.5, 2.05, -6.2)));
  fc.add(mkLine(new THREE.Vector3(35.5, 2.05, -6.2), new THREE.Vector3(38.2, 2.05, -3.5)));
  fc.add(mkLine(new THREE.Vector3(38.2, 2.05, -3.5), new THREE.Vector3(38.2, 2.05, 11)));
  const wtMark = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 1.1, 4, 8), futDark);
  wtMark.position.set(31, 0.95, -6.2);
  fc.add(wtMark);
  fc.visible = false;
  scene.add(fc);
  L.future.corridor = fc;
  // — 大堂：上宾外板重组（滤食前肢弧线）
  const fl = new THREE.Group();
  for (let i = 0; i < 7; i++) {
    const t = i / 6;
    const slab = new THREE.Mesh(new THREE.BoxGeometry(2.6 - t * 0.8, 0.5, 1.6 - t * 0.5), futDark);
    slab.position.set(29 + t * 12, 0.6 + Math.sin(t * Math.PI) * 5.4, 19 + t * 5.5);
    slab.rotation.set(t * 0.8, t * 1.2, Math.sin(t * 6) * 0.4);
    fl.add(slab);
  }
  const you = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 1.1, 4, 8), new THREE.MeshBasicMaterial({ color: 0x6e1013 }));
  you.position.set(33, 0.95, 24);
  fl.add(you); // 「未来的自己」——画面角落穿伴娘裙的背影
  fl.visible = false;
  scene.add(fl);
  L.future.lobby = fl;
  // — 海洋馆：玻璃内陷 + 闸门在未来是升起的
  const fa = new THREE.Group();
  const bow = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 12, 0, Math.PI), new THREE.MeshBasicMaterial({ color: 0x0e3038, side: THREE.DoubleSide }));
  bow.scale.set(1.4, 0.8, 0.35);
  bow.position.set(4, 1.7, 24.4);
  bow.rotation.y = Math.PI;
  fa.add(bow);
  fa.add(mkLine(new THREE.Vector3(4, 3.3, 22), new THREE.Vector3(10.5, 2.6, 20.3)));
  const gateGhost = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.2, 3.8), new THREE.MeshBasicMaterial({ color: 0x30383c, transparent: true, opacity: 0.7 }));
  gateGhost.position.set(4, 4.4, 22);
  fa.add(gateGhost);
  fa.visible = false;
  scene.add(fa);
  L.future.aqua = fa;

  // ============================================================
  // 细节密度层 v1.0 —— 每个空间的「第二遍美术」
  // ============================================================
  const inlineTex = (w, h, draw) => {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };

  // —— 宴会厅：红灯笼（自发光，无新增光源） ——
  const lanternShell = new THREE.MeshStandardMaterial({
    color: 0xb31220, emissive: 0xdd2a18, emissiveIntensity: 0.85, roughness: 0.6,
    transparent: true, opacity: 0.96,
  });
  const lanternCap = new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.7, roughness: 0.4 });
  const lanternTassel = new THREE.MeshStandardMaterial({ color: 0x8e0c12, roughness: 0.9 });
  L.dyn.lanterns = [];
  [[-13.2, -3.2], [-13.2, -9.5], [-13.2, -15.8], [13.2, -3.2], [13.2, -9.5], [13.2, -15.8]].forEach(([x, z], i) => {
    const g = new THREE.Group();
    const sh = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 12), lanternShell);
    sh.scale.y = 1.18; g.add(sh);
    for (let k = 0; k < 5; k++) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.008, 5, 20), lanternCap);
      rib.rotation.y = (k / 5) * Math.PI; rib.scale.y = 1.18; g.add(rib);
    }
    const capT = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.07, 10), lanternCap);
    capT.position.y = 0.38; g.add(capT);
    const capB = capT.clone(); capB.position.y = -0.38; capB.rotation.x = Math.PI; g.add(capB);
    const ta = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.3, 8), lanternTassel);
    ta.position.y = -0.56; g.add(ta);
    const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1.1, 4), M.black);
    wire.position.y = 0.95; g.add(wire);
    // 透光内芯：烛心亮点 + 加法辉光（骨架剪影从内透出来）
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffd9a0, fog: false }));
    g.add(core);
    const glowT = inlineTex(64, 64, (ctx) => {
      const gr = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
      gr.addColorStop(0, 'rgba(255,150,90,0.85)'); gr.addColorStop(0.5, 'rgba(230,60,40,0.3)');
      gr.addColorStop(1, 'rgba(200,40,30,0)');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, 64, 64);
    });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.25),
      new THREE.MeshBasicMaterial({ map: glowT, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    g.add(glow);
    glow.onBeforeRender = (r, s, cam) => { glow.quaternion.copy(cam.quaternion); };
    g.position.set(x, 4.9, z);
    scene.add(g);
    L.dyn.lanterns.push({ group: g, phase: i * 1.3, glowMat: glow.material });
  });
  // —— 宴会厅：天花线脚 + 藻井（金箔材质） ——
  const trimMat = M.goldFoil;
  box(30, 0.14, 0.14, trimMat, 0, 6.7, -0.2, {}); box(30, 0.14, 0.14, trimMat, 0, 6.7, -19.8, {});
  box(0.14, 0.14, 20, trimMat, -14.8, 6.7, -10, {}); box(0.14, 0.14, 20, trimMat, 14.8, 6.7, -10, {});
  box(20, 0.1, 0.1, trimMat, 0, 6.96, -4.5, {}); box(20, 0.1, 0.1, trimMat, 0, 6.96, -15.5, {});
  box(0.1, 0.1, 11, trimMat, -10, 6.96, -10, {}); box(0.1, 0.1, 11, trimMat, 10, 6.96, -10, {});
  plane(19.6, 10.8, new THREE.MeshStandardMaterial({ color: 0x3a2422, roughness: 0.95 }), 0, 6.99, -10, 0, Math.PI / 2);
  // —— 舞台幕布：立体褶皱（半嵌圆柱阵列） ——
  const pleatMat = new THREE.MeshStandardMaterial({ ...TX.velvet(), color: 0x7e1016 });
  for (let i = 0; i < 22; i++) {
    const px = -7.7 + i * 0.73;
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22 + (i % 3) * 0.05, 0.3 + (i % 2) * 0.06, 6.2, 8), pleatMat);
    p.position.set(px, 3.5, -19.85 + (i % 2) * 0.1);
    scene.add(p);
  }
  // —— 桌面细节：茶壶 + 喜糖碟 ——
  const teapotBody = new THREE.SphereGeometry(0.09, 10, 8);
  const teapotMat = M.porcelain;
  allTables.forEach(([tx, tz], ti) => {
    const tp = new THREE.Group();
    const bodyM = new THREE.Mesh(teapotBody, teapotMat); bodyM.scale.y = 0.82; tp.add(bodyM);
    const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.02, 0.1, 6), teapotMat);
    spout.position.set(0.09, 0.02, 0); spout.rotation.z = -1; tp.add(spout);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 0.03, 8), teapotMat);
    lid.position.y = 0.075; tp.add(lid);
    tp.position.set(tx - 0.35, 0.885, tz - 0.25);
    tp.rotation.y = ti * 1.1;
    scene.add(tp);
    const candyDish = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.06, 0.03, 10), M.porcelain);
    candyDish.position.set(tx + 0.15, 0.87, tz + 0.42);
    scene.add(candyDish);
    for (let k = 0; k < 5; k++) {
      const candy = new THREE.Mesh(new THREE.SphereGeometry(0.016, 6, 5),
        new THREE.MeshStandardMaterial({ color: k % 2 ? 0xc01822 : 0xd8b050, roughness: 0.3 }));
      candy.position.set(tx + 0.15 + Math.sin(k * 2.2) * 0.045, 0.9, tz + 0.42 + Math.cos(k * 1.8) * 0.045);
      scene.add(candy);
    }
  });
  // —— 走道红毯撒喜纸屑 ——
  {
    const confetti = new THREE.InstancedMesh(
      new THREE.CircleGeometry(0.035, 6),
      new THREE.MeshStandardMaterial({ color: 0xc01822, roughness: 0.9, side: THREE.DoubleSide }), 90);
    const d = new THREE.Object3D();
    TX.srand(313);
    for (let i = 0; i < 90; i++) {
      d.position.set((TX.rnd() - 0.5) * 5.5, 0.03, -1 - TX.rnd() * 16);
      d.rotation.set(-Math.PI / 2 + (TX.rnd() - 0.5) * 0.4, 0, TX.rnd() * 6.28);
      d.scale.setScalar(0.6 + TX.rnd());
      d.updateMatrix();
      confetti.setMatrixAt(i, d.matrix);
    }
    scene.add(confetti);
  }
  // —— 墙面老照片（泛黄合影，脸永远糊的） ——
  const photoTex = () => inlineTex(128, 96, (ctx, w, h) => {
    ctx.fillStyle = '#b8a583'; ctx.fillRect(0, 0, w, h);
    TX.srand((Math.random() * 999) | 0);
    ctx.fillStyle = 'rgba(70,58,40,0.85)';
    ctx.fillRect(6, h * 0.55, w - 12, h * 0.38);
    for (let i = 0; i < 7; i++) {
      const x = 14 + i * ((w - 28) / 6);
      ctx.fillStyle = 'rgba(58,46,34,0.9)';
      ctx.beginPath(); ctx.ellipse(x, h * 0.46, 6, 8, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillRect(x - 7, h * 0.52, 14, h * 0.3);
    }
    ctx.filter = 'blur(2.5px)';
    ctx.drawImage(ctx.canvas, 0, 0);
    ctx.filter = 'none';
    const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.75);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(40,28,14,0.55)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h);
  });
  [[-14.7, -6.5, Math.PI / 2], [-14.7, -14, Math.PI / 2], [14.7, -15.5, -Math.PI / 2]].forEach(([x, z, ry]) => {
    const frame = box(0.06, 0.66, 0.9, M.wood, x + (x < 0 ? 0.02 : -0.02), 2.2, z, {});
    const ph = plane(0.78, 0.54, new THREE.MeshStandardMaterial({ map: photoTex(), roughness: 0.9 }),
      x + (x < 0 ? 0.08 : -0.08), 2.2, z, ry);
    ph.rotation.z = (Math.random() - 0.5) * 0.05;
  });

  // —— 服务走廊：小心地滑 A 字牌 + 拖把桶 + 摞椅 ——
  {
    const signT = new THREE.MeshStandardMaterial({ map: TX.signage('小心地滑', '#3a2f16', '#d8c23a', 88), roughness: 0.8 });
    const a1 = plane(0.44, 0.6, signT, 24.5, 0.32, -6.9, 0.5);
    a1.rotation.x = -0.22;
    const a2 = plane(0.44, 0.6, signT, 24.52, 0.32, -6.86, 0.5 + Math.PI);
    a2.rotation.x = 0.22;
    collide(24.3, -7.1, 24.75, -6.7);
    const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.13, 0.34, 10),
      new THREE.MeshStandardMaterial({ color: 0x8e1a14, roughness: 0.7 }));
    bucket.position.set(33.4, 0.17, -7.4); scene.add(bucket);
    const mopStick = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 1.3, 5), M.wood);
    mopStick.position.set(33.5, 0.75, -7.45); mopStick.rotation.z = 0.35; scene.add(mopStick);
    for (let s = 0; s < 3; s++) {
      const ch = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.1, 0.46), M.wood);
      ch.position.set(38.9, 0.3 + s * 0.24, 11.8);
      ch.rotation.y = s * 0.16;
      scene.add(ch);
      const chB = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.4, 0.08), M.wood);
      chB.position.set(38.9, 0.5 + s * 0.24, 12.02);
      chB.rotation.y = s * 0.16;
      scene.add(chB);
    }
    collide(38.6, 11.5, 39.2, 12.2);
    // 管道阀轮
    const valve = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.018, 6, 14), M.steelDark);
    valve.position.set(30, 2.86, -7.62); valve.rotation.x = Math.PI / 2;
    scene.add(valve);
  }

  // —— 大堂：挂钟（停在 23:58）+ 钥匙架 + 铜铃 + 电梯门 ——
  {
    const clockT = inlineTex(160, 160, (ctx, w, h) => {
      ctx.fillStyle = '#e6dcc4'; ctx.beginPath(); ctx.arc(80, 80, 74, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#3a2f22'; ctx.lineWidth = 5; ctx.stroke();
      ctx.fillStyle = '#3a2f22';
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        ctx.fillRect(80 + Math.cos(a) * 62 - 2, 80 + Math.sin(a) * 62 - 2, i % 3 === 0 ? 6 : 3, i % 3 === 0 ? 6 : 3);
      }
      ctx.strokeStyle = '#2a2018'; ctx.lineWidth = 6;
      ctx.beginPath(); ctx.moveTo(80, 80);
      ctx.lineTo(80 + Math.cos(-Math.PI / 2 - 0.05) * 38, 80 + Math.sin(-Math.PI / 2 - 0.05) * 38); ctx.stroke();
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(80, 80);
      ctx.lineTo(80 + Math.cos(-Math.PI / 2 - 0.21) * 56, 80 + Math.sin(-Math.PI / 2 - 0.21) * 56); ctx.stroke();
    });
    const clock = plane(1.1, 1.1, new THREE.MeshStandardMaterial({ map: clockT, transparent: true, roughness: 0.85 }), 47.8, 5, 22, -Math.PI / 2);
    clock.rotation.z = 0.01;
    // 钥匙架（总台后墙）
    box(2.2, 1.4, 0.08, M.wood, 47.8, 2.2, 22, {});
    for (let r = 0; r < 4; r++) for (let cidx = 0; cidx < 8; cidx++) {
      if ((r * 8 + cidx) % 5 === 0) continue; // 缺的钥匙
      const key = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.05), lanternCap);
      key.position.set(47.74, 2.65 - r * 0.3, 21.1 + cidx * 0.26);
      scene.add(key);
    }
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.6), lanternCap);
    bell.position.set(45.5, 1.2, 20.6); scene.add(bell);
    // 电梯门（装饰，永远差一层）
    const elevMat = new THREE.MeshStandardMaterial({ color: 0x8a7442, metalness: 0.9, roughness: 0.25, envMapIntensity: 1.6 });
    box(1.9, 2.6, 0.12, elevMat, 27.5, 1.3, 14.25, {});
    box(0.06, 2.6, 0.16, M.steelDark, 27.5, 1.3, 14.22, {});
    box(2.3, 0.2, 0.2, M.steelDark, 27.5, 2.75, 14.25, {});
    const indT = inlineTex(64, 24, (ctx) => {
      ctx.fillStyle = '#150e08'; ctx.fillRect(0, 0, 64, 24);
      ctx.fillStyle = '#e75c2c'; ctx.font = '18px monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('—', 32, 13);
    });
    const ind = plane(0.4, 0.15, new THREE.MeshStandardMaterial({ map: indT, emissive: 0xa04018, emissiveIntensity: 1.2, roughness: 0.6 }), 27.5, 2.95, 14.32, 0);
    L.dyn.elevInd = { mesh: ind, tex: indT };
    // 正门玻璃内侧凝露
    const condT = inlineTex(128, 128, (ctx, w, h) => {
      const g2 = ctx.createLinearGradient(0, h, 0, 0);
      g2.addColorStop(0, 'rgba(200,220,210,0.16)'); g2.addColorStop(0.5, 'rgba(200,220,210,0.03)');
      g2.addColorStop(1, 'rgba(200,220,210,0)');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 14; i++) {
        const x = Math.random() * w, y0 = h - Math.random() * h * 0.45;
        ctx.strokeStyle = 'rgba(225,240,235,0.10)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x + (Math.random() - 0.5) * 4, h); ctx.stroke();
      }
    });
    plane(5.9, 3.3, new THREE.MeshBasicMaterial({ map: condT, transparent: true, depthWrite: false }), 36, 1.7, 29.85, Math.PI);
  }

  // —— 海洋馆：水草剪影 + 沉没的宴会桌椅（婚宴掉进海里的那部分） ——
  {
    const kelpMat = new THREE.MeshBasicMaterial({ color: 0x06231e, transparent: true, opacity: 0.75, depthWrite: false, side: THREE.DoubleSide });
    L.dyn.kelps = [];
    for (let i = 0; i < 8; i++) {
      const kh = 3 + Math.random() * 3.5;
      const k = new THREE.Mesh(new THREE.PlaneGeometry(0.5 + Math.random() * 0.5, kh), kelpMat);
      k.position.set(-16 + i * 5 + Math.random() * 2, kh / 2 - 0.4, 25.6 + Math.random() * 0.8);
      scene.add(k);
      L.dyn.kelps.push({ mesh: k, phase: i * 1.4 });
    }
    const silMat = new THREE.MeshBasicMaterial({ color: 0x021013, transparent: true, opacity: 0.9, depthWrite: false });
    const sunkT = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.1, 14), silMat);
    sunkT.position.set(2, 0.9, 25.9); sunkT.rotation.z = 0.5; sunkT.rotation.x = 0.3;
    scene.add(sunkT);
    for (let i = 0; i < 3; i++) {
      const ch = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.9, 0.42), silMat);
      ch.position.set(0.4 + i * 1.6, 0.5 + (i % 2) * 0.35, 26 + (i % 2) * 0.4);
      ch.rotation.set(0.4 * i, i, 0.3);
      scene.add(ch);
    }
    // 玻璃底缘藻痕
    const algMat = new THREE.MeshStandardMaterial({ color: 0x1c3a28, roughness: 0.9, transparent: true, opacity: 0.75 });
    for (let i = 0; i < 12; i++) {
      const a = plane(3.4, 0.28 + Math.random() * 0.3, algMat, -17.2 + i * 3.6, 0.2, 23.93, Math.PI);
      a.rotation.z = (Math.random() - 0.5) * 0.06;
    }
  }

  // —— 员工连廊：出入口胶皮条帘 + 白霜斑 ——
  {
    const stripMat = new THREE.MeshStandardMaterial({
      color: 0xb8beb2, roughness: 0.35, transparent: true, opacity: 0.34,
      side: THREE.DoubleSide, envMapIntensity: 1.4, depthWrite: false,
    });
    L.dyn.strips = [];
    [[-17.1, 19.6], [-17.1, -7.2]].forEach(([x, z]) => {
      for (let i = 0; i < 7; i++) {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 2.6), stripMat);
        s.position.set(x - 1.55 + i * 0.5, 1.65, z);
        scene.add(s);
        L.dyn.strips.push({ mesh: s, phase: i * 0.9 + z });
      }
    });
    const frostMat = new THREE.MeshStandardMaterial({ color: 0xd8ddd2, roughness: 0.95, transparent: true, opacity: 0.09, depthWrite: false });
    for (let i = 0; i < 6; i++) {
      const f = plane(0.5 + Math.random() * 0.7, 0.4 + Math.random() * 0.5, frostMat,
        -18.82, 0.6 + Math.random() * 1.6, -4 + i * 4 + Math.random() * 2, Math.PI / 2);
      f.rotation.z = Math.random() * 3;
    }
  }

  // ============================================================
  // 细节密度层 v1.5 —— 第三遍美术：每个空间的「可停下来盯着看」
  // ============================================================

  // —— 宴会厅：深色木墙裙 + 金线（体面的分界线） ——
  {
    const dadoMat = new THREE.MeshStandardMaterial({ ...TX.wood(0.55, 0.7), envMapIntensity: 0.4 });
    dadoMat.userData.tileEvery = 2.2;
    const dado = (w2, d2, x, z, ry = 0) => {
      const m = box(w2, 1.0, d2, tiledMat(dadoMat, Math.max(w2, d2), 1), x, 0.5, z, { ry });
      return m;
    };
    dado(29.4, 0.08, 0, -0.34); dado(29.4, 0.08, 0, -19.66);
    dado(0.08, 19.4, -14.66, -10); dado(0.08, 19.4, 14.66, -10);
    // 金线压顶
    box(29.4, 0.05, 0.1, M.goldFoil, 0, 1.02, -0.36, {});
    box(29.4, 0.05, 0.1, M.goldFoil, 0, 1.02, -19.64, {});
    box(0.1, 0.05, 19.4, M.goldFoil, -14.64, 1.02, -10, {});
    box(0.1, 0.05, 19.4, M.goldFoil, 14.64, 1.02, -10, {});
  }
  // —— 宴会厅：红绸墙幔（沿东西墙的垂坠绸带 + 金穗） ——
  {
    const swagMat = new THREE.MeshStandardMaterial({ color: 0x9e1018, roughness: 0.62, emissive: 0x1c0305, side: THREE.DoubleSide });
    const mkSwag = (x1, z1, x2, z2, y) => {
      const pts = [];
      for (let k = 0; k <= 10; k++) {
        const t = k / 10;
        pts.push(new THREE.Vector3(x1 + (x2 - x1) * t, y - Math.sin(t * Math.PI) * 0.55, z1 + (z2 - z1) * t));
      }
      const sw = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.09, 7), swagMat);
      scene.add(sw);
      // 两端金穗
      for (const [ex, ez] of [[x1, z1], [x2, z2]]) {
        const ta = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.34, 7), new THREE.MeshStandardMaterial({ color: 0xc79a3a, metalness: 0.5, roughness: 0.5 }));
        ta.position.set(ex, y - 0.2, ez);
        scene.add(ta);
      }
    };
    for (let i = 0; i < 4; i++) {
      mkSwag(-14.62, -2 - i * 4.4, -14.62, -6 - i * 4.4, 4.3);
      mkSwag(14.62, -2 - i * 4.4, 14.62, -6 - i * 4.4, 4.3);
    }
    // 南墙门两侧对幛
    mkSwag(-6.5, -0.34, -2.4, -0.34, 4.6);
    mkSwag(2.4, -0.34, 6.5, -0.34, 4.6);
  }
  // —— 桌面：红烛（黄铜座 + 焰苗广告牌）+ 筷架 + 折扇巾 ——
  {
    L.dyn.flames = [];
    const brass = new THREE.MeshStandardMaterial({ color: 0xa8842e, metalness: 0.85, roughness: 0.35 });
    const waxMat = new THREE.MeshStandardMaterial({ color: 0xc01018, roughness: 0.45, emissive: 0x40060a });
    const flameTex = inlineTex(64, 96, (ctx, w2, h2) => {
      const g = ctx.createRadialGradient(w2 / 2, h2 * 0.62, 2, w2 / 2, h2 * 0.55, w2 * 0.55);
      g.addColorStop(0, 'rgba(255,246,214,1)');
      g.addColorStop(0.35, 'rgba(255,196,110,0.85)');
      g.addColorStop(0.75, 'rgba(235,110,40,0.3)');
      g.addColorStop(1, 'rgba(200,60,20,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.ellipse(w2 / 2, h2 * 0.55, w2 * 0.32, h2 * 0.46, 0, 0, Math.PI * 2); ctx.fill();
    });
    const flameMat0 = new THREE.MeshBasicMaterial({ map: flameTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, fog: false });
    allTables.forEach(([tx, tz], ti) => {
      const holder = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.055, 0.05, 10), brass);
      holder.position.set(tx - 0.12, 0.885, tz + 0.3);
      scene.add(holder);
      const candle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.16, 8), waxMat);
      candle.position.set(tx - 0.12, 0.985, tz + 0.3);
      scene.add(candle);
      const fm = flameMat0.clone();
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.14), fm);
      fl.position.set(tx - 0.12, 1.115, tz + 0.3);
      fl.onBeforeRender = (r, s, cam) => { fl.quaternion.copy(cam.quaternion); };
      scene.add(fl);
      L.dyn.flames.push({ mesh: fl, mat: fm, phase: ti * 1.7, y0: 1.115 });
    });
    // 筷子（每席一双，金属枕）+ 折扇巾
    const chopGeo = new THREE.BoxGeometry(0.012, 0.012, 0.24);
    const chopMat = new THREE.MeshStandardMaterial({ color: 0x6e3a20, roughness: 0.5 });
    const chops = new THREE.InstancedMesh(chopGeo, chopMat, allTables.length * 16);
    const restGeo = new THREE.CylinderGeometry(0.02, 0.025, 0.05, 6);
    const rests = new THREE.InstancedMesh(restGeo, M.porcelain, allTables.length * 8);
    const fanGeo = new THREE.ConeGeometry(0.06, 0.16, 5, 1, true);
    const fanMat = new THREE.MeshStandardMaterial({ color: 0xd8322a, roughness: 0.7, side: THREE.DoubleSide });
    const fans = new THREE.InstancedMesh(fanGeo, fanMat, allTables.length * 8);
    let ii = 0, ri = 0;
    const d2 = new THREE.Object3D();
    allTables.forEach(([tx, tz]) => {
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2;
        const bx = tx + Math.cos(a) * 0.98, bz = tz + Math.sin(a) * 0.98;
        for (const s of [-0.012, 0.012]) {
          d2.position.set(bx + Math.cos(a + Math.PI / 2) * s, 0.805, bz + Math.sin(a + Math.PI / 2) * s);
          d2.rotation.set(0, -a + Math.PI / 2, 0);
          d2.updateMatrix();
          chops.setMatrixAt(ii++, d2.matrix);
        }
        d2.position.set(bx + Math.cos(a) * 0.1, 0.81, bz + Math.sin(a) * 0.1);
        d2.rotation.set(0, -a, 0); d2.updateMatrix();
        rests.setMatrixAt(ri, d2.matrix);
        // 折成扇形的餐巾立在盘上
        d2.position.set(tx + Math.cos(a) * 0.78, 0.9, tz + Math.sin(a) * 0.78);
        d2.rotation.set(0, -a + Math.PI, 0); d2.updateMatrix();
        fans.setMatrixAt(ri, d2.matrix);
        ri++;
      }
    });
    scene.add(chops, rests, fans);
  }
  // —— 宴会厅：舞台花篮 ×2 + 立式话筒 ——
  {
    const basketMat = new THREE.MeshStandardMaterial({ color: 0x8a6034, roughness: 0.8 });
    const petalMats = [0xd8322a, 0xe7b64c, 0xd86a9a].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.65 }));
    [[-4.6, -17.2], [4.6, -17.2]].forEach(([x, z]) => {
      const basket = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.13, 0.36, 10), basketMat);
      basket.position.set(x, 0.78, z);
      scene.add(basket);
      const stand = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.14, 0.6, 8), M.steelDark);
      stand.position.set(x, 0.3, z);
      scene.add(stand);
      TX.srand(x * 7 + 100);
      for (let k = 0; k < 14; k++) {
        const p = new THREE.Mesh(new THREE.SphereGeometry(0.05 + TX.rnd() * 0.035, 7, 6), petalMats[k % 3]);
        p.position.set(x + (TX.rnd() - 0.5) * 0.4, 1.02 + TX.rnd() * 0.22, z + (TX.rnd() - 0.5) * 0.35);
        p.scale.y = 0.8;
        scene.add(p);
      }
    });
  }

  // —— 服务走廊：灭火器 + 打卡钟 + 湿痕水洼 + 管线滴渍 ——
  {
    const extMat = new THREE.MeshStandardMaterial({ color: 0xa01218, roughness: 0.35, envMapIntensity: 0.9 });
    const ext = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.4, 10), extMat);
    ext.position.set(18.5, 0.62, -7.72); scene.add(ext);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.12, 6), M.steelDark);
    nozzle.position.set(18.55, 0.86, -7.7); nozzle.rotation.z = 0.7; scene.add(nozzle);
    plane(0.3, 0.36, new THREE.MeshStandardMaterial({ map: TX.signage('灭火器', '#e8e2d2', '#8e1016', 100), roughness: 0.9 }), 18.5, 1.35, -7.79, 0);
    // 打卡钟（东段墙上——员工动线的证据）
    box(0.28, 0.36, 0.12, new THREE.MeshStandardMaterial({ color: 0x3a4048, roughness: 0.5 }), 39.9, 1.5, 12.5, {});
    plane(0.5, 0.2, new THREE.MeshStandardMaterial({ map: TX.signage('上工打卡', '#d8d2c2', '#2e3630', 72), roughness: 0.9 }), 39.83, 1.85, 12.5, -Math.PI / 2);
    // 卡槽架
    for (let r = 0; r < 2; r++) for (let cix = 0; cix < 5; cix++) {
      const cardm = new THREE.Mesh(new THREE.BoxGeometry(0.008, 0.12, 0.07),
        new THREE.MeshStandardMaterial({ color: 0xd8cfb8, roughness: 0.9 }));
      cardm.position.set(39.9, 1.1 - r * 0.18, 12.2 + cix * 0.12);
      scene.add(cardm);
    }
    // 湿痕水洼（走廊里两处反光洼）
    const wetMat = new THREE.MeshStandardMaterial({ color: 0x14181a, roughness: 0.04, metalness: 0.4, envMapIntensity: 2.2, transparent: true, opacity: 0.72 });
    [[21, -5.2, 1.1], [36.8, 6.5, 1.4]].forEach(([x, z, s]) => {
      const p = new THREE.Mesh(new THREE.CircleGeometry(1, 18), wetMat);
      p.rotation.x = -Math.PI / 2; p.scale.set(s, s * 0.5, 1);
      p.position.set(x, 0.015, z);
      scene.add(p);
    });
    // 管线滴渍（管下墙面的深色垂痕）
    const dripMat = new THREE.MeshStandardMaterial({ color: 0x3c342a, roughness: 0.95, transparent: true, opacity: 0.5 });
    for (let i = 0; i < 4; i++) {
      const dp = plane(0.14 + Math.random() * 0.2, 0.7 + Math.random() * 1.2, dripMat, 19 + i * 5.2, 2.4, -7.79, 0);
      dp.rotation.z = (Math.random() - 0.5) * 0.06;
    }
  }

  // —— 大堂：总台道具 + 行李车 + 立牌 + 柱面红绸结 ——
  {
    // 总台：登记簿 + 红包摞 + 热水瓶 + 算盘
    box(0.34, 0.03, 0.24, new THREE.MeshStandardMaterial({ color: 0xd8cfb8, roughness: 0.9 }), 45.4, 1.2, 22.8, {});
    box(0.3, 0.015, 0.2, new THREE.MeshStandardMaterial({ color: 0x8e1016, roughness: 0.8 }), 45.42, 1.225, 22.78, { ry: 0.12 });
    for (let k = 0; k < 4; k++) {
      box(0.16, 0.012, 0.09, new THREE.MeshStandardMaterial({ color: 0xb3121c, roughness: 0.7 }), 45.45, 1.2 + k * 0.014, 21.4 + (k % 2) * 0.02, { ry: k * 0.14 });
    }
    const thermos = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.34, 12),
      new THREE.MeshStandardMaterial({ color: 0x2e8048, roughness: 0.3, envMapIntensity: 1.2 }));
    thermos.position.set(45.6, 1.35, 25.2); scene.add(thermos);
    const abacus = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.14), M.wood);
    abacus.position.set(45.35, 1.19, 23.6); abacus.rotation.y = -0.2; scene.add(abacus);
    // 立式铜牌「喜宴 · 宴会厅 →」
    const standSign = new THREE.Group();
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 1.35, 10), M.gold);
    pole.position.y = 0.68; standSign.add(pole);
    const sbase = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.05, 12), M.gold);
    sbase.position.y = 0.03; standSign.add(sbase);
    const sboard = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.03),
      new THREE.MeshStandardMaterial({ map: TX.signage('喜宴 · 宴会厅 →', '#e7c25c', '#6e0d12', 56), roughness: 0.5, metalness: 0.3 }));
    sboard.position.y = 1.45; standSign.add(sboard);
    standSign.position.set(33.5, 0, 20.5); standSign.rotation.y = 0.5;
    scene.add(standSign);
    collide(33.2, 20.2, 33.8, 20.8);
    // 行李推车（黄铜弓架）
    const cart2 = new THREE.Group();
    const deck = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.06, 0.6), M.wood);
    deck.position.y = 0.28; cart2.add(deck);
    for (const s of [-0.5, 0.5]) {
      const arch = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.022, 8, 20, Math.PI), M.gold);
      arch.position.set(s, 0.3, 0); arch.rotation.y = Math.PI / 2;
      cart2.add(arch);
    }
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.1, 8), M.gold);
    bar.rotation.z = Math.PI / 2; bar.position.y = 0.85; cart2.add(bar);
    for (const [sx, sy, sz, c] of [[-0.25, 0.42, 0, 0x4a3828], [0.2, 0.4, 0.1, 0x35424e], [0.05, 0.62, -0.05, 0x6e4a2e]]) {
      const sc = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.34), new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 }));
      sc.position.set(sx, sy, sz); sc.rotation.y = sx;
      cart2.add(sc);
    }
    cart2.position.set(29.5, 0, 16.5); cart2.rotation.y = -0.4;
    scene.add(cart2);
    collide(28.9, 16, 30.1, 17);
    // 镜面柱红绸结（婚宴布置的痕迹）
    [[30, 18], [42, 18], [30, 26], [42, 26]].forEach(([x, z]) => {
      const bowMat = new THREE.MeshStandardMaterial({ color: 0xb3121c, roughness: 0.6, emissive: 0x200406 });
      const knot = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), bowMat);
      knot.position.set(x, 2.6, z + 0.56); scene.add(knot);
      for (const s of [-1, 1]) {
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.035, 6, 12), bowMat);
        loop.position.set(x + s * 0.13, 2.62, z + 0.56);
        loop.rotation.y = s * 0.7; loop.rotation.z = s * 0.5;
        scene.add(loop);
        const ribbon = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.5), bowMat);
        ribbon.position.set(x + s * 0.09, 2.3, z + 0.55);
        ribbon.rotation.z = s * 0.25; ribbon.rotation.y = 0.2;
        scene.add(ribbon);
      }
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.57, 0.57, 0.14, 20, 1, true), bowMat);
      belt.position.set(x, 2.6, z); scene.add(belt);
    });
    // 价目板（总台后墙）
    const priceT = inlineTex(256, 200, (ctx, w2, h2) => {
      ctx.fillStyle = '#26201a'; ctx.fillRect(0, 0, w2, h2);
      ctx.strokeStyle = '#8a6a34'; ctx.lineWidth = 4; ctx.strokeRect(6, 6, w2 - 12, h2 - 12);
      ctx.fillStyle = '#d8c9a2'; ctx.font = '22px "Noto Sans SC","Microsoft YaHei",sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('客 房 价 目', w2 / 2, 34);
      ctx.font = '15px "Noto Sans SC","Microsoft YaHei",sans-serif';
      ctx.textAlign = 'left';
      ['标准间 …… 128 元', '豪华间 …… 188 元', '套　房 …… 288 元', '钟点房 …… 40 元'].forEach((s, i) => {
        ctx.fillText(s, 30, 72 + i * 30);
      });
      ctx.fillStyle = '#9a8a6a'; ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('今日喜宴包场 · 恕不接待散客', w2 / 2, h2 - 16);
    });
    plane(1.15, 0.9, new THREE.MeshStandardMaterial({ map: priceT, roughness: 0.85 }), 47.8, 3.4, 24.6, -Math.PI / 2);
  }

  // —— 海洋馆：沉没吊灯/圆桌残影 + 漂游盖头 + 票务栏杆 ——
  {
    const silMat2 = new THREE.MeshBasicMaterial({ color: 0x021013, transparent: true, opacity: 0.85, depthWrite: false });
    // 沉没的枝形吊灯（婚宴掉进海里的部分——和大厅同款的轮廓）
    const sunkCh = new THREE.Group();
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.07, 6, 20), silMat2);
    ring1.rotation.x = Math.PI / 2 + 0.5; sunkCh.add(ring1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 6, 16), silMat2);
    ring2.rotation.x = Math.PI / 2 + 0.5; ring2.position.y = 0.35; sunkCh.add(ring2);
    const chain2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.4, 5), silMat2);
    chain2.position.y = 1.4; chain2.rotation.z = 0.3; sunkCh.add(chain2);
    sunkCh.position.set(-11, 1.6, 26.4);
    scene.add(sunkCh);
    // 漂游的红盖头（水里唯一的红——缓慢翻卷）
    const veilDriftMat = new THREE.MeshBasicMaterial({ color: 0x6e0d12, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false });
    const veilDrift = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9, 4, 4), veilDriftMat);
    veilDrift.position.set(8, 2.2, 26.0);
    scene.add(veilDrift);
    L.dyn.veilDrift = veilDrift;
    // 票务隔离带（不锈钢立柱 + 红绒带——非绳网，deco）
    [[19.5, 21.4], [17.5, 21.4]].forEach(([x, z]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.9, 8), M.steel);
      post.position.set(x, 0.45, z); scene.add(post);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), M.steel);
      cap.position.set(x, 0.92, z); scene.add(cap);
    });
    const beltPts = [];
    for (let k = 0; k <= 8; k++) {
      const t = k / 8;
      beltPts.push(new THREE.Vector3(19.5 - t * 2, 0.86 - Math.sin(t * Math.PI) * 0.1, 21.4));
    }
    const belt2 = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(beltPts), 10, 0.035, 6),
      new THREE.MeshStandardMaterial({ color: 0x6e1013, roughness: 0.8 }));
    scene.add(belt2);
    // 玻璃钢框底部锈痕
    const rustMat = new THREE.MeshStandardMaterial({ color: 0x4a3020, roughness: 0.95, transparent: true, opacity: 0.6 });
    for (let i = 0; i < 12; i++) {
      const r = plane(0.32, 0.4 + Math.random() * 0.3, rustMat, -17.2 + i * 3.6 + 1.78, 0.28, 23.9, Math.PI);
      r.rotation.z = (Math.random() - 0.5) * 0.2;
    }
  }

  // —— 员工连廊：搪瓷货架 + 褪色标语 + 盘管 ——
  {
    // 三层货架（搪瓷盆/罐头/纸箱）
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x4a4640, metalness: 0.6, roughness: 0.6 });
    for (let lv = 0; lv < 3; lv++) box(0.4, 0.04, 2.4, shelfMat, -18.7, 0.4 + lv * 0.55, 16.5, {});
    for (const s of [-1.15, 1.15]) box(0.05, 1.7, 0.05, shelfMat, -18.7, 0.85, 16.5 + s, {});
    collide(-19, 15.2, -18.4, 17.8);
    TX.srand(505);
    for (let k = 0; k < 7; k++) {
      const lv = k % 3;
      const kind = k % 3;
      if (kind === 0) {
        const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.1, 0.09, 12),
          new THREE.MeshStandardMaterial({ color: 0xe8e4da, roughness: 0.25, envMapIntensity: 1.0 }));
        basin.position.set(-18.7, 0.47 + lv * 0.55, 15.6 + TX.rnd() * 1.8);
        scene.add(basin);
      } else if (kind === 1) {
        const jar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.16, 10),
          new THREE.MeshStandardMaterial({ color: 0x8a7a4a, roughness: 0.4 }));
        jar.position.set(-18.7, 0.5 + lv * 0.55, 15.6 + TX.rnd() * 1.8);
        scene.add(jar);
      } else {
        const bx2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.34),
          new THREE.MeshStandardMaterial({ color: 0x7a5c38, roughness: 0.95 }));
        bx2.position.set(-18.7, 0.53 + lv * 0.55, 15.7 + TX.rnd() * 1.6);
        bx2.rotation.y = TX.rnd() * 0.4;
        scene.add(bx2);
      }
    }
    // 褪色安全标语（旧冷库时代的）
    plane(2.2, 0.5, new THREE.MeshStandardMaterial({
      map: TX.signage('安全生产 · 人人有责', '#9aa294', '#3a4038', 60), roughness: 0.95,
      transparent: true, opacity: 0.8,
    }), -15.38, 2.2, 4, -Math.PI / 2);
    // 盘起的消防水带
    const hose = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.055, 8, 20), new THREE.MeshStandardMaterial({ color: 0x6e2018, roughness: 0.8 }));
    hose.position.set(-15.4, 1.4, 12); hose.rotation.y = Math.PI / 2;
    scene.add(hose);
    box(0.06, 0.7, 0.7, new THREE.MeshStandardMaterial({ color: 0x8e1016, roughness: 0.7 }), -15.36, 1.4, 12, {});
  }

  // —— 门外散场空地：车棚剪影 + 路灯 ——
  {
    const carMat = new THREE.MeshStandardMaterial({ color: 0x0c0e10, roughness: 0.6, metalness: 0.3 });
    [[-5.5, 14.5, 0.3], [0.5, 15.5, -0.2], [5.5, 14, 0.15]].forEach(([x, z, ry]) => {
      const carBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.5, 4.2), carMat);
      carBody.position.set(x, 0.45, z); carBody.rotation.y = ry;
      scene.add(carBody);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.42, 2.2), carMat);
      cab.position.set(x, 0.9, z + 0.2); cab.rotation.y = ry;
      scene.add(cab);
    });
  }

  // ============================================================
  // 全局雾与底光
  // ============================================================
  scene.fog = new THREE.FogExp2(0x0d0a08, 0.016);
  L.dyn.fog = scene.fog;
  const amb = new THREE.AmbientLight(0x33241c, 0.7);
  scene.add(amb);
  L.dyn.ambient = amb;
  const hemi = new THREE.HemisphereLight(0x2a2018, 0x0d0a08, 0.5);
  scene.add(hemi);

  return L;
}
