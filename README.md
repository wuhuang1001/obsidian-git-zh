# Obsidian Git 插件 (中文版)

一个强大的 [Obsidian.md](https://obsidian.md) 社区插件，将 Git 集成直接带入您的库。自动提交、拉取、推送，查看您的更改 — 全部在 Obsidian 中完成。

> 📌 这是 [Vinzent03/obsidian-git](https://github.com/Vinzent03/obsidian-git) 的中文汉化版本。

## 📚 文档

所有设置说明（包括移动端）、常见问题、提示和高级配置都可以在 📖 [完整文档](https://publish.obsidian.md/git-doc) 中找到。

> 移动端用户：该插件在移动端**非常不稳定 ⚠️！** 请查看下方专门的 [移动端支持](#-移动端支持-%EF%B8%8F--实验性) 部分。

## 主要功能

- 🔁 **自动提交并同步**（提交、拉取和推送）按计划执行
- 📥 **Obsidian 启动时自动拉取**
- 📂 **子模块支持**，用于管理多个仓库（仅桌面端，需手动开启）
- 🔧 **源代码管理视图**，用于暂存/取消暂存、提交和对比文件 - 通过 `打开源代码管理视图` 命令打开
- 📜 **历史记录视图**，用于浏览提交日志和更改的文件 - 通过 `打开历史记录视图` 命令打开
- 🔍 **差异视图**，用于查看文件更改 - 通过 `打开差异视图` 命令打开
- 📝 **编辑器标记**，用于指示添加、修改和删除的行/代码块（仅桌面端）
- GitHub 集成，在浏览器中打开文件和历史记录

> 对于详细的文件历史，可以考虑将此插件与 [Version History Diff](obsidian://show-plugin?id=obsidian-version-history-diff) 插件配合使用。

## 界面预览

### 🔧 源代码管理视图

直接在 Obsidian 中管理文件更改，如暂存/取消暂存单个文件并提交它们。

![源代码管理视图](https://raw.githubusercontent.com/Vinzent03/obsidian-git/master/images/source-view.png)

### 📜 历史记录视图

显示仓库的提交历史。可以显示提交消息、作者、日期和更改的文件。作者和日期默认禁用（如截图所示），但可以在设置中启用。

![历史记录视图](https://raw.githubusercontent.com/Vinzent03/obsidian-git/master/images/history-view.png)

### 🔍 差异视图

使用清晰简洁的差异查看器比较版本。
从源代码管理视图或通过 `打开差异视图` 命令打开。

![差异视图](https://raw.githubusercontent.com/Vinzent03/obsidian-git/master/images/diff-view.png)

### 📝 编辑器标记

直接在编辑器中查看逐行更改，包括添加、修改和删除的行/代码块指示器。您可以直接从标记中暂存和重置更改。还有命令可以在代码块之间导航以及暂存/重置光标下的代码块。需要在插件设置中启用。

![标记](https://raw.githubusercontent.com/Vinzent03/obsidian-git/master/images/signs.png)

## 可用命令
> 非详尽列表 - 这些只是一些最常用的命令。完整列表请查看 Obsidian 中的命令面板。

- 🔄 更改
  - `列出已更改文件`：在模态框中列出所有更改
  - `打开差异视图`：打开当前文件的差异视图
  - `暂存当前文件`
  - `取消暂存当前文件`
  - `警告：放弃所有更改`：放弃仓库中的所有更改
- ✅ 提交
  - `提交`：如果文件已暂存则仅提交这些文件，否则只提交已暂存的文件
  - `提交（自定义消息）`：与上面相同，但使用自定义消息
  - `提交所有更改`：提交所有更改，不推送
  - `提交所有更改（自定义消息）`：与上面相同，但使用自定义消息
- 🔀 提交并同步
  - `提交并同步`：使用默认设置，这将提交所有更改、拉取并推送
  - `提交并同步（自定义消息）`：与上面相同，但使用自定义消息
  - `提交并同步后关闭 Obsidian`：与 `提交并同步` 相同，但如果在桌面端运行，将关闭 Obsidian 窗口。在移动端不会退出 Obsidian 应用。
- 🌐 远程
  - `推送`、`拉取`
  - `编辑远程仓库`：添加新远程或编辑现有远程
  - `移除远程仓库`
  - `克隆远程仓库`：打开对话框，提示输入 URL 和认证信息以克隆远程仓库
  - `在 GitHub 上打开文件`：在浏览器窗口中打开 GitHub 上当前文件的视图。注意：仅在桌面端有效
  - `在 GitHub 上打开文件历史`：在浏览器窗口中打开 GitHub 上当前文件的历史。注意：仅在桌面端有效
- 🏠 管理本地仓库
  - `初始化新仓库`
  - `创建新分支`
  - `删除分支`
  - `警告：删除仓库`
- 🧪 其他
  - `打开源代码管理视图`：打开侧边栏显示源代码管理视图
  - `打开历史记录视图`：打开侧边栏显示历史记录视图
  - `编辑 .gitignore`
  - `将文件添加到 .gitignore`：将当前文件添加到 `.gitignore`

## 💻 桌面端说明

### 🔐 认证

某些 Git 服务可能需要进一步设置 HTTPS/SSH 认证。请参阅 [认证指南](https://publish.obsidian.md/git-doc/Authentication)

### Linux 上的 Obsidian

- ⚠️ 由于沙盒限制，不支持 Snap 版本。
- ⚠️ 不推荐 Flatpak 版本，因为它无法访问所有系统文件。他们正在积极修复许多问题，但仍有问题。特别是对于更高级的设置。
- ✅ 请改用 AppImage 或系统包管理器的完整访问安装（[Linux 安装指南](https://publish.obsidian.md/git-doc/Installation#Linux)）

## 📱 移动端支持 (⚠️ 实验性)

移动端的 Git 实现**非常不稳定**！我不建议在移动端使用此插件，建议尝试其他同步服务。

一个替代方案是 [GitSync](https://github.com/ViscousPot/GitSync)，它在 Android 和 iOS 上都可用。它与本插件无关，但可能是移动端用户的更好选择。设置教程可以在 [这里](https://viscouspotenti.al/posts/gitsync-all-devices-tutorial) 找到。

> 🧪 Git 插件在移动端运行得益于 [isomorphic-git](https://isomorphic-git.org/)，一个基于 JavaScript 的 Git 重新实现 - 但它带来了严重的限制和问题。Obsidian 插件无法在 Android 或 iOS 上使用原生 Git 安装。

### ❌ 移动端功能限制

- 无 **SSH 认证** ([isomorphic-git 问题](https://github.com/isomorphic-git/isomorphic-git/issues/231))
- 由于内存限制，仓库大小受限
- 无变基合并策略
- 不支持子模块

### ⚠️ 性能注意事项

> [!caution]
> 根据您的设备和可用内存，Obsidian 可能会
>
> - 在克隆/拉取时崩溃
> - 产生缓冲区溢出错误
> - 无限期运行
>
> 这是由移动端底层 Git 实现效率不高导致的。我不知道如何解决这个问题。如果您遇到这种情况，我必须承认这个插件不适合您。所以在任何问题下评论或创建新问题都没有帮助。我很抱歉。

### 移动端使用提示：

如果您有大型仓库/库，我建议暂存单个文件并仅提交已暂存的文件。

## 🔄 与上游同步

~~本仓库每天自动同步上游 [Vinzent03/obsidian-git](https://github.com/Vinzent03/obsidian-git) 的更新。~~

## 🙋 联系与致谢

- 行作者功能由 [GollyTicker](https://github.com/GollyTicker) 开发，因此任何问题最好向她咨询。
- 此插件最初由 [denolehov](https://github.com/denolehov) 开发。自 2021 年 3 月起，由我 [Vinzent03](https://github.com/Vinzent03) 开发此插件。这就是为什么 GitHub 仓库在 2024 年 7 月转移到我的账户。
- 如果您有任何反馈或问题，请随时通过 GitHub issues 联系。
- 中文汉化由 [wuhuang1001](https://github.com/wuhuang1001) 完成。

## ☕ 支持

如果您觉得此插件有用并想支持其开发，可以在 Ko-fi 上支持我。

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F195IQ5)
