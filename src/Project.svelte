<script lang="ts">
    export let title: string;
    export let description: string | undefined = undefined;
    export let link: string | undefined = undefined;

    export let tags: string[] = [];
</script>

<div
    class="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3"
>
    <div class="flex flex-col space-y-1.5">
        <div class="space-y-1">
            <h3 class="font-semibold tracking-tight text-base">
                {#if link}
                    <a
                        href={link}
                        target="_blank"
                        class="inline-flex items-center gap-1 hover:underline"
                    >
                        {title}
                        <span class="size-1 rounded-full bg-green-500"></span>
                    </a>
                {:else}
                    {title}
                {/if}
            </h3>
            <p class="text-muted-foreground font-mono text-xs">
                {description}
            </p>
        </div>
    </div>
    <div class="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
        <div class="mt-2 flex flex-wrap gap-1">
            {#each tags as tag}
                <div
                    class="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 px-1 py-0 text-[10px]"
                >
                    {tag}
                </div>
            {/each}
        </div>
    </div>
</div>
