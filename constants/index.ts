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
    href: "/resume.pdf",
    tooltip: "Resume",
  },
];

export const PROJECTS = [
  {
    title: "affinity.ai - crm",
    description:
      "A lead generation & automation CRM for car dealerships, powered by AI.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
  {
    title: "nimdb - database server",
    description:
      "A nimble in-memory database server for caching and session storage.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["C", "Linux", "B-Tree", "Socket Programming"],
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
    githubUrl: "https://github.com",
  },
  {
    title: "kylian - ai soccer analysis",
    description:
      "A soccer analysis system for tracking and predicting player movement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["Python", "YOLOv8", "OpenCV", "NumPy", "Colab"],
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
  },
];

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Somewhere",
    position: "Senior Full Stack Developer",
    period: "2021 - Present",
    location: "San Francisco, CA",
    achievements: [
      "Led development of microservices architecture serving 1M+ users",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    company: "Place 1",
    position: "Frontend Developer",
    period: "2019 - 2021",
    location: "New York, NY",
    achievements: [
      "Built responsive web applications using React and TypeScript",
      "Improved application performance by 40%",
      "Collaborated with UX team to implement design system",
    ],
  },
  {
    company: "Place 2",
    position: "Web Developer",
    period: "2017 - 2019",
    location: "Boston, MA",
    achievements: [
      "Developed websites for Fortune 500 clients",
      "Implemented SEO best practices",
      "Created reusable component library",
    ],
  },
];

export const SKILLS = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "AWS", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "GraphQL", category: "Backend" },
  { name: "UI/UX Design", category: "Design" },
];
