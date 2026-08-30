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
    <section id="capabilities" className="theme-section-primary border-b border-bayes-ink/10 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-bayes-ink/15 pb-12 md:pb-16 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-blue">{copy.eyebrow}</p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.02] text-bayes-ink md:text-6xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:justify-self-end">
            <p className="max-w-2xl text-lg leading-9 text-bayes-silver">{copy.intro}</p>
          </Reveal>
        </div>

        <div>
          {copy.pillars.map((pillar, index) => {
            const Icon = icons[index] ?? MonitorUp;
            return (
              <Reveal key={pillar.title}>
                <article className="group grid gap-6 border-b border-bayes-ink/15 py-10 transition-colors md:py-12 lg:grid-cols-[100px_.72fr_1fr] lg:items-start lg:gap-10">
                  <div className="flex items-center justify-between lg:block">
                    <span className="font-display text-5xl leading-none text-bayes-ink/20">0{index + 1}</span>
                    <span className="flex size-12 items-center justify-center rounded-full border border-bayes-ink/20 text-bayes-blue transition group-hover:border-bayes-teal group-hover:bg-bayes-aqua lg:mt-8">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-subheading text-3xl leading-tight text-bayes-ink md:text-4xl">{pillar.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-bayes-silver">{pillar.summary}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-6 border-t border-bayes-ink/10 sm:grid-cols-3 lg:border-t-0">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex min-h-14 items-center border-b border-bayes-ink/10 py-3 text-sm font-medium text-bayes-deep">
                        <span className="mr-3 size-1.5 shrink-0 rounded-full bg-bayes-teal" />{item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="grid gap-6 rounded-[1.5rem] bg-bayes-ink p-7 text-white md:grid-cols-[auto_1fr_auto] md:items-center md:p-9">
            <span className="flex size-12 items-center justify-center rounded-full border border-bayes-teal/40 bg-bayes-teal/10 text-bayes-teal"><Waypoints className="size-5" /></span>
            <div>
              <p className="font-label text-[10px] font-semibold uppercase tracking-[0.18em] text-bayes-teal">{copy.foundation}</p>
              <p className="mt-2 max-w-3xl leading-7 text-white/65">{copy.foundationDetail}</p>
            </div>
            <Link href="/hizmetler" className="action-secondary-on-dark group whitespace-nowrap">{copy.explore}<ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
