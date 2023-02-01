import { HiCode, HiDotsHorizontal, HiOutlineLightBulb } from "react-icons/hi"
import { FiServer } from "react-icons/fi"
import { TbBrandTailwind, TbLetterU } from "react-icons/tb"
import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaJava, FaPhp, FaPython, FaToolbox, FaGit, FaGithub } from "react-icons/fa"
import { SiAdobephotoshop, SiAdobepremierepro, SiCpanel, SiCplusplus, SiEclipseide, SiFirebase, SiIntellijidea, SiJavascript, SiLinux, SiMicrosoftoffice, SiPycharm, SiTypescript, SiVisualstudiocode } from "react-icons/si"
import { AiOutlineCode, AiOutlineConsoleSql } from "react-icons/ai"
import { GrWordpress } from "react-icons/gr"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { MdPeople } from "react-icons/md"

export const SkillsData = [
    {
        icon: <HiCode />,
        label: "Frontend",
        content: [
            {
                icon: <FaHtml5 />,
                label: "HTML"
            },
            {
                icon: <FaCss3 />,
                label: "CSS"
            },
            {
                icon: <FaReact />,
                label: "React.js"
            },
            {
                icon: <FaBootstrap />,
                label: "Bootstrap"
            },
            {
                icon: <TbBrandTailwind />,
                label: "Tailwind"
            },
        ]
    },
    {
        icon: <FiServer />,
        label: "Backend",
        content: [
            {
                icon: <FaPython />,
                label: "Python"
            },
            {
                icon: <FaJava />,
                label: "Java"
            },
            {
                icon: <AiOutlineCode />,
                label: "C"
            },
            {
                icon: <SiCplusplus />,
                label: "C++"
            },
            {
                icon: <SiJavascript />,
                label: "JavaScript"
            },
            {
                icon: <FaNodeJs />,
                label: "Node.js"
            },
            {
                icon: <FaPhp />,
                label: "PHP"
            },
            {
                icon: <AiOutlineConsoleSql />,
                label: "MySQL"
            },
        ]
    },
    {
        icon: <FaToolbox />,
        label: "Programs / Tools",
        content: [
            {
                icon: <FaGit />,
                label: "Git"
            },
            {
                icon: <FaGithub />,
                label: "GitHub"
            },
            {
                icon: <SiVisualstudiocode />,
                label: "Visual Studio Code"
            },
            {
                icon: <SiEclipseide />,
                label: "Eclipse"
            },
            {
                icon: <SiIntellijidea />,
                label: "IntelliJ IDEA"
            },
            {
                icon: <SiPycharm />,
                label: "PyCharm"
            },
            {
                icon: <SiLinux />,
                label: "Linux"
            },
            {
                icon: <SiFirebase />,
                label: "Firebase"
            },
            {
                icon: <SiCpanel />,
                label: "cPanel"
            },
            {
                icon: <TbLetterU />,
                label: "UML"
            },
            {
                icon: <GrWordpress />,
                label: "Wordpress"
            }
        ]
    },
    {
        icon: <HiDotsHorizontal />,
        label: "Extra",
        content: [
            {
                icon: <SiMicrosoftoffice />,
                label: "Microsoft Office"
            },
            {
                icon: <SiAdobephotoshop />,
                label: "Adobe Photoshop"
            },
            {
                icon: <SiAdobepremierepro />,
                label: "Adobe Premiere Pro"
            },
            {
                icon: <BsFillPersonLinesFill />,
                label: "Leadership"
            },
            {
                icon: <HiOutlineLightBulb />,
                label: "Problem Solving"
            },
            {
                icon: <MdPeople />,
                label: "Communication"
            },
        ]
    }
]