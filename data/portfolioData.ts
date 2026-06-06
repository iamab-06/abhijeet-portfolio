import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const portfolioData = {
  profile: {
    name: "Abhijeet Bhat",
    logoText: "Abhijeet Bhat",
    logoAlt: "Logo",
    logoSrc: "/logo.png",
    copyright: `© Abhijeet Bhat ${new Date().getFullYear()} Inc. All rights reserved.`,
    heroTitle: "Abhijeet Bhat's Portfolio",
    heroPrefix: "Engineering ",
    heroHighlight: "Intelligent Systems",
    heroSuffix: " for Real-World Impact.",
    heroDescription: "Computer Science and Engineering student at Siddaganga Institute of Technology with a strong interest in software engineering, artificial intelligence, system design, and scalable application development. Focused on building practical, high-impact solutions that combine technical depth with real-world usability. Actively exploring AI-driven systems, full-stack development, and innovative digital products while continuously expanding expertise through projects, experimentation, and competitive learning.",
    heroButtonText: "Learn more",
    heroBgAlt: "work icons",
  },
  seo: {
    title: "Abhijeet Bhat | Portfolio",
    description: "Computer Science Engineering student specializing in software engineering, AI-powered systems, scalable applications, and full-stack development. Explore projects, technical skills, and engineering work by Abhijeet Bhat.",
    keywords: [
      "reactjs",
      "nextjs",
      "vercel",
      "react",
      "portfolio",
      "js",
      "javascript",
      "typescript",
      "tailwind css",
      "framer motion",
      "three.js",
    ] as Array<string>,
    authors: {
      name: "Abhijeet Bhat",
      url: "https://github.com/iamab-06",
    },
  },
  navigation: {
    links: [
      { title: "About me", link: "#about-me" },
      { title: "Skills", link: "#skills" },
      { title: "Projects", link: "#projects" },
    ],
    sourceCodeText: "Source Code",
    sourceCodeLink: "https://github.com/iamab-06",
  },
  socials: [
    { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/iamab-06" },
    { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/abhijeet-bhat-058789294" },
  ],
  contact: {
    footerData: [
      {
        title: "Community",
        data: [
          { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/iamab-06" },
        ],
      },
      {
        title: "Social Media",
        data: [
          { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/abhijeet-bhat-058789294" },
        ],
      },
      {
        title: "About",
        data: [
          { name: "Resume", icon: null, link: "/abhi_resume.pdf" },
          { name: "Email Me", icon: null, link: "mailto:abhijeetbhat6205@gmail.com" },
        ],
      },
    ],
  },
  skills: {
    skillText: {
      title: "Think better with Next.js 14",
      subtitle: "Making apps with modern technologies.",
      description: "Never miss a task, deadline or idea.",
    },
    skillData: [
      { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
      { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
    ],
    frontendSkill: [
      { skill_name: "React", image: "react.png", width: 80, height: 80 },
      { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
      { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
      { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
      { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
      { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
    ] as Array<{skill_name: string; image: string; width: number; height: number;}>,
    backendSkill: [
      { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
      { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
      { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
    ] as Array<{skill_name: string; image: string; width: number; height: number;}>,
    fullstackSkill: [] as Array<{skill_name: string; image: string; width: number; height: number;}>,
    otherSkill: [] as Array<{skill_name: string; image: string; width: number; height: number;}>,
  },
  projects: {
    title: "My Projects",
    list: [
      {
        title: "pathMate",
        description: "A route-planning and navigation platform designed to help users discover efficient travel paths, optimize decision-making, and improve location-based experiences through intelligent routing capabilities.",
        image: "/projects/pathmate.png",
        link: "https://path-mate-three.vercel.app/",
      },
      {
        title: "TurboMesh",
        description: "A decentralized peer-to-peer GPU sharing platform that enables users to contribute idle GPU resources and access distributed compute power for AI workloads, rendering, and high-performance computing tasks.",
        image: "/projects/turbo.png",
        link: "https://github.com/iamab-06/TurboMesh",
      },
    ],
  },
  encryption: {
    titlePrefix: "Performance ",
    titleHighlight: "&",
    titleSuffix: " security.",
    boxText: "Encryption",
    description: "Secure your data with end-to-end encryption.",
  },
  academy: {},
  forge: {},
  nexus: {},
  origin: {},
  achievements: [
    "Shortlisted for HackWithInfy Round 2 (Infosys national-level)",
    "Runner-Up at IEEE coding event",
    "3rd place at ByteSurge contest",
    "Solved 350+ LeetCode and 1000+ CodeChef/GFG problems",
    "5th place at Hack-CSE-lerate; participated in 4+ hackathons",
    "Organized an event under PATHFINDER club, managing logistics for 500+ attendees."
  ],
  education: [
    {
      institution: "Siddaganga Institute of Technology (SIT), Tumakuru",
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      dates: "2023 - 2027",
    }
  ],
  experience: [],
};
