"use client";

import Link from "next/link";
import { ArrowUpRight, BrainCircuit, CloudCog, Code2, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { useLanguage } from "@/components/LanguageProvider";

const icons = [Code2, Smartphone, BrainCircuit, CloudCog];

type ServicesOverviewProps = {
  compact?: boolean;
};

export function ServicesOverview({ compact = false }: ServicesOverviewProps) {
  const { copy } = useLanguage();

  if (compact) {
    return (
      <section className="border-b border-white/10 bg-[#060A10] px-5 py-24 text-white md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow={copy.services.eyebrow} title={copy.services.title} align="left">{copy.services.intro}</SectionIntro>
          <div className="border-t border-white/15">
            {copy.services.items.map((service, index) => {
              const Icon = icons[index] ?? Code2;
              return (
                <Reveal key={service.title}>
                  <article className="group grid gap-6 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.015] md:py-12 lg:grid-cols-[110px_.8fr_1.2fr] lg:gap-10">
                    <div className="flex items-start justify-between lg:block">
                      <span className="font-display text-5xl leading-none text-white/20 transition group-hover:text-white">0{index + 1}</span>
                      <span className="mt-1 flex size-11 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white transition group-hover:border-white/40 group-hover:bg-white/10 lg:mt-8"><Icon className="size-5" strokeWidth={1.5} /></span>
                    </div>
                    <div><h3 className="font-subheading text-3xl leading-tight text-white md:text-4xl">{service.title}</h3><p className="mt-5 leading-8 text-bayes-silver">{service.summary}</p></div>
                    <div className="lg:border-l lg:border-white/10 lg:pl-9"><p className="leading-8 text-white/85">{service.outcome}</p><div className="mt-6 flex flex-wrap gap-2">{service.points.map((point) => <span key={point} className="rounded-none border border-white/15 bg-white/5 px-3 py-2 font-label text-[9px] uppercase tracking-[.12em] text-white/80">{point}</span>)}</div></div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative border-b border-white/10 bg-[#060A10] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.services.eyebrow} title={copy.services.title}>
          {copy.services.intro}
        </SectionIntro>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.services.items.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={service.title} delay={index * 0.03} className="h-full">
                <article className={`group flex h-full flex-col rounded-none border border-white/15 bg-[#0C1420] p-7 text-white shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-premium-lg md:p-8 ${compact ? "min-h-[330px]" : "min-h-[290px]"}`}>
                  <div className={`mb-8 flex items-start gap-4 ${compact ? "justify-between" : "justify-end"}`}>
                    {compact ? (
                      <span className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                        0{index + 1}
                      </span>
                    ) : null}
                    <span className="flex size-12 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white transition group-hover:border-white/30 group-hover:bg-white/10">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="font-subheading text-3xl leading-tight text-white">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-bayes-silver">
                    {service.summary}
                  </p>
                  <p className="mt-5 border-l-2 border-bayes-blue pl-4 text-sm leading-7 text-white/90">
                    {service.outcome}
                  </p>
                  {compact ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-8">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="border border-white/15 bg-white/5 px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.12em] text-white/80"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>

        {!compact ? (
          <div className="mt-10 flex justify-center">
            <Link
              href="/hizmetler"
              className="action-primary group"
            >
              {copy.services.more}
              <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
