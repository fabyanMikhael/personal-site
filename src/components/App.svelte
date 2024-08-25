<script lang="ts">
    import { Github, GlobeIcon, Linkedin, MailIcon } from "lucide-svelte";
    import data from "../data";
    import WorkExperience from "./WorkExperience.svelte";
    import Education from "./Education.svelte";
    import Project from "./Project.svelte";
    import Section from "./Section.svelte";
</script>

<main class="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section class="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div class="flex items-center justify-between">
            <div class="flex-1 space-y-1.5">
                <h1 class="text-2xl font-bold">{data.name}</h1>
                <p class="max-w-xl text-pretty font-mono text-sm text-muted-foreground">
                    {data.school.major} Major at {data.school.name} ({data.school.year} year)
                </p>
                <p
                    class="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground"
                >
                    <a
                        class="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                        href={data.location.link}
                        target="_blank"
                    >
                        <GlobeIcon class="size-3" />
                        {data.location.name}
                    </a>
                </p>
                <div class="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    <a
                        href="mailto:{data.email}"
                        aria-label="send an email to {data.email}"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    >
                        <MailIcon class="size-4" />
                    </a>

                    <a
                        href={data.github.link}
                        aria-label="visit {data.name}'s GitHub profile"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    >
                        <Github class="size-4" />
                    </a>

                    <a
                        href={data.linkedIn.link}
                        aria-label="visit {data.name}'s LinkedIn profile"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
                    >
                        <Linkedin class="size-4" />
                    </a>
                </div>
            </div>
        </div>
        <Section Title="About">
            <p class="text-pretty font-mono text-sm text-muted-foreground">
                {data.about}
            </p>
            {#if data.aboutAdditional}
                <p class="text-pretty font-mono text-sm text-muted-foreground">
                    {data.aboutAdditional}
                </p>
            {/if}
        </Section>
        <Section Title="Work Experience">
            {#each data.workExperience as role}
                <WorkExperience {...role} />
            {/each}
        </Section>
        <Section Title="Education">
            {#each data.education as program}
                <Education {...program} />
            {/each}
        </Section>
        <Section Title="Skills">
            <div class="flex flex-wrap gap-1">
                {#each data.skills as skill}
                    <div
                        class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60"
                    >
                        {skill}
                    </div>
                {/each}
            </div>
        </Section>
        <Section Title="Projects">
            <div
                class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
            >
                {#each data.projects as project}
                    <Project {...project} />
                {/each}
            </div>
        </Section>
        <Section Title="Todo">
            <div
                class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
            >
                {#each data.todo as task}
                    <Project {...task} />
                {/each}
            </div>
        </Section>
    </section>
</main>
