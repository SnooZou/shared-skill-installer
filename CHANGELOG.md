# Changelog

All notable version updates are recorded here instead of in the main README.

README stays focused on installation, usage, and the manager UI. This file keeps the release history.

---

## 中文更新记录

### V1.3.1

- 旧的本地 skill 如果已经在 `AI-skills` 里，但没写进 `.shared-skill-state/*.skillmap.tsv`，现在可以被自动纳管
- 刷新共享库时，会顺带修复缺失的客户端入口，而不是只处理已登记 skill
- 如果旧目录里存在和正式 skill 同名的重复项，`V1.3.1` 会识别并跳过这类冲突纳管，避免抢占现有入口
- 技能包里正式内置了 `Shared Skill Manager` 可视化管理台，不再只是独立原型
- 技能管理台左上角加入版本号与 GitHub 仓库跳转图标，方便查看当前版本和来源
- 管理台里为“未登记本地 skill”提供了单独入口，不会再被埋在普通列表里
- 管理台会优先从本机已安装客户端的官方应用包里提取图标并本地引用，后续新增 Cursor、Claude 等客户端也沿用这套机制
- 修复 `SKILL.md` 多行 frontmatter 描述被错误显示为 `>` 或 `|` 的问题，技能介绍读取更稳定
- macOS 首次安装后会自动生成 `Shared Skill Manager.app`，用户以后可以像打开本地应用一样重新进入管理台
- 即使目标 Mac 没有安装 Apple 开发者工具 / `clang`，现在也会自动回退到 `osacompile + JXA` 本地壳应用打包链路，不再因为缺少编译器而失去客户端入口
- 管理台脚本现在会优先打开这个本地壳应用，找不到时再回退到浏览器模式
- 浏览器静态页与本地客户端壳的能力边界已明确区分：像“更改共享库位置”这类动作只在具备本地 API 的模式里显示
- 管理台顶部交互、图标提取、客户端重开流程和本地壳应用打包链路做了进一步收口，减少“功能修好了但入口状态不一致”的情况

常用维护命令：

```bash
./scripts/install-shared-skill --reconcile-library
./scripts/open-shared-library-manager.sh
```

### V1.3.0

- 共享库重整流程可以自动纳管旧 skill，并修复缺失的客户端入口
- 管理台作为正式内置组件加入技能包
- 本地已安装智能体客户端的官方图标提取机制接入管理台
- macOS 本地壳应用入口加入安装链路，方便后续重新打开管理台

---

## English Release Notes

### V1.3.1

- Older local skills already living in `AI-skills` can now be adopted even if they were never registered into `.shared-skill-state/*.skillmap.tsv`
- Library refresh can now repair missing client links instead of only handling already indexed skills
- Duplicate skill names are now detected so an older stray folder does not silently overwrite an existing shared entry point
- The package now bundles the `Shared Skill Manager` dashboard directly
- The dashboard sidebar now shows the package version and a GitHub repository shortcut icon
- The dashboard now exposes a dedicated path for unindexed local skills instead of burying them in the main list
- Official local client icon extraction is now used preferentially when matching installed app bundles are found
- Multiline `SKILL.md` frontmatter descriptions no longer degrade into placeholder symbols such as `>` or `|`
- On macOS, first install can automatically build `Shared Skill Manager.app` as a stable local entry point
- Even when a target Mac does not have Apple developer tools or `clang`, the installer now falls back to an `osacompile + JXA` app-shell build instead of dropping the local client entry entirely
- The manager launcher now prefers opening the local app shell and only falls back to browser mode when the shell is unavailable
- Static browser mode and local app-shell mode now expose the right actions more consistently, including manager-only capabilities such as shared-root relocation
- The manager header flow, icon extraction path, client reopen path, and local shell packaging chain were tightened to reduce mismatched entry-state issues

Common maintenance commands:

```bash
./scripts/install-shared-skill --reconcile-library
./scripts/open-shared-library-manager.sh
```

### V1.3.0

- Shared-library reconciliation can auto-adopt older local skills and repair missing client links
- The visual manager became a bundled first-class part of the package
- Official local client icon extraction was wired into the manager
- A macOS local app-shell entry was added so the manager can be reopened like a local app
