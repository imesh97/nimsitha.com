import { GiTap } from "react-icons/gi"
import { MdOutlineSmartDisplay } from "react-icons/md"
import { SiCurseforge, SiGit, SiGithub, SiJava, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiFirebase, SiPhp, SiMysql, SiHtml5, SiCss3, SiApache, SiGooglemaps } from "react-icons/si"
import { RiPagesLine } from "react-icons/ri"
import { TbApi } from "react-icons/tb"
import { GrMysql } from "react-icons/gr"
import { HiInboxIn } from "react-icons/hi"

export const ProjectsData = [
    {
        title: "Personal Portfolio",
        description: "You are on it right now! A responsive website to showcase my programming skills and experience.",
        dateLabel: "from January 2023 to now",
        stack: [
            {
                label: "TypeScript",
                icon: <SiTypescript />
            },
            {
                label: "Next.js",
                icon: <SiNextdotjs />
            },
            {
                label: "React.js",
                icon: <SiReact />
            },
            {
                label: "Tailwind",
                icon: <SiTailwindcss />
            },
            {
                label: "Git",
                icon: <SiGit />
            }
        ],
        links: [
            {
                href: "",
                label: "Live",
                icon: <MdOutlineSmartDisplay />
            },
            {
                href: "https://github.com/imesh97/imesh97.github.io",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "Study Tasks",
        description: "A responsive full stack web app for efficiently managing personal academic tasks. I built this because I genuinely needed a solution to organizing my university coursework deadlines.",
        dateLabel: "from November 2022 to now",
        stack: [
            {
                label: "JavaScript",
                icon: <SiJavascript />
            },
            {
                label: "Next.js",
                icon: <SiNextdotjs />
            },
            {
                label: "React.js",
                icon: <SiReact />
            },
            {
                label: "Tailwind",
                icon: <SiTailwindcss />
            },
            {
                label: "Firebase",
                icon: <SiFirebase />
            }
        ],
        links: [
            {
                href: "studytasks.nimsitha.com",
                label: "Live",
                icon: <MdOutlineSmartDisplay />
            },
            {
                href: "https://github.com/imesh97/study-tasks",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "OHIP Manager",
        description: "A full stack web app for maintaining hospital database information. This was completed as an assignment for my Databases course in university.",
        dateLabel: "from Sept. 2022 to Dec. 2022",
        stack: [
            {
                label: "PHP",
                icon: <SiPhp />
            },
            {
                label: "MySQL",
                icon: <GrMysql />
            },
            {
                label: "HTML",
                icon: <SiHtml5 />
            },
            {
                label: "CSS",
                icon: <SiCss3 />
            },
            {
                label: "Apache",
                icon: <SiApache />
            }
        ],
        links: [
            {
                href: "https://github.com/imesh97/ohip-manager",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "Crypto Trading System",
        description: "A trading strategy management system for tracking and analyzing real-time cryptocurrency prices. I collaborated in a team of 4 to build this during my Intro to Software Engineering course.",
        dateLabel: "from Jan. 2022 to April 2022",
        stack: [
            {
                label: "Java",
                icon: <SiJava />
            },
            {
                label: "CoinGecko API",
                icon: <TbApi />
            },
            {
                label: "Git",
                icon: <SiGit />
            }
        ],
        links: [
            {
                href: "https://github.com/imesh97/crypto-trading-system",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "Vroom",
        description: "A responsive website for monitoring daily gas emissions while navigating using the Google Maps API. Won the FraserHacks 2019 hackathon.",
        dateLabel: "from December 2019",
        stack: [
            {
                label: "JavaScript",
                icon: <SiJavascript />
            },
            {
                label: "React.js",
                icon: <SiReact />
            },
            {
                label: "Google Maps API",
                icon: <SiGooglemaps />
            },
            {
                label: "Tailwind",
                icon: <SiTailwindcss />
            },
            
        ],
        links: [
            {
                href: "https://devpost.com/software/vroom-iebj2u",
                label: "Devpost",
                icon: <HiInboxIn />
            },
            {
                href: "https://github.com/imesh97/vroom",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "Minecraft Mods & Plugins",
        description: "A collection of Minecraft mods and server plugins. I created custom 3D item models and AI entities, while publishing plugins which have gained 300+ combined downloads.",
        dateLabel: "from Jan. 2016 to Aug. 2020",
        stack: [
            {
                label: "Java",
                icon: <SiJava />
            },
            {
                label: "Forge API",
                icon: <SiCurseforge />
            },
            {
                label: "Spigot API",
                icon: <GiTap />
            }
        ],
        links: [
            {
                href: "https://www.spigotmc.org/resources/authors/imesh97.77824/",
                label: "Posts",
                icon: <RiPagesLine />
            },
            {
                href: "https://github.com/imesh97/mc-mods-and-plugins",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    }
]