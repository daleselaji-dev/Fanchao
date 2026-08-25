#!/usr/bin/env python3
"""生成 H00-R0 俯视空间与行为地图（SVG + PNG）。

几何数据与 demo/web/main.js 保持一致（米制，y 向下）。
输出：assets/maps/h00_r0_topdown.svg 与 .png
"""
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "assets/maps"

S = 30          # px / m
OX, OY = 30, 96 # 地图偏移（顶部留标题）
W, H = 1200, 1210

def X(v): return OX + v * S
def Y(v): return OY + v * S

WALLS = [
    (1.4, 0.9, 35.2, 0.6), (1.4, 25.5, 35.2, 0.6), (1.4, 0.9, 0.6, 25.2), (35.4, 0.9, 0.6, 25.2),
    (2, 9.5, 15, 0.6), (19, 9.5, 16.4, 0.6),
    (2, 17.3, 6, 0.6), (9.6, 17.3, 8.4, 0.6), (19.6, 17.3, 8.4, 0.6), (31, 17.3, 4.4, 0.6),
    (13, 17.9, 0.6, 7.6), (24, 17.9, 0.6, 7.6),
]
ROOMS = [
    ("A 婚宴厅", "公共现实底片 · 收场中的婚宴", 2, 1.5, 33.4, 8.0, "#7c5a4b"),
    ("B 后场服务走廊", "唯一路线判断点：浅处 / 低处", 2, 10.1, 33.4, 7.2, "#5f7169"),
    ("C 录像/广播室", "证据房：REC/PAUSE 归档", 2, 17.9, 11, 7.6, "#5c646a"),
    ("E 洗涤/器材间", "回返点 · 工作痕迹", 13.6, 17.9, 10.4, 7.6, "#63695f"),
    ("D 卸货口", "实体旧路线起点 · 硬质受压证据", 24.6, 17.9, 10.8, 7.6, "#6d5f4c"),
]
FURN = [
    (2.6, 2.0, 1.2, 0.9, "音箱（伴奏声源）"), (32.6, 7.6, 1.6, 1.0, "备餐车"),
    (4, 10.4, 11, 1.3, "服务台"), (21.5, 10.4, 11, 1.3, "保温台"),
    (6, 15.0, 6, 1.1, "器材架"), (14, 15.0, 7, 1.1, "器材架"),
    (3.2, 19.0, 4.6, 1.5, "录像卡座 REC/PAUSE（任务点）"), (11.6, 19.2, 0.9, 4.2, "磁带架"),
    (14.5, 23.6, 5.5, 1.2, "洗涤台"), (22.4, 19.4, 1.0, 3.4, "沥水架"), (14.9, 19.4, 1.6, 1.2, "器材篮"),
    (26, 20.5, 1.6, 1.6, "货箱"), (27.9, 22.7, 1.6, 1.6, ""), (32.6, 20.9, 1.6, 1.6, ""),
    (31, 18.6, 4.4, 1.0, "卸货台"),
]
TABLES = [(9, 5, 2.1), (20, 4.2, 2.1), (29, 5.6, 2.1)]
DOORS = [(17, 9.5, 2, 0.6, "A/B 服务门"), (8, 17.3, 1.6, 0.6, "C 门"),
         (18, 17.3, 1.6, 0.6, "E 门"), (28, 17.3, 3, 0.6, "D 开口")]
LOW_ZONE = (3, 15.0, 19, 2.3)
ROUTE = [
    (30.5, 21.8, "W0 整理箱位"), (29.5, 17.6, ""), (29.5, 13.8, ""), (13.0, 13.8, ""),
    (13.0, 16.6, ""), (8.8, 16.6, "W5 在 C 门外放盘"), (13.0, 16.6, ""), (18.8, 16.6, "W7 擦手"),
    (18.8, 20.5, ""), (17.2, 22.6, "W9 洗涤与放置"), (18.8, 20.5, ""), (18.8, 16.6, "W11 侧向证据点"),
    (22.6, 16.6, ""), (29.5, 15.5, ""), (29.5, 17.6, ""),
]
# 玩家路线（示意折线）
SHALLOW = [(18, 10.4), (18, 12.9), (5.0, 12.9), (4.6, 16.6), (8.8, 16.9), (8.8, 18.6), (6.4, 20.2)]
LOWLINE = [(18, 10.4), (18, 13.9), (13.0, 13.9), (13.0, 16.7), (8.8, 16.7), (8.8, 18.6), (6.4, 20.2)]
CAMS = [(17.9, 8.6, 90, "Cam_A_B"), (5.0, 24.4, -45, "Cam_C_Door"), (21.5, 19.0, 153, "Cam_E_B")]

FONT = "font-family=\"'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif\""


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;")


def polyline(pts, color, dash, width=3, marker=True):
    p = " ".join(f"{X(x):.0f},{Y(y):.0f}" for x, y in pts)
    m = ' marker-end="url(#arrow)"' if marker else ""
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<polyline points="{p}" fill="none" stroke="{color}" stroke-width="{width}"{d}{m} opacity="0.95"/>'


