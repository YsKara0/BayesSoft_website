"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function StatsBand() {
  const { copy } = useLanguage();

  return (
    <section className="theme-dark bs-section texture-inverted bg-[var(--bs-foundation)] px-5 py-20 text-[color:var(--bs-tone-text)] md:px-8">
      <div className="theme-light mx-auto grid max-w-[1216px] overflow-hidden rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] md:grid-cols-3">
        {copy.stats.map((stat) => (
          <div key={stat.label} className="group border-b border-[color:var(--bs-tone-border)] p-8 transition hover:bg-[var(--bs-tone-soft)] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-10">
            <p className="font-display text-6xl leading-none text-[color:var(--bs-tone-text)] transition group-hover:text-[color:var(--bs-tone-accent)] md:text-7xl">{stat.value}</p>
            <p className="font-label mt-5 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-[color:var(--bs-tone-accent)] font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
