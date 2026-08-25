#!/usr/bin/env python3
"""把《返潮》设计骨架的两份 Markdown 编成一份交付 PDF。

用法：
    python3 scripts/build_design_pdf.py

输入：
    docs/design/返潮_新版设计骨架_v1.md
    docs/design/返潮_视觉原型审查与生图Prompt_v1.md
输出：
    docs/design/返潮_设计骨架交付_v1.pdf

依赖：reportlab（pip3 install reportlab）；中文字体使用系统自带的文泉驿微米黑。
"""

import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parent.parent
DESIGN = ROOT / "docs" / "design"
SOURCES = [
    DESIGN / "返潮_新版设计骨架_v1.md",
    DESIGN / "返潮_视觉原型审查与生图Prompt_v1.md",
]
OUTPUT = DESIGN / "返潮_设计骨架交付_v1.pdf"

FONT_TTC = "/usr/share/fonts/truetype/wqy/wqy-microhei.ttc"
pdfmetrics.registerFont(TTFont("CJK", FONT_TTC, subfontIndex=0))
pdfmetrics.registerFont(TTFont("CJKMono", FONT_TTC, subfontIndex=1))

INK = colors.HexColor("#1F2933")
ACCENT = colors.HexColor("#8C2F2A")  # 克制的礼俗红
MUTED = colors.HexColor("#52606D")
RULE = colors.HexColor("#C9D2D8")
CODE_BG = colors.HexColor("#F3F5F7")

def style(name, **kw):
    base = dict(fontName="CJK", textColor=INK, spaceBefore=4, spaceAfter=4)
    base.update(kw)
    return ParagraphStyle(name, **base)

S = {
    "title": style("title", fontSize=26, leading=36, spaceBefore=0, spaceAfter=10),
    "subtitle": style("subtitle", fontSize=13, leading=20, textColor=MUTED),
    "h1": style("h1", fontSize=18, leading=26, spaceBefore=18, spaceAfter=8,
                textColor=ACCENT),
    "h2": style("h2", fontSize=14.5, leading=21, spaceBefore=14, spaceAfter=6),
    "h3": style("h3", fontSize=12.5, leading=18, spaceBefore=10, spaceAfter=4,
                textColor=MUTED),
    "body": style("body", fontSize=10.5, leading=17, firstLineIndent=0),
    "quote": style("quote", fontSize=10.5, leading=17, leftIndent=10,
                   textColor=MUTED, borderPadding=4),
    "li": style("li", fontSize=10.5, leading=16.5, leftIndent=14,
                bulletIndent=4, spaceBefore=1, spaceAfter=1),
    "code": style("code", fontName="CJKMono", fontSize=8.4, leading=12.5,
                  backColor=CODE_BG, borderPadding=6, leftIndent=4,
                  spaceBefore=6, spaceAfter=6),
    "cell": style("cell", fontSize=9, leading=13.5, spaceBefore=0, spaceAfter=0),
    "cellh": style("cellh", fontSize=9, leading=13.5, spaceBefore=0,
                   spaceAfter=0, textColor=colors.white),
}

