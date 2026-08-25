#!/usr/bin/env python3
"""生成 H00-R0 六段节拍分镜图（bare 画布截图 + 说明字幕拼版）。

输出：assets/storyboard/h00_r0_beats.png
"""
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parent.parent
PAGE = (ROOT / "demo/web-graybox/index.html").as_uri()
OUT = ROOT / "assets/storyboard"

PANELS = [
    ({"freeze": 1, "bare": 1, "beat": 0, "px": 17.9, "py": 10.9, "pa": 1.57,
      "ent": 0, "entwork": "整理箱位"},
     "00–12 公共现实成立",
     "玩家手持录像带，从 A 婚宴厅经服务门进入 B。画面先回答“这里正在收场，谁负责归档”。实体已在 D 卸货口，但玩家看不见它。"),
    ({"freeze": 1, "bare": 1, "beat": 1, "px": 8.0, "py": 12.5, "pa": 0, "ent": 0.5},
     "12–28 空间规则第一次可推断",
     "B 内二选一：浅处服务线（视野好、路稍长）或低处器材线（更短、进入异常高度对应的低处）。实体离开 D 向 B 移动——只有规律的工作鞋与金属盘声（墙后声纹），看不见人。"),
    ({"freeze": 1, "bare": 1, "beat": 2, "px": 6.8, "py": 20.9, "pa": -1.2,
      "archived": 1, "crt": 1, "ent": 5, "entwork": "在 C 门外放盘"},
     "28–43 完成普通工作",
     "在 C 卡座 2.4m 内按 E：插带、REC/PAUSE、归档。CRT 只播几秒普通婚宴画面，不解释怪物。实体沿 B 经过 C 门外，只露出被门框切开的肩线。"),
    ({"freeze": 1, "bare": 1, "beat": 3, "px": 12.0, "py": 16.7, "pa": 0,
      "archived": 1, "ent": 9, "entwork": "洗涤与放置"},
     "43–60 返程路线判断",
     "归档完成，选择返程：浅处更稳但证据少；低处更快、证据更强，但会与实体旧路线交叉几秒。这是信息与风险的交换，不是对错分支。实体此刻在 E 洗涤——只闻其声。"),
    ({"freeze": 1, "bare": 1, "beat": 4, "px": 15.5, "py": 16.9, "pa": 3.14,
      "archived": 1, "ent": 11, "evidence": 1},
     "60–76 第一次身体错误",
     "实体从 E 走回 B，仍是“放盘—擦手—转身”的普通工作节奏。玩家在低处且视线可及时，E/B 交界给出一至两秒侧向证据：前侧是干燥石化的复眼结构。不跳脸、不加速、不解释来源。"),
    ({"freeze": 1, "bare": 1, "beat": 5, "px": 16.0, "py": 8.5, "pa": -1.57,
      "archived": 1, "ent": 13.5},
     "76–90 回到公共空间",
     "玩家推开服务门回到 A，宴会厅伴奏恢复原来的空间感。门缝中实体背影沿 D 方向走远，继续旧路线，不给结局解释。R 可随时把一切复位到 00 秒。"),
]

CHROME = ["timeout", "25", "google-chrome", "--headless=new", "--no-sandbox",
          "--disable-dev-shm-usage", "--disable-gpu", "--hide-scrollbars"]


def shot(url, out, w, h):
    subprocess.run(CHROME + [f"--window-size={w},{h}", "--virtual-time-budget=2500",
                             f"--screenshot={out}", url], capture_output=True)
    assert Path(out).exists(), f"截图失败: {url}"


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    tmp = Path(tempfile.mkdtemp())
    imgs = []
    for i, (params, _, _) in enumerate(PANELS):
        out = tmp / f"panel{i}.png"
        shot(f"{PAGE}?{urlencode(params)}", out, 1080, 768)
        imgs.append(out)
        print("panel", i, "ok")

    cells = []
    for i, (img, (_, title, caption)) in enumerate(zip(imgs, PANELS)):
        cells.append(f"""
        <div class="cell">
          <img src="{img.as_uri()}">
          <div class="cap"><b>{i + 1}｜{title}</b><span>{caption}</span></div>
        </div>""")

    html = f"""<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><style>
      body {{ margin:0; background:#171512; color:#d8d0bd;
             font-family:'PingFang SC','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif; }}
      #wrap {{ padding:26px 30px; width:1640px; }}
      h1 {{ font-size:24px; margin:0 0 4px; color:#e8e0cc; }}
      p.sub {{ font-size:13px; color:#8f8878; margin:0 0 20px; }}
      #grid {{ display:grid; grid-template-columns:1fr 1fr; gap:22px; }}
      .cell {{ background:#211e19; border:1px solid #353026; border-radius:4px; overflow:hidden; }}
      .cell img {{ width:100%; display:block; }}
      .cap {{ padding:10px 12px 12px; }}
      .cap b {{ display:block; font-size:15px; color:#e8e0cc; margin-bottom:4px; }}
      .cap span {{ font-size:12.5px; line-height:1.65; color:#b3ab97; }}
    </style></head><body><div id="wrap">
      <h1>H00-R0《婚宴后场：返席》60–90 秒节拍分镜（行为灰盒）</h1>
      <p class="sub">画面取自 demo/web-graybox 可运行原型的确定性场景（tools/gen_storyboard.py 可复现）。合同来源：archive/02_当前Demo_H00-R0/原始评审/Round2。禁止项：无跳脸、无冲刺追击、无碰撞推回、无可见海水、无蓝色滤镜。</p>
      <div id="grid">{''.join(cells)}</div>
    </div></body></html>"""
    page = tmp / "storyboard.html"
    page.write_text(html, encoding="utf-8")

    final = OUT / "h00_r0_beats.png"
    shot(page.as_uri(), final, 1700, 2110)
    print("written", final)


if __name__ == "__main__":
    main()
