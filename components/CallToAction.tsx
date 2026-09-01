"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref } from "@/data/config";
import { useLanguage } from "@/components/LanguageProvider";

export function CallToAction() {
  const { copy } = useLanguage();

  return (
    <section className="bg-[#060A10] px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-none border border-white/10 bg-[#0A121E] p-7 text-white shadow-premium-lg md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="absolute -right-20 -top-24 size-80 rotate-45 border border-white/5 shadow-[0_0_0_70px_rgba(255,255,255,.01)]" />
        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
            {copy.cta.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.06] text-white md:text-6xl">
            {copy.cta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{copy.cta.body}</p>
        </div>
        <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/iletisim"
            className="action-primary-on-dark group"
          >
            {copy.cta.page}
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a href={contactHref} className="action-secondary-on-dark group">
            <Mail className="size-4" />
            {copy.cta.mail}
          </a>
        </div>
      </div>
    </section>
  );
}
