import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="theme-section-secondary relative overflow-hidden border-b border-bayes-ink/10 px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-36">
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="absolute -right-32 top-10 size-96 rounded-full bg-bayes-teal/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="size-3 rounded-full bg-bayes-coral shadow-[0_0_0_6px_rgba(255,107,107,0.12)]" aria-hidden="true" />
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-blue">
            {eyebrow}
          </p>
        </div>
        <h1 className="font-display max-w-5xl text-5xl leading-none text-bayes-ink md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-bayes-silver md:text-xl">{children}</p>
      </div>
    </section>
  );
}
