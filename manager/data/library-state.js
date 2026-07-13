window.SHARED_LIBRARY_STATE = {
  "generated_at": "2026-07-13T15:05:43.968585+00:00",
  "shared_root": "/Users/Snoo_1/AI-skills",
  "state_root": "/Users/Snoo_1/AI-skills/.shared-skill-state",
  "package_meta": {
    "name": "shared-skill-installer",
    "version": "V1.3.1",
    "repo_url": "https://github.com/SnooZou/shared-skill-installer"
  },
  "clients": [
    {
      "label": "codex",
      "path": "/Users/Snoo_1/.codex/skills"
    },
    {
      "label": "workbuddy",
      "path": "/Users/Snoo_1/.workbuddy/skills"
    },
    {
      "label": "trae",
      "path": "/Users/Snoo_1/.trae/skills"
    }
  ],
  "summary": {
    "container_count": 12,
    "active_container_count": 11,
    "preview_container_count": 1,
    "skill_entry_count": 368,
    "client_count": 3,
    "broken_link_count": 1,
    "update_available_count": 0,
    "duplicate_container_count": 0,
    "total_storage_bytes": 6176481280,
    "total_storage_label": "5.8 GB"
  },
  "containers": [
    {
      "name": "ai-website-cloner-template",
      "path": "/Users/Snoo_1/AI-skills/ai-website-cloner-template",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/ai-website-cloner-template.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 2736128,
      "size_label": "2.6 MB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/JCodesMore/ai-website-cloner-template.git",
        "branch": "master",
        "head_commit": "58e00d5369181dc0b84b45a2a55e6f64a017f59b",
        "dirty": false,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "clone-website",
          "relative_path": ".claude/skills/clone-website",
          "path": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
          "exists": true,
          "has_skill_md": true,
          "description": "Reverse-engineer and clone one or more websites in one shot — extracts assets, CSS, and content section-by-section and proactively dispatches parallel builder agents in worktrees as it goes. Use this whenever the user wants to clone, replic",
          "description_zh": "Reverse-engineer and clone one or more websites in one shot — extracts assets, CSS, and content section-by-section and proactively dispatches parallel builder agents in worktrees as it goes. Use this whenever the user wants to clone, replic",
          "description_en": "Reverse-engineer and clone one or more websites in one shot — extracts assets, CSS, and content section-by-section and proactively dispatches parallel builder agents in worktrees as it goes. Use this whenever the user wants to clone, replic",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/clone-website",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "resolved_target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/clone-website",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "resolved_target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/clone-website",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "resolved_target": "/Users/Snoo_1/AI-skills/ai-website-cloner-template/.claude/skills/clone-website",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "bggg-skills",
      "path": "/Users/Snoo_1/AI-skills/bggg-skills",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/bggg-skills.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 7372800,
      "size_label": "7.0 MB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/binggandata/bggg-skills.git",
        "branch": "main",
        "head_commit": "afafb15016d128e9909b926cda41528f3a564e64",
        "dirty": false,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "bggg-creator-image2psd",
          "relative_path": "bggg-creator-image2psd",
          "path": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
          "exists": true,
          "has_skill_md": true,
          "description": "把一张或多张图片整理成 PSD 图层文件的创作与转换 skill。当用户需要 image2psd、图片转 PSD、 多张图片拼成 PSD、海报/设计稿拆成多个图层、白底转透明、颜色聚类拆层、把 Codex/AI 生图结果拆成元素图再合成 PSD、 或希望输出 layered PSD、可在 Photoshop/Photopea 中编辑的分层栅格文件时，应该使用此 skill。 在 Codex 中使用时，默认结合 imagegen skill：先用 Codex 视觉/生图能力理解",
          "description_zh": "把一张或多张图片整理成 PSD 图层文件的创作与转换 skill。当用户需要 image2psd、图片转 PSD、 多张图片拼成 PSD、海报/设计稿拆成多个图层、白底转透明、颜色聚类拆层、把 Codex/AI 生图结果拆成元素图再合成 PSD、 或希望输出 layered PSD、可在 Photoshop/Photopea 中编辑的分层栅格文件时，应该使用此 skill。 在 Codex 中使用时，默认结合 imagegen skill：先用 Codex 视觉/生图能力理解",
          "description_en": "把一张或多张图片整理成 PSD 图层文件的创作与转换 skill。当用户需要 image2psd、图片转 PSD、 多张图片拼成 PSD、海报/设计稿拆成多个图层、白底转透明、颜色聚类拆层、把 Codex/AI 生图结果拆成元素图再合成 PSD、 或希望输出 layered PSD、可在 Photoshop/Photopea 中编辑的分层栅格文件时，应该使用此 skill。 在 Codex 中使用时，默认结合 imagegen skill：先用 Codex 视觉/生图能力理解",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/bggg-creator-image2psd",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "resolved_target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/bggg-creator-image2psd",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "resolved_target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/bggg-creator-image2psd",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "resolved_target": "/Users/Snoo_1/AI-skills/bggg-skills/bggg-creator-image2psd",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "claude-skill-web-clone-preview",
      "path": "/Users/Snoo_1/AI-skills/claude-skill-web-clone-preview",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/claude-skill-web-clone-preview.skillmap.tsv",
      "preview": true,
      "exists": false,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": null,
      "size_label": "unknown",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "claude-skill-web-clone",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/claude-skill-web-clone-preview",
          "exists": false,
          "has_skill_md": false,
          "description": "",
          "description_zh": "",
          "description_en": "",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": null,
              "resolved_target": null,
              "ok": true,
              "status": "preview_only"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": null,
              "resolved_target": null,
              "ok": true,
              "status": "preview_only"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": null,
              "resolved_target": null,
              "ok": true,
              "status": "preview_only"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "claude-skill-web-clone",
      "path": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/claude-skill-web-clone.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 454656,
      "size_label": "444.0 KB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/Jane-xiaoer/claude-skill-web-clone.git",
        "branch": "main",
        "head_commit": "0269e0e08a3783184ec641d341e7d57065d4a5f8",
        "dirty": false,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "claude-skill-web-clone",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
          "exists": true,
          "has_skill_md": true,
          "description": "网站复刻 / 克隆方法论。USE WHEN 用户说 复刻网站、克隆网站、clone website、抄个站、仿站、 照着这个站做一个、reproduce site、还原某个网页效果、把这个站搬下来改成我的、 复刻某个交互/WebGL/Canvas/Three.js 效果。提供「先拿真源码 → 判路径 → 逆向拆解 → 搭工程 → 替换内容」的可移植决策树，覆盖静态站 / React-Vue-Next 内容站 / WebGL-Canvas 重前端站三大分支，并强制核对任何 AI",
          "description_zh": "网站复刻 / 克隆方法论。USE WHEN 用户说 复刻网站、克隆网站、clone website、抄个站、仿站、 照着这个站做一个、reproduce site、还原某个网页效果、把这个站搬下来改成我的、 复刻某个交互/WebGL/Canvas/Three.js 效果。提供「先拿真源码 → 判路径 → 逆向拆解 → 搭工程 → 替换内容」的可移植决策树，覆盖静态站 / React-Vue-Next 内容站 / WebGL-Canvas 重前端站三大分支，并强制核对任何 AI",
          "description_en": "网站复刻 / 克隆方法论。USE WHEN 用户说 复刻网站、克隆网站、clone website、抄个站、仿站、 照着这个站做一个、reproduce site、还原某个网页效果、把这个站搬下来改成我的、 复刻某个交互/WebGL/Canvas/Three.js 效果。提供「先拿真源码 → 判路径 → 逆向拆解 → 搭工程 → 替换内容」的可移植决策树，覆盖静态站 / React-Vue-Next 内容站 / WebGL-Canvas 重前端站三大分支，并强制核对任何 AI",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "resolved_target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "resolved_target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/claude-skill-web-clone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "resolved_target": "/Users/Snoo_1/AI-skills/claude-skill-web-clone",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "dashiAI-ppt-skill",
      "path": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/dashiAI-ppt-skill.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 234106880,
      "size_label": "223.3 MB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/chuspeeism/dashiAI-ppt-skill.git",
        "branch": "main",
        "head_commit": "079c63bb4ecc3a292d37ffa26158a814a6528edc",
        "dirty": true,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "dashiAI-ppt-skill",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "制作 PPT、演示文稿、幻灯片、汇报材料时使用。DashiAI PPT 基于预置视觉主题组合页面,生成可离线打开、可在浏览器编辑的 HTML 演示,支持导出 PPTX / PDF 文件。",
          "description_zh": "制作 PPT、演示文稿、幻灯片、汇报材料时使用。DashiAI PPT 基于预置视觉主题组合页面,生成可离线打开、可在浏览器编辑的 HTML 演示,支持导出 PPTX / PDF 文件。",
          "description_en": "制作 PPT、演示文稿、幻灯片、汇报材料时使用。DashiAI PPT 基于预置视觉主题组合页面,生成可离线打开、可在浏览器编辑的 HTML 演示,支持导出 PPTX / PDF 文件。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/dashiAI-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/dashiAI-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/dashiAI-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/dashiAI-ppt-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "guizang-ppt-skill",
      "path": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/guizang-ppt-skill.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 2412544,
      "size_label": "2.3 MB",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "guizang-ppt-skill",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "生成横向翻页网页 PPT（单 HTML 文件），含 WebGL 背景、章节幕封、数据大字报、图片网格等模板。提供两种风格：① \"电子杂志 × 电子墨水\"（衬线 + 流体背景 + 暖色） ② \"瑞士国际主义\"（无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮）。当用户需要制作分享 / 演讲 / 发布会风格的网页 PPT，或提到\"杂志风 PPT\"、\"瑞士风 PPT\"、\"Swiss Style\"、\"horizontal swipe deck\"时使用。",
          "description_zh": "生成横向翻页网页 PPT（单 HTML 文件），含 WebGL 背景、章节幕封、数据大字报、图片网格等模板。提供两种风格：① \"电子杂志 × 电子墨水\"（衬线 + 流体背景 + 暖色） ② \"瑞士国际主义\"（无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮）。当用户需要制作分享 / 演讲 / 发布会风格的网页 PPT，或提到\"杂志风 PPT\"、\"瑞士风 PPT\"、\"Swiss Style\"、\"horizontal swipe deck\"时使用。",
          "description_en": "生成横向翻页网页 PPT（单 HTML 文件），含 WebGL 背景、章节幕封、数据大字报、图片网格等模板。提供两种风格：① \"电子杂志 × 电子墨水\"（衬线 + 流体背景 + 暖色） ② \"瑞士国际主义\"（无衬线 + 网格点阵 + IKB/柠檬黄/柠檬绿/安全橙高亮）。当用户需要制作分享 / 演讲 / 发布会风格的网页 PPT，或提到\"杂志风 PPT\"、\"瑞士风 PPT\"、\"Swiss Style\"、\"horizontal swipe deck\"时使用。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/guizang-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/guizang-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/guizang-ppt-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/guizang-ppt-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "huashu-design",
      "path": "/Users/Snoo_1/AI-skills/huashu-design",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/huashu-design.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 33361920,
      "size_label": "31.8 MB",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "huashu-design",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/huashu-design",
          "exists": true,
          "has_skill_md": true,
          "description": "花叔Design——用HTML做高保真原型、交互Demo、幻灯片、动画、设计变体探索+设计方向顾问+专家评审。根据任务embody对应专家（UX/动画师/幻灯片设计师/原型师），避免web design tropes。触发词：做原型、交互原型、HTML演示、动画Demo、设计变体、hi-fi设计、UI mockup、prototype、做个HTML页面、做个可视化、app原型、iOS原型、导出MP4/GIF、60fps视频、设计风格、设计方向、配色方案、推荐风格、选个风格、做",
          "description_zh": "花叔Design——用HTML做高保真原型、交互Demo、幻灯片、动画、设计变体探索+设计方向顾问+专家评审。根据任务embody对应专家（UX/动画师/幻灯片设计师/原型师），避免web design tropes。触发词：做原型、交互原型、HTML演示、动画Demo、设计变体、hi-fi设计、UI mockup、prototype、做个HTML页面、做个可视化、app原型、iOS原型、导出MP4/GIF、60fps视频、设计风格、设计方向、配色方案、推荐风格、选个风格、做",
          "description_en": "花叔Design——用HTML做高保真原型、交互Demo、幻灯片、动画、设计变体探索+设计方向顾问+专家评审。根据任务embody对应专家（UX/动画师/幻灯片设计师/原型师），避免web design tropes。触发词：做原型、交互原型、HTML演示、动画Demo、设计变体、hi-fi设计、UI mockup、prototype、做个HTML页面、做个可视化、app原型、iOS原型、导出MP4/GIF、60fps视频、设计风格、设计方向、配色方案、推荐风格、选个风格、做",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/huashu-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/huashu-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/huashu-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/huashu-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/huashu-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/huashu-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "mermaid-diagram",
      "path": "/Users/Snoo_1/AI-skills/mermaid-diagram",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/mermaid-diagram.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 16384,
      "size_label": "16.0 KB",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "mermaid-diagram",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/mermaid-diagram",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate Mermaid diagrams for product managers and developers. Use when: (1) creating flowcharts, system architecture diagrams, sequence diagrams, or mind maps, (2) converting text descriptions or PRDs into visual diagrams, (3) drawing user",
          "description_zh": "Generate Mermaid diagrams for product managers and developers. Use when: (1) creating flowcharts, system architecture diagrams, sequence diagrams, or mind maps, (2) converting text descriptions or PRDs into visual diagrams, (3) drawing user",
          "description_en": "Generate Mermaid diagrams for product managers and developers. Use when: (1) creating flowcharts, system architecture diagrams, sequence diagrams, or mind maps, (2) converting text descriptions or PRDs into visual diagrams, (3) drawing user",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/mermaid-diagram",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "resolved_target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/mermaid-diagram",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "resolved_target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/mermaid-diagram",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "resolved_target": "/Users/Snoo_1/AI-skills/mermaid-diagram",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "open-design",
      "path": "/Users/Snoo_1/AI-skills/open-design",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/open-design.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "multi-skill",
      "skill_count": 357,
      "size_bytes": 4339802112,
      "size_label": "4.0 GB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/nexu-io/open-design",
        "branch": "main",
        "head_commit": "3ee8932c69c014f6a4f4495ff03b4c5e36dfce65",
        "dirty": false,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 1,
      "indexed": true,
      "skills": [
        {
          "name": "od-contribute",
          "relative_path": ".claude/skills/od-contribute",
          "path": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
          "exists": true,
          "has_skill_md": true,
          "description": "One-click contribution flow for Open Design (nexu-io/open-design) — even for non-coders. Pick one of four cards (ship a Skill or Design System you made with OD; translate docs; fix a typo / write a blog; report a bug), the agent validates a",
          "description_zh": "One-click contribution flow for Open Design (nexu-io/open-design) — even for non-coders. Pick one of four cards (ship a Skill or Design System you made with OD; translate docs; fix a typo / write a blog; report a bug), the agent validates a",
          "description_en": "One-click contribution flow for Open Design (nexu-io/open-design) — even for non-coders. Pick one of four cards (ship a Skill or Design System you made with OD; translate docs; fix a typo / write a blog; report a bug), the agent validates a",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-contribute",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-contribute",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-contribute",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/.claude/skills/od-contribute",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "sample-plugin",
          "relative_path": "apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
          "path": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
          "exists": true,
          "has_skill_md": true,
          "description": "Phase 1 sample plugin synthesizing a SKILL.md frontmatter for backwards-compat tests.",
          "description_zh": "Phase 1 sample plugin synthesizing a SKILL.md frontmatter for backwards-compat tests.",
          "description_en": "Phase 1 sample plugin synthesizing a SKILL.md frontmatter for backwards-compat tests.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/sample-plugin",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/sample-plugin",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/sample-plugin",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/apps/daemon/tests/fixtures/plugin-fixtures/sample-plugin",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "audio-jingle",
          "relative_path": "design-templates/audio-jingle",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
          "exists": true,
          "has_skill_md": true,
          "description": "Audio generation skill — jingles, beds, voiceover, and sound effects. Routes music requests to Suno V5 / Udio / Lyria, speech to MiniMax TTS / FishAudio / ElevenLabs V3, and SFX to ElevenLabs SFX or AudioCraft. Output is one MP3/WAV file sa",
          "description_zh": "Audio generation skill — jingles, beds, voiceover, and sound effects. Routes music requests to Suno V5 / Udio / Lyria, speech to MiniMax TTS / FishAudio / ElevenLabs V3, and SFX to ElevenLabs SFX or AudioCraft. Output is one MP3/WAV file sa",
          "description_en": "Audio generation skill — jingles, beds, voiceover, and sound effects. Routes music requests to Suno V5 / Udio / Lyria, speech to MiniMax TTS / FishAudio / ElevenLabs V3, and SFX to ElevenLabs SFX or AudioCraft. Output is one MP3/WAV file sa",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/audio-jingle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/audio-jingle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/audio-jingle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/audio-jingle",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "blog-post",
          "relative_path": "design-templates/blog-post",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
          "exists": true,
          "has_skill_md": true,
          "description": "A long-form article / blog post — masthead, hero image placeholder, article body with figures and pull quotes, author byline, related posts. Use when the brief asks for \"blog\", \"article\", \"post\", \"essay\", or \"case study\".",
          "description_zh": "A long-form article / blog post — masthead, hero image placeholder, article body with figures and pull quotes, author byline, related posts. Use when the brief asks for \"blog\", \"article\", \"post\", \"essay\", or \"case study\".",
          "description_en": "A long-form article / blog post — masthead, hero image placeholder, article body with figures and pull quotes, author byline, related posts. Use when the brief asks for \"blog\", \"article\", \"post\", \"essay\", or \"case study\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/blog-post",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/blog-post",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/blog-post",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/blog-post",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "clinical-case-report",
          "relative_path": "design-templates/clinical-case-report",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
          "exists": true,
          "has_skill_md": true,
          "description": "Structured medical case presentation for clinical rounds, conferences, and documentation. Generates SOAP-format or narrative case reports with physiologically accurate vitals, labs, and evidence-based plans. Use when the brief mentions \"cas",
          "description_zh": "Structured medical case presentation for clinical rounds, conferences, and documentation. Generates SOAP-format or narrative case reports with physiologically accurate vitals, labs, and evidence-based plans. Use when the brief mentions \"cas",
          "description_en": "Structured medical case presentation for clinical rounds, conferences, and documentation. Generates SOAP-format or narrative case reports with physiologically accurate vitals, labs, and evidence-based plans. Use when the brief mentions \"cas",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/clinical-case-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/clinical-case-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/clinical-case-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/clinical-case-report",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "contact-widget",
          "relative_path": "design-templates/contact-widget",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
          "exists": true,
          "has_skill_md": true,
          "description": "Self-contained floating chat widget with welcome screen, social links, meeting button, and message input. Single HTML file, zero dependencies.",
          "description_zh": "Self-contained floating chat widget with welcome screen, social links, meeting button, and message input. Single HTML file, zero dependencies.",
          "description_en": "Self-contained floating chat widget with welcome screen, social links, meeting button, and message input. Single HTML file, zero dependencies.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/contact-widget",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/contact-widget",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/contact-widget",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/contact-widget",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "critique",
          "relative_path": "design-templates/critique",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
          "exists": true,
          "has_skill_md": true,
          "description": "Run a 5-dimension expert design review on any HTML artifact in the project — Philosophy / Visual hierarchy / Detail / Functionality / Innovation, each scored 0–10. Outputs a single self-contained HTML report with a radar chart, evidence-bac",
          "description_zh": "Run a 5-dimension expert design review on any HTML artifact in the project — Philosophy / Visual hierarchy / Detail / Functionality / Innovation, each scored 0–10. Outputs a single self-contained HTML report with a radar chart, evidence-bac",
          "description_en": "Run a 5-dimension expert design review on any HTML artifact in the project — Philosophy / Visual hierarchy / Detail / Functionality / Innovation, each scored 0–10. Outputs a single self-contained HTML report with a radar chart, evidence-bac",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/critique",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/critique",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/critique",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/critique",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "dashboard",
          "relative_path": "design-templates/dashboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
          "exists": true,
          "has_skill_md": true,
          "description": "Admin / analytics dashboard in a single HTML file. Fixed left sidebar, top bar with user/search, main grid of KPI cards and one or two charts. Use when the brief asks for a \"dashboard\", \"admin\", \"analytics\", or \"control panel\" screen.",
          "description_zh": "Admin / analytics dashboard in a single HTML file. Fixed left sidebar, top bar with user/search, main grid of KPI cards and one or two charts. Use when the brief asks for a \"dashboard\", \"admin\", \"analytics\", or \"control panel\" screen.",
          "description_en": "Admin / analytics dashboard in a single HTML file. Fixed left sidebar, top bar with user/search, main grid of KPI cards and one or two charts. Use when the brief asks for a \"dashboard\", \"admin\", \"analytics\", or \"control panel\" screen.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dashboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "dating-web",
          "relative_path": "design-templates/dating-web",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
          "exists": true,
          "has_skill_md": true,
          "description": "A consumer-feeling dating / matchmaking dashboard — left rail navigation, ticker bar of community signals, headline KPIs, a 30-day mutual-matches bar chart, and a match-rate trend block. Editorial typography, restrained accent. Use when the",
          "description_zh": "A consumer-feeling dating / matchmaking dashboard — left rail navigation, ticker bar of community signals, headline KPIs, a 30-day mutual-matches bar chart, and a match-rate trend block. Editorial typography, restrained accent. Use when the",
          "description_en": "A consumer-feeling dating / matchmaking dashboard — left rail navigation, ticker bar of community signals, headline KPIs, a 30-day mutual-matches bar chart, and a match-rate trend block. Editorial typography, restrained accent. Use when the",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/dating-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/dating-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/dating-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dating-web",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "dcf-valuation",
          "relative_path": "design-templates/dcf-valuation",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
          "exists": true,
          "has_skill_md": true,
          "description": "Discounted cash flow valuation and intrinsic value analysis for public companies. Use when the brief asks for DCF, fair value, intrinsic value, price target, undervalued or overvalued analysis, or \"what is this company worth?\"",
          "description_zh": "Discounted cash flow valuation and intrinsic value analysis for public companies. Use when the brief asks for DCF, fair value, intrinsic value, price target, undervalued or overvalued analysis, or \"what is this company worth?\"",
          "description_en": "Discounted cash flow valuation and intrinsic value analysis for public companies. Use when the brief asks for DCF, fair value, intrinsic value, price target, undervalued or overvalued analysis, or \"what is this company worth?\"",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/dcf-valuation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/dcf-valuation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/dcf-valuation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/dcf-valuation",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "digital-eguide",
          "relative_path": "design-templates/digital-eguide",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
          "exists": true,
          "has_skill_md": true,
          "description": "A two-spread digital e-guide preview — page 1 is a cover (display title, author, \"What's inside\" stats, table of contents teaser); page 2 is a spread (lesson body with pull-quote and a step list). Lifestyle / creator brand tone. Use when th",
          "description_zh": "A two-spread digital e-guide preview — page 1 is a cover (display title, author, \"What's inside\" stats, table of contents teaser); page 2 is a spread (lesson body with pull-quote and a step list). Lifestyle / creator brand tone. Use when th",
          "description_en": "A two-spread digital e-guide preview — page 1 is a cover (display title, author, \"What's inside\" stats, table of contents teaser); page 2 is a spread (lesson body with pull-quote and a step list). Lifestyle / creator brand tone. Use when th",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/digital-eguide",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/digital-eguide",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/digital-eguide",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/digital-eguide",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "docs-page",
          "relative_path": "design-templates/docs-page",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
          "exists": true,
          "has_skill_md": true,
          "description": "A documentation page — inline-start nav, scrollable article body, inline-end table of contents. Use when the brief mentions \"docs\", \"documentation\", \"guide\", \"API reference\", or \"tutorial\".",
          "description_zh": "A documentation page — inline-start nav, scrollable article body, inline-end table of contents. Use when the brief mentions \"docs\", \"documentation\", \"guide\", \"API reference\", or \"tutorial\".",
          "description_en": "A documentation page — inline-start nav, scrollable article body, inline-end table of contents. Use when the brief mentions \"docs\", \"documentation\", \"guide\", \"API reference\", or \"tutorial\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/docs-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/docs-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/docs-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/docs-page",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "email-marketing",
          "relative_path": "design-templates/email-marketing",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
          "exists": true,
          "has_skill_md": true,
          "description": "A brand product-launch email — masthead with wordmark, hero image block, headline lockup with skewed-italic accent, body copy, primary CTA, and a specifications grid. Pure HTML email layout (centered single column, table fallback). Use when",
          "description_zh": "A brand product-launch email — masthead with wordmark, hero image block, headline lockup with skewed-italic accent, body copy, primary CTA, and a specifications grid. Pure HTML email layout (centered single column, table fallback). Use when",
          "description_en": "A brand product-launch email — masthead with wordmark, hero image block, headline lockup with skewed-italic accent, body copy, primary CTA, and a specifications grid. Pure HTML email layout (centered single column, table fallback). Use when",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/email-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/email-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/email-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/email-marketing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "eng-runbook",
          "relative_path": "design-templates/eng-runbook",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
          "exists": true,
          "has_skill_md": true,
          "description": "An engineering runbook — service overview, alerts table, dashboards links, common procedures with copy-pasteable commands, on-call rotation, and an incident-response checklist. Use when the brief mentions \"runbook\", \"ops doc\", \"on-call guid",
          "description_zh": "An engineering runbook — service overview, alerts table, dashboards links, common procedures with copy-pasteable commands, on-call rotation, and an incident-response checklist. Use when the brief mentions \"runbook\", \"ops doc\", \"on-call guid",
          "description_en": "An engineering runbook — service overview, alerts table, dashboards links, common procedures with copy-pasteable commands, on-call rotation, and an incident-response checklist. Use when the brief mentions \"runbook\", \"ops doc\", \"on-call guid",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/eng-runbook",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/eng-runbook",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/eng-runbook",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/eng-runbook",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "finance-report",
          "relative_path": "design-templates/finance-report",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
          "exists": true,
          "has_skill_md": true,
          "description": "Quarterly / monthly financial report — masthead with KPIs, revenue and burn charts, P&L summary table, top-line highlights, and an outlook paragraph. Use when the brief mentions \"financial report\", \"Q3 report\", \"MRR review\", \"P&L\", or \"财报\".",
          "description_zh": "Quarterly / monthly financial report — masthead with KPIs, revenue and burn charts, P&L summary table, top-line highlights, and an outlook paragraph. Use when the brief mentions \"financial report\", \"Q3 report\", \"MRR review\", \"P&L\", or \"财报\".",
          "description_en": "Quarterly / monthly financial report — masthead with KPIs, revenue and burn charts, P&L summary table, top-line highlights, and an outlook paragraph. Use when the brief mentions \"financial report\", \"Q3 report\", \"MRR review\", \"P&L\", or \"财报\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/finance-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/finance-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/finance-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/finance-report",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "flowai-live-dashboard-template",
          "relative_path": "design-templates/flowai-live-dashboard-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Team-management dashboard skill in the FlowAI aesthetic — three tabs (Team Members, Team Details, Activity Log), KPI stat row, member table, role distribution bar chart, online presence and activity sparklines, and a top-contributors panel,",
          "description_zh": "Team-management dashboard skill in the FlowAI aesthetic — three tabs (Team Members, Team Details, Activity Log), KPI stat row, member table, role distribution bar chart, online presence and activity sparklines, and a top-contributors panel,",
          "description_en": "Team-management dashboard skill in the FlowAI aesthetic — three tabs (Team Members, Team Details, Activity Log), KPI stat row, member table, role distribution bar chart, online presence and activity sparklines, and a top-contributors panel,",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/flowai-live-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/flowai-live-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/flowai-live-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/flowai-live-dashboard-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gamified-app",
          "relative_path": "design-templates/gamified-app",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
          "exists": true,
          "has_skill_md": true,
          "description": "A multi-frame gamified mobile-app prototype — three phone frames on a dark showcase stage. Frame 1: cover / poster, Frame 2: today's quests with XP ribbons and a level bar, Frame 3: quest detail. Vivid quest tiles, level ribbon, bottom tab ",
          "description_zh": "A multi-frame gamified mobile-app prototype — three phone frames on a dark showcase stage. Frame 1: cover / poster, Frame 2: today's quests with XP ribbons and a level bar, Frame 3: quest detail. Vivid quest tiles, level ribbon, bottom tab",
          "description_en": "A multi-frame gamified mobile-app prototype — three phone frames on a dark showcase stage. Frame 1: cover / poster, Frame 2: today's quests with XP ribbons and a level bar, Frame 3: quest detail. Vivid quest tiles, level ribbon, bottom tab",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gamified-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gamified-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gamified-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/gamified-app",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "github-dashboard",
          "relative_path": "design-templates/github-dashboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
          "exists": true,
          "has_skill_md": true,
          "description": "GitHub repository analytics dashboard — stars, forks, contributors, issues, pull requests, recent activity, and top contributors. Use when the brief asks for a GitHub repo dashboard, open-source growth report, repository health page, or Git",
          "description_zh": "GitHub repository analytics dashboard — stars, forks, contributors, issues, pull requests, recent activity, and top contributors. Use when the brief asks for a GitHub repo dashboard, open-source growth report, repository health page, or Git",
          "description_en": "GitHub repository analytics dashboard — stars, forks, contributors, issues, pull requests, recent activity, and top contributors. Use when the brief asks for a GitHub repo dashboard, open-source growth report, repository health page, or Git",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/github-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/github-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/github-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/github-dashboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "guizang-ppt",
          "relative_path": "design-templates/guizang-ppt",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
          "exists": true,
          "has_skill_md": true,
          "description": "Generates an \"editorial magazine × electronic ink\" style horizontal-swipe web deck (a single HTML file), with a WebGL fluid background, serif headlines + sans-serif body, act dividers, big-number data pages, image grids, and more templates.",
          "description_zh": "Generates an \"editorial magazine × electronic ink\" style horizontal-swipe web deck (a single HTML file), with a WebGL fluid background, serif headlines + sans-serif body, act dividers, big-number data pages, image grids, and more templates.",
          "description_en": "Generates an \"editorial magazine × electronic ink\" style horizontal-swipe web deck (a single HTML file), with a WebGL fluid background, serif headlines + sans-serif body, act dividers, big-number data pages, image grids, and more templates.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/guizang-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/guizang-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/guizang-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/guizang-ppt",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hr-onboarding",
          "relative_path": "design-templates/hr-onboarding",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
          "exists": true,
          "has_skill_md": true,
          "description": "A new-hire onboarding plan as a single page — first week schedule, buddy + manager intro, learning track, equipment checklist, and \"you're set when…\" outcomes. Use when the brief mentions \"onboarding\", \"new hire\", \"first week plan\", or \"入职\"",
          "description_zh": "A new-hire onboarding plan as a single page — first week schedule, buddy + manager intro, learning track, equipment checklist, and \"you're set when…\" outcomes. Use when the brief mentions \"onboarding\", \"new hire\", \"first week plan\", or \"入职\"",
          "description_en": "A new-hire onboarding plan as a single page — first week schedule, buddy + manager intro, learning track, equipment checklist, and \"you're set when…\" outcomes. Use when the brief mentions \"onboarding\", \"new hire\", \"first week plan\", or \"入职\"",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hr-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hr-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hr-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hr-onboarding",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt",
          "relative_path": "design-templates/html-ppt",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
          "exists": true,
          "has_skill_md": true,
          "description": "HTML PPT Studio — author professional static HTML presentations in many styles, layouts, and animations, all driven by templates. Use when the user asks for a presentation, PPT, slides, keynote, deck, slideshow, \"幻灯片\", \"演讲稿\", \"做一份 PPT\", \"做一",
          "description_zh": "HTML PPT Studio — author professional static HTML presentations in many styles, layouts, and animations, all driven by templates. Use when the user asks for a presentation, PPT, slides, keynote, deck, slideshow, \"幻灯片\", \"演讲稿\", \"做一份 PPT\", \"做一",
          "description_en": "HTML PPT Studio — author professional static HTML presentations in many styles, layouts, and animations, all driven by templates. Use when the user asks for a presentation, PPT, slides, keynote, deck, slideshow, \"幻灯片\", \"演讲稿\", \"做一份 PPT\", \"做一",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-course-module",
          "relative_path": "design-templates/html-ppt-course-module",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
          "exists": true,
          "has_skill_md": true,
          "description": "Online-course / workshop module deck — warm paper background + Playfair serif, persistent left sidebar of learning objectives, MCQ self-check page. Use for teaching modules, training materials, workshop slides.",
          "description_zh": "Online-course / workshop module deck — warm paper background + Playfair serif, persistent left sidebar of learning objectives, MCQ self-check page. Use for teaching modules, training materials, workshop slides.",
          "description_en": "Online-course / workshop module deck — warm paper background + Playfair serif, persistent left sidebar of learning objectives, MCQ self-check page. Use for teaching modules, training materials, workshop slides.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-course-module",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-course-module",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-course-module",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-course-module",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-graphify-dark-graph",
          "relative_path": "design-templates/html-ppt-graphify-dark-graph",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
          "exists": true,
          "has_skill_md": true,
          "description": "暗底知识图谱 deck — #06060c→#0e1020 深夜渐变 + 漂浮 blur orbs、封面 SVG 力导向图谱、彩虹渐变标题、JetBrains Mono 命令行高亮、glass-morphism 卡片。适合 dev-tool / CLI / 知识图谱 / 数据可视化的发布会，\"AI-native + 科幻 + 暖色\" 调子。",
          "description_zh": "暗底知识图谱 deck — #06060c→#0e1020 深夜渐变 + 漂浮 blur orbs、封面 SVG 力导向图谱、彩虹渐变标题、JetBrains Mono 命令行高亮、glass-morphism 卡片。适合 dev-tool / CLI / 知识图谱 / 数据可视化的发布会，\"AI-native + 科幻 + 暖色\" 调子。",
          "description_en": "暗底知识图谱 deck — #06060c→#0e1020 深夜渐变 + 漂浮 blur orbs、封面 SVG 力导向图谱、彩虹渐变标题、JetBrains Mono 命令行高亮、glass-morphism 卡片。适合 dev-tool / CLI / 知识图谱 / 数据可视化的发布会，\"AI-native + 科幻 + 暖色\" 调子。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-graphify-dark-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-graphify-dark-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-graphify-dark-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-graphify-dark-graph",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-hermes-cyber-terminal",
          "relative_path": "design-templates/html-ppt-hermes-cyber-terminal",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
          "exists": true,
          "has_skill_md": true,
          "description": "暗终端 honest-review deck — #0a0c10 黑底 + 56px 赛博网格 + CRT 暗角 + 扫描线、窗口红绿灯 chrome、`$ prompt` 命令行标题、薄荷绿 #7ed3a4 大字、JetBrains Mono、stroke-only 柱状图、blinking 光标、琥珀/绿/红三档 tag、暗色代码块。适合 CLI / agent / dev tool 测评（含 trace、diff、benchmark）。",
          "description_zh": "暗终端 honest-review deck — #0a0c10 黑底 + 56px 赛博网格 + CRT 暗角 + 扫描线、窗口红绿灯 chrome、`$ prompt` 命令行标题、薄荷绿 #7ed3a4 大字、JetBrains Mono、stroke-only 柱状图、blinking 光标、琥珀/绿/红三档 tag、暗色代码块。适合 CLI / agent / dev tool 测评（含 trace、diff、benchmark）。",
          "description_en": "暗终端 honest-review deck — #0a0c10 黑底 + 56px 赛博网格 + CRT 暗角 + 扫描线、窗口红绿灯 chrome、`$ prompt` 命令行标题、薄荷绿 #7ed3a4 大字、JetBrains Mono、stroke-only 柱状图、blinking 光标、琥珀/绿/红三档 tag、暗色代码块。适合 CLI / agent / dev tool 测评（含 trace、diff、benchmark）。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-hermes-cyber-terminal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-hermes-cyber-terminal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-hermes-cyber-terminal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-hermes-cyber-terminal",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-knowledge-arch-blueprint",
          "relative_path": "design-templates/html-ppt-knowledge-arch-blueprint",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
          "exists": true,
          "has_skill_md": true,
          "description": "奶油蓝图架构 deck — 奶油纸 #F0EAE0 底色 + 单一锈红 #B5392A 高亮、48px 蓝图网格 mask、2px 黑边硬卡片、pipeline 步骤盒（其中一个抬高）、右侧锈红 insight callout、Playfair 衬线大字、SVG 虚线反馈环。零渐变零软阴影，认真且印刷友好。",
          "description_zh": "奶油蓝图架构 deck — 奶油纸 #F0EAE0 底色 + 单一锈红 #B5392A 高亮、48px 蓝图网格 mask、2px 黑边硬卡片、pipeline 步骤盒（其中一个抬高）、右侧锈红 insight callout、Playfair 衬线大字、SVG 虚线反馈环。零渐变零软阴影，认真且印刷友好。",
          "description_en": "奶油蓝图架构 deck — 奶油纸 #F0EAE0 底色 + 单一锈红 #B5392A 高亮、48px 蓝图网格 mask、2px 黑边硬卡片、pipeline 步骤盒（其中一个抬高）、右侧锈红 insight callout、Playfair 衬线大字、SVG 虚线反馈环。零渐变零软阴影，认真且印刷友好。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-knowledge-arch-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-knowledge-arch-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-knowledge-arch-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-knowledge-arch-blueprint",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-obsidian-claude-gradient",
          "relative_path": "design-templates/html-ppt-obsidian-claude-gradient",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
          "exists": true,
          "has_skill_md": true,
          "description": "GitHub 暗紫渐变 deck — GitHub-dark #0d1117 + 紫蓝 radial 环境光 + 60px 网格 mask、居中布局、紫色 pill 标签、三色渐变标题（#a855f7→#60a5fa→#34d399）、GitHub 风代码 palette、紫色左边框高亮块。适合开发者工作流 / MCP / Agent / dev tool 教程，类似 GitHub Blog / Linear Changelog。",
          "description_zh": "GitHub 暗紫渐变 deck — GitHub-dark #0d1117 + 紫蓝 radial 环境光 + 60px 网格 mask、居中布局、紫色 pill 标签、三色渐变标题（#a855f7→#60a5fa→#34d399）、GitHub 风代码 palette、紫色左边框高亮块。适合开发者工作流 / MCP / Agent / dev tool 教程，类似 GitHub Blog / Linear Changelog。",
          "description_en": "GitHub 暗紫渐变 deck — GitHub-dark #0d1117 + 紫蓝 radial 环境光 + 60px 网格 mask、居中布局、紫色 pill 标签、三色渐变标题（#a855f7→#60a5fa→#34d399）、GitHub 风代码 palette、紫色左边框高亮块。适合开发者工作流 / MCP / Agent / dev tool 教程，类似 GitHub Blog / Linear Changelog。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-obsidian-claude-gradient",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-obsidian-claude-gradient",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-obsidian-claude-gradient",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-obsidian-claude-gradient",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-pitch-deck",
          "relative_path": "design-templates/html-ppt-pitch-deck",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
          "exists": true,
          "has_skill_md": true,
          "description": "Investor-ready 10-slide HTML pitch deck — white + blue→purple gradient hero, big numbers, traction bar chart, $4.5M-style ask page. Use when the user wants a fundraising deck, seed-round pitch, or VC meeting slides.",
          "description_zh": "Investor-ready 10-slide HTML pitch deck — white + blue→purple gradient hero, big numbers, traction bar chart, $4.5M-style ask page. Use when the user wants a fundraising deck, seed-round pitch, or VC meeting slides.",
          "description_en": "Investor-ready 10-slide HTML pitch deck — white + blue→purple gradient hero, big numbers, traction bar chart, $4.5M-style ask page. Use when the user wants a fundraising deck, seed-round pitch, or VC meeting slides.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-pitch-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-pitch-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-pitch-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-pitch-deck",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-presenter-mode-reveal",
          "relative_path": "design-templates/html-ppt-presenter-mode-reveal",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
          "exists": true,
          "has_skill_md": true,
          "description": "演讲者模式专用 deck — tokyo-night 默认主题，5 套主题 T 键切换，每页带 150-300 字逐字稿示例（<aside class=\"notes\">），按 S 打开 popup（CURRENT / NEXT / SCRIPT / TIMER 四张磁吸卡片）。用于技术分享、公开演讲、课程讲解，怕忘词或要提词器的场景。",
          "description_zh": "演讲者模式专用 deck — tokyo-night 默认主题，5 套主题 T 键切换，每页带 150-300 字逐字稿示例（<aside class=\"notes\">），按 S 打开 popup（CURRENT / NEXT / SCRIPT / TIMER 四张磁吸卡片）。用于技术分享、公开演讲、课程讲解，怕忘词或要提词器的场景。",
          "description_en": "演讲者模式专用 deck — tokyo-night 默认主题，5 套主题 T 键切换，每页带 150-300 字逐字稿示例（<aside class=\"notes\">），按 S 打开 popup（CURRENT / NEXT / SCRIPT / TIMER 四张磁吸卡片）。用于技术分享、公开演讲、课程讲解，怕忘词或要提词器的场景。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-presenter-mode-reveal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-presenter-mode-reveal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-presenter-mode-reveal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-presenter-mode-reveal",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-product-launch",
          "relative_path": "design-templates/html-ppt-product-launch",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
          "exists": true,
          "has_skill_md": true,
          "description": "Launch keynote deck — dark hero + light content, warm orange→peach accent, feature cards, pricing tiers, CTA. Use when announcing a product, launching a feature, or doing a keynote-style reveal.",
          "description_zh": "Launch keynote deck — dark hero + light content, warm orange→peach accent, feature cards, pricing tiers, CTA. Use when announcing a product, launching a feature, or doing a keynote-style reveal.",
          "description_en": "Launch keynote deck — dark hero + light content, warm orange→peach accent, feature cards, pricing tiers, CTA. Use when announcing a product, launching a feature, or doing a keynote-style reveal.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-product-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-product-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-product-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-product-launch",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-taste-brutalist",
          "relative_path": "design-templates/html-ppt-taste-brutalist",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
          "exists": true,
          "has_skill_md": true,
          "description": "16:9 HTML deck in tactical-telemetry / CRT-terminal taste. Deactivated-CRT charcoal slides, white-phosphor monospace, hazard-red accent, scanline overlay, ASCII syntax, density over decoration. Distilled from Leonxlnx/taste-skill `brutalist",
          "description_zh": "16:9 HTML deck in tactical-telemetry / CRT-terminal taste. Deactivated-CRT charcoal slides, white-phosphor monospace, hazard-red accent, scanline overlay, ASCII syntax, density over decoration. Distilled from Leonxlnx/taste-skill `brutalist",
          "description_en": "16:9 HTML deck in tactical-telemetry / CRT-terminal taste. Deactivated-CRT charcoal slides, white-phosphor monospace, hazard-red accent, scanline overlay, ASCII syntax, density over decoration. Distilled from Leonxlnx/taste-skill `brutalist",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-brutalist",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-taste-editorial",
          "relative_path": "design-templates/html-ppt-taste-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "16:9 HTML deck in editorial-minimalist taste. Warm cream slides, serif display + grotesque body, hairline rules, monospace meta, generous macro-whitespace, one accent. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "description_zh": "16:9 HTML deck in editorial-minimalist taste. Warm cream slides, serif display + grotesque body, hairline rules, monospace meta, generous macro-whitespace, one accent. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "description_en": "16:9 HTML deck in editorial-minimalist taste. Warm cream slides, serif display + grotesque body, hairline rules, monospace meta, generous macro-whitespace, one accent. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-taste-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-tech-sharing",
          "relative_path": "design-templates/html-ppt-tech-sharing",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
          "exists": true,
          "has_skill_md": true,
          "description": "Conference / internal tech-talk deck — GitHub-dark, JetBrains Mono, terminal code blocks, agenda + Q&A pages. Use for engineering presentations, internal sharing sessions, conference talks, and code-heavy walkthroughs.",
          "description_zh": "Conference / internal tech-talk deck — GitHub-dark, JetBrains Mono, terminal code blocks, agenda + Q&A pages. Use for engineering presentations, internal sharing sessions, conference talks, and code-heavy walkthroughs.",
          "description_en": "Conference / internal tech-talk deck — GitHub-dark, JetBrains Mono, terminal code blocks, agenda + Q&A pages. Use for engineering presentations, internal sharing sessions, conference talks, and code-heavy walkthroughs.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-tech-sharing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-tech-sharing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-tech-sharing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-tech-sharing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-testing-safety-alert",
          "relative_path": "design-templates/html-ppt-testing-safety-alert",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
          "exists": true,
          "has_skill_md": true,
          "description": "红琥珀警示 deck — 顶/底 45° 红黑 hazard 条纹、红色删除线否定标题、L1/L2/L3 绿/琥珀/红 tier 卡片、圆点状态 alert box、policy-yaml 代码块（红左边框 + bad 关键词高亮）、红绿 checklist、Q1 事故堆叠柱状图。适合安全 / 风险 / 事故复盘 / 红队 / 上线前 AI 评审 / policy-as-code。",
          "description_zh": "红琥珀警示 deck — 顶/底 45° 红黑 hazard 条纹、红色删除线否定标题、L1/L2/L3 绿/琥珀/红 tier 卡片、圆点状态 alert box、policy-yaml 代码块（红左边框 + bad 关键词高亮）、红绿 checklist、Q1 事故堆叠柱状图。适合安全 / 风险 / 事故复盘 / 红队 / 上线前 AI 评审 / policy-as-code。",
          "description_en": "红琥珀警示 deck — 顶/底 45° 红黑 hazard 条纹、红色删除线否定标题、L1/L2/L3 绿/琥珀/红 tier 卡片、圆点状态 alert box、policy-yaml 代码块（红左边框 + bad 关键词高亮）、红绿 checklist、Q1 事故堆叠柱状图。适合安全 / 风险 / 事故复盘 / 红队 / 上线前 AI 评审 / policy-as-code。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-testing-safety-alert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-testing-safety-alert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-testing-safety-alert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-testing-safety-alert",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-weekly-report",
          "relative_path": "design-templates/html-ppt-weekly-report",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
          "exists": true,
          "has_skill_md": true,
          "description": "Team weekly / status-update deck — corporate clarity, 8-cell KPI grid, shipped list, 8-week bar chart, next-week table. Use for 周报, business reviews, team status updates, and exec dashboards.",
          "description_zh": "Team weekly / status-update deck — corporate clarity, 8-cell KPI grid, shipped list, 8-week bar chart, next-week table. Use for 周报, business reviews, team status updates, and exec dashboards.",
          "description_en": "Team weekly / status-update deck — corporate clarity, 8-cell KPI grid, shipped list, 8-week bar chart, next-week table. Use for 周报, business reviews, team status updates, and exec dashboards.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-weekly-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-weekly-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-weekly-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-weekly-report",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-xhs-pastel-card",
          "relative_path": "design-templates/html-ppt-xhs-pastel-card",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
          "exists": true,
          "has_skill_md": true,
          "description": "柔和马卡龙慢生活 deck — 奶油 #fef8f1 底 + 三个柔光 blob、Playfair 斜体衬线 display 标题混 sans 正文、28px 圆角马卡龙卡片（桃 / 薄荷 / 天 / 紫 / 柠 / 玫）、Playfair 斜体 01-04 序号、SVG donut 图、chip+page 顶栏。适合生活方式 / 个人成长 / 慢生活 / 情绪类内容，\"杂志、手作、不太科技\"的感觉。",
          "description_zh": "柔和马卡龙慢生活 deck — 奶油 #fef8f1 底 + 三个柔光 blob、Playfair 斜体衬线 display 标题混 sans 正文、28px 圆角马卡龙卡片（桃 / 薄荷 / 天 / 紫 / 柠 / 玫）、Playfair 斜体 01-04 序号、SVG donut 图、chip+page 顶栏。适合生活方式 / 个人成长 / 慢生活 / 情绪类内容，\"杂志、手作、不太科技\"的感觉。",
          "description_en": "柔和马卡龙慢生活 deck — 奶油 #fef8f1 底 + 三个柔光 blob、Playfair 斜体衬线 display 标题混 sans 正文、28px 圆角马卡龙卡片（桃 / 薄荷 / 天 / 紫 / 柠 / 玫）、Playfair 斜体 01-04 序号、SVG donut 图、chip+page 顶栏。适合生活方式 / 个人成长 / 慢生活 / 情绪类内容，\"杂志、手作、不太科技\"的感觉。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-xhs-pastel-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-xhs-pastel-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-xhs-pastel-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-pastel-card",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-xhs-white-editorial",
          "relative_path": "design-templates/html-ppt-xhs-white-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "白底杂志风 deck — 纯白背景 + 顶部 10 色彩虹 bar、80-110px display 标题、紫→蓝→绿→橙→粉渐变文字、马卡龙软卡片组（粉/紫/蓝/绿/橙）、黑底白字 .focus pill、引用大块。同时适合发小红书图文 + 横版 PPT 双用。",
          "description_zh": "白底杂志风 deck — 纯白背景 + 顶部 10 色彩虹 bar、80-110px display 标题、紫→蓝→绿→橙→粉渐变文字、马卡龙软卡片组（粉/紫/蓝/绿/橙）、黑底白字 .focus pill、引用大块。同时适合发小红书图文 + 横版 PPT 双用。",
          "description_en": "白底杂志风 deck — 纯白背景 + 顶部 10 色彩虹 bar、80-110px display 标题、紫→蓝→绿→橙→粉渐变文字、马卡龙软卡片组（粉/紫/蓝/绿/橙）、黑底白字 .focus pill、引用大块。同时适合发小红书图文 + 横版 PPT 双用。",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-xhs-white-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-xhs-white-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-xhs-white-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-xhs-white-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-8-bit-orbit",
          "relative_path": "design-templates/html-ppt-zhangzara-8-bit-orbit",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
          "exists": true,
          "has_skill_md": true,
          "description": "8-Bit Orbit — Pixel-art neon arcade aesthetic on a deep navy void. Anything that should feel like a CRT screen at 2am: cyberpunk, gaming, web3, indie dev tools, hackathon demos.",
          "description_zh": "8-Bit Orbit — Pixel-art neon arcade aesthetic on a deep navy void. Anything that should feel like a CRT screen at 2am: cyberpunk, gaming, web3, indie dev tools, hackathon demos.",
          "description_en": "8-Bit Orbit — Pixel-art neon arcade aesthetic on a deep navy void. Anything that should feel like a CRT screen at 2am: cyberpunk, gaming, web3, indie dev tools, hackathon demos.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-8-bit-orbit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-8-bit-orbit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-8-bit-orbit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-8-bit-orbit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-biennale-yellow",
          "relative_path": "design-templates/html-ppt-zhangzara-biennale-yellow",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
          "exists": true,
          "has_skill_md": true,
          "description": "Biennale Yellow — Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Anything that should feel like an art-biennale poster or a museum's annual programme: exhibition decks, arts-institution announcemen",
          "description_zh": "Biennale Yellow — Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Anything that should feel like an art-biennale poster or a museum's annual programme: exhibition decks, arts-institution announcemen",
          "description_en": "Biennale Yellow — Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Anything that should feel like an art-biennale poster or a museum's annual programme: exhibition decks, arts-institution announcemen",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-biennale-yellow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-biennale-yellow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-biennale-yellow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-biennale-yellow",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-block-frame",
          "relative_path": "design-templates/html-ppt-zhangzara-block-frame",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
          "exists": true,
          "has_skill_md": true,
          "description": "BlockFrame — Neobrutalist deck with pastel-neon color blocks and chunky black borders. Anything that should feel pop-graphic and design-led: indie SaaS launches, agency credentials, creative reviews, brand redesigns.",
          "description_zh": "BlockFrame — Neobrutalist deck with pastel-neon color blocks and chunky black borders. Anything that should feel pop-graphic and design-led: indie SaaS launches, agency credentials, creative reviews, brand redesigns.",
          "description_en": "BlockFrame — Neobrutalist deck with pastel-neon color blocks and chunky black borders. Anything that should feel pop-graphic and design-led: indie SaaS launches, agency credentials, creative reviews, brand redesigns.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-block-frame",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-block-frame",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-block-frame",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-block-frame",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-blue-professional",
          "relative_path": "design-templates/html-ppt-zhangzara-blue-professional",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
          "exists": true,
          "has_skill_md": true,
          "description": "Blue Professional — Cream paper background with electric cobalt blue accents; clean modern professional. Anything that should feel modern-considered and lightly authoritative: B2B SaaS pitches, consulting deliverables, advisory updates, inv",
          "description_zh": "Blue Professional — Cream paper background with electric cobalt blue accents; clean modern professional. Anything that should feel modern-considered and lightly authoritative: B2B SaaS pitches, consulting deliverables, advisory updates, inv",
          "description_en": "Blue Professional — Cream paper background with electric cobalt blue accents; clean modern professional. Anything that should feel modern-considered and lightly authoritative: B2B SaaS pitches, consulting deliverables, advisory updates, inv",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-blue-professional",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-blue-professional",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-blue-professional",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-blue-professional",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-bold-poster",
          "relative_path": "design-templates/html-ppt-zhangzara-bold-poster",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
          "exists": true,
          "has_skill_md": true,
          "description": "Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Anything that should land like a magazine cover: brand manifestos, founder vision decks, editorial / cultural pitches, creative rev",
          "description_zh": "Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Anything that should land like a magazine cover: brand manifestos, founder vision decks, editorial / cultural pitches, creative rev",
          "description_en": "Bold Poster — Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent. Anything that should land like a magazine cover: brand manifestos, founder vision decks, editorial / cultural pitches, creative rev",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-bold-poster",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-broadside",
          "relative_path": "design-templates/html-ppt-zhangzara-broadside",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
          "exists": true,
          "has_skill_md": true,
          "description": "Broadside — Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack. Anything that should land like a broadside newspaper headline: brand manifestos, magazine and cultural pitches, design talks, bilingu",
          "description_zh": "Broadside — Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack. Anything that should land like a broadside newspaper headline: brand manifestos, magazine and cultural pitches, design talks, bilingu",
          "description_en": "Broadside — Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack. Anything that should land like a broadside newspaper headline: brand manifestos, magazine and cultural pitches, design talks, bilingu",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-broadside",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-broadside",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-broadside",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-broadside",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-capsule",
          "relative_path": "design-templates/html-ppt-zhangzara-capsule",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
          "exists": true,
          "has_skill_md": true,
          "description": "Capsule — Modular pill-shaped cards on warm bone with a full pastel-pop palette. Anything that should feel modular, modern, and a little Y2K: lifestyle brands, creator portfolios, DTC launches, beauty / wellness, agency credentials.",
          "description_zh": "Capsule — Modular pill-shaped cards on warm bone with a full pastel-pop palette. Anything that should feel modular, modern, and a little Y2K: lifestyle brands, creator portfolios, DTC launches, beauty / wellness, agency credentials.",
          "description_en": "Capsule — Modular pill-shaped cards on warm bone with a full pastel-pop palette. Anything that should feel modular, modern, and a little Y2K: lifestyle brands, creator portfolios, DTC launches, beauty / wellness, agency credentials.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-capsule",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-capsule",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-capsule",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-capsule",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-cartesian",
          "relative_path": "design-templates/html-ppt-zhangzara-cartesian",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
          "exists": true,
          "has_skill_md": true,
          "description": "Cartesian — Quiet warm-neutral palette with classical Playfair serifs; tasteful and unhurried. Anything that should feel quiet, considered, and grown-up: investment theses, white papers, advisory work, longform research, gallery / cultural ",
          "description_zh": "Cartesian — Quiet warm-neutral palette with classical Playfair serifs; tasteful and unhurried. Anything that should feel quiet, considered, and grown-up: investment theses, white papers, advisory work, longform research, gallery / cultural",
          "description_en": "Cartesian — Quiet warm-neutral palette with classical Playfair serifs; tasteful and unhurried. Anything that should feel quiet, considered, and grown-up: investment theses, white papers, advisory work, longform research, gallery / cultural",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-cartesian",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-cartesian",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-cartesian",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cartesian",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-cobalt-grid",
          "relative_path": "design-templates/html-ppt-zhangzara-cobalt-grid",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
          "exists": true,
          "has_skill_md": true,
          "description": "Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Anything that should feel like a quietly serious design / research bulletin, art publication, o",
          "description_zh": "Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Anything that should feel like a quietly serious design / research bulletin, art publication, o",
          "description_en": "Cobalt Grid — Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules. Anything that should feel like a quietly serious design / research bulletin, art publication, o",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-cobalt-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-cobalt-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-cobalt-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-cobalt-grid",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-coral",
          "relative_path": "design-templates/html-ppt-zhangzara-coral",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
          "exists": true,
          "has_skill_md": true,
          "description": "Coral — Cream and coral on near-black, set in oversized Bebas Neue. Anything that should feel warm-graphic and editorial: fashion, beauty, fitness, F&B, lifestyle brands, agency credentials.",
          "description_zh": "Coral — Cream and coral on near-black, set in oversized Bebas Neue. Anything that should feel warm-graphic and editorial: fashion, beauty, fitness, F&B, lifestyle brands, agency credentials.",
          "description_en": "Coral — Cream and coral on near-black, set in oversized Bebas Neue. Anything that should feel warm-graphic and editorial: fashion, beauty, fitness, F&B, lifestyle brands, agency credentials.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-coral",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-coral",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-coral",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-coral",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-creative-mode",
          "relative_path": "design-templates/html-ppt-zhangzara-creative-mode",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
          "exists": true,
          "has_skill_md": true,
          "description": "Creative Mode — Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display. Anything that should feel design-led and confident: creative agency pitches, design studio decks, ad shop credent",
          "description_zh": "Creative Mode — Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display. Anything that should feel design-led and confident: creative agency pitches, design studio decks, ad shop credent",
          "description_en": "Creative Mode — Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display. Anything that should feel design-led and confident: creative agency pitches, design studio decks, ad shop credent",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-creative-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-creative-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-creative-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-creative-mode",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-daisy-days",
          "relative_path": "design-templates/html-ppt-zhangzara-daisy-days",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
          "exists": true,
          "has_skill_md": true,
          "description": "Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Anything that should feel friendly, soft, and joyful: educational content, kids and family, wellness programs, community workshops, cr",
          "description_zh": "Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Anything that should feel friendly, soft, and joyful: educational content, kids and family, wellness programs, community workshops, cr",
          "description_en": "Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Anything that should feel friendly, soft, and joyful: educational content, kids and family, wellness programs, community workshops, cr",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-daisy-days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-daisy-days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-daisy-days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-daisy-days",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-editorial-tri-tone",
          "relative_path": "design-templates/html-ppt-zhangzara-editorial-tri-tone",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial Tri-Tone — Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif. Anything that should feel like a fashion-magazine spread: editorial pitches, fashion brand decks, lifestyl",
          "description_zh": "Editorial Tri-Tone — Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif. Anything that should feel like a fashion-magazine spread: editorial pitches, fashion brand decks, lifestyl",
          "description_en": "Editorial Tri-Tone — Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif. Anything that should feel like a fashion-magazine spread: editorial pitches, fashion brand decks, lifestyl",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-editorial-tri-tone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-editorial-tri-tone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-editorial-tri-tone",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-editorial-tri-tone",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-grove",
          "relative_path": "design-templates/html-ppt-zhangzara-grove",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
          "exists": true,
          "has_skill_md": true,
          "description": "Grove — Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent. Anything that should feel organic, considered, and grown-up: sustainability and wellness brands, outdoor / nature products, wineries and resta",
          "description_zh": "Grove — Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent. Anything that should feel organic, considered, and grown-up: sustainability and wellness brands, outdoor / nature products, wineries and resta",
          "description_en": "Grove — Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent. Anything that should feel organic, considered, and grown-up: sustainability and wellness brands, outdoor / nature products, wineries and resta",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-grove",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-grove",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-grove",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-grove",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-long-table",
          "relative_path": "design-templates/html-ppt-zhangzara-long-table",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
          "exists": true,
          "has_skill_md": true,
          "description": "Long Table — Warm cream and rust-red supper-club aesthetic with bold uppercase grotesk headlines, italic Fraunces, and pill-shaped outlined buttons. Anything that should feel like a warm, intimate, modern hospitality / community brand: supp",
          "description_zh": "Long Table — Warm cream and rust-red supper-club aesthetic with bold uppercase grotesk headlines, italic Fraunces, and pill-shaped outlined buttons. Anything that should feel like a warm, intimate, modern hospitality / community brand: supp",
          "description_en": "Long Table — Warm cream and rust-red supper-club aesthetic with bold uppercase grotesk headlines, italic Fraunces, and pill-shaped outlined buttons. Anything that should feel like a warm, intimate, modern hospitality / community brand: supp",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-long-table",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-long-table",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-long-table",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-long-table",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-mat",
          "relative_path": "design-templates/html-ppt-zhangzara-mat",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
          "exists": true,
          "has_skill_md": true,
          "description": "Mat — Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones. Anything that should feel mid-century, tactile, and intentional: design studio credentials, architecture / interior brands, ceramics / ",
          "description_zh": "Mat — Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones. Anything that should feel mid-century, tactile, and intentional: design studio credentials, architecture / interior brands, ceramics /",
          "description_en": "Mat — Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones. Anything that should feel mid-century, tactile, and intentional: design studio credentials, architecture / interior brands, ceramics /",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-mat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-mat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-mat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-mat",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-monochrome",
          "relative_path": "design-templates/html-ppt-zhangzara-monochrome",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
          "exists": true,
          "has_skill_md": true,
          "description": "Monochrome — Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all. Anything that should feel like a hand-typeset ledger: user research synthesis, white papers, longform reports, academic and policy briefs",
          "description_zh": "Monochrome — Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all. Anything that should feel like a hand-typeset ledger: user research synthesis, white papers, longform reports, academic and policy briefs",
          "description_en": "Monochrome — Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all. Anything that should feel like a hand-typeset ledger: user research synthesis, white papers, longform reports, academic and policy briefs",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-monochrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-monochrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-monochrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-monochrome",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-neo-grid-bold",
          "relative_path": "design-templates/html-ppt-zhangzara-neo-grid-bold",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
          "exists": true,
          "has_skill_md": true,
          "description": "Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Anything that should feel confident and editorial-graphic: design-led pitches, brand work, founder talks, conference keynotes.",
          "description_zh": "Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Anything that should feel confident and editorial-graphic: design-led pitches, brand work, founder talks, conference keynotes.",
          "description_en": "Neo-Grid Bold — Editorial neo-brutalism with a single neon yellow accent on off-white paper. Anything that should feel confident and editorial-graphic: design-led pitches, brand work, founder talks, conference keynotes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-neo-grid-bold",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-neo-grid-bold",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-neo-grid-bold",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-neo-grid-bold",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-peoples-platform",
          "relative_path": "design-templates/html-ppt-zhangzara-peoples-platform",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
          "exists": true,
          "has_skill_md": true,
          "description": "People's Platform (Block & Bold) — Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush. Anything that should feel honest, loud, and graphic: cultural commentary, manifestos, civic and community decks, design ta",
          "description_zh": "People's Platform (Block & Bold) — Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush. Anything that should feel honest, loud, and graphic: cultural commentary, manifestos, civic and community decks, design ta",
          "description_en": "People's Platform (Block & Bold) — Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush. Anything that should feel honest, loud, and graphic: cultural commentary, manifestos, civic and community decks, design ta",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-peoples-platform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-peoples-platform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-peoples-platform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-peoples-platform",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-pin-and-paper",
          "relative_path": "design-templates/html-ppt-zhangzara-pin-and-paper",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
          "exists": true,
          "has_skill_md": true,
          "description": "Pin & Paper — Yellow paper with safety-pin illustrations, ink-blue handwritten Caveat, paper-grain texture. Anything that should feel hand-crafted, warm, and literary: qualitative research findings, founder reflections, longform brand stori",
          "description_zh": "Pin & Paper — Yellow paper with safety-pin illustrations, ink-blue handwritten Caveat, paper-grain texture. Anything that should feel hand-crafted, warm, and literary: qualitative research findings, founder reflections, longform brand stori",
          "description_en": "Pin & Paper — Yellow paper with safety-pin illustrations, ink-blue handwritten Caveat, paper-grain texture. Anything that should feel hand-crafted, warm, and literary: qualitative research findings, founder reflections, longform brand stori",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-pin-and-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-pin-and-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-pin-and-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pin-and-paper",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-pink-script",
          "relative_path": "design-templates/html-ppt-zhangzara-pink-script",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
          "exists": true,
          "has_skill_md": true,
          "description": "Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Anything that should feel nocturnal, intentional, and a little luxe: fashion brand decks, creator persona",
          "description_zh": "Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Anything that should feel nocturnal, intentional, and a little luxe: fashion brand decks, creator persona",
          "description_en": "Pink Script — After Hours — Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury. Anything that should feel nocturnal, intentional, and a little luxe: fashion brand decks, creator persona",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-pink-script",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-pink-script",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-pink-script",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-pink-script",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-playful",
          "relative_path": "design-templates/html-ppt-zhangzara-playful",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
          "exists": true,
          "has_skill_md": true,
          "description": "Playful — Sun-warm peach background with Syne display: a friendly indie launch deck. Anything that should feel warm, indie, and approachable: creator portfolios, indie product launches, lifestyle brands, small-business pitches, newsletter /",
          "description_zh": "Playful — Sun-warm peach background with Syne display: a friendly indie launch deck. Anything that should feel warm, indie, and approachable: creator portfolios, indie product launches, lifestyle brands, small-business pitches, newsletter /",
          "description_en": "Playful — Sun-warm peach background with Syne display: a friendly indie launch deck. Anything that should feel warm, indie, and approachable: creator portfolios, indie product launches, lifestyle brands, small-business pitches, newsletter /",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-playful",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-playful",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-playful",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-playful",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-raw-grid",
          "relative_path": "design-templates/html-ppt-zhangzara-raw-grid",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
          "exists": true,
          "has_skill_md": true,
          "description": "Raw Grid — Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette. Anything that should feel direct and graphic-confident: founder pitches, accelerator demos, brand decks, indie launches, creator portfolios.",
          "description_zh": "Raw Grid — Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette. Anything that should feel direct and graphic-confident: founder pitches, accelerator demos, brand decks, indie launches, creator portfolios.",
          "description_en": "Raw Grid — Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette. Anything that should feel direct and graphic-confident: founder pitches, accelerator demos, brand decks, indie launches, creator portfolios.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-raw-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-raw-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-raw-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-raw-grid",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-retro-windows",
          "relative_path": "design-templates/html-ppt-zhangzara-retro-windows",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
          "exists": true,
          "has_skill_md": true,
          "description": "Retro Windows — Windows 95 chrome: gray title bars, MS Sans Serif, pixel typography, full nostalgia. Anything that should feel knowingly nostalgic: retro gaming, Y2K-aesthetic brands, creator portfolios with a 90s vibe, tech-history talks, ",
          "description_zh": "Retro Windows — Windows 95 chrome: gray title bars, MS Sans Serif, pixel typography, full nostalgia. Anything that should feel knowingly nostalgic: retro gaming, Y2K-aesthetic brands, creator portfolios with a 90s vibe, tech-history talks,",
          "description_en": "Retro Windows — Windows 95 chrome: gray title bars, MS Sans Serif, pixel typography, full nostalgia. Anything that should feel knowingly nostalgic: retro gaming, Y2K-aesthetic brands, creator portfolios with a 90s vibe, tech-history talks,",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-retro-windows",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-retro-windows",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-retro-windows",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-windows",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-retro-zine",
          "relative_path": "design-templates/html-ppt-zhangzara-retro-zine",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
          "exists": true,
          "has_skill_md": true,
          "description": "Retro Zine — Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form. Anything that should feel printed, lo-fi, and crafted: indie zines and publications, music / arts brands, creator portfolios, small-batch ",
          "description_zh": "Retro Zine — Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form. Anything that should feel printed, lo-fi, and crafted: indie zines and publications, music / arts brands, creator portfolios, small-batch",
          "description_en": "Retro Zine — Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form. Anything that should feel printed, lo-fi, and crafted: indie zines and publications, music / arts brands, creator portfolios, small-batch",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-retro-zine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-retro-zine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-retro-zine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-retro-zine",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-sakura-chroma",
          "relative_path": "design-templates/html-ppt-zhangzara-sakura-chroma",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
          "exists": true,
          "has_skill_md": true,
          "description": "Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Anything that should feel like a vintage Japanese cassette package or a TDK / Sony / Sakura ",
          "description_zh": "Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Anything that should feel like a vintage Japanese cassette package or a TDK / Sony / Sakura",
          "description_en": "Sakura Chroma — Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes. Anything that should feel like a vintage Japanese cassette package or a TDK / Sony / Sakura",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-sakura-chroma",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-sakura-chroma",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-sakura-chroma",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-sakura-chroma",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-scatterbrain",
          "relative_path": "design-templates/html-ppt-zhangzara-scatterbrain",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
          "exists": true,
          "has_skill_md": true,
          "description": "Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Anything that should feel like a designer's whiteboard: brainstorms, workshops, creative-agency credentials, design-thinking sess",
          "description_zh": "Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Anything that should feel like a designer's whiteboard: brainstorms, workshops, creative-agency credentials, design-thinking sess",
          "description_en": "Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Anything that should feel like a designer's whiteboard: brainstorms, workshops, creative-agency credentials, design-thinking sess",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-scatterbrain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-scatterbrain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-scatterbrain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-scatterbrain",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-signal",
          "relative_path": "design-templates/html-ppt-zhangzara-signal",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
          "exists": true,
          "has_skill_md": true,
          "description": "Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Anything that should feel weighty, considered, and credibly institutional: investor decks, board presentations, consulting deliverabl",
          "description_zh": "Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Anything that should feel weighty, considered, and credibly institutional: investor decks, board presentations, consulting deliverabl",
          "description_en": "Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Anything that should feel weighty, considered, and credibly institutional: investor decks, board presentations, consulting deliverabl",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-signal",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-soft-editorial",
          "relative_path": "design-templates/html-ppt-zhangzara-soft-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "Soft Editorial — Cormorant Garamond serif on warm paper with sage, blush, and lemon accents. Anything that should feel literary, elegant, and unhurried: editorial features, longform brand stories, gallery / museum decks, advisory deliverabl",
          "description_zh": "Soft Editorial — Cormorant Garamond serif on warm paper with sage, blush, and lemon accents. Anything that should feel literary, elegant, and unhurried: editorial features, longform brand stories, gallery / museum decks, advisory deliverabl",
          "description_en": "Soft Editorial — Cormorant Garamond serif on warm paper with sage, blush, and lemon accents. Anything that should feel literary, elegant, and unhurried: editorial features, longform brand stories, gallery / museum decks, advisory deliverabl",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-soft-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-soft-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-soft-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-soft-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-stencil-tablet",
          "relative_path": "design-templates/html-ppt-zhangzara-stencil-tablet",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
          "exists": true,
          "has_skill_md": true,
          "description": "Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Anything that should feel archival, tactile, and weighty-graphic: museum and cultural-institution decks, art / architecture bra",
          "description_zh": "Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Anything that should feel archival, tactile, and weighty-graphic: museum and cultural-institution decks, art / architecture bra",
          "description_en": "Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Anything that should feel archival, tactile, and weighty-graphic: museum and cultural-institution decks, art / architecture bra",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-stencil-tablet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-stencil-tablet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-stencil-tablet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-stencil-tablet",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-studio",
          "relative_path": "design-templates/html-ppt-zhangzara-studio",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
          "exists": true,
          "has_skill_md": true,
          "description": "Studio — Black canvas with electric-yellow type; high-voltage design studio aesthetic. Anything that should feel electric and design-led: studio credentials, creative agency pitches, brand showcases, art-direction reviews, fashion / sneaker",
          "description_zh": "Studio — Black canvas with electric-yellow type; high-voltage design studio aesthetic. Anything that should feel electric and design-led: studio credentials, creative agency pitches, brand showcases, art-direction reviews, fashion / sneaker",
          "description_en": "Studio — Black canvas with electric-yellow type; high-voltage design studio aesthetic. Anything that should feel electric and design-led: studio credentials, creative agency pitches, brand showcases, art-direction reviews, fashion / sneaker",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-studio",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-zhangzara-vellum",
          "relative_path": "design-templates/html-ppt-zhangzara-vellum",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
          "exists": true,
          "has_skill_md": true,
          "description": "Vellum — Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic. Anything that should feel scholarly, literary, and quietly intelligent: research synthesis, white papers, acade",
          "description_zh": "Vellum — Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic. Anything that should feel scholarly, literary, and quietly intelligent: research synthesis, white papers, acade",
          "description_en": "Vellum — Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic. Anything that should feel scholarly, literary, and quietly intelligent: research synthesis, white papers, acade",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-zhangzara-vellum",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-zhangzara-vellum",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-zhangzara-vellum",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/html-ppt-zhangzara-vellum",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hyperframes",
          "relative_path": "design-templates/hyperframes",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
          "exists": true,
          "has_skill_md": true,
          "description": "Create video compositions, animations, title cards, overlays, captions, voiceovers, audio-reactive visuals, and scene transitions in HyperFrames HTML. Use when asked to build any HTML-based video content, add captions or subtitles synced to",
          "description_zh": "Create video compositions, animations, title cards, overlays, captions, voiceovers, audio-reactive visuals, and scene transitions in HyperFrames HTML. Use when asked to build any HTML-based video content, add captions or subtitles synced to",
          "description_en": "Create video compositions, animations, title cards, overlays, captions, voiceovers, audio-reactive visuals, and scene transitions in HyperFrames HTML. Use when asked to build any HTML-based video content, add captions or subtitles synced to",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/hyperframes",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ib-pitch-book",
          "relative_path": "design-templates/ib-pitch-book",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
          "exists": true,
          "has_skill_md": true,
          "description": "Investment-banking pitch book for strategic alternatives — trading comps, precedent transactions, valuation football field, DCF sensitivity, strategic-options matrix, process recommendation. Built by adapting `assets/template.html` so IB-sp",
          "description_zh": "Investment-banking pitch book for strategic alternatives — trading comps, precedent transactions, valuation football field, DCF sensitivity, strategic-options matrix, process recommendation. Built by adapting `assets/template.html` so IB-sp",
          "description_en": "Investment-banking pitch book for strategic alternatives — trading comps, precedent transactions, valuation football field, DCF sensitivity, strategic-options matrix, process recommendation. Built by adapting `assets/template.html` so IB-sp",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ib-pitch-book",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ib-pitch-book",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ib-pitch-book",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/ib-pitch-book",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "image-poster",
          "relative_path": "design-templates/image-poster",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-image generation skill for posters, key art, and editorial illustrations. Defaults to gpt-image-2 but is provider-agnostic — the same workflow drives Flux, Imagen, or Midjourney via the active upstream tooling. Output is one or more ",
          "description_zh": "Single-image generation skill for posters, key art, and editorial illustrations. Defaults to gpt-image-2 but is provider-agnostic — the same workflow drives Flux, Imagen, or Midjourney via the active upstream tooling. Output is one or more",
          "description_en": "Single-image generation skill for posters, key art, and editorial illustrations. Defaults to gpt-image-2 but is provider-agnostic — the same workflow drives Flux, Imagen, or Midjourney via the active upstream tooling. Output is one or more",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/image-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/image-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/image-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/image-poster",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "invoice",
          "relative_path": "design-templates/invoice",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
          "exists": true,
          "has_skill_md": true,
          "description": "A printable invoice page — sender + recipient block, line items table, tax breakdown, totals, and payment instructions. Use when the brief mentions \"invoice\", \"bill\", \"billing statement\", or \"发票\".",
          "description_zh": "A printable invoice page — sender + recipient block, line items table, tax breakdown, totals, and payment instructions. Use when the brief mentions \"invoice\", \"bill\", \"billing statement\", or \"发票\".",
          "description_en": "A printable invoice page — sender + recipient block, line items table, tax breakdown, totals, and payment instructions. Use when the brief mentions \"invoice\", \"bill\", \"billing statement\", or \"发票\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/invoice",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/invoice",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/invoice",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/invoice",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "kami-deck",
          "relative_path": "design-templates/kami-deck",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
          "exists": true,
          "has_skill_md": true,
          "description": "Produce a print-grade slide deck in the kami (紙 / 纸) design system — warm parchment background (or ink-blue for cover / chapter slides), serif at one weight, ink-blue accent ≤ 5% per slide, no italic. Horizontal magazine swipe pagination (←",
          "description_zh": "Produce a print-grade slide deck in the kami (紙 / 纸) design system — warm parchment background (or ink-blue for cover / chapter slides), serif at one weight, ink-blue accent ≤ 5% per slide, no italic. Horizontal magazine swipe pagination (←",
          "description_en": "Produce a print-grade slide deck in the kami (紙 / 纸) design system — warm parchment background (or ink-blue for cover / chapter slides), serif at one weight, ink-blue accent ≤ 5% per slide, no italic. Horizontal magazine swipe pagination (←",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/kami-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/kami-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/kami-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-deck",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "kami-landing",
          "relative_path": "design-templates/kami-landing",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
          "exists": true,
          "has_skill_md": true,
          "description": "Produce a print-grade single-page kami (紙 / 纸) document — warm parchment canvas, ink-blue accent, serif at one weight, no italic, no cool grays. The output reads like a professional white paper or studio one-pager, not an app UI. Multilingu",
          "description_zh": "Produce a print-grade single-page kami (紙 / 纸) document — warm parchment canvas, ink-blue accent, serif at one weight, no italic, no cool grays. The output reads like a professional white paper or studio one-pager, not an app UI. Multilingu",
          "description_en": "Produce a print-grade single-page kami (紙 / 纸) document — warm parchment canvas, ink-blue accent, serif at one weight, no italic, no cool grays. The output reads like a professional white paper or studio one-pager, not an app UI. Multilingu",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/kami-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/kami-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/kami-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kami-landing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "kanban-board",
          "relative_path": "design-templates/kanban-board",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
          "exists": true,
          "has_skill_md": true,
          "description": "Kanban / task board with columns (To do / In progress / In review / Done), draggable-looking cards, assignee avatars, swimlanes, and a top filter bar. Use when the brief mentions \"kanban\", \"task board\", \"sprint board\", \"trello\", \"看板\".",
          "description_zh": "Kanban / task board with columns (To do / In progress / In review / Done), draggable-looking cards, assignee avatars, swimlanes, and a top filter bar. Use when the brief mentions \"kanban\", \"task board\", \"sprint board\", \"trello\", \"看板\".",
          "description_en": "Kanban / task board with columns (To do / In progress / In review / Done), draggable-looking cards, assignee avatars, swimlanes, and a top filter bar. Use when the brief mentions \"kanban\", \"task board\", \"sprint board\", \"trello\", \"看板\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/kanban-board",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/kanban-board",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/kanban-board",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/kanban-board",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "last30days",
          "relative_path": "design-templates/last30days",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
          "exists": true,
          "has_skill_md": true,
          "description": "Recent community and social trend research over the last 30 days. Use when the brief asks what people are saying now, recent sentiment, community reactions, social proof, launch reaction, trend scan, or last-30-days context.",
          "description_zh": "Recent community and social trend research over the last 30 days. Use when the brief asks what people are saying now, recent sentiment, community reactions, social proof, launch reaction, trend scan, or last-30-days context.",
          "description_en": "Recent community and social trend research over the last 30 days. Use when the brief asks what people are saying now, recent sentiment, community reactions, social proof, launch reaction, trend scan, or last-30-days context.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/last30days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/last30days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/last30days",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/last30days",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "live-artifact",
          "relative_path": "design-templates/live-artifact",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
          "exists": true,
          "has_skill_md": true,
          "description": "Create refreshable, auditable Open Design artifacts backed by connector or local data. Trigger when the user asks for live dashboards, refreshable reports, synced views, or reusable data-backed artifacts.",
          "description_zh": "Create refreshable, auditable Open Design artifacts backed by connector or local data. Trigger when the user asks for live dashboards, refreshable reports, synced views, or reusable data-backed artifacts.",
          "description_en": "Create refreshable, auditable Open Design artifacts backed by connector or local data. Trigger when the user asks for live dashboards, refreshable reports, synced views, or reusable data-backed artifacts.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/live-artifact",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/live-artifact",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/live-artifact",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-artifact",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "live-dashboard",
          "relative_path": "design-templates/live-dashboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
          "exists": true,
          "has_skill_md": true,
          "description": "Notion-style team dashboard rendered as a Live Artifact. A single-page, self-contained HTML dashboard with KPIs, a 7-day sparkline, a real-time activity feed and a linked-database task table — wired to Notion via the Composio connector cata",
          "description_zh": "Notion-style team dashboard rendered as a Live Artifact. A single-page, self-contained HTML dashboard with KPIs, a 7-day sparkline, a real-time activity feed and a linked-database task table — wired to Notion via the Composio connector cata",
          "description_en": "Notion-style team dashboard rendered as a Live Artifact. A single-page, self-contained HTML dashboard with KPIs, a 7-day sparkline, a real-time activity feed and a linked-database task table — wired to Notion via the Composio connector cata",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/live-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/live-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/live-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/live-dashboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "magazine-poster",
          "relative_path": "design-templates/magazine-poster",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
          "exists": true,
          "has_skill_md": true,
          "description": "An editorial-style poster — newsprint paper, dateline, oversized serif headline with a struck-through word and italic accent, a 2-column body block, and 6 numbered sections with annotated pull-quote captions. Reads like a Sunday-paper full-",
          "description_zh": "An editorial-style poster — newsprint paper, dateline, oversized serif headline with a struck-through word and italic accent, a 2-column body block, and 6 numbered sections with annotated pull-quote captions. Reads like a Sunday-paper full-",
          "description_en": "An editorial-style poster — newsprint paper, dateline, oversized serif headline with a struck-through word and italic accent, a 2-column body block, and 6 numbered sections with annotated pull-quote captions. Reads like a Sunday-paper full-",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/magazine-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/magazine-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/magazine-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/magazine-poster",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "meeting-notes",
          "relative_path": "design-templates/meeting-notes",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
          "exists": true,
          "has_skill_md": true,
          "description": "Meeting notes page — title bar with attendees, agenda checklist, decisions block, action items table with owners + dates, and a \"next meeting\" footer. Use when the brief mentions \"meeting notes\", \"minutes\", \"1:1 notes\", \"all-hands recap\", o",
          "description_zh": "Meeting notes page — title bar with attendees, agenda checklist, decisions block, action items table with owners + dates, and a \"next meeting\" footer. Use when the brief mentions \"meeting notes\", \"minutes\", \"1:1 notes\", \"all-hands recap\", o",
          "description_en": "Meeting notes page — title bar with attendees, agenda checklist, decisions block, action items table with owners + dates, and a \"next meeting\" footer. Use when the brief mentions \"meeting notes\", \"minutes\", \"1:1 notes\", \"all-hands recap\", o",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/meeting-notes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/meeting-notes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/meeting-notes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/meeting-notes",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "mobile-app",
          "relative_path": "design-templates/mobile-app",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
          "exists": true,
          "has_skill_md": true,
          "description": "A mobile-app screen rendered inside a pixel-accurate iPhone 15 Pro frame on the page. Built by copying the seed `assets/template.html` and pasting one screen archetype from `references/layouts.md`. Use when the brief asks for \"mobile app\", ",
          "description_zh": "A mobile-app screen rendered inside a pixel-accurate iPhone 15 Pro frame on the page. Built by copying the seed `assets/template.html` and pasting one screen archetype from `references/layouts.md`. Use when the brief asks for \"mobile app\",",
          "description_en": "A mobile-app screen rendered inside a pixel-accurate iPhone 15 Pro frame on the page. Built by copying the seed `assets/template.html` and pasting one screen archetype from `references/layouts.md`. Use when the brief asks for \"mobile app\",",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/mobile-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/mobile-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/mobile-app",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-app",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "mobile-onboarding",
          "relative_path": "design-templates/mobile-onboarding",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
          "exists": true,
          "has_skill_md": true,
          "description": "A multi-screen mobile onboarding flow rendered as three phone frames side by side — splash, value-prop, sign-in. Status bar, swipe dots, primary CTA. Use when the brief mentions \"mobile onboarding\", \"iOS onboarding\", \"phone signup\", or \"移动端",
          "description_zh": "A multi-screen mobile onboarding flow rendered as three phone frames side by side — splash, value-prop, sign-in. Status bar, swipe dots, primary CTA. Use when the brief mentions \"mobile onboarding\", \"iOS onboarding\", \"phone signup\", or \"移动端",
          "description_en": "A multi-screen mobile onboarding flow rendered as three phone frames side by side — splash, value-prop, sign-in. Status bar, swipe dots, primary CTA. Use when the brief mentions \"mobile onboarding\", \"iOS onboarding\", \"phone signup\", or \"移动端",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/mobile-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/mobile-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/mobile-onboarding",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/mobile-onboarding",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "motion-frames",
          "relative_path": "design-templates/motion-frames",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
          "exists": true,
          "has_skill_md": true,
          "description": "A single-frame motion-design composition with looping CSS animations — rotating type ring, animated globe, ticking timer, parallax labels. Renders as a hero video poster you can hand straight to HyperFrames or any keyframe-based exporter. U",
          "description_zh": "A single-frame motion-design composition with looping CSS animations — rotating type ring, animated globe, ticking timer, parallax labels. Renders as a hero video poster you can hand straight to HyperFrames or any keyframe-based exporter. U",
          "description_en": "A single-frame motion-design composition with looping CSS animations — rotating type ring, animated globe, ticking timer, parallax labels. Renders as a hero video poster you can hand straight to HyperFrames or any keyframe-based exporter. U",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/motion-frames",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/motion-frames",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/motion-frames",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/motion-frames",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "open-design-landing",
          "relative_path": "design-templates/open-design-landing",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
          "exists": true,
          "has_skill_md": true,
          "description": "Produce a world-class single-page editorial landing site in the Atelier Zero visual language (Monocle / Apartamento / Études editorial collage) — the same aesthetic Open Design uses for its own marketing surface. The agent fills a typed `in",
          "description_zh": "Produce a world-class single-page editorial landing site in the Atelier Zero visual language (Monocle / Apartamento / Études editorial collage) — the same aesthetic Open Design uses for its own marketing surface. The agent fills a typed `in",
          "description_en": "Produce a world-class single-page editorial landing site in the Atelier Zero visual language (Monocle / Apartamento / Études editorial collage) — the same aesthetic Open Design uses for its own marketing surface. The agent fills a typed `in",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/open-design-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/open-design-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/open-design-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "open-design-landing-deck",
          "relative_path": "design-templates/open-design-landing-deck",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
          "exists": true,
          "has_skill_md": true,
          "description": "Produce a single-file slide deck in the Atelier Zero visual language (warm-paper background, italic-serif emphasis spans, coral terminating dots, surreal collage plates) — Open Design's brand deck recipe. The deck uses **horizontal magazine",
          "description_zh": "Produce a single-file slide deck in the Atelier Zero visual language (warm-paper background, italic-serif emphasis spans, coral terminating dots, surreal collage plates) — Open Design's brand deck recipe. The deck uses **horizontal magazine",
          "description_en": "Produce a single-file slide deck in the Atelier Zero visual language (warm-paper background, italic-serif emphasis spans, coral terminating dots, surreal collage plates) — Open Design's brand deck recipe. The deck uses **horizontal magazine",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/open-design-landing-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/open-design-landing-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/open-design-landing-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/open-design-landing-deck",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "orbit-general",
          "relative_path": "design-templates/orbit-general",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
          "exists": true,
          "has_skill_md": true,
          "description": "Open Orbit briefing skill — selected by the Orbit pipeline when the user has two or more connectors connected. Pulls the past 24 hours of activity from every authenticated connector (GitHub, Linear, Notion, Slack, 飞书, Calendar, Gmail, Drive",
          "description_zh": "Open Orbit briefing skill — selected by the Orbit pipeline when the user has two or more connectors connected. Pulls the past 24 hours of activity from every authenticated connector (GitHub, Linear, Notion, Slack, 飞书, Calendar, Gmail, Drive",
          "description_en": "Open Orbit briefing skill — selected by the Orbit pipeline when the user has two or more connectors connected. Pulls the past 24 hours of activity from every authenticated connector (GitHub, Linear, Notion, Slack, 飞书, Calendar, Gmail, Drive",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/orbit-general",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/orbit-general",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/orbit-general",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-general",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "orbit-github",
          "relative_path": "design-templates/orbit-github",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
          "exists": true,
          "has_skill_md": true,
          "description": "Open Orbit briefing skill — selected by the Orbit pipeline when GitHub is the user's only connected connector, or when the user explicitly scopes their daily digest to GitHub. Pulls the past 24 hours of PRs, review requests, issues, CI runs",
          "description_zh": "Open Orbit briefing skill — selected by the Orbit pipeline when GitHub is the user's only connected connector, or when the user explicitly scopes their daily digest to GitHub. Pulls the past 24 hours of PRs, review requests, issues, CI runs",
          "description_en": "Open Orbit briefing skill — selected by the Orbit pipeline when GitHub is the user's only connected connector, or when the user explicitly scopes their daily digest to GitHub. Pulls the past 24 hours of PRs, review requests, issues, CI runs",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/orbit-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/orbit-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/orbit-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-github",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "orbit-gmail",
          "relative_path": "design-templates/orbit-gmail",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
          "exists": true,
          "has_skill_md": true,
          "description": "Open Orbit briefing skill — selected by the Orbit pipeline when Gmail is the user's only connected connector, or when the user explicitly scopes their daily digest to Gmail. Pulls the past 24 hours of inbox activity (replies awaited, mentio",
          "description_zh": "Open Orbit briefing skill — selected by the Orbit pipeline when Gmail is the user's only connected connector, or when the user explicitly scopes their daily digest to Gmail. Pulls the past 24 hours of inbox activity (replies awaited, mentio",
          "description_en": "Open Orbit briefing skill — selected by the Orbit pipeline when Gmail is the user's only connected connector, or when the user explicitly scopes their daily digest to Gmail. Pulls the past 24 hours of inbox activity (replies awaited, mentio",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/orbit-gmail",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/orbit-gmail",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/orbit-gmail",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-gmail",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "orbit-linear",
          "relative_path": "design-templates/orbit-linear",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
          "exists": true,
          "has_skill_md": true,
          "description": "Open Orbit briefing skill — selected by the Orbit pipeline when Linear is the user's only connected connector, or when the user explicitly scopes their daily digest to Linear. Pulls the past 24 hours of issue movement, status changes, assig",
          "description_zh": "Open Orbit briefing skill — selected by the Orbit pipeline when Linear is the user's only connected connector, or when the user explicitly scopes their daily digest to Linear. Pulls the past 24 hours of issue movement, status changes, assig",
          "description_en": "Open Orbit briefing skill — selected by the Orbit pipeline when Linear is the user's only connected connector, or when the user explicitly scopes their daily digest to Linear. Pulls the past 24 hours of issue movement, status changes, assig",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/orbit-linear",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/orbit-linear",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/orbit-linear",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-linear",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "orbit-notion",
          "relative_path": "design-templates/orbit-notion",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
          "exists": true,
          "has_skill_md": true,
          "description": "Open Orbit briefing skill — selected by the Orbit pipeline when Notion is the user's only connected connector, or when the user explicitly scopes their daily digest to Notion. Pulls the past 24 hours of document edits, comments, mentions, a",
          "description_zh": "Open Orbit briefing skill — selected by the Orbit pipeline when Notion is the user's only connected connector, or when the user explicitly scopes their daily digest to Notion. Pulls the past 24 hours of document edits, comments, mentions, a",
          "description_en": "Open Orbit briefing skill — selected by the Orbit pipeline when Notion is the user's only connected connector, or when the user explicitly scopes their daily digest to Notion. Pulls the past 24 hours of document edits, comments, mentions, a",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/orbit-notion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/orbit-notion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/orbit-notion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/orbit-notion",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pm-spec",
          "relative_path": "design-templates/pm-spec",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
          "exists": true,
          "has_skill_md": true,
          "description": "Product spec / PRD as a single page — problem, success metrics, scope, user stories, design notes, rollout plan, open questions. Use when the brief mentions \"PRD\", \"spec\", \"product spec\", \"feature brief\", or \"需求文档\".",
          "description_zh": "Product spec / PRD as a single page — problem, success metrics, scope, user stories, design notes, rollout plan, open questions. Use when the brief mentions \"PRD\", \"spec\", \"product spec\", \"feature brief\", or \"需求文档\".",
          "description_en": "Product spec / PRD as a single page — problem, success metrics, scope, user stories, design notes, rollout plan, open questions. Use when the brief mentions \"PRD\", \"spec\", \"product spec\", \"feature brief\", or \"需求文档\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pm-spec",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pm-spec",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pm-spec",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pm-spec",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pricing-page",
          "relative_path": "design-templates/pricing-page",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
          "exists": true,
          "has_skill_md": true,
          "description": "A standalone pricing page — header, plan tiers, feature comparison table, and an FAQ. Use when the brief asks for \"pricing\", \"plans\", \"subscription tiers\", or a \"compare plans\" page.",
          "description_zh": "A standalone pricing page — header, plan tiers, feature comparison table, and an FAQ. Use when the brief asks for \"pricing\", \"plans\", \"subscription tiers\", or a \"compare plans\" page.",
          "description_en": "A standalone pricing page — header, plan tiers, feature comparison table, and an FAQ. Use when the brief asks for \"pricing\", \"plans\", \"subscription tiers\", or a \"compare plans\" page.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pricing-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pricing-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pricing-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/pricing-page",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "replit-deck",
          "relative_path": "design-templates/replit-deck",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-file horizontal-swipe HTML deck in the style of Replit Slides's landing-page template gallery. Eight distinct themes (helix, holm, vance, bevel, world-dark, world-mint, atlas, bluehouse) — each a complete visual system (palette + typ",
          "description_zh": "Single-file horizontal-swipe HTML deck in the style of Replit Slides's landing-page template gallery. Eight distinct themes (helix, holm, vance, bevel, world-dark, world-mint, atlas, bluehouse) — each a complete visual system (palette + typ",
          "description_en": "Single-file horizontal-swipe HTML deck in the style of Replit Slides's landing-page template gallery. Eight distinct themes (helix, holm, vance, bevel, world-dark, world-mint, atlas, bluehouse) — each a complete visual system (palette + typ",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/replit-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/replit-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/replit-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/replit-deck",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "saas-landing",
          "relative_path": "design-templates/saas-landing",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "description_zh": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "description_en": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/saas-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/saas-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/saas-landing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/saas-landing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "simple-deck",
          "relative_path": "design-templates/simple-deck",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-file horizontal-swipe HTML deck. Built by copying the seed `assets/template.html` (which carries the proven 5-rule iframe nav script) and pasting slide layouts from `references/layouts.md`. Pitch decks, product overviews, study mater",
          "description_zh": "Single-file horizontal-swipe HTML deck. Built by copying the seed `assets/template.html` (which carries the proven 5-rule iframe nav script) and pasting slide layouts from `references/layouts.md`. Pitch decks, product overviews, study mater",
          "description_en": "Single-file horizontal-swipe HTML deck. Built by copying the seed `assets/template.html` (which carries the proven 5-rule iframe nav script) and pasting slide layouts from `references/layouts.md`. Pitch decks, product overviews, study mater",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/simple-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/simple-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/simple-deck",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/simple-deck",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-carousel",
          "relative_path": "design-templates/social-carousel",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
          "exists": true,
          "has_skill_md": true,
          "description": "A three-card social-media carousel laid out as 1080×1080 squares — three cinematic, on-brand panels with display headlines that connect across the series (\"onwards.\" → \"to the next one.\" → \"looking ahead.\"). Each card has a brand mark, a nu",
          "description_zh": "A three-card social-media carousel laid out as 1080×1080 squares — three cinematic, on-brand panels with display headlines that connect across the series (\"onwards.\" → \"to the next one.\" → \"looking ahead.\"). Each card has a brand mark, a nu",
          "description_en": "A three-card social-media carousel laid out as 1080×1080 squares — three cinematic, on-brand panels with display headlines that connect across the series (\"onwards.\" → \"to the next one.\" → \"looking ahead.\"). Each card has a brand mark, a nu",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-carousel",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-carousel",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-carousel",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-carousel",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-media-dashboard",
          "relative_path": "design-templates/social-media-dashboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
          "exists": true,
          "has_skill_md": true,
          "description": "Creator-facing social media analytics dashboard in a single HTML file. A platform switcher (X / LinkedIn / YouTube / Instagram), a row of KPI cards (followers, engagement rate, likes, reposts), a follower-growth chart, a \"top post this week",
          "description_zh": "Creator-facing social media analytics dashboard in a single HTML file. A platform switcher (X / LinkedIn / YouTube / Instagram), a row of KPI cards (followers, engagement rate, likes, reposts), a follower-growth chart, a \"top post this week",
          "description_en": "Creator-facing social media analytics dashboard in a single HTML file. A platform switcher (X / LinkedIn / YouTube / Instagram), a row of KPI cards (followers, engagement rate, likes, reposts), a follower-growth chart, a \"top post this week",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-media-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-media-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-media-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-dashboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-media-matrix-tracker-template",
          "relative_path": "design-templates/social-media-matrix-tracker-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
          "exists": true,
          "has_skill_md": true,
          "description": "社媒矩阵数据追踪面板模板（Social Media Matrix Tracker）。 Use when users ask for a cinematic, data-dense social media analytics dashboard with multi-platform metrics, interactive charts, hover insights, range compare, and dark/light theme switching in a s",
          "description_zh": "社媒矩阵数据追踪面板模板（Social Media Matrix Tracker）。 Use when users ask for a cinematic, data-dense social media analytics dashboard with multi-platform metrics, interactive charts, hover insights, range compare, and dark/light theme switching in a s",
          "description_en": "社媒矩阵数据追踪面板模板（Social Media Matrix Tracker）。 Use when users ask for a cinematic, data-dense social media analytics dashboard with multi-platform metrics, interactive charts, hover insights, range compare, and dark/light theme switching in a s",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-media-matrix-tracker-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-media-matrix-tracker-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-media-matrix-tracker-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/social-media-matrix-tracker-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "sprite-animation",
          "relative_path": "design-templates/sprite-animation",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
          "exists": true,
          "has_skill_md": true,
          "description": "A pixel / sprite-style animated explainer slide — full-bleed cream stage, bold display year, animated pixel-art mascot (e.g. Hanafuda card, mushroom, or 8-bit console), kinetic Japanese display type, ticking timeline ribbon. Reads like a si",
          "description_zh": "A pixel / sprite-style animated explainer slide — full-bleed cream stage, bold display year, animated pixel-art mascot (e.g. Hanafuda card, mushroom, or 8-bit console), kinetic Japanese display type, ticking timeline ribbon. Reads like a si",
          "description_en": "A pixel / sprite-style animated explainer slide — full-bleed cream stage, bold display year, animated pixel-art mascot (e.g. Hanafuda card, mushroom, or 8-bit console), kinetic Japanese display type, ticking timeline ribbon. Reads like a si",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/sprite-animation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/sprite-animation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/sprite-animation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/sprite-animation",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "team-okrs",
          "relative_path": "design-templates/team-okrs",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
          "exists": true,
          "has_skill_md": true,
          "description": "OKR tracker page — quarter banner, three objectives with their key results as progress bars, owner avatars, status pills, and a \"this quarter at a glance\" sidebar. Use when the brief mentions \"OKRs\", \"key results\", \"objectives\", or \"目标\".",
          "description_zh": "OKR tracker page — quarter banner, three objectives with their key results as progress bars, owner avatars, status pills, and a \"this quarter at a glance\" sidebar. Use when the brief mentions \"OKRs\", \"key results\", \"objectives\", or \"目标\".",
          "description_en": "OKR tracker page — quarter banner, three objectives with their key results as progress bars, owner avatars, status pills, and a \"this quarter at a glance\" sidebar. Use when the brief mentions \"OKRs\", \"key results\", \"objectives\", or \"目标\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/team-okrs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/team-okrs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/team-okrs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/team-okrs",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "trading-analysis-dashboard-template",
          "relative_path": "design-templates/trading-analysis-dashboard-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Professional trading analysis dashboard template (single-file HTML) with light/dark theme switch, dense market panels, chart interactions, demo/live playback, and command palette behavior. Use when users ask for a Wall-Street-style analytic",
          "description_zh": "Professional trading analysis dashboard template (single-file HTML) with light/dark theme switch, dense market panels, chart interactions, demo/live playback, and command palette behavior. Use when users ask for a Wall-Street-style analytic",
          "description_en": "Professional trading analysis dashboard template (single-file HTML) with light/dark theme switch, dense market panels, chart interactions, demo/live playback, and command palette behavior. Use when users ask for a Wall-Street-style analytic",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/trading-analysis-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/trading-analysis-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/trading-analysis-dashboard-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/trading-analysis-dashboard-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "tweaks",
          "relative_path": "design-templates/tweaks",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
          "exists": true,
          "has_skill_md": true,
          "description": "Wrap any HTML artifact with a side panel of live, parameterized controls — accent color, type scale, density, motion, theme — that rewrite CSS custom properties in real time and persist to localStorage. Lets the user explore variants of a d",
          "description_zh": "Wrap any HTML artifact with a side panel of live, parameterized controls — accent color, type scale, density, motion, theme — that rewrite CSS custom properties in real time and persist to localStorage. Lets the user explore variants of a d",
          "description_en": "Wrap any HTML artifact with a side panel of live, parameterized controls — accent color, type scale, density, motion, theme — that rewrite CSS custom properties in real time and persist to localStorage. Lets the user explore variants of a d",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/tweaks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/tweaks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/tweaks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/tweaks",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "video-shortform",
          "relative_path": "design-templates/video-shortform",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
          "exists": true,
          "has_skill_md": true,
          "description": "Short-form video generation skill — 3-10 second clips for product reveals, motion teasers, ambient loops. Defaults to Seedance 2 but works the same with Kling 3 / 4, Veo 3 or Sora 2. Output is one MP4 saved to the project folder. When the w",
          "description_zh": "Short-form video generation skill — 3-10 second clips for product reveals, motion teasers, ambient loops. Defaults to Seedance 2 but works the same with Kling 3 / 4, Veo 3 or Sora 2. Output is one MP4 saved to the project folder. When the w",
          "description_en": "Short-form video generation skill — 3-10 second clips for product reveals, motion teasers, ambient loops. Defaults to Seedance 2 but works the same with Kling 3 / 4, Veo 3 or Sora 2. Output is one MP4 saved to the project folder. When the w",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/video-shortform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/video-shortform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/video-shortform",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/video-shortform",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "waitlist-page",
          "relative_path": "design-templates/waitlist-page",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
          "exists": true,
          "has_skill_md": true,
          "description": "Minimal pre-launch landing with email capture, brand logo, and optional decorative layer. Reads DESIGN.md for colors, typography, and layout rules. Best for: product launches, beta signups, early access programs, indie projects.",
          "description_zh": "Minimal pre-launch landing with email capture, brand logo, and optional decorative layer. Reads DESIGN.md for colors, typography, and layout rules. Best for: product launches, beta signups, early access programs, indie projects.",
          "description_en": "Minimal pre-launch landing with email capture, brand logo, and optional decorative layer. Reads DESIGN.md for colors, typography, and layout rules. Best for: product launches, beta signups, early access programs, indie projects.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/waitlist-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/waitlist-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/waitlist-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/waitlist-page",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-prototype",
          "relative_path": "design-templates/web-prototype",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
          "exists": true,
          "has_skill_md": true,
          "description": "General-purpose desktop web prototype. Single self-contained HTML file built by copying the seed `assets/template.html` and pasting section layouts from `references/layouts.md`. Default for any landing / marketing / docs / SaaS page when no",
          "description_zh": "General-purpose desktop web prototype. Single self-contained HTML file built by copying the seed `assets/template.html` and pasting section layouts from `references/layouts.md`. Default for any landing / marketing / docs / SaaS page when no",
          "description_en": "General-purpose desktop web prototype. Single self-contained HTML file built by copying the seed `assets/template.html` and pasting section layouts from `references/layouts.md`. Default for any landing / marketing / docs / SaaS page when no",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-prototype-taste-brutalist",
          "relative_path": "design-templates/web-prototype-taste-brutalist",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
          "exists": true,
          "has_skill_md": true,
          "description": "Swiss industrial-print web prototype. Newsprint canvas, monolithic black grotesque, viewport-bleeding numerals, hairline grid dividers, hazard-red accent, ASCII syntax decoration. Distilled from Leonxlnx/taste-skill `brutalist-skill` (Swiss",
          "description_zh": "Swiss industrial-print web prototype. Newsprint canvas, monolithic black grotesque, viewport-bleeding numerals, hairline grid dividers, hazard-red accent, ASCII syntax decoration. Distilled from Leonxlnx/taste-skill `brutalist-skill` (Swiss",
          "description_en": "Swiss industrial-print web prototype. Newsprint canvas, monolithic black grotesque, viewport-bleeding numerals, hairline grid dividers, hazard-red accent, ASCII syntax decoration. Distilled from Leonxlnx/taste-skill `brutalist-skill` (Swiss",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-prototype-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-prototype-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-prototype-taste-brutalist",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-brutalist",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-prototype-taste-editorial",
          "relative_path": "design-templates/web-prototype-taste-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial-minimalist web prototype. Warm monochrome canvas, serif display + grotesque body, 1px hairline borders, muted pastel chips, generous macro-whitespace, ambient micro-motion. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "description_zh": "Editorial-minimalist web prototype. Warm monochrome canvas, serif display + grotesque body, 1px hairline borders, muted pastel chips, generous macro-whitespace, ambient micro-motion. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "description_en": "Editorial-minimalist web prototype. Warm monochrome canvas, serif display + grotesque body, 1px hairline borders, muted pastel chips, generous macro-whitespace, ambient micro-motion. Distilled from Leonxlnx/taste-skill `minimalist-skill`.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-prototype-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-prototype-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-prototype-taste-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-prototype-taste-soft",
          "relative_path": "design-templates/web-prototype-taste-soft",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
          "exists": true,
          "has_skill_md": true,
          "description": "Apple-tier soft web prototype. Silver/cream canvas, double-bezel cards, button-in-button CTAs, generous squircle radii, spring motion, ambient mesh. Distilled from Leonxlnx/taste-skill `soft-skill` + sections 4–8 of `taste-skill`.",
          "description_zh": "Apple-tier soft web prototype. Silver/cream canvas, double-bezel cards, button-in-button CTAs, generous squircle radii, spring motion, ambient mesh. Distilled from Leonxlnx/taste-skill `soft-skill` + sections 4–8 of `taste-skill`.",
          "description_en": "Apple-tier soft web prototype. Silver/cream canvas, double-bezel cards, button-in-button CTAs, generous squircle radii, spring motion, ambient mesh. Distilled from Leonxlnx/taste-skill `soft-skill` + sections 4–8 of `taste-skill`.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-prototype-taste-soft",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-prototype-taste-soft",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-prototype-taste-soft",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/web-prototype-taste-soft",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "weekly-update",
          "relative_path": "design-templates/weekly-update",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-file horizontal-swipe slide deck for a weekly team update — shipped, in flight, blocked, metrics, asks. 6–8 slides. Use when the brief mentions \"weekly update\", \"team update slides\", \"weekly status\", \"周报演示\".",
          "description_zh": "Single-file horizontal-swipe slide deck for a weekly team update — shipped, in flight, blocked, metrics, asks. 6–8 slides. Use when the brief mentions \"weekly update\", \"team update slides\", \"weekly status\", \"周报演示\".",
          "description_en": "Single-file horizontal-swipe slide deck for a weekly team update — shipped, in flight, blocked, metrics, asks. 6–8 slides. Use when the brief mentions \"weekly update\", \"team update slides\", \"weekly status\", \"周报演示\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/weekly-update",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/weekly-update",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/weekly-update",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/weekly-update",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "wireframe-annotated",
          "relative_path": "design-templates/wireframe-annotated",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
          "exists": true,
          "has_skill_md": true,
          "description": "An annotated / redline lo-fi wireframe — a desktop landing/marketing page drawn as flat greyboxes inside a browser chrome frame, overlaid with numbered annotation pins (①②③④⑤) in a single accent color, paired with a right-hand SPEC PANEL th",
          "description_zh": "An annotated / redline lo-fi wireframe — a desktop landing/marketing page drawn as flat greyboxes inside a browser chrome frame, overlaid with numbered annotation pins (①②③④⑤) in a single accent color, paired with a right-hand SPEC PANEL th",
          "description_en": "An annotated / redline lo-fi wireframe — a desktop landing/marketing page drawn as flat greyboxes inside a browser chrome frame, overlaid with numbered annotation pins (①②③④⑤) in a single accent color, paired with a right-hand SPEC PANEL th",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/wireframe-annotated",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/wireframe-annotated",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/wireframe-annotated",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-annotated",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "wireframe-greybox",
          "relative_path": "design-templates/wireframe-greybox",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
          "exists": true,
          "has_skill_md": true,
          "description": "A crisp greybox / blueprint lo-fi wireframe — neutral grey blocks on a pale page, image placeholders drawn as a rectangle with a diagonal X, text shown as solid \"lorem bars\" of varying widths, sharp 1.5–2px borders, and a single monospace r",
          "description_zh": "A crisp greybox / blueprint lo-fi wireframe — neutral grey blocks on a pale page, image placeholders drawn as a rectangle with a diagonal X, text shown as solid \"lorem bars\" of varying widths, sharp 1.5–2px borders, and a single monospace r",
          "description_en": "A crisp greybox / blueprint lo-fi wireframe — neutral grey blocks on a pale page, image placeholders drawn as a rectangle with a diagonal X, text shown as solid \"lorem bars\" of varying widths, sharp 1.5–2px borders, and a single monospace r",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/wireframe-greybox",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/wireframe-greybox",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/wireframe-greybox",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-greybox",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "wireframe-mobile-flow",
          "relative_path": "design-templates/wireframe-mobile-flow",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
          "exists": true,
          "has_skill_md": true,
          "description": "A lo-fi multi-screen MOBILE flow wireframe — three or four phone frames laid out in a row on a board, showing a connected user flow (Onboarding → Home feed → Item detail → Confirm). Grey-box content inside each device, dashed connector arro",
          "description_zh": "A lo-fi multi-screen MOBILE flow wireframe — three or four phone frames laid out in a row on a board, showing a connected user flow (Onboarding → Home feed → Item detail → Confirm). Grey-box content inside each device, dashed connector arro",
          "description_en": "A lo-fi multi-screen MOBILE flow wireframe — three or four phone frames laid out in a row on a board, showing a connected user flow (Onboarding → Home feed → Item detail → Confirm). Grey-box content inside each device, dashed connector arro",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/wireframe-mobile-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/wireframe-mobile-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/wireframe-mobile-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-mobile-flow",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "wireframe-sketch",
          "relative_path": "design-templates/wireframe-sketch",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
          "exists": true,
          "has_skill_md": true,
          "description": "A hand-drawn wireframe exploration — graph-paper background, marker / pencil tone, multiple tab labels for variants, sticky-note annotations, scribbled chart placeholders, hatched fills. Reads like a designer's whiteboard before any pixels ",
          "description_zh": "A hand-drawn wireframe exploration — graph-paper background, marker / pencil tone, multiple tab labels for variants, sticky-note annotations, scribbled chart placeholders, hatched fills. Reads like a designer's whiteboard before any pixels",
          "description_en": "A hand-drawn wireframe exploration — graph-paper background, marker / pencil tone, multiple tab labels for variants, sticky-note annotations, scribbled chart placeholders, hatched fills. Reads like a designer's whiteboard before any pixels",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/wireframe-sketch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/wireframe-sketch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/wireframe-sketch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/wireframe-sketch",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "x-research",
          "relative_path": "design-templates/x-research",
          "path": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
          "exists": true,
          "has_skill_md": true,
          "description": "X/Twitter public sentiment research for recent market, company, product, or community discourse. Use when the brief asks what people are saying on X, Twitter sentiment, CT sentiment, public opinion, expert posts, or social reaction around a",
          "description_zh": "X/Twitter public sentiment research for recent market, company, product, or community discourse. Use when the brief asks what people are saying on X, Twitter sentiment, CT sentiment, public opinion, expert posts, or social reaction around a",
          "description_en": "X/Twitter public sentiment research for recent market, company, product, or community discourse. Use when the brief asks what people are saying on X, Twitter sentiment, CT sentiment, public opinion, expert posts, or social reaction around a",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/x-research",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/x-research",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/x-research",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/design-templates/x-research",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "saas-landing-skill",
          "relative_path": "docs/examples/saas-landing-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "description_zh": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "description_en": "Single-page SaaS landing with hero, features, social proof, pricing, and CTA. Respects the active DESIGN.md color/typography/layout tokens. Trigger keywords: \"saas landing\", \"marketing page\", \"product landing\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/saas-landing-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/saas-landing-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/saas-landing-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/docs/examples/saas-landing-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "build-test",
          "relative_path": "plugins/_official/atoms/build-test",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
          "exists": true,
          "has_skill_md": true,
          "description": "Run the project's build / typecheck / lint / test commands and emit the build.passing + tests.passing signals devloop convergence reads.",
          "description_zh": "Run the project's build / typecheck / lint / test commands and emit the build.passing + tests.passing signals devloop convergence reads.",
          "description_en": "Run the project's build / typecheck / lint / test commands and emit the build.passing + tests.passing signals devloop convergence reads.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/build-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/build-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/build-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/build-test",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "code-import",
          "relative_path": "plugins/_official/atoms/code-import",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
          "exists": true,
          "has_skill_md": true,
          "description": "Read an existing repository's structure into the project cwd as a normalised snapshot the agent can analyse without re-walking the tree on every turn.",
          "description_zh": "Read an existing repository's structure into the project cwd as a normalised snapshot the agent can analyse without re-walking the tree on every turn.",
          "description_en": "Read an existing repository's structure into the project cwd as a normalised snapshot the agent can analyse without re-walking the tree on every turn.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/code-import",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/code-import",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/code-import",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/code-import",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "critique-theater",
          "relative_path": "plugins/_official/atoms/critique-theater",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
          "exists": true,
          "has_skill_md": true,
          "description": "5-dimension critique panel; emits the critique.score signal that drives devloop convergence.",
          "description_zh": "5-dimension critique panel; emits the critique.score signal that drives devloop convergence.",
          "description_en": "5-dimension critique panel; emits the critique.score signal that drives devloop convergence.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/critique-theater",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/critique-theater",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/critique-theater",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/critique-theater",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "design-extract",
          "relative_path": "plugins/_official/atoms/design-extract",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
          "exists": true,
          "has_skill_md": true,
          "description": "Extract design tokens (color / typography / spacing) from imported source code, screenshots, or Figma exports into the canonical token bag token-map consumes.",
          "description_zh": "Extract design tokens (color / typography / spacing) from imported source code, screenshots, or Figma exports into the canonical token bag token-map consumes.",
          "description_en": "Extract design tokens (color / typography / spacing) from imported source code, screenshots, or Figma exports into the canonical token bag token-map consumes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/design-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/design-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/design-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/design-extract",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "diff-review",
          "relative_path": "plugins/_official/atoms/diff-review",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
          "exists": true,
          "has_skill_md": true,
          "description": "Render the patch-edit run's accumulated changes as a reviewable diff, surface it through a GenUI choice surface, and persist the user's accept / reject decision into the artifact manifest.",
          "description_zh": "Render the patch-edit run's accumulated changes as a reviewable diff, surface it through a GenUI choice surface, and persist the user's accept / reject decision into the artifact manifest.",
          "description_en": "Render the patch-edit run's accumulated changes as a reviewable diff, surface it through a GenUI choice surface, and persist the user's accept / reject decision into the artifact manifest.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/diff-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/diff-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/diff-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/diff-review",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "direction-picker",
          "relative_path": "plugins/_official/atoms/direction-picker",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
          "exists": true,
          "has_skill_md": true,
          "description": "3-5 direction picker that lets the user choose before final generation.",
          "description_zh": "3-5 direction picker that lets the user choose before final generation.",
          "description_en": "3-5 direction picker that lets the user choose before final generation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/direction-picker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/direction-picker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/direction-picker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/direction-picker",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "discovery-question-form",
          "relative_path": "plugins/_official/atoms/discovery-question-form",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
          "exists": true,
          "has_skill_md": true,
          "description": "Turn-1 discovery question form for ambiguous briefs.",
          "description_zh": "Turn-1 discovery question form for ambiguous briefs.",
          "description_en": "Turn-1 discovery question form for ambiguous briefs.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/discovery-question-form",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/discovery-question-form",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/discovery-question-form",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/discovery-question-form",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-extract",
          "relative_path": "plugins/_official/atoms/figma-extract",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
          "exists": true,
          "has_skill_md": true,
          "description": "Pull a Figma file's node tree, design tokens, and embedded assets into the project cwd as a structured snapshot.",
          "description_zh": "Pull a Figma file's node tree, design tokens, and embedded assets into the project cwd as a structured snapshot.",
          "description_en": "Pull a Figma file's node tree, design tokens, and embedded assets into the project cwd as a structured snapshot.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/figma-extract",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "handoff",
          "relative_path": "plugins/_official/atoms/handoff",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
          "exists": true,
          "has_skill_md": true,
          "description": "Push the run's accepted artifact to a downstream collaboration surface (cli, other code agents, cloud, desktop) and stamp the artifact manifest with the export target.",
          "description_zh": "Push the run's accepted artifact to a downstream collaboration surface (cli, other code agents, cloud, desktop) and stamp the artifact manifest with the export target.",
          "description_en": "Push the run's accepted artifact to a downstream collaboration surface (cli, other code agents, cloud, desktop) and stamp the artifact manifest with the export target.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/handoff",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "patch-edit",
          "relative_path": "plugins/_official/atoms/patch-edit",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
          "exists": true,
          "has_skill_md": true,
          "description": "Apply one rewrite-plan step at a time as small reviewable file edits, never rewriting whole files when a localised change suffices.",
          "description_zh": "Apply one rewrite-plan step at a time as small reviewable file edits, never rewriting whole files when a localised change suffices.",
          "description_en": "Apply one rewrite-plan step at a time as small reviewable file edits, never rewriting whole files when a localised change suffices.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/patch-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/patch-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/patch-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/patch-edit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "rewrite-plan",
          "relative_path": "plugins/_official/atoms/rewrite-plan",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
          "exists": true,
          "has_skill_md": true,
          "description": "Author a long-running multi-file rewrite plan that subsequent patch-edit + diff-review + build-test stages will execute, with explicit ownership boundaries and patch-safety guarantees.",
          "description_zh": "Author a long-running multi-file rewrite plan that subsequent patch-edit + diff-review + build-test stages will execute, with explicit ownership boundaries and patch-safety guarantees.",
          "description_en": "Author a long-running multi-file rewrite plan that subsequent patch-edit + diff-review + build-test stages will execute, with explicit ownership boundaries and patch-safety guarantees.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/rewrite-plan",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/rewrite-plan",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/rewrite-plan",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/rewrite-plan",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "todo-write",
          "relative_path": "plugins/_official/atoms/todo-write",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
          "exists": true,
          "has_skill_md": true,
          "description": "TodoWrite-driven plan that the agent commits to before generation.",
          "description_zh": "TodoWrite-driven plan that the agent commits to before generation.",
          "description_en": "TodoWrite-driven plan that the agent commits to before generation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/todo-write",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/todo-write",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/todo-write",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/todo-write",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "token-map",
          "relative_path": "plugins/_official/atoms/token-map",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
          "exists": true,
          "has_skill_md": true,
          "description": "Map an extracted Figma / source-code token bag onto the active OD design system, producing a deterministic mapping the generate stage can consume.",
          "description_zh": "Map an extracted Figma / source-code token bag onto the active OD design system, producing a deterministic mapping the generate stage can consume.",
          "description_en": "Map an extracted Figma / source-code token bag onto the active OD design system, producing a deterministic mapping the generate stage can consume.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/token-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/token-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/token-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/atoms/token-map",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "article-magazine",
          "relative_path": "plugins/_official/examples/article-magazine",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
          "exists": true,
          "has_skill_md": true,
          "description": "Huashu / huashu-md-html-inspired magazine article layout for turning Markdown or notes into a polished long-form HTML essay.",
          "description_zh": "Huashu / huashu-md-html 风格杂志文章版式, 将 Markdown 或笔记转成精排长文 HTML。",
          "description_en": "Huashu / huashu-md-html-inspired magazine article layout for turning Markdown or notes into a polished long-form HTML essay.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/article-magazine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/article-magazine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/article-magazine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/article-magazine",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "card-twitter",
          "relative_path": "plugins/_official/examples/card-twitter",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
          "exists": true,
          "has_skill_md": true,
          "description": "Twitter quote or data card designed to pair with a post.",
          "description_zh": "推特金句 / 数据卡, 适合配推文",
          "description_en": "Twitter quote or data card designed to pair with a post.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/card-twitter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/card-twitter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/card-twitter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-twitter",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "card-xiaohongshu",
          "relative_path": "plugins/_official/examples/card-xiaohongshu",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
          "exists": true,
          "has_skill_md": true,
          "description": "Xiaohongshu-style knowledge cards, arranged as a swipeable multi-card carousel.",
          "description_zh": "小红书风格知识卡片, 多张联排可滑动浏览",
          "description_en": "Xiaohongshu-style knowledge cards, arranged as a swipeable multi-card carousel.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/card-xiaohongshu",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/card-xiaohongshu",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/card-xiaohongshu",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/card-xiaohongshu",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "codex-interactive-capability-map",
          "relative_path": "plugins/_official/examples/codex-interactive-capability-map",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
          "exists": true,
          "has_skill_md": true,
          "description": "Turn a long-form article, thread, memo, or product narrative into a compact clickable capability map with a workflow loop, use-case matrix, and responsive detail panel.",
          "description_zh": "Turn a long-form article, thread, memo, or product narrative into a compact clickable capability map with a workflow loop, use-case matrix, and responsive detail panel.",
          "description_en": "Turn a long-form article, thread, memo, or product narrative into a compact clickable capability map with a workflow loop, use-case matrix, and responsive detail panel.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/codex-interactive-capability-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/codex-interactive-capability-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/codex-interactive-capability-map",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/codex-interactive-capability-map",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "data-report",
          "relative_path": "plugins/_official/examples/data-report",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
          "exists": true,
          "has_skill_md": true,
          "description": "Turns CSV, Excel, or JSON data into a polished visual report page.",
          "description_zh": "把 CSV/Excel/JSON 数据转成漂亮的可视化报告页",
          "description_en": "Turns CSV, Excel, or JSON data into a polished visual report page.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/data-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/data-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/data-report",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/data-report",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "deck-guizang-editorial",
          "relative_path": "plugins/_official/examples/deck-guizang-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial magazine meets e-ink: 10 layouts and 5 palettes (Ink, Indigo Porcelain, Forest Ink, Kraft Paper, Dune).",
          "description_zh": "电子杂志 × 电子墨水; 10 个版面 + 5 套调色板 (墨水/靛蓝瓷/森林墨/牛皮纸/沙丘)",
          "description_en": "Editorial magazine meets e-ink: 10 layouts and 5 palettes (Ink, Indigo Porcelain, Forest Ink, Kraft Paper, Dune).",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/deck-guizang-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/deck-guizang-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/deck-guizang-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-guizang-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "deck-open-slide-canvas",
          "relative_path": "plugins/_official/examples/deck-open-slide-canvas",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
          "exists": true,
          "has_skill_md": true,
          "description": "Locked 1920x1080 canvas deck with React component-level free composition, not bound to a fixed template.",
          "description_zh": "锁死 1920×1080 画布, React 组件级自由组合, 不绑模板",
          "description_en": "Locked 1920x1080 canvas deck with React component-level free composition, not bound to a fixed template.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/deck-open-slide-canvas",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/deck-open-slide-canvas",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/deck-open-slide-canvas",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-open-slide-canvas",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "deck-swiss-international",
          "relative_path": "plugins/_official/examples/deck-swiss-international",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
          "exists": true,
          "has_skill_md": true,
          "description": "16-column grid, one saturated accent, and 22 locked layouts (Klein Blue, Lemon, Mint, Safety Orange).",
          "description_zh": "16 列网格 + 单一饱和 accent + 22 个锁死版面 (Klein Blue / Lemon / Mint / Safety Orange)",
          "description_en": "16-column grid, one saturated accent, and 22 locked layouts (Klein Blue, Lemon, Mint, Safety Orange).",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/deck-swiss-international",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/deck-swiss-international",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/deck-swiss-international",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/deck-swiss-international",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "design-brief",
          "relative_path": "plugins/_official/examples/design-brief",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
          "exists": true,
          "has_skill_md": true,
          "description": "Parse a structured design brief written in I-Lang protocol format into a concrete design spec. Eliminates ambiguity from vague requests like \"make it professional\" by requiring explicit dimensions: palette, typography, layout, mood, density",
          "description_zh": "Parse a structured design brief written in I-Lang protocol format into a concrete design spec. Eliminates ambiguity from vague requests like \"make it professional\" by requiring explicit dimensions: palette, typography, layout, mood, density",
          "description_en": "Parse a structured design brief written in I-Lang protocol format into a concrete design spec. Eliminates ambiguity from vague requests like \"make it professional\" by requiring explicit dimensions: palette, typography, layout, mood, density",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/design-brief",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/design-brief",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/design-brief",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/design-brief",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "doc-kami-parchment",
          "relative_path": "plugins/_official/examples/doc-kami-parchment",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
          "exists": true,
          "has_skill_md": true,
          "description": "Warm parchment canvas (#f5f4ed), monochrome ink-blue accent (#1B365D), one serif family, and editorial-grade typography.",
          "description_zh": "暖羊皮纸底 (#f5f4ed) + 墨蓝单色 accent (#1B365D) + 单一衬线字体, 编辑级排印",
          "description_en": "Warm parchment canvas (#f5f4ed), monochrome ink-blue accent (#1B365D), one serif family, and editorial-grade typography.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/doc-kami-parchment",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/doc-kami-parchment",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/doc-kami-parchment",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/doc-kami-parchment",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-data-chart-nyt",
          "relative_path": "plugins/_official/examples/frame-data-chart-nyt",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
          "exists": true,
          "has_skill_md": true,
          "description": "NYT-newsroom typography, staggered reveal animation, and editorial-grade charts (line, bar, or range band).",
          "description_zh": "NYT-newsroom 排版 + 错峰揭示动画 + 编辑级图表 (折线/柱/范围带)",
          "description_en": "NYT-newsroom typography, staggered reveal animation, and editorial-grade charts (line, bar, or range band).",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-data-chart-nyt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-data-chart-nyt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-data-chart-nyt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-data-chart-nyt",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-flowchart-sticky",
          "relative_path": "plugins/_official/examples/frame-flowchart-sticky",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
          "exists": true,
          "has_skill_md": true,
          "description": "SVG curve connectors, sticky-note nodes, and cursor interaction with a whiteboard-brainstorm feel.",
          "description_zh": "SVG 曲线连接 + 便利贴节点 + 光标交互, 像白板 brainstorm",
          "description_en": "SVG curve connectors, sticky-note nodes, and cursor interaction with a whiteboard-brainstorm feel.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-flowchart-sticky",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-flowchart-sticky",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-flowchart-sticky",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-flowchart-sticky",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-glitch-title",
          "relative_path": "plugins/_official/examples/frame-glitch-title",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
          "exists": true,
          "has_skill_md": true,
          "description": "Digital glitch, chromatic offset, and data-corruption title frame for video transitions or cyberpunk heroes.",
          "description_zh": "数字故障 / 像散偏移 / 数据腐败标题, 适合视频转场 / cyberpunk hero",
          "description_en": "Digital glitch, chromatic offset, and data-corruption title frame for video transitions or cyberpunk heroes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-glitch-title",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-glitch-title",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-glitch-title",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-glitch-title",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-light-leak-cinema",
          "relative_path": "plugins/_official/examples/frame-light-leak-cinema",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
          "exists": true,
          "has_skill_md": true,
          "description": "Film light leaks, grain, 16:9 letterbox, and large serif type for cinematic openings or chapter cards.",
          "description_zh": "胶片漏光 + 颗粒噪点 + 16:9 letterbox + 衬线大字, 电影感开场 / 章节卡",
          "description_en": "Film light leaks, grain, 16:9 letterbox, and large serif type for cinematic openings or chapter cards.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-light-leak-cinema",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-light-leak-cinema",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-light-leak-cinema",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-light-leak-cinema",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-liquid-bg-hero",
          "relative_path": "plugins/_official/examples/frame-liquid-bg-hero",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
          "exists": true,
          "has_skill_md": true,
          "description": "WebGL-style fluid displacement background with a quote overlay, suited to video intros, landing heroes, or posters.",
          "description_zh": "WebGL 风流体置换背景 + 顶部叠加金句, 适合视频片头 / landing hero / 海报",
          "description_en": "WebGL-style fluid displacement background with a quote overlay, suited to video intros, landing heroes, or posters.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-liquid-bg-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-liquid-bg-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-liquid-bg-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-liquid-bg-hero",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-logo-outro",
          "relative_path": "plugins/_official/examples/frame-logo-outro",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
          "exists": true,
          "has_skill_md": true,
          "description": "Segmented logo assembly, glow bloom, and tagline reveal for video outros or brand closing frames.",
          "description_zh": "Logo 分块组装入场 + glow bloom + tagline 揭示, 适合视频片尾 / 品牌闭幕",
          "description_en": "Segmented logo assembly, glow bloom, and tagline reveal for video outros or brand closing frames.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-logo-outro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-logo-outro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-logo-outro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-logo-outro",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-macos-notification",
          "relative_path": "plugins/_official/examples/frame-macos-notification",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
          "exists": true,
          "has_skill_md": true,
          "description": "Realistic macOS notification banner with app icon, title, and body, suited to video overlays or product teasers.",
          "description_zh": "拟真 macOS 通知 banner + app icon + 标题正文, 适合 video overlay / 产品发布预告",
          "description_en": "Realistic macOS notification banner with app icon, title, and body, suited to video overlays or product teasers.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-macos-notification",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-macos-notification",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-macos-notification",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frame-macos-notification",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frontend-slides",
          "relative_path": "plugins/_official/examples/frontend-slides",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
          "exists": true,
          "has_skill_md": true,
          "description": "Create animation-rich, zero-dependency HTML presentations on a fixed 1920×1080 stage that scales to any viewport. Distinctive typography, committed palettes, choreographed reveals — no generic AI-slop aesthetics.",
          "description_zh": "Create animation-rich, zero-dependency HTML presentations on a fixed 1920×1080 stage that scales to any viewport. Distinctive typography, committed palettes, choreographed reveals — no generic AI-slop aesthetics.",
          "description_en": "Create animation-rich, zero-dependency HTML presentations on a fixed 1920×1080 stage that scales to any viewport. Distinctive typography, committed palettes, choreographed reveals — no generic AI-slop aesthetics.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frontend-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frontend-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frontend-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/frontend-slides",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fs-creative-voltage",
          "relative_path": "plugins/_official/examples/fs-creative-voltage",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
          "exists": true,
          "has_skill_md": true,
          "description": "Creative Voltage decks: retro-modern electric blue × deep navy split panels, neon yellow badges, halftone dot textures, and script flourishes on a fixed 1920×1080 stage that scales to any viewport. Syne + Space Mono + Yellowtail. Single-fil",
          "description_zh": "Creative Voltage decks: retro-modern electric blue × deep navy split panels, neon yellow badges, halftone dot textures, and script flourishes on a fixed 1920×1080 stage that scales to any viewport. Syne + Space Mono + Yellowtail. Single-fil",
          "description_en": "Creative Voltage decks: retro-modern electric blue × deep navy split panels, neon yellow badges, halftone dot textures, and script flourishes on a fixed 1920×1080 stage that scales to any viewport. Syne + Space Mono + Yellowtail. Single-fil",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fs-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fs-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fs-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-creative-voltage",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fs-editorial-forest",
          "relative_path": "plugins/_official/examples/fs-editorial-forest",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial Forest — a quiet, literary HTML deck theme: deep forest green #2e4a2a, dusty pink #e89cb1, and warm cream #efe7d4 paper set in Source Serif 4 with JetBrains Mono kickers. Mixed light/dark scheme, 8-slide quarterly-review rhythm, f",
          "description_zh": "Editorial Forest — a quiet, literary HTML deck theme: deep forest green #2e4a2a, dusty pink #e89cb1, and warm cream #efe7d4 paper set in Source Serif 4 with JetBrains Mono kickers. Mixed light/dark scheme, 8-slide quarterly-review rhythm, f",
          "description_en": "Editorial Forest — a quiet, literary HTML deck theme: deep forest green #2e4a2a, dusty pink #e89cb1, and warm cream #efe7d4 paper set in Source Serif 4 with JetBrains Mono kickers. Mixed light/dark scheme, 8-slide quarterly-review rhythm, f",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fs-editorial-forest",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fs-editorial-forest",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fs-editorial-forest",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-editorial-forest",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fs-electric-studio",
          "relative_path": "plugins/_official/examples/fs-electric-studio",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
          "exists": true,
          "has_skill_md": true,
          "description": "Electric Studio (钴蓝工作室) HTML decks: bold clean vertical split panels — white over cobalt #4361ee — with corner brand marks, a dark accent bar on the panel seam, quote typography as the hero element, all-Manrope 800/400, and confident restra",
          "description_zh": "Electric Studio (钴蓝工作室) HTML decks: bold clean vertical split panels — white over cobalt #4361ee — with corner brand marks, a dark accent bar on the panel seam, quote typography as the hero element, all-Manrope 800/400, and confident restra",
          "description_en": "Electric Studio (钴蓝工作室) HTML decks: bold clean vertical split panels — white over cobalt #4361ee — with corner brand marks, a dark accent bar on the panel seam, quote typography as the hero element, all-Manrope 800/400, and confident restra",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fs-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fs-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fs-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-electric-studio",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fs-emerald-editorial",
          "relative_path": "plugins/_official/examples/fs-emerald-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "Emerald Editorial - magazine-cover business decks: saturated emerald #3CD896 canvas, deep navy #0F1A5C ink, warm paper #F1E9D6 tiles, double-rule masthead ornaments, Bodoni Moda 900 display serif, fixed 1920x1080 stage with uniform viewport",
          "description_zh": "Emerald Editorial - magazine-cover business decks: saturated emerald #3CD896 canvas, deep navy #0F1A5C ink, warm paper #F1E9D6 tiles, double-rule masthead ornaments, Bodoni Moda 900 display serif, fixed 1920x1080 stage with uniform viewport",
          "description_en": "Emerald Editorial - magazine-cover business decks: saturated emerald #3CD896 canvas, deep navy #0F1A5C ink, warm paper #F1E9D6 tiles, double-rule masthead ornaments, Bodoni Moda 900 display serif, fixed 1920x1080 stage with uniform viewport",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fs-emerald-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fs-emerald-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fs-emerald-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-emerald-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fs-notebook-tabs",
          "relative_path": "plugins/_official/examples/fs-notebook-tabs",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
          "exists": true,
          "has_skill_md": true,
          "description": "Create editorial 'physical notebook' HTML decks: a cream paper card floating on a dark ground, mint/lavender/pink/sky index tabs on the right edge, binder holes on the left, Bodoni Moda display + DM Sans body. Fixed 1920×1080 stage scaled t",
          "description_zh": "Create editorial 'physical notebook' HTML decks: a cream paper card floating on a dark ground, mint/lavender/pink/sky index tabs on the right edge, binder holes on the left, Bodoni Moda display + DM Sans body. Fixed 1920×1080 stage scaled t",
          "description_en": "Create editorial 'physical notebook' HTML decks: a cream paper card floating on a dark ground, mint/lavender/pink/sky index tabs on the right edge, binder holes on the left, Bodoni Moda display + DM Sans body. Fixed 1920×1080 stage scaled t",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fs-notebook-tabs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fs-notebook-tabs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fs-notebook-tabs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/fs-notebook-tabs",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hatch-pet",
          "relative_path": "plugins/_official/examples/hatch-pet",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
          "exists": true,
          "has_skill_md": true,
          "description": "Create, repair, validate, preview, and package Codex-compatible animated pet spritesheets from character art, screenshots, generated images, or visual references. Use when a user wants to hatch a Codex pet, create a custom animated pet, or ",
          "description_zh": "Create, repair, validate, preview, and package Codex-compatible animated pet spritesheets from character art, screenshots, generated images, or visual references. Use when a user wants to hatch a Codex pet, create a custom animated pet, or",
          "description_en": "Create, repair, validate, preview, and package Codex-compatible animated pet spritesheets from character art, screenshots, generated images, or visual references. Use when a user wants to hatch a Codex pet, create a custom animated pet, or",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hatch-pet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hatch-pet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hatch-pet",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hatch-pet",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-academic-paper",
          "relative_path": "plugins/_official/examples/hps-academic-paper",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
          "exists": true,
          "has_skill_md": true,
          "description": "Academic Paper deck theme: LaTeX-paper feel on paper-white #fdfcf8 — all-serif type (Latin Modern Roman → Playfair Display fallback), ink-black body, link-blue #1a3a7a underlined anchors, italic kickers, zero radius, near-zero shadow, hairl",
          "description_zh": "Academic Paper deck theme: LaTeX-paper feel on paper-white #fdfcf8 — all-serif type (Latin Modern Roman → Playfair Display fallback), ink-black body, link-blue #1a3a7a underlined anchors, italic kickers, zero radius, near-zero shadow, hairl",
          "description_en": "Academic Paper deck theme: LaTeX-paper feel on paper-white #fdfcf8 — all-serif type (Latin Modern Roman → Playfair Display fallback), ink-black body, link-blue #1a3a7a underlined anchors, italic kickers, zero radius, near-zero shadow, hairl",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-academic-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-academic-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-academic-paper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-academic-paper",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-bauhaus",
          "relative_path": "plugins/_official/examples/hps-bauhaus",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
          "exists": true,
          "has_skill_md": true,
          "description": "Bauhaus Primary — design-history geometric deck style from the lewislulu/html-ppt-skill bauhaus theme. Aged canvas #f4efe3, red/yellow/blue primaries, hard three-band gradient, zero radius, 2px ink strokes, hard offset shadows, Archivo Blac",
          "description_zh": "Bauhaus Primary — design-history geometric deck style from the lewislulu/html-ppt-skill bauhaus theme. Aged canvas #f4efe3, red/yellow/blue primaries, hard three-band gradient, zero radius, 2px ink strokes, hard offset shadows, Archivo Blac",
          "description_en": "Bauhaus Primary — design-history geometric deck style from the lewislulu/html-ppt-skill bauhaus theme. Aged canvas #f4efe3, red/yellow/blue primaries, hard three-band gradient, zero radius, 2px ink strokes, hard offset shadows, Archivo Blac",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-bauhaus",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-bauhaus",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-bauhaus",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-bauhaus",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-memphis-pop",
          "relative_path": "plugins/_official/examples/hps-memphis-pop",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
          "exists": true,
          "has_skill_md": true,
          "description": "Memphis Pop deck — 80s Memphis design as a locked single-theme HTML deck. Warm cream canvas tiled edge-to-edge with a pink/teal/yellow confetti-dot pattern, 2.5px black-outlined cards with hard offset shadows, hot-pink #ff3d8b lead accent, ",
          "description_zh": "Memphis Pop deck — 80s Memphis design as a locked single-theme HTML deck. Warm cream canvas tiled edge-to-edge with a pink/teal/yellow confetti-dot pattern, 2.5px black-outlined cards with hard offset shadows, hot-pink #ff3d8b lead accent,",
          "description_en": "Memphis Pop deck — 80s Memphis design as a locked single-theme HTML deck. Warm cream canvas tiled edge-to-edge with a pink/teal/yellow confetti-dot pattern, 2.5px black-outlined cards with hard offset shadows, hot-pink #ff3d8b lead accent,",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-memphis-pop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-memphis-pop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-memphis-pop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-memphis-pop",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-retro-tv",
          "relative_path": "plugins/_official/examples/hps-retro-tv",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
          "exists": true,
          "has_skill_md": true,
          "description": "Retro TV deck — 80s/90s picture-tube nostalgia as a locked single-theme HTML deck. Warm cream canvas with CRT scanlines overlaid on every slide, curved-glass tube vignette, amber #e67e14 / brick-red #c73a1f accents, Playfair Display headlin",
          "description_zh": "Retro TV deck — 80s/90s picture-tube nostalgia as a locked single-theme HTML deck. Warm cream canvas with CRT scanlines overlaid on every slide, curved-glass tube vignette, amber #e67e14 / brick-red #c73a1f accents, Playfair Display headlin",
          "description_en": "Retro TV deck — 80s/90s picture-tube nostalgia as a locked single-theme HTML deck. Warm cream canvas with CRT scanlines overlaid on every slide, curved-glass tube vignette, amber #e67e14 / brick-red #c73a1f accents, Playfair Display headlin",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-retro-tv",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-retro-tv",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-retro-tv",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-retro-tv",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-true-blueprint",
          "relative_path": "plugins/_official/examples/hps-true-blueprint",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
          "exists": true,
          "has_skill_md": true,
          "description": "True Blueprint deck theme — blueprint-blue #0b3a6f field under a 40px white drafting grid, dashed-border translucent cards, white/ice-blue ink with amber annotations, all JetBrains Mono, 2px corners, zero shadows. Drawing-sheet chrome (titl",
          "description_zh": "True Blueprint deck theme — blueprint-blue #0b3a6f field under a 40px white drafting grid, dashed-border translucent cards, white/ice-blue ink with amber annotations, all JetBrains Mono, 2px corners, zero shadows. Drawing-sheet chrome (titl",
          "description_en": "True Blueprint deck theme — blueprint-blue #0b3a6f field under a 40px white drafting grid, dashed-border translucent cards, white/ice-blue ink with amber annotations, all JetBrains Mono, 2px corners, zero shadows. Drawing-sheet chrome (titl",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-true-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-true-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-true-blueprint",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-true-blueprint",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hps-y2k-chrome",
          "relative_path": "plugins/_official/examples/hps-y2k-chrome",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
          "exists": true,
          "has_skill_md": true,
          "description": "Y2K Chrome deck theme — full-bleed 5-stop silver-metal gradient canvas, chrome-clipped headlines, 72% white frosted-glass cards with inset top highlights, mega-radius corners and candy purple/aqua/pink accents in Space Grotesk, locked from ",
          "description_zh": "Y2K Chrome deck theme — full-bleed 5-stop silver-metal gradient canvas, chrome-clipped headlines, 72% white frosted-glass cards with inset top highlights, mega-radius corners and candy purple/aqua/pink accents in Space Grotesk, locked from",
          "description_en": "Y2K Chrome deck theme — full-bleed 5-stop silver-metal gradient canvas, chrome-clipped headlines, 72% white frosted-glass cards with inset top highlights, mega-radius corners and candy purple/aqua/pink accents in Space Grotesk, locked from",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hps-y2k-chrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hps-y2k-chrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hps-y2k-chrome",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/hps-y2k-chrome",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-annual-letter",
          "relative_path": "plugins/_official/examples/huashu-annual-letter",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
          "exists": true,
          "has_skill_md": true,
          "description": "Annual Letter · 年度信笺 — Stripe-annual-letter style single-file HTML decks from the editorial-longform line of 花叔 (alchaincyf)'s huashu-design skill. Cream #FBFAF8 paper, one Stripe-purple #635BFF accent, serif prose at a 65ch publication mea",
          "description_zh": "Annual Letter · 年度信笺 — Stripe-annual-letter style single-file HTML decks from the editorial-longform line of 花叔 (alchaincyf)'s huashu-design skill. Cream #FBFAF8 paper, one Stripe-purple #635BFF accent, serif prose at a 65ch publication mea",
          "description_en": "Annual Letter · 年度信笺 — Stripe-annual-letter style single-file HTML decks from the editorial-longform line of 花叔 (alchaincyf)'s huashu-design skill. Cream #FBFAF8 paper, one Stripe-purple #635BFF accent, serif prose at a 65ch publication mea",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-annual-letter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-annual-letter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-annual-letter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-annual-letter",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-bento-insight",
          "relative_path": "plugins/_official/examples/huashu-bento-insight",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
          "exists": true,
          "has_skill_md": true,
          "description": "Bento Insight Grid (便当格洞见) — Apple Keynote / QBR-school bento decks generated from the「Bento便当格模块网格 / Bento Grid」spec (neutral school #1, 95% fidelity) in 花叔 (alchaincyf)'s huashu-design design-styles.md. Light-grey #F5F5F7 / cream pages, u",
          "description_zh": "Bento Insight Grid (便当格洞见) — Apple Keynote / QBR-school bento decks generated from the「Bento便当格模块网格 / Bento Grid」spec (neutral school #1, 95% fidelity) in 花叔 (alchaincyf)'s huashu-design design-styles.md. Light-grey #F5F5F7 / cream pages, u",
          "description_en": "Bento Insight Grid (便当格洞见) — Apple Keynote / QBR-school bento decks generated from the「Bento便当格模块网格 / Bento Grid」spec (neutral school #1, 95% fidelity) in 花叔 (alchaincyf)'s huashu-design design-styles.md. Light-grey #F5F5F7 / cream pages, u",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-bento-insight",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-bento-insight",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-bento-insight",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-bento-insight",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-golden-circle",
          "relative_path": "plugins/_official/examples/huashu-golden-circle",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
          "exists": true,
          "has_skill_md": true,
          "description": "Golden Circle Diagram (黄金圆环图解) — Sinek/TED-school diagrammatic minimalism, generated from the 中性派「单图母图概念图解 / Diagrammatic Minimalism」spec of 花叔 (alchaincyf)'s huashu-design. Warm-white paper, ink, and exactly one gold accent (#E8860C); a si",
          "description_zh": "Golden Circle Diagram (黄金圆环图解) — Sinek/TED-school diagrammatic minimalism, generated from the 中性派「单图母图概念图解 / Diagrammatic Minimalism」spec of 花叔 (alchaincyf)'s huashu-design. Warm-white paper, ink, and exactly one gold accent (#E8860C); a si",
          "description_en": "Golden Circle Diagram (黄金圆环图解) — Sinek/TED-school diagrammatic minimalism, generated from the 中性派「单图母图概念图解 / Diagrammatic Minimalism」spec of 花叔 (alchaincyf)'s huashu-design. Warm-white paper, ink, and exactly one gold accent (#E8860C); a si",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-golden-circle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-golden-circle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-golden-circle",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-golden-circle",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-keynote-black",
          "relative_path": "plugins/_official/examples/huashu-keynote-black",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
          "exists": true,
          "has_skill_md": true,
          "description": "Keynote Black (黑场大数字) — Jobs-2007 / Lei-Jun-launch-event black-stage keynote decks, generated from the「黑底巨型数字剧场 / Black Big-Number Stage」spec in 花叔 (alchaincyf)'s huashu-design design-styles library. Pure black #000000 stage, pure white typ",
          "description_zh": "Keynote Black (黑场大数字) — Jobs-2007 / Lei-Jun-launch-event black-stage keynote decks, generated from the「黑底巨型数字剧场 / Black Big-Number Stage」spec in 花叔 (alchaincyf)'s huashu-design design-styles library. Pure black #000000 stage, pure white typ",
          "description_en": "Keynote Black (黑场大数字) — Jobs-2007 / Lei-Jun-launch-event black-stage keynote decks, generated from the「黑底巨型数字剧场 / Black Big-Number Stage」spec in 花叔 (alchaincyf)'s huashu-design design-styles library. Pure black #000000 stage, pure white typ",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-keynote-black",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-keynote-black",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-keynote-black",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-keynote-black",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-luxe-whitespace",
          "relative_path": "plugins/_official/examples/huashu-luxe-whitespace",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
          "exists": true,
          "has_skill_md": true,
          "description": "Luxe Whitespace (奢华留白) — quiet-luxury presentation decks adapted from the ppt-build showcase of 花叔 (alchaincyf)'s huashu-design. 70%+ whitespace on a warm off-white #FAFAF8 canvas, Inter 200–600 ultra-thin hierarchy, 120px weight-200 floati",
          "description_zh": "Luxe Whitespace (奢华留白) — quiet-luxury presentation decks adapted from the ppt-build showcase of 花叔 (alchaincyf)'s huashu-design. 70%+ whitespace on a warm off-white #FAFAF8 canvas, Inter 200–600 ultra-thin hierarchy, 120px weight-200 floati",
          "description_en": "Luxe Whitespace (奢华留白) — quiet-luxury presentation decks adapted from the ppt-build showcase of 花叔 (alchaincyf)'s huashu-design. 70%+ whitespace on a warm off-white #FAFAF8 canvas, Inter 200–600 ultra-thin hierarchy, 120px weight-200 floati",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-luxe-whitespace",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-luxe-whitespace",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-luxe-whitespace",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-luxe-whitespace",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-pentagram-grid",
          "relative_path": "plugins/_official/examples/huashu-pentagram-grid",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
          "exists": true,
          "has_skill_md": true,
          "description": "Pentagram Info-Architecture (信息建筑·红) — rational Swiss-grid data decks adapted from the ppt-pentagram showcase of 花叔 (alchaincyf)'s huashu-design. Black-and-white restraint on a 1920×1080 canvas, Helvetica Neue hierarchy, one red (#E63946), ",
          "description_zh": "Pentagram Info-Architecture (信息建筑·红) — rational Swiss-grid data decks adapted from the ppt-pentagram showcase of 花叔 (alchaincyf)'s huashu-design. Black-and-white restraint on a 1920×1080 canvas, Helvetica Neue hierarchy, one red (#E63946),",
          "description_en": "Pentagram Info-Architecture (信息建筑·红) — rational Swiss-grid data decks adapted from the ppt-pentagram showcase of 花叔 (alchaincyf)'s huashu-design. Black-and-white restraint on a 1920×1080 canvas, Helvetica Neue hierarchy, one red (#E63946),",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-pentagram-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-pentagram-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-pentagram-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-pentagram-grid",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-slides",
          "relative_path": "plugins/_official/examples/huashu-slides",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
          "exists": true,
          "has_skill_md": true,
          "description": "Huashu Slides — publication-grade single-file HTML decks, distilled from the slides workflow of 花叔 (alchaincyf)'s huashu-design skill. Editorial grammar (masthead / kicker / giant serif H1 / footer), a fixed 1920×1080 canvas with auto-fit s",
          "description_zh": "Huashu Slides — publication-grade single-file HTML decks, distilled from the slides workflow of 花叔 (alchaincyf)'s huashu-design skill. Editorial grammar (masthead / kicker / giant serif H1 / footer), a fixed 1920×1080 canvas with auto-fit s",
          "description_en": "Huashu Slides — publication-grade single-file HTML decks, distilled from the slides workflow of 花叔 (alchaincyf)'s huashu-design skill. Editorial grammar (masthead / kicker / giant serif H1 / footer), a fixed 1920×1080 canvas with auto-fit s",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-slides",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-sparkline-arc",
          "relative_path": "plugins/_official/examples/huashu-sparkline-arc",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
          "exists": true,
          "has_skill_md": true,
          "description": "Narrative Sparkline (叙事波形) — Duarte-style narrative decks generated from the Sparkline叙事波形 spec (中性派, 还原91%) in 花叔 (alchaincyf)'s huashu-design references/design-styles.md. One oscillating SVG bézier waveform spans the full 1920×1080 canvas",
          "description_zh": "Narrative Sparkline (叙事波形) — Duarte-style narrative decks generated from the Sparkline叙事波形 spec (中性派, 还原91%) in 花叔 (alchaincyf)'s huashu-design references/design-styles.md. One oscillating SVG bézier waveform spans the full 1920×1080 canvas",
          "description_en": "Narrative Sparkline (叙事波形) — Duarte-style narrative decks generated from the Sparkline叙事波形 spec (中性派, 还原91%) in 花叔 (alchaincyf)'s huashu-design references/design-styles.md. One oscillating SVG bézier waveform spans the full 1920×1080 canvas",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-sparkline-arc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-sparkline-arc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-sparkline-arc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-sparkline-arc",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "huashu-takram-soft-tech",
          "relative_path": "plugins/_official/examples/huashu-takram-soft-tech",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
          "exists": true,
          "has_skill_md": true,
          "description": "Takram Soft Tech (东方柔光科技) — soft, Eastern-philosophy tech decks adapted from the ppt-takram showcase of 花叔 (alchaincyf)'s huashu-design. Warm rice-paper canvas (#F5F0EB), sage green + warm gray + one gold, Noto Serif SC display headings mix",
          "description_zh": "Takram Soft Tech (东方柔光科技) — soft, Eastern-philosophy tech decks adapted from the ppt-takram showcase of 花叔 (alchaincyf)'s huashu-design. Warm rice-paper canvas (#F5F0EB), sage green + warm gray + one gold, Noto Serif SC display headings mix",
          "description_en": "Takram Soft Tech (东方柔光科技) — soft, Eastern-philosophy tech decks adapted from the ppt-takram showcase of 花叔 (alchaincyf)'s huashu-design. Warm rice-paper canvas (#F5F0EB), sage green + warm gray + one gold, Noto Serif SC display headings mix",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/huashu-takram-soft-tech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/huashu-takram-soft-tech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/huashu-takram-soft-tech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/huashu-takram-soft-tech",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "mockup-device-3d",
          "relative_path": "plugins/_official/examples/mockup-device-3d",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
          "exists": true,
          "has_skill_md": true,
          "description": "Static iPhone and MacBook 3D-style showcase with real HTML embedded on screens, glass-lens refraction, and 360-degree turntable composition.",
          "description_zh": "iPhone + MacBook 仿 GLTF 静态展架, 屏幕内嵌真实 HTML 内容, 玻璃镜头折射, 360° 转盘构图",
          "description_en": "Static iPhone and MacBook 3D-style showcase with real HTML embedded on screens, glass-lens refraction, and 360-degree turntable composition.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/mockup-device-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/mockup-device-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/mockup-device-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/mockup-device-3d",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-plugin-contribute-open-design",
          "relative_path": "plugins/_official/examples/od-plugin-contribute-open-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
          "exists": true,
          "has_skill_md": true,
          "description": "Open a pull request adding a local Open Design plugin to the Open Design community catalog using gh CLI.",
          "description_zh": "Open a pull request adding a local Open Design plugin to the Open Design community catalog using gh CLI.",
          "description_en": "Open a pull request adding a local Open Design plugin to the Open Design community catalog using gh CLI.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-plugin-contribute-open-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-plugin-contribute-open-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-plugin-contribute-open-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-contribute-open-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-plugin-publish-github",
          "relative_path": "plugins/_official/examples/od-plugin-publish-github",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
          "exists": true,
          "has_skill_md": true,
          "description": "Publish a local Open Design plugin to a new public GitHub repository using gh CLI.",
          "description_zh": "Publish a local Open Design plugin to a new public GitHub repository using gh CLI.",
          "description_en": "Publish a local Open Design plugin to a new public GitHub repository using gh CLI.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-plugin-publish-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-plugin-publish-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-plugin-publish-github",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/od-plugin-publish-github",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "poster-hero",
          "relative_path": "plugins/_official/examples/poster-hero",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
          "exists": true,
          "has_skill_md": true,
          "description": "Vertical poster or Moments-style share image with strong visual impact.",
          "description_zh": "竖版海报 / 朋友圈分享图, 强视觉冲击",
          "description_en": "Vertical poster or Moments-style share image with strong visual impact.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/poster-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/poster-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/poster-hero",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/poster-hero",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ppt-keynote",
          "relative_path": "plugins/_official/examples/ppt-keynote",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
          "exists": true,
          "has_skill_md": true,
          "description": "Apple Keynote-quality slides, one card per screen, with keyboard left/right navigation.",
          "description_zh": "苹果 Keynote 级别幻灯片, 一屏一卡, 键盘左右切换",
          "description_en": "Apple Keynote-quality slides, one card per screen, with keyboard left/right navigation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ppt-keynote",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ppt-keynote",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ppt-keynote",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ppt-keynote",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pptx-html-fidelity-audit",
          "relative_path": "plugins/_official/examples/pptx-html-fidelity-audit",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
          "exists": true,
          "has_skill_md": true,
          "description": "Audit a python-pptx export against its source HTML deck, identify layout/content drift (footer overflow, cropped content, missing italic/em, lost styling, off-rhythm spacing), and re-export with strict footer-rail + cursor-flow layout disci",
          "description_zh": "Audit a python-pptx export against its source HTML deck, identify layout/content drift (footer overflow, cropped content, missing italic/em, lost styling, off-rhythm spacing), and re-export with strict footer-rail + cursor-flow layout disci",
          "description_en": "Audit a python-pptx export against its source HTML deck, identify layout/content drift (footer overflow, cropped content, missing italic/em, lost styling, off-rhythm spacing), and re-export with strict footer-rail + cursor-flow layout disci",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pptx-html-fidelity-audit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pptx-html-fidelity-audit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pptx-html-fidelity-audit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/pptx-html-fidelity-audit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "resume-modern",
          "relative_path": "plugins/_official/examples/resume-modern",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
          "exists": true,
          "has_skill_md": true,
          "description": "Modern minimal resume, single A4 page, ready for print or PDF export.",
          "description_zh": "现代极简简历, A4 单页, 适合打印或导出 PDF",
          "description_en": "Modern minimal resume, single A4 page, ready for print or PDF export.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/resume-modern",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/resume-modern",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/resume-modern",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/resume-modern",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-reddit-card",
          "relative_path": "plugins/_official/examples/social-reddit-card",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
          "exists": true,
          "has_skill_md": true,
          "description": "Realistic Reddit post card with vote rail and comment count, suited to video overlays or story sharing.",
          "description_zh": "拟真 Reddit 帖子卡 + 上下投票 + 评论数, 适合视频叠加 / 故事分享",
          "description_en": "Realistic Reddit post card with vote rail and comment count, suited to video overlays or story sharing.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-reddit-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-reddit-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-reddit-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-reddit-card",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-spotify-card",
          "relative_path": "plugins/_official/examples/social-spotify-card",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
          "exists": true,
          "has_skill_md": true,
          "description": "Spotify Now Playing-style card with album art, progress bar, and playback controls, suited to video overlays or personal homepages.",
          "description_zh": "Spotify Now Playing 风格卡: 专辑封面 + 进度条 + 播放控制, 适配视频叠加 / 个人主页",
          "description_en": "Spotify Now Playing-style card with album art, progress bar, and playback controls, suited to video overlays or personal homepages.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-spotify-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-spotify-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-spotify-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-spotify-card",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "social-x-post-card",
          "relative_path": "plugins/_official/examples/social-x-post-card",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
          "exists": true,
          "has_skill_md": true,
          "description": "Realistic X post card with engagement metrics (likes, reposts, views), suited to video overlays or shareable image cards.",
          "description_zh": "拟真 X 推文卡片 + 互动数据 (likes/reposts/views), 适配视频叠加或图卡分享",
          "description_en": "Realistic X post card with engagement metrics (likes, reposts, views), suited to video overlays or shareable image cards.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/social-x-post-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/social-x-post-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/social-x-post-card",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/social-x-post-card",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ve-midnight-editorial",
          "relative_path": "plugins/_official/examples/ve-midnight-editorial",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
          "exists": true,
          "has_skill_md": true,
          "description": "Midnight Editorial deck — cinematic editorial dark theme: deep navy #0f1729 pages with a warm gold #d4a73a accent, Instrument Serif 120px dramatic display dropping straight to 14px JetBrains Mono labels, gold radial accent glow per slide, g",
          "description_zh": "Midnight Editorial deck — cinematic editorial dark theme: deep navy #0f1729 pages with a warm gold #d4a73a accent, Instrument Serif 120px dramatic display dropping straight to 14px JetBrains Mono labels, gold radial accent glow per slide, g",
          "description_en": "Midnight Editorial deck — cinematic editorial dark theme: deep navy #0f1729 pages with a warm gold #d4a73a accent, Instrument Serif 120px dramatic display dropping straight to 14px JetBrains Mono labels, gold radial accent glow per slide, g",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ve-midnight-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ve-midnight-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ve-midnight-editorial",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-midnight-editorial",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ve-terminal-mono",
          "relative_path": "plugins/_official/examples/ve-terminal-mono",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
          "exists": true,
          "has_skill_md": true,
          "description": "Terminal Mono deck theme: developer-native near-black #0a0e14 ground, Geist Mono everywhere (large weight-400 mono titles, never bold display), Dracula-green #50fa7b accent, faint dot grid, low-opacity green hairlines. Zero skeuomorphism. D",
          "description_zh": "Terminal Mono deck theme: developer-native near-black #0a0e14 ground, Geist Mono everywhere (large weight-400 mono titles, never bold display), Dracula-green #50fa7b accent, faint dot grid, low-opacity green hairlines. Zero skeuomorphism. D",
          "description_en": "Terminal Mono deck theme: developer-native near-black #0a0e14 ground, Geist Mono everywhere (large weight-400 mono titles, never bold display), Dracula-green #50fa7b accent, faint dot grid, low-opacity green hairlines. Zero skeuomorphism. D",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ve-terminal-mono",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ve-terminal-mono",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ve-terminal-mono",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/ve-terminal-mono",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "velar-luxury-real-estate",
          "relative_path": "plugins/_official/examples/velar-luxury-real-estate",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a high-end luxury real-estate / architecture landing page with cinematic scroll choreography: a typewriter preloader that lifts away, a scroll-driven house image that rises from below and scales up while ",
          "description_zh": "Use this plugin when the user wants a high-end luxury real-estate / architecture landing page with cinematic scroll choreography: a typewriter preloader that lifts away, a scroll-driven house image that rises from below and scales up while",
          "description_en": "Use this plugin when the user wants a high-end luxury real-estate / architecture landing page with cinematic scroll choreography: a typewriter preloader that lifts away, a scroll-driven house image that rises from below and scales up while",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/velar-luxury-real-estate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/velar-luxury-real-estate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/velar-luxury-real-estate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/velar-luxury-real-estate",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "vfx-text-cursor",
          "relative_path": "plugins/_official/examples/vfx-text-cursor",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
          "exists": true,
          "has_skill_md": true,
          "description": "Cursor light trail, chromatic rays, and directional flares for word-by-word quote reveals in video intros.",
          "description_zh": "光标拖光 + 彩色像散射线 + 定向光斑, 适合视频片头逐字揭示金句",
          "description_en": "Cursor light trail, chromatic rays, and directional flares for word-by-word quote reveals in video intros.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/vfx-text-cursor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/vfx-text-cursor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/vfx-text-cursor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/vfx-text-cursor",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "video-hyperframes",
          "relative_path": "plugins/_official/examples/video-hyperframes",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
          "exists": true,
          "has_skill_md": true,
          "description": "Hyperframes / Remotion-compatible continuous frame animation with autoplay support.",
          "description_zh": "Hyperframes / Remotion 兼容的连续帧动画, 可自动播放",
          "description_en": "Hyperframes / Remotion-compatible continuous frame animation with autoplay support.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/video-hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/video-hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/video-hyperframes",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/examples/video-hyperframes",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-code-migration",
          "relative_path": "plugins/_official/scenarios/od-code-migration",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
          "exists": true,
          "has_skill_md": true,
          "description": "Default reference pipeline for the code-migration taskKind — code-import → design-extract → token-map → rewrite-plan → patch-edit ↔ build-test devloop → diff-review → handoff.",
          "description_zh": "Default reference pipeline for the code-migration taskKind — code-import → design-extract → token-map → rewrite-plan → patch-edit ↔ build-test devloop → diff-review → handoff.",
          "description_en": "Default reference pipeline for the code-migration taskKind — code-import → design-extract → token-map → rewrite-plan → patch-edit ↔ build-test devloop → diff-review → handoff.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-code-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-code-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-code-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-code-migration",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-default",
          "relative_path": "plugins/_official/scenarios/od-default",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
          "exists": true,
          "has_skill_md": true,
          "description": "Hidden fallback scenario for free-form Home prompts. Ask the task type first, then continue through the matching Open Design flow.",
          "description_zh": "Hidden fallback scenario for free-form Home prompts. Ask the task type first, then continue through the matching Open Design flow.",
          "description_en": "Hidden fallback scenario for free-form Home prompts. Ask the task type first, then continue through the matching Open Design flow.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-default",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-default",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-default",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-default",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-design-refine",
          "relative_path": "plugins/_official/scenarios/od-design-refine",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to improve an existing Open Design artifact rather than create a new one.",
          "description_zh": "Use this plugin when the user wants to improve an existing Open Design artifact rather than create a new one.",
          "description_en": "Use this plugin when the user wants to improve an existing Open Design artifact rather than create a new one.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-design-refine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-design-refine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-design-refine",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-design-refine",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-figma-migration",
          "relative_path": "plugins/_official/scenarios/od-figma-migration",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
          "exists": true,
          "has_skill_md": true,
          "description": "Default reference pipeline for the figma-migration taskKind — figma-extract → token-map → generate → critique.",
          "description_zh": "Default reference pipeline for the figma-migration taskKind — figma-extract → token-map → generate → critique.",
          "description_en": "Default reference pipeline for the figma-migration taskKind — figma-extract → token-map → generate → critique.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-figma-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-figma-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-figma-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-figma-migration",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-media-generation",
          "relative_path": "plugins/_official/scenarios/od-media-generation",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
          "exists": true,
          "has_skill_md": true,
          "description": "Default reference pipeline for image, video, and audio projects — routes through media-image / media-video / media-audio atoms based on the project kind, wraps the output in a live artifact, and devloops on critique-theater until the score ",
          "description_zh": "Default reference pipeline for image, video, and audio projects — routes through media-image / media-video / media-audio atoms based on the project kind, wraps the output in a live artifact, and devloops on critique-theater until the score",
          "description_en": "Default reference pipeline for image, video, and audio projects — routes through media-image / media-video / media-audio atoms based on the project kind, wraps the output in a live artifact, and devloops on critique-theater until the score",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-media-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-media-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-media-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-media-generation",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-new-generation",
          "relative_path": "plugins/_official/scenarios/od-new-generation",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
          "exists": true,
          "has_skill_md": true,
          "description": "Default reference pipeline for the new-generation taskKind — discovery → plan → generate → critique with a critique-theater devloop.",
          "description_zh": "Default reference pipeline for the new-generation taskKind — discovery → plan → generate → critique with a critique-theater devloop.",
          "description_en": "Default reference pipeline for the new-generation taskKind — discovery → plan → generate → critique with a critique-theater devloop.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-new-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-new-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-new-generation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-new-generation",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-nextjs-export",
          "relative_path": "plugins/_official/scenarios/od-nextjs-export",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Next.js App Router project.",
          "description_zh": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Next.js App Router project.",
          "description_en": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Next.js App Router project.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-nextjs-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-nextjs-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-nextjs-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-nextjs-export",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-plugin-authoring",
          "relative_path": "plugins/_official/scenarios/od-plugin-authoring",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
          "exists": true,
          "has_skill_md": true,
          "description": "Guided scenario for creating an Open Design plugin folder that can be installed into My plugins.",
          "description_zh": "Guided scenario for creating an Open Design plugin folder that can be installed into My plugins.",
          "description_en": "Guided scenario for creating an Open Design plugin folder that can be installed into My plugins.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-plugin-authoring",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-plugin-authoring",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-plugin-authoring",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-plugin-authoring",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-react-export",
          "relative_path": "plugins/_official/scenarios/od-react-export",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to hand an accepted Open Design artifact to a React app.",
          "description_zh": "Use this plugin when the user wants to hand an accepted Open Design artifact to a React app.",
          "description_en": "Use this plugin when the user wants to hand an accepted Open Design artifact to a React app.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-react-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-react-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-react-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-react-export",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-share-to-community",
          "relative_path": "plugins/_official/scenarios/od-share-to-community",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
          "exists": true,
          "has_skill_md": true,
          "description": "Package the user's just-finished work as an Open Design plugin without asking for fields the project files already answer, then surface the existing Add-to-My-plugins / Open-Design-PR buttons.",
          "description_zh": "Package the user's just-finished work as an Open Design plugin without asking for fields the project files already answer, then surface the existing Add-to-My-plugins / Open-Design-PR buttons.",
          "description_en": "Package the user's just-finished work as an Open Design plugin without asking for fields the project files already answer, then surface the existing Add-to-My-plugins / Open-Design-PR buttons.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-share-to-community",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-share-to-community",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-share-to-community",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-share-to-community",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-tune-collab",
          "relative_path": "plugins/_official/scenarios/od-tune-collab",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
          "exists": true,
          "has_skill_md": true,
          "description": "Default reference pipeline for the tune-collab taskKind — pick a direction, patch-edit the existing artifact, critique, hand off.",
          "description_zh": "Default reference pipeline for the tune-collab taskKind — pick a direction, patch-edit the existing artifact, critique, hand off.",
          "description_en": "Default reference pipeline for the tune-collab taskKind — pick a direction, patch-edit the existing artifact, critique, hand off.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-tune-collab",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-tune-collab",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-tune-collab",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-tune-collab",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-vue-export",
          "relative_path": "plugins/_official/scenarios/od-vue-export",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Vue 3 project.",
          "description_zh": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Vue 3 project.",
          "description_en": "Use this plugin when the user wants to hand an accepted Open Design artifact to a Vue 3 project.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-vue-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-vue-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-vue-export",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-vue-export",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "od-web-effect-extractor",
          "relative_path": "plugins/_official/scenarios/od-web-effect-extractor",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
          "exists": true,
          "has_skill_md": true,
          "description": "Extract visual effects, animation systems, Canvas/WebGL/Shader behavior, and interaction details from a reference website, then rebuild them as an editable Open Design web artifact.",
          "description_zh": "Extract visual effects, animation systems, Canvas/WebGL/Shader behavior, and interaction details from a reference website, then rebuild them as an editable Open Design web artifact.",
          "description_en": "Extract visual effects, animation systems, Canvas/WebGL/Shader behavior, and interaction details from a reference website, then rebuild them as an editable Open Design web artifact.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/od-web-effect-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/od-web-effect-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/od-web-effect-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/scenarios/od-web-effect-extractor",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-bold-poster",
          "relative_path": "plugins/_official/video-templates/frame-bold-poster",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Bold Poster Frame\" HyperFrames motion video — A 1970s European editorial poster in motion — a red rule draws across, a giant tilted figure drops in, a three-line headline rises line-by-line, an italic ",
          "description_zh": "Use this plugin when the user wants a \"Bold Poster Frame\" HyperFrames motion video — A 1970s European editorial poster in motion — a red rule draws across, a giant tilted figure drops in, a three-line headline rises line-by-line, an italic",
          "description_en": "Use this plugin when the user wants a \"Bold Poster Frame\" HyperFrames motion video — A 1970s European editorial poster in motion — a red rule draws across, a giant tilted figure drops in, a three-line headline rises line-by-line, an italic",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-bold-poster",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-poster",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-bold-signal",
          "relative_path": "plugins/_official/video-templates/frame-bold-signal",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Bold Signal Frame\" HyperFrames motion video — Bold colored card on a dark gradient — big section number, nav breadcrumb, orange card sliding in, title rising.",
          "description_zh": "Use this plugin when the user wants a \"Bold Signal Frame\" HyperFrames motion video — Bold colored card on a dark gradient — big section number, nav breadcrumb, orange card sliding in, title rising.",
          "description_en": "Use this plugin when the user wants a \"Bold Signal Frame\" HyperFrames motion video — Bold colored card on a dark gradient — big section number, nav breadcrumb, orange card sliding in, title rising.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-bold-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-bold-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-bold-signal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-bold-signal",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-build-minimal",
          "relative_path": "plugins/_official/video-templates/frame-build-minimal",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Build Minimal Frame\" HyperFrames motion video — Luxury-minimal whitespace hero — single word reveals letter by letter, warm-gold hairline, breathing indicators.",
          "description_zh": "Use this plugin when the user wants a \"Build Minimal Frame\" HyperFrames motion video — Luxury-minimal whitespace hero — single word reveals letter by letter, warm-gold hairline, breathing indicators.",
          "description_en": "Use this plugin when the user wants a \"Build Minimal Frame\" HyperFrames motion video — Luxury-minimal whitespace hero — single word reveals letter by letter, warm-gold hairline, breathing indicators.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-build-minimal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-build-minimal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-build-minimal",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-build-minimal",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-creative-voltage",
          "relative_path": "plugins/_official/video-templates/frame-creative-voltage",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Creative Voltage Frame\" HyperFrames motion video — Electric split with hand-drawn script — offset panels slide in, display title rises with an outlined word, script strokes itself in.",
          "description_zh": "Use this plugin when the user wants a \"Creative Voltage Frame\" HyperFrames motion video — Electric split with hand-drawn script — offset panels slide in, display title rises with an outlined word, script strokes itself in.",
          "description_en": "Use this plugin when the user wants a \"Creative Voltage Frame\" HyperFrames motion video — Electric split with hand-drawn script — offset panels slide in, display title rises with an outlined word, script strokes itself in.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-creative-voltage",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-creative-voltage",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-data-rollup",
          "relative_path": "plugins/_official/video-templates/frame-data-rollup",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Data Rollup Frame\" HyperFrames motion video — A native Remotion data frame — bars grow from zero by real data via spring physics while the figures roll 0→target in sync.",
          "description_zh": "Use this plugin when the user wants a \"Data Rollup Frame\" HyperFrames motion video — A native Remotion data frame — bars grow from zero by real data via spring physics while the figures roll 0→target in sync.",
          "description_en": "Use this plugin when the user wants a \"Data Rollup Frame\" HyperFrames motion video — A native Remotion data frame — bars grow from zero by real data via spring physics while the figures roll 0→target in sync.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-data-rollup",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-data-rollup",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-data-rollup",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-data-rollup",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-decision-tree",
          "relative_path": "plugins/_official/video-templates/frame-decision-tree",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Decision Tree\" HyperFrames motion video — Animated flowchart with branching paths",
          "description_zh": "Use this plugin when the user wants a \"Decision Tree\" HyperFrames motion video — Animated flowchart with branching paths",
          "description_en": "Use this plugin when the user wants a \"Decision Tree\" HyperFrames motion video — Animated flowchart with branching paths",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-decision-tree",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-decision-tree",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-decision-tree",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-decision-tree",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-electric-studio",
          "relative_path": "plugins/_official/video-templates/frame-electric-studio",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Electric Studio Frame\" HyperFrames motion video — Two-panel split with quote as hero — white/blue panels open from center, accent bar grows, quote reveals line by line.",
          "description_zh": "Use this plugin when the user wants a \"Electric Studio Frame\" HyperFrames motion video — Two-panel split with quote as hero — white/blue panels open from center, accent bar grows, quote reveals line by line.",
          "description_en": "Use this plugin when the user wants a \"Electric Studio Frame\" HyperFrames motion video — Two-panel split with quote as hero — white/blue panels open from center, accent bar grows, quote reveals line by line.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-electric-studio",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-electric-studio",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-kinetic-type",
          "relative_path": "plugins/_official/video-templates/frame-kinetic-type",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Kinetic Type\" HyperFrames motion video — Bold kinetic typography promo",
          "description_zh": "Use this plugin when the user wants a \"Kinetic Type\" HyperFrames motion video — Bold kinetic typography promo",
          "description_en": "Use this plugin when the user wants a \"Kinetic Type\" HyperFrames motion video — Bold kinetic typography promo",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-kinetic-type",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-kinetic-type",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-kinetic-type",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-kinetic-type",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-nyt-graph",
          "relative_path": "plugins/_official/video-templates/frame-nyt-graph",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"NYT Graph\" HyperFrames motion video — Animated data chart in print editorial style",
          "description_zh": "Use this plugin when the user wants a \"NYT Graph\" HyperFrames motion video — Animated data chart in print editorial style",
          "description_en": "Use this plugin when the user wants a \"NYT Graph\" HyperFrames motion video — Animated data chart in print editorial style",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-nyt-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-nyt-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-nyt-graph",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-nyt-graph",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-pentagram-stat",
          "relative_path": "plugins/_official/video-templates/frame-pentagram-stat",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Pentagram Stat Frame\" HyperFrames motion video — Swiss-grid statistic anchor — giant number, red accent, growing bars, black data bar. Rational and editorial.",
          "description_zh": "Use this plugin when the user wants a \"Pentagram Stat Frame\" HyperFrames motion video — Swiss-grid statistic anchor — giant number, red accent, growing bars, black data bar. Rational and editorial.",
          "description_en": "Use this plugin when the user wants a \"Pentagram Stat Frame\" HyperFrames motion video — Swiss-grid statistic anchor — giant number, red accent, growing bars, black data bar. Rational and editorial.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-pentagram-stat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-pentagram-stat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-pentagram-stat",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-pentagram-stat",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-play-mode",
          "relative_path": "plugins/_official/video-templates/frame-play-mode",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Play Mode\" HyperFrames motion video — Playful elastic animations",
          "description_zh": "Use this plugin when the user wants a \"Play Mode\" HyperFrames motion video — Playful elastic animations",
          "description_en": "Use this plugin when the user wants a \"Play Mode\" HyperFrames motion video — Playful elastic animations",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-play-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-play-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-play-mode",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-play-mode",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-product-promo",
          "relative_path": "plugins/_official/video-templates/frame-product-promo",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Product Promo\" HyperFrames motion video — Multi-scene product showcase with SVG assets",
          "description_zh": "Use this plugin when the user wants a \"Product Promo\" HyperFrames motion video — Multi-scene product showcase with SVG assets",
          "description_en": "Use this plugin when the user wants a \"Product Promo\" HyperFrames motion video — Multi-scene product showcase with SVG assets",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-product-promo",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-product-promo",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-product-promo",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-product-promo-30s",
          "relative_path": "plugins/_official/video-templates/frame-product-promo-30s",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Product Promo · 30s\" HyperFrames motion video — Multi-scene 30-second product promo: problem-type intro, brand reveal, benefits flowchart, product surfaces, value pillars, foundation, CTA outro. Forked",
          "description_zh": "Use this plugin when the user wants a \"Product Promo · 30s\" HyperFrames motion video — Multi-scene 30-second product promo: problem-type intro, brand reveal, benefits flowchart, product surfaces, value pillars, foundation, CTA outro. Forked",
          "description_en": "Use this plugin when the user wants a \"Product Promo · 30s\" HyperFrames motion video — Multi-scene 30-second product promo: problem-type intro, brand reveal, benefits flowchart, product surfaces, value pillars, foundation, CTA outro. Forked",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-product-promo-30s",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-product-promo-30s",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-product-promo-30s",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-product-promo-30s",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-swiss-grid",
          "relative_path": "plugins/_official/video-templates/frame-swiss-grid",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Swiss Grid\" HyperFrames motion video — Structured grid layout",
          "description_zh": "Use this plugin when the user wants a \"Swiss Grid\" HyperFrames motion video — Structured grid layout",
          "description_en": "Use this plugin when the user wants a \"Swiss Grid\" HyperFrames motion video — Structured grid layout",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-swiss-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-swiss-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-swiss-grid",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-swiss-grid",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-takram-organic",
          "relative_path": "plugins/_official/video-templates/frame-takram-organic",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Takram Organic Frame\" HyperFrames motion video — Soft-tech radial node graph as art — frosted rounded card, curved links drawing in, nodes popping outward, gentle float.",
          "description_zh": "Use this plugin when the user wants a \"Takram Organic Frame\" HyperFrames motion video — Soft-tech radial node graph as art — frosted rounded card, curved links drawing in, nodes popping outward, gentle float.",
          "description_en": "Use this plugin when the user wants a \"Takram Organic Frame\" HyperFrames motion video — Soft-tech radial node graph as art — frosted rounded card, curved links drawing in, nodes popping outward, gentle float.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-takram-organic",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-takram-organic",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-takram-organic",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-takram-organic",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-vignelli",
          "relative_path": "plugins/_official/video-templates/frame-vignelli",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Vignelli\" HyperFrames motion video — Bold typography with red accents",
          "description_zh": "Use this plugin when the user wants a \"Vignelli\" HyperFrames motion video — Bold typography with red accents",
          "description_en": "Use this plugin when the user wants a \"Vignelli\" HyperFrames motion video — Bold typography with red accents",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-vignelli",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-vignelli",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-vignelli",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-vignelli",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frame-warm-grain",
          "relative_path": "plugins/_official/video-templates/frame-warm-grain",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a \"Warm Grain\" HyperFrames motion video — Cream aesthetic with grain texture",
          "description_zh": "Use this plugin when the user wants a \"Warm Grain\" HyperFrames motion video — Cream aesthetic with grain texture",
          "description_en": "Use this plugin when the user wants a \"Warm Grain\" HyperFrames motion video — Cream aesthetic with grain texture",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frame-warm-grain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frame-warm-grain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frame-warm-grain",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/_official/video-templates/frame-warm-grain",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
          "relative_path": "plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a maximum-effort reasoning workflow for a complex, high-stakes, or ambiguous task.",
          "description_zh": "Use this plugin when the user wants a maximum-effort reasoning workflow for a complex, high-stakes, or ambiguous task.",
          "description_en": "Use this plugin when the user wants a maximum-effort reasoning workflow for a complex, high-stakes, or ambiguous task.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/deep-think-maximum-cognitive-effort-protocol-mq8kvw92",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hallmark",
          "relative_path": "plugins/community/hallmark",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
          "exists": true,
          "has_skill_md": true,
          "description": "Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots. Use when the user asks to build a new app or landing page, wants to redesign something, invokes Hallmark by name, or uses aud",
          "description_zh": "Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots. Use when the user asks to build a new app or landing page, wants to redesign something, invokes Hallmark by name, or uses aud",
          "description_en": "Anti-AI-slop design skill for greenfield pages, audits, redesigns, and design extraction from URLs or screenshots. Use when the user asks to build a new app or landing page, wants to redesign something, invokes Hallmark by name, or uses aud",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hallmark",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hallmark",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hallmark",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/hallmark",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "import-smoke-test",
          "relative_path": "plugins/community/import-smoke-test",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
          "exists": true,
          "has_skill_md": true,
          "description": "A portable community plugin for validating Open Design plugin import flows.",
          "description_zh": "A portable community plugin for validating Open Design plugin import flows.",
          "description_en": "A portable community plugin for validating Open Design plugin import flows.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/import-smoke-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/import-smoke-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/import-smoke-test",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/import-smoke-test",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "registry-starter",
          "relative_path": "plugins/community/registry-starter",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
          "exists": true,
          "has_skill_md": true,
          "description": "A small community registry starter plugin used to verify Open Design marketplace install flows.",
          "description_zh": "A small community registry starter plugin used to verify Open Design marketplace install flows.",
          "description_en": "A small community registry starter plugin used to verify Open Design marketplace install flows.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/registry-starter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/registry-starter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/registry-starter",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/community/registry-starter",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-hyperframes-launch",
          "relative_path": "plugins/spec/examples/create-hyperframes-launch",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a HyperFrames-ready HTML motion composition, launch animation, kinetic typography clip, product reveal, or social video made from code.",
          "description_zh": "Use this plugin when the user wants a HyperFrames-ready HTML motion composition, launch animation, kinetic typography clip, product reveal, or social video made from code.",
          "description_en": "Use this plugin when the user wants a HyperFrames-ready HTML motion composition, launch animation, kinetic typography clip, product reveal, or social video made from code.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-hyperframes-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-hyperframes-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-hyperframes-launch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-hyperframes-launch",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-image-campaign",
          "relative_path": "plugins/spec/examples/create-image-campaign",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants image assets, posters, social visuals, ad concepts, or a small campaign image system from a creative brief.",
          "description_zh": "Use this plugin when the user wants image assets, posters, social visuals, ad concepts, or a small campaign image system from a creative brief.",
          "description_en": "Use this plugin when the user wants image assets, posters, social visuals, ad concepts, or a small campaign image system from a creative brief.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-image-campaign",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-image-campaign",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-image-campaign",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-image-campaign",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-live-artifact-ops",
          "relative_path": "plugins/spec/examples/create-live-artifact-ops",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
          "exists": true,
          "has_skill_md": true,
          "description": "Create a refreshable live operations artifact for customer success, support, or launch review workflows.",
          "description_zh": "Create a refreshable live operations artifact for customer success, support, or launch review workflows.",
          "description_en": "Create a refreshable live operations artifact for customer success, support, or launch review workflows.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-live-artifact-ops",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-live-artifact-ops",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-live-artifact-ops",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-live-artifact-ops",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-prototype-dashboard",
          "relative_path": "plugins/spec/examples/create-prototype-dashboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
          "exists": true,
          "has_skill_md": true,
          "description": "Create a polished operations dashboard prototype with dense KPIs, status tables, and a focused command-center layout.",
          "description_zh": "Create a polished operations dashboard prototype with dense KPIs, status tables, and a focused command-center layout.",
          "description_en": "Create a polished operations dashboard prototype with dense KPIs, status tables, and a focused command-center layout.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-prototype-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-prototype-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-prototype-dashboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-prototype-dashboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-slides-pitch",
          "relative_path": "plugins/spec/examples/create-slides-pitch",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
          "exists": true,
          "has_skill_md": true,
          "description": "Create a concise HTML pitch deck for an early-stage product, with a strong narrative arc and finance-ready slide structure.",
          "description_zh": "Create a concise HTML pitch deck for an early-stage product, with a strong narrative arc and finance-ready slide structure.",
          "description_en": "Create a concise HTML pitch deck for an early-stage product, with a strong narrative arc and finance-ready slide structure.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-slides-pitch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-slides-pitch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-slides-pitch",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-slides-pitch",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "create-video-storyboard",
          "relative_path": "plugins/spec/examples/create-video-storyboard",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants a video concept, storyboard, shot list, prompt pack, or render-ready motion brief for a product, campaign, or explainer.",
          "description_zh": "Use this plugin when the user wants a video concept, storyboard, shot list, prompt pack, or render-ready motion brief for a product, campaign, or explainer.",
          "description_en": "Use this plugin when the user wants a video concept, storyboard, shot list, prompt pack, or render-ready motion brief for a product, campaign, or explainer.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/create-video-storyboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/create-video-storyboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/create-video-storyboard",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/create-video-storyboard",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "deploy-vercel-static",
          "relative_path": "plugins/spec/examples/deploy-vercel-static",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to deploy an accepted static web artifact to Vercel or prepare an equivalent deployment handoff with preview and production URLs.",
          "description_zh": "Use this plugin when the user wants to deploy an accepted static web artifact to Vercel or prepare an equivalent deployment handoff with preview and production URLs.",
          "description_en": "Use this plugin when the user wants to deploy an accepted static web artifact to Vercel or prepare an equivalent deployment handoff with preview and production URLs.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/deploy-vercel-static",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/deploy-vercel-static",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/deploy-vercel-static",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/deploy-vercel-static",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "export-nextjs-handoff",
          "relative_path": "plugins/spec/examples/export-nextjs-handoff",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants an accepted Open Design artifact converted into a Next.js App Router handoff with clean components, styles, assets, and implementation notes.",
          "description_zh": "Use this plugin when the user wants an accepted Open Design artifact converted into a Next.js App Router handoff with clean components, styles, assets, and implementation notes.",
          "description_en": "Use this plugin when the user wants an accepted Open Design artifact converted into a Next.js App Router handoff with clean components, styles, assets, and implementation notes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/export-nextjs-handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/export-nextjs-handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/export-nextjs-handoff",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/export-nextjs-handoff",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "extend-plugin-author",
          "relative_path": "plugins/spec/examples/extend-plugin-author",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to create, improve, validate, publish, or submit an Open Design plugin using the plugin spec, examples, and PR workflow.",
          "description_zh": "Use this plugin when the user wants to create, improve, validate, publish, or submit an Open Design plugin using the plugin spec, examples, and PR workflow.",
          "description_en": "Use this plugin when the user wants to create, improve, validate, publish, or submit an Open Design plugin using the plugin spec, examples, and PR workflow.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/extend-plugin-author",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/extend-plugin-author",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/extend-plugin-author",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/extend-plugin-author",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "import-screenshot-to-prototype",
          "relative_path": "plugins/spec/examples/import-screenshot-to-prototype",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user provides a screenshot or image reference and wants it reconstructed as an editable Open Design prototype with sensible components, layout, and responsive behavior.",
          "description_zh": "Use this plugin when the user provides a screenshot or image reference and wants it reconstructed as an editable Open Design prototype with sensible components, layout, and responsive behavior.",
          "description_en": "Use this plugin when the user provides a screenshot or image reference and wants it reconstructed as an editable Open Design prototype with sensible components, layout, and responsive behavior.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/import-screenshot-to-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/import-screenshot-to-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/import-screenshot-to-prototype",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/import-screenshot-to-prototype",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "refine-critique-loop",
          "relative_path": "plugins/spec/examples/refine-critique-loop",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user has an existing Open Design artifact and wants targeted critique, patching, brand tightening, responsive fixes, or quality improvement without starting over.",
          "description_zh": "Use this plugin when the user has an existing Open Design artifact and wants targeted critique, patching, brand tightening, responsive fixes, or quality improvement without starting over.",
          "description_en": "Use this plugin when the user has an existing Open Design artifact and wants targeted critique, patching, brand tightening, responsive fixes, or quality improvement without starting over.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/refine-critique-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/refine-critique-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/refine-critique-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/refine-critique-loop",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "share-github-pr",
          "relative_path": "plugins/spec/examples/share-github-pr",
          "path": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
          "exists": true,
          "has_skill_md": true,
          "description": "Use this plugin when the user wants to package an accepted plugin or artifact as a GitHub pull request for Open Design or another target repository.",
          "description_zh": "Use this plugin when the user wants to package an accepted plugin or artifact as a GitHub pull request for Open Design or another target repository.",
          "description_en": "Use this plugin when the user wants to package an accepted plugin or artifact as a GitHub pull request for Open Design or another target repository.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/share-github-pr",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/share-github-pr",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/share-github-pr",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/plugins/spec/examples/share-github-pr",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "8-bit-orbit-video-template",
          "relative_path": "skills/8-bit-orbit-video-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Hyperframes-based video template for retro pixel deck motion design. Use when users want a high-fidelity, multi-scene HTML-to-video composition with advanced transitions, interactive preview controls, and ready-to-render default style.",
          "description_zh": "Hyperframes-based video template for retro pixel deck motion design. Use when users want a high-fidelity, multi-scene HTML-to-video composition with advanced transitions, interactive preview controls, and ready-to-render default style.",
          "description_en": "Hyperframes-based video template for retro pixel deck motion design. Use when users want a high-fidelity, multi-scene HTML-to-video composition with advanced transitions, interactive preview controls, and ready-to-render default style.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/8-bit-orbit-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/8-bit-orbit-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/8-bit-orbit-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/8-bit-orbit-video-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ad-creative",
          "relative_path": "skills/ad-creative",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate and iterate ad creative including headlines, descriptions, and primary text. Useful for paid social and search ad iteration.",
          "description_zh": "Generate and iterate ad creative including headlines, descriptions, and primary text. Useful for paid social and search ad iteration.",
          "description_en": "Generate and iterate ad creative including headlines, descriptions, and primary text. Useful for paid social and search ad iteration.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ad-creative",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ad-creative",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ad-creative",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ad-creative",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "after-hours-editorial-template",
          "relative_path": "skills/after-hours-editorial-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Luxury dark-editorial HyperFrames template for three-page cinematic storyboards, inspired by haute couture title cards and magazine chapter spreads. Use when the user asks for premium fashion-style motion pages, moody serif-led storytelling",
          "description_zh": "Luxury dark-editorial HyperFrames template for three-page cinematic storyboards, inspired by haute couture title cards and magazine chapter spreads. Use when the user asks for premium fashion-style motion pages, moody serif-led storytelling",
          "description_en": "Luxury dark-editorial HyperFrames template for three-page cinematic storyboards, inspired by haute couture title cards and magazine chapter spreads. Use when the user asks for premium fashion-style motion pages, moody serif-led storytelling",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/after-hours-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/after-hours-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/after-hours-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/after-hours-editorial-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "agent-browser",
          "relative_path": "skills/agent-browser",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
          "exists": true,
          "has_skill_md": true,
          "description": "Browser automation CLI for AI agents. Use when the user needs to inspect, test, or automate browser behavior: navigating pages, filling forms, clicking buttons, taking screenshots, extracting page data, reading selected Open Design browser-",
          "description_zh": "Browser automation CLI for AI agents. Use when the user needs to inspect, test, or automate browser behavior: navigating pages, filling forms, clicking buttons, taking screenshots, extracting page data, reading selected Open Design browser-",
          "description_en": "Browser automation CLI for AI agents. Use when the user needs to inspect, test, or automate browser behavior: navigating pages, filling forms, clicking buttons, taking screenshots, extracting page data, reading selected Open Design browser-",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/agent-browser",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/agent-browser",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/agent-browser",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/agent-browser",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ai-music-album",
          "relative_path": "skills/ai-music-album",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
          "exists": true,
          "has_skill_md": true,
          "description": "Full-lifecycle AI music album production — concept, lyric drafting, track sequencing, and export. Useful for indie album experiments and brand soundtracks.",
          "description_zh": "Full-lifecycle AI music album production — concept, lyric drafting, track sequencing, and export. Useful for indie album experiments and brand soundtracks.",
          "description_en": "Full-lifecycle AI music album production — concept, lyric drafting, track sequencing, and export. Useful for indie album experiments and brand soundtracks.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ai-music-album",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ai-music-album",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ai-music-album",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ai-music-album",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "algorithmic-art",
          "relative_path": "skills/algorithmic-art",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
          "exists": true,
          "has_skill_md": true,
          "description": "Create generative art using p5.js with seeded randomness so every render is reproducible. Useful for procedural posters, motion-style stills, and artistic frame studies.",
          "description_zh": "Create generative art using p5.js with seeded randomness so every render is reproducible. Useful for procedural posters, motion-style stills, and artistic frame studies.",
          "description_en": "Create generative art using p5.js with seeded randomness so every render is reproducible. Useful for procedural posters, motion-style stills, and artistic frame studies.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/algorithmic-art",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/algorithmic-art",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/algorithmic-art",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/algorithmic-art",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "apple-hig",
          "relative_path": "skills/apple-hig",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
          "exists": true,
          "has_skill_md": true,
          "description": "Apple Human Interface Guidelines as 14 agent skills covering platforms, foundations, components, patterns, inputs, and technologies for iOS, macOS, visionOS, watchOS, and tvOS.",
          "description_zh": "Apple Human Interface Guidelines as 14 agent skills covering platforms, foundations, components, patterns, inputs, and technologies for iOS, macOS, visionOS, watchOS, and tvOS.",
          "description_en": "Apple Human Interface Guidelines as 14 agent skills covering platforms, foundations, components, patterns, inputs, and technologies for iOS, macOS, visionOS, watchOS, and tvOS.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/apple-hig",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/apple-hig",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/apple-hig",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/apple-hig",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "artifacts-builder",
          "relative_path": "skills/artifacts-builder",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
          "exists": true,
          "has_skill_md": true,
          "description": "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui).",
          "description_zh": "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui).",
          "description_en": "Suite of tools for creating elaborate, multi-component claude.ai HTML artifacts using modern frontend web technologies (React, Tailwind CSS, shadcn/ui).",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/artifacts-builder",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "brainstorming",
          "relative_path": "skills/brainstorming",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
          "exists": true,
          "has_skill_md": true,
          "description": "Transform rough ideas into fully-formed designs through structured questioning and alternative exploration. Useful early in concept work.",
          "description_zh": "Transform rough ideas into fully-formed designs through structured questioning and alternative exploration. Useful early in concept work.",
          "description_en": "Transform rough ideas into fully-formed designs through structured questioning and alternative exploration. Useful early in concept work.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/brainstorming",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/brainstorming",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/brainstorming",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brainstorming",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "brand-extract",
          "relative_path": "skills/brand-extract",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
          "exists": true,
          "has_skill_md": true,
          "description": "Extract a complete Brand Kit from a live website by driving the in-app browser. Use when a brand-extraction project opens with a site in the Browser tab, or when the user asks to \"extract a brand\", \"pull the brand from <url>\", \"get the colo",
          "description_zh": "Extract a complete Brand Kit from a live website by driving the in-app browser. Use when a brand-extraction project opens with a site in the Browser tab, or when the user asks to \"extract a brand\", \"pull the brand from <url>\", \"get the colo",
          "description_en": "Extract a complete Brand Kit from a live website by driving the in-app browser. Use when a brand-extraction project opens with a site in the Browser tab, or when the user asks to \"extract a brand\", \"pull the brand from <url>\", \"get the colo",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/brand-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/brand-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/brand-extract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-extract",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "brand-guidelines",
          "relative_path": "skills/brand-guidelines",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
          "exists": true,
          "has_skill_md": true,
          "description": "Apply Anthropic's official brand colors and typography to artifacts for consistent visual identity and professional design standards. A reference for shaping your own.",
          "description_zh": "Apply Anthropic's official brand colors and typography to artifacts for consistent visual identity and professional design standards. A reference for shaping your own.",
          "description_en": "Apply Anthropic's official brand colors and typography to artifacts for consistent visual identity and professional design standards. A reference for shaping your own.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/brand-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/brand-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/brand-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brand-guidelines",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "brandkit",
          "relative_path": "skills/brandkit",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
          "exists": true,
          "has_skill_md": true,
          "description": "Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gamin",
          "description_zh": "Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gamin",
          "description_en": "Premium brand-kit image generation skill for creating high-end brand-guidelines boards, logo systems, identity decks, and visual-world presentations. Trained for minimalist, cinematic, editorial, dark-tech, luxury, cultural, security, gamin",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/brandkit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/brandkit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/brandkit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brandkit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "brutalist-skill",
          "relative_path": "skills/brutalist-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites t",
          "description_zh": "Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites t",
          "description_en": "Raw mechanical interfaces fusing Swiss typographic print with military terminal aesthetics. Rigid grids, extreme type scale contrast, utilitarian color, analog degradation effects. For data-heavy dashboards, portfolios, or editorial sites t",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/brutalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/brutalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/brutalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/brutalist-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "canvas-design",
          "relative_path": "skills/canvas-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
          "exists": true,
          "has_skill_md": true,
          "description": "Create beautiful visual art in PNG and PDF documents using design philosophy and aesthetic principles for posters, illustrations, and static pieces.",
          "description_zh": "Create beautiful visual art in PNG and PDF documents using design philosophy and aesthetic principles for posters, illustrations, and static pieces.",
          "description_en": "Create beautiful visual art in PNG and PDF documents using design philosophy and aesthetic principles for posters, illustrations, and static pieces.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/canvas-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/canvas-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/canvas-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/canvas-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "color-expert",
          "relative_path": "skills/color-expert",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
          "exists": true,
          "has_skill_md": true,
          "description": "Color science expert skill with 286K words of reference material covering OKLCH/OKLAB, palette generation, accessibility/contrast, color naming, pigment mixing, and historical color theory.",
          "description_zh": "Color science expert skill with 286K words of reference material covering OKLCH/OKLAB, palette generation, accessibility/contrast, color naming, pigment mixing, and historical color theory.",
          "description_en": "Color science expert skill with 286K words of reference material covering OKLCH/OKLAB, palette generation, accessibility/contrast, color naming, pigment mixing, and historical color theory.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/color-expert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/color-expert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/color-expert",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/color-expert",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "competitive-ads-extractor",
          "relative_path": "skills/competitive-ads-extractor",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
          "exists": true,
          "has_skill_md": true,
          "description": "Extract and analyze competitors' ads from ad libraries to understand messaging and creative approaches that resonate.",
          "description_zh": "Extract and analyze competitors' ads from ad libraries to understand messaging and creative approaches that resonate.",
          "description_en": "Extract and analyze competitors' ads from ad libraries to understand messaging and creative approaches that resonate.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/competitive-ads-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/competitive-ads-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/competitive-ads-extractor",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/competitive-ads-extractor",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "copywriting",
          "relative_path": "skills/copywriting",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
          "exists": true,
          "has_skill_md": true,
          "description": "Write and rewrite marketing copy for landing pages, homepages, and ads. Useful as a copy chief partner during launches.",
          "description_zh": "Write and rewrite marketing copy for landing pages, homepages, and ads. Useful as a copy chief partner during launches.",
          "description_en": "Write and rewrite marketing copy for landing pages, homepages, and ads. Useful as a copy chief partner during launches.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/copywriting",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/copywriting",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/copywriting",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/copywriting",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "creative-director",
          "relative_path": "skills/creative-director",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
          "exists": true,
          "has_skill_md": true,
          "description": "AI creative director with recursive self-assessment: 20+ methodologies (SIT, TRIZ, Bisociation, SCAMPER, Synectics), 3-axis evaluation calibrated against Cannes/D&AD/HumanKind, 5-phase process from brief to presentation.",
          "description_zh": "AI creative director with recursive self-assessment: 20+ methodologies (SIT, TRIZ, Bisociation, SCAMPER, Synectics), 3-axis evaluation calibrated against Cannes/D&AD/HumanKind, 5-phase process from brief to presentation.",
          "description_en": "AI creative director with recursive self-assessment: 20+ methodologies (SIT, TRIZ, Bisociation, SCAMPER, Synectics), 3-axis evaluation calibrated against Cannes/D&AD/HumanKind, 5-phase process from brief to presentation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/creative-director",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/creative-director",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/creative-director",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/creative-director",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "d3-visualization",
          "relative_path": "skills/d3-visualization",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
          "exists": true,
          "has_skill_md": true,
          "description": "Teaches the agent to produce D3 charts and interactive data visualizations. A comprehensive D3.js skill with examples across chart types and techniques giving the agent expert-level knowledge to generate complex, interactive visualizations.",
          "description_zh": "Teaches the agent to produce D3 charts and interactive data visualizations. A comprehensive D3.js skill with examples across chart types and techniques giving the agent expert-level knowledge to generate complex, interactive visualizations.",
          "description_en": "Teaches the agent to produce D3 charts and interactive data visualizations. A comprehensive D3.js skill with examples across chart types and techniques giving the agent expert-level knowledge to generate complex, interactive visualizations.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/d3-visualization",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/d3-visualization",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/d3-visualization",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/d3-visualization",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "design-consultation",
          "relative_path": "skills/design-consultation",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
          "exists": true,
          "has_skill_md": true,
          "description": "Build a complete design system from scratch with creative risks and realistic product mockups. Useful for kickoff workshops and brand-from-zero work.",
          "description_zh": "Build a complete design system from scratch with creative risks and realistic product mockups. Useful for kickoff workshops and brand-from-zero work.",
          "description_en": "Build a complete design system from scratch with creative risks and realistic product mockups. Useful for kickoff workshops and brand-from-zero work.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/design-consultation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/design-consultation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/design-consultation",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-consultation",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "design-md",
          "relative_path": "skills/design-md",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
          "exists": true,
          "has_skill_md": true,
          "description": "Create and manage DESIGN.md files. Useful for capturing design direction, tokens, and visual rules in a single source of truth.",
          "description_zh": "Create and manage DESIGN.md files. Useful for capturing design direction, tokens, and visual rules in a single source of truth.",
          "description_en": "Create and manage DESIGN.md files. Useful for capturing design direction, tokens, and visual rules in a single source of truth.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/design-md",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/design-md",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/design-md",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-md",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "design-review",
          "relative_path": "skills/design-review",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
          "exists": true,
          "has_skill_md": true,
          "description": "Designer Who Codes: visual audit then fixes with atomic commits and before/after screenshots. Useful for tightening shipped UI before launch.",
          "description_zh": "Designer Who Codes: visual audit then fixes with atomic commits and before/after screenshots. Useful for tightening shipped UI before launch.",
          "description_en": "Designer Who Codes: visual audit then fixes with atomic commits and before/after screenshots. Useful for tightening shipped UI before launch.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/design-review",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "digits-fintech-swiss-template",
          "relative_path": "skills/digits-fintech-swiss-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Swiss-grid fintech deck template in black / warm paper / neon-lime contrast. Use when users ask for premium data-story slides with strict modular layout, bold numeric cards, restrained motion, and keyboard/click navigation in one HTML file.",
          "description_zh": "Swiss-grid fintech deck template in black / warm paper / neon-lime contrast. Use when users ask for premium data-story slides with strict modular layout, bold numeric cards, restrained motion, and keyboard/click navigation in one HTML file.",
          "description_en": "Swiss-grid fintech deck template in black / warm paper / neon-lime contrast. Use when users ask for premium data-story slides with strict modular layout, bold numeric cards, restrained motion, and keyboard/click navigation in one HTML file.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/digits-fintech-swiss-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/digits-fintech-swiss-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/digits-fintech-swiss-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/digits-fintech-swiss-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "doc",
          "relative_path": "skills/doc",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
          "exists": true,
          "has_skill_md": true,
          "description": "Read, create, and edit .docx documents with formatting and layout fidelity via OpenAI's document skill.",
          "description_zh": "Read, create, and edit .docx documents with formatting and layout fidelity via OpenAI's document skill.",
          "description_en": "Read, create, and edit .docx documents with formatting and layout fidelity via OpenAI's document skill.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/doc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/doc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/doc",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/doc",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "docx",
          "relative_path": "skills/docx",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
          "exists": true,
          "has_skill_md": true,
          "description": "Create, edit, and analyze Word documents with tracked changes, comments, and formatting. Useful for design briefs, copy docs, and review-ready deliverables.",
          "description_zh": "Create, edit, and analyze Word documents with tracked changes, comments, and formatting. Useful for design briefs, copy docs, and review-ready deliverables.",
          "description_en": "Create, edit, and analyze Word documents with tracked changes, comments, and formatting. Useful for design briefs, copy docs, and review-ready deliverables.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/docx",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "domain-name-brainstormer",
          "relative_path": "skills/domain-name-brainstormer",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate creative domain name ideas and check availability across multiple TLDs including .com, .io, .dev, and .ai.",
          "description_zh": "Generate creative domain name ideas and check availability across multiple TLDs including .com, .io, .dev, and .ai.",
          "description_en": "Generate creative domain name ideas and check availability across multiple TLDs including .com, .io, .dev, and .ai.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/domain-name-brainstormer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/domain-name-brainstormer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/domain-name-brainstormer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/domain-name-brainstormer",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ecommerce-image-workflow",
          "relative_path": "skills/ecommerce-image-workflow",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
          "exists": true,
          "has_skill_md": true,
          "description": "Reference-product ecommerce image workflow for generating a compact set of product-faithful main, feature, and lifestyle images from real product reference photos. V1 requires uploaded product imagery and intentionally defers brief-only con",
          "description_zh": "Reference-product ecommerce image workflow for generating a compact set of product-faithful main, feature, and lifestyle images from real product reference photos. V1 requires uploaded product imagery and intentionally defers brief-only con",
          "description_en": "Reference-product ecommerce image workflow for generating a compact set of product-faithful main, feature, and lifestyle images from real product reference photos. V1 requires uploaded product imagery and intentionally defers brief-only con",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ecommerce-image-workflow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ecommerce-image-workflow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ecommerce-image-workflow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ecommerce-image-workflow",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "editorial-burgundy-principles-template",
          "relative_path": "skills/editorial-burgundy-principles-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial studio deck template in burgundy / blush / muted-gold palette. Use when users ask for premium manifesto or culture slides with pill tags, large typographic statements, principle cards, and guided keyboard/click navigation.",
          "description_zh": "Editorial studio deck template in burgundy / blush / muted-gold palette. Use when users ask for premium manifesto or culture slides with pill tags, large typographic statements, principle cards, and guided keyboard/click navigation.",
          "description_en": "Editorial studio deck template in burgundy / blush / muted-gold palette. Use when users ask for premium manifesto or culture slides with pill tags, large typographic statements, principle cards, and guided keyboard/click navigation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/editorial-burgundy-principles-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/editorial-burgundy-principles-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/editorial-burgundy-principles-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/editorial-burgundy-principles-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "emilkowalski-motion",
          "relative_path": "skills/emilkowalski-motion",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
          "exists": true,
          "has_skill_md": true,
          "description": "Motion-design follow-up skill inspired by Emil Kowalski's animation guidance. Use after an interface exists to add tasteful micro-interactions, state transitions, and page motion with product-grade restraint.",
          "description_zh": "Motion-design follow-up skill inspired by Emil Kowalski's animation guidance. Use after an interface exists to add tasteful micro-interactions, state transitions, and page motion with product-grade restraint.",
          "description_en": "Motion-design follow-up skill inspired by Emil Kowalski's animation guidance. Use after an interface exists to add tasteful micro-interactions, state transitions, and page motion with product-grade restraint.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/emilkowalski-motion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/emilkowalski-motion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/emilkowalski-motion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/emilkowalski-motion",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "enhance-prompt",
          "relative_path": "skills/enhance-prompt",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
          "exists": true,
          "has_skill_md": true,
          "description": "Improve prompts with design specs and UI/UX vocabulary. Useful for design-to-code workflows and clarifying requests for visual output.",
          "description_zh": "Improve prompts with design specs and UI/UX vocabulary. Useful for design-to-code workflows and clarifying requests for visual output.",
          "description_en": "Improve prompts with design specs and UI/UX vocabulary. Useful for design-to-code workflows and clarifying requests for visual output.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/enhance-prompt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/enhance-prompt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/enhance-prompt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/enhance-prompt",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "export-download-debugging",
          "relative_path": "skills/export-download-debugging",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
          "exists": true,
          "has_skill_md": true,
          "description": "Diagnose and fix browser, preview, or Electron export/download failures, especially image export issues involving Save As, Blob/Data URLs, the File System Access API, createWritable failures, and 0 KB files.",
          "description_zh": "Diagnose and fix browser, preview, or Electron export/download failures, especially image export issues involving Save As, Blob/Data URLs, the File System Access API, createWritable failures, and 0 KB files.",
          "description_en": "Diagnose and fix browser, preview, or Electron export/download failures, especially image export issues involving Save As, Blob/Data URLs, the File System Access API, createWritable failures, and 0 KB files.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/export-download-debugging",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/export-download-debugging",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/export-download-debugging",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/export-download-debugging",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-3d",
          "relative_path": "skills/fal-3d",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate 3D models from text or images via fal.ai. Useful for game assets, AR previews, product mockups, and concept sculpting.",
          "description_zh": "Generate 3D models from text or images via fal.ai. Useful for game assets, AR previews, product mockups, and concept sculpting.",
          "description_en": "Generate 3D models from text or images via fal.ai. Useful for game assets, AR previews, product mockups, and concept sculpting.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-3d",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-3d",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-generate",
          "relative_path": "skills/fal-generate",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate images and videos using fal.ai AI models. Production-grade catalogue covering Flux, SDXL, ideogram, and other community-hosted endpoints.",
          "description_zh": "Generate images and videos using fal.ai AI models. Production-grade catalogue covering Flux, SDXL, ideogram, and other community-hosted endpoints.",
          "description_en": "Generate images and videos using fal.ai AI models. Production-grade catalogue covering Flux, SDXL, ideogram, and other community-hosted endpoints.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-generate",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-image-edit",
          "relative_path": "skills/fal-image-edit",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
          "exists": true,
          "has_skill_md": true,
          "description": "AI-powered image editing with style transfer, background removal, object removal, and inpainting via fal.ai hosted models.",
          "description_zh": "AI-powered image editing with style transfer, background removal, object removal, and inpainting via fal.ai hosted models.",
          "description_en": "AI-powered image editing with style transfer, background removal, object removal, and inpainting via fal.ai hosted models.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-image-edit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-kling-o3",
          "relative_path": "skills/fal-kling-o3",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate images and videos with Kling O3 — Kling's most powerful model family — via fal.ai.",
          "description_zh": "Generate images and videos with Kling O3 — Kling's most powerful model family — via fal.ai.",
          "description_en": "Generate images and videos with Kling O3 — Kling's most powerful model family — via fal.ai.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-kling-o3",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-kling-o3",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-kling-o3",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-kling-o3",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-lip-sync",
          "relative_path": "skills/fal-lip-sync",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
          "exists": true,
          "has_skill_md": true,
          "description": "Create talking head videos and lip sync audio to video via fal.ai. Useful for explainer avatars, multilingual dubbing previews, and social cuts.",
          "description_zh": "Create talking head videos and lip sync audio to video via fal.ai. Useful for explainer avatars, multilingual dubbing previews, and social cuts.",
          "description_en": "Create talking head videos and lip sync audio to video via fal.ai. Useful for explainer avatars, multilingual dubbing previews, and social cuts.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-lip-sync",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-lip-sync",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-lip-sync",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-lip-sync",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-realtime",
          "relative_path": "skills/fal-realtime",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
          "exists": true,
          "has_skill_md": true,
          "description": "Real-time and streaming AI image generation via fal.ai. Suited for moodboard exploration, draft variations, and rapid creative iteration.",
          "description_zh": "Real-time and streaming AI image generation via fal.ai. Suited for moodboard exploration, draft variations, and rapid creative iteration.",
          "description_en": "Real-time and streaming AI image generation via fal.ai. Suited for moodboard exploration, draft variations, and rapid creative iteration.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-realtime",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-realtime",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-realtime",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-realtime",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-restore",
          "relative_path": "skills/fal-restore",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
          "exists": true,
          "has_skill_md": true,
          "description": "Restore and fix image quality — deblur, denoise, fix faces, and restore old documents using fal.ai's hosted restoration models.",
          "description_zh": "Restore and fix image quality — deblur, denoise, fix faces, and restore old documents using fal.ai's hosted restoration models.",
          "description_en": "Restore and fix image quality — deblur, denoise, fix faces, and restore old documents using fal.ai's hosted restoration models.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-restore",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-restore",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-restore",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-restore",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-train",
          "relative_path": "skills/fal-train",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
          "exists": true,
          "has_skill_md": true,
          "description": "Train custom AI models (LoRA) on fal.ai for personalized image generation tailored to a brand, character, or style.",
          "description_zh": "Train custom AI models (LoRA) on fal.ai for personalized image generation tailored to a brand, character, or style.",
          "description_en": "Train custom AI models (LoRA) on fal.ai for personalized image generation tailored to a brand, character, or style.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-train",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-train",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-train",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-train",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-tryon",
          "relative_path": "skills/fal-tryon",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
          "exists": true,
          "has_skill_md": true,
          "description": "Virtual try-on — see how clothes look on a person via fal.ai's hosted try-on models. Useful for ecommerce, lookbooks, and styling experiments.",
          "description_zh": "Virtual try-on — see how clothes look on a person via fal.ai's hosted try-on models. Useful for ecommerce, lookbooks, and styling experiments.",
          "description_en": "Virtual try-on — see how clothes look on a person via fal.ai's hosted try-on models. Useful for ecommerce, lookbooks, and styling experiments.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-tryon",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-tryon",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-tryon",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-tryon",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-upscale",
          "relative_path": "skills/fal-upscale",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
          "exists": true,
          "has_skill_md": true,
          "description": "Upscale and enhance image and video resolution using AI super-resolution models hosted on fal.ai.",
          "description_zh": "Upscale and enhance image and video resolution using AI super-resolution models hosted on fal.ai.",
          "description_en": "Upscale and enhance image and video resolution using AI super-resolution models hosted on fal.ai.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-upscale",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-upscale",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-upscale",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-upscale",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-video-edit",
          "relative_path": "skills/fal-video-edit",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
          "exists": true,
          "has_skill_md": true,
          "description": "Edit existing videos using AI — remix style, upscale, remove background, and add audio via fal.ai's hosted video models.",
          "description_zh": "Edit existing videos using AI — remix style, upscale, remove background, and add audio via fal.ai's hosted video models.",
          "description_en": "Edit existing videos using AI — remix style, upscale, remove background, and add audio via fal.ai's hosted video models.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-video-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-video-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-video-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-video-edit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "fal-vision",
          "relative_path": "skills/fal-vision",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
          "exists": true,
          "has_skill_md": true,
          "description": "Analyze images — segment objects, detect, run OCR, describe, and answer visual questions via fal.ai vision models.",
          "description_zh": "Analyze images — segment objects, detect, run OCR, describe, and answer visual questions via fal.ai vision models.",
          "description_en": "Analyze images — segment objects, detect, run OCR, describe, and answer visual questions via fal.ai vision models.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/fal-vision",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/fal-vision",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/fal-vision",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/fal-vision",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "faq-page",
          "relative_path": "skills/faq-page",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
          "exists": true,
          "has_skill_md": true,
          "description": "A Frequently Asked Questions (FAQ) page with collapsible accordion sections, search functionality, and category filtering. Use when the brief asks for \"FAQ\", \"help center\", \"questions\", or \"support page\".",
          "description_zh": "A Frequently Asked Questions (FAQ) page with collapsible accordion sections, search functionality, and category filtering. Use when the brief asks for \"FAQ\", \"help center\", \"questions\", or \"support page\".",
          "description_en": "A Frequently Asked Questions (FAQ) page with collapsible accordion sections, search functionality, and category filtering. Use when the brief asks for \"FAQ\", \"help center\", \"questions\", or \"support page\".",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/faq-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/faq-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/faq-page",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/faq-page",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "field-notes-editorial-template",
          "relative_path": "skills/field-notes-editorial-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Editorial \"Field Notes\" report template with soft paper background, serif hero typography, rounded pastel insight cards, and a retention chart panel. Use when users ask for a premium magazine-style business report, board memo one-pager, or ",
          "description_zh": "Editorial \"Field Notes\" report template with soft paper background, serif hero typography, rounded pastel insight cards, and a retention chart panel. Use when users ask for a premium magazine-style business report, board memo one-pager, or",
          "description_en": "Editorial \"Field Notes\" report template with soft paper background, serif hero typography, rounded pastel insight cards, and a retention chart panel. Use when users ask for a premium magazine-style business report, board memo one-pager, or",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/field-notes-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/field-notes-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/field-notes-editorial-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/field-notes-editorial-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-code-connect-components",
          "relative_path": "skills/figma-code-connect-components",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
          "exists": true,
          "has_skill_md": true,
          "description": "Connect Figma design components to code components using Code Connect so design-system updates flow into the codebase automatically.",
          "description_zh": "Connect Figma design components to code components using Code Connect so design-system updates flow into the codebase automatically.",
          "description_en": "Connect Figma design components to code components using Code Connect so design-system updates flow into the codebase automatically.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-code-connect-components",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-code-connect-components",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-code-connect-components",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-code-connect-components",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-create-design-system-rules",
          "relative_path": "skills/figma-create-design-system-rules",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate project-specific design system rules for Figma-to-code workflows. Useful for capturing tokens, naming, and lint rules in one source.",
          "description_zh": "Generate project-specific design system rules for Figma-to-code workflows. Useful for capturing tokens, naming, and lint rules in one source.",
          "description_en": "Generate project-specific design system rules for Figma-to-code workflows. Useful for capturing tokens, naming, and lint rules in one source.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-create-design-system-rules",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-create-design-system-rules",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-create-design-system-rules",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-design-system-rules",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-create-new-file",
          "relative_path": "skills/figma-create-new-file",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
          "exists": true,
          "has_skill_md": true,
          "description": "Create a new blank Figma Design or FigJam file. Useful as the first step in scripted design-system or workshop workflows.",
          "description_zh": "Create a new blank Figma Design or FigJam file. Useful as the first step in scripted design-system or workshop workflows.",
          "description_en": "Create a new blank Figma Design or FigJam file. Useful as the first step in scripted design-system or workshop workflows.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-create-new-file",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-create-new-file",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-create-new-file",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-create-new-file",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-generate-design",
          "relative_path": "skills/figma-generate-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
          "exists": true,
          "has_skill_md": true,
          "description": "Build or update screens in Figma from code or description using design system components. Translate app pages into Figma using design tokens.",
          "description_zh": "Build or update screens in Figma from code or description using design system components. Translate app pages into Figma using design tokens.",
          "description_en": "Build or update screens in Figma from code or description using design system components. Translate app pages into Figma using design tokens.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-generate-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-generate-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-generate-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-generate-library",
          "relative_path": "skills/figma-generate-library",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
          "exists": true,
          "has_skill_md": true,
          "description": "Build or update a professional-grade design system library in Figma from a codebase. Useful for keeping the Figma source of truth in sync with shipped components.",
          "description_zh": "Build or update a professional-grade design system library in Figma from a codebase. Useful for keeping the Figma source of truth in sync with shipped components.",
          "description_en": "Build or update a professional-grade design system library in Figma from a codebase. Useful for keeping the Figma source of truth in sync with shipped components.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-generate-library",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-generate-library",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-generate-library",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-generate-library",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-implement-design",
          "relative_path": "skills/figma-implement-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
          "exists": true,
          "has_skill_md": true,
          "description": "Translate Figma designs into production-ready code with 1:1 visual fidelity. Useful for handing off Figma frames straight to a frontend agent.",
          "description_zh": "Translate Figma designs into production-ready code with 1:1 visual fidelity. Useful for handing off Figma frames straight to a frontend agent.",
          "description_en": "Translate Figma designs into production-ready code with 1:1 visual fidelity. Useful for handing off Figma frames straight to a frontend agent.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-implement-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-implement-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-implement-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-implement-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "figma-use",
          "relative_path": "skills/figma-use",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
          "exists": true,
          "has_skill_md": true,
          "description": "Run Figma Plugin API scripts for canvas writes, inspections, variables, and design-system work. Prerequisite for every other Figma skill in this catalogue.",
          "description_zh": "Run Figma Plugin API scripts for canvas writes, inspections, variables, and design-system work. Prerequisite for every other Figma skill in this catalogue.",
          "description_en": "Run Figma Plugin API scripts for canvas writes, inspections, variables, and design-system work. Prerequisite for every other Figma skill in this catalogue.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/figma-use",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/figma-use",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/figma-use",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/figma-use",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "flutter-animating-apps",
          "relative_path": "skills/flutter-animating-apps",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
          "exists": true,
          "has_skill_md": true,
          "description": "Implement animated effects, transitions, and motion in Flutter apps. Useful for native iOS/Android motion design.",
          "description_zh": "Implement animated effects, transitions, and motion in Flutter apps. Useful for native iOS/Android motion design.",
          "description_en": "Implement animated effects, transitions, and motion in Flutter apps. Useful for native iOS/Android motion design.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/flutter-animating-apps",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/flutter-animating-apps",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/flutter-animating-apps",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/flutter-animating-apps",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frontend-design",
          "relative_path": "skills/frontend-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
          "exists": true,
          "has_skill_md": true,
          "description": "Create distinctive, production-grade frontend interfaces with strong visual direction, polished typography, considered layout, and working HTML/CSS/JS or framework code. Use for websites, landing pages, dashboards, React components, applica",
          "description_zh": "Create distinctive, production-grade frontend interfaces with strong visual direction, polished typography, considered layout, and working HTML/CSS/JS or framework code. Use for websites, landing pages, dashboards, React components, applica",
          "description_en": "Create distinctive, production-grade frontend interfaces with strong visual direction, polished typography, considered layout, and working HTML/CSS/JS or framework code. Use for websites, landing pages, dashboards, React components, applica",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frontend-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frontend-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frontend-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frontend-dev",
          "relative_path": "skills/frontend-dev",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
          "exists": true,
          "has_skill_md": true,
          "description": "Full-stack frontend with cinematic animations, AI-generated media via MiniMax API, and generative art. Useful for hero pages and showcase sites.",
          "description_zh": "Full-stack frontend with cinematic animations, AI-generated media via MiniMax API, and generative art. Useful for hero pages and showcase sites.",
          "description_en": "Full-stack frontend with cinematic animations, AI-generated media via MiniMax API, and generative art. Useful for hero pages and showcase sites.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frontend-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frontend-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frontend-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-dev",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "frontend-skill",
          "relative_path": "skills/frontend-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Create visually strong landing pages, websites, and app UIs with restrained composition. OpenAI's production frontend playbook.",
          "description_zh": "Create visually strong landing pages, websites, and app UIs with restrained composition. OpenAI's production frontend playbook.",
          "description_en": "Create visually strong landing pages, websites, and app UIs with restrained composition. OpenAI's production frontend playbook.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/frontend-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/frontend-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/frontend-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/frontend-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "full-page-screenshot",
          "relative_path": "skills/full-page-screenshot",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
          "exists": true,
          "has_skill_md": true,
          "description": "Capture full-page screenshots of web pages via Chrome DevTools Protocol with zero dependencies. Useful for portfolios, case studies, and audit reports.",
          "description_zh": "Capture full-page screenshots of web pages via Chrome DevTools Protocol with zero dependencies. Useful for portfolios, case studies, and audit reports.",
          "description_en": "Capture full-page screenshots of web pages via Chrome DevTools Protocol with zero dependencies. Useful for portfolios, case studies, and audit reports.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/full-page-screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/full-page-screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/full-page-screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/full-page-screenshot",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gif-sticker-maker",
          "relative_path": "skills/gif-sticker-maker",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
          "exists": true,
          "has_skill_md": true,
          "description": "Convert photos into animated GIF stickers in Funko Pop / Pop Mart style via the MiniMax API. Useful for personalized chat stickers and avatar packs.",
          "description_zh": "Convert photos into animated GIF stickers in Funko Pop / Pop Mart style via the MiniMax API. Useful for personalized chat stickers and avatar packs.",
          "description_en": "Convert photos into animated GIF stickers in Funko Pop / Pop Mart style via the MiniMax API. Useful for personalized chat stickers and avatar packs.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gif-sticker-maker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gif-sticker-maker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gif-sticker-maker",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gif-sticker-maker",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gpt-tasteskill",
          "relative_path": "skills/gpt-tasteskill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
          "exists": true,
          "has_skill_md": true,
          "description": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning,",
          "description_zh": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning,",
          "description_en": "Elite UX/UI & Advanced GSAP Motion Engineer. Enforces Python-driven true randomization for layout variance, strict AIDA page structure, wide editorial typography (bans 6-line wraps), gapless bento grids, strict GSAP ScrollTriggers (pinning,",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gpt-tasteskill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gpt-tasteskill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gpt-tasteskill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gpt-tasteskill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-core",
          "relative_path": "skills/gsap-core",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Use when the user asks for a JavaScript animation library, animation in React/V",
          "description_zh": "Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Use when the user asks for a JavaScript animation library, animation in React/V",
          "description_en": "Official GSAP skill for the core API — gsap.to(), from(), fromTo(), easing, duration, stagger, defaults, gsap.matchMedia() (responsive, prefers-reduced-motion). Use when the user asks for a JavaScript animation library, animation in React/V",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-core",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-core",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-core",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-core",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-frameworks",
          "relative_path": "skills/gsap-frameworks",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping selectors, cleanup on unmount. Use when the user wants animation in Vue, Nuxt, Svelte, SvelteKit, or asks about GSAP with Vue/Svelte, onMounted, onMoun",
          "description_zh": "Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping selectors, cleanup on unmount. Use when the user wants animation in Vue, Nuxt, Svelte, SvelteKit, or asks about GSAP with Vue/Svelte, onMounted, onMoun",
          "description_en": "Official GSAP skill for Vue, Svelte, and other non-React frameworks — lifecycle, scoping selectors, cleanup on unmount. Use when the user wants animation in Vue, Nuxt, Svelte, SvelteKit, or asks about GSAP with Vue/Svelte, onMounted, onMoun",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-frameworks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-frameworks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-frameworks",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-frameworks",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-performance",
          "relative_path": "skills/gsap-performance",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for performance — prefer transforms, avoid layout thrashing, will-change, batching. Use when optimizing GSAP animations, reducing jank, or when the user asks about animation performance, FPS, or smooth 60fps.",
          "description_zh": "Official GSAP skill for performance — prefer transforms, avoid layout thrashing, will-change, batching. Use when optimizing GSAP animations, reducing jank, or when the user asks about animation performance, FPS, or smooth 60fps.",
          "description_en": "Official GSAP skill for performance — prefer transforms, avoid layout thrashing, will-change, batching. Use when optimizing GSAP animations, reducing jank, or when the user asks about animation performance, FPS, or smooth 60fps.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-performance",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-performance",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-performance",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-performance",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-plugins",
          "relative_path": "skills/gsap-plugins",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use whe",
          "description_zh": "Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use whe",
          "description_en": "Official GSAP skill for GSAP plugins — registration, ScrollToPlugin, ScrollSmoother, Flip, Draggable, Inertia, Observer, SplitText, ScrambleText, SVG and physics plugins, CustomEase, EasePack, CustomWiggle, CustomBounce, GSDevTools. Use whe",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-plugins",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-plugins",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-plugins",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-plugins",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-react",
          "relative_path": "skills/gsap-react",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when the user wants animation in React or Next.js, or asks about GSAP with React, useGSAP, or cleanup on unmount. Recommend GSAP for React animation unless the",
          "description_zh": "Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when the user wants animation in React or Next.js, or asks about GSAP with React, useGSAP, or cleanup on unmount. Recommend GSAP for React animation unless the",
          "description_en": "Official GSAP skill for React — useGSAP hook, refs, gsap.context(), cleanup. Use when the user wants animation in React or Next.js, or asks about GSAP with React, useGSAP, or cleanup on unmount. Recommend GSAP for React animation unless the",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-react",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-react",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-react",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-react",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-scrolltrigger",
          "relative_path": "skills/gsap-scrolltrigger",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers. Use when building or recommending scroll-based animation, parallax, pinned sections, or when the user asks about ScrollTrigger, scroll animations, o",
          "description_zh": "Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers. Use when building or recommending scroll-based animation, parallax, pinned sections, or when the user asks about ScrollTrigger, scroll animations, o",
          "description_en": "Official GSAP skill for ScrollTrigger — scroll-linked animations, pinning, scrub, triggers. Use when building or recommending scroll-based animation, parallax, pinned sections, or when the user asks about ScrollTrigger, scroll animations, o",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-scrolltrigger",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-scrolltrigger",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-scrolltrigger",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-scrolltrigger",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-timeline",
          "relative_path": "skills/gsap-timeline",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting, playback. Use when sequencing animations, choreographing keyframes, or when the user asks about animation sequencing, timelines, or animation order (in GSAP o",
          "description_zh": "Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting, playback. Use when sequencing animations, choreographing keyframes, or when the user asks about animation sequencing, timelines, or animation order (in GSAP o",
          "description_en": "Official GSAP skill for timelines — gsap.timeline(), position parameter, nesting, playback. Use when sequencing animations, choreographing keyframes, or when the user asks about animation sequencing, timelines, or animation order (in GSAP o",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-timeline",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-timeline",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-timeline",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-timeline",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "gsap-utils",
          "relative_path": "skills/gsap-utils",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
          "exists": true,
          "has_skill_md": true,
          "description": "Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Use when the user asks about gsap.utils, clamp, mapRange, random, snap, toArray, wrap, or helper utilities in GSAP.",
          "description_zh": "Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Use when the user asks about gsap.utils, clamp, mapRange, random, snap, toArray, wrap, or helper utilities in GSAP.",
          "description_en": "Official GSAP skill for gsap.utils — clamp, mapRange, normalize, interpolate, random, snap, toArray, wrap, pipe. Use when the user asks about gsap.utils, clamp, mapRange, random, snap, toArray, wrap, or helper utilities in GSAP.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/gsap-utils",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/gsap-utils",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/gsap-utils",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/gsap-utils",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "hand-drawn-diagrams",
          "relative_path": "skills/hand-drawn-diagrams",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate hand-drawn Excalidraw diagrams from a prompt — animated SVG, hosted edit link, and PNG export. Works with Claude Code, Codex, Gemini CLI, and any agent supporting standard skill paths.",
          "description_zh": "Generate hand-drawn Excalidraw diagrams from a prompt — animated SVG, hosted edit link, and PNG export. Works with Claude Code, Codex, Gemini CLI, and any agent supporting standard skill paths.",
          "description_en": "Generate hand-drawn Excalidraw diagrams from a prompt — animated SVG, hosted edit link, and PNG export. Works with Claude Code, Codex, Gemini CLI, and any agent supporting standard skill paths.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/hand-drawn-diagrams",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/hand-drawn-diagrams",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/hand-drawn-diagrams",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/hand-drawn-diagrams",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "html-ppt-retro-quarterly-review",
          "relative_path": "skills/html-ppt-retro-quarterly-review",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
          "exists": true,
          "has_skill_md": true,
          "description": "Retro Quarterly Review presentation template in a bold blue + orange editorial language. Use when users ask for a high-impact quarterly review / roadmap deck with heavyweight slab headlines, clean cream paper sections, structured grids, and",
          "description_zh": "Retro Quarterly Review presentation template in a bold blue + orange editorial language. Use when users ask for a high-impact quarterly review / roadmap deck with heavyweight slab headlines, clean cream paper sections, structured grids, and",
          "description_en": "Retro Quarterly Review presentation template in a bold blue + orange editorial language. Use when users ask for a high-impact quarterly review / roadmap deck with heavyweight slab headlines, clean cream paper sections, structured grids, and",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/html-ppt-retro-quarterly-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/html-ppt-retro-quarterly-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/html-ppt-retro-quarterly-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/html-ppt-retro-quarterly-review",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "image-enhancer",
          "relative_path": "skills/image-enhancer",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
          "exists": true,
          "has_skill_md": true,
          "description": "Improve image and screenshot quality by enhancing resolution, sharpness, and clarity for professional presentations and documentation.",
          "description_zh": "Improve image and screenshot quality by enhancing resolution, sharpness, and clarity for professional presentations and documentation.",
          "description_en": "Improve image and screenshot quality by enhancing resolution, sharpness, and clarity for professional presentations and documentation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/image-enhancer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/image-enhancer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/image-enhancer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-enhancer",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "image-to-code-skill",
          "relative_path": "skills/image-to-code-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In Codex, it must prefer",
          "description_zh": "Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In Codex, it must prefer",
          "description_en": "Elite website image-to-code skill for Codex. For visually important web tasks, it must first generate the design image(s) itself, deeply analyze them, then implement the website to match them as closely as possible. In Codex, it must prefer",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/image-to-code-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/image-to-code-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/image-to-code-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/image-to-code-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "imagegen",
          "relative_path": "skills/imagegen",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate and edit images using OpenAI's Image API for project assets — UI mockups, icons, illustrations, social cards, and visual references.",
          "description_zh": "Generate and edit images using OpenAI's Image API for project assets — UI mockups, icons, illustrations, social cards, and visual references.",
          "description_en": "Generate and edit images using OpenAI's Image API for project assets — UI mockups, icons, illustrations, social cards, and visual references.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/imagegen",
              "exists": false,
              "is_symlink": false,
              "target": null,
              "resolved_target": null,
              "ok": true,
              "status": "system_owned"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/imagegen",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/imagegen",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "imagegen-frontend-mobile",
          "relative_path": "skills/imagegen-frontend-mobile",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
          "exists": true,
          "has_skill_md": true,
          "description": "Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, strong multi-screen c",
          "description_zh": "Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, strong multi-screen c",
          "description_en": "Elite mobile app image-generation skill for creating premium, app-native screen concepts and flows. Designed for iOS, Android, and cross-platform mobile products. Prioritizes clean hierarchy, comfortably readable text, strong multi-screen c",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/imagegen-frontend-mobile",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/imagegen-frontend-mobile",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/imagegen-frontend-mobile",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-mobile",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "imagegen-frontend-web",
          "relative_path": "skills/imagegen-frontend-web",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
          "exists": true,
          "has_skill_md": true,
          "description": "Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections produces 8 images. Neve",
          "description_zh": "Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections produces 8 images. Neve",
          "description_en": "Elite frontend image-direction skill for generating premium, conversion-aware website design references. CRITICAL OUTPUT RULE — generate ONE separate horizontal image FOR EVERY section. A landing page with 8 sections produces 8 images. Neve",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/imagegen-frontend-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/imagegen-frontend-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/imagegen-frontend-web",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagegen-frontend-web",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "imagen",
          "relative_path": "skills/imagen",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate images using Google Gemini's image generation API for UI mockups, icons, illustrations, and visual assets.",
          "description_zh": "Generate images using Google Gemini's image generation API for UI mockups, icons, illustrations, and visual assets.",
          "description_en": "Generate images using Google Gemini's image generation API for UI mockups, icons, illustrations, and visual assets.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/imagen",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/imagen",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/imagen",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/imagen",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "impeccable-design-polish",
          "relative_path": "skills/impeccable-design-polish",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
          "exists": true,
          "has_skill_md": true,
          "description": "Follow-up design polish skill inspired by Impeccable. Use after a web or HTML artifact exists to audit, critique, polish, animate, harden, and prepare the page for a live/share pass.",
          "description_zh": "Follow-up design polish skill inspired by Impeccable. Use after a web or HTML artifact exists to audit, critique, polish, animate, harden, and prepare the page for a live/share pass.",
          "description_en": "Follow-up design polish skill inspired by Impeccable. Use after a web or HTML artifact exists to audit, critique, polish, animate, harden, and prepare the page for a live/share pass.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/impeccable-design-polish",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/impeccable-design-polish",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/impeccable-design-polish",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/impeccable-design-polish",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "library-curator",
          "relative_path": "skills/library-curator",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
          "exists": true,
          "has_skill_md": true,
          "description": "Search the OD Library (the global asset registry) and apply matching assets into the current project mid-task. Use when the user asks to reuse an image they captured/uploaded earlier, \"pull a logo/screenshot from my library\", or to find and",
          "description_zh": "Search the OD Library (the global asset registry) and apply matching assets into the current project mid-task. Use when the user asks to reuse an image they captured/uploaded earlier, \"pull a logo/screenshot from my library\", or to find and",
          "description_en": "Search the OD Library (the global asset registry) and apply matching assets into the current project mid-task. Use when the user asks to reuse an image they captured/uploaded earlier, \"pull a logo/screenshot from my library\", or to find and",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/library-curator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/library-curator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/library-curator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/library-curator",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "login-flow",
          "relative_path": "skills/login-flow",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
          "exists": true,
          "has_skill_md": true,
          "description": "Mobile login and authentication flow screens",
          "description_zh": "Mobile login and authentication flow screens",
          "description_en": "Mobile login and authentication flow screens",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/login-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/login-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/login-flow",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/login-flow",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "marketing-psychology",
          "relative_path": "skills/marketing-psychology",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
          "exists": true,
          "has_skill_md": true,
          "description": "Apply psychological principles and behavioral science to copy and design. Useful for tightening hooks, framing, and pricing presentation.",
          "description_zh": "Apply psychological principles and behavioral science to copy and design. Useful for tightening hooks, framing, and pricing presentation.",
          "description_en": "Apply psychological principles and behavioral science to copy and design. Useful for tightening hooks, framing, and pricing presentation.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/marketing-psychology",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/marketing-psychology",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/marketing-psychology",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/marketing-psychology",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "minimalist-skill",
          "relative_path": "skills/minimalist-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.",
          "description_zh": "Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.",
          "description_en": "Clean editorial-style interfaces. Warm monochrome palette, typographic contrast, flat bento grids, muted pastels. No gradients, no heavy shadows.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/minimalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/minimalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/minimalist-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimalist-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "minimax-docx",
          "relative_path": "skills/minimax-docx",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
          "exists": true,
          "has_skill_md": true,
          "description": "Professional DOCX document creation and editing using OpenXML SDK. Useful for branded reports, polished proposals, and template-based authoring.",
          "description_zh": "Professional DOCX document creation and editing using OpenXML SDK. Useful for branded reports, polished proposals, and template-based authoring.",
          "description_en": "Professional DOCX document creation and editing using OpenXML SDK. Useful for branded reports, polished proposals, and template-based authoring.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/minimax-docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/minimax-docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/minimax-docx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-docx",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "minimax-pdf",
          "relative_path": "skills/minimax-pdf",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate, fill, and reformat PDFs with a token-based design system and 15 cover styles. Useful for branded PDFs, e-guides, and reports.",
          "description_zh": "Generate, fill, and reformat PDFs with a token-based design system and 15 cover styles. Useful for branded PDFs, e-guides, and reports.",
          "description_en": "Generate, fill, and reformat PDFs with a token-based design system and 15 cover styles. Useful for branded PDFs, e-guides, and reports.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/minimax-pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/minimax-pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/minimax-pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/minimax-pdf",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "nanobanana-ppt",
          "relative_path": "skills/nanobanana-ppt",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
          "exists": true,
          "has_skill_md": true,
          "description": "AI-powered PPT generation with document analysis and styled images via the NanoBanana stack. Combines image generation with structured deck output.",
          "description_zh": "AI-powered PPT generation with document analysis and styled images via the NanoBanana stack. Combines image generation with structured deck output.",
          "description_en": "AI-powered PPT generation with document analysis and styled images via the NanoBanana stack. Combines image generation with structured deck output.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/nanobanana-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/nanobanana-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/nanobanana-ppt",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/nanobanana-ppt",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "output-skill",
          "relative_path": "skills/output-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.",
          "description_zh": "Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.",
          "description_en": "Overrides default LLM truncation behavior. Enforces complete code generation, bans placeholder patterns, and handles token-limit splits cleanly. Apply to any task requiring exhaustive, unabridged output.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/output-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/output-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/output-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/output-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "paywall-upgrade-cro",
          "relative_path": "skills/paywall-upgrade-cro",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
          "exists": true,
          "has_skill_md": true,
          "description": "Design and optimize upgrade screens, paywalls, and upsell modals. Useful for SaaS conversion design and pricing-page experiments.",
          "description_zh": "Design and optimize upgrade screens, paywalls, and upsell modals. Useful for SaaS conversion design and pricing-page experiments.",
          "description_en": "Design and optimize upgrade screens, paywalls, and upsell modals. Useful for SaaS conversion design and pricing-page experiments.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/paywall-upgrade-cro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/paywall-upgrade-cro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/paywall-upgrade-cro",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/paywall-upgrade-cro",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pdf",
          "relative_path": "skills/pdf",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
          "exists": true,
          "has_skill_md": true,
          "description": "Extract text, create PDFs, and handle forms. Useful for press releases, branded one-pagers, and printable design deliverables.",
          "description_zh": "Extract text, create PDFs, and handle forms. Useful for press releases, branded one-pagers, and printable design deliverables.",
          "description_en": "Extract text, create PDFs, and handle forms. Useful for press releases, branded one-pagers, and printable design deliverables.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pdf",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pdf",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pixelbin-media",
          "relative_path": "skills/pixelbin-media",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate and edit images and videos with an 85+ API portfolio and build visually appealing website pages via Pixelbin.",
          "description_zh": "Generate and edit images and videos with an 85+ API portfolio and build visually appealing website pages via Pixelbin.",
          "description_en": "Generate and edit images and videos with an 85+ API portfolio and build visually appealing website pages via Pixelbin.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pixelbin-media",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pixelbin-media",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pixelbin-media",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pixelbin-media",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "plan-design-review",
          "relative_path": "skills/plan-design-review",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
          "exists": true,
          "has_skill_md": true,
          "description": "Senior Designer review: rates each design dimension 0-10, explains what a 10 looks like, and flags AI Slop signals. Useful as a gate before merging UI work.",
          "description_zh": "Senior Designer review: rates each design dimension 0-10, explains what a 10 looks like, and flags AI Slop signals. Useful as a gate before merging UI work.",
          "description_en": "Senior Designer review: rates each design dimension 0-10, explains what a 10 looks like, and flags AI Slop signals. Useful as a gate before merging UI work.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/plan-design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/plan-design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/plan-design-review",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/plan-design-review",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "platform-design",
          "relative_path": "skills/platform-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
          "exists": true,
          "has_skill_md": true,
          "description": "300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for cross-platform apps. Useful when shipping a single design across iOS, Android, and the web.",
          "description_zh": "300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for cross-platform apps. Useful when shipping a single design across iOS, Android, and the web.",
          "description_en": "300+ design rules from Apple HIG, Material Design 3, and WCAG 2.2 for cross-platform apps. Useful when shipping a single design across iOS, Android, and the web.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/platform-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/platform-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/platform-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/platform-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pptx",
          "relative_path": "skills/pptx",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
          "exists": true,
          "has_skill_md": true,
          "description": "Read, generate, and adjust PowerPoint slides, layouts, and templates. Useful for executive decks, training material, and product reviews.",
          "description_zh": "Read, generate, and adjust PowerPoint slides, layouts, and templates. Useful for executive decks, training material, and product reviews.",
          "description_en": "Read, generate, and adjust PowerPoint slides, layouts, and templates. Useful for executive decks, training material, and product reviews.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pptx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pptx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pptx",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pptx-generator",
          "relative_path": "skills/pptx-generator",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
          "exists": true,
          "has_skill_md": true,
          "description": "Create and edit PowerPoint presentations from scratch with PptxGenJS — MiniMax's production-tested deck pipeline.",
          "description_zh": "Create and edit PowerPoint presentations from scratch with PptxGenJS — MiniMax's production-tested deck pipeline.",
          "description_en": "Create and edit PowerPoint presentations from scratch with PptxGenJS — MiniMax's production-tested deck pipeline.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pptx-generator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pptx-generator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pptx-generator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pptx-generator",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "pr-feedback-quality-gate",
          "relative_path": "skills/pr-feedback-quality-gate",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
          "exists": true,
          "has_skill_md": true,
          "description": "Safely track pull request feedback, resolve review comments or merge conflicts, validate fixes, and use a read-only cross-review before committing or pushing follow-up changes.",
          "description_zh": "Safely track pull request feedback, resolve review comments or merge conflicts, validate fixes, and use a read-only cross-review before committing or pushing follow-up changes.",
          "description_en": "Safely track pull request feedback, resolve review comments or merge conflicts, validate fixes, and use a read-only cross-review before committing or pushing follow-up changes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/pr-feedback-quality-gate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/pr-feedback-quality-gate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/pr-feedback-quality-gate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/pr-feedback-quality-gate",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "redesign-skill",
          "relative_path": "skills/redesign-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.",
          "description_zh": "Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.",
          "description_en": "Upgrades existing websites and apps to premium quality. Audits current design, identifies generic AI patterns, and applies high-end design standards without breaking functionality. Works with any CSS framework or vanilla CSS.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/redesign-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/redesign-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/redesign-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/redesign-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "reference-design-contract",
          "relative_path": "skills/reference-design-contract",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
          "exists": true,
          "has_skill_md": true,
          "description": "Turn vague taste, screenshots, URLs, product notes, or \"make it feel like this\" references into a grounded DESIGN.md plus an implementation handoff. Use it before prototypes, decks, redesigns, or image remix work when the user needs a reusa",
          "description_zh": "Turn vague taste, screenshots, URLs, product notes, or \"make it feel like this\" references into a grounded DESIGN.md plus an implementation handoff. Use it before prototypes, decks, redesigns, or image remix work when the user needs a reusa",
          "description_en": "Turn vague taste, screenshots, URLs, product notes, or \"make it feel like this\" references into a grounded DESIGN.md plus an implementation handoff. Use it before prototypes, decks, redesigns, or image remix work when the user needs a reusa",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/reference-design-contract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/reference-design-contract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/reference-design-contract",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/reference-design-contract",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "release-notes-one-pager",
          "relative_path": "skills/release-notes-one-pager",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
          "exists": true,
          "has_skill_md": true,
          "description": "Release notes one-page HTML with highlights, Added, Fixed, Breaking changes, Known issues, and Upgrade note. Writes explicit \"None\" style sections whenever the user does not provide details.",
          "description_zh": "Release notes one-page HTML with highlights, Added, Fixed, Breaking changes, Known issues, and Upgrade note. Writes explicit \"None\" style sections whenever the user does not provide details.",
          "description_en": "Release notes one-page HTML with highlights, Added, Fixed, Breaking changes, Known issues, and Upgrade note. Writes explicit \"None\" style sections whenever the user does not provide details.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/release-notes-one-pager",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/release-notes-one-pager",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/release-notes-one-pager",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/release-notes-one-pager",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "remotion",
          "relative_path": "skills/remotion",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
          "exists": true,
          "has_skill_md": true,
          "description": "Programmatic video creation with React. Useful for branded explainers, social cuts, dashboards-to-video, and reproducible motion graphics.",
          "description_zh": "Programmatic video creation with React. Useful for branded explainers, social cuts, dashboards-to-video, and reproducible motion graphics.",
          "description_en": "Programmatic video creation with React. Useful for branded explainers, social cuts, dashboards-to-video, and reproducible motion graphics.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/remotion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/remotion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/remotion",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/remotion",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "replicate",
          "relative_path": "skills/replicate",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
          "exists": true,
          "has_skill_md": true,
          "description": "Discover, compare, and run AI models using Replicate's API. Strong fit for image, audio, and video generation pipelines that swap models frequently.",
          "description_zh": "Discover, compare, and run AI models using Replicate's API. Strong fit for image, audio, and video generation pipelines that swap models frequently.",
          "description_en": "Discover, compare, and run AI models using Replicate's API. Strong fit for image, audio, and video generation pipelines that swap models frequently.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/replicate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/replicate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/replicate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/replicate",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "research-decision-room",
          "relative_path": "skills/research-decision-room",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
          "exists": true,
          "has_skill_md": true,
          "description": "Turn messy user research notes, interviews, support tickets, surveys, and product context into an evidence-backed decision room: a single HTML artifact with an evidence ledger, theme map, confidence heatmap, opportunity matrix, decision mem",
          "description_zh": "Turn messy user research notes, interviews, support tickets, surveys, and product context into an evidence-backed decision room: a single HTML artifact with an evidence ledger, theme map, confidence heatmap, opportunity matrix, decision mem",
          "description_en": "Turn messy user research notes, interviews, support tickets, surveys, and product context into an evidence-backed decision room: a single HTML artifact with an evidence ledger, theme map, confidence heatmap, opportunity matrix, decision mem",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/research-decision-room",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/research-decision-room",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/research-decision-room",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/research-decision-room",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "screenshot",
          "relative_path": "skills/screenshot",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
          "exists": true,
          "has_skill_md": true,
          "description": "Capture desktop, app windows, or pixel regions across OS platforms. Useful for marketing screenshots, design reviews, and bug reports.",
          "description_zh": "Capture desktop, app windows, or pixel regions across OS platforms. Useful for marketing screenshots, design reviews, and bug reports.",
          "description_en": "Capture desktop, app windows, or pixel regions across OS platforms. Useful for marketing screenshots, design reviews, and bug reports.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/screenshot",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshot",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "screenshots-marketing",
          "relative_path": "skills/screenshots-marketing",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate marketing screenshots with Playwright. Useful for landing-page hero shots, App Store screenshots, and changelog visuals.",
          "description_zh": "Generate marketing screenshots with Playwright. Useful for landing-page hero shots, App Store screenshots, and changelog visuals.",
          "description_en": "Generate marketing screenshots with Playwright. Useful for landing-page hero shots, App Store screenshots, and changelog visuals.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/screenshots-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/screenshots-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/screenshots-marketing",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/screenshots-marketing",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "shadcn-ui",
          "relative_path": "skills/shadcn-ui",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
          "exists": true,
          "has_skill_md": true,
          "description": "Build UI components with shadcn/ui. Pairs with the Stitch design loop to ship structured, accessible components quickly.",
          "description_zh": "Build UI components with shadcn/ui. Pairs with the Stitch design loop to ship structured, accessible components quickly.",
          "description_en": "Build UI components with shadcn/ui. Pairs with the Stitch design loop to ship structured, accessible components quickly.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/shadcn-ui",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/shadcn-ui",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/shadcn-ui",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shadcn-ui",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "shader-dev",
          "relative_path": "skills/shader-dev",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
          "exists": true,
          "has_skill_md": true,
          "description": "GLSL shader techniques for ray marching, fluid simulation, particle systems, and procedural generation. Useful for hero visuals and motion stills.",
          "description_zh": "GLSL shader techniques for ray marching, fluid simulation, particle systems, and procedural generation. Useful for hero visuals and motion stills.",
          "description_en": "GLSL shader techniques for ray marching, fluid simulation, particle systems, and procedural generation. Useful for hero visuals and motion stills.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/shader-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/shader-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/shader-dev",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/shader-dev",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "slack-gif-creator",
          "relative_path": "skills/slack-gif-creator",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
          "exists": true,
          "has_skill_md": true,
          "description": "Create animated GIFs optimized for Slack with validators for size constraints and composable animation primitives.",
          "description_zh": "Create animated GIFs optimized for Slack with validators for size constraints and composable animation primitives.",
          "description_en": "Create animated GIFs optimized for Slack with validators for size constraints and composable animation primitives.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/slack-gif-creator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/slack-gif-creator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/slack-gif-creator",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/slack-gif-creator",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "slides",
          "relative_path": "skills/slides",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/slides",
          "exists": true,
          "has_skill_md": true,
          "description": "Create and edit .pptx presentation decks with PptxGenJS. Useful for sales decks, kickoff briefs, and design-system showcases.",
          "description_zh": "Create and edit .pptx presentation decks with PptxGenJS. Useful for sales decks, kickoff briefs, and design-system showcases.",
          "description_en": "Create and edit .pptx presentation decks with PptxGenJS. Useful for sales decks, kickoff briefs, and design-system showcases.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/slides",
              "exists": false,
              "is_symlink": false,
              "target": null,
              "resolved_target": null,
              "ok": false,
              "status": "missing"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/slides",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/slides",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/slides",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/slides",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 2,
          "expected_clients": 3
        },
        {
          "name": "soft-skill",
          "relative_path": "skills/soft-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
          "description_zh": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
          "description_en": "Teaches the AI to design like a high-end agency. Defines the exact fonts, spacing, shadows, card structures, and animations that make a website feel expensive. Blocks all the common defaults that make AI designs look cheap or generic.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/soft-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/soft-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/soft-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/soft-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "sora",
          "relative_path": "skills/sora",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate, remix, and manage short video clips via OpenAI's Sora API. Useful for cinematic shots, b-roll, and rapid concept video iteration.",
          "description_zh": "Generate, remix, and manage short video clips via OpenAI's Sora API. Useful for cinematic shots, b-roll, and rapid concept video iteration.",
          "description_en": "Generate, remix, and manage short video clips via OpenAI's Sora API. Useful for cinematic shots, b-roll, and rapid concept video iteration.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/sora",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/sora",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/sora",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/sora",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "speech",
          "relative_path": "skills/speech",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
          "exists": true,
          "has_skill_md": true,
          "description": "Generate spoken audio from text using OpenAI's API with built-in voices. Useful for narrated explainers, lecture audio, and quick voiceover tracks.",
          "description_zh": "Generate spoken audio from text using OpenAI's API with built-in voices. Useful for narrated explainers, lecture audio, and quick voiceover tracks.",
          "description_en": "Generate spoken audio from text using OpenAI's API with built-in voices. Useful for narrated explainers, lecture audio, and quick voiceover tracks.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/speech",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "stitch-loop",
          "relative_path": "skills/stitch-loop",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
          "exists": true,
          "has_skill_md": true,
          "description": "Iterative design-to-code feedback loop. Critique → adjust → ship cycle for tightening visual fidelity between brief and built UI.",
          "description_zh": "Iterative design-to-code feedback loop. Critique → adjust → ship cycle for tightening visual fidelity between brief and built UI.",
          "description_en": "Iterative design-to-code feedback loop. Critique → adjust → ship cycle for tightening visual fidelity between brief and built UI.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/stitch-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/stitch-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/stitch-loop",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-loop",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "stitch-skill",
          "relative_path": "skills/stitch-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-acceler",
          "description_zh": "Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-acceler",
          "description_en": "Semantic Design System Skill for Google Stitch. Generates agent-friendly DESIGN.md files that enforce premium, anti-generic UI standards — strict typography, calibrated color, asymmetric layouts, perpetual micro-motion, and hardware-acceler",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/stitch-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/stitch-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/stitch-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/stitch-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "swiftui-design",
          "relative_path": "skills/swiftui-design",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
          "exists": true,
          "has_skill_md": true,
          "description": "SwiftUI 前端设计 skill — anti AI-slop rules, design direction advisor, brand asset protocol, and five-dimension review. Works with Claude Code, Cursor, Codex, and OpenCode.",
          "description_zh": "SwiftUI 前端设计 skill — anti AI-slop rules, design direction advisor, brand asset protocol, and five-dimension review. Works with Claude Code, Cursor, Codex, and OpenCode.",
          "description_en": "SwiftUI 前端设计 skill — anti AI-slop rules, design direction advisor, brand asset protocol, and five-dimension review. Works with Claude Code, Cursor, Codex, and OpenCode.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/swiftui-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/swiftui-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/swiftui-design",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiftui-design",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "swiss-creative-mode-template",
          "relative_path": "skills/swiss-creative-mode-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Swiss-inspired creative-mode presentation template skill with bold editorial typography, high-contrast geometric cards, interactive slide navigation, theme switching, hotspot overlays, and palette choreography in a single-file HTML artifact",
          "description_zh": "Swiss-inspired creative-mode presentation template skill with bold editorial typography, high-contrast geometric cards, interactive slide navigation, theme switching, hotspot overlays, and palette choreography in a single-file HTML artifact",
          "description_en": "Swiss-inspired creative-mode presentation template skill with bold editorial typography, high-contrast geometric cards, interactive slide navigation, theme switching, hotspot overlays, and palette choreography in a single-file HTML artifact",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/swiss-creative-mode-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/swiss-creative-mode-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/swiss-creative-mode-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-creative-mode-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "swiss-user-research-video-template",
          "relative_path": "skills/swiss-user-research-video-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
          "exists": true,
          "has_skill_md": true,
          "description": "Swiss-style user-research narrative template in warm-paper editorial aesthetics. Use when users ask for a premium research deck or story-first live artifact with minimalist typography, high-clarity layout, subtle motion, donut breakdowns, a",
          "description_zh": "Swiss-style user-research narrative template in warm-paper editorial aesthetics. Use when users ask for a premium research deck or story-first live artifact with minimalist typography, high-clarity layout, subtle motion, donut breakdowns, a",
          "description_en": "Swiss-style user-research narrative template in warm-paper editorial aesthetics. Use when users ask for a premium research deck or story-first live artifact with minimalist typography, high-clarity layout, subtle motion, donut breakdowns, a",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/swiss-user-research-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/swiss-user-research-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/swiss-user-research-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/swiss-user-research-video-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "taste-skill",
          "relative_path": "skills/taste-skill",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
          "exists": true,
          "has_skill_md": true,
          "description": "Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesi",
          "description_zh": "Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesi",
          "description_en": "Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesi",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/taste-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/taste-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/taste-skill",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "taste-skill-v1",
          "relative_path": "skills/taste-skill-v1",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
          "exists": true,
          "has_skill_md": true,
          "description": "The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2 experimental), which is a substantial rewrite. Use this v1 install name only if you need exact backward ",
          "description_zh": "The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2 experimental), which is a substantial rewrite. Use this v1 install name only if you need exact backward",
          "description_en": "The original v1 taste-skill, preserved for projects depending on its exact behavior. The current default is `design-taste-frontend` (v2 experimental), which is a substantial rewrite. Use this v1 install name only if you need exact backward",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/taste-skill-v1",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/taste-skill-v1",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/taste-skill-v1",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/taste-skill-v1",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "theme-factory",
          "relative_path": "skills/theme-factory",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
          "exists": true,
          "has_skill_md": true,
          "description": "Apply professional font and color themes to artifacts including slides, docs, reports, and HTML landing pages. Ships 10 pre-set themes.",
          "description_zh": "Apply professional font and color themes to artifacts including slides, docs, reports, and HTML landing pages. Ships 10 pre-set themes.",
          "description_en": "Apply professional font and color themes to artifacts including slides, docs, reports, and HTML landing pages. Ships 10 pre-set themes.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/theme-factory",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/theme-factory",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/theme-factory",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/theme-factory",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "threejs",
          "relative_path": "skills/threejs",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
          "exists": true,
          "has_skill_md": true,
          "description": "Three.js skills for creating 3D elements and interactive experiences in the browser — scenes, materials, controls, and post-processing.",
          "description_zh": "Three.js skills for creating 3D elements and interactive experiences in the browser — scenes, materials, controls, and post-processing.",
          "description_en": "Three.js skills for creating 3D elements and interactive experiences in the browser — scenes, materials, controls, and post-processing.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/threejs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/threejs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/threejs",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/threejs",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ui-skills",
          "relative_path": "skills/ui-skills",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
          "exists": true,
          "has_skill_md": true,
          "description": "Opinionated, evolving constraints to guide agents when building interfaces. Useful for keeping output coherent across many small UI pieces.",
          "description_zh": "Opinionated, evolving constraints to guide agents when building interfaces. Useful for keeping output coherent across many small UI pieces.",
          "description_en": "Opinionated, evolving constraints to guide agents when building interfaces. Useful for keeping output coherent across many small UI pieces.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ui-skills",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ui-skills",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ui-skills",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-skills",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "ui-ux-pro-max",
          "relative_path": "skills/ui-ux-pro-max",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
          "exists": true,
          "has_skill_md": true,
          "description": "Catalog-only UI/UX Pro Max entry. The full upstream templates, data, and search workflow are not bundled in Open Design.",
          "description_zh": "Catalog-only UI/UX Pro Max entry. The full upstream templates, data, and search workflow are not bundled in Open Design.",
          "description_en": "Catalog-only UI/UX Pro Max entry. The full upstream templates, data, and search workflow are not bundled in Open Design.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ui-ux-pro-max",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ui-ux-pro-max",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ui-ux-pro-max",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/ui-ux-pro-max",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "venice-audio-music",
          "relative_path": "skills/venice-audio-music",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
          "exists": true,
          "has_skill_md": true,
          "description": "Music generation queueing, retrieval, and completion endpoints via Venice.ai. Suited for jingles, background loops, and prototype scoring.",
          "description_zh": "Music generation queueing, retrieval, and completion endpoints via Venice.ai. Suited for jingles, background loops, and prototype scoring.",
          "description_en": "Music generation queueing, retrieval, and completion endpoints via Venice.ai. Suited for jingles, background loops, and prototype scoring.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/venice-audio-music",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/venice-audio-music",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/venice-audio-music",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-music",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "venice-audio-speech",
          "relative_path": "skills/venice-audio-speech",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
          "exists": true,
          "has_skill_md": true,
          "description": "Text-to-speech models, voices, formats, and streaming via Venice.ai. Useful for narration, voiceover, and conversational agent voices.",
          "description_zh": "Text-to-speech models, voices, formats, and streaming via Venice.ai. Useful for narration, voiceover, and conversational agent voices.",
          "description_en": "Text-to-speech models, voices, formats, and streaming via Venice.ai. Useful for narration, voiceover, and conversational agent voices.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/venice-audio-speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/venice-audio-speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/venice-audio-speech",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-audio-speech",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "venice-image-edit",
          "relative_path": "skills/venice-image-edit",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
          "exists": true,
          "has_skill_md": true,
          "description": "Image edits, upscaling, and background removal via the Venice.ai API.",
          "description_zh": "Image edits, upscaling, and background removal via the Venice.ai API.",
          "description_en": "Image edits, upscaling, and background removal via the Venice.ai API.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/venice-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/venice-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/venice-image-edit",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-edit",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "venice-image-generate",
          "relative_path": "skills/venice-image-generate",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
          "exists": true,
          "has_skill_md": true,
          "description": "Image generation endpoints and available styles via the Venice.ai API.",
          "description_zh": "Image generation endpoints and available styles via the Venice.ai API.",
          "description_en": "Image generation endpoints and available styles via the Venice.ai API.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/venice-image-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/venice-image-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/venice-image-generate",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-image-generate",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "venice-video",
          "relative_path": "skills/venice-video",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
          "exists": true,
          "has_skill_md": true,
          "description": "Video generation and transcription workflows via the Venice.ai API.",
          "description_zh": "Video generation and transcription workflows via the Venice.ai API.",
          "description_en": "Video generation and transcription workflows via the Venice.ai API.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/venice-video",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/venice-video",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/venice-video",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/venice-video",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "video-downloader",
          "relative_path": "skills/video-downloader",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
          "exists": true,
          "has_skill_md": true,
          "description": "Download videos from YouTube and other platforms for offline viewing, editing, or archival with support for various formats and quality options.",
          "description_zh": "Download videos from YouTube and other platforms for offline viewing, editing, or archival with support for various formats and quality options.",
          "description_en": "Download videos from YouTube and other platforms for offline viewing, editing, or archival with support for various formats and quality options.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/video-downloader",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/video-downloader",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/video-downloader",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/video-downloader",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-artifacts-builder",
          "relative_path": "skills/web-artifacts-builder",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
          "exists": true,
          "has_skill_md": true,
          "description": "Build complex claude.ai HTML artifacts with React and Tailwind. Anthropic's reference workflow for shipping rich, embeddable artifacts.",
          "description_zh": "Build complex claude.ai HTML artifacts with React and Tailwind. Anthropic's reference workflow for shipping rich, embeddable artifacts.",
          "description_en": "Build complex claude.ai HTML artifacts with React and Tailwind. Anthropic's reference workflow for shipping rich, embeddable artifacts.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-artifacts-builder",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-artifacts-builder",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "web-design-guidelines",
          "relative_path": "skills/web-design-guidelines",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
          "exists": true,
          "has_skill_md": true,
          "description": "Web design guidelines and standards by the Vercel engineering team. Covers layout, typography, color, motion, and accessibility for product UI.",
          "description_zh": "Web design guidelines and standards by the Vercel engineering team. Covers layout, typography, color, motion, and accessibility for product UI.",
          "description_en": "Web design guidelines and standards by the Vercel engineering team. Covers layout, typography, color, motion, and accessibility for product UI.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/web-design-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/web-design-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/web-design-guidelines",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/web-design-guidelines",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "weread-year-in-review-video-template",
          "relative_path": "skills/weread-year-in-review-video-template",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
          "exists": true,
          "has_skill_md": true,
          "description": "WeRead-inspired HyperFrames video template for vertical annual reading reports, personal reading dashboards, book-note recaps, and shareable year-in-review stories. Use when users want a 9:16 HTML-to-MP4 reading report with warm paper textu",
          "description_zh": "WeRead-inspired HyperFrames video template for vertical annual reading reports, personal reading dashboards, book-note recaps, and shareable year-in-review stories. Use when users want a 9:16 HTML-to-MP4 reading report with warm paper textu",
          "description_en": "WeRead-inspired HyperFrames video template for vertical annual reading reports, personal reading dashboards, book-note recaps, and shareable year-in-review stories. Use when users want a 9:16 HTML-to-MP4 reading report with warm paper textu",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/weread-year-in-review-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/weread-year-in-review-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/weread-year-in-review-video-template",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/weread-year-in-review-video-template",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "wpds",
          "relative_path": "skills/wpds",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
          "exists": true,
          "has_skill_md": true,
          "description": "WordPress Design System. Apply WordPress's official design tokens, typography, and component patterns to themes and sites.",
          "description_zh": "WordPress Design System. Apply WordPress's official design tokens, typography, and component patterns to themes and sites.",
          "description_en": "WordPress Design System. Apply WordPress's official design tokens, typography, and component patterns to themes and sites.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/wpds",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/wpds",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/wpds",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/wpds",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        },
        {
          "name": "youtube-clipper",
          "relative_path": "skills/youtube-clipper",
          "path": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
          "exists": true,
          "has_skill_md": true,
          "description": "YouTube clip generation and editing with automated workflows — pull source video, slice highlights, add captions, and export.",
          "description_zh": "YouTube clip generation and editing with automated workflows — pull source video, slice highlights, add captions, and export.",
          "description_en": "YouTube clip generation and editing with automated workflows — pull source video, slice highlights, add captions, and export.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/youtube-clipper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/youtube-clipper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/youtube-clipper",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "resolved_target": "/Users/Snoo_1/AI-skills/open-design/skills/youtube-clipper",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "ppt-master",
      "path": "/Users/Snoo_1/AI-skills/ppt-master",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/ppt-master.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 1547776000,
      "size_label": "1.4 GB",
      "git": {
        "is_git_repo": true,
        "remote_url": "https://github.com/SnooZou/ppt-master.git",
        "branch": "main",
        "head_commit": "5c59eceeab54b65705ee5f3c994c04e45292892a",
        "dirty": false,
        "update_state": "unknown",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "ppt-master",
          "relative_path": "skills/ppt-master",
          "path": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
          "exists": true,
          "has_skill_md": true,
          "description": "AI-driven multi-format SVG content generation system. Converts source documents (PDF/DOCX/URL/Markdown) into high-quality SVG pages and exports to PPTX through multi-role collaboration. Use when user asks to \"create PPT\", \"make presentation",
          "description_zh": "AI-driven multi-format SVG content generation system. Converts source documents (PDF/DOCX/URL/Markdown) into high-quality SVG pages and exports to PPTX through multi-role collaboration. Use when user asks to \"create PPT\", \"make presentation",
          "description_en": "AI-driven multi-format SVG content generation system. Converts source documents (PDF/DOCX/URL/Markdown) into high-quality SVG pages and exports to PPTX through multi-role collaboration. Use when user asks to \"create PPT\", \"make presentation",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/ppt-master",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "resolved_target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/ppt-master",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "resolved_target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/ppt-master",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "resolved_target": "/Users/Snoo_1/AI-skills/ppt-master/skills/ppt-master",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "shared-skill-installer",
      "path": "/Users/Snoo_1/AI-skills/shared-skill-installer",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/shared-skill-installer.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 8433664,
      "size_label": "8.0 MB",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "shared-skill-installer",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/shared-skill-installer",
          "exists": true,
          "has_skill_md": true,
          "description": "Install, migrate, verify, refresh, or document local and open-source skills into one shared library, then expose them to multiple local AI clients through symlinks. Invoke when the user wants one skill library shared by Codex, WorkBuddy, TR",
          "description_zh": "Install, migrate, verify, refresh, or document local and open-source skills into one shared library, then expose them to multiple local AI clients through symlinks. Invoke when the user wants one skill library shared by Codex, WorkBuddy, TR",
          "description_en": "Install, migrate, verify, refresh, or document local and open-source skills into one shared library, then expose them to multiple local AI clients through symlinks. Invoke when the user wants one skill library shared by Codex, WorkBuddy, TR",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/shared-skill-installer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "resolved_target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/shared-skill-installer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "resolved_target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/shared-skill-installer",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "resolved_target": "/Users/Snoo_1/AI-skills/shared-skill-installer",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    },
    {
      "name": "vue-brand-theme-migration",
      "path": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
      "map_file": "/Users/Snoo_1/AI-skills/.shared-skill-state/vue-brand-theme-migration.skillmap.tsv",
      "preview": false,
      "exists": true,
      "kind": "single-skill",
      "skill_count": 1,
      "size_bytes": 8192,
      "size_label": "8.0 KB",
      "git": {
        "is_git_repo": false,
        "remote_url": null,
        "branch": null,
        "head_commit": null,
        "dirty": null,
        "update_state": "not_git",
        "remote_head": null
      },
      "broken_links": 0,
      "indexed": true,
      "skills": [
        {
          "name": "vue-brand-theme-migration",
          "relative_path": ".",
          "path": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
          "exists": true,
          "has_skill_md": true,
          "description": "Migrate a Vue/Vite project to a new location and rebrand its theme by unifying the primary color and dark-mode black palette. Use this skill when a user asks to copy a Vue project to a GitHub/iCloud directory and apply a new brand color (e.",
          "description_zh": "Migrate a Vue/Vite project to a new location and rebrand its theme by unifying the primary color and dark-mode black palette. Use this skill when a user asks to copy a Vue project to a GitHub/iCloud directory and apply a new brand color (e.",
          "description_en": "Migrate a Vue/Vite project to a new location and rebrand its theme by unifying the primary color and dark-mode black palette. Use this skill when a user asks to copy a Vue project to a GitHub/iCloud directory and apply a new brand color (e.",
          "client_links": [
            {
              "client": "codex",
              "link_path": "/Users/Snoo_1/.codex/skills/vue-brand-theme-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "workbuddy",
              "link_path": "/Users/Snoo_1/.workbuddy/skills/vue-brand-theme-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "ok": true,
              "status": "linked"
            },
            {
              "client": "trae",
              "link_path": "/Users/Snoo_1/.trae/skills/vue-brand-theme-migration",
              "exists": true,
              "is_symlink": true,
              "target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "resolved_target": "/Users/Snoo_1/AI-skills/vue-brand-theme-migration",
              "ok": true,
              "status": "linked"
            }
          ],
          "linked_clients": 3,
          "expected_clients": 3
        }
      ],
      "duplicate_skill_names": [],
      "duplicate_count": 0
    }
  ]
};
