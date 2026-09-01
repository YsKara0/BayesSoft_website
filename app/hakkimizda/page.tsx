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

      <section className="border-b border-white/10 bg-[#060A10] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
              {page.approach}
            </p>
            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.04] text-white md:text-6xl">
              {page.approachTitle}
            </h2>
          </div>
          <div className="border-t border-white/15">
            {page.principles.map((principle, index) => (
              <article key={principle.title} className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.015] sm:grid-cols-[70px_1fr] md:py-10">
                <p className="font-display text-4xl leading-none text-white/20 transition group-hover:text-bayes-blue">0{index + 1}</p>
                <div>
                  <h3 className="font-subheading text-3xl text-white">{principle.title}</h3>
                  <p className="mt-4 leading-8 text-bayes-silver">{principle.text}</p>
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
