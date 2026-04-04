import type { Editor, TFile } from "obsidian";
import { Notice } from "obsidian";
import type { GitManager } from "./gitManager/gitManager";
import { SimpleGit } from "./gitManager/simpleGit";
import { NOTICES_EXTRA, GITHUB_ERRORS } from "./lang/zh-CN";

export async function openLineInGitHub(
    editor: Editor,
    file: TFile,
    manager: GitManager
) {
    const data = await getData(file, manager);

    if (data.result === "failure") {
        new Notice(data.reason);
        return;
    }

    const { isGitHub, branch, repo, user, filePath } = data;
    if (isGitHub) {
        const from = editor.getCursor("from").line + 1;
        const to = editor.getCursor("to").line + 1;
        if (from === to) {
            window.open(
                `https://github.com/${user}/${repo}/blob/${branch}/${filePath}?plain=1#L${from}`
            );
        } else {
            window.open(
                `https://github.com/${user}/${repo}/blob/${branch}/${filePath}?plain=1#L${from}-L${to}`
            );
        }
    } else {
        new Notice(NOTICES_EXTRA.NOT_USING_GITHUB);
    }
}

export async function openHistoryInGitHub(file: TFile, manager: GitManager) {
    const data = await getData(file, manager);

    if (data.result === "failure") {
        new Notice(data.reason);
        return;
    }

    const { isGitHub, branch, repo, user, filePath } = data;

    if (isGitHub) {
        window.open(
            `https://github.com/${user}/${repo}/commits/${branch}/${filePath}`
        );
    } else {
        new Notice(NOTICES_EXTRA.NOT_USING_GITHUB);
    }
}

async function getData(
    file: TFile,
    manager: GitManager
): Promise<
    | {
          result: "success";
          isGitHub: boolean;
          user: string;
          repo: string;
          branch: string;
          filePath: string;
      }
    | { result: "failure"; reason: string }
> {
    const branchInfo = await manager.branchInfo();
    let remoteBranch = branchInfo.tracking;
    let branch = branchInfo.current;
    let remoteUrl: string | undefined = undefined;
    let filePath = manager.getRelativeRepoPath(file.path);

    if (manager instanceof SimpleGit) {
        const submodule = await manager.getSubmoduleOfFile(
            manager.getRelativeRepoPath(file.path)
        );
        if (submodule) {
            filePath = submodule.relativeFilepath;
            const status = await manager.git
                .cwd({
                    path: submodule.submodule,
                    root: false,
                })
                .status();

            remoteBranch = status.tracking || undefined;
            branch = status.current || undefined;
            if (remoteBranch) {
                const remote = remoteBranch.substring(
                    0,
                    remoteBranch.indexOf("/")
                );

                const config = await manager.git
                    .cwd({
                        path: submodule.submodule,
                        root: false,
                    })
                    .getConfig(`remote.${remote}.url`, "local");

                if (config.value != null) {
                    remoteUrl = config.value;
                } else {
                    return {
                        result: "failure",
                        reason: GITHUB_ERRORS.FAILED_GET_REMOTE_URL_SUBMODULE,
                    };
                }
            }
        }
    }

    if (remoteBranch == null) {
        return {
            result: "failure",
            reason: GITHUB_ERRORS.REMOTE_BRANCH_NOT_CONFIGURED,
        };
    }

    if (branch == null) {
        return {
            result: "failure",
            reason: GITHUB_ERRORS.FAILED_GET_CURRENT_BRANCH,
        };
    }

    if (remoteUrl == null) {
        const remote = remoteBranch.substring(0, remoteBranch.indexOf("/"));
        remoteUrl = await manager.getConfig(`remote.${remote}.url`);
        if (remoteUrl == null) {
            return {
                result: "failure",
                reason: GITHUB_ERRORS.FAILED_GET_REMOTE_URL,
            };
        }
    }
    const res = remoteUrl.match(
        /(?:^https:\/\/github\.com\/(.+)\/(.+?)(?:\.git)?$)|(?:^[a-zA-Z]+@github\.com:(.+)\/(.+?)(?:\.git)?$)/
    );
    if (res == null) {
        return {
            result: "failure",
            reason: GITHUB_ERRORS.COULD_NOT_PARSE_REMOTE_URL,
        };
    } else {
        const [isGitHub, httpsUser, httpsRepo, sshUser, sshRepo] = res;
        return {
            result: "success",
            isGitHub: !!isGitHub,
            repo: httpsRepo || sshRepo,
            user: httpsUser || sshUser,
            branch: branch,
            filePath: filePath,
        };
    }
}
