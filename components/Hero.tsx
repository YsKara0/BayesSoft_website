"use client";

import Link from "next/link";
import { ArrowUpRight, Braces, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";

const signalIcons = [Layers3, ShieldCheck, Sparkles];

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="theme-hero-base relative isolate overflow-hidden border-b border-bayes-ink/10 px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-32">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="absolute -right-24 top-16 -z-10 size-[420px] rounded-full bg-bayes-teal/20 blur-3xl md:size-[620px]" />
      <div className="absolute -left-32 bottom-0 -z-10 size-96 rounded-full bg-bayes-coral/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[72svh] max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-bayes-teal/30 bg-white/80 px-4 py-2 shadow-premium-sm backdrop-blur">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-bayes-teal opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-bayes-teal" />
            </span>
            <span className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">{copy.hero.eyebrow}</span>
          </div>

          <h1 className="font-display max-w-4xl text-[clamp(3rem,7vw,6.7rem)] leading-[0.98] text-bayes-ink">
            {copy.hero.titleLead}{" "}
            <span className="relative inline-block text-bayes-blue">
              {copy.hero.titleAccent}
              <span className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-bayes-coral/70" aria-hidden="true" />
            </span>{" "}
            {copy.hero.titleEnd}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bayes-silver md:text-xl md:leading-9">{copy.hero.body}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/iletisim" className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-bayes-coral px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-premium-sm transition hover:-translate-y-1 hover:bg-bayes-ink hover:shadow-premium-lg">
              {copy.hero.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/hizmetler" className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-bayes-ink/15 bg-white px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-ink shadow-premium-sm transition hover:-translate-y-1 hover:border-bayes-teal hover:bg-bayes-aqua">
              {copy.hero.secondary}
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="relative hidden min-h-[500px] lg:block">
          <div className="absolute left-1/2 top-1/2 size-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bayes-teal/25" />
          <div className="animate-orbit absolute left-1/2 top-1/2 size-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-bayes-blue/30">
            <span className="absolute -top-3 left-1/2 flex size-7 -translate-x-1/2 items-center justify-center rounded-lg bg-bayes-coral shadow-premium-sm" />
          </div>

          <div className="animate-float absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border border-white/70 bg-bayes-ink p-6 text-white shadow-premium-lg">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-bayes-teal" /><span className="font-label text-[10px] uppercase tracking-[0.14em] text-bayes-mint">{copy.hero.status}</span></div>
              <Braces className="size-5 text-bayes-teal" />
            </div>
            <div className="py-9">
              <div className="font-display text-6xl text-white">B<span className="text-bayes-teal">S</span></div>
              <h2 className="font-subheading mt-7 text-2xl">{copy.hero.cardTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-white/65">{copy.hero.cardBody}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["API", "APP", "AI"].map((item, index) => <span key={item} className={`rounded-xl px-3 py-3 text-center font-label text-[10px] ${index === 2 ? "bg-bayes-coral text-white" : "bg-white/[0.08] text-bayes-mint"}`}>{item}</span>)}
            </div>
          </div>

          <div className="animate-float-delayed absolute right-0 top-20 rounded-2xl border border-bayes-teal/30 bg-white/90 p-4 shadow-premium-sm backdrop-blur">
            <span className="font-label text-[10px] uppercase tracking-[0.12em] text-bayes-silver">Delivery</span>
            <p className="font-subheading mt-1 text-sm text-bayes-ink">Design → Code → Scale</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="relative mx-auto mt-8 grid max-w-7xl gap-3 md:grid-cols-3">
        {copy.hero.signals.map((signal, index) => {
          const Icon = signalIcons[index] ?? Layers3;
          return (
            <div key={signal} className="flex min-h-20 items-center gap-4 rounded-2xl border border-bayes-ink/10 bg-white/80 p-4 shadow-premium-sm backdrop-blur">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-bayes-aqua text-bayes-blue"><Icon className="size-5" strokeWidth={1.7} /></span>
              <span className="font-subheading text-sm text-bayes-ink">{signal}</span>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
