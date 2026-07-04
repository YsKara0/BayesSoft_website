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
  liveUrl?: string;
  sourceUrl?: string;
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
    title: "Tam Finans Multi-Platform Fintech System",
    category: "team",
    summary:
      "A multi-platform fintech system developed in collaboration with the Tam Finans Product Team, featuring a Spring Boot backend, a Flutter mobile app, and a React admin web panel.",
    impact: "Integrated secure end-to-end encrypted messaging, quiz engagement modules, audit logging, push notifications, and local business discovery.",
    technologies: ["Java", "Spring Boot", "Flutter", "React", "MySQL", "JWT / RBAC", "Firebase FCM", "Cloudflare R2"]
  },
  {
    title: "Smart Hospital System - Kanuni Sultan Süleyman Hospital",
    category: "team",
    summary:
      "An integrated healthcare platform developed for Kanuni Sultan Süleyman Hospital, featuring patient and staff mobile apps, an admin desktop panel, and a Spring Boot backend.",
    impact: "Designed specifically for low-infrastructure environments to support real-time navigation and emergency coordination.",
    technologies: ["Java", "Spring Boot", "Flutter", "JavaScript", "Electron", "JWT", "Cloudflare R2"]
  },
  {
    title: "PetNest - Pet-Friendly Venue Finder Platform",
    category: "team",
    summary:
      "A full-stack venue finder platform for discovering pet-friendly venues. Built with a Spring Boot REST API, a Flutter mobile application, and a React web dashboard.",
    impact: "Engineered with JWT/Argon2id authentication, TOTP 2FA, rate limiting, and automated backups.",
    technologies: ["Java", "Spring Boot", "Flutter", "React", "TypeScript", "MySQL", "JWT", "Cloudflare R2"]
  },
  {
    title: "Atlı Logistics - Workforce Management System",
    category: "team",
    summary:
      "A workforce management platform designed to streamline logistics operations, including hierarchical admin roles, secure task assignment, and worker verification.",
    impact: "Built a scalable REST backend and a responsive React dashboard to track payments and coordinate labor.",
    technologies: ["Java", "Spring Boot", "React", "MySQL", "JWT", "Cloudflare R2"],
    liveUrl: "https://atlidepohizmetleri.com"
  },
  {
    title: "Military Aircraft Classification System",
    category: "team",
    summary:
      "A deep learning pipeline designed to classify 89 aircraft types across 38,826 images using the EfficientNet-B4 architecture.",
    impact: "Achieved 92.86% Top-1 accuracy utilizing weighted loss and aggressive image augmentation to mitigate class imbalance.",
    technologies: ["Python", "PyTorch", "scikit-learn", "NumPy", "Pandas", "EfficientNet-B4"]
  },
  {
    title: "AI-Powered Chatbot Platform",
    category: "team",
    summary:
      "A production-ready chatbot platform powered by Llama3 via Ollama, featuring JWT authentication, TOTP 2FA, and multi-level admin panels.",
    impact: "Secured with an 8-layer prompt injection protection system, Redis caching, and automated daily database backups.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Redis", "Docker", "JWT", "Llama3 / Ollama"],
    sourceUrl: "https://github.com/g4stlyx/chatbot"
  },
  {
    title: "FurtherUp Drive",
    category: "individual",
    owner: "Sefa Ağardan",
    summary:
      "An enterprise coaching platform developed for FurtherUp. Features a multi-tenant React and Spring Boot system with secure role-based access control, assessment engines, and marketplace.",
    impact: "Delivered robust multi-tenant workspace with automated scheduling, assessment workflows, and payment checkout.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "MySQL", "Tailwind CSS", "JWT", "Cloudflare R2", "Iyzico"],
    liveUrl: "https://drive.further-up.net"
  },
  {
    title: "Maritime Horizon Line Segmentation",
    category: "individual",
    owner: "Sefa Ağardan",
    summary:
      "A multi-approach research project in maritime horizon detection, spanning traditional computer vision techniques to deep learning models.",
    impact: "Achieved real-time object-aware segmentation with U-Net and RT-DETR for sky/water/object separation and pixel distance estimation.",
    technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "U-Net", "RT-DETR", "YOLOv8-seg"],
    sourceUrl: "https://github.com/g4stlyx/horizon_line_segmentation"
  },
  {
    title: "Arelim University Vulnerability Report",
    category: "individual",
    owner: "Sefa Ağardan",
    summary:
      "A comprehensive security analysis of the university webpage to identify critical vulnerabilities like unauthorized access, REST API leaks, XSS, and SQL injection.",
    impact: "Outlined detailed exploitation scenarios and provided OWASP-based mitigation strategies to secure student databases.",
    technologies: ["Broken Access Control", "SQL Injection", "XSS", "OWASP Top 10"]
  }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.githubUrl, icon: "github" },
  { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: "linkedin" },
  { label: "X", href: siteConfig.xUrl, icon: "twitter" },
  { label: "Website", href: siteConfig.siteUrl, icon: "website" }
];