def main():
    e = []
    e.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
    e.append('<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#d8d0bd"/></marker></defs>')
    e.append(f'<rect width="{W}" height="{H}" fill="#171512"/>')
    e.append(f'<text x="30" y="42" fill="#e8e0cc" font-size="26" font-weight="bold" {FONT}>H00-R0《婚宴后场：返席》俯视空间与行为地图 v1</text>')
    e.append(f'<text x="30" y="72" fill="#8f8878" font-size="15" {FONT}>空间闭环：A→B→C→(E/D)→B→A　·　实体旧后勤路线：D→B→C门外→E→D　·　几何与 demo/web 运行时一致（单位：米）</text>')

    for name, note, x, y, w, h, c in ROOMS:
        e.append(f'<rect x="{X(x):.0f}" y="{Y(y):.0f}" width="{w*S:.0f}" height="{h*S:.0f}" fill="{c}"/>')
    for x, y, w, h, label in DOORS:
        e.append(f'<rect x="{X(x):.0f}" y="{Y(y):.0f}" width="{w*S:.0f}" height="{h*S:.0f}" fill="#8a8172"/>')
    for x, y, w, h in WALLS:
        e.append(f'<rect x="{X(x):.0f}" y="{Y(y):.0f}" width="{w*S:.0f}" height="{h*S:.0f}" fill="#cfc6b4"/>')
    for x, y, w, h, label in FURN:
        e.append(f'<rect x="{X(x):.0f}" y="{Y(y):.0f}" width="{w*S:.0f}" height="{h*S:.0f}" fill="#4d463c" stroke="#2c2822"/>')
        if label:
            if h * S >= 26 and w * S >= 110:
                # 大件台面：标签画在矩形内部，避免压盖路线标注
                e.append(f'<text x="{X(x)+8:.0f}" y="{Y(y)+h*S/2+5:.0f}" fill="#c8c0aa" font-size="12" {FONT}>{esc(label)}</text>')
            else:
                e.append(f'<text x="{X(x):.0f}" y="{Y(y)-5:.0f}" fill="#b9b19c" font-size="12" {FONT}>{esc(label)}</text>')
    for x, y, r in TABLES:
        e.append(f'<circle cx="{X(x):.0f}" cy="{Y(y):.0f}" r="{r*S:.0f}" fill="#c25040"/>')
        e.append(f'<circle cx="{X(x):.0f}" cy="{Y(y):.0f}" r="{r*S*0.7:.0f}" fill="#a03e30"/>')

    for name, note, x, y, w, h, c in ROOMS:
        e.append(f'<text x="{X(x)+10:.0f}" y="{Y(y+h)-30:.0f}" fill="#f0e8d4" font-size="19" font-weight="bold" {FONT}>{esc(name)}</text>')
        e.append(f'<text x="{X(x)+10:.0f}" y="{Y(y+h)-10:.0f}" fill="rgba(240,232,212,0.65)" font-size="13" {FONT}>{esc(note)}</text>')

    # 低处区域（设计标注）
    lx, ly, lw, lh = LOW_ZONE
    e.append(f'<rect x="{X(lx):.0f}" y="{Y(ly):.0f}" width="{lw*S:.0f}" height="{lh*S:.0f}" fill="none" stroke="#d8b98a" stroke-width="2.5" stroke-dasharray="10 7"/>')
    e.append(f'<text x="{X(2.2):.0f}" y="{Y(14.5):.0f}" fill="#d8b98a" font-size="14" font-weight="bold" {FONT}>低处（虚线框）＝异常高度对应区：仅声学与材料后果，游戏内无可见线</text>')

    # 玩家路线
    e.append(polyline(SHALLOW, "#9db4c8", None, 3.5))
    e.append(polyline(LOWLINE, "#d8b98a", "3 6", 3.5))
    e.append(f'<text x="{X(6.0):.0f}" y="{Y(12.6):.0f}" fill="#9db4c8" font-size="14" font-weight="bold" {FONT}>浅处服务线（视野好，路稍长）</text>')
    e.append(f'<text x="{X(14.6):.0f}" y="{Y(17.15):.0f}" fill="#d8b98a" font-size="13" font-weight="bold" {FONT}>低处器材线（更短，证据更强）</text>')

    # 实体路线
    e.append(polyline([(x, y) for x, y, _ in ROUTE] + [(ROUTE[0][0], ROUTE[0][1])], "#9ab07f", "1 7", 3))
    label_offsets = {"W5": (-40, 44), "W7": (10, -14), "W11": (10, -34), "W9": (12, 16), "W0": (12, 26)}
    for x, y, label in ROUTE:
        work = bool(label)
        e.append(f'<circle cx="{X(x):.0f}" cy="{Y(y):.0f}" r="{7 if work else 4}" fill="{"#c9b57a" if work else "#9ab07f"}"/>')
        if label:
            dx, dy = label_offsets.get(label.split()[0], (10, -12))
            e.append(f'<text x="{X(x)+dx:.0f}" y="{Y(y)+dy:.0f}" fill="#c9b57a" font-size="13" font-weight="bold" {FONT}>{esc(label)}</text>')
    e.append(f'<text x="{X(24.5):.0f}" y="{Y(13.2):.0f}" fill="#9ab07f" font-size="14" font-weight="bold" {FONT}>实体旧后勤路线（匀速 1.5m/s，让行不推回）</text>')

    # 玩家起点与任务点
    e.append(f'<circle cx="{X(6.5):.0f}" cy="{Y(7.8):.0f}" r="9" fill="#4a6478" stroke="#dbe4ea" stroke-width="2"/>')
    e.append(f'<text x="{X(7.0):.0f}" y="{Y(7.4):.0f}" fill="#cfe0ee" font-size="14" font-weight="bold" {FONT}>玩家起点（手持录像带）</text>')
    e.append(f'<circle cx="{X(5.5):.0f}" cy="{Y(19.75):.0f}" r="{2.4*S:.0f}" fill="none" stroke="#d8d0bd" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.7"/>')
    e.append(f'<text x="{X(2.7):.0f}" y="{Y(22.6):.0f}" fill="#d8d0bd" font-size="12" {FONT}>E 键交互半径 2.4m（=UE 240UU）</text>')

    # 机位
    for x, y, deg, name in CAMS:
        e.append(f'<g transform="translate({X(x):.0f},{Y(y):.0f}) rotate({deg})"><path d="M0,0 L100,-42 A108,108 0 0 1 100,42 Z" fill="rgba(125,150,142,0.22)"/><rect x="-7" y="-7" width="14" height="14" fill="#7d968e"/></g>')
        e.append(f'<text x="{X(x)+12:.0f}" y="{Y(y)+5:.0f}" fill="#a9c2b8" font-size="13" font-weight="bold" {FONT}>{name}</text>')

    # 图例
    ly0 = Y(26.6)
    e.append(f'<rect x="30" y="{ly0}" width="{W-60}" height="150" fill="#211e19" stroke="#353026"/>')
    items = [
        ('<circle cx="20" cy="0" r="8" fill="#4a6478" stroke="#dbe4ea" stroke-width="2"/>', "玩家（旧蓝工服，3.6m/s）"),
        ('<circle cx="20" cy="0" r="8" fill="#3f4a52"/><rect x="26" y="-4" width="5" height="8" fill="#8f8878"/>', "实体“返席人”（普通后勤步速与持盘，非追击敌人）"),
        ('<line x1="0" y1="0" x2="40" y2="0" stroke="#9db4c8" stroke-width="3.5"/>', "浅处服务线"),
        ('<line x1="0" y1="0" x2="40" y2="0" stroke="#d8b98a" stroke-width="3.5" stroke-dasharray="3 6"/>', "低处器材线"),
        ('<line x1="0" y1="0" x2="40" y2="0" stroke="#9ab07f" stroke-width="3" stroke-dasharray="1 7"/>', "实体旧路线（工作点为金色圆）"),
        ('<rect x="0" y="-8" width="40" height="16" fill="none" stroke="#d8b98a" stroke-width="2" stroke-dasharray="8 5"/>', "低处范围（设计标注，不入正式画面）"),
        ('<path d="M0,0 L34,-14 A36,36 0 0 1 34,14 Z" fill="rgba(125,150,142,0.35)"/>', "Round 3 验证机位"),
        ('<rect x="8" y="-8" width="16" height="16" fill="#c25040"/>', "婚宴圆桌（事件红，公共现实底片）"),
    ]
    for i, (icon, label) in enumerate(items):
        col, row = i % 2, i // 2
        gx, gy = 60 + col * 560, ly0 + 32 + row * 32
        e.append(f'<g transform="translate({gx},{gy})">{icon}</g>')
        e.append(f'<text x="{gx+56}" y="{gy+5}" fill="#d8d0bd" font-size="14" {FONT}>{esc(label)}</text>')

    e.append("</svg>")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    svg_path = OUT_DIR / "h00_r0_topdown.svg"
    svg_path.write_text("\n".join(e), encoding="utf-8")
    print("written", svg_path)

    png_path = OUT_DIR / "h00_r0_topdown.png"
    subprocess.run([
        "timeout", "25", "google-chrome", "--headless=new", "--no-sandbox",
        "--disable-dev-shm-usage", "--disable-gpu", "--hide-scrollbars",
        f"--window-size={W},{H}", "--virtual-time-budget=2000",
        f"--screenshot={png_path}", svg_path.as_uri(),
    ], capture_output=True)
    print("written" if png_path.exists() else "FAIL", png_path)


if __name__ == "__main__":
    main()
