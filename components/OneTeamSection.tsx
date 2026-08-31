"use client";

import { ArrowRight, CircleCheck, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";

export function OneTeamSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].team;

  return (
    <section className="overflow-hidden border-b border-white/10 bg-[#060A10] px-5 py-24 text-white md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-bayes-blue">{copy.eyebrow}</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] text-white md:text-6xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={.05}>
            <p className="max-w-2xl text-lg leading-9 text-bayes-silver lg:ml-auto">{copy.intro}</p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="relative rounded-none border border-white/10 bg-[#0A121E] p-6 shadow-premium-lg md:p-10">
            <div className="absolute left-10 right-10 top-[4.4rem] hidden h-px bg-white/15 lg:block" />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-8">
              {copy.stages.map((stage, index) => (
                <div key={stage} className="relative flex min-h-28 items-center gap-4 border-b border-white/10 py-4 sm:min-h-32 sm:flex-col sm:items-start sm:border-b-0 sm:px-2 sm:py-0">
                  <span className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-none border font-label text-[9px] font-semibold ${index === 0 || index === copy.stages.length - 1 ? "border-bayes-blue bg-bayes-blue text-white" : "border-white/20 bg-white/5 text-white/90"}`}>
                    0{index + 1}
                  </span>
                  <p className="font-subheading text-sm leading-5 text-white/90">{stage}</p>
                  {index < copy.stages.length - 1 ? <ArrowRight className="ml-auto size-4 text-white/30 sm:hidden" /> : null}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-5 border-t border-white/15 pt-7 md:grid-cols-[auto_1fr] md:items-start">
              <span className="flex size-12 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white">
                <Workflow className="size-5 text-bayes-blue" />
              </span>
              <div>
                <h3 className="font-subheading text-2xl text-white">{copy.partner}</h3>
                <p className="mt-3 max-w-3xl leading-8 text-bayes-silver">{copy.partnerDetail}</p>
                <p className="font-label mt-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-bayes-blue">
                  <CircleCheck className="size-4 text-bayes-blue" /> BayesSoft product engineering
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
