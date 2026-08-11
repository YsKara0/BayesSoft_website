"use client";

import { PageHero } from "@/components/PageHero";
import { StatsBand } from "@/components/StatsBand";
import { TeamSection } from "@/components/TeamSection";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { copy } = useLanguage();
  const page = copy.pages.about;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>

      <section className="theme-section-primary border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
              {page.approach}
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.06] text-bayes-ink md:text-6xl">
              {page.approachTitle}
            </h2>
          </div>
          <div className="grid gap-px border border-bayes-ink bg-bayes-ink">
            {page.principles.map((principle, index) => (
              <article key={principle.title} className="bg-bayes-paper p-7">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-bayes-blue">
                  0{index + 1}
                </p>
                <h3 className="font-subheading mt-5 text-3xl text-bayes-ink">{principle.title}</h3>
                <p className="mt-4 leading-8 text-bayes-silver">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <TeamSection />
    </main>
  );
}
