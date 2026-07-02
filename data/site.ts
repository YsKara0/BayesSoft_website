import type { IconName } from "@/components/SocialIcon";
import { siteConfig } from "@/data/config";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type TeamMember = {
  name: string;
  role: string;
  letter: string;
  initials: string;
  image: string;
  accent: "blue" | "teal" | "gold" | "silver" | "navy";
  skills: string[];
  bio: string;
  socials: SocialLink[];
};

export type Project = {
  title: string;
  category: "team" | "individual";
  owner?: string;
  summary: string;
  impact: string;
  technologies: string[];
  liveUrl: string;
  sourceUrl: string;
};

const profileLinks = ({
  website,
  github,
  linkedin
}: {
  website: string;
  github: string;
  linkedin: string;
}): SocialLink[] => [
  { label: "Website", href: website, icon: "website" },
  { label: "GitHub", href: github, icon: "github" },
  { label: "LinkedIn", href: linkedin, icon: "linkedin" }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Batuhan Ersan",
    role: "Full-Stack Developer / Mobile Developer",
    letter: "B",
    initials: "BE",
    image: "/team/batuhan_ersan.jpg",
    accent: "blue",
    skills: ["React", "Flutter", "Express", "Javascript", "Node.js"],
    bio: "Software Developer with experience in full-stack and mobile application development with flutter.",
    socials: profileLinks({
      website: "https://example.com/batuhan-ersan",
      github: "https://github.com/BatuErsann",
      linkedin: "https://www.linkedin.com/in/batuhan-ersan-bayes/"
    })
  },
  {
    name: "Ahmet Buğrahan Çınar",
    role: "Software Engineer / Backend Developer",
    letter: "A",
    initials: "AÇ",
    image: "/team/bugrahan_cinar.jpeg",
    accent: "teal",
    skills: ["Spring Boot", "API Design", "Databases", "WebSocket"],
    bio: "Turns complex flows into crisp, fast interfaces with a strong eye for interaction quality and product clarity.",
    socials: profileLinks({
      website: "https://example.com/ahmet-bugrahan-cinar",
      github: "https://github.com/BugraCinar",
      linkedin: "https://www.linkedin.com/in/ahmetbugrahancinar/"
    })
  },
  {
    name: "Yavuz Selim Kara",
    role: "Software Engineer / Mobile Developer",
    letter: "Y",
    initials: "YS",
    image: "/team/yavuz_selim_kara.jpg",
    accent: "navy",
    skills: ["Mobile", "Flutter", "Firebase", "Product Systems"],
    bio: "Connects product vision with full-stack execution, shaping BayesSoft builds from first idea to production-ready system.",
    socials: profileLinks({
      website: "https://example.com/yavuz-selim-kara",
      github: "https://github.com/YsKara0",
      linkedin: "https://www.linkedin.com/in/yskara/"
    })
  },
  {
    name: "Enes Keleş",
    role: "Software Engineer / Frontend Developer",
    letter: "E",
    initials: "EK",
    image: "/team/enes_keles.jpeg",
    accent: "gold",
    skills: ["Frontend", "React", "Typescript", "Design Systems"],
    bio: "Focuses on polished user experiences, smooth interaction patterns, and product details that make software feel premium.",
    socials: profileLinks({
      website: "https://example.com/enes-keles",
      github: "https://github.com/Enesfreigthinus",
      linkedin: "https://www.linkedin.com/in/enes-kele%C5%9F-a3717a28a/"
    })
  },
  {
    name: "Sefa Ağardan",
    role: "Backend Engineer / Full-Stack Developer",
    letter: "S",
    initials: "SA",
    image: "/team/sefa_agardan.jpg",
    accent: "silver",
    skills: ["Spring Boot", "API Design", "Security", "Computer Vision" , "React"],
    bio: "Building scalable backend systems and AI-powered applications. Experienced in multi-tenant architectures, secure REST APIs, and production-grade computer vision pipelines.",
    socials: profileLinks({
      website: "https://g4stly.tr/",
      github: "https://github.com/g4stlyx",
      linkedin: "https://www.linkedin.com/in/sef4/"
    })
  }
];

