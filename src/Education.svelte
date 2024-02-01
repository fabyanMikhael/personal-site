<script lang="ts">
    export let school: string;
    export let major: string;
    export let date: string;

    export let tags: string[] = [];
</script>

<div class="rounded-lg bg-card text-card-foreground">
    <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
            <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <span>{school}</span>

                {#each tags as tag}
                    <span class="inline-flex gap-x-1"
                        ><div
                            class="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs"
                        >
                            {tag}
                        </div></span
                    >
                {/each}
            </h3>

            <div class="text-sm tabular-nums text-gray-500">
                {date}
            </div>
        </div>
        <h4 class="font-mono text-sm leading-none">{major}</h4>
    </div>
</div>
