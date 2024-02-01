export default {
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
        {
            title: 'Portfolio Website',
            description: 'Personal website to showcase my work and experience',
            link: 'https://fabyan.ca',
            tags: ['Svelte', 'TailwindCSS', 'Typescript'],
        },

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