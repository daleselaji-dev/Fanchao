// URL 参数确定性场景复现与固定机位（截图/审阅用，不进入正常游玩）。
// 通用参数：px,pz,pa（玩家位姿）/ ent（路线进度，小数）/ entmode=work|wait /
//          archived=1 / crt=1 / freeze=1 / hud=0 / debug=1 /
//          camx,camy,camz,lookx,looky,lookz（固定机位）/ shot=<预设名>

import { placeOnRoute } from "./entity.js";

// 三关键镜头 + 审阅机位（08 §8）
const PRESETS = {
  // 关键镜头 1：W00 大厅看见时刻——椅群一致朝向 + 热气 + 空白横幅（玩家移出画面）
  w00_hall: { cam: [17.9, 1.75, 8.9, 13.2, 1.0, 2.9], px: 21.5, pz: 8.8, hud: 0, freeze: 1 },
  // 关键镜头 2：C 门框切开肩线——他在 C 门外放盘，左肩被门框切掉
  doorframe: { cam: [5.7, 1.5, 21.6, 9.1, 1.25, 16.5], ent: 5, entmode: "work", hud: 0, freeze: 1 },
  // 关键镜头 3：正面即背——玩家绕面视角（核心恐怖帧）
  backfront: { cam: [18.1, 1.52, 14.1, 21.4, 1.2, 13.75], ent: 2.52, pose: 0.21, hud: 0, freeze: 1 },
  // 折返倒走：他从洗涤台退出来，朝你走来，用背影
  reverse: { cam: [19.9, 1.6, 18.8, 17.7, 1.0, 21.9], ent: 9.4, pose: 0.3, hud: 0, freeze: 1 },
  // 让行合同：完全静止地等
  yieldwait: { cam: [7.2, 1.75, 17.0, 10.8, 1.05, 16.55], ent: 4.55, entmode: "wait", px: 9.9, pz: 16.95, pa: 0, pose: 0.2, hud: 0, freeze: 1 },
  // C 房归档与 CRT
  archive: { cam: [8.3, 1.55, 22.9, 5.1, 1.0, 19.7], px: 6.4, pz: 21.9, pa: -2.35, archived: 1, crt: 1, freeze: 1 },
  // 低处路线（伴奏变厚变远的一段，柜脚受压痕在左）
  low_route: { cam: [16.6, 1.15, 16.35, 6.0, 0.75, 16.1], px: 11.8, pz: 16.55, pa: Math.PI, freeze: 1, hud: 0 },
  // 回到 A：回路完成
  return_a: { cam: [18.0, 1.9, 8.9, 12.5, 0.85, 3.8], px: 16.2, pz: 8.2, pa: -Math.PI / 2, archived: 1, ent: 13.5, pose: 0.1, freeze: 1 },
  // 顶视验证（对照 assets/maps/h00_r0_topdown.png）
  topdown: { cam: [19.0, 30.5, 13.85, 19.0, 0, 13.8], debug: 1, hud: 0, freeze: 1 },
};

export function applySceneParams({ playerState, entity, camera, syncCamera }) {
  const q = new URLSearchParams(location.search);
  const out = { frozen: false, hud: true, debug: false, fixedCam: false, archived: false, crt: false, pose: null };
  if (![...q.keys()].length) return out;

  const preset = q.get("shot") ? PRESETS[q.get("shot")] : null;
  const get = (k) => (q.has(k) ? q.get(k) : (preset && preset[k] !== undefined ? String(preset[k]) : null));
  const num = (k) => {
    const v = get(k);
    return v === null ? null : parseFloat(v);
  };

  if (num("px") !== null) playerState.x = num("px");
  if (num("pz") !== null) playerState.z = num("pz");
  if (num("pa") !== null) playerState.yaw = num("pa");

  if (num("ent") !== null) placeOnRoute(entity, num("ent"));
  const entmode = get("entmode");
  if (entmode === "wait") entity.mode = "WAIT";
  if (entmode && entmode.startsWith("work")) {
    entity.mode = "WORK";
    entity.pauseRemaining = 99;
    entity.workPhase = 0.4;
  }
  if (num("pose") !== null) {
    entity.walkPhase = num("pose");
    out.pose = num("pose");
  }

  if (get("archived") === "1") out.archived = true;
  if (get("crt") === "1") out.crt = true;
  if (get("hud") === "0") out.hud = false;
  if (get("debug") === "1") out.debug = true;
  if (get("freeze") === "1") out.frozen = true;

  const cam = preset && preset.cam;
  const camx = num("camx");
  if (cam || camx !== null) {
    const c = camx !== null
      ? [camx, num("camy") ?? 1.6, num("camz") ?? 0, num("lookx") ?? 0, num("looky") ?? 1.2, num("lookz") ?? 0]
      : cam;
    camera.position.set(c[0], c[1], c[2]);
    camera.lookAt(c[3], c[4], c[5]);
    out.fixedCam = true;
  } else if (syncCamera) {
    syncCamera();
  }
  return out;
}
