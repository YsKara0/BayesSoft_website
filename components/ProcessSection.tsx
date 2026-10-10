"use client";

import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";
import { Activity, Code2, PenTool, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const icons = [Search, PenTool, Code2, Activity];

export function ProcessSection() {
  const { copy } = useLanguage();

  return (
    <section className="theme-dark bs-section relative overflow-hidden border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-foundation)] px-5 py-24 text-[color:var(--bs-tone-text)] md:px-8 md:py-32">
      <div className="texture-diagonal absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1216px]">
        <SectionIntro eyebrow={copy.process.eyebrow} title={copy.process.title}>
          {copy.process.intro}
        </SectionIntro>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[var(--bs-tone-soft)] lg:block" />
          {copy.process.items.map((step, index) => {
            const Icon = icons[index] ?? Search;
            return (
              <Reveal key={step.title} delay={index * .04}>
                <article className="bs-card group relative h-full min-h-[270px] p-7">
                  <div className="relative z-10 flex items-center justify-between lg:items-start">
                    <span className="theme-light flex size-12 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition group-hover:border-[color:var(--bs-tone-border)] group-hover:bg-[var(--bs-tone-card)]">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-4xl leading-none text-[color:var(--bs-tone-muted)] transition group-hover:text-[color:var(--bs-tone-text)]">0{index + 1}</span>
                  </div>
                  <p className="font-label mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">{copy.process.step} {index + 1}</p>
                  <h3 className="font-subheading mt-3 text-3xl leading-tight text-[color:var(--bs-tone-text)]">{step.title}</h3>
                  <p className="mt-5 max-w-md leading-8 text-[color:var(--bs-tone-muted)]">{step.summary}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
