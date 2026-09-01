import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[68svh] overflow-hidden border-b border-white/10 bg-[#060A10] px-5 pb-20 pt-36 text-white md:px-8 md:pb-24 md:pt-40">
      <div className="hero-grid absolute inset-0 -z-20 opacity-45" />
      <div className="absolute -right-24 top-12 -z-10 size-[34rem] rotate-45 border border-bayes-blue/15 shadow-[0_0_0_90px_rgba(0,102,255,.02),0_0_0_180px_rgba(0,102,255,.01)]" />
      <div className="absolute right-[13%] top-[42%] -z-10 hidden size-40 rotate-45 border border-bayes-blue/30 bg-bayes-blue/[.04] lg:block">
        <span className="font-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[9px] uppercase tracking-[.14em] text-bayes-blue font-semibold">Product core</span>
        <span className="absolute -left-16 top-1/2 h-px w-16 bg-bayes-blue/30" />
        <span className="absolute -right-16 top-1/2 h-px w-16 bg-bayes-blue/30" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="size-2 rounded-none bg-bayes-blue shadow-[0_0_10px_#0066FF]" aria-hidden="true" />
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-blue">{eyebrow}</p>
        </div>
        <h1 className="font-display max-w-5xl text-5xl leading-[.98] text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/70 md:text-xl">{children}</p>
      </div>
    </section>
  );
}
