export const NAVIGATION = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "4",
        isSelectable: true,
        name: "projects",
        children: [
          {
            id: "5",
            isSelectable: false,
            name: "main.tsx",
          },
          {
            id: "7",
            isSelectable: false,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

export const NETWORKING_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/imesh97/",
    tooltip: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/imesh-nimsitha/",
    tooltip: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:imesh.nimsitha@gmail.com",
    tooltip: "Email",
  },
  {
    name: "Resume",
    href: "/assets/resume.pdf",
    tooltip: "Resume",
  },
];

export const PROJECTS = [
  {
    title: "bankrpc - distributed banking",
    description:
      "A distributed banking web app with data persistence and concurrent transactions.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Python", "Streamlit", "gRPC", "Redis", "AWS EC2", "Docker"],
    demoUrl: "http://ec2-3-144-116-12.us-east-2.compute.amazonaws.com:8501/",
    githubUrl: "https://github.com/imesh97/bankrpc",
  },
  {
    title: "affinity.ai - crm",
    description:
      "A lead generation & automation CRM for car dealerships, powered by AI.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://affinity.nimsitha.com",
    githubUrl: "https://github.com/imesh97/affinity",
  },
  {
    title: "nimdb - database server",
    description:
      "A nimble in-memory database server for caching and session storage.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: [
      "C",
      "Trees",
      "Hashing",
      "Bloom Filters",
      "Socket Programming",
    ],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "raphael - ai image editor",
    description:
      "A SaaS web app that transforms images using external AI models.",
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d",
    technologies: [
      "Next.js",
      "Cloudinary",
      "Stripe",
      "MongoDB",
      "Clerk",
      "Zod",
    ],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/imesh97/raphael-ai",
  },
  {
    title: "kylian - ml soccer analysis",
    description:
      "A soccer analysis system for tracking and predicting player movement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Python", "YOLOv8", "OpenCV", "NumPy", "Colab"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/imesh97/kylian",
  },
];

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  logo: string;
  site: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Affinity Solutions",
    position: "Software Developer",
    period: "Dec. 2024 — Present",
    location: "Remote",
    achievements: [
      "Led development of AI-powered CRM prototype for automotive dealerships, focusing on lead management and sales pipeline automation.",
      "Built responsive Next.js landing page to showcase platform features, resulting in 50% increase in user engagement.",
      "Collaborated with key stakeholder to define technical requirements and architecture for specialized automotive CRM solution.",
      "Implemented core prototype features: lead scoring algorithms and customer journey mapping.",
    ],
    logo: "/assets/logo_affinity.svg",
    site: "https://affinity.nimsitha.com",
  },
  {
    company: "SymptomStream",
    position: "Chief Technology Officer",
    period: "July 2024 — Present",
    location: "Hamilton, CA",
    achievements: [
      "Led development of AI-powered software for optimizing hospital triage processes to enhance ER decision-making and operational efficiency.",
      "Collaborated with 10+ stakeholders to gather technical requirements, refine architecture, and ensure alignment with business objectives.",
      "Directed project toward prototype phase by defining technical milestones and ensuring timely delivery of development goals.",
    ],
    logo: "/assets/logo_symptomstream.png",
    site: "https://symptomstream.ca",
  },
  {
    company: "ANVIROS Ventures Inc.",
    position: "Web Developer",
    period: "Jan. 2022 — Jan. 2023",
    location: "Brampton, CA",
    achievements: [
      "Built commercial website for promoting Amazon products using WordPress: 200,000+ page hits.",
      "Developed lead capture page for newsletter subscriptions using TypeScript, Next.js and Chakra UI.",
      "Implemented API routes and serverless functions for subscription form emails, generating 25+ customer conversions.",
      "Administered and configured cPanel server that hosts 10+ sites, improving disk usage by 70%.",
    ],
    logo: "/assets/logo_anviros.png",
    site: "http://anviroscreations.com",
  },
];

export interface Skill {
  name: string;
  category: string;
  img: string;
}

