<script lang="ts">
    export let Title: string;

    const Id = Title.toLowerCase().replace(/\s/g, "-");
</script>

<section class="flex min-h-0 flex-col gap-y-3" id={Id}>
    <a class="text-xl font-bold" href="#{Id}">{Title}</a>
    <slot />
</section>
