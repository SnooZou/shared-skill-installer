#!/usr/bin/env python3

from __future__ import annotations

import subprocess
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


PACKAGE_ROOT = Path(__file__).resolve().parents[1]
LIVE_SHARED_ROOT = Path("/Users/Snoo_1/AI-skills")
DOCS = PACKAGE_ROOT / "docs"
OUT = DOCS / "screenshots"
SCRIPT = PACKAGE_ROOT / "scripts" / "install-shared-skill"
STATE_MAP = PACKAGE_ROOT / "state" / "open-design.skillmap.tsv"

PINGFANG = "/System/Library/Fonts/Hiragino Sans GB.ttc"
MENLO = "/System/Library/Fonts/Menlo.ttc"

BG = "#0B1020"
CARD = "#11182B"
CARD_2 = "#151F38"
TEXT = "#F2F5FF"
MUTED = "#9AA7C7"
ACCENT = "#62D0FF"
GREEN = "#4ADE80"
YELLOW = "#FACC15"
PINK = "#F472B6"
LINE = "#24324F"


def run(cmd: list[str]) -> str:
    result = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return result.stdout.strip()


def pick_font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


TITLE_FONT = pick_font(PINGFANG, 44)
SUB_FONT = pick_font(PINGFANG, 24)
BODY_FONT = pick_font(PINGFANG, 20)
SMALL_FONT = pick_font(PINGFANG, 17)
MONO_FONT = pick_font(MENLO, 20)
MONO_SMALL = pick_font(MENLO, 17)


def wrap(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.FreeTypeFont, width: int) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        if not raw:
            lines.append("")
            continue
        current = ""
        for ch in raw:
            probe = current + ch
            if draw.textlength(probe, font=font) <= width:
                current = probe
            else:
                if current:
                    lines.append(current)
                current = ch
        lines.append(current)
    return lines


def canvas(width: int = 1600, height: int = 1000) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)
    return img, draw


def card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str = CARD, outline: str = LINE, radius: int = 26):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=2)


def title_block(draw: ImageDraw.ImageDraw, title: str, subtitle: str):
    draw.text((70, 52), title, font=TITLE_FONT, fill=TEXT)
    draw.text((70, 112), subtitle, font=SUB_FONT, fill=MUTED)


def terminal_card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], title: str, content: str):
    x1, y1, x2, y2 = box
    card(draw, box, fill="#0E1528", outline=LINE, radius=22)
    draw.rounded_rectangle((x1 + 20, y1 + 18, x1 + 44, y1 + 42), radius=12, fill="#FF5F57")
    draw.rounded_rectangle((x1 + 54, y1 + 18, x1 + 78, y1 + 42), radius=12, fill="#FEBC2E")
    draw.rounded_rectangle((x1 + 88, y1 + 18, x1 + 112, y1 + 42), radius=12, fill="#28C840")
    draw.text((x1 + 140, y1 + 20), title, font=SUB_FONT, fill=TEXT)
    top = y1 + 68
    left = x1 + 24
    right = x2 - 24
    for line in wrap(draw, content, MONO_SMALL, right - left):
        draw.text((left, top), line, font=MONO_SMALL, fill="#D7E3FF")
        top += 24
        if top > y2 - 30:
            break


def bullet_card(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], heading: str, items: list[str], accent: str):
    x1, y1, x2, y2 = box
    card(draw, box, fill=CARD, outline=LINE, radius=26)
    draw.text((x1 + 28, y1 + 24), heading, font=SUB_FONT, fill=TEXT)
    draw.rounded_rectangle((x1 + 28, y1 + 66, x1 + 120, y1 + 74), radius=4, fill=accent)
    top = y1 + 96
    usable = x2 - x1 - 60
    for item in items:
        draw.ellipse((x1 + 30, top + 8, x1 + 40, top + 18), fill=accent)
        lines = wrap(draw, item, BODY_FONT, usable - 28)
        for i, line in enumerate(lines):
            draw.text((x1 + 56, top + i * 28), line, font=BODY_FONT, fill=TEXT if i == 0 else MUTED)
        top += max(40, len(lines) * 28 + 12)
        if top > y2 - 50:
            break


def save(img: Image.Image, name: str):
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / name)