export const SKILLS = [
  {
    name: "Python",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/python.png",
  },
  {
    name: "HTML",
    category: "Frontend",
    img: "https://img.icons8.com/fluency/144/html-5.png",
  },
  {
    name: "CSS",
    category: "Frontend",
    img: "https://img.icons8.com/fluency/144/css3.png",
  },
  {
    name: "React",
    category: "Frontend",
    img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "Next.js",
    category: "Frontend",
    img: "https://img.icons8.com/nolan/64/nextjs.png",
  },
  {
    name: "Vite",
    category: "Frontend",
    img: "https://img.icons8.com/fluency/144/vite.png",
  },
  {
    name: "Streamlit",
    category: "Frontend",
    img: "https://img.icons8.com/color/48/streamlit.png",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    img: "https://img.icons8.com/fluency/144/bootstrap.png",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    img: "https://img.icons8.com/fluency/144/tailwind_css.png",
  },
  {
    name: "Chakra UI",
    category: "Frontend",
    img: "https://img.icons8.com/color/48/chakra-ui.png",
  },
  {
    name: "Motion",
    category: "Frontend",
    img: "/assets/icons/motion.png",
  },
  {
    name: "Java",
    category: "Backend",
    img: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
  },
  {
    name: "C",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/c-programming.png",
  },
  {
    name: "C++",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/c-plus-plus-logo.png",
  },
  {
    name: "JavaScript",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/javascript.png",
  },
  {
    name: "TypeScript",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/typescript--v2.png",
  },
  {
    name: "Node.js",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/node-js.png",
  },
  {
    name: "PHP",
    category: "Backend",
    img: "https://img.icons8.com/nolan/64/php-logo.png",
  },
  {
    name: "MySQL",
    category: "Backend",
    img: "https://img.icons8.com/color/48/mysql-logo.png",
  },
  {
    name: "MongoDB",
    category: "Backend",
    img: "https://img.icons8.com/color/48/mongo-db.png",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    img: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-shadow-tal-revivo.png",
  },
  {
    name: "Firebase",
    category: "Backend",
    img: "https://img.icons8.com/color/48/firebase.png",
  },
  {
    name: "Supabase",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/supabase.png",
  },
  {
    name: "Redis",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/redis.png",
  },
  {
    name: "Docker",
    category: "DevOps",
    img: "https://img.icons8.com/fluency/144/docker.png",
  },
  {
    name: "Git",
    category: "DevOps",
    img: "https://img.icons8.com/color/48/git.png",
  },
  {
    name: "GitHub",
    category: "DevOps",
    img: "https://img.icons8.com/stickers/50/github.png",
  },
  {
    name: "Bitbucket",
    category: "DevOps",
    img: "https://img.icons8.com/color/48/bitbucket.png",
  },
  {
    name: "AWS",
    category: "DevOps",
    img: "https://img.icons8.com/nolan/64/amazon-web-services.png",
  },
  {
    name: "Vercel",
    category: "DevOps",
    img: "/assets/icons/vercel.png",
  },
  {
    name: "Jira",
    category: "DevOps",
    img: "https://img.icons8.com/color/48/jira.png",
  },
  {
    name: "Visual Studio Code",
    category: "Programs / Tools",
    img: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
  },
  {
    name: "Eclipse",
    category: "Programs / Tools",
    img: "https://img.icons8.com/office/40/java-eclipse.png",
  },
  {
    name: "IntelliJ IDEA",
    category: "Programs / Tools",
    img: "https://img.icons8.com/color/48/intellij-idea.png",
  },
  {
    name: "Linux",
    category: "Programs / Tools",
    img: "https://img.icons8.com/color/48/linux--v1.png",
  },
  {
    name: "gRPC",
    category: "Backend",
    img: "/assets/icons/grpc.png",
  },
  {
    name: "Stripe",
    category: "Backend",
    img: "https://img.icons8.com/fluency/144/stripe.png",
  },
  {
    name: "WordPress",
    category: "Programs / Tools",
    img: "https://img.icons8.com/fluency/144/wordpress.png",
  },
  {
    name: "Confluence",
    category: "Programs / Tools",
    img: "https://img.icons8.com/fluency/144/confluence.png",
  },
  {
    name: "Slack",
    category: "Programs / Tools",
    img: "https://img.icons8.com/color/48/slack.png",
  },
  {
    name: "Trello",
    category: "Programs / Tools",
    img: "https://img.icons8.com/color/48/trello.png",
  },
  {
    name: "Figma",
    category: "Programs / Tools",
    img: "https://img.icons8.com/fluency/144/figma.png",
  },
  {
    name: "UML",
    category: "Programs / Tools",
    img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-flow-interface-kiranshastry-lineal-color-kiranshastry.png",
  },
  {
    name: "Microsoft Office",
    category: "Extra",
    img: "https://img.icons8.com/color/48/office-365.png",
  },
  {
    name: "Adobe Photoshop",
    category: "Extra",
    img: "https://img.icons8.com/color/48/adobe-photoshop--v1.png",
  },
  {
    name: "Adobe Premiere Pro",
    category: "Extra",
    img: "https://img.icons8.com/color/48/adobe-premiere-pro--v1.png",
  },
  {
    name: "Leadership",
    category: "Extra",
    img: "https://img.icons8.com/color/48/coach--skin-type-5.png",
  },
  {
    name: "Problem Solving",
    category: "Extra",
    img: "https://img.icons8.com/color/48/brain-3.png",
  },
  {
    name: "Communication",
    category: "Extra",
    img: "https://img.icons8.com/color/48/chat--v1.png",
  },
  {
    name: "Agile / Scrum",
    category: "Extra",
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-scrum-ux-and-ui-flaticons-flat-flat-icons.png",
  },
];

export const SLUGS = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
