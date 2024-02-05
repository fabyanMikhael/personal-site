const data = {
    about: `
    I am currently studying for a Computer Science Major. I like programming a lot
    during my free time and have an interest in game development, machine learning, and
    compiler/language development. I like writing many different types of projects that
    do not have an end result but rather I write them to explore different topics. I am
    currently looking up on different ideas for creating a programming language that
    would avoid many pitfalls of common languages by studying the programming paradigms
    from rust, haskell, and other unique paradigms. I am familiar with Rust, C, Python,
    Javascript/TypeScript, React, and Node.js.
    `,
    website: 'fabyan.ca',
    name: 'Fabyan Mikhael',
    email: 'fabyanmikhael@yahoo.ca',
    location: {
        name: 'Toronto, Canada',
        link: 'https://www.google.com/maps/place/toronto',
    },
    school: {
        name: 'Toronto Metropolitan University',
        major: 'Computer Science',
        year: '3rd',
    },

    github: {
        name: 'fabyanmikhael',
        link: 'https://github.com/fabyanmikhael',
    },
    linkedIn: {
        link: 'https://www.linkedin.com/in/fabyan-mikhael/',
    },
    workExperience: [
        {
            company: 'IBM Canada',
            title: 'Backend Developer Intern',
            date: '2022 - 2023',
            description: 'Worked on frontend and backend features for an internal headcount project. Modified & created pages using React, as well as created backend endpoints in nestjs. Worked with the IBM db2 database, optimizing and creating queries, procedures, and triggers. Created scheduled automation jobs with jenkins for bash & python scripts',
            tags: ['Hybrid', 'Full-time'],
        },
        {
            company: 'Toronto Metropolitan University',
            title: 'Research Assistant',
            date: '2021 - 2022',
            description: 'Worked on mri imaging project for using machine learning & image registration to track cancer tumours during radiotherapy for cancer treatment. Used python, tensorflow, and keras to create and train models. Used 3d slicer to visualize and manipulate mri images. Created a 3d slicer plugin to automate the process of image registration and visualization directly in the program.',
            tags: ['Remote', 'Part-time'],
        },
    ],
    education: [
        {
            school: 'Toronto Metropolitan University',
            major: 'Bachelor of Computer Science',
            date: '2020 - 2025',
            tags: ['Undergraduate', 'Full-time', 'Co-op'],
        }
    ],
    skills: [
        "Rust",
        "Python",
        "C",
        "JavaScript/TypeScript",
        "React",
        "Svelte",
        "Node.js",
        "Pytorch",
        "Tensorflow",
    ],
    projects: [
        // {
        //     title: 'Portfolio Website',
        //     description: 'Personal website to showcase my work and experience',
        //     link: 'https://fabyan.ca',
        //     tags: ['Svelte', 'TailwindCSS', 'Typescript'],
        // },
    ],
    todo: [
        {
            title: 'Add more projects on site',
            description: 'automate adding in the rest of projects by pulling from github (probably have some metadata somewhere for description & tags)',
            tags: ["personal site"]
        },
        {
            title: 'Add blog section or page',
            description: 'add in a blog section to the site so I can write about random things. Should probably use mdx or something to write the posts in markdown so its easier',
            tags: ["personal site"]
        }
    ]

}

// Helper functions to get data
const GITHUB_REPOS_API = (username: string) => `https://api.github.com/users/${username}/repos`;


export default { ...data, projects: await GetProjects() };


async function GetProjects(): Promise<Project[]> {
    const url = GITHUB_REPOS_API(data.github.name);

    const response = await fetch(url);
    const repos: GithubRepo[] = await response.json();

    const projects = repos.map((repo) => {
        return <Project>{
            title: repo.name,
            description: repo.description,
            link: repo.html_url,
            tags: repo.topics,
            stars: repo.stargazers_count,
        };
    })
        //sorted by if has description or not, and then by stars
        .sort((a, b) =>
            (a.description ? 0 : 1) - (b.description ? 0 : 1) || b.stars - a.stars
        );

    return projects;
}


type Project = {
    title: string,
    description?: string,
    link?: string,
    tags: string[],
    stars: number,
}

type GithubRepo = {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
    },
    html_url: string,
    description: string | null,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: string | null,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string | null,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_discussions: boolean,
    forks_count: number,
    mirror_url: string | null,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: string | null,
    allow_forking: boolean,
    is_template: boolean,
    web_commit_signoff_required: boolean,
    topics: string[],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}
