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

Edit `state/client-roots.tsv` and add one line:

```text
my-client	${HOME}/.my-client/skills
```

Then rebuild links:

```bash
./scripts/install-shared-skill --refresh-links
```

## Invocation examples

- `Use $shared-skill-installer to install this GitHub skill into my shared library.`
- `Use $shared-skill-installer to import this local skill into the shared library and share it with all clients.`
- `Use $shared-skill-installer to add TRAE to my shared clients and rebuild links.`
- `Use $shared-skill-installer to verify whether this skill is active in every configured client.`
- `请使用 $shared-skill-installer，把这个 GitHub skill 完整安装到我的共享技能库。`
- `请使用 $shared-skill-installer，把这个本地 skill 完整入库到共享库并同步给所有客户端。`
- `请使用 $shared-skill-installer，把 TRAE 加入共享客户端并重建所有入口。`
- `请使用 $shared-skill-installer，验证这个共享 skill 是否已在所有配置客户端中生效。`
