"use client";

import { Github, Globe2, Linkedin, Twitter } from "lucide-react";

export type IconName = "github" | "linkedin" | "twitter" | "website";

type SocialIconProps = {
  icon: IconName;
  className?: string;
};

export function SocialIcon({ icon, className }: SocialIconProps) {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    website: Globe2
  };

  const Icon = icons[icon];
  return <Icon aria-hidden="true" className={className} />;
}
