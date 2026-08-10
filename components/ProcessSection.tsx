"use client";

import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";

export function ProcessSection() {
  const { copy } = useLanguage();

  return (
    <section className="theme-section-secondary relative overflow-hidden border-b border-bayes-ink/10 px-5 py-20 md:px-8 md:py-28">
      <div className="texture-diagonal absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.process.eyebrow} title={copy.process.title}>
          {copy.process.intro}
        </SectionIntro>

        <div className="grid overflow-hidden rounded-[1.5rem] border border-bayes-ink/10 bg-bayes-paper shadow-premium-sm lg:grid-cols-4">
          {copy.process.items.map((step, index) => (
            <article
              key={step.title}
              className="min-h-[260px] border-b border-bayes-ink/10 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                {copy.process.step} {index + 1}
              </p>
              <h3 className="font-subheading mt-8 text-3xl leading-tight text-bayes-ink">{step.title}</h3>
              <p className="mt-5 leading-8 text-bayes-silver">{step.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
