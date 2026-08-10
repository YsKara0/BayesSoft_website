"use client";

import { PageHero } from "@/components/PageHero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectsPage() {
  const { copy } = useLanguage();
  const page = copy.pages.projects;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>
      <ProjectsSection />
    </main>
  );
}
