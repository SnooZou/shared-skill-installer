#!/usr/bin/env python3

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


PACKAGE_ROOT = Path(__file__).resolve().parents[1]
OUT = PACKAGE_ROOT / "docs" / "screenshots"

PINGFANG = "/System/Library/Fonts/Hiragino Sans GB.ttc"
MENLO = "/System/Library/Fonts/Menlo.ttc"

BG = "#0B1020"
CARD = "#11182B"
TEXT = "#F2F5FF"
MUTED = "#9AA7C7"
ACCENT = "#62D0FF"
GREEN = "#4ADE80"
YELLOW = "#FACC15"
LINE = "#24324F"


def font(path: str, size: int):
    return ImageFont.truetype(path, size)


TITLE_FONT = font(PINGFANG, 44)
SUB_FONT = font(PINGFANG, 24)
BODY_FONT = font(PINGFANG, 20)
MONO_FONT = font(MENLO, 17)


def wrap(draw: ImageDraw.ImageDraw, text: str, font_obj, width: int) -> list[str]:
    lines: list[str] = []
    for raw in text.splitlines():
        if not raw:
            lines.append("")
            continue
        current = ""
        for ch in raw:
            probe = current + ch
            if draw.textlength(probe, font=font_obj) <= width:
                current = probe
            else:
                if current:
                    lines.append(current)
                current = ch
        if current or not lines:
            lines.append(current)
    return lines


def canvas(width: int = 1600, height: int = 1000):
    img = Image.new("RGB", (width, height), BG)
    draw = ImageDraw.Draw(img)
    return img, draw


def card(draw, box, fill=CARD, outline=LINE, radius=24):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=2)


def title(draw, text, subtitle):
    draw.text((70, 52), text, font=TITLE_FONT, fill=TEXT)
    draw.text((70, 112), subtitle, font=SUB_FONT, fill=MUTED)


def bullets(draw, box, heading, items, accent):
    x1, y1, x2, y2 = box
    card(draw, box)
    draw.text((x1 + 28, y1 + 24), heading, font=SUB_FONT, fill=TEXT)
    draw.rounded_rectangle((x1 + 28, y1 + 66, x1 + 120, y1 + 74), radius=4, fill=accent)
    top = y1 + 96
    width = x2 - x1 - 84
    for item in items:
        draw.ellipse((x1 + 30, top + 8, x1 + 40, top + 18), fill=accent)
        lines = wrap(draw, item, BODY_FONT, width)
        for i, line in enumerate(lines):
            draw.text((x1 + 56, top + i * 28), line, font=BODY_FONT, fill=TEXT if i == 0 else MUTED)
        top += max(42, len(lines) * 28 + 10)
        if top > y2 - 44:
            break


def terminal(draw, box, heading, content):
    x1, y1, x2, y2 = box
    card(draw, box, fill="#0E1528")
    for i, color in enumerate(("#FF5F57", "#FEBC2E", "#28C840")):
        left = x1 + 20 + i * 34
        draw.rounded_rectangle((left, y1 + 18, left + 24, y1 + 42), radius=12, fill=color)
    draw.text((x1 + 140, y1 + 20), heading, font=SUB_FONT, fill=TEXT)
    top = y1 + 68
    width = x2 - x1 - 48
    for line in wrap(draw, content, MONO_FONT, width):
        draw.text((x1 + 24, top), line, font=MONO_FONT, fill="#D7E3FF")
        top += 24
        if top > y2 - 28:
            break


def save(img, name):
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(OUT / name)


def generate_overview():
    img, draw = canvas()
    title(draw, "共享 skill 安装流程", "下载仓库后先初始化共享库，再把新 skill 统一入库并共享给多个本地智能体")
    bullets(draw, (70, 190, 500, 860), "Step 1  初始化", [
        "克隆仓库后运行 bootstrap.sh",
        "默认共享库路径是 ${HOME}/AI-skills",
        "默认会准备 Codex、WorkBuddy、TRAE 三个客户端入口",
    ], ACCENT)
    bullets(draw, (585, 190, 1015, 860), "Step 2  安装", [
        "单 skill 用 --local 或 --repo --path",
        "多 skill 仓库用 --bundle-local 并搭配 skill map",
        "源码默认完整保留，不做精简抽取",
    ], GREEN)
    bullets(draw, (1100, 190, 1530, 860), "Step 3  共享", [
        "多个本地智能体通过软链接共用同一份 skill",
        "新增客户端后可用 --refresh-links 一次性补链",
        "README 与教程图可用 regenerate-docs.sh 重生",
    ], YELLOW)
    save(img, "tutorial-01-overview.png")


