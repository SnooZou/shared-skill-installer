const STORAGE_KEYS = {
  theme: "shared-library-manager-theme",
  locale: "shared-library-manager-locale",
};

const UI_STATE = {
  search: "",
  filter: "all",
  sort: "attention",
  selectedContainer: null,
  theme: localStorage.getItem(STORAGE_KEYS.theme) || "dark",
  locale: localStorage.getItem(STORAGE_KEYS.locale) || "zh",
  notice: null,
};

const APP_META = {
  version: "V1.3.0",
  repoUrl: "https://github.com/SnooZou/shared-skill-installer",
};
const CLIENT_ICON_MANIFEST = window.SHARED_LIBRARY_CLIENT_ICONS || {};
const MANAGER_API_BASE = /^https?:$/i.test(window.location.protocol) ? "" : null;
let APP_STATE = null;

const I18N = {
  zh: {
    documentTitle: "共享技能库管理台",
    brandEyebrow: "共享技能库",
    brandTitle: "技能管理台",
    brandSubtitle: "共享技能库可视化管理器",
    repoLinkLabel: "打开 GitHub 仓库",
    pageCrumb: "总览 / 共享技能库",
    pageTitle: "共享技能库管理台",
    pageSubtitle: "依托 shared-skill-installer 的状态文件，查看共享库规模、客户端链接状态、仓库来源与更新风险。",
    heroEyebrow: "库状态",
    clientsTitle: "已连接客户端",
    clientsSubtitle: "当前已纳入共享体系的本地智能体客户端",
    sortLabel: "排序",
    listTitle: "共享容器",
    detailTitle: "容器详情",
    detailSubtitle: "查看选中容器的来源、状态和技能清单",
    searchPlaceholder: "搜索容器名、技能名、功能简介",
    themeDark: "深色",
    themeLight: "浅色",
    langZh: "中文",
    langEn: "EN",
    sidebarViews: "视图",
    sidebarSelected: "当前选中",
    sidebarRoot: "共享库根目录",
    navOverview: "总览",
    navAttention: "需关注",
    navUnindexed: "未登记",
    navUpdates: "更新",
    navMulti: "多技能",
    navPreview: "预览映射",
    sortAttention: "按关注度",
    sortSize: "按体积",
    sortCount: "按技能数量",
    sortName: "按名称",
    heroKicker: "实时共享库体检",
    heroStable: "当前共享库整体状态稳定，已纳入的客户端入口没有检测到实际坏链。",
    heroUpdates: (count, names) => `当前有 ${count} 套仓库疑似存在远端更新，建议优先检查 ${names}。`,
    metricActive: "正式容器",
    metricPreview: "预览映射",
    metricSkills: "技能条目",
    metricBroken: "异常链接",
    metricUnindexed: "未登记",
    metricUpdates: "疑似更新",
    metricStorage: "占用空间",
    clientConnected: "已接入",
    filterAll: "全部",
    filterAttention: "需关注",
    filterUnindexed: "未登记",
    filterUpdates: "可更新",
    filterMulti: "多技能",
    filterPreview: "预览",
    listSummary: (count) => `当前筛选结果共 ${count} 个容器`,
    listSummaryEmpty: "当前筛选条件下没有容器",
    chipSingle: "单技能",
    chipMulti: "多技能",
    chipPreview: "预览",
    chipActive: "正式",
    chipBroken: (count) => `坏链 ${count}`,
    chipDuplicate: (count) => `名称冲突 ${count}`,
    chipHasUpdate: "有更新",
    chipUnindexed: "未登记",
    statusPreview: "预览映射",
    statusConflict: "名称冲突",
    statusUnindexed: "未登记",
    statusAttention: "需要处理",
    statusHasUpdate: "有更新",
    statusStable: "状态稳定",
    badgeLinked: (client) => `${client} 已链接`,
    badgeSystemOwned: (client) => `${client} 系统内置`,
    badgePreviewOnly: (client) => `${client} 预览映射`,
    badgeBroken: (client) => `${client} 异常`,
    gitUpToDate: "远端同步",
    gitUpdateAvailable: "有新版本",
    gitTimeout: "远端检查超时",
    gitNoRemote: "无远端",
    gitNotGit: "非 Git 导入",
    gitUnknown: "状态未知",
    emptySearchTitle: "没有匹配结果",
    emptySearchBody: "试试更短的关键词，或者切换筛选条件。",
    emptyDetailTitle: "选择一个容器",
    emptyDetailBody: "左侧列表里点选任意容器后，这里会显示它的仓库来源、链接状态和技能明细。",
    detailHeroEyebrow: "容器详情",
    detailDuplicateBody: "这个容器里的一个或多个 skill 名，与共享库中的其他容器重复。继续自动接入会有覆盖同名入口的风险，建议先保留主容器，再决定是否清理或重命名重复目录。",
    detailUnindexedBody: "这是一个本地已存在、但尚未登记进共享状态文件的技能目录。它已经在部分客户端可用，但还没有纳入标准的共享库登记流程。",
    detailPreviewBody: "这是一个预览映射容器，用来提供临时或辅助入口，不应按正式坏链来理解。",
    detailMultiBody: "这是一个多技能仓库容器，适合重点关注其版本更新、体积和链接覆盖情况。",
    detailSingleBody: "这是一个单技能容器，适合快速核对来源、版本和三端链接状态。",
    detailRemote: "远端仓库",
    detailSize: "本地体积",
    detailSkillCount: "技能数量",
    detailBranch: "当前分支",
    detailCommit: "本地提交",
    detailPath: "容器路径",
    detailDuplicateNames: "冲突技能名",
    detailUnknown: "未知",
    detailUnknownNonGit: "未知或非 Git 导入",
    detailSkillsTitle: "包含的技能",
    detailSkillsBody: (count) => `当前容器内共 ${count} 个技能条目。下面展示它们的基础功能简介和客户端链接状态。`,
    detailLinkedRatio: (linked, expected) => `${linked}/${expected} 已链接`,
    detailNoDescription: "暂无功能简介",
    chipSingleContainer: "单技能容器",
    chipMultiContainer: "多技能仓库",
    chipPreviewContainer: "预览映射",
    chipActiveContainer: "正式容器",
    chipLinksOk: "链接正常",
    chipBrokenLinks: (count) => `异常链接 ${count}`,
    metaRoot: "共享库",
    metaState: "状态文件",
    metaScan: "最近扫描",
    metaChangeRoot: "更改位置",
    noticeStaticMode: "当前是静态预览模式。涉及本地文件和仓库操作的按钮，需要通过本地管理服务打开。",
    noticeRefreshDone: "管理台数据已刷新。",
    noticePickLocation: "正在打开系统文件夹选择器…",
    noticeRelocating: "正在切换共享库位置，这会复制完整库并重建所有客户端入口…",
    noticeUpdating: "正在拉取这个仓库的远端更新…",
    actionOpenLocal: "打开本地",
    actionOpenRepo: "GitHub",
    actionUpdateRepo: "更新",
    actionUnavailable: "不可用",
  },
  en: {
    documentTitle: "Shared Library Manager",
    brandEyebrow: "Shared Library",
    brandTitle: "Skill Manager",
    brandSubtitle: "Visual manager for your local shared skill library",
    repoLinkLabel: "Open GitHub repository",
    pageCrumb: "Overview / Shared Library",
    pageTitle: "Shared Library Manager",
    pageSubtitle: "Built on shared-skill-installer state files to inspect library scale, client links, source repositories, and update risk.",
    heroEyebrow: "Library Health",
    clientsTitle: "Connected Clients",
    clientsSubtitle: "Local AI clients currently connected to the shared library system",
    sortLabel: "Sort",
    listTitle: "Shared Containers",
    detailTitle: "Container Detail",
    detailSubtitle: "Inspect the selected container source, health, and included skills",
    searchPlaceholder: "Search by container, skill, or description",
    themeDark: "Dark",
    themeLight: "Light",
    langZh: "中文",
    langEn: "EN",
    sidebarViews: "Views",
    sidebarSelected: "Selected",
    sidebarRoot: "Library Root",
    navOverview: "Overview",
    navAttention: "Needs Attention",
    navUnindexed: "Unindexed",
    navUpdates: "Updates",
    navMulti: "Multi-skill",
    navPreview: "Preview Maps",
    sortAttention: "By attention",
    sortSize: "By size",
    sortCount: "By skill count",
    sortName: "By name",
    heroKicker: "Live shared library audit",
    heroStable: "The shared library currently looks stable, and no real broken client links were detected.",
    heroUpdates: (count, names) => `${count} repositories appear to have remote updates. Start with ${names}.`,
    metricActive: "Active Containers",
    metricPreview: "Preview Maps",
    metricSkills: "Skill Entries",
    metricBroken: "Broken Links",
    metricUnindexed: "Unindexed",
    metricUpdates: "Updates Available",
    metricStorage: "Storage Used",
    clientConnected: "Connected",
    filterAll: "All",
    filterAttention: "Attention",
    filterUnindexed: "Unindexed",
    filterUpdates: "Updates",
    filterMulti: "Multi-skill",
    filterPreview: "Preview",
    listSummary: (count) => `${count} containers match the current filters`,
    listSummaryEmpty: "No containers match the current filters",
    chipSingle: "Single skill",
    chipMulti: "Multi-skill",
    chipPreview: "Preview",
    chipActive: "Active",
    chipBroken: (count) => `${count} broken`,
    chipDuplicate: (count) => `${count} name conflict`,
    chipHasUpdate: "Update",
    chipUnindexed: "Unindexed",
    statusPreview: "Preview map",
    statusConflict: "Name conflict",
    statusUnindexed: "Unindexed",
    statusAttention: "Needs action",
    statusHasUpdate: "Update available",
    statusStable: "Stable",
    badgeLinked: (client) => `${client} linked`,
    badgeSystemOwned: (client) => `${client} system-owned`,
    badgePreviewOnly: (client) => `${client} preview-only`,
    badgeBroken: (client) => `${client} broken`,
    gitUpToDate: "Up to date",
    gitUpdateAvailable: "Update available",
    gitTimeout: "Remote check timed out",
    gitNoRemote: "No remote",
    gitNotGit: "Non-git import",
    gitUnknown: "Unknown status",
    emptySearchTitle: "No matches found",
    emptySearchBody: "Try a shorter keyword or switch filters.",
    emptyDetailTitle: "Choose a container",
    emptyDetailBody: "Select any container from the list to inspect its source, link health, and included skills.",
    detailHeroEyebrow: "Container Detail",
    detailDuplicateBody: "One or more skill names in this container already exist elsewhere in the shared library. Auto-linking it as-is could overwrite an existing entry point, so it should be reviewed before being fully indexed.",
    detailUnindexedBody: "This is a local skill directory that exists on disk but has not been registered in the shared state files yet. It may already work in some clients, but it is outside the standard indexed library flow.",
    detailPreviewBody: "This is a preview mapping container used for temporary or supporting entry points, so it should not be treated like a real broken deployment.",
    detailMultiBody: "This is a multi-skill repository container, so updates, footprint, and link coverage matter most.",
    detailSingleBody: "This is a single-skill container, ideal for quickly checking source, version, and client link health.",
    detailRemote: "Remote Repository",
    detailSize: "Local Size",
    detailSkillCount: "Skill Count",
    detailBranch: "Current Branch",
    detailCommit: "Local Commit",
    detailPath: "Container Path",
    detailDuplicateNames: "Conflicting Skill Names",
    detailUnknown: "Unknown",
    detailUnknownNonGit: "Unknown or non-git import",
    detailSkillsTitle: "Included Skills",
    detailSkillsBody: (count) => `${count} skill entries are included in this container. Below is the short functional description and per-client link state for each skill.`,
    detailLinkedRatio: (linked, expected) => `${linked}/${expected} linked`,
    detailNoDescription: "No short description available",
    chipSingleContainer: "Single-skill container",
    chipMultiContainer: "Multi-skill repository",
    chipPreviewContainer: "Preview map",
    chipActiveContainer: "Active container",
    chipLinksOk: "Links healthy",
    chipBrokenLinks: (count) => `${count} broken links`,
    metaRoot: "Shared Root",
    metaState: "State Files",
    metaScan: "Last Scan",
    metaChangeRoot: "Change Location",
    noticeStaticMode: "This page is in static preview mode. Local folder and repository actions need the local manager server.",
    noticeRefreshDone: "Manager data refreshed.",
    noticePickLocation: "Opening the system folder picker...",
    noticeRelocating: "Switching the shared library location. This copies the full library and rebuilds client links...",
    noticeUpdating: "Pulling remote updates for this repository...",
    actionOpenLocal: "Open Local",
    actionOpenRepo: "GitHub",
    actionUpdateRepo: "Update",
    actionUnavailable: "Unavailable",
  },
};

