"use client";

import { ArrowRight, CircleCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";

export function OneTeamSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].team;

  return (
    <section className="theme-section-primary overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <Reveal><p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-bayes-blue">{copy.eyebrow}</p><h2 className="font-display mt-5 text-4xl leading-[1.02] text-bayes-ink md:text-6xl">{copy.title}</h2></Reveal>
          <Reveal delay={.05}><p className="max-w-2xl text-lg leading-9 text-bayes-silver lg:ml-auto">{copy.intro}</p></Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative rounded-[2rem] border border-bayes-ink/10 bg-bayes-aqua p-6 md:p-10">
            <div className="absolute left-10 right-10 top-[4.4rem] hidden h-px bg-bayes-ink/20 lg:block" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-8">
              {copy.stages.map((stage, index) => (
                <div key={stage} className="relative flex min-h-28 items-center gap-4 border-b border-bayes-ink/10 py-4 sm:min-h-32 sm:flex-col sm:items-start sm:border-b-0 sm:px-2 sm:py-0">
                  <span className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border font-label text-[9px] font-semibold ${index === 0 || index === copy.stages.length - 1 ? "border-bayes-ink bg-bayes-ink text-white" : "border-bayes-teal bg-white text-bayes-blue"}`}>0{index + 1}</span>
                  <p className="font-subheading text-sm leading-5 text-bayes-ink">{stage}</p>
                  {index < copy.stages.length - 1 ? <ArrowRight className="ml-auto size-4 text-bayes-ink/25 sm:hidden" /> : null}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-5 border-t border-bayes-ink/15 pt-7 md:grid-cols-[auto_1fr] md:items-start">
              <span className="flex size-12 items-center justify-center rounded-full bg-bayes-coral text-white"><Workflow className="size-5" /></span>
              <div><h3 className="font-subheading text-2xl text-bayes-ink">{copy.partner}</h3><p className="mt-3 max-w-3xl leading-8 text-bayes-silver">{copy.partnerDetail}</p><p className="font-label mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-bayes-blue"><CircleCheck className="size-4" /> BayesSoft product engineering</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
