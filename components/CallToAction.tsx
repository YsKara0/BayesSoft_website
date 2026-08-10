"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref } from "@/data/config";
import { useLanguage } from "@/components/LanguageProvider";

export function CallToAction() {
  const { copy } = useLanguage();

  return (
    <section className="theme-section-primary px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-bayes-ink p-7 text-white shadow-premium-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-teal">
            {copy.cta.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.06] text-white md:text-6xl">
            {copy.cta.title}
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={contactHref}
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-bayes-coral px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-bayes-ink"
          >
            <Mail className="size-4" />
            {copy.cta.mail}
          </a>
          <Link
            href="/iletisim"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-bayes-ink"
          >
            {copy.cta.page}
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