function t(key, ...args) {
  const pack = I18N[UI_STATE.locale] || I18N.zh;
  const value = pack[key];
  if (typeof value === "function") return value(...args);
  return value ?? key;
}

function hasManagerApi() {
  return MANAGER_API_BASE !== null;
}

function setNotice(message = "", tone = "ok") {
  UI_STATE.notice = message ? { message, tone } : null;
}

async function apiJson(path, options = {}) {
  if (!hasManagerApi()) {
    throw new Error(t("noticeStaticMode"));
  }
  const response = await fetch(`${MANAGER_API_BASE}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const payload = await response.json();
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.message || `Request failed: ${response.status}`);
  }
  return payload;
}

async function loadState(refresh = false) {
  if (hasManagerApi()) {
    const payload = await apiJson(`/api/state${refresh ? "?refresh=1" : ""}`);
    return payload.state;
  }
  return window.SHARED_LIBRARY_STATE;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function badge(text, tone = "") {
  const cls = tone ? `chip ${tone}` : "chip";
  return `<span class="${cls}">${escapeHtml(text)}</span>`;
}

function skillDescription(skill) {
  if (UI_STATE.locale === "zh") {
    return skill.description_zh || skill.description || skill.description_en || t("detailNoDescription");
  }
  return skill.description_en || skill.description || skill.description_zh || t("detailNoDescription");
}

function normalizeGitHubRepoUrl(url) {
  if (!url) return null;
  if (url.startsWith("git@github.com:")) {
    return `https://github.com/${url.slice("git@github.com:".length).replace(/\.git$/, "")}`;
  }
  if (url.startsWith("https://github.com/")) {
    return url.replace(/\.git$/, "");
  }
  return null;
}

