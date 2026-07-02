# shared-skill-installer

一个共享 skill 安装器。它把 GitHub 或本地 skill 统一放进一个共享库，再同步给多个本地智能体客户端使用。

A shared skill installer that stores GitHub or local skills in one shared library, then exposes them to multiple local AI clients.

---

## 中文说明

### ⚡ 新手快速开始

如果你是第一次安装 `shared-skill-installer`，直接用默认位置即可，不需要先理解底层结构。

标准中文口令：

```text
请帮我安装这个仓库：https://github.com/SnooZou/shared-skill-installer 。请使用默认本地位置创建共享技能库，并自动接入我本地已安装的智能体客户端，共用这套共享技能库。
```

- 仓库地址：[https://github.com/SnooZou/shared-skill-installer](https://github.com/SnooZou/shared-skill-installer)
- 默认共享技能库位置：
  - macOS / Linux：`~/AI-skills`
  - Windows：`%USERPROFILE%\\AI-skills`

首次自动安装：

```bash
git clone https://github.com/SnooZou/shared-skill-installer.git
cd shared-skill-installer
./scripts/bootstrap.sh
```

如果你想自定义共享库位置：

```bash
SHARED_ROOT=/your/path/AI-skills ./scripts/bootstrap.sh
```

安装完成后，重启 Codex、WorkBuddy、TRAE 等本地智能体客户端一次即可。

---

### ✨ 它解决什么问题

![中文总览配图](./docs/screenshots/overview-zh.jpg)

- 所有本地 skill 统一放在一个位置管理
- 多个智能体共用同一套 skill，不需要重复安装
- 新 skill 完整入库，避免分散和丢文件
- 减少重复维护，也减少本地空间浪费

---

### 💬 安装完成后怎么调用

下面这些内容只适用于：`shared-skill-installer` 已经安装完成之后。

#### 不同智能体的调用方式

##### Codex

- 常见写法：`$shared-skill-installer`

![Codex invocation example](./docs/screenshots/client-codex-skill-invoke.png)

##### WorkBuddy

- 常见写法：输入并选中 `shared-skill-installer` 技能标签

![WorkBuddy invocation example](./docs/screenshots/client-workbuddy-skill-invoke.png)

##### TRAE

- 常见写法：`/shared-skill-installer`

![TRAE invocation example](./docs/screenshots/client-trae-skill-invoke.png)

#### 直接可复制的中文口令

安装 GitHub skill：

```text
请使用 $shared-skill-installer，把这个 GitHub skill 完整安装到我的共享技能库，并同步给所有本地智能体使用：https://github.com/owner/repo/tree/main/path/to/skill
```

安装本地 skill：

```text
请使用 $shared-skill-installer，把这个本地 skill 完整入库到 AI-skills，并让 Codex、WorkBuddy、TRAE 共用：/path/to/skill
```

安装多 skill 仓库：

```text
请使用 $shared-skill-installer，把这个多 skill 仓库完整导入共享库，容器名叫 open-design，并刷新所有客户端入口：/path/to/open-design
```

验证是否生效：

```text
请使用 $shared-skill-installer，验证这个共享 skill 是否已在所有配置客户端中生效。
```

---

### 📦 后续怎么安装新的 Skill

装好 `shared-skill-installer` 之后，后续新增 skill 都走同一套规则：

1. 先完整入库到共享库
2. 再同步给所有本地智能体

常见场景：

- GitHub skill：发 GitHub skill 链接给智能体
- 本地 skill：发本地路径给智能体
- 多 skill 仓库：发仓库路径，并指定容器名

命令行备用方式：

```bash
./scripts/run-install.sh --repo owner/repo --path path/to/skill
./scripts/run-install.sh --local /path/to/skill-root
./scripts/run-install.sh --bundle-local /path/to/open-design --container-name open-design --map-file ./state/open-design.skillmap.tsv
```

---

### ➕ 新增本地智能体客户端

如果你想把新的本地智能体也接入共享 skill 体系：

1. 编辑 [`state/client-roots.tsv`](./state/client-roots.tsv)
2. 新增一行：

```text
my-client	${HOME}/.my-client/skills
```

3. 刷新全部入口：

```bash
./scripts/install-shared-skill --refresh-links
```

---

### ✅ 长期使用建议

- 新 skill 一律优先完整入库到共享库
- 不要在每个智能体目录里各装一份
- 新增客户端时，只改 `client-roots.tsv` 后执行一次 `--refresh-links`

---

## English Guide

### ⚡ Quick Start

If this is your first time installing `shared-skill-installer`, use the default location and avoid overthinking the structure.

- Repository: [https://github.com/SnooZou/shared-skill-installer](https://github.com/SnooZou/shared-skill-installer)
- Default shared library location:
  - macOS / Linux: `~/AI-skills`
  - Windows: `%USERPROFILE%\\AI-skills`

First-time install:

```bash
git clone https://github.com/SnooZou/shared-skill-installer.git
cd shared-skill-installer
./scripts/bootstrap.sh
```

If you want a custom shared library location:

```bash
SHARED_ROOT=/your/path/AI-skills ./scripts/bootstrap.sh
```

After installation, restart Codex, WorkBuddy, TRAE, or any other local AI client once.

---

### ✨ What It Solves

![English overview graphic](./docs/screenshots/overview-en.jpg)

- Keeps all local skills in one managed place
- Lets multiple AI clients share the same skill library
- Preserves full source trees instead of scattering partial files
- Reduces duplicate installs, maintenance work, and local storage waste

---

### 💬 How To Invoke It After Installation

Everything below assumes `shared-skill-installer` is already installed.

#### Client-specific invocation

##### Codex

- Common pattern: `$shared-skill-installer`

![Codex invocation example](./docs/screenshots/client-codex-skill-invoke.png)

##### WorkBuddy

- Common pattern: type and select the `shared-skill-installer` skill chip

![WorkBuddy invocation example](./docs/screenshots/client-workbuddy-skill-invoke.png)

##### TRAE

- Common pattern: `/shared-skill-installer`

![TRAE invocation example](./docs/screenshots/client-trae-skill-invoke.png)

#### Copy-ready English prompts

Install a GitHub skill:

```text
Use $shared-skill-installer to install this GitHub skill into my shared skill library and expose it to all local AI clients: https://github.com/owner/repo/tree/main/path/to/skill
```

Install a local skill:

```text
Use $shared-skill-installer to import this local skill into AI-skills and share it with Codex, WorkBuddy, and TRAE: /path/to/skill
```

Install a multi-skill repository:

```text
Use $shared-skill-installer to import this multi-skill repository into the shared library under the container name open-design, then refresh all client links: /path/to/open-design
```

Verify that a shared skill is active:

```text
Use $shared-skill-installer to verify whether this shared skill is active in every configured client.
```

---

### 📦 How To Add New Skills Later

Once `shared-skill-installer` is installed, every new skill follows the same rule:

1. Import the full source tree into the shared library
2. Expose it to all local AI clients

Common cases:

- GitHub skill: send the GitHub skill URL to your AI client
- Local skill: send the local folder path
- Multi-skill repository: send the repo path and specify a container name

Command-line fallback:

```bash
./scripts/run-install.sh --repo owner/repo --path path/to/skill
./scripts/run-install.sh --local /path/to/skill-root
./scripts/run-install.sh --bundle-local /path/to/open-design --container-name open-design --map-file ./state/open-design.skillmap.tsv
```

---

### ➕ Adding Another Local AI Client

To connect another local AI client to the same shared skill system:

1. Edit [`state/client-roots.tsv`](./state/client-roots.tsv)
2. Add one line:

```text
my-client	${HOME}/.my-client/skills
```

3. Refresh all links:

```bash
./scripts/install-shared-skill --refresh-links
```

---

### ✅ Recommended Ongoing Workflow

- Always import new skills into the shared library first
- Do not install separate copies into every client folder
- When you add another client, update `client-roots.tsv` and run `--refresh-links`