export const projects: Project[] = [
  {
    title: "Bayes Cloud Console",
    category: "team",
    summary:
      "A unified control surface for provisioning, monitoring, and operating modern application infrastructure.",
    impact: "Reduced operational handoffs with one clean workflow for teams, services, and deployments.",
    technologies: ["Next.js", "tRPC", "PostgreSQL", "AWS", "Framer Motion"],
    liveUrl: "https://example.com/bayes-cloud-console",
    sourceUrl: "https://github.com/bayessoft/cloud-console"
  },
  {
    title: "SignalOps AI",
    category: "team",
    summary:
      "An AI-assisted observability layer that summarizes incidents, correlates signals, and accelerates triage.",
    impact: "Transforms noisy logs and metrics into readable engineering context in seconds.",
    technologies: ["Python", "OpenTelemetry", "LLMs", "Redis", "Docker"],
    liveUrl: "https://example.com/signalops-ai",
    sourceUrl: "https://github.com/bayessoft/signalops-ai"
  },
  {
    title: "LaunchGrid",
    category: "team",
    summary:
      "A product launch workspace for roadmaps, release readiness, public changelogs, and stakeholder visibility.",
    impact: "Gives product and engineering teams a single polished cockpit for shipping.",
    technologies: ["React", "Node.js", "Prisma", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com/launchgrid",
    sourceUrl: "https://github.com/bayessoft/launchgrid"
  },
  {
    title: "Vector Notes",
    category: "individual",
    owner: "Sefa Ağardan",
    summary:
      "A local-first research notebook that links notes, embeddings, citations, and generated summaries.",
    impact: "Makes dense technical research searchable without sacrificing privacy or structure.",
    technologies: ["Python", "SQLite", "Sentence Transformers", "Electron"],
    liveUrl: "https://example.com/vector-notes",
    sourceUrl: "https://github.com/g4stlyx/vector-notes"
  },
  {
    title: "MotionKit UI",
    category: "individual",
    owner: "Ahmet Buğrahan Çınar",
    summary:
      "A compact component library focused on accessible interactive states, transitions, and premium dashboards.",
    impact: "Speeds up interface delivery while keeping motion tasteful and performance conscious.",
    technologies: ["React", "Framer Motion", "Storybook", "Radix UI"],
    liveUrl: "https://example.com/motionkit-ui",
    sourceUrl: "https://github.com/BugraCinar/motionkit-ui"
  },
  {
    title: "Deploy Ledger",
    category: "individual",
    owner: "Batuhan Ersan",
    summary:
      "A deployment audit product that records releases, environment changes, incidents, and rollback trails.",
    impact: "Creates a reliable memory of production changes for distributed engineering teams.",
    technologies: ["Go", "Kubernetes", "PostgreSQL", "Grafana"],
    liveUrl: "https://example.com/deploy-ledger",
    sourceUrl: "https://github.com/BatuErsann/deploy-ledger"
  },
  {
    title: "Atlas CMS",
    category: "individual",
    owner: "Yavuz Selim Kara",
    summary:
      "A modular content platform for fast corporate sites, editorial workflows, and product landing pages.",
    impact: "Gives teams a clean publishing layer without sacrificing engineering control.",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com/atlas-cms",
    sourceUrl: "https://github.com/YsKara0/atlas-cms"
  },
  {
    title: "Pulse Mobile",
    category: "individual",
    owner: "Enes Keleş",
    summary:
      "A mobile-first status and operations interface with smooth motion, focused alerts, and compact dashboards.",
    impact: "Keeps high-priority product signals readable for teams away from their desks.",
    technologies: ["React Native", "TypeScript", "Expo", "Framer Motion"],
    liveUrl: "https://example.com/pulse-mobile",
    sourceUrl: "https://github.com/Enesfreigthinus/pulse-mobile"
  }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: "linkedin" },
  { label: "X", href: siteConfig.xUrl, icon: "twitter" },
  { label: "Website", href: siteConfig.siteUrl, icon: "website" }
];
