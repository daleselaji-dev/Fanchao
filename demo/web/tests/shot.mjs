"use strict";
/*
 * 实机截图/巡场工具：用系统 Chrome（SwiftShader WebGL）打开最终 Demo，
 * 通过 __H00 钩子摆放玩家位姿、手动 tick、截图。
 * 用法：node demo/web/tests/shot.mjs [--serve] out.png "x,z,yaw,pitch" [ticks]
 */
import { chromium } from "playwright-core";
import { spawn } from "node:child_process";

const CHROME = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";
const PORT = 8807;

export async function launch() {
  const server = spawn("python3", ["-m", "http.server", String(PORT)], { cwd: process.cwd(), stdio: "ignore" });
  await new Promise(r => setTimeout(r, 800));
  const browser = await chromium.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      "--headless=new", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
      "--hide-scrollbars", "--mute-audio", "--force-device-scale-factor=1",
    ],
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  page.on("console", m => { if (m.type() === "error") console.error("[page]", m.text()); });
  page.on("pageerror", e => console.error("[pageerror]", e.message));
  const rtscale = process.env.RTSCALE || "1";
  await page.goto(`http://127.0.0.1:${PORT}/demo/web/index.html?test=1&rtscale=${rtscale}`, { waitUntil: "networkidle" });
  await page.waitForFunction(() => window.__H00 !== undefined, { timeout: 60000 });
  return { browser, page, server };
}

export async function snap(page, path) {
  await page.screenshot({ path, timeout: 180000 });
}

export async function pose(page, x, z, yaw, pitch = 0, ticks = 30) {
  await page.evaluate(([x, z, yaw, pitch, ticks]) => {
    const H = window.__H00;
    H.start();
    H.sim.player.x = x; H.sim.player.z = z;
    H.setYaw(yaw, pitch);
    for (let i = 0; i < ticks; i++) H.tick(1 / 60);
  }, [x, z, yaw, pitch, ticks]);
}

// CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const [out, poseStr, ticksStr] = process.argv.slice(2);
  const [x, z, yaw, pitch] = (poseStr || "6.5,7.8,3.14,0").split(",").map(Number);
  const { browser, page, server } = await launch();
  const t0 = Date.now();
  await pose(page, x, z, yaw, pitch || 0, Number(ticksStr || 30));
  console.log("ticks done in", ((Date.now() - t0) / 1000).toFixed(1), "s");
  await snap(page, out || "shot.png");
  await browser.close();
  server.kill();
  console.log("saved", out);
}
