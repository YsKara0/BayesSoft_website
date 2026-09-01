"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function StatsBand() {
  const { copy } = useLanguage();

  return (
    <section className="texture-inverted bg-[#040608] px-5 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-none border border-white/15 bg-[#080E17] md:grid-cols-3">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="group border-b border-white/10 p-8 transition hover:bg-white/[0.02] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-10">
            <p className="font-display text-6xl leading-none text-white transition group-hover:text-bayes-blue md:text-7xl">{stat.value}</p>
            <p className="font-label mt-5 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-bayes-blue font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
