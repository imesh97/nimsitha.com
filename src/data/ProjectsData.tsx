import { GiTap } from "react-icons/gi"
import { MdOutlineSmartDisplay } from "react-icons/md"
import { SiCurseforge, SiGit, SiGithub, SiJava, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import { RiPagesLine } from "react-icons/ri"

export const ProjectsData = [
    {
        title: "Personal Portfolio",
        description: "You are on it right now! A responsive website to showcase my programming experience.",
        dateLabel: "from December 2022 to now",
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
                href: "",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    },
    {
        title: "Minecraft Mods & Plugins",
        description: "My public Spigot plugins have over 300 combined downloads.",
        dateLabel: "from Jan. 2016 to Jan. 2021",
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
                href: "",
                label: "Code",
                icon: <SiGithub />
            }
        ]
    }
]