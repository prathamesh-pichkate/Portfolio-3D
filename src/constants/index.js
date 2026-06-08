import {
  linux,
  hacktober,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Musitech,
  carrent,
  jobit,
  tripguide,
  threejs,
  backend,
  fullstack,
  blogWebsite,
  currencyCon,
  bijliride,
  ai_resume_builder
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Works",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: frontend,
  },
  {
    title: "BackEnd Development",
    icon: backend,
  },
  {
    title: "Full Stack Development",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
    speed: 2.0,
  },
  {
    name: "CSS3",
    icon: css,
    speed: 2.5,
  },
  {
    name: "JavaScript",
    icon: javascript,
    speed: 2.2,
  },
  {
    name: "TypeScript",
    icon: typescript,
    speed: 2.0,
  },
  {
    name: "ReactJS",
    icon: reactjs,
    speed: 1.8,
  },
  {
    name: "Redux-Toolkit",
    icon: redux,
    speed: 2.3,
  },
  {
    name: "Tailwind-CSS",
    icon: tailwind,
    speed: 3.0,
  },
  {
    name: "NodeJs",
    icon: nodejs,
    speed: 1.5,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    speed: 1.2,
  },
  {
    name: "ThreeJS",
    icon: threejs,
    speed: 2.8,
  },
  {
    name: "Git",
    icon: git,
    speed: 2.4,
  },
  {
    name: "Figma",
    icon: figma,
    speed: 1.9,
  },
  {
    name: "Docker",
    icon: docker,
    speed: 1.7,
  },
];

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Bijliride",
    icon: bijliride,
    iconBg: "#383E56",
    date: "Feb. 2026 - May 2026",
    points: [
      "Integrated third-party APIs into the backend system to enable new platform capabilities and streamline data flow between services.",
      "Worked on designing the UI for the new features",
      "Leveraged AI tools (GitHub Copilot, Claude) to accelerate development workflows, optimize code quality, and improve overall delivery speed across tasks.",
    ],
  },
  {
    title: "Full Stack Web Intern",
    company_name: "Musitech",
    icon: Musitech,
    iconBg: "#4A90E2",
    date: "June 2024 - July 2025",
    points: [
      "Developed a scalable academic website, improving overall performance and user experience.",
      "Revamped the existing legacy website by introducing modern UI/UX practices and responsive design.",
      "Collaborated with stakeholders to align development with institutional goals.",
      "Worked on the Aspire Sports Club website using React.js, enhancing UI components and interactivity.",
    ],
  },
  {
    title: "President & Secretary of Linux Club",
    company_name: "Linux Club Community",
    icon: linux,
    iconBg: "#000000",
    date: "July 2023 - Present",
    points: [
      "Contributed actively to the Linux Club Community by conducting hands-on sessions and technical workshops.",
      "Led initiatives to promote Linux, DevOps, and open-source technologies among students and tech enthusiasts.",
      "Guided newcomers in understanding Linux fundamentals, system administration, and troubleshooting.",
      "Played a key role in organizing meetups, discussions, and hackathons to foster open-source involvement.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Hacktoberfest",
    icon: hacktober,
    iconBg: "#FF5722",
    date: "October 2024",
    points: [
      "Contributed to multiple open-source repositories as part of Hacktoberfest.",
      "Resolved issues, enhanced documentation, and added new features to community-driven projects.",
      "Engaged with maintainers and contributors to understand project workflows and best practices.",
      "Gained valuable experience in collaborative software development and version control using Git and GitHub.",
    ],
  },
];

const projects = [
  {
    name: "AI Resume Builder",
    description:
      "Built an AI-powered resume platform using MERN Stack and OpenAI API that generates ATS-optimized summaries, skills, and experience descriptions, reducing manual effort and improving resume quality. Implemented JWT authentication, Docker containerization, and CI pipelines with AWS deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: ai_resume_builder,
    source_code_link: "https://resume-builder-orpin-tau.vercel.app",
  },
  {
    name: "Ledger-Based Banking API",
    description:
      "Engineered a ledger-based transaction engine implementing ACID-compliant database sessions to ensure atomic consistency. Mitigated duplicate financial operations by designing a robust idempotency validation layer. Optimized database performance and security with compound indexing.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/prathamesh-pichkate/Ledger-Based-Banking-API",
  },
];

export { services, technologies, experiences, projects };
