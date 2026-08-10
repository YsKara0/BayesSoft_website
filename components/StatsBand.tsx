"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function StatsBand() {
  const { copy } = useLanguage();

  return (
    <section className="texture-inverted bg-bayes-ink px-5 py-16 text-bayes-paper md:px-8">
      <div className="mx-auto grid max-w-7xl gap-px border border-bayes-paper/30 bg-bayes-paper/30 md:grid-cols-3">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="bg-bayes-ink p-8">
            <p className="font-display text-6xl leading-none md:text-7xl">{stat.value}</p>
            <p className="font-label mt-5 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-bayes-aqua">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
