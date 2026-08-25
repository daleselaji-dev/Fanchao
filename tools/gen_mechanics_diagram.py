#!/usr/bin/env python3
"""生成 H00-R0 机制说明图（实体回返状态机 / 玩家任务流 / 侧向证据条件）。

输出：assets/storyboard/h00_r0_mechanics.svg 与 .png
"""
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets/storyboard"
W, H = 1480, 900
FONT = "'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif"

e = []


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def box(x, y, w, h, title, lines, fill="#211e19", stroke="#4a4436", title_c="#e8e0cc"):
    e.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{fill}" stroke="{stroke}" stroke-width="1.5"/>')
    e.append(f'<text x="{x + 14}" y="{y + 28}" fill="{title_c}" font-size="16" font-weight="bold" font-family="{FONT}">{esc(title)}</text>')
    for i, ln in enumerate(lines):
        e.append(f'<text x="{x + 14}" y="{y + 52 + i * 20}" fill="#b3ab97" font-size="13" font-family="{FONT}">{esc(ln)}</text>')


def arrow(x1, y1, x2, y2, label="", dash=None, color="#9ab07f"):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    e.append(f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="2.2"{d} marker-end="url(#ar)"/>')
    if label:
        mx, my = (x1 + x2) / 2, (y1 + y2) / 2 - 8
        e.append(f'<text x="{mx}" y="{my}" fill="{color}" font-size="12.5" text-anchor="middle" font-family="{FONT}">{esc(label)}</text>')


def main():
    e.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
    e.append('<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#d8d0bd"/></marker></defs>')
    e.append(f'<rect width="{W}" height="{H}" fill="#171512"/>')
    e.append(f'<text x="30" y="44" fill="#e8e0cc" font-size="24" font-weight="bold" font-family="{FONT}">H00-R0 机制说明：实体回返 · 让行 · 侧向证据 · 玩家任务</text>')
    e.append(f'<text x="30" y="72" fill="#8f8878" font-size="14" font-family="{FONT}">来源：Round 2 行为合同 + demo/ue/H00_Source 代码事实；与 demo/web 运行时一致</text>')

    # —— 左列：实体状态机 ——
    e.append(f'<text x="30" y="122" fill="#9ab07f" font-size="17" font-weight="bold" font-family="{FONT}">① 实体“返席人”状态机（无追逐、无冲刺、无推回）</text>')
    box(30, 140, 300, 96, "工作 WORK", ["在航点执行普通动作：", "整理箱位 / 放盘 / 擦手 / 洗涤", "停留 1.4–3.2 秒"])
    box(30, 300, 300, 96, "移动 MOVE", ["沿旧后勤路线匀速 1.5m/s：", "D → B → C门外 → E → D", "速度永不因玩家改变"])
    box(30, 460, 300, 96, "等待 WAIT", ["玩家占用路线前方 <1m：", "原地停住，继续等", "不推挤、不绕圈逼近、不出声吓人"])
    arrow(180, 236, 180, 300, "停留结束")
    arrow(120, 396, 120, 460, "玩家挡路")
    arrow(240, 460, 240, 396, "路线恢复空闲")
    arrow(330, 348, 420, 348, "抵达工作点", color="#c9b57a")
    box(420, 300, 250, 96, "回到 工作 WORK", ["到达下一航点后", "继续旧职责", "循环永不结束"], stroke="#6b6148")
    box(30, 610, 640, 110, "永不发生（Round 2 已否决，升格为永久禁止）",
        ["× 随机追踪玩家 / 冲刺 / 因玩家靠近而跳脸表演",
         "× 碰撞把玩家推飞 / 分贝惩罚 / 伪精确物理数值",
         "× 自动恐怖过场 / 改变速度 / 瞬移"],
        fill="#26201c", stroke="#7a4438", title_c="#d08a7a")

    # —— 中列：侧向证据 ——
    e.append(f'<text x="740" y="122" fill="#d8b98a" font-size="17" font-weight="bold" font-family="{FONT}">② 侧向证据（每圈至多一次，≤2 秒）</text>')
    box(740, 140, 330, 150, "全部条件同时成立", [
        "· 实体正处于 E/B 交界（航点 W11）",
        "· 玩家位于低处（异常高度对应区）",
        "· 玩家与实体视线无墙体遮挡",
        "· 距离 < 8m",
        "· 本圈尚未显示过"])
    arrow(905, 290, 905, 350)
    box(740, 350, 330, 116, "显示 1.6 秒", [
        "前侧干燥石化复眼结构（候选种子）",
        "只作侧向短证据：看得出错误，", "认不全形态；无音刺、无镜头夺权"], stroke="#8a744a")
    box(740, 520, 330, 96, "否则", ["实体保持背影 / 肩线 / 工作姿态", "声音永远先于画面抵达", "（视线被墙挡住时只闻其声）"])

    # —— 右列：玩家任务流 ——
    e.append(f'<text x="1120" y="122" fill="#9db4c8" font-size="17" font-weight="bold" font-family="{FONT}">③ 玩家任务流（唯一普通任务）</text>')
    box(1120, 140, 330, 78, "持带出发", ["从 A 婚宴厅进入 B 后场走廊", "手里是刚交回的婚宴录像带"])
    box(1120, 262, 330, 78, "路线判断 ×2", ["去程与返程各一次：", "浅处服务线 ↔ 低处器材线"])
    box(1120, 384, 330, 78, "REC/PAUSE 归档", ["C 卡座 2.4m 内按 E（=UE 240UU）", "CRT 播几秒普通婚宴画面"])
    box(1120, 506, 330, 78, "返回 A，循环完成", ["门缝里实体背影走远", "不解释，不结算，不奖励"])
    arrow(1285, 218, 1285, 262)
    arrow(1285, 340, 1285, 384)
    arrow(1285, 462, 1285, 506)
    box(1120, 630, 330, 90, "R = 全局复位", ["玩家 / 录像带 / 实体航点 / 计时", "全部回到 00 秒", "RESET_REASON 写入日志"], stroke="#5a6478")
    arrow(1285, 604, 1285, 630, "任意时刻", dash="4 4", color="#9db4c8")

    # 底注
    e.append(f'<rect x="30" y="770" width="{W - 60}" height="90" fill="#211e19" stroke="#353026"/>')
    for i, ln in enumerate([
        "恐怖来源：不是怪物追人，而是“一个普通岗位的动作被旧伤、压力和位置重新规定”。玩家改变的不是实体行为，而是自己与这条旧路线交叉的时机与代价。",
        "低处 = 同一不可见高度的后果区：伴奏变厚变远（无水声、无滤镜），门框下部/柜脚留有干燥受压痕。异常由多种材料与声学共同证明，不靠单一贴条。",
        "本图描述的所有规则均可在 demo/web 中操作复现；UE 5.8 主线的对应实现见 demo/ue/H00_Source。"]):
        e.append(f'<text x="46" y="{798 + i * 24}" fill="#b3ab97" font-size="13" font-family="{FONT}">{ln}</text>')

    e.append("</svg>")
    OUT.mkdir(parents=True, exist_ok=True)
    svg = OUT / "h00_r0_mechanics.svg"
    svg.write_text("\n".join(e), encoding="utf-8")
    png = OUT / "h00_r0_mechanics.png"
    subprocess.run(["timeout", "25", "google-chrome", "--headless=new", "--no-sandbox",
                    "--disable-dev-shm-usage", "--disable-gpu", "--hide-scrollbars",
                    f"--window-size={W},{H}", "--virtual-time-budget=2000",
                    f"--screenshot={png}", svg.as_uri()], capture_output=True)
    print("written", svg)
    print("written" if png.exists() else "FAIL", png)


if __name__ == "__main__":
    main()
