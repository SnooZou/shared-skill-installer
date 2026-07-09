---
name: shared-skill-installer
description: Install, migrate, verify, refresh, or document local and open-source skills into one shared library, then expose them to multiple local AI clients through symlinks. Invoke when the user wants one skill library shared by Codex, WorkBuddy, TRAE, or similar clients.
---

# Shared Skill Installer

Use this skill when the user wants to:

- install a new GitHub or local skill into a shared library
- move or copy a local skill into the shared library
- import a multi-skill repository such as `open-design`
- add another local AI client to the shared client list
- adopt existing local skills that already live in `AI-skills` but were never registered into shared state
- rebuild links for all existing shared skills
- verify whether a shared skill is active in each client
- update the shared-skill documentation or tutorial screenshots
- open or refresh the bundled Shared Library Manager dashboard
- extract official local app icons for installed AI clients and use them in the bundled manager

## Default assumptions

- Default shared library root: `${HOME}/AI-skills`
- Default client roots come from `state/client-roots.tsv`
- Default clients in the template: Codex, WorkBuddy, and TRAE

The actual install script also accepts overrides through environment variables such as `SHARED_ROOT`.

## Important files in this repository

- `scripts/bootstrap.sh`: first-run setup for a new machine
- `scripts/install-shared-skill`: core installer
- `scripts/run-install.sh`: convenience wrapper
- `scripts/verify-shared-links.sh`: verify one skill across all configured clients
- `scripts/regenerate-docs.sh`: rebuild tutorial screenshots
- `scripts/export-shared-library-state.py`: export dashboard data for the bundled manager
- `scripts/build-shared-library-manager.sh`: refresh the bundled dashboard data
- `scripts/extract-client-icons.py`: extract official app icons from local AI client app bundles into the bundled manager assets
- `scripts/open-shared-library-manager.sh`: rebuild the dashboard data and return the local entry page
- `state/client-roots.tsv`: shared client configuration
- `state/open-design.skillmap.tsv`: example map for a multi-skill repository
- `manager/index.html`: bundled Shared Library Manager UI
- `VERSION`: current packaged release version

## Standard workflow

1. If this repository has not been initialized yet, treat first-run onboarding as a natural-language flow for the user, not a command-line lesson.
2. If the user does not explicitly ask to customize the shared library location, use the default location.
3. If the user wants to customize the shared library location, do not ask them to write shell syntax or environment variables. First offer a short plain-language choice such as:
   - default location: `${HOME}/AI-skills`
   - desktop
   - documents
   - let me specify a location myself
4. After the user chooses, run `scripts/bootstrap.sh` with the right defaults or `SHARED_ROOT`.
5. Decide whether the source is:
   - a single local skill
   - a multi-skill local repository
   - a GitHub repo/path or GitHub URL
6. Use the installer with the matching mode.
7. Verify the result with `scripts/verify-shared-links.sh <skill-name>` or with `readlink`.
8. If the user wants to connect more local AI clients, prefer `scripts/install-shared-skill --auto-detect-clients` first, then fall back to a manual client root only if auto-detection misses one.
9. In `V1.2.0`, if the user has older skills already sitting in `AI-skills`, prefer `scripts/install-shared-skill --reconcile-library` so the installer can adopt them into shared state and repair missing client links.

## Install modes

Single local skill:

```bash
./scripts/run-install.sh --local /path/to/skill-root
```

Move a local skill into the shared library:

```bash
./scripts/run-install.sh --local /path/to/skill-root --move-local
```

Multi-skill repository:

```bash
./scripts/run-install.sh \
  --bundle-local /path/to/repo \
  --container-name repo-name \
  --map-file ./state/open-design.skillmap.tsv
```

GitHub skill:

```bash
./scripts/run-install.sh --repo owner/repo --path path/to/skill
```

Refresh every configured client link:

```bash
./scripts/install-shared-skill --refresh-links
```

Adopt existing local skills and repair the shared state:

```bash
./scripts/install-shared-skill --reconcile-library
```

Open the bundled Shared Library Manager:

```bash
./scripts/open-shared-library-manager.sh
```

Refresh bundled manager data and local official client icons:

```bash
./scripts/build-shared-library-manager.sh
```

## Adding another client

For user-facing requests, prefer a one-click natural-language prompt such as:

```text
请使用 $shared-skill-installer，自动识别我本机已安装的、支持本地 skill 的智能体客户端，把它们统一接入我的共享技能库，并刷新所有共享 skill 入口。
```

Under the hood, implement this by running:

```bash
./scripts/install-shared-skill --auto-detect-clients
```

If auto-detection misses a client that the user knows is installed, ask for that client's name and local skill directory path, then append it to `state/client-roots.tsv` and run `./scripts/install-shared-skill --refresh-links`.

## First-time install phrasing

For user-facing first-time install requests, prefer natural-language prompts such as:

- `请帮我安装这个仓库：https://github.com/SnooZou/shared-skill-installer 。请使用默认本地位置创建共享技能库，并自动接入我本地已安装的智能体客户端，共用这套共享技能库。`
- `请帮我安装这个仓库：https://github.com/SnooZou/shared-skill-installer 。安装前请先让我选择共享技能库位置：使用默认位置、从常用位置里选一个，或者由我自己指定。确认后再自动完成安装，并接入我本地已安装的智能体客户端。`

Unless the user explicitly asks for technical details, do not lead with raw shell commands like `git clone ...` or `SHARED_ROOT=... ./scripts/bootstrap.sh`.

When the user asks to choose a custom location, prefer presenting concrete options in plain language first:

- `默认位置（推荐）` -> `${HOME}/AI-skills`
- `桌面` -> `${HOME}/Desktop/AI-skills`
- `文稿 / Documents` -> `${HOME}/Documents/AI-skills`
- `我自己指定` -> ask the user where they want it

## Invocation examples

- `Use $shared-skill-installer to fully install the GitHub skill I want into my shared skill library and sync it to all local AI clients. The GitHub skill URL is: https://github.com/xxx/xxxx/...`
- `Use $shared-skill-installer to fully import the local skill I want into my shared skill library and sync it to all local AI clients. My local skill path is: /xxx/xxxx/xxx...`
- `Use $shared-skill-installer to fully import the multi-skill repository I want into my shared skill library and refresh all local AI client entries. The GitHub repository URL is: https://github.com/xxx/xxxx/...`
- `Use $shared-skill-installer to automatically detect the AI clients already installed on this machine that support local skill directories, connect them to my shared skill library, and refresh all shared skill entries.`
- `Use $shared-skill-installer to verify whether this skill is active in every configured client.`
- `请使用 $shared-skill-installer，把你要安装的 GitHub skill 完整安装到我的共享技能库，并同步给所有本地智能体使用。安装的 GitHub skill 地址为：https://github.com/xxx/xxxx/...`
- `请使用 $shared-skill-installer，把你要安装的本地 skill 完整入库到我的共享技能库，并同步给所有本地智能体使用。我自己的本地 skill 存放路径为：/xxx/xxxx/xxx...`
- `请使用 $shared-skill-installer，把你要安装的多 skill 仓库完整导入我的共享技能库，并刷新所有本地智能体入口。安装的 GitHub 仓库地址为：https://github.com/xxx/xxxx/...`
- `请使用 $shared-skill-installer，自动识别我本机已安装的、支持本地 skill 的智能体客户端，把它们统一接入我的共享技能库，并刷新所有共享 skill 入口。`
- `请使用 $shared-skill-installer，验证这个共享 skill 是否已在所有配置客户端中生效。`
