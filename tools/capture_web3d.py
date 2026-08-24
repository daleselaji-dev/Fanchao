#!/usr/bin/env python3
"""批量截取 H00-R0 3D 灰盒（demo/web3d）的关键镜头与节拍场景图。

用法：python3 tools/capture_web3d.py
依赖：本机 Chrome/Chromium（headless，SwiftShader 软件 WebGL）。
ES Modules 需要 HTTP 服务，脚本自带临时 http.server。
场景通过 URL 参数确定性复现（见 demo/web3d/src/shots.js），保证截图可重跑。
"""
import http.server
import socketserver
import subprocess
import sys
import threading
from pathlib import Path
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/screenshots-web3d"
PORT = 8734

CHROME_CANDIDATES = ["google-chrome", "chromium", "chromium-browser"]

# (文件名, URL 参数)。三关键镜头在前：大厅看见时刻 / 门框剪影 / 正面即背。
SHOTS = [
    ("web3d_00_key_w00_hall",   {"shot": "w00_hall"}),
    ("web3d_01_key_doorframe",  {"shot": "doorframe"}),
    ("web3d_02_key_backfront",  {"shot": "backfront"}),
    ("web3d_03_reverse_walk",   {"shot": "reverse"}),
    ("web3d_04_yield_no_push",  {"shot": "yieldwait"}),
    ("web3d_05_archive_crt",    {"shot": "archive"}),
    ("web3d_06_low_route",      {"shot": "low_route"}),
    ("web3d_07_return_a",       {"shot": "return_a"}),
    ("web3d_08_debug_topdown",  {"shot": "topdown"}),
]


def find_chrome():
    for c in CHROME_CANDIDATES:
        if subprocess.run(["which", c], capture_output=True).returncode == 0:
            return c
    sys.exit("未找到 Chrome/Chromium")


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a):
        pass

    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(ROOT), **kw)


def main():
    chrome = find_chrome()
    OUT.mkdir(parents=True, exist_ok=True)
    with socketserver.TCPServer(("127.0.0.1", PORT), Quiet) as httpd:
        threading.Thread(target=httpd.serve_forever, daemon=True).start()
        failed = False
        for name, params in SHOTS:
            url = f"http://127.0.0.1:{PORT}/demo/web3d/?{urlencode(params)}"
            out = OUT / f"{name}.png"
            out.unlink(missing_ok=True)
            cmd = [
                "timeout", "22", chrome, "--headless=new", "--no-sandbox",
                "--disable-dev-shm-usage", "--hide-scrollbars",
                "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
                "--window-size=1280,720", "--virtual-time-budget=3500",
                f"--screenshot={out}", url,
            ]
            r = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
            ok = out.exists() and out.stat().st_size > 12000
            print(("OK  " if ok else "FAIL"), out.name)
            if not ok:
                print(r.stderr[-600:])
                failed = True
        httpd.shutdown()
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
