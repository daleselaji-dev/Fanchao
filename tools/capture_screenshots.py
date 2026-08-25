#!/usr/bin/env python3
"""批量截取 H00-R0 Web 行为灰盒的节拍场景图。

用法：python3 tools/capture_screenshots.py
依赖：本机安装 Chrome/Chromium（headless），仓库内 demo/web-graybox 可直接以 file:// 打开。
场景通过 URL 参数复现（见 demo/web-graybox/main.js 的 applySceneParams），保证截图可复现。
"""
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
PAGE = (ROOT / "demo/web-graybox/index.html").as_uri()
OUT = ROOT / "assets/screenshots"

CHROME_CANDIDATES = ["google-chrome", "chromium", "chromium-browser"]

SCENE_BUILT = "H00 | Scene built: A/B/C/D/E, archive station, returner route D-B-C-E-D."
CLOCK = "H00 | Beat clock started."

SHOTS = [
    ("web_00_overview_annotated", {
        "freeze": 1, "cams": 1,
        "hint": "标注模式（V）：实体旧路线、低处范围与三组固定机位——设计标注，不进入正式画面",
        "seedlog": f"{SCENE_BUILT}|H00 | Annotation layer ON (cams, old route, low zone).",
    }),
    ("web_01_beat1_enter_b", {
        "freeze": 1, "beat": 0, "px": 17.9, "py": 10.9, "pa": 1.57,
        "ent": 0, "entwork": "整理箱位",
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Returner idle at D. Player must not see it yet (beat 00-12).",
    }),
    ("web_02_beat2_route_choice", {
        "freeze": 1, "beat": 1, "px": 8.0, "py": 12.5, "pa": 0,
        "ent": 0.5,
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Returner departing D toward B. Player hears steady work shoes and tray, sees nothing (sound before sight).",
    }),
    ("web_03_beat3_archive", {
        "freeze": 1, "beat": 2, "px": 6.8, "py": 20.9, "pa": -1.2,
        "archived": 1, "crt": 1, "ent": 5, "entwork": "在 C 门外放盘",
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Archive interaction distance: 174.0.|H00 | Archive state changed: COMPLETE.|H00 | CRT: ordinary wedding footage for a few seconds. No monster, no explanation.|H00 | Returner passes outside door C. Only shoulder line cut by the door frame.",
    }),
    ("web_04_beat4_return_choice", {
        "freeze": 1, "beat": 3, "px": 12.0, "py": 16.7, "pa": 0,
        "archived": 1, "ent": 9, "entwork": "洗涤与放置",
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Acoustic state: LOW (music thicker and farther; no water, no filter).|H00 | Returner working in E. Player on the low route hears metal tray, no line of sight.",
    }),
    ("web_05_beat5_evidence", {
        "freeze": 1, "beat": 4, "px": 15.5, "py": 16.9, "pa": 3.14,
        "archived": 1, "ent": 11, "evidence": 1,
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Acoustic state: LOW (music thicker and farther; no water, no filter).|H00 | Evidence: petrified compound-eye front side, brief lateral view (1.6s). No jumpscare.",
    }),
    ("web_06_beat6_back_a", {
        "freeze": 1, "beat": 5, "px": 16.0, "py": 8.5, "pa": -1.57,
        "archived": 1, "ent": 13.5,
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Demo loop complete: player returned to A. Returner keeps its old route. No ending explained.",
    }),
    ("web_07_yield_no_push", {
        "freeze": 1, "px": 12.6, "py": 16.6, "pa": 0,
        "ent": 6.1, "wait": 1,
        "hint": "让行合同：路线被玩家占用时，实体原地等待——不推挤、不加速、不追逐",
        "seedlog": f"{SCENE_BUILT}|{CLOCK}|H00 | Returner waiting: route occupied by player. No push, no chase.",
    }),
    ("web_08_clean_start", {
        "freeze": 1,
        "seedlog": SCENE_BUILT,
    }),
]


def find_chrome():
    for c in CHROME_CANDIDATES:
        if subprocess.run(["which", c], capture_output=True).returncode == 0:
            return c
    sys.exit("未找到 Chrome/Chromium")


def main():
    chrome = find_chrome()
    OUT.mkdir(parents=True, exist_ok=True)
    for name, params in SHOTS:
        url = f"{PAGE}?{urlencode(params)}"
        out = OUT / f"{name}.png"
        out.unlink(missing_ok=True)
        # 容器内 Chrome 完成截图后可能挂起不退出，用 timeout 强制回收，
        # 以输出文件存在且非空作为成功判据。
        cmd = [
            "timeout", "25", chrome, "--headless=new", "--no-sandbox",
            "--disable-dev-shm-usage", "--disable-gpu", "--hide-scrollbars",
            "--window-size=1560,1000", "--virtual-time-budget=2500",
            f"--screenshot={out}", url,
        ]
        r = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        ok = out.exists() and out.stat().st_size > 10000
        print(("OK  " if ok else "FAIL"), out.name)
        if not ok:
            print(r.stderr[-500:])
            sys.exit(1)


if __name__ == "__main__":
    main()
