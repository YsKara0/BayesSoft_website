"use client";

import { CallToAction } from "@/components/CallToAction";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { useLanguage } from "@/components/LanguageProvider";

export default function ServicesPage() {
  const { copy } = useLanguage();
  const page = copy.pages.services;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>
      <ServicesOverview compact />
      <ProcessSection />
      <CallToAction />
    </main>
  );
}
