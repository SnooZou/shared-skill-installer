# shared-skill-installer

把新的开源 skill 或本地 skill，统一安装到本机共享库 `AI-skills`，再自动共享给多个本地智能体使用。

## 这个 skill 能做什么

- 安装单个本地 skill
- 安装 GitHub 上的 skill
- 导入像 `open-design` 这样的多 skill 仓库
- 保留完整源码，不做默认删减
- 自动建立 `Codex`、`WorkBuddy`、`TRAE` 等本地智能体入口软链接
- 在新增本地智能体后统一刷新所有共享链接
- 验证共享是否已经生效
- 重生 README 教程截图

## 仓库内容

```text
shared-skill-installer/
├── README.md
├── SKILL.md
├── agents/openai.yaml
├── scripts/
│   ├── install-shared-skill
│   ├── run-install.sh
│   ├── verify-shared-links.sh
│   └── regenerate-docs.sh
├── docs/
│   ├── generate_readme_screens.py
│   └── screenshots/
└── state/
    ├── client-roots.tsv
    ├── open-design.skillmap.tsv
    └── shared-skill-installer.skillmap.tsv
```

## 教程图

### 1. 总流程

![overview](./docs/screenshots/tutorial-01-overview.png)

### 2. 查看脚本帮助

![help](./docs/screenshots/tutorial-02-help.png)

### 3. 单 skill 安装示意

![single](./docs/screenshots/tutorial-03-single-skill.png)

### 4. 多 skill 仓库安装示意

![bundle](./docs/screenshots/tutorial-04-bundle-skill.png)

### 5. 验证三端共享生效

![verify](./docs/screenshots/tutorial-05-verify.png)

## 当前共享客户端

共享目标由这个文件控制：

- [`state/client-roots.tsv`](./state/client-roots.tsv)

当前示例：

```text
codex	/Users/Snoo_1/.codex/skills
workbuddy	/Users/Snoo_1/.workbuddy/skills
trae	/Users/Snoo_1/.trae/skills
```

其中 TRAE 采用的是：

- `/Users/Snoo_1/.trae/skills`

这样能和它自己的 `.trae/skills/<skill-name>/` 约定保持一致，同时不去改动 `~/.trae-cn/builtin_skills` 内置 skill 区域。

## 在本机如何激活这个 skill

如果这个 skill 已经放进你的共享库，并且 `Codex` / `WorkBuddy` / `TRAE` 已经建立好入口，那么重启一次客户端即可识别。

当前 live 版本位置是：

- `/Users/Snoo_1/AI-skills/shared-skill-installer`

## 每次安装新 skill 时怎么调用

### 方式 1：自然语言点名

```text
请使用 shared-skill-installer，把这个 GitHub skill 安装到共享库：https://github.com/owner/repo/tree/main/path/to/skill
```

```text
请使用 shared-skill-installer，把这个本地 skill 安装到 AI-skills：/path/to/skill
```

```text
请使用 shared-skill-installer，把这个多 skill 仓库导入 AI-skills，并保留完整源码：/path/to/repo
```

```text
请使用 shared-skill-installer，把 TRAE 也加入共享 skill，并刷新所有现有入口
```

### 方式 2：技能语法

```text
Use $shared-skill-installer to install this local skill into AI-skills and share it: /path/to/skill
```

```text
Use $shared-skill-installer to import this GitHub skill into the shared library: https://github.com/owner/repo/tree/main/path/to/skill
```

## 常用动作

安装单 skill：

```bash
./scripts/run-install.sh --local /path/to/skill-root
```

移动单 skill 到共享库：

```bash
./scripts/run-install.sh --local /path/to/skill-root --move-local
```

导入多 skill 仓库：

```bash
./scripts/run-install.sh \
  --bundle-local /path/to/open-design \
  --container-name open-design \
  --map-file ./state/open-design.skillmap.tsv
```

新增客户端后刷新全部共享链接：

```bash
./scripts/install-shared-skill --refresh-links
```

验证某个 skill 是否三端共享：

```bash
./scripts/verify-shared-links.sh shared-skill-installer
```

重生教程截图：

```bash
./scripts/regenerate-docs.sh
```

## 说明

这个仓库负责保存：

- skill 本体
- 本地安装与验证脚本
- 教程截图
- client roots 配置

你机器上真正正在运行的共享库仍然是：

- `/Users/Snoo_1/AI-skills`