def generate_help():
    img, draw = canvas()
    title(draw, "脚本帮助", "安装器支持本地 skill、本地多 skill 仓库、GitHub repo / URL，以及刷新全部共享入口")
    content = """$ ./scripts/install-shared-skill --help
Usage:
  install-shared-skill --refresh-links [--dry-run]
  install-shared-skill --local /path/to/skill-root ...
  install-shared-skill --bundle-local /path/to/repo-or-folder ...
  install-shared-skill --repo owner/repo --path path/to/skill ...
  install-shared-skill --url https://github.com/owner/repo/tree/ref/path/to/skill ...

Defaults:
  SHARED_ROOT=${HOME}/AI-skills
  client roots come from state/client-roots.tsv
"""
    terminal(draw, (70, 190, 1530, 900), "install-shared-skill --help", content)
    save(img, "tutorial-02-help.png")


def generate_single():
    img, draw = canvas()
    title(draw, "单 skill 安装示意", "适合仓库根目录本身就是 skill 的情况")
    content = """$ ./scripts/run-install.sh --local ~/Downloads/my-skill --move-local
[install-shared-skill] Moved full source tree into shared root: ${HOME}/AI-skills/my-skill
[install-shared-skill] Wrote skill map: ${HOME}/AI-skills/.shared-skill-state/my-skill.skillmap.tsv
[install-shared-skill] Linked codex: ${HOME}/.codex/skills/my-skill -> ${HOME}/AI-skills/my-skill
[install-shared-skill] Linked workbuddy: ${HOME}/.workbuddy/skills/my-skill -> ${HOME}/AI-skills/my-skill
[install-shared-skill] Linked trae: ${HOME}/.trae/skills/my-skill -> ${HOME}/AI-skills/my-skill
"""
    terminal(draw, (70, 190, 1530, 900), "single skill install", content)
    save(img, "tutorial-03-single-skill.png")


def generate_bundle():
    img, draw = canvas(1600, 1040)
    title(draw, "多 skill 仓库安装示意", "像 open-design 这种仓库，推荐固定复用已验证的 skill map")
    content = """$ ./scripts/run-install.sh \\
  --bundle-local ~/Downloads/open-design \\
  --container-name open-design \\
  --map-file ./state/open-design.skillmap.tsv
[install-shared-skill] Copied full source tree into shared root: ${HOME}/AI-skills/open-design
[install-shared-skill] Copied skill map: ${HOME}/AI-skills/.shared-skill-state/open-design.skillmap.tsv
[install-shared-skill] Linked codex: ${HOME}/.codex/skills/audio-jingle -> ${HOME}/AI-skills/open-design/design-templates/audio-jingle
[install-shared-skill] Linked workbuddy: ${HOME}/.workbuddy/skills/audio-jingle -> ${HOME}/AI-skills/open-design/design-templates/audio-jingle
[install-shared-skill] Linked trae: ${HOME}/.trae/skills/audio-jingle -> ${HOME}/AI-skills/open-design/design-templates/audio-jingle
...
"""
    terminal(draw, (70, 190, 1530, 950), "bundle repo install", content)
    save(img, "tutorial-04-bundle-skill.png")


def generate_verify():
    img, draw = canvas()
    title(draw, "验证共享是否生效", "确认 Codex、WorkBuddy、TRAE 三端入口是否都指向同一份共享 skill")
    content = """$ ./scripts/verify-shared-links.sh shared-skill-installer
codex      linked  ${HOME}/AI-skills/shared-skill-installer
workbuddy  linked  ${HOME}/AI-skills/shared-skill-installer
trae       linked  ${HOME}/AI-skills/shared-skill-installer
40K        ${HOME}/AI-skills/shared-skill-installer

$ ./scripts/install-shared-skill --refresh-links
[install-shared-skill] Rebuilt links from saved skill maps
"""
    terminal(draw, (70, 190, 1530, 720), "verify shared links", content)
    tree = """${HOME}/AI-skills
├── bin/install-shared-skill
├── .shared-skill-state/client-roots.tsv
├── .shared-skill-state/shared-skill-installer.skillmap.tsv
├── shared-skill-installer/
└── ...other shared skills...
"""
    terminal(draw, (70, 760, 1530, 940), "shared library layout", tree)
    save(img, "tutorial-05-verify.png")


def main():
    generate_overview()
    generate_help()
    generate_single()
    generate_bundle()
    generate_verify()


if __name__ == "__main__":
    main()
