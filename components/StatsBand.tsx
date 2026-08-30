"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function StatsBand() {
  const { copy } = useLanguage();

  return (
    <section className="texture-inverted bg-bayes-ink px-5 py-20 text-bayes-paper md:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/[.035] md:grid-cols-3">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="border-b border-white/12 p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-10">
            <p className="font-display text-6xl leading-none text-bayes-teal md:text-7xl">{stat.value}</p>
            <p className="font-label mt-5 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-bayes-aqua">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
