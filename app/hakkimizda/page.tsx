"use client";

import { PageHero } from "@/components/PageHero";
import { StatsBand } from "@/components/StatsBand";
import { TeamSection } from "@/components/TeamSection";
import { CallToAction } from "@/components/CallToAction";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutPage() {
  const { copy } = useLanguage();
  const page = copy.pages.about;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>

      <section className="theme-dark bs-section border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] px-5 py-24 text-[color:var(--bs-tone-text)] md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[1216px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
              {page.approach}
            </p>
            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.04] text-[color:var(--bs-tone-text)] md:text-6xl">
              {page.approachTitle}
            </h2>
          </div>
          <div className="grid gap-5">
            {page.principles.map((principle, index) => (
              <article key={principle.title} className="theme-light bs-card group grid gap-5 p-7 sm:grid-cols-[70px_1fr] md:p-9">
                <p className="font-display text-4xl leading-none text-[color:var(--bs-tone-muted)] transition group-hover:text-[color:var(--bs-tone-accent)]">0{index + 1}</p>
                <div>
                  <h3 className="font-subheading text-3xl text-[color:var(--bs-tone-text)]">{principle.title}</h3>
                  <p className="mt-4 leading-8 text-[color:var(--bs-tone-muted)]">{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
      <TeamSection />
      <CallToAction />
    </main>
  );
}
