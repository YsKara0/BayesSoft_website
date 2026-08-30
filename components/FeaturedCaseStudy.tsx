"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bell, Building2, MapPin, MessageSquareText, ShieldCheck, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";

export function FeaturedCaseStudy() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].flagship;

  return (
    <section className="relative overflow-hidden bg-bayes-ink px-5 py-24 text-white md:px-8 md:py-32">
      <div className="texture-inverted pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute -right-40 top-20 size-[34rem] rounded-full bg-bayes-teal/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-5xl">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-bayes-teal">{copy.eyebrow}</p>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] md:text-6xl lg:text-7xl">{copy.title}</h2>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/65">{copy.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-center xl:gap-16">
          <Reveal>
            <div className="relative min-h-[550px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071321] p-5 shadow-[0_40px_120px_rgba(0,0,0,.42)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(0,196,182,.18),transparent_38%)]" />
              <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
                <div className="relative h-8 w-28"><Image src="/references/tamfinans.png" alt="Tam Finans" fill sizes="112px" className="object-contain object-left" /></div>
                <span className="font-label text-[9px] uppercase tracking-[.16em] text-white/40">{copy.visualLabel}</span>
              </div>
              <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/[.045] p-5 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="font-label text-[9px] uppercase tracking-[.16em] text-bayes-teal">Product core</p><h3 className="font-subheading mt-2 max-w-xs text-2xl">{copy.visualTitle}</h3></div>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-bayes-teal text-bayes-ink"><ShieldCheck className="size-5" /></span>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[Building2, MapPin, MessageSquareText, Bell].map((Icon, index) => (
                    <div key={index} className="min-h-24 rounded-xl border border-white/10 bg-white/[.045] p-3">
                      <Icon className="size-4 text-bayes-teal" strokeWidth={1.5} />
                      <div className="mt-5 h-1.5 w-3/4 rounded-full bg-white/25" />
                      <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/10" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-28 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,196,182,.12),rgba(255,255,255,.025))] p-4">
                  <svg viewBox="0 0 500 80" className="size-full" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 65 C55 66 56 28 116 42 S195 73 242 30 330 42 371 20 435 12 500 3" fill="none" stroke="#00C4B6" strokeWidth="3" />
                    <path d="M0 65 C55 66 56 28 116 42 S195 73 242 30 330 42 371 20 435 12 500 3 L500 80 L0 80Z" fill="rgba(0,196,182,.08)" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-14 right-7 w-[31%] min-w-[150px] rounded-[2rem] border border-white/20 bg-[#14273b] p-2 shadow-[0_28px_70px_rgba(0,0,0,.45)]">
                <div className="relative aspect-[.52] overflow-hidden rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_20%,rgba(0,196,182,.28),transparent_30%),#091827] p-4">
                  <div className="mx-auto h-3 w-14 rounded-b-lg bg-[#14273b]" />
                  <Smartphone className="mx-auto mt-10 size-8 text-bayes-teal" strokeWidth={1.25} />
                  <div className="mt-8 h-2 w-2/3 rounded-full bg-white/40" />
                  <div className="mt-3 h-2 w-1/2 rounded-full bg-white/15" />
                  <div className="mt-8 grid grid-cols-2 gap-2"><span className="h-16 rounded-xl bg-white/[.07]" /><span className="h-16 rounded-xl bg-white/[.07]" /></div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="border-t border-white/15">
            {[
              [copy.challenge, copy.challengeText],
              [copy.solution, copy.solutionText],
              [copy.product, copy.layers],
              [copy.outcome, copy.outcomeText],
            ].map(([label, content], index) => (
              <Reveal key={String(label)} delay={index * .03}>
                <div className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[130px_1fr]">
                  <p className="font-label text-[10px] font-semibold uppercase tracking-[.16em] text-bayes-teal">0{index + 1} · {String(label)}</p>
                  {Array.isArray(content) ? (
                    <div className="flex flex-wrap gap-2">{content.map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/65">{item}</span>)}</div>
                  ) : <p className="leading-7 text-white/65">{String(content)}</p>}
                </div>
              </Reveal>
            ))}
            <Reveal><Link href="/projeler/tam-finans-fintech" className="action-primary-on-dark group mt-8">{copy.detail}<ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
