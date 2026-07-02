# shared-skill-installer

Install local or open-source skills into one shared library, then expose them to multiple local AI clients through symlinks.

This repository is a reusable template. It is no longer tied to one specific machine path.

## What It Solves

- keeps one shared source of truth for local skills
- preserves full source trees instead of extracting only partial files
- supports single-skill folders, multi-skill repositories, and GitHub skill paths
- shares the same skill with multiple local AI clients such as Codex, WorkBuddy, and TRAE
- lets you add a new local client later and rebuild all links with one command

## Default Layout

By default, after bootstrap the shared library lives at:

```text
${HOME}/AI-skills
```

The installer will manage:

```text
${HOME}/AI-skills/
├── bin/install-shared-skill
├── .shared-skill-state/
│   ├── client-roots.tsv
│   ├── shared-skill-installer.skillmap.tsv
│   └── ...other skill maps...
└── shared-skill-installer/
```

Client roots are configured in:

- [`state/client-roots.tsv`](./state/client-roots.tsv)

Default template:

```text
codex	${HOME}/.codex/skills
workbuddy	${HOME}/.workbuddy/skills
trae	${HOME}/.trae/skills
```

## Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/SnooZou/shared-skill-installer.git
cd shared-skill-installer
```

### 2. Bootstrap the shared library

```bash
./scripts/bootstrap.sh
```

This will:

- create `${HOME}/AI-skills` if needed
- install this repository into `${HOME}/AI-skills/shared-skill-installer`
- copy the default client roots template into `${HOME}/AI-skills/.shared-skill-state/client-roots.tsv`
- create the `shared-skill-installer` skill entry in every configured client root

If you want another shared library location, set `SHARED_ROOT` first:

```bash
SHARED_ROOT=/your/path/AI-skills ./scripts/bootstrap.sh
```

### 3. Restart your local AI clients

Restart Codex, WorkBuddy, TRAE, or any other configured client if they do not hot-reload new skills.

## How To Use The Skill

### Natural-language invocation

```text
Use shared-skill-installer to install this GitHub skill into my shared library: https://github.com/owner/repo/tree/main/path/to/skill
```

```text
Use shared-skill-installer to import this local skill into the shared library: /path/to/skill
```

```text
Use shared-skill-installer to add TRAE to my shared clients and refresh all links
```

### Skill syntax

```text
Use $shared-skill-installer to install this local skill into the shared library: /path/to/skill
```

## Common Commands

### Install a single local skill

```bash
./scripts/run-install.sh --local /path/to/skill-root
```

### Move a single local skill into the shared library

```bash
./scripts/run-install.sh --local /path/to/skill-root --move-local
```

### Install from GitHub

```bash
./scripts/run-install.sh --repo owner/repo --path path/to/skill
```

### Install a multi-skill repository

```bash
./scripts/run-install.sh \
  --bundle-local /path/to/open-design \
  --container-name open-design \
  --map-file ./state/open-design.skillmap.tsv
```

### Rebuild links for every configured client

```bash
./scripts/install-shared-skill --refresh-links
```

Use this after:

- adding a new client root
- restoring a machine
- replacing client-side skill folders

### Verify one shared skill

```bash
./scripts/verify-shared-links.sh shared-skill-installer
```

## Adding Another Local AI Client

1. Edit [`state/client-roots.tsv`](./state/client-roots.tsv)
2. Add one line:

```text
my-client	${HOME}/.my-client/skills
```

3. Re-run:

```bash
./scripts/install-shared-skill --refresh-links
```

## Screenshots

### 1. Overview

![overview](./docs/screenshots/tutorial-01-overview.png)

### 2. Help

![help](./docs/screenshots/tutorial-02-help.png)

### 3. Single skill install

![single](./docs/screenshots/tutorial-03-single-skill.png)

### 4. Multi-skill repository install

![bundle](./docs/screenshots/tutorial-04-bundle-skill.png)

### 5. Shared link verification

![verify](./docs/screenshots/tutorial-05-verify.png)

## Regenerate The Docs Screenshots

```bash
./scripts/regenerate-docs.sh
```

## Repository Contents

```text
shared-skill-installer/
├── README.md
├── SKILL.md
├── agents/openai.yaml
├── docs/
│   ├── generate_readme_screens.py
│   └── screenshots/
├── scripts/
│   ├── bootstrap.sh
│   ├── install-shared-skill
│   ├── regenerate-docs.sh
│   ├── run-install.sh
│   └── verify-shared-links.sh
└── state/
    ├── client-roots.tsv
    ├── open-design.skillmap.tsv
    └── shared-skill-installer.skillmap.tsv
```
