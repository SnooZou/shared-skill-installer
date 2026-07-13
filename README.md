# shared-skill-installer

一个共享 skill 安装器。它把 GitHub 或本地 skill 统一放进一个共享库，再同步给多个本地智能体客户端使用。

A shared skill installer that stores GitHub or local skills in one shared library, then exposes them to multiple local AI clients.

Current integrated release: `V1.3.1`  
Detailed release notes: [CHANGELOG.md](./CHANGELOG.md)

---

## 中文说明

### 🖥 Shared Library Manager

`Shared Library Manager` 是这次 `V1.3.1` 版本比较大的功能更新。它把原本偏抽象的共享 skill 机制，进一步做成了可直接查看、可直接进入的本地可视化管理界面。

![Shared Library Manager](./docs/screenshots/manager-v131-overview.png)

它主要用来查看：

- 共享库里当前有哪些 skill / 仓库
- 哪些是正式登记项，哪些是未登记但已存在的本地 skill
- Codex、WorkBuddy、TRAE 等客户端是否都已正确接入
- 哪些仓库可能有更新，哪些 skill 缺少客户端链接
- 已安装客户端如果本机存在官方应用图标，管理台会优先使用提取后的本地图标

怎么打开客户端版：

- macOS 首次安装后，会自动生成：`~/Applications/Shared Library Manager.app`
- 后续直接像普通本地应用一样打开它即可
- 第一次安装完成后，智能体应主动继续问你：现在要打开本地客户端版，还是网页版
- 如果你选择客户端版，智能体应优先帮你打开本地壳应用入口
- 如果你后续找不到入口，不需要记固定关键词，只要表达“帮我打开共享技能库管理台”“帮我打开客户端版”“我找不到入口了”这类意思即可

怎么打开网页版：

- 第一次安装完成后，也可以直接在智能体的追问里选择“网页版”
- 后续如果你想重新进入网页版，直接让智能体帮你“打开共享技能库管理台网页版”即可
- 如果你只是想浏览和查看状态，网页版就够用
- 如果你要用“更改位置”这类依赖本地接口的动作，优先使用客户端版

---

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

上面这句中文口令已经够用，普通用户不需要理解命令行安装步骤。

如果你想自定义共享库位置：

```text
请帮我安装这个仓库：https://github.com/SnooZou/shared-skill-installer 。安装前请先让我选择共享技能库位置：使用默认位置、从常用位置里选一个，或者由我自己指定。确认后再自动完成安装，并接入我本地已安装的智能体客户端。
```

建议智能体先用中文给用户一个简短选择，而不是直接让用户填写路径写法。推荐提问方式：

- `默认位置（推荐）`：`~/AI-skills`
- `桌面`：在桌面创建共享技能库
- `文档`：在“文稿 / Documents”里创建共享技能库
- `我自己指定`：再让我补充位置

安装完成后，重启 Codex、WorkBuddy、TRAE 等本地智能体客户端一次即可。

---

### ✨ 它解决什么问题

![中文总览配图](./docs/screenshots/overview-zh.jpg)

- 所有本地 skill 统一放在一个位置管理
- 多个智能体共用同一套 skill，不需要重复安装
- 新 skill 完整入库，避免分散和丢文件
- 减少重复维护，也减少本地空间浪费

---