def generate_overview():
    img, draw = canvas(1600, 1000)
    title_block(draw, "AI-skills 共享安装流程", "以后新的 skill 一律完整入库到 AI-skills，再给 Codex、WorkBuddy、TRAE 建共享入口")

    bullet_card(
        draw,
        (70, 190, 500, 860),
        "Step 1  来源",
        [
            "支持本地单 skill、本地多 skill 仓库、GitHub 仓库和 GitHub URL",
            "源码目录不再拆散，完整保留到 AI-skills",
            "适合后续排错、回滚、比对原始仓库",
        ],
        ACCENT,
    )
    bullet_card(
        draw,
        (585, 190, 1015, 860),
        "Step 2  入库",
        [
            "脚本把完整源码放进 /Users/Snoo_1/AI-skills",
            "多 skill 仓库会配套 .skillmap.tsv 映射表",
            "open-design 这类仓库建议固定复用已验证的映射文件",
        ],
        GREEN,
    )
    bullet_card(
        draw,
        (1100, 190, 1530, 860),
        "Step 3  共享",
        [
            "Codex、WorkBuddy、TRAE 只保留软链接入口",
            "入口统一指向 AI-skills 内的真实 skill 目录",
            "原始外部下载目录不再参与运行，可留作备份或删除",
        ],
        YELLOW,
    )

    draw.line((500, 520, 585, 520), fill=LINE, width=6)
    draw.line((1015, 520, 1100, 520), fill=LINE, width=6)
    draw.polygon([(560, 504), (585, 520), (560, 536)], fill=LINE)
    draw.polygon([(1075, 504), (1100, 520), (1075, 536)], fill=LINE)

    save(img, "tutorial-01-overview.png")


def generate_help():
    img, draw = canvas(1600, 1000)
    title_block(draw, "脚本入口", "先看帮助，确认支持的安装来源与参数")
    help_text = run([str(SCRIPT), "--help"])
    terminal_card(draw, (70, 190, 1530, 900), "install-shared-skill --help", help_text)
    save(img, "tutorial-02-help.png")


def generate_single_install():
    img, draw = canvas(1600, 1000)
    title_block(draw, "单 skill 安装示意", "适合仓库根目录本身就是 skill 的情况，例如 claude-skill-web-clone")
    cmd = [
        str(SCRIPT),
        "--local",
        str(LIVE_SHARED_ROOT / "claude-skill-web-clone"),
        "--name",
        "claude-skill-web-clone",
        "--container-name",
        "claude-skill-web-clone-preview",
        "--dry-run",
    ]
    content = "$ " + " ".join(cmd) + "\n" + run(cmd)
    terminal_card(draw, (70, 190, 1530, 900), "single-skill dry run", content)
    save(img, "tutorial-03-single-skill.png")


def generate_bundle_install():
    img, draw = canvas(1600, 1040)
    title_block(draw, "多 skill 仓库安装示意", "像 open-design 这种仓库，推荐固定使用已验证的映射表，不做盲扫")
    cmd = [
        str(SCRIPT),
        "--bundle-local",
        str(LIVE_SHARED_ROOT / "open-design"),
        "--container-name",
        "open-design-preview",
        "--map-file",
        str(STATE_MAP),
        "--dry-run",
    ]
    raw = run(cmd).splitlines()
    preview_lines = raw[:34]
    preview_lines.append("...")
    preview_lines.append("[install-shared-skill] Would continue linking remaining open-design skills")
    content = "$ " + " ".join(cmd) + "\n" + "\n".join(preview_lines)
    terminal_card(draw, (70, 190, 1530, 950), "bundle install dry run", content)
    save(img, "tutorial-04-bundle-skill.png")


def generate_verify():
    img, draw = canvas(1600, 1000)
    title_block(draw, "验证共享是否生效", "检查 Codex、WorkBuddy、TRAE 的入口是否都指向 AI-skills，并确认源码仓库真实大小")
    verify = run(
        [
            "zsh",
            "-lc",
            textwrap.dedent(
                f"""
                printf '$ readlink /Users/Snoo_1/.codex/skills/shared-skill-installer\\n'
                readlink /Users/Snoo_1/.codex/skills/shared-skill-installer
                printf '\\n$ readlink /Users/Snoo_1/.workbuddy/skills/shared-skill-installer\\n'
                readlink /Users/Snoo_1/.workbuddy/skills/shared-skill-installer
                printf '\\n$ readlink /Users/Snoo_1/.trae/skills/shared-skill-installer\\n'
                readlink /Users/Snoo_1/.trae/skills/shared-skill-installer
                printf '\\n$ du -sh /Users/Snoo_1/AI-skills/shared-skill-installer\\n'
                du -sh /Users/Snoo_1/AI-skills/shared-skill-installer
                """
            ).strip(),
        ]
    )
    terminal_card(draw, (70, 190, 1530, 720), "verify shared links", verify)

    tree_text = textwrap.dedent(
        """
        /Users/Snoo_1/AI-skills
        ├── bin/install-shared-skill
        ├── .shared-skill-state/client-roots.tsv
        ├── .shared-skill-state/open-design.skillmap.tsv
        ├── claude-skill-web-clone/
        ├── ppt-master/
        ├── open-design/
        └── shared-skill-installer/
        """
    ).strip()
    terminal_card(draw, (70, 760, 1530, 940), "shared library layout", tree_text)
    save(img, "tutorial-05-verify.png")


def main():
    generate_overview()
    generate_help()
    generate_single_install()
    generate_bundle_install()
    generate_verify()


if __name__ == "__main__":
    main()
