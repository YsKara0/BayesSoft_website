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

  return (
    <section className="theme-section-primary relative border-b border-bayes-ink/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.services.eyebrow} title={copy.services.title}>
          {copy.services.intro}
        </SectionIntro>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.services.items.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={service.title} delay={index * 0.03} className="h-full">
                <article className={`group flex h-full flex-col rounded-[1.5rem] border border-bayes-ink/10 bg-bayes-paper p-7 shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-bayes-teal/40 hover:bg-bayes-ink hover:text-bayes-paper hover:shadow-premium-lg md:p-8 ${compact ? "min-h-[330px]" : "min-h-[290px]"}`}>
                  <div className={`mb-8 flex items-start gap-4 ${compact ? "justify-between" : "justify-end"}`}>
                    {compact ? (
                      <span className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                        0{index + 1}
                      </span>
                    ) : null}
                    <span className="flex size-12 items-center justify-center rounded-xl border border-current">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="font-subheading text-3xl leading-tight">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-bayes-silver group-hover:text-bayes-aqua">
                    {service.summary}
                  </p>
                  <p className="mt-5 border-l-4 border-bayes-teal pl-4 text-sm leading-7 text-bayes-deep group-hover:border-bayes-paper group-hover:text-bayes-paper">
                    {service.outcome}
                  </p>
                  {compact ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-8">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="border border-current px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.12em]"
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
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-paper shadow-premium-sm transition hover:-translate-y-0.5 hover:bg-bayes-teal hover:text-bayes-ink"
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