function skillGitHubUrl(container, skill) {
  const base = normalizeGitHubRepoUrl(container.git?.remote_url);
  if (!base) return null;
  if (!skill?.relative_path || skill.relative_path === ".") return base;
  const branch = container.git?.branch || "main";
  const encodedPath = skill.relative_path
    .split("/")
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${base}/tree/${encodeURIComponent(branch)}/${encodedPath}`;
}

const CLIENT_PRESETS = {
  codex: {
    displayName: "Codex",
    className: "codex",
    icon: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="client-icon-codex-__ID__" x1="6" y1="8" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#81B7FF" />
            <stop offset="1" stop-color="#6B5DFF" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="38" height="38" rx="12" fill="url(#client-icon-codex-__ID__)" />
        <path d="M18 24L22 20M18 24L22 28" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M27 30H32" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
  },
  workbuddy: {
    displayName: "WorkBuddy",
    className: "workbuddy",
    icon: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="client-icon-workbuddy-__ID__" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4EF0D5" />
            <stop offset="1" stop-color="#22B573" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="38" height="38" rx="12" fill="url(#client-icon-workbuddy-__ID__)" />
        <path d="M16 19.5C16 16.46 18.46 14 21.5 14H26.5C29.54 14 32 16.46 32 19.5V26.5C32 29.54 29.54 32 26.5 32H21.5C18.46 32 16 29.54 16 26.5V19.5Z" fill="#ECFFF8"/>
        <circle cx="22" cy="23" r="1.8" fill="#18A571"/>
        <circle cx="27" cy="23" r="1.8" fill="#18A571"/>
        <path d="M21.5 28C22.47 29.08 23.53 29.08 24.5 28" stroke="#18A571" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `,
  },
  trae: {
    displayName: "TRAE",
    className: "trae",
    icon: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="client-icon-trae-__ID__" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#45FFBC" />
            <stop offset="1" stop-color="#0F8F6E" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="38" height="38" rx="12" fill="#09110F" />
        <rect x="12" y="13" width="24" height="22" rx="4" stroke="url(#client-icon-trae-__ID__)" stroke-width="3" fill="none"/>
        <path d="M19 24L22.5 21L26 24L29.5 21L33 24" stroke="url(#client-icon-trae-__ID__)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
  },
  default: {
    displayName: null,
    className: "default",
    icon: `
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="client-icon-default-__ID__" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8EA0B8" />
            <stop offset="1" stop-color="#526072" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="38" height="38" rx="12" fill="url(#client-icon-default-__ID__)" />
        <circle cx="19" cy="20" r="3" fill="#F4F7FB"/>
        <circle cx="29" cy="20" r="3" fill="#F4F7FB"/>
        <path d="M17 29C19 26.8 21.33 25.7 24 25.7C26.67 25.7 29 26.8 31 29" stroke="#F4F7FB" stroke-width="2.6" stroke-linecap="round"/>
      </svg>
    `,
  },
};

