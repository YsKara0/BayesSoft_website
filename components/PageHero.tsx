import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="theme-section-secondary relative overflow-hidden border-b-4 border-bayes-ink px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-36">
      <div className="texture-lines absolute inset-0 opacity-45" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="size-4 border-2 border-bayes-ink bg-bayes-teal" aria-hidden="true" />
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-blue">
            {eyebrow}
          </p>
        </div>
        <h1 className="font-display max-w-5xl text-5xl leading-none text-bayes-ink md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-bayes-deep">{children}</p>
      </div>
    </section>
  );
}
