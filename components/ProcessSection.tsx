"use client";

import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";
import { Activity, Code2, PenTool, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const icons = [Search, PenTool, Code2, Activity];

export function ProcessSection() {
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A1018] px-5 py-24 text-white md:px-8 md:py-32">
      <div className="texture-diagonal absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.process.eyebrow} title={copy.process.title}>
          {copy.process.intro}
        </SectionIntro>

        <div className="relative grid lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />
          {copy.process.items.map((step, index) => {
            const Icon = icons[index] ?? Search;
            return (
              <Reveal key={step.title} delay={index * .04}>
                <article className="group relative min-h-[270px] border-t border-white/10 py-8 transition hover:bg-white/[0.015] lg:border-t-0 lg:px-5 lg:py-0">
                  <div className="relative z-10 flex items-center justify-between lg:items-start">
                    <span className="flex size-12 items-center justify-center rounded-none border border-white/15 bg-[#0C1420] text-white shadow-premium-sm transition group-hover:border-white/40 group-hover:bg-[#142032]">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-display text-4xl leading-none text-white/20 transition group-hover:text-white">0{index + 1}</span>
                  </div>
                  <p className="font-label mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-bayes-blue">{copy.process.step} {index + 1}</p>
                  <h3 className="font-subheading mt-3 text-3xl leading-tight text-white">{step.title}</h3>
                  <p className="mt-5 max-w-md leading-8 text-bayes-silver">{step.summary}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
