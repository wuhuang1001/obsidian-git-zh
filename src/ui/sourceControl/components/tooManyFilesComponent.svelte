<script lang="ts">
    import { FILE_ACTIONS } from "src/lang/zh-CN";

    interface Props {
        files: unknown[];
    }

    let { files }: Props = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main>
    {#if files.length > 500}
        <div class="tree-item nav-file">
            <div
                class="tree-item-self nav-file-title"
                aria-label={FILE_ACTIONS.AND_MORE_FILES(files.length - 500)}
            >
                <div class="tree-item-inner nav-file-title-content">
                    {FILE_ACTIONS.AND_MORE_FILES(files.length - 500)}
                </div>
            </div>
        </div>
    {/if}
</main>