### 💬 安装完成后怎么调用或安装新 Skill

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
请使用 $shared-skill-installer，把你要安装的 GitHub skill 完整安装到我的共享技能库，并同步给所有本地智能体使用。安装的 GitHub skill 地址为：https://github.com/xxx/xxxx/...
```

安装本地 skill：

```text
请使用 $shared-skill-installer，把你要安装的本地 skill 完整入库到我的共享技能库，并同步给所有本地智能体使用。我自己的本地 skill 存放路径为：/xxx/xxxx/xxx...
```

安装多 skill 仓库：

```text
请使用 $shared-skill-installer，把你要安装的多 skill 仓库完整导入我的共享技能库，并刷新所有本地智能体入口。安装的 GitHub 仓库地址为：https://github.com/xxx/xxxx/...
```

验证是否生效：

```text
请使用 $shared-skill-installer，验证这个共享 skill 是否已在所有配置客户端中生效。
```

---

### ➕ 新增本地智能体客户端

如果你想把新的本地智能体也接入共享 skill 体系，直接在已经接入共享库的任意一个智能体里发送下面这句：

```text
请使用 $shared-skill-installer，自动识别我本机已安装的、支持本地 skill 的智能体客户端，把它们统一接入我的共享技能库，并刷新所有共享 skill 入口。
```

这句口令的目标是尽量不让用户自己去找路径。只有在某个客户端支持本地 skill、但又没有被自动识别时，才需要再补充它的名称和本地 skill 目录路径。

---

### ✅ 长期使用建议

- 新 skill 一律优先完整入库到共享库
- 不要在每个智能体目录里各装一份
- 新增客户端时，优先直接使用新增客户端的一键式口令
- 如果你机器里已经有一批旧 skill，升级到 `V1.3.1` 后先执行一次共享库重整流程
- 安装完成后，建议让智能体继续追问一次：现在要打开管理台客户端版，还是网页版
- 后续如果找不到入口，直接说出“想重新打开管理台”这类意思即可，不需要记死具体关键词

---

## English Guide

### 🖥 Shared Library Manager

`Shared Library Manager` is one of the biggest updates in `V1.3.1`. It turns the shared skill workflow from something mostly abstract into a local visual dashboard that people can actually open and use.

![Shared Library Manager](./docs/screenshots/manager-v131-overview.png)

It is mainly for checking:

- which skills and repositories are currently inside the shared library
- which items are formally indexed and which local skills still exist but are not yet registered
- whether Codex, WorkBuddy, TRAE, and other clients are connected correctly
- which repositories may have updates and which skills are missing client links
- extracted official local app icons when matching client apps are installed on the machine

How to open the client app version:

- on macOS, the first install creates: `~/Applications/Shared Library Manager.app`
- after that, open it like a normal local app
- right after the first install finishes, the AI client should actively ask whether you want to open the local app version or the web version
- if you choose the local app version, the AI client should prefer opening the local app-shell entry
- later, you do not need to remember a fixed trigger phrase; any intent like “open the shared library manager”, “open the local app version”, or “I cannot find the entry anymore” should be enough

How to open the web version:

- right after the first install, you can simply choose the web version in that follow-up question
- later, you can just ask the AI client to open the web version of the shared library manager again
- the web version is enough for browsing and checking state
- for local API actions such as changing the shared library location, prefer the client app version

---

### ⚡ Quick Start

If this is your first time installing `shared-skill-installer`, use the default location and avoid overthinking the structure.

Standard English prompt:

```text
Please help me install this repository: https://github.com/SnooZou/shared-skill-installer . Please create the shared skill library in the default local location, then automatically connect my locally installed AI clients so they can share this skill library.
```

- Repository: [https://github.com/SnooZou/shared-skill-installer](https://github.com/SnooZou/shared-skill-installer)
- Default shared library location:
  - macOS / Linux: `~/AI-skills`
  - Windows: `%USERPROFILE%\\AI-skills`

The prompt above is enough for most users. They do not need to understand the command-line bootstrap flow.

If you want a custom shared library location:

```text
Please help me install this repository: https://github.com/SnooZou/shared-skill-installer . Before installing, first let me choose where the shared skill library should live: use the default location, pick from common locations, or let me specify one myself. After that, automatically finish the installation and connect my locally installed AI clients.
```

The AI client should offer a short plain-language choice first instead of making the user write path syntax. Recommended choices:

- `Default location (Recommended)`: `~/AI-skills`
- `Desktop`: create the shared library on the desktop
- `Documents`: create the shared library inside Documents
- `Let me choose`: ask me for a custom location

After installation, restart Codex, WorkBuddy, TRAE, or any other local AI client once.

---

### ✨ What It Solves

![English overview graphic](./docs/screenshots/overview-en.jpg)

- Keeps all local skills in one managed place
- Lets multiple AI clients share the same skill library
- Preserves full source trees instead of scattering partial files
- Reduces duplicate installs, maintenance work, and local storage waste

---

### 💬 How To Invoke It Or Install New Skills After Installation

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
Use $shared-skill-installer to fully install the GitHub skill I want into my shared skill library and sync it to all local AI clients. The GitHub skill URL is: https://github.com/xxx/xxxx/...
```

Install a local skill:

```text
Use $shared-skill-installer to fully import the local skill I want into my shared skill library and sync it to all local AI clients. My local skill path is: /xxx/xxxx/xxx...
```

Install a multi-skill repository:

```text
Use $shared-skill-installer to fully import the multi-skill repository I want into my shared skill library and refresh all local AI client entries. The GitHub repository URL is: https://github.com/xxx/xxxx/...
```

Verify that a shared skill is active:

```text
Use $shared-skill-installer to verify whether this shared skill is active in every configured client.
```

---

### ➕ Adding Another Local AI Client

To connect another local AI client to the same shared skill system, send this one-click prompt from any AI client that is already connected to the shared library:

```text
Use $shared-skill-installer to automatically detect the AI clients already installed on this machine that support local skill directories, connect them to my shared skill library, and refresh all shared skill entries.
```

This prompt is designed to avoid making the user hunt for local paths. Only if a client supports local skills but is not detected automatically should you ask for its name and local skill directory path.

---

### ✅ Recommended Ongoing Workflow

- Always import new skills into the shared library first
- Do not install separate copies into every client folder
- When you add another client, prefer the one-click client-onboarding prompt
- If you already have an older batch of local skills, run one shared-library reconciliation pass after upgrading to `V1.3.1`
- After installation, it is better for the AI client to ask one more time whether you want to open the local app version or the web version of the manager
- Later, if you cannot find the entry point, you should only need to express the intent to reopen the manager rather than remember an exact keyword
