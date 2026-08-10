"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SocialIcon } from "@/components/SocialIcon";
import { contactHref, siteConfig } from "@/data/config";
import { socialLinks } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { copy } = useLanguage();
  const page = copy.pages.contact;
  const form = copy.contact;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title}>
        {page.body}
      </PageHero>

      <section className="theme-section-primary px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-px border border-bayes-ink bg-bayes-ink lg:grid-cols-[1.15fr_0.85fr]">
          <form
            action={contactHref}
            method="post"
            encType="text/plain"
            className="bg-bayes-paper p-7 md:p-9"
          >
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
                  {form.form}
                </p>
                <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-bayes-ink md:text-5xl">
                  {form.title}
                </h2>
              </div>
              <Send className="hidden size-8 shrink-0 md:block" strokeWidth={1.5} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.name}
                </span>
                <input
                  name="Ad Soyad"
                  required
                  className="min-h-12 border-2 border-bayes-ink bg-bayes-paper px-4 text-base text-bayes-ink outline-none transition duration-100 focus:border-b-4"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.email}
                </span>
                <input
                  name="E-posta"
                  type="email"
                  required
                  className="min-h-12 border-2 border-bayes-ink bg-bayes-paper px-4 text-base text-bayes-ink outline-none transition duration-100 focus:border-b-4"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.projectType}
                </span>
                <select
                  name="Proje Türü"
                  className="min-h-12 border-2 border-bayes-ink bg-bayes-paper px-4 text-base text-bayes-ink outline-none transition duration-100 focus:border-b-4"
                  defaultValue={form.types[0]}
                >
                  {form.types.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.budget}
                </span>
                <input
                  name="Bütçe / Zamanlama"
                  placeholder={form.budgetPlaceholder}
                  className="min-h-12 border-2 border-bayes-ink bg-bayes-paper px-4 text-base text-bayes-ink outline-none transition duration-100 placeholder:text-bayes-silver focus:border-b-4"
                />
              </label>
              <label className="grid gap-2 md:col-span-2">
                <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                  {form.message}
                </span>
                <textarea
                  name="Mesaj"
                  required
                  rows={6}
                  placeholder={form.messagePlaceholder}
                  className="resize-y border-2 border-bayes-ink bg-bayes-paper px-4 py-3 text-base leading-8 text-bayes-ink outline-none transition duration-100 placeholder:text-bayes-silver focus:border-b-4"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-bayes-silver">
                {form.note}
              </p>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-3 border-2 border-bayes-ink bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-paper transition duration-100 hover:bg-bayes-paper hover:text-bayes-ink"
              >
                {form.send}
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </form>

          <div className="grid gap-px bg-bayes-ink">
            <a
              href={contactHref}
              className="group flex min-h-[220px] flex-col justify-between bg-bayes-paper p-7 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
            >
              <Mail className="size-8" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                  {form.emailLabel}
                </p>
                <h2 className="font-subheading mt-4 break-all text-2xl">{siteConfig.contactEmail}</h2>
              </div>
              <ArrowUpRight className="size-5 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.githubUrl}
              className="group flex min-h-[220px] flex-col justify-between bg-bayes-paper p-7 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
            >
              <Github className="size-8" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                  GitHub
                </p>
                <h2 className="font-subheading mt-4 text-3xl">{form.code}</h2>
              </div>
              <ArrowUpRight className="size-5 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={siteConfig.linkedinUrl}
              className="group flex min-h-[220px] flex-col justify-between bg-bayes-paper p-7 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
            >
              <Linkedin className="size-8" strokeWidth={1.5} />
              <div>
                <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                  LinkedIn
                </p>
                <h2 className="font-subheading mt-4 text-3xl">{form.profile}</h2>
              </div>
              <ArrowUpRight className="size-5 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-4 border-bayes-ink bg-bayes-aqua p-7 md:p-10">
          <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
            {form.social}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={`BayesSoft ${social.label}`}
                className="flex min-h-11 items-center gap-3 border border-bayes-ink bg-bayes-paper px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper"
              >
                <SocialIcon icon={social.icon} className="size-4" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
