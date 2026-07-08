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
- rebuild links for all existing shared skills
- verify whether a shared skill is active in each client
- update the shared-skill documentation or tutorial screenshots

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
- `state/client-roots.tsv`: shared client configuration
- `state/open-design.skillmap.tsv`: example map for a multi-skill repository

## Standard workflow

1. If this repository has not been initialized yet, run `scripts/bootstrap.sh`.
2. Decide whether the source is:
   - a single local skill
   - a multi-skill local repository
   - a GitHub repo/path or GitHub URL
3. Use the installer with the matching mode.
4. Verify the result with `scripts/verify-shared-links.sh <skill-name>` or with `readlink`.
5. If a new client root was added, run `scripts/install-shared-skill --refresh-links`.

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

## Adding another client

For user-facing requests, prefer a one-click natural-language prompt such as:

```text
请使用 $shared-skill-installer，把新的本地智能体客户端加入我的共享技能库体系，并刷新所有共享 skill 入口。新客户端名称为：xxx 。这个客户端的本地 skill 目录路径为：/xxx/xxxx/...
```

Under the hood, implement this by updating `state/client-roots.tsv`, then running:

```bash
./scripts/install-shared-skill --refresh-links
```

## Invocation examples

- `Use $shared-skill-installer to install the GitHub skill I want into my shared skill library. The GitHub skill URL is: https://github.com/xxx/xxxx/...`
- `Use $shared-skill-installer to import the local skill I want into my shared skill library and share it with all clients. My local skill path is: /xxx/xxxx/xxx...`
- `Use $shared-skill-installer to import the multi-skill repository I want into my shared skill library. The GitHub repository URL is: https://github.com/xxx/xxxx/...`
- `Use $shared-skill-installer to add another local AI client to my shared skill library setup and refresh all shared skill links. The new client name is: xxx . Its local skill root path is: /xxx/xxxx/...`
- `Use $shared-skill-installer to verify whether this skill is active in every configured client.`
- `请使用 $shared-skill-installer，把你要安装的 GitHub skill 完整安装到我的共享技能库，并同步给所有本地智能体使用。安装的 GitHub skill 地址为：https://github.com/xxx/xxxx/...`
- `请使用 $shared-skill-installer，把你要安装的本地 skill 完整入库到我的共享技能库，并同步给所有本地智能体使用。我自己的本地 skill 存放路径为：/xxx/xxxx/xxx...`
- `请使用 $shared-skill-installer，把你要安装的多 skill 仓库完整导入我的共享技能库，并刷新所有本地智能体入口。安装的 GitHub 仓库地址为：https://github.com/xxx/xxxx/...`
- `请使用 $shared-skill-installer，把新的本地智能体客户端加入我的共享技能库体系，并刷新所有共享 skill 入口。新客户端名称为：xxx 。这个客户端的本地 skill 目录路径为：/xxx/xxxx/...`
- `请使用 $shared-skill-installer，验证这个共享 skill 是否已在所有配置客户端中生效。`
