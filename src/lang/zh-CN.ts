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

    // 状态栏设置
    STATUS_BAR_LINE_CHANGES: "状态栏中的行更改摘要",
    STATUS_BAR_LINE_CHANGES_DESC: "在状态栏中显示行更改摘要。",

    // 历史视图设置
    SHOW_AUTHOR: "显示作者",
    SHOW_AUTHOR_DESC: "在历史视图中显示提交的作者。",
    SHOW_DATE: "显示日期",
    SHOW_DATE_DESC: "在历史视图中显示提交日期。使用 {{date}} 占位符格式显示日期。",

    // 源代码管理视图设置
    AUTO_REFRESH_SOURCE_CONTROL: "文件更改时自动刷新源代码管理视图",
    AUTO_REFRESH_SOURCE_CONTROL_DESC: "在较慢的机器上这可能会导致延迟。如果是这样，请禁用此选项。",
    SOURCE_CONTROL_REFRESH_INTERVAL: "源代码管理视图刷新间隔",
    SOURCE_CONTROL_REFRESH_INTERVAL_DESC: "文件更改后刷新源代码管理视图之前等待的毫秒数。",

    // 杂项设置
    MISCELLANEOUS: "杂项",
    DIFF_VIEW_STYLE: "差异视图样式",
    DIFF_VIEW_STYLE_DESC: "设置差异视图的样式。请注意，\"分屏\"模式下的实际差异不是由 Git 生成的，而是由编辑器本身生成的，因此可能与 Git 生成的差异不同。这样做的一个优点是您可以在该视图中编辑文本。",
    DIFF_STYLE_UNIFIED: "统一",

    // 通知设置
    DISABLE_INFORMATIVE_NOTIFICATIONS: "禁用信息通知",
    DISABLE_INFORMATIVE_NOTIFICATIONS_DESC: "禁用 Git 操作的信息通知以减少干扰（请参阅状态栏获取更新）。",
    DISABLE_ERROR_NOTIFICATIONS: "禁用错误通知",
    DISABLE_ERROR_NOTIFICATIONS_DESC: "禁用任何类型的错误通知以减少干扰（请参阅状态栏获取更新）。",
    HIDE_NOTIFICATIONS_NO_CHANGES: "无更改时隐藏通知",
    HIDE_NOTIFICATIONS_NO_CHANGES_DESC: "当没有要提交或推送的更改时不显示通知。",

    // 状态栏设置
    SHOW_STATUS_BAR: "显示状态栏",
    SHOW_STATUS_BAR_DESC: "必须重启 Obsidian 才能使更改生效。",
    FILE_MENU_INTEGRATION: "文件菜单集成",
    FILE_MENU_INTEGRATION_DESC: "将 \"暂存\"、\"取消暂存\" 和 \"添加到 .gitignore\" 操作添加到文件菜单。",
    SHOW_BRANCH_STATUS_BAR: "显示分支状态栏",
    SHOW_BRANCH_STATUS_BAR_DESC: "必须重启 Obsidian 才能使更改生效。",
    SHOW_MODIFIED_FILES_COUNT: "在状态栏中显示已修改文件的数量",

    // 认证/提交作者设置
    AUTHENTICATION_COMMIT_AUTHOR: "认证/提交作者",
    COMMIT_AUTHOR: "提交作者",
    GIT_SERVER_USERNAME: "Git 服务器上的用户名",
    GIT_SERVER_USERNAME_DESC: "例如您在 GitHub 上的用户名",
    PASSWORD_ACCESS_TOKEN: "密码/个人访问令牌",
    PASSWORD_ACCESS_TOKEN_DESC: "输入您的密码。您将无法再次看到它。",
    AUTHOR_NAME_FOR_COMMIT: "提交作者名称",
    AUTHOR_EMAIL_FOR_COMMIT: "提交作者邮箱",

    // 高级设置
    ADVANCED_SETTINGS: "高级",
    ADVANCED_SETTINGS_DESC: "这些设置通常不需要更改，但可能需要用于特殊设置。",
    UPDATE_SUBMODULES_DESC_FULL: "\"提交并同步\" 和 \"拉取\" 会处理子模块。缺少的功能：冲突文件、拉取/推送/提交文件的数量。需要为每个子模块设置跟踪分支。",
    SUBMODULE_RECURSE_CHECKOUT_FULL: "递归检出/切换子模块",
    SUBMODULE_RECURSE_CHECKOUT_DESC_FULL: "每当根仓库发生检出时，递归地对子模块进行检出（如果分支存在）。",
    CUSTOM_GIT_BINARY_PATH: "自定义 Git 二进制路径",
    CUSTOM_GIT_BINARY_PATH_DESC: "指定 Git 二进制文件/可执行文件的路径。Git 应该已经在您的 PATH 中。仅对于自定义 Git 安装才需要。",
    ADDITIONAL_ENV_VARS: "附加环境变量",
    ADDITIONAL_ENV_VARS_DESC: "每行使用一个环境变量，格式为 KEY=VALUE。",
    ADDITIONAL_PATH_PATHS: "附加 PATH 环境变量路径",
    ADDITIONAL_PATH_PATHS_DESC: "每行使用一个路径",
    RELOAD_ENV_VARS: "使用新环境变量重新加载",
    RELOAD_ENV_VARS_DESC: "删除之前添加的环境变量需要重启 Obsidian 才能生效。",
    RELOAD_BUTTON: "重新加载",

    // 自定义路径设置
    CUSTOM_BASE_PATH: "自定义基础路径（Git 仓库路径）",
    CUSTOM_BASE_PATH_DESC: "设置 Git 二进制文件应从中执行的 vault 相对路径。主要用于设置 Git 仓库的路径，仅当 Git 仓库位于 vault 根目录下时才需要。在 Windows 上使用 \"\\\" 代替 \"/\"。",
    CUSTOM_GIT_DIR_PATH: "自定义 Git 目录路径（代替 '.git'）",
    CUSTOM_GIT_DIR_PATH_DESC: "对应于 GIT_DIR 环境变量。需要重启 Obsidian 才能生效。在 Windows 上使用 \"\\\" 代替 \"/\"。",

    // 禁用设备设置
    DISABLE_ON_DEVICE: "在此设备上禁用",
    DISABLE_ON_DEVICE_DESC: "在此设备上禁用插件。此设置不会同步。",

    // 支持设置
    SUPPORT: "支持",
    DONATE: "捐赠",
    DONATE_DESC: "如果您喜欢此插件，请考虑捐赠以支持持续开发。",

    // 行作者详细设置
    LINE_AUTHOR_SHOW_INFO: "在每行旁边显示提交作者信息",
    LINE_AUTHOR_FEATURE_GUIDE: "功能指南和快速示例",
    LINE_AUTHOR_DESKTOP_ONLY: "目前仅在桌面版可用。",
    LINE_AUTHOR_FEATURE_DESC_FULL: "提交哈希、作者名称和创作日期都可以单独切换。</br>隐藏所有内容，仅显示按年龄着色的侧边栏。",
    FOLLOW_MOVEMENT_COPIES: "跨文件和提交跟踪移动和复制",
    FOLLOW_MOVEMENT_DESC: "默认情况下（停用），每行仅显示其更改的最新提交。<br/>使用<i>同一提交</i>，将在同一提交中跟踪文本的剪切-复制-粘贴，并显示原始创作的提交。<br/>使用<i>所有提交</i>，将检测多个提交之间的剪切-复制-粘贴文本。<br/>它使用 <a href=\"https://git-scm.com/docs/git-blame\">git-blame</a>，对于同一（或所有）提交中的匹配项（至少 ${GIT_LINE_AUTHORING_MOVEMENT_DETECTION_MINIMAL_LENGTH} 个字符），将显示<em>原始</em>提交的信息。",
    FOLLOW_MOVEMENT_INACTIVE: "不跟踪（默认）",
    FOLLOW_MOVEMENT_SAME_COMMIT: "在同一提交内跟踪",
    FOLLOW_MOVEMENT_ALL_COMMITS: "在所有提交内跟踪（可能较慢）",
    SHOW_COMMIT_HASH: "显示提交哈希",
    AUTHOR_NAME_DISPLAY: "作者名称显示",
    AUTHOR_NAME_DISPLAY_DESC: "是否以及如何显示作者",
    AUTHOR_DISPLAY_HIDE: "隐藏",
    AUTHOR_DISPLAY_INITIALS: "首字母（默认）",
    AUTHOR_DISPLAY_FIRST_NAME: "名字",
    AUTHOR_DISPLAY_LAST_NAME: "姓氏",
    AUTHOR_DISPLAY_FULL: "完整名称",
    AUTHORING_DATE_DISPLAY: "创作日期显示",
    AUTHORING_DATE_DISPLAY_DESC: "是否以及如何显示行的创作日期和时间",
    DATE_DISPLAY_HIDE: "隐藏",
    DATE_DISPLAY_DATE: "日期（默认）",
    DATE_DISPLAY_DATETIME: "日期和时间",
    DATE_DISPLAY_NATURAL: "自然语言",
    DATE_DISPLAY_CUSTOM: "自定义",
    CUSTOM_AUTHORING_DATE_FORMAT: "自定义创作日期格式",
    AUTHORING_DATE_DISPLAY_TIMEZONE: "创作日期显示时区",
    TIMEZONE_VIEWER_LOCAL: "我的本地时间（默认）",
    TIMEZONE_AUTHOR_LOCAL: "作者本地时间",
    TIMEZONE_UTC0000: "UTC+0000/Z",
    TIMEZONE_DESC: "显示创作日期的时区。可以是您的本地时区（默认）、提交创建期间作者的时区或 <a href=\"https://en.wikipedia.org/wiki/UTC%C2%B100:00\">UTC±00:00</a>。",
    OLDEST_AGE_COLORING: "着色中的最旧年龄",
    TEXT_COLOR: "文本颜色",
    TEXT_COLOR_DESC: "侧边栏文本的 CSS 颜色。<br/>强烈建议使用主题定义的 <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties\">CSS 变量</a>（例如 <pre style=\"display:inline\">var(--text-muted)</pre> 或 <pre style=\"display:inline\">var(--text-on-accent)</pre>），因为它们会自动适应主题更改。<br/>参见：<a href=\"https://github.com/obsidian-community/obsidian-theme-template/blob/main/obsidian.css\">Obsidian 中可用的 CSS 变量列表</a>",
    IGNORE_WHITESPACE: "忽略更改中的空白和换行符",
    IGNORE_WHITESPACE_DESC: "默认情况下，空白和换行符被视为文档和更改的一部分（因此不会被忽略）。这使得添加新后续行时，最后一行显示为\"已更改\"，即使之前最后一行的文本相同。<br>如果您不关心纯空白更改（例如列表嵌套/引用缩进更改），则激活此选项将提供更有意义的更改检测。",
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
