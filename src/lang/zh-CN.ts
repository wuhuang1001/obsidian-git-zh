/**
 * 中文语言文件
 * Chinese (Simplified) Language File
 */

// 命令名称
export const COMMANDS = {
    EDIT_GITIGNORE: "编辑 .gitignore",
    OPEN_SOURCE_CONTROL_VIEW: "打开源代码管理视图",
    OPEN_HISTORY_VIEW: "打开历史记录视图",
    OPEN_DIFF_VIEW: "打开差异视图",
    OPEN_FILE_ON_GITHUB: "在 GitHub 上打开文件",
    OPEN_FILE_HISTORY_ON_GITHUB: "在 GitHub 上打开文件历史",
    PULL: "拉取",
    FETCH: "获取",
    SWITCH_TO_REMOTE_BRANCH: "切换到远程分支",
    ADD_FILE_TO_GITIGNORE: "将文件添加到 .gitignore",
    COMMIT_AND_SYNC: "提交并同步",
    COMMIT_AND_SYNC_AND_CLOSE: "提交并同步后关闭 Obsidian",
    COMMIT_AND_SYNC_WITH_MESSAGE: "提交并同步（自定义消息）",
    COMMIT_ALL: "提交所有更改",
    COMMIT_ALL_WITH_MESSAGE: "提交所有更改（自定义消息）",
    COMMIT: "提交",
    COMMIT_STAGED: "提交已暂存文件",
    AMEND_STAGED: "修订已暂存文件",
    COMMIT_WITH_MESSAGE: "提交（自定义消息）",
    COMMIT_STAGED_WITH_MESSAGE: "提交已暂存文件（自定义消息）",
    PUSH: "推送",
    STAGE_CURRENT_FILE: "暂存当前文件",
    UNSTAGE_CURRENT_FILE: "取消暂存当前文件",
    EDIT_REMOTES: "编辑远程仓库",
    REMOVE_REMOTE: "移除远程仓库",
    SET_UPSTREAM_BRANCH: "设置上游分支",
    CAUTION_DELETE_REPO: "警告：删除仓库",
    INIT_REPO: "初始化新仓库",
    CLONE_REPO: "克隆远程仓库",
    LIST_CHANGED_FILES: "列出已更改文件",
    SWITCH_BRANCH: "切换分支",
    CREATE_BRANCH: "创建新分支",
    DELETE_BRANCH: "删除分支",
    CAUTION_DISCARD_ALL: "警告：放弃所有更改",
    PAUSE_RESUME_AUTOMATIC: "暂停/恢复自动操作",
    RAW_COMMAND: "原始命令",
    TOGGLE_LINE_AUTHOR: "切换行作者信息",
    RESET_HUNK: "重置代码块",
    STAGE_HUNK: "暂存代码块",
    PREVIEW_HUNK: "预览代码块",
    GO_TO_NEXT_HUNK: "跳转到下一个代码块",
    GO_TO_PREV_HUNK: "跳转到上一个代码块",
} as const;

// 视图名称
export const VIEWS = {
    SOURCE_CONTROL: "源代码管理",
    HISTORY: "历史记录",
    DIFF_VIEW: "差异视图",
    SPLIT_DIFF_VIEW: "分屏差异视图",
} as const;

// 通知消息
export const NOTICES = {
    // 仓库操作
    INITIALIZED_NEW_REPO: "已初始化新仓库",
    NO_REPOSITORY_FOUND: "未找到仓库",
    DELETED_REPO: "已成功删除仓库，正在重新加载插件...",
    CLONING_REPO: (dir: string) => `正在克隆新仓库到 "${dir}"`,
    CLONED_REPO: "已克隆新仓库",
    PLEASE_RESTART: "请重启 Obsidian",
    ABORTED_CLONE: "已取消克隆",
    INVALID_DEPTH: "无效的深度，正在取消克隆",

    // 提交相关
    COMMIT_ABORTED_NO_MESSAGE: "已取消提交：未提供提交消息",
    NO_UPSTREAM_BRANCH: "未设置上游分支，请选择一个",
    DISCARDED_ALL_TRACKED: "已放弃所有跟踪文件的更改",
    DISCARDED_ALL: "已放弃所有文件",
    AUTOMATIC_ROUTINES_PAUSED: "自动操作例程已暂停",
    AUTOMATIC_ROUTINES_RESUMED: "自动操作例程已恢复",
    PAUSED_AUTOMATIC: "已暂停自动操作",
    RESUMED_AUTOMATIC: "已恢复自动操作",

    // 错误消息
    TOO_MANY_CHANGES: "更改太多，无法显示",

    // 确认对话框
    DELETE_REPO_CONFIRM: "您确定要删除仓库（.git 目录）吗？此操作无法撤销。",

    // 其他
    ABORTED: "已取消",
} as const;

