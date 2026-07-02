---
name: shared-skill-installer
description: Install, migrate, merge, verify, or document open-source and local skills into /Users/Snoo_1/AI-skills as the shared source of truth. Preserve full source trees, reuse skill maps for multi-skill repos like open-design, and update symlink entries for all configured local agent skill roots such as Codex and WorkBuddy.
---

# Shared Skill Installer

Use this skill when the user wants to:

- install a new GitHub or local skill into the shared library
- move or copy a local skill into `AI-skills`
- import a multi-skill repository such as `open-design`
- refresh shared links for Codex, WorkBuddy, or other configured local agents
- verify whether a shared skill is active
- update the shared-skill README or regenerate tutorial screenshots

## Shared paths

- Shared library root: `/Users/Snoo_1/AI-skills`
- Core installer: `/Users/Snoo_1/AI-skills/bin/install-shared-skill`
- Client roots config: `/Users/Snoo_1/AI-skills/.shared-skill-state/client-roots.tsv`
- Shared README: `/Users/Snoo_1/AI-skills/README.md`
- Screenshot generator: `/Users/Snoo_1/AI-skills/docs/generate_readme_screens.py`

Use the bundled wrapper scripts in this skill when convenient:

- `scripts/run-install.sh`
- `scripts/verify-shared-links.sh`
- `scripts/regenerate-docs.sh`

## Source selection rules

Choose the install mode from the source shape:

1. If the source directory itself contains `SKILL.md`, treat it as a single skill and use `--local`.
2. If the source is a repository containing many `SKILL.md` files, treat it as a bundle and use `--bundle-local`.
3. If the user provides a GitHub repo/path or GitHub URL, use `--repo` plus `--path`, or `--url`.
4. For `open-design`, always prefer the verified map file:
   `/Users/Snoo_1/AI-skills/.shared-skill-state/open-design.skillmap.tsv`

## Safety defaults

- Preserve full source trees in `AI-skills`.
- Default to copy behavior for local folders.
- Use `--move-local` only when the user explicitly asks to move or merge the original folder into `AI-skills`.
- Do not delete the external source folder unless the user asks or confirms that it is now only a backup copy.

## Standard workflow

1. Inspect the source and decide whether it is a single skill, a multi-skill repo, or a GitHub source.
2. Build the `install-shared-skill` command.
3. Run the install through `scripts/run-install.sh` or the core installer.
4. Verify the resulting links with `scripts/verify-shared-links.sh <skill-name>` or with `readlink`.
5. If the installation changes the documented workflow, update `/Users/Snoo_1/AI-skills/README.md` and regenerate screenshots with `scripts/regenerate-docs.sh`.

## Multi-agent sharing

The set of local clients is controlled by:

`/Users/Snoo_1/AI-skills/.shared-skill-state/client-roots.tsv`

Format:

```text
label<TAB>/absolute/path/to/skill/root
```

Current examples:

```text
codex	/Users/Snoo_1/.codex/skills
workbuddy	/Users/Snoo_1/.workbuddy/skills
```

If the user adds another local agent, update that file first, then rerun the install or verification step.

## Invocation phrases that should trigger this skill

- `请使用 shared-skill-installer，把这个 GitHub skill 安装到共享库`
- `Use $shared-skill-installer to install this local skill into AI-skills and share it`
- `把这个 open-design 风格的多 skill 仓库导入 AI-skills`
- `请用 shared-skill-installer 验证这个 skill 现在是不是在共享库生效了`
- `请用 shared-skill-installer 更新共享 skill 的 README 和示意截图`

## Command patterns

Single local skill:

```bash
/Users/Snoo_1/AI-skills/shared-skill-installer/scripts/run-install.sh \
  --local /path/to/skill-root
```

Single local skill, move into shared library:

```bash
/Users/Snoo_1/AI-skills/shared-skill-installer/scripts/run-install.sh \
  --local /path/to/skill-root \
  --move-local
```

Bundle repository with a known map file:

```bash
/Users/Snoo_1/AI-skills/shared-skill-installer/scripts/run-install.sh \
  --bundle-local /path/to/open-design \
  --container-name open-design \
  --map-file /Users/Snoo_1/AI-skills/.shared-skill-state/open-design.skillmap.tsv
```

GitHub skill:

```bash
/Users/Snoo_1/AI-skills/shared-skill-installer/scripts/run-install.sh \
  --repo owner/repo \
  --path path/to/skill
```

## Verification reminders

After installation:

- check that the expected link in each configured client root points to `AI-skills`
- check the target directory exists and has realistic size
- tell the user whether the original external folder is now only a backup
