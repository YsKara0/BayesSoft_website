"use client";

import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";
import { useLanguage } from "@/components/LanguageProvider";

export default function TeamPage() {
  const { copy } = useLanguage();
  const page = copy.pages.team;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>
      <TeamSection />
    </main>
  );
}
