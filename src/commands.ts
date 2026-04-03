import { Notice, Platform, TFolder, WorkspaceLeaf } from "obsidian";
import { HISTORY_VIEW_CONFIG, SOURCE_CONTROL_VIEW_CONFIG } from "./constants";
import { SimpleGit } from "./gitManager/simpleGit";
import { COMMANDS, MODALS, NOTICES } from "./lang/zh-CN";
import ObsidianGit from "./main";
import { openHistoryInGitHub, openLineInGitHub } from "./openInGitHub";
import { ChangedFilesModal } from "./ui/modals/changedFilesModal";
import { GeneralModal } from "./ui/modals/generalModal";
import { IgnoreModal } from "./ui/modals/ignoreModal";
import { assertNever } from "./utils";
import { togglePreviewHunk } from "./editor/signs/tooltip";

export function addCommmands(plugin: ObsidianGit) {
    const app = plugin.app;

    plugin.addCommand({
        id: "edit-gitignore",
        name: COMMANDS.EDIT_GITIGNORE,
        callback: async () => {
            const path = plugin.gitManager.getRelativeVaultPath(".gitignore");
            if (!(await app.vault.adapter.exists(path))) {
                await app.vault.adapter.write(path, "");
            }
            const content = await app.vault.adapter.read(path);
            const modal = new IgnoreModal(app, content);
            const res = await modal.openAndGetReslt();
            if (res !== undefined) {
                await app.vault.adapter.write(path, res);
                await plugin.refresh();
            }
        },
    });
    plugin.addCommand({
        id: "open-git-view",
        name: COMMANDS.OPEN_SOURCE_CONTROL_VIEW,
        callback: async () => {
            const leafs = app.workspace.getLeavesOfType(
                SOURCE_CONTROL_VIEW_CONFIG.type
            );
            let leaf: WorkspaceLeaf;
            if (leafs.length === 0) {
                leaf =
                    app.workspace.getRightLeaf(false) ??
                    app.workspace.getLeaf();
                await leaf.setViewState({
                    type: SOURCE_CONTROL_VIEW_CONFIG.type,
                });
            } else {
                leaf = leafs.first()!;
            }
            await app.workspace.revealLeaf(leaf);

            // Is not needed for the first open, but allows to refresh the view
            // per hotkey even if already opened
            app.workspace.trigger("obsidian-git:refresh");
        },
    });
    plugin.addCommand({
        id: "open-history-view",
        name: COMMANDS.OPEN_HISTORY_VIEW,
        callback: async () => {
            const leafs = app.workspace.getLeavesOfType(
                HISTORY_VIEW_CONFIG.type
            );
            let leaf: WorkspaceLeaf;
            if (leafs.length === 0) {
                leaf =
                    app.workspace.getRightLeaf(false) ??
                    app.workspace.getLeaf();
                await leaf.setViewState({
                    type: HISTORY_VIEW_CONFIG.type,
                });
            } else {
                leaf = leafs.first()!;
            }
            await app.workspace.revealLeaf(leaf);

            // Is not needed for the first open, but allows to refresh the view
            // per hotkey even if already opened
            app.workspace.trigger("obsidian-git:refresh");
        },
    });

    plugin.addCommand({
        id: "open-diff-view",
        name: COMMANDS.OPEN_DIFF_VIEW,
        checkCallback: (checking) => {
            const file = app.workspace.getActiveFile();
            if (checking) {
                return file !== null;
            } else {
                const filePath = plugin.gitManager.getRelativeRepoPath(
                    file!.path,
                    true
                );
                plugin.tools.openDiff({
                    aFile: filePath,
                    aRef: "",
                });
            }
        },
    });

    plugin.addCommand({
        id: "view-file-on-github",
        name: COMMANDS.OPEN_FILE_ON_GITHUB,
        editorCallback: (editor, { file }) => {
            if (file) return openLineInGitHub(editor, file, plugin.gitManager);
        },
    });

    plugin.addCommand({
        id: "view-history-on-github",
        name: COMMANDS.OPEN_FILE_HISTORY_ON_GITHUB,
        editorCallback: (_, { file }) => {
            if (file) return openHistoryInGitHub(file, plugin.gitManager);
        },
    });

    plugin.addCommand({
        id: "pull",
        name: COMMANDS.PULL,
        callback: () =>
            plugin.promiseQueue.addTask(() => plugin.pullChangesFromRemote()),
    });

    plugin.addCommand({
        id: "fetch",
        name: COMMANDS.FETCH,
        callback: () => plugin.promiseQueue.addTask(() => plugin.fetch()),
    });

    plugin.addCommand({
        id: "switch-to-remote-branch",
        name: COMMANDS.SWITCH_TO_REMOTE_BRANCH,
        callback: () =>
            plugin.promiseQueue.addTask(() => plugin.switchRemoteBranch()),
    });

    plugin.addCommand({
        id: "add-to-gitignore",
        name: COMMANDS.ADD_FILE_TO_GITIGNORE,
        checkCallback: (checking) => {
            const file = app.workspace.getActiveFile();
            if (checking) {
                return file !== null;
            } else {
                plugin
                    .addFileToGitignore(file!.path, file instanceof TFolder)
                    .catch((e) => plugin.displayError(e));
            }
        },
    });

    plugin.addCommand({
        id: "push",
        name: COMMANDS.COMMIT_AND_SYNC,
        callback: () =>
            plugin.promiseQueue.addTask(() =>
                plugin.commitAndSync({ fromAutoBackup: false })
            ),
    });

    plugin.addCommand({
        id: "backup-and-close",
        name: COMMANDS.COMMIT_AND_SYNC_AND_CLOSE,
        callback: () =>
            plugin.promiseQueue.addTask(async () => {
                await plugin.commitAndSync({ fromAutoBackup: false });
                window.close();
            }),
    });

    plugin.addCommand({
        id: "commit-push-specified-message",
        name: COMMANDS.COMMIT_AND_SYNC_WITH_MESSAGE,
        callback: () =>
            plugin.promiseQueue.addTask(() =>
                plugin.commitAndSync({
                    fromAutoBackup: false,
                    requestCustomMessage: true,
                })
            ),
    });

    plugin.addCommand({
        id: "commit",
        name: COMMANDS.COMMIT_ALL,
        callback: () =>
            plugin.promiseQueue.addTask(() =>
                plugin.commit({ fromAuto: false })
            ),
    });

    plugin.addCommand({
        id: "commit-specified-message",
        name: COMMANDS.COMMIT_ALL_WITH_MESSAGE,
        callback: () =>
            plugin.promiseQueue.addTask(() =>
                plugin.commit({
                    fromAuto: false,
                    requestCustomMessage: true,
                })
            ),
    });

    plugin.addCommand({
        id: "commit-smart",
        name: COMMANDS.COMMIT,
        callback: () =>
            plugin.promiseQueue.addTask(async () => {
                const status = await plugin.updateCachedStatus();
                const onlyStaged = status.staged.length > 0;
                return plugin.commit({
                    fromAuto: false,
                    requestCustomMessage: false,
                    onlyStaged: onlyStaged,
                });
            }),
    });

    plugin.addCommand({
        id: "commit-staged",
        name: COMMANDS.COMMIT_STAGED,
        checkCallback: function (checking) {
            // Don't show this command in command palette, because the
            // commit-smart command is more useful. Still provide this command
            // for hotkeys and automation.
            if (checking) return false;

            plugin.promiseQueue.addTask(async () => {
                return plugin.commit({
                    fromAuto: false,
                    requestCustomMessage: false,
                });
            });
        },
    });

    if (Platform.isDesktopApp) {
        plugin.addCommand({
            id: "commit-amend-staged-specified-message",
            name: COMMANDS.AMEND_STAGED,
            callback: () =>
                plugin.promiseQueue.addTask(() =>
                    plugin.commit({
                        fromAuto: false,
                        requestCustomMessage: true,
                        onlyStaged: true,
                        amend: true,
                    })
                ),
        });
    }

    plugin.addCommand({
        id: "commit-smart-specified-message",
        name: COMMANDS.COMMIT_WITH_MESSAGE,
        callback: () =>
            plugin.promiseQueue.addTask(async () => {
                const status = await plugin.updateCachedStatus();
                const onlyStaged = status.staged.length > 0;
                return plugin.commit({
                    fromAuto: false,
                    requestCustomMessage: true,
                    onlyStaged: onlyStaged,
                });
            }),
    });

    plugin.addCommand({
        id: "commit-staged-specified-message",
        name: COMMANDS.COMMIT_STAGED_WITH_MESSAGE,
        checkCallback: function (checking) {
            // Same reason as for commit-staged
            if (checking) return false;
            return plugin.promiseQueue.addTask(() =>
                plugin.commit({
                    fromAuto: false,
                    requestCustomMessage: true,
                    onlyStaged: true,
                })
            );
        },
    });

    plugin.addCommand({
        id: "push2",
        name: COMMANDS.PUSH,
        callback: () => plugin.promiseQueue.addTask(() => plugin.push()),
    });

    plugin.addCommand({
        id: "stage-current-file",
        name: COMMANDS.STAGE_CURRENT_FILE,
        checkCallback: (checking) => {
            const file = app.workspace.getActiveFile();
            if (checking) {
                return file !== null;
            } else {
                plugin.promiseQueue.addTask(() => plugin.stageFile(file!));
            }
        },
    });

    plugin.addCommand({
        id: "unstage-current-file",
        name: COMMANDS.UNSTAGE_CURRENT_FILE,
        checkCallback: (checking) => {
            const file = app.workspace.getActiveFile();
            if (checking) {
                return file !== null;
            } else {
                plugin.promiseQueue.addTask(() => plugin.unstageFile(file!));
            }
        },
    });

    plugin.addCommand({
        id: "edit-remotes",
        name: COMMANDS.EDIT_REMOTES,
        callback: () =>
            plugin.editRemotes().catch((e) => plugin.displayError(e)),
    });

    plugin.addCommand({
        id: "remove-remote",
        name: COMMANDS.REMOVE_REMOTE,
        callback: () =>
            plugin.removeRemote().catch((e) => plugin.displayError(e)),
    });

    plugin.addCommand({
        id: "set-upstream-branch",
        name: COMMANDS.SET_UPSTREAM_BRANCH,
        callback: () =>
            plugin.setUpstreamBranch().catch((e) => plugin.displayError(e)),
    });

    plugin.addCommand({
        id: "delete-repo",
        name: COMMANDS.CAUTION_DELETE_REPO,
        callback: async () => {
            const repoExists = await app.vault.adapter.exists(
                `${plugin.settings.basePath}/.git`
            );
            if (repoExists) {
                const modal = new GeneralModal(plugin, {
                    options: [MODALS.NO, MODALS.YES],
                    placeholder: NOTICES.DELETE_REPO_CONFIRM,
                    onlySelection: true,
                });
                const shouldDelete = (await modal.openAndGetResult()) === MODALS.YES;
                if (shouldDelete) {
                    await app.vault.adapter.rmdir(
                        `${plugin.settings.basePath}/.git`,
                        true
                    );
                    new Notice(NOTICES.DELETED_REPO);
                    plugin.unloadPlugin();
                    await plugin.init({ fromReload: true });
                }
            } else {
                new Notice(NOTICES.NO_REPOSITORY_FOUND);
            }
        },
    });

    plugin.addCommand({
        id: "init-repo",
        name: COMMANDS.INIT_REPO,
        callback: () =>
            plugin.createNewRepo().catch((e) => plugin.displayError(e)),
    });

    plugin.addCommand({
        id: "clone-repo",
        name: COMMANDS.CLONE_REPO,
        callback: () =>
            plugin.cloneNewRepo().catch((e) => plugin.displayError(e)),
    });

    plugin.addCommand({
        id: "list-changed-files",
        name: COMMANDS.LIST_CHANGED_FILES,
        callback: async () => {
            if (!(await plugin.isAllInitialized())) return;

            try {
                const status = await plugin.updateCachedStatus();
                if (status.changed.length + status.staged.length > 500) {
                    plugin.displayError(NOTICES.TOO_MANY_CHANGES);
                    return;
                }

                new ChangedFilesModal(plugin, status.all).open();
            } catch (e) {
                plugin.displayError(e);
            }
        },
    });

    plugin.addCommand({
        id: "switch-branch",
        name: COMMANDS.SWITCH_BRANCH,
        callback: () => {
            plugin.switchBranch().catch((e) => plugin.displayError(e));
        },
    });

    plugin.addCommand({
        id: "create-branch",
        name: COMMANDS.CREATE_BRANCH,
        callback: () => {
            plugin.createBranch().catch((e) => plugin.displayError(e));
        },
    });

    plugin.addCommand({
        id: "delete-branch",
        name: COMMANDS.DELETE_BRANCH,
        callback: () => {
            plugin.deleteBranch().catch((e) => plugin.displayError(e));
        },
    });

    plugin.addCommand({
        id: "discard-all",
        name: COMMANDS.CAUTION_DISCARD_ALL,
        callback: async () => {
            const res = await plugin.discardAll();
            switch (res) {
                case "discard":
                    new Notice(NOTICES.DISCARDED_ALL_TRACKED);
                    break;
                case "delete":
                    new Notice(NOTICES.DISCARDED_ALL);
                    break;
                case false:
                    break;
                default:
                    assertNever(res);
            }
        },
    });

    plugin.addCommand({
        id: "pause-automatic-routines",
        name: COMMANDS.PAUSE_RESUME_AUTOMATIC,
        callback: () => {
            const pause = !plugin.localStorage.getPausedAutomatics();
            plugin.localStorage.setPausedAutomatics(pause);
            if (pause) {
                plugin.automaticsManager.unload();
                new Notice(NOTICES.PAUSED_AUTOMATIC);
            } else {
                plugin.automaticsManager.reload("commit", "push", "pull");
                new Notice(NOTICES.RESUMED_AUTOMATIC);
            }
        },
    });

    plugin.addCommand({
        id: "raw-command",
        name: COMMANDS.RAW_COMMAND,
        checkCallback: (checking) => {
            const gitManager = plugin.gitManager;
            if (checking) {
                // only available on desktop
                return gitManager instanceof SimpleGit;
            } else {
                plugin.tools
                    .runRawCommand()
                    .catch((e) => plugin.displayError(e));
            }
        },
    });

    plugin.addCommand({
        id: "toggle-line-author-info",
        name: COMMANDS.TOGGLE_LINE_AUTHOR,
        callback: () =>
            plugin.settingsTab?.configureLineAuthorShowStatus(
                !plugin.settings.lineAuthor.show
            ),
    });

    plugin.addCommand({
        id: "reset-hunk",
        name: COMMANDS.RESET_HUNK,
        editorCheckCallback(checking, _, __) {
            if (checking) {
                return (
                    plugin.settings.hunks.hunkCommands &&
                    plugin.hunkActions.editor !== undefined
                );
            }

            plugin.hunkActions.resetHunk();
        },
    });

    plugin.addCommand({
        id: "stage-hunk",
        name: COMMANDS.STAGE_HUNK,
        editorCheckCallback: (checking, _, __) => {
            if (checking) {
                return (
                    plugin.settings.hunks.hunkCommands &&
                    plugin.hunkActions.editor !== undefined
                );
            }
            plugin.promiseQueue.addTask(() => plugin.hunkActions.stageHunk());
        },
    });

    plugin.addCommand({
        id: "preview-hunk",
        name: COMMANDS.PREVIEW_HUNK,
        editorCheckCallback: (checking, _, __) => {
            if (checking) {
                return (
                    plugin.settings.hunks.hunkCommands &&
                    plugin.hunkActions.editor !== undefined
                );
            }
            const editor = plugin.hunkActions.editor!.editor;
            togglePreviewHunk(editor);
        },
    });

    plugin.addCommand({
        id: "next-hunk",
        name: COMMANDS.GO_TO_NEXT_HUNK,
        editorCheckCallback: (checking, _, __) => {
            if (checking) {
                return (
                    plugin.settings.hunks.hunkCommands &&
                    plugin.hunkActions.editor !== undefined
                );
            }
            plugin.hunkActions.goToHunk("next");
        },
    });

    plugin.addCommand({
        id: "prev-hunk",
        name: COMMANDS.GO_TO_PREV_HUNK,
        editorCheckCallback: (checking, _, __) => {
            if (checking) {
                return (
                    plugin.settings.hunks.hunkCommands &&
                    plugin.hunkActions.editor !== undefined
                );
            }
            plugin.hunkActions.goToHunk("prev");
        },
    });
}
