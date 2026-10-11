import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="theme-dark bs-section relative isolate min-h-[56svh] overflow-hidden border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] px-5 pb-20 pt-36 text-[color:var(--bs-tone-text)] md:px-8 md:pb-24 md:pt-40">
      <div className="hero-grid absolute inset-0 -z-20 opacity-45" />
      <div className="absolute -right-24 top-12 -z-10 size-[34rem] rotate-45 border border-[color:var(--bs-primary)] shadow-[var(--bs-shadow-soft)]" />
      <div className="absolute right-[13%] top-[42%] -z-10 hidden size-40 rotate-45 border border-[color:var(--bs-primary)] bg-[var(--bs-tone-soft)] lg:block">
        <span className="font-label absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 text-[9px] uppercase tracking-[.14em] text-[color:var(--bs-tone-accent)] font-semibold">Product core</span>
        <span className="absolute -left-16 top-1/2 h-px w-16 bg-[var(--bs-tone-soft)]" />
        <span className="absolute -right-16 top-1/2 h-px w-16 bg-[var(--bs-tone-soft)]" />
      </div>
      <div className="relative mx-auto max-w-[1216px]">
        <div className="mb-8 flex items-center gap-3">
          <span className="size-2 rounded-[var(--bs-radius-control)] bg-[var(--bs-primary)] shadow-[var(--bs-shadow-soft)]" aria-hidden="true" />
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--bs-tone-accent)]">{eyebrow}</p>
        </div>
        <h1 className="font-display max-w-5xl text-5xl leading-[1.12] text-[color:var(--bs-tone-text)] md:text-7xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-[color:var(--bs-tone-muted)] md:text-xl">{children}</p>
      </div>
    </section>
  );
}
