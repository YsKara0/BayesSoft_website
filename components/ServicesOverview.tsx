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
      <section className="theme-dark bs-section border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-foundation)] px-5 py-24 text-[color:var(--bs-tone-text)] md:px-8 md:py-32">
        <div className="mx-auto max-w-[1216px]">
          <SectionIntro eyebrow={copy.services.eyebrow} title={copy.services.title} align="left">{copy.services.intro}</SectionIntro>
          <div className="grid gap-5">
            {copy.services.items.map((service, index) => {
              const Icon = icons[index] ?? Code2;
              return (
                <Reveal key={service.title}>
                  <article className="theme-light bs-card group grid gap-6 p-7 md:p-10 lg:grid-cols-[110px_.8fr_1.2fr] lg:gap-10">
                    <div className="flex items-start justify-between lg:block">
                      <span className="font-display text-5xl leading-none text-[color:var(--bs-tone-muted)] transition group-hover:text-[color:var(--bs-tone-text)]">0{index + 1}</span>
                      <span className="mt-1 flex size-11 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition group-hover:border-[color:var(--bs-tone-border)] group-hover:bg-[var(--bs-tone-soft)] lg:mt-8"><Icon className="size-5" strokeWidth={1.5} /></span>
                    </div>
                    <div><h3 className="font-subheading text-3xl leading-tight text-[color:var(--bs-tone-text)] md:text-4xl">{service.title}</h3><p className="mt-5 leading-8 text-[color:var(--bs-tone-muted)]">{service.summary}</p></div>
                    <div className="lg:border-l lg:border-[color:var(--bs-tone-border)] lg:pl-9"><p className="leading-8 text-[color:var(--bs-tone-muted)]">{service.outcome}</p><div className="mt-6 flex flex-wrap gap-2">{service.points.map((point) => <span key={point} className="rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-3 py-2 font-label text-[9px] uppercase tracking-[.12em] text-[color:var(--bs-tone-muted)]">{point}</span>)}</div></div>
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
    <section className="theme-dark bs-section relative border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-foundation)] px-5 py-20 text-[color:var(--bs-tone-text)] md:px-8 md:py-28">
      <div className="mx-auto max-w-[1216px]">
        <SectionIntro eyebrow={copy.services.eyebrow} title={copy.services.title}>
          {copy.services.intro}
        </SectionIntro>

        <div className="grid gap-5 md:grid-cols-2">
          {copy.services.items.map((service, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <Reveal key={service.title} delay={index * 0.03} className="h-full">
                <article className={`theme-light group flex h-full flex-col rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-tone-border)] hover:shadow-[var(--bs-shadow-soft)] md:p-8 ${compact ? "min-h-[330px]" : "min-h-[290px]"}`}>
                  <div className={`mb-8 flex items-start gap-4 ${compact ? "justify-between" : "justify-end"}`}>
                    {compact ? (
                      <span className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
                        0{index + 1}
                      </span>
                    ) : null}
                    <span className="flex size-12 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition group-hover:border-[color:var(--bs-tone-border)] group-hover:bg-[var(--bs-tone-soft)]">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="font-subheading text-3xl leading-tight text-[color:var(--bs-tone-text)]">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-[color:var(--bs-tone-muted)]">
                    {service.summary}
                  </p>
                  <p className="mt-5 border-l-2 border-[color:var(--bs-primary)] pl-4 text-sm leading-7 text-[color:var(--bs-tone-muted)]">
                    {service.outcome}
                  </p>
                  {compact ? (
                    <div className="mt-auto flex flex-wrap gap-2 pt-8">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-3 py-1.5 font-label text-[11px] uppercase tracking-[0.12em] text-[color:var(--bs-tone-muted)]"
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