function clientKey(value) {
  return String(value ?? "").trim().toLowerCase();
}

function formatClientLabel(value) {
  const key = clientKey(value);
  const preset = CLIENT_PRESETS[key];
  if (preset?.displayName) return preset.displayName;
  return String(value ?? "")
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function clientIconMarkup(value, suffix = "") {
  const key = clientKey(value);
  const preset = CLIENT_PRESETS[key] || CLIENT_PRESETS.default;
  const officialIcon = CLIENT_ICON_MANIFEST[key]?.path;
  if (officialIcon) {
    return `
      <span class="client-avatar client-avatar--${escapeHtml(preset.className)} client-avatar--official" aria-hidden="true">
        <img class="client-avatar__img" src="${escapeHtml(officialIcon)}" alt="" />
      </span>
    `;
  }
  const iconMarkup = preset.icon.replaceAll("__ID__", `${key || "client"}-${suffix}`);
  return `
    <span class="client-avatar client-avatar--${escapeHtml(preset.className)}" aria-hidden="true">
      ${iconMarkup}
    </span>
  `;
}

function formatDate(iso) {
  return new Date(iso).toLocaleString(UI_STATE.locale === "zh" ? "zh-CN" : "en-US");
}

function applyDocumentSettings() {
  document.documentElement.dataset.theme = UI_STATE.theme;
  document.documentElement.lang = UI_STATE.locale === "zh" ? "zh-CN" : "en";
  document.title = t("documentTitle");
}

function linkBadge(link) {
  if (link.status === "linked") return badge(t("badgeLinked", link.client), "ok");
  if (link.status === "system_owned") return badge(t("badgeSystemOwned", link.client), "warn");
  if (link.status === "preview_only") return badge(t("badgePreviewOnly", link.client));
  return badge(t("badgeBroken", link.client), "danger");
}

function gitLabel(git) {
  const state = git?.update_state;
  if (state === "up_to_date") return badge(t("gitUpToDate"), "ok");
  if (state === "update_available") return badge(t("gitUpdateAvailable"), "warn");
  if (state === "timeout") return badge(t("gitTimeout"), "warn");
  if (state === "no_remote") return badge(t("gitNoRemote"), "danger");
  if (state === "not_git") return badge(t("gitNotGit"));
  return badge(t("gitUnknown"), "danger");
}

function containerAttentionScore(container) {
  const git = container.git || {};
  return (
    (container.preview ? 0 : container.broken_links * 100) +
    (container.indexed === false ? 60 : 0) +
    (container.duplicate_count > 0 ? 90 : 0) +
    (git.update_state === "update_available" ? 20 : 0) +
    (container.kind === "multi-skill" ? 8 : 0) +
    container.skill_count / 100
  );
}

function statusText(container) {
  if (container.preview) return t("statusPreview");
  if (container.duplicate_count > 0) return t("statusConflict");
  if (container.indexed === false) return t("statusUnindexed");
  if (container.broken_links > 0) return t("statusAttention");
  if (container.git?.update_state === "update_available") return t("statusHasUpdate");
  return t("statusStable");
}

function matchesFilter(container) {
  if (UI_STATE.filter === "all") return true;
  if (UI_STATE.filter === "unindexed") return container.indexed === false;
  if (UI_STATE.filter === "updates") return container.git?.update_state === "update_available";
  if (UI_STATE.filter === "multi") return container.kind === "multi-skill";
  if (UI_STATE.filter === "preview") return container.preview;
  if (UI_STATE.filter === "attention") return container.indexed === false || container.broken_links > 0 || container.duplicate_count > 0 || container.git?.update_state === "update_available";
  return true;
}

function matchesSearch(container) {
  const q = UI_STATE.search.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    container.name,
    container.path,
    container.git?.remote_url,
    ...container.skills.flatMap((skill) => [skill.name, skill.relative_path, skill.description, skill.description_zh, skill.description_en]),
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase();
  return haystack.includes(q);
}

function sortContainers(containers) {
  const arr = [...containers];
  if (UI_STATE.sort === "size") return arr.sort((a, b) => (b.size_bytes || 0) - (a.size_bytes || 0));
  if (UI_STATE.sort === "count") return arr.sort((a, b) => b.skill_count - a.skill_count);
  if (UI_STATE.sort === "name") return arr.sort((a, b) => a.name.localeCompare(b.name));
  return arr.sort((a, b) => containerAttentionScore(b) - containerAttentionScore(a));
}

function getFilteredContainers(state) {
  return sortContainers(state.containers.filter((item) => matchesFilter(item) && matchesSearch(item)));
}

function syncSelectedContainer(containers) {
  if (!containers.length) {
    UI_STATE.selectedContainer = null;
    return;
  }
  if (!UI_STATE.selectedContainer || !containers.some((item) => item.name === UI_STATE.selectedContainer)) {
    UI_STATE.selectedContainer = containers[0].name;
  }
}

function renderStaticTexts() {
  document.getElementById("brand-eyebrow").textContent = t("brandEyebrow");
  document.getElementById("brand-title").textContent = t("brandTitle");
  document.getElementById("brand-subtitle").textContent = t("brandSubtitle");
  document.getElementById("page-crumb").textContent = t("pageCrumb");
  document.getElementById("page-title").textContent = t("pageTitle");
  document.getElementById("page-subtitle").textContent = t("pageSubtitle");
  document.getElementById("hero-eyebrow").textContent = t("heroEyebrow");
  document.getElementById("clients-title").textContent = t("clientsTitle");
  document.getElementById("clients-subtitle").textContent = t("clientsSubtitle");
  document.getElementById("sort-label").textContent = t("sortLabel");
  document.getElementById("list-title").textContent = t("listTitle");
  document.getElementById("detail-title").textContent = t("detailTitle");
  document.getElementById("detail-subtitle").textContent = t("detailSubtitle");
  document.getElementById("search-input").placeholder = t("searchPlaceholder");
}

function renderNotice() {
  const slot = document.getElementById("app-notice");
  if (!UI_STATE.notice?.message) {
    slot.hidden = true;
    slot.innerHTML = "";
    return;
  }
  slot.hidden = false;
  slot.innerHTML = `
    <div class="notice notice--${escapeHtml(UI_STATE.notice.tone || "ok")}">
      <span>${escapeHtml(UI_STATE.notice.message)}</span>
    </div>
  `;
}

function renderBrandChrome(state) {
  const packageMeta = state.package_meta || {};
  const version = packageMeta.version || APP_META.version;
  const repoUrl = packageMeta.repo_url || APP_META.repoUrl;
  const repoLink = document.getElementById("brand-repo-link");
  document.getElementById("brand-version").textContent = version;
  repoLink.href = repoUrl;
  repoLink.title = t("repoLinkLabel");
  repoLink.setAttribute("aria-label", t("repoLinkLabel"));
}

function renderThemeAndLocaleControls() {
  document.getElementById("theme-dark-btn").textContent = t("themeDark");
  document.getElementById("theme-light-btn").textContent = t("themeLight");
  document.getElementById("lang-zh-btn").textContent = t("langZh");
  document.getElementById("lang-en-btn").textContent = t("langEn");
  document.getElementById("theme-dark-btn").classList.toggle("is-active", UI_STATE.theme === "dark");
  document.getElementById("theme-light-btn").classList.toggle("is-active", UI_STATE.theme === "light");
  document.getElementById("lang-zh-btn").classList.toggle("is-active", UI_STATE.locale === "zh");
  document.getElementById("lang-en-btn").classList.toggle("is-active", UI_STATE.locale === "en");
}

function renderSidebar(state, containers) {
  const summary = state.summary;
  const unindexedCount = state.containers.filter((item) => item.indexed === false).length;
  const attentionCount = state.containers.filter((item) => item.indexed === false || item.broken_links > 0 || item.duplicate_count > 0 || item.git?.update_state === "update_available").length;
  const navItems = [
    { key: "all", label: t("navOverview"), count: summary.active_container_count },
    { key: "attention", label: t("navAttention"), count: attentionCount },
    { key: "unindexed", label: t("navUnindexed"), count: unindexedCount },
    { key: "updates", label: t("navUpdates"), count: summary.update_available_count },
    { key: "multi", label: t("navMulti"), count: state.containers.filter((item) => item.kind === "multi-skill" && !item.preview).length },
    { key: "preview", label: t("navPreview"), count: summary.preview_container_count },
  ];

  document.getElementById("sidebar-nav").innerHTML = `
    <div class="nav-section">${escapeHtml(t("sidebarViews"))}</div>
    ${navItems
      .map(
        (item) => `
          <button class="nav-item ${UI_STATE.filter === item.key ? "is-active" : ""}" data-filter="${item.key}">
            <span>${escapeHtml(item.label)}</span>
            <span class="nav-item__count">${escapeHtml(item.count)}</span>
          </button>
        `,
      )
      .join("")}
  `;

  const selected = state.containers.find((item) => item.name === UI_STATE.selectedContainer) || containers[0] || null;
  document.getElementById("sidebar-footer").innerHTML = `
    <div class="footer-card">
      <div class="footer-card__label">${escapeHtml(t("sidebarSelected"))}</div>
      <div class="footer-card__value">${escapeHtml(selected?.name || "—")}</div>
    </div>
    <div class="footer-card">
      <div class="footer-card__label">${escapeHtml(t("sidebarRoot"))}</div>
      <div class="footer-card__value">${escapeHtml(state.shared_root)}</div>
    </div>
  `;
}

function renderHeader(state) {
  document.getElementById("header-meta").innerHTML = `
    <div class="header-meta__row">
      <div class="header-meta__head">
        <span class="header-meta__label">${escapeHtml(t("metaRoot"))}</span>
        ${
          hasManagerApi()
            ? `<button class="meta-action" id="relocate-root-btn" type="button">${escapeHtml(t("metaChangeRoot"))}</button>`
            : ""
        }
      </div>
      <span class="header-meta__value">${escapeHtml(state.shared_root)}</span>
    </div>
    <div class="header-meta__row">
      <span class="header-meta__label">${escapeHtml(t("metaState"))}</span>
      <span class="header-meta__value">${escapeHtml(state.state_root)}</span>
    </div>
    <div class="header-meta__row">
      <span class="header-meta__label">${escapeHtml(t("metaScan"))}</span>
      <span class="header-meta__value">${escapeHtml(formatDate(state.generated_at))}</span>
    </div>
  `;
}

function renderHero(state) {
  const summary = state.summary;
  const updates = state.containers.filter((item) => item.git?.update_state === "update_available");
  const names = updates
    .slice(0, 2)
    .map((item) => item.name)
    .join(" / ");
  const heroCopy = updates.length > 0 ? t("heroUpdates", updates.length, names) : t("heroStable");

  document.getElementById("hero-main").innerHTML = `
    <div class="hero-kicker">${escapeHtml(t("heroKicker"))}</div>
    <div class="hero-value">${escapeHtml(summary.active_container_count)}</div>
    <div class="hero-caption">${escapeHtml(heroCopy)}</div>
  `;

  const metrics = [
    [t("metricActive"), summary.active_container_count],
    [t("metricPreview"), summary.preview_container_count],
    [t("metricSkills"), summary.skill_entry_count],
    [t("metricBroken"), summary.broken_link_count],
    [t("metricUnindexed"), state.containers.filter((item) => item.indexed === false).length],
    [t("statusConflict"), summary.duplicate_container_count || 0],
    [t("metricUpdates"), summary.update_available_count],
    [t("metricStorage"), summary.total_storage_label],
  ];

  document.getElementById("stats").innerHTML = metrics
    .map(
      ([label, value]) => `
        <article class="metric">
          <div class="metric__label">${escapeHtml(label)}</div>
          <div class="metric__value">${escapeHtml(value)}</div>
        </article>
      `,
    )
    .join("");
}

function renderClients(state) {
  document.getElementById("clients").innerHTML = state.clients
    .map(
      (client, index) => `
        <article class="client-row">
          <div class="client-row__main">
            ${clientIconMarkup(client.label, index)}
            <div>
              <div class="client-row__name">${escapeHtml(formatClientLabel(client.label))}</div>
              <div class="client-row__path">${escapeHtml(client.path)}</div>
            </div>
          </div>
          <div>${badge(t("clientConnected"), "ok")}</div>
        </article>
      `,
    )
    .join("");
}

function renderSortOptions() {
  document.getElementById("sort-select").innerHTML = `
    <option value="attention">${escapeHtml(t("sortAttention"))}</option>
    <option value="size">${escapeHtml(t("sortSize"))}</option>
    <option value="count">${escapeHtml(t("sortCount"))}</option>
    <option value="name">${escapeHtml(t("sortName"))}</option>
  `;
  document.getElementById("sort-select").value = UI_STATE.sort;
}

function renderFilterPills(state) {
  const unindexedCount = state.containers.filter((item) => item.indexed === false).length;
  const attentionCount = state.containers.filter((item) => item.indexed === false || item.broken_links > 0 || item.duplicate_count > 0 || item.git?.update_state === "update_available").length;
  const pills = [
    ["all", t("filterAll"), state.summary.container_count],
    ["attention", t("filterAttention"), attentionCount],
    ["unindexed", t("filterUnindexed"), unindexedCount],
    ["updates", t("filterUpdates"), state.summary.update_available_count],
    ["multi", t("filterMulti"), state.containers.filter((item) => item.kind === "multi-skill").length],
    ["preview", t("filterPreview"), state.summary.preview_container_count],
  ];

  document.getElementById("filter-pills").innerHTML = pills
    .map(
      ([key, label, count]) => `
        <button class="pill ${UI_STATE.filter === key ? "is-active" : ""}" data-filter="${key}">
          <span>${escapeHtml(label)}</span>
          <span class="pill__count">${escapeHtml(count)}</span>
        </button>
      `,
    )
    .join("");
}

function renderContainerList(state, containers) {
  document.getElementById("list-summary").textContent = containers.length > 0 ? t("listSummary", containers.length) : t("listSummaryEmpty");

  document.getElementById("containers").innerHTML = containers.length
    ? containers
        .map((container) => {
          const chips = [
            badge(container.kind === "multi-skill" ? t("chipMulti") : t("chipSingle")),
            container.preview ? badge(t("chipPreview"), "warn") : badge(t("chipActive"), "ok"),
            container.indexed === false ? badge(t("chipUnindexed"), "warn") : "",
            container.duplicate_count > 0 ? badge(t("chipDuplicate", container.duplicate_count), "danger") : "",
            container.broken_links > 0 ? badge(t("chipBroken", container.broken_links), "danger") : "",
            container.git?.update_state === "update_available" ? badge(t("chipHasUpdate"), "warn") : "",
            badge(container.size_label),
          ]
            .filter(Boolean)
            .join("");

          return `
            <button class="container-item ${UI_STATE.selectedContainer === container.name ? "is-selected" : ""}" data-container="${escapeHtml(container.name)}">
              <div class="container-item__top">
                <div>
                  <div class="container-item__name">${escapeHtml(container.name)}</div>
                  <div class="container-item__path">${escapeHtml(container.path)}</div>
                </div>
                ${badge(
                  statusText(container),
                  container.duplicate_count > 0 || container.broken_links > 0 ? "danger" : container.git?.update_state === "update_available" ? "warn" : "ok",
                )}
              </div>
              <div class="container-item__meta" style="margin-top:12px">${chips}</div>
            </button>
          `;
        })
        .join("")
    : `
      <div class="empty-state">
        <div>
          <div class="empty-state__icon">⌕</div>
          <h4>${escapeHtml(t("emptySearchTitle"))}</h4>
          <p>${escapeHtml(t("emptySearchBody"))}</p>
        </div>
      </div>
    `;
}

function renderDetail(state) {
  const selected = state.containers.find((item) => item.name === UI_STATE.selectedContainer);
  const pane = document.getElementById("detail-pane");

  if (!selected) {
    pane.innerHTML = `
      <div class="empty-state">
        <div>
          <div class="empty-state__icon">◫</div>
          <h4>${escapeHtml(t("emptyDetailTitle"))}</h4>
          <p>${escapeHtml(t("emptyDetailBody"))}</p>
        </div>
      </div>
    `;
    return;
  }

  const git = selected.git || {};
  const repoUrl = normalizeGitHubRepoUrl(git.remote_url);
  const healthBadges = [
    badge(selected.kind === "multi-skill" ? t("chipMultiContainer") : t("chipSingleContainer")),
    selected.preview ? badge(t("chipPreviewContainer"), "warn") : badge(t("chipActiveContainer"), "ok"),
    selected.indexed === false ? badge(t("chipUnindexed"), "warn") : "",
    selected.duplicate_count > 0 ? badge(t("chipDuplicate", selected.duplicate_count), "danger") : "",
    selected.broken_links > 0 ? badge(t("chipBrokenLinks", selected.broken_links), "danger") : badge(t("chipLinksOk"), "ok"),
    gitLabel(git),
  ].join("");

  const detailBody = selected.duplicate_count > 0
    ? t("detailDuplicateBody")
    : selected.indexed === false
    ? t("detailUnindexedBody")
    : selected.preview
    ? t("detailPreviewBody")
    : selected.kind === "multi-skill"
      ? t("detailMultiBody")
      : t("detailSingleBody");

  pane.innerHTML = `
    <section class="detail-hero">
      <div class="detail-hero__eyebrow">${escapeHtml(t("detailHeroEyebrow"))}</div>
      <div class="detail-hero__title">${escapeHtml(selected.name)}</div>
      <div class="detail-hero__subtitle">${escapeHtml(detailBody)}</div>
      <div class="detail-badges" style="margin-top:14px">${healthBadges}</div>
      <div class="detail-actions">
        ${
          git.is_git_repo && git.remote_url
            ? `<button class="mini-action" type="button" data-update-container="${escapeHtml(selected.name)}">${escapeHtml(t("actionUpdateRepo"))}</button>`
            : `<button class="mini-action is-disabled" type="button" disabled>${escapeHtml(t("actionUnavailable"))}</button>`
        }
        ${
          repoUrl
            ? `<a class="mini-action" href="${escapeHtml(repoUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("actionOpenRepo"))}</a>`
            : ""
        }
        ${
          hasManagerApi()
            ? `<button class="mini-action" type="button" data-open-path="${escapeHtml(selected.path)}">${escapeHtml(t("actionOpenLocal"))}</button>`
            : ""
        }
      </div>
    </section>

    <section class="detail-grid">
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailRemote"))}</div>
        <div class="detail-card__value">${escapeHtml(git.remote_url || t("detailUnknownNonGit"))}</div>
      </div>
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailSize"))}</div>
        <div class="detail-card__value">${escapeHtml(selected.size_label)}</div>
      </div>
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailSkillCount"))}</div>
        <div class="detail-card__value">${escapeHtml(selected.skill_count)}</div>
      </div>
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailBranch"))}</div>
        <div class="detail-card__value">${escapeHtml(git.branch || t("detailUnknown"))}</div>
      </div>
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailCommit"))}</div>
        <div class="detail-card__value">${escapeHtml(git.head_commit || t("detailUnknown"))}</div>
      </div>
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailPath"))}</div>
        <div class="detail-card__value">${escapeHtml(selected.path)}</div>
      </div>
      ${
        selected.duplicate_count > 0
          ? `
      <div class="detail-card">
        <div class="detail-card__label">${escapeHtml(t("detailDuplicateNames"))}</div>
        <div class="detail-card__value">${escapeHtml(selected.duplicate_skill_names.join(", "))}</div>
      </div>
      `
          : ""
      }
    </section>

    <section class="detail-section">
      <div class="detail-section__title">${escapeHtml(t("detailSkillsTitle"))}</div>
      <div class="detail-section__copy">${escapeHtml(t("detailSkillsBody", selected.skill_count))}</div>
      <div class="skill-table">
        ${selected.skills
          .map((skill) => {
            const skillRepoUrl = skillGitHubUrl(selected, skill);
            return `
              <article class="skill-row">
                <div class="skill-row__head">
                  <div>
                    <div class="skill-row__name">${escapeHtml(skill.name)}</div>
                    <div class="skill-row__path">${escapeHtml(skill.relative_path)}</div>
                  </div>
                  <div class="status-row">${badge(
                    t("detailLinkedRatio", skill.linked_clients, skill.expected_clients),
                    skill.linked_clients === skill.expected_clients ? "ok" : "warn",
                  )}</div>
                </div>
                <div class="skill-row__desc">${escapeHtml(skillDescription(skill))}</div>
                <div class="skill-row__actions">
                  ${
                    git.is_git_repo && git.remote_url
                      ? `<button class="mini-action" type="button" data-update-container="${escapeHtml(selected.name)}">${escapeHtml(t("actionUpdateRepo"))}</button>`
                      : `<button class="mini-action is-disabled" type="button" disabled>${escapeHtml(t("actionUnavailable"))}</button>`
                  }
                  ${
                    skillRepoUrl
                      ? `<a class="mini-action" href="${escapeHtml(skillRepoUrl)}" target="_blank" rel="noreferrer">${escapeHtml(t("actionOpenRepo"))}</a>`
                      : ""
                  }
                  ${
                    hasManagerApi()
                      ? `<button class="mini-action" type="button" data-open-path="${escapeHtml(skill.path)}">${escapeHtml(t("actionOpenLocal"))}</button>`
                      : ""
                  }
                </div>
                <div class="skill-row__clients">
                  ${skill.client_links.map((link) => linkBadge(link)).join("")}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function bindEvents(state) {
  document.querySelectorAll("[data-filter]").forEach((el) => {
    el.addEventListener("click", () => {
      UI_STATE.filter = el.getAttribute("data-filter");
      render(state);
    });
  });

  document.querySelectorAll("[data-container]").forEach((el) => {
    el.addEventListener("click", () => {
      UI_STATE.selectedContainer = el.getAttribute("data-container");
      render(state);
    });
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput.dataset.bound !== "true") {
    searchInput.addEventListener("input", (event) => {
      UI_STATE.search = event.target.value;
      render(state);
    });
    searchInput.dataset.bound = "true";
  }
  searchInput.value = UI_STATE.search;

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect.dataset.bound !== "true") {
    sortSelect.addEventListener("change", (event) => {
      UI_STATE.sort = event.target.value;
      render(state);
    });
    sortSelect.dataset.bound = "true";
  }
  sortSelect.value = UI_STATE.sort;

  const bindOnce = (id, fn) => {
    const el = document.getElementById(id);
    if (el.dataset.bound !== "true") {
      el.addEventListener("click", fn);
      el.dataset.bound = "true";
    }
  };

  bindOnce("theme-dark-btn", () => {
    UI_STATE.theme = "dark";
    localStorage.setItem(STORAGE_KEYS.theme, UI_STATE.theme);
    render(state);
  });

  bindOnce("theme-light-btn", () => {
    UI_STATE.theme = "light";
    localStorage.setItem(STORAGE_KEYS.theme, UI_STATE.theme);
    render(state);
  });

  bindOnce("lang-zh-btn", () => {
    UI_STATE.locale = "zh";
    localStorage.setItem(STORAGE_KEYS.locale, UI_STATE.locale);
    render(state);
  });

  bindOnce("lang-en-btn", () => {
    UI_STATE.locale = "en";
    localStorage.setItem(STORAGE_KEYS.locale, UI_STATE.locale);
    render(state);
  });

  document.querySelectorAll("[data-open-path]").forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        await apiJson("/api/open-folder", {
          method: "POST",
          body: { path: el.getAttribute("data-open-path") },
        });
        setNotice(el.getAttribute("data-open-path"), "ok");
      } catch (error) {
        setNotice(error.message, "danger");
      }
      render(APP_STATE || state);
    });
  });

  document.querySelectorAll("[data-update-container]").forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        setNotice(t("noticeUpdating"), "warn");
        render(APP_STATE || state);
        const payload = await apiJson("/api/update-container", {
          method: "POST",
          body: { container: el.getAttribute("data-update-container") },
        });
        APP_STATE = payload.state || APP_STATE;
        setNotice(payload.message || t("noticeRefreshDone"), "ok");
      } catch (error) {
        setNotice(error.message, "danger");
      }
      render(APP_STATE || state);
    });
  });

  const relocateButton = document.getElementById("relocate-root-btn");
  if (relocateButton) {
    relocateButton.addEventListener("click", async () => {
      try {
        setNotice(t("noticePickLocation"), "warn");
        render(APP_STATE || state);
        const picked = await apiJson("/api/pick-directory", { method: "POST" });
        if (!picked.path) {
          throw new Error(t("actionUnavailable"));
        }
        setNotice(t("noticeRelocating"), "warn");
        render(APP_STATE || state);
        const payload = await apiJson("/api/relocate-library", {
          method: "POST",
          body: { new_root: picked.path },
        });
        APP_STATE = payload.state || APP_STATE;
        setNotice(payload.message || t("noticeRefreshDone"), "ok");
      } catch (error) {
        setNotice(error.message, "danger");
      }
      render(APP_STATE || state);
    });
  }
}

function render(state) {
  applyDocumentSettings();
  renderStaticTexts();
  renderNotice();
  renderBrandChrome(state);
  renderThemeAndLocaleControls();
  renderSortOptions();
  const containers = getFilteredContainers(state);
  syncSelectedContainer(containers);
  renderSidebar(state, containers);
  renderHeader(state);
  renderHero(state);
  renderClients(state);
  renderFilterPills(state);
  renderContainerList(state, containers);
  renderDetail(state);
  bindEvents(state);
}

async function main() {
  try {
    APP_STATE = await loadState();
    if (!APP_STATE) {
      document.body.innerHTML = "<p>Missing shared library state data.</p>";
      return;
    }
    render(APP_STATE);
  } catch (error) {
    document.body.innerHTML = `<p>${escapeHtml(error.message || "Failed to load manager state.")}</p>`;
  }
}

main();