// 模态框文本
export const MODALS = {
    // 放弃更改模态框
    DISCARD: "放弃",
    DELETE: "删除",
    DISCARD_ALL_FILES: (count: number) => `放弃所有 ${count} 个文件`,
    DISCARD_ALL_TRACKED_FILES: (count: number) => `放弃所有 ${count} 个跟踪文件`,
    DELETE_UNTRACKED_FILE: (count: number) => `您确定要删除 ${count} 个未跟踪文件吗？它们将根据您的 Obsidian 回收站设置被删除。`,
    DISCARD_TRACKED_FILE: (count: number) => `您确定要放弃 ${count} 个跟踪文件中的所有更改吗？`,
    CANCEL: "取消",

    // 通用
    YES: "是",
    NO: "否",
} as const;

// 设置界面文本
export const SETTINGS = {
    // 自动设置
    AUTOMATIC: "自动",
    SPLIT_TIMERS: "分离自动提交和同步的计时器",
    SPLIT_TIMERS_DESC: "启用后将使用一个间隔进行提交，另一个间隔进行同步。",
    AUTO_COMMIT_INTERVAL: "自动提交并同步间隔（分钟）",
    AUTO_COMMIT_INTERVAL_DESC: (type: string) => `每 X 分钟${type}更改。设置为 0（默认）以禁用。（请参阅下面的设置进行进一步配置！）`,
    AUTO_COMMIT_AFTER_EDIT: "停止编辑文件后自动提交并同步",
    AUTO_COMMIT_AFTER_EDIT_DESC: (type: string, interval: string) =>
        `需要提交并同步间隔不为 0。开启后，在停止编辑文件 ${interval} 后自动${type}。这也可以防止在编辑文件时自动${type}。关闭时，与上次编辑文件无关。`,
    AUTO_COMMIT_AFTER_LATEST: "在最新提交后自动提交并同步",
    AUTO_COMMIT_AFTER_LATEST_DESC: (type: string) =>
        `开启后，将上次自动${type}的时间戳设置为最新提交的时间戳。这减少了在手动提交时自动${type}的频率。`,
    AUTO_PUSH_INTERVAL: "自动推送间隔（分钟）",
    AUTO_PUSH_INTERVAL_DESC: "每 X 分钟推送提交。设置为 0（默认）以禁用。",
    AUTO_PULL_INTERVAL: "自动拉取间隔（分钟）",
    AUTO_PULL_INTERVAL_DESC: "每 X 分钟拉取更改。设置为 0（默认）以禁用。",
    AUTO_COMMIT_ONLY_STAGED: "自动提交并同步仅暂存文件",
    AUTO_COMMIT_ONLY_STAGED_DESC: (type: string) =>
        `开启后，${type}时仅提交暂存的文件。关闭时，提交所有更改的文件。`,
    CUSTOM_MESSAGE_ON_AUTO: "在自动提交并同步时指定自定义提交消息",
    CUSTOM_MESSAGE_ON_AUTO_DESC: "您将收到一个弹出窗口来指定您的消息。",
    AUTO_COMMIT_MESSAGE: "自动提交并同步时的提交消息",
    AUTO_COMMIT_MESSAGE_DESC: "可用占位符：{{date}}（见下文）、{{hostname}}（见下文）、{{numFiles}}（提交中更改的文件数）和 {{files}}（提交消息中的更改文件）。",

    // 提交消息设置
    COMMIT_MESSAGE: "提交消息",
    MANUAL_COMMIT_MESSAGE: "手动提交时的提交消息",
    MANUAL_COMMIT_MESSAGE_DESC: "可用占位符：{{date}}（见下文）、{{hostname}}（见下文）、{{numFiles}}（提交中更改的文件数）和 {{files}}（提交消息中的更改文件）。留空则在每次提交时要求手动输入。",
    COMMIT_MESSAGE_SCRIPT: "提交消息脚本",
    COMMIT_MESSAGE_SCRIPT_DESC: "使用 'sh -c' 运行的脚本，用于生成提交消息。可用于使用 AI 工具生成提交消息。可用占位符：{{hostname}}、{{date}}。",
    DATE_FORMAT: "{{date}} 占位符格式",
    DATE_FORMAT_DESC: "指定自定义日期格式。例如：YYYY-MM-DD HH:mm:ss。有关更多格式，请参阅 Moment.js。",
    HOSTNAME_PLACEHOLDER: "{{hostname}} 占位符替换",
    HOSTNAME_PLACEHOLDER_DESC: "为每个设备指定自定义主机名。如果未设置，桌面版默认为操作系统主机名。",
    PREVIEW_COMMIT_MESSAGE: "预览提交消息",
    PREVIEW: "预览",
    LIST_FILENAMES_IN_BODY: "在提交正文中列出受提交影响的文件名",

    // 拉取设置
    PULL: "拉取",
    MERGE_STRATEGY: "合并策略",
    MERGE_STRATEGY_DESC: "决定如何将远程分支的提交集成到本地分支。",
    MERGE_STRATEGY_MERGE: "合并",
    MERGE_STRATEGY_REBASE: "变基",
    MERGE_STRATEGY_RESET: "其他同步服务（仅更新 HEAD，不触碰工作目录）",
    MERGE_STRATEGY_ON_CONFLICT: "冲突时的合并策略",
    MERGE_STRATEGY_ON_CONFLICT_DESC: "决定在拉取远程更改时如何解决冲突。可用于自动优先使用本地更改或远程更改。",
    MERGE_STRATEGY_NONE: "无（git 默认）",
    MERGE_STRATEGY_OURS: "我们的更改",
    MERGE_STRATEGY_THEIRS: "他们的更改",
    PULL_ON_STARTUP: "启动时拉取",
    PULL_ON_STARTUP_DESC: "Obsidian 启动时自动拉取提交。",

    // 提交并同步设置
    COMMIT_AND_SYNC: "提交并同步",
    COMMIT_AND_SYNC_DESC: "使用默认设置的提交并同步意味着：暂存所有内容 -> 提交 -> 拉取 -> 推送。理想情况下，这是您定期执行的单个操作，以保持本地和远程仓库同步。",
    PUSH_ON_COMMIT_SYNC: "提交并同步时推送",
    PUSH_ON_COMMIT_SYNC_DESC: (pullEnabled: boolean) =>
        `大多数情况下，您希望在提交后推送。关闭此选项会将提交并同步操作变为仅提交${pullEnabled ? "和拉取" : ""}。它仍然称为提交并同步。`,
    PULL_ON_COMMIT_SYNC: "提交并同步时拉取",
    PULL_ON_COMMIT_SYNC_DESC: (pushEnabled: boolean) =>
        `在提交并同步时，同时拉取提交。关闭此选项会将提交并同步操作变为仅提交${pushEnabled ? "和推送" : ""}。`,

    // 代码块管理
    HUNK_MANAGEMENT: "代码块管理",
    HUNK_MANAGEMENT_DESC: "代码块是编辑器中分组显示的行更改部分。",
    SIGNS: "标记",
    SIGNS_DESC: "允许您通过彩色标记在编辑器中直接查看更改，并暂存/重置/预览单个代码块。",
    HUNK_COMMANDS: "代码块命令",
    HUNK_COMMANDS_DESC: "添加命令以重置、暂存和预览光标下的代码块。",
    CHANGED_FILES_STATUS_BAR: "状态栏中的已更改文件",
    CHANGED_FILES_STATUS_BAR_DESC: "在状态栏中显示已更改文件的数量。",
    CHANGED_FILES_STATUS_BAR_COLORED: "彩色",
    CHANGED_FILES_STATUS_BAR_MONOCHROME: "单色",
    CHANGED_FILES_STATUS_BAR_DISABLED: "禁用",

    // 分支设置
    BRANCH: "分支",
    BRANCH_STATUS_BAR: "状态栏中的分支",
    BRANCH_STATUS_BAR_DESC: "在状态栏中显示当前分支。",

    // 远程设置
    REMOTE: "远程",
    UPDATE_SUBMODULES: "更新子模块",
    UPDATE_SUBMODULES_DESC: "在提交并同步时更新子模块。",
    SUBMODULE_RECURSE_CHECKOUT: "递归检出子模块",
    SUBMODULE_RECURSE_CHECKOUT_DESC: "检出分支时递归更新子模块。",

    // 备份设置
    BACKUP: "备份",
    GIT_PATH: "Git 路径",
    GIT_PATH_DESC: "Git 可执行文件的完整路径。",
    BASE_PATH: "基础路径",
    BASE_PATH_DESC: "仓库所在文件夹的相对路径。留空则使用 vault 根目录。",
    GIT_DIR: "Git 目录",
    GIT_DIR_DESC: ".git 目录的相对路径。留空则使用默认位置。",

    // 源代码管理视图
    SOURCE_CONTROL_VIEW: "源代码管理视图",
    REFRESH_SOURCE_CONTROL: "刷新源代码管理",
    REFRESH_SOURCE_CONTROL_DESC: "自动刷新源代码管理视图。",
    REFRESH_SOURCE_CONTROL_TIMER: "刷新间隔（毫秒）",
    REFRESH_SOURCE_CONTROL_TIMER_DESC: "刷新源代码管理视图的时间间隔。",
    TREE_STRUCTURE: "树形结构",
    TREE_STRUCTURE_DESC: "以树形结构显示文件。",
    SHOW_FILE_MENU: "显示文件菜单",
    SHOW_FILE_MENU_DESC: "在文件菜单中显示 Git 操作。",

    // 历史视图
    HISTORY_VIEW: "历史视图",
    AUTHOR_IN_HISTORY: "历史视图中的作者",
    DATE_IN_HISTORY: "历史视图中的日期",
    DATE_IN_HISTORY_DESC: "在历史视图中显示提交日期。",
    AUTHOR_FULL: "完整名称",
    AUTHOR_INITIALS: "首字母",
    AUTHOR_HIDE: "隐藏",

    // 差异视图
    DIFF_VIEW: "差异视图",
    DIFF_STYLE: "差异样式",
    DIFF_STYLE_DESC: "显示差异的样式。",
    DIFF_STYLE_GIT_UNIFIED: "Git 统一格式",
    DIFF_STYLE_SPLIT: "分屏",

    // 行作者设置
    LINE_AUTHOR: "行作者",
    LINE_AUTHOR_FEATURE: "行作者功能",
    LINE_AUTHOR_FEATURE_DESC: "在编辑器边栏显示每行的作者信息。",
    LINE_AUTHOR_SHOW: "显示行作者信息",
    LINE_AUTHOR_FOLLOW_MOVEMENT: "跟随移动",
    LINE_AUTHOR_FOLLOW_MOVEMENT_DESC: "检测行的移动并显示原始作者。",
    LINE_AUTHOR_FOLLOW_MOVEMENT_INACTIVE: "不活跃",
    LINE_AUTHOR_FOLLOW_MOVEMENT_ACTIVE: "活跃",
    LINE_AUTHOR_FOLLOW_MOVEMENT_ALWAYS: "总是",
    LINE_AUTHOR_DISPLAY: "作者显示",
    LINE_AUTHOR_DISPLAY_DESC: "如何显示作者名称。",
    LINE_AUTHOR_DISPLAY_FULL: "完整名称",
    LINE_AUTHOR_DISPLAY_INITIALS: "首字母",
    LINE_AUTHOR_DISPLAY_HIDE: "隐藏",
    LINE_AUTHOR_SHOW_COMMIT_HASH: "显示提交哈希",
    LINE_AUTHOR_DATE_TIME_FORMAT: "日期时间格式",
    LINE_AUTHOR_DATE_TIME_FORMAT_DESC: "显示日期时间的格式。",
    LINE_AUTHOR_DATE_TIME_DATE: "仅日期",
    LINE_AUTHOR_DATE_TIME_DATETIME: "日期和时间",
    LINE_AUTHOR_DATE_TIME_CUSTOM: "自定义",
    LINE_AUTHOR_DATE_TIME_CUSTOM_STRING: "自定义日期时间格式字符串",
    LINE_AUTHOR_TIMEZONE: "时区",
    LINE_AUTHOR_TIMEZONE_DESC: "用于显示日期时间的时区。",
    LINE_AUTHOR_TIMEZONE_VIEWER_LOCAL: "查看者本地时间",
    LINE_AUTHOR_TIMEZONE_AUTHOR_LOCAL: "作者本地时间",
    LINE_AUTHOR_COLORING_MAX_AGE: "着色最大年龄",
    LINE_AUTHOR_COLORING_MAX_AGE_DESC: "用于着色行的最大年龄。",
    LINE_AUTHOR_COLOR_NEW: "新行颜色",
    LINE_AUTHOR_COLOR_OLD: "旧行颜色",
    LINE_AUTHOR_TEXT_COLOR: "文本颜色",
    LINE_AUTHOR_IGNORE_WHITESPACE: "忽略空白",

    // 高级设置
    ADVANCED: "高级",
    DISABLE_POPUPS: "禁用弹出通知",
    DISABLE_POPUPS_DESC: "禁用成功操作的弹出通知。",
    SHOW_ERROR_NOTICES: "显示错误通知",
    SHOW_ERROR_NOTICES_DESC: "显示错误的弹出通知。",
    DISABLE_POPUPS_NO_CHANGES: "无更改时禁用弹出通知",
    DISABLE_POPUPS_NO_CHANGES_DESC: "没有更改时禁用弹出通知。",

    // Git 未就绪
    GIT_NOT_READY: "Git 未就绪。当所有设置正确后，您可以配置提交同步等。",

    // 差异样式
    COMMIT: "提交",
    SYNC: "同步",
} as const;

// 通用文本
export const COMMON = {
    FILE: "文件",
    FILES: "文件",
    BRANCH: "分支",
    COMMIT: "提交",
    STAGED: "已暂存",
    UNSTAGED: "未暂存",
    CHANGES: "更改",
    CONFLICTS: "冲突",
    UNTRACKED: "未跟踪",
    MODIFIED: "已修改",
    ADDED: "已添加",
    DELETED: "已删除",
    RENAMED: "已重命名",
} as const;