def esc(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

def inline(text):
    """Markdown 行内格式 → reportlab 标签。先转义，再按占位符还原。"""
    codes = []
    def keep_code(m):
        codes.append(m.group(1))
        return f"\x00{len(codes) - 1}\x00"
    text = re.sub(r"`([^`]+)`", keep_code, text)
    text = esc(text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", text)
    def restore(m):
        frag = esc(codes[int(m.group(1))])
        return f'<font name="CJKMono" backColor="#F3F5F7">{frag}</font>'
    return re.sub(r"\x00(\d+)\x00", restore, text)

def make_table(rows):
    data, widths = [], None
    header = rows[0]
    body = rows[2:] if len(rows) > 1 and set(rows[1].replace("|", "").strip()) <= set("-: ") else rows[1:]
    data.append([Paragraph(inline(c), S["cellh"]) for c in split_row(header)])
    for r in body:
        data.append([Paragraph(inline(c), S["cell"]) for c in split_row(r)])
    ncol = max(len(r) for r in data)
    for r in data:
        r.extend([Paragraph("", S["cell"])] * (ncol - len(r)))
    total = 170 * mm
    if ncol >= 4:
        first = total * 0.22
        widths = [first] + [(total - first) / (ncol - 1)] * (ncol - 1)
    else:
        widths = [total / ncol] * ncol
    t = Table(data, colWidths=widths, repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), ACCENT),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F7F4F2")]),
        ("GRID", (0, 0), (-1, -1), 0.4, RULE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return t

def split_row(row):
    return [c.strip() for c in row.strip().strip("|").split("|")]

def md_to_flowables(md_text):
    flow = []
    lines = md_text.splitlines()
    i, n = 0, len(lines)
    while i < n:
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            i += 1
            continue
        if stripped.startswith("```"):
            block = []
            i += 1
            while i < n and not lines[i].strip().startswith("```"):
                block.append(lines[i])
                i += 1
            i += 1
            text = "<br/>".join(esc(l) if l.strip() else "&nbsp;" for l in block)
            flow.append(Paragraph(text, S["code"]))
            continue
        if stripped.startswith("|"):
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append(lines[i])
                i += 1
            flow.append(Spacer(1, 3))
            flow.append(make_table(rows))
            flow.append(Spacer(1, 3))
            continue
        if stripped.startswith("---") and set(stripped) <= set("-"):
            flow.append(Spacer(1, 4))
            flow.append(HRFlowable(width="100%", thickness=0.6, color=RULE))
            flow.append(Spacer(1, 4))
            i += 1
            continue
        m = re.match(r"^(#{1,4})\s+(.*)", stripped)
        if m:
            level = len(m.group(1))
            key = {1: "h1", 2: "h2", 3: "h3", 4: "h3"}[level]
            flow.append(Paragraph(inline(m.group(2)), S[key]))
            i += 1
            continue
        if stripped.startswith(">"):
            quote = []
            while i < n and lines[i].strip().startswith(">"):
                quote.append(lines[i].strip().lstrip(">").strip())
                i += 1
            text = "<br/>".join(inline(q) for q in quote if q)
            flow.append(Table(
                [[Paragraph(text, S["quote"])]], colWidths=[168 * mm],
                style=TableStyle([
                    ("LINEBEFORE", (0, 0), (0, -1), 2, ACCENT),
                    ("LEFTPADDING", (0, 0), (-1, -1), 8),
                    ("TOPPADDING", (0, 0), (-1, -1), 2),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
                ])))
            continue
        m = re.match(r"^[-*]\s+(.*)", stripped)
        if m:
            flow.append(Paragraph(inline(m.group(1)), S["li"], bulletText="•"))
            i += 1
            continue
        m = re.match(r"^(\d+)[.)]\s+(.*)", stripped)
        if m:
            flow.append(Paragraph(inline(m.group(2)), S["li"],
                                  bulletText=f"{m.group(1)}."))
            i += 1
            continue
        flow.append(Paragraph(inline(stripped), S["body"]))
        i += 1
    return flow

def cover():
    return [
        Spacer(1, 60 * mm),
        Paragraph("《返潮》设计骨架交付 v1", S["title"]),
        Spacer(1, 4 * mm),
        HRFlowable(width="100%", thickness=1, color=ACCENT),
        Spacer(1, 6 * mm),
        Paragraph("潮来了，水没有来——海把人们记错的亲人送了回来。<br/>"
                  "小镇不害怕：小镇在办喜事。", S["subtitle"]),
        Spacer(1, 10 * mm),
        Paragraph("第一部分　新版核心设计 · 技术栈 · 工作流<br/>"
                  "第二部分　视觉原型审查与生图 Prompt", S["subtitle"]),
        Spacer(1, 10 * mm),
        Paragraph("整理日期：2026-08-25　·　依据：交接包 2026-08-05（292 项文档）",
                  S["subtitle"]),
        PageBreak(),
    ]

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("CJK", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(20 * mm, 12 * mm, "《返潮》设计骨架交付 v1 · 2026-08-25")
    canvas.drawRightString(190 * mm, 12 * mm, f"{doc.page}")
    canvas.restoreState()

def main():
    doc = SimpleDocTemplate(
        str(OUTPUT), pagesize=A4,
        leftMargin=20 * mm, rightMargin=20 * mm,
        topMargin=18 * mm, bottomMargin=20 * mm,
        title="返潮 设计骨架交付 v1", author="Fanchao Project",
    )
    story = cover()
    for idx, src in enumerate(SOURCES):
        story.extend(md_to_flowables(src.read_text(encoding="utf-8")))
        if idx < len(SOURCES) - 1:
            story.append(PageBreak())
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"已生成：{OUTPUT} ({OUTPUT.stat().st_size} 字节)")

if __name__ == "__main__":
    main()
