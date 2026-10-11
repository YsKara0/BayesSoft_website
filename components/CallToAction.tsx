"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { contactHref } from "@/data/config";
import { useLanguage } from "@/components/LanguageProvider";

export function CallToAction() {
  const { copy } = useLanguage();

  return (
    <section className="theme-dark bs-section bg-[var(--bs-tone-bg)] px-5 py-20 md:px-8 md:py-28">
      <div className="relative mx-auto grid max-w-[1216px] gap-8 overflow-hidden rounded-[var(--bs-radius-panel)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-7 text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] md:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="pointer-events-none absolute -right-20 -top-24 size-80 rotate-45 border border-[color:var(--bs-tone-border)] shadow-[var(--bs-shadow-soft)]" />
        <div>
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--bs-tone-accent)]">
            {copy.cta.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.06] text-[color:var(--bs-tone-text)] md:text-6xl">
            {copy.cta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--bs-tone-muted)]">{copy.cta.body}</p>
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
