"use client";

import Link from "next/link";
import { ArrowUpRight, BrainCircuit, MonitorUp, Smartphone, Waypoints } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";

const icons = [MonitorUp, Smartphone, BrainCircuit];

export function CapabilitiesSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].capabilities;

  return (
    <section id="capabilities" className="theme-dark bs-section bs-home-section border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-surface-dark)] px-5 text-[color:var(--bs-tone-text)] md:px-8">
      <div className="mx-auto max-w-[1216px]">
        <div className="grid gap-8 border-b border-[color:var(--bs-tone-border)] pb-8 md:pb-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--bs-tone-accent)]">{copy.eyebrow}</p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.15] text-[color:var(--bs-tone-text)] md:text-5xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-8 md:text-lg text-[color:var(--bs-tone-muted)]">{copy.intro}</p>
          </Reveal>
        </div>

        <div className="grid gap-5 pt-8 lg:grid-cols-3">
          {copy.pillars.map((pillar, index) => {
            const Icon = icons[index] ?? MonitorUp;
            return (
              <Reveal key={pillar.title} className="h-full">
                <article className="theme-light bs-card group flex h-full flex-col gap-5 p-6 sm:gap-6 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl leading-none text-[color:var(--bs-tone-muted)] transition group-hover:text-[color:var(--bs-tone-text)]">0{index + 1}</span>
                    <span className="flex size-12 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition group-hover:border-[color:var(--bs-tone-accent)] group-hover:bg-[var(--bs-tone-soft)]">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-2xl leading-tight text-[color:var(--bs-tone-text)] md:text-3xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[color:var(--bs-tone-muted)]">{pillar.summary}</p>
                  </div>
                  <ul className="mt-auto grid grid-cols-1 gap-x-4 border-t border-[color:var(--bs-tone-border)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex min-h-11 items-center sm:min-h-12 border-b border-[color:var(--bs-tone-border)] py-2 text-sm font-medium text-[color:var(--bs-tone-muted)] transition hover:text-[color:var(--bs-tone-text)]">
                        <span className="mr-3 size-1.5 shrink-0 rounded-[var(--bs-radius-control)] bg-[var(--bs-primary)]" />{item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="theme-dark bs-card grid gap-6 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-9">
            <span className="flex size-12 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)]"><Waypoints className="size-5" /></span>
            <div>
              <p className="font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">{copy.foundation}</p>
              <p className="mt-2 max-w-3xl leading-7 text-[color:var(--bs-tone-muted)]">{copy.foundationDetail}</p>
            </div>
            <Link href="/hizmetler" className="action-secondary-on-dark group whitespace-nowrap">{copy.explore}<ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
