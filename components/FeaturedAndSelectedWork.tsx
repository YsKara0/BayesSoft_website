"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bell, Building2, MapPin, MessageSquareText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { localizeProject } from "@/data/projectTranslations";
import { projects } from "@/data/site";

const slugs = ["furtherup-drive"];

export function FeaturedAndSelectedWork() {
  const { locale } = useLanguage();
  const flagshipCopy = homeCopy[locale].flagship;
  const workCopy = homeCopy[locale].work;

  const selectedProjects = slugs
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project))
    .map((project) => localizeProject(project, locale));

  const mainProject = selectedProjects[0];

  return (
    <section id="work" className="theme-dark bs-section bs-home-section relative overflow-hidden border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] px-5 text-[color:var(--bs-tone-text)] md:px-8">
      {/* Background ambient lighting */}
      <div className="texture-inverted pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-40 size-[36rem] bg-[var(--bs-surface-dark)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 size-[36rem] bg-[var(--bs-surface-dark)] blur-3xl" />

      <div className="relative mx-auto max-w-[1216px]">
        {/* Two Column Layout: Left = Tam Finans Case, Right = Selected Work */}
        <div className="grid gap-10 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-10 lg:gap-y-0 xl:gap-x-16">
          
          {/* ================= COLUMN 1: ÖNE ÇIKAN VAKA (TAM FİNANS) ================= */}
          <div className="flex flex-col lg:row-span-2 lg:grid lg:grid-rows-subgrid">
            <Reveal>
              <div className="max-w-xl">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--bs-tone-accent)]">
                  {flagshipCopy.eyebrow}
                </p>
                <h2 className="font-display mt-4 text-3xl leading-[1.08] text-[color:var(--bs-tone-text)] md:text-4xl lg:text-[2.5rem]">
                  {flagshipCopy.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--bs-tone-muted)]">
                  {flagshipCopy.intro}
                </p>
              </div>
            </Reveal>

            <div>
              {/* Tam Finans Visual Core Preview */}
              <Reveal delay={0.05} className="mt-8">
                <div className="relative overflow-hidden rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-5 shadow-[var(--bs-shadow-soft)] md:p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,var(--bs-primary-glow),transparent_50%)]" />
                
                  {/* Header */}
                  <div className="relative flex items-center justify-between gap-4 border-b border-[color:var(--bs-tone-border)] pb-4">
                    <div className="relative h-10 w-32 shrink-0 rounded-[var(--bs-radius-control)] bg-[var(--bs-surface)]">
                      <Image
                        src="/references/tamfinans.png"
                        alt="Tam Finans"
                        fill
                        sizes="128px"
                        className="object-contain p-2"
                      />
                    </div>
                    <span className="font-label text-right text-[10px] uppercase tracking-[0.12em] text-[color:var(--bs-tone-muted)]">
                      {flagshipCopy.visualLabel}
                    </span>
                  </div>

                  {/* Body Preview */}
                  <div className="relative mt-5 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] p-4 md:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-label text-[9px] uppercase tracking-[0.16em] text-[color:var(--bs-tone-accent)]">
                          Product core
                        </p>
                        <h3 className="font-subheading mt-1 text-xl text-[color:var(--bs-tone-text)]">
                          {flagshipCopy.visualTitle}
                        </h3>
                      </div>
                      <span className="flex size-9 items-center justify-center border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)]">
                        <ShieldCheck className="size-4 text-[color:var(--bs-tone-accent)]" />
                      </span>
                    </div>

                    {/* 4 Feature mini cards */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {[Building2, MapPin, MessageSquareText, Bell].map((Icon, index) => (
                        <div
                          key={index}
                          className="rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] p-2.5 transition hover:border-[color:var(--bs-tone-border)]"
                        >
                          <Icon className="size-3.5 text-[color:var(--bs-tone-muted)]" strokeWidth={1.5} />
                          <div className="mt-3 h-1.5 w-3/4 bg-[var(--bs-border-on-dark)]" />
                          <div className="mt-1.5 h-1.5 w-1/2 bg-[var(--bs-border-on-dark)]" />
                        </div>
                      ))}
                    </div>

                    {/* Sparkline chart */}
                    <div className="mt-3 h-20 overflow-hidden border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] p-3">
                      <svg viewBox="0 0 500 80" className="size-full" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="flagshipChartCol" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--bs-primary)" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="var(--bs-primary)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <polygon points="0,65 116,42 242,30 371,20 500,3 500,80 0,80" fill="url(#flagshipChartCol)" />
                        <polyline points="0,65 116,42 242,30 371,20 500,3" fill="none" stroke="var(--bs-accent)" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 4 Steps Breakdown */}
              <div className="mt-6 flex-1 border-t border-[color:var(--bs-tone-border)]">
                {[
                  [flagshipCopy.challenge, flagshipCopy.challengeText],
                  [flagshipCopy.solution, flagshipCopy.solutionText],
                  [flagshipCopy.product, flagshipCopy.layers],
                  [flagshipCopy.outcome, flagshipCopy.outcomeText],
                ].map(([label, content], index) => (
                  <Reveal key={String(label)} delay={index * 0.03}>
                    <div className="grid gap-2 border-b border-[color:var(--bs-tone-border)] py-4 sm:grid-cols-[120px_1fr]">
                      <p className="font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--bs-tone-accent)]">
                        0{index + 1} · {String(label)}
                      </p>
                      {Array.isArray(content) ? (
                        <div className="flex flex-wrap gap-1.5">
                          {content.map((item) => (
                            <span
                              key={item}
                              className="border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-2.5 py-1 text-xs text-[color:var(--bs-tone-muted)] transition hover:border-[color:var(--bs-tone-border)] hover:text-[color:var(--bs-tone-text)]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm leading-6 text-[color:var(--bs-tone-muted)]">{String(content)}</p>
                      )}
                    </div>
                  </Reveal>
                ))}
            </div>

            {/* Tam Finans CTA */}
            <Reveal className="mt-8">
              <Link
                href="/projeler/tam-finans-fintech"
                className="action-primary-on-dark group inline-flex w-full items-center justify-center sm:w-auto"
              >
                {flagshipCopy.detail}
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
            </div>
          </div>

          {/* ================= COLUMN 2: SEÇİLİ ÇALIŞMALAR (FURTHERUP DRIVE) ================= */}
          <div className="flex flex-col border-t border-[color:var(--bs-tone-border)] pt-10 lg:row-span-2 lg:grid lg:grid-rows-subgrid lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 xl:pl-16">
            <Reveal>
              <div className="max-w-xl">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--bs-tone-accent)]">
                  {workCopy.eyebrow}
                </p>
                <h2 className="font-display mt-4 text-3xl leading-[1.08] text-[color:var(--bs-tone-text)] md:text-4xl lg:text-[2.5rem]">
                  {workCopy.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--bs-tone-muted)]">
                  {workCopy.intro}
                </p>
              </div>
            </Reveal>

            <div>
              {/* Selected Work Project Card */}
              {mainProject && (
                <div className="mt-8 flex flex-col">
                  <Reveal delay={0.05} className="flex flex-col">
                    <article className="theme-light bs-card group flex flex-col overflow-hidden border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-card)] text-[color:var(--bs-tone-text)] shadow-[var(--bs-shadow-soft)] transition duration-500 hover:-translate-y-1 hover:border-[color:var(--bs-tone-accent)] hover:shadow-[var(--bs-shadow-soft)]">
                      {/* Project Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bs-tone-card)] md:min-h-[260px]">
                        <Image
                          src="/projects/furtherup-drive/further-up-1.png"
                          alt={`${mainProject.title} product interface`}
                          fill
                          sizes="(min-width:1024px) 45vw, 100vw"
                          className="object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-transparent opacity-80" />
                      </div>

                      {/* Project Info */}
                      <div className="flex flex-col p-6 md:p-7">
                        <div className="flex items-center justify-between gap-3 border-b border-[color:var(--bs-tone-border)] pb-4">
                          <span className="font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--bs-tone-accent)]">
                            01 · {mainProject.domain}
                          </span>
                          <ArrowUpRight className="size-4 text-[color:var(--bs-tone-muted)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--bs-tone-accent)]" />
                        </div>

                        <h3 className="font-subheading mt-5 text-2xl text-[color:var(--bs-tone-text)] md:text-3xl">
                          {mainProject.title}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-[color:var(--bs-tone-muted)]">
                          {mainProject.summary}
                        </p>

                        {/* Tech Pills */}
                        {mainProject.technologies && mainProject.technologies.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-1.5">
                            {mainProject.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--bs-tone-muted)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="mt-6">
                          <Link
                            href={`/projeler/${mainProject.slug}`}
                            className="inline-flex items-center gap-2 border-b border-[color:var(--bs-tone-border)] pb-1 font-label text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--bs-tone-text)] transition hover:border-[color:var(--bs-primary)] hover:text-[color:var(--bs-tone-accent)]"
                          >
                            {workCopy.viewCase}
                            <ArrowUpRight className="size-3.5 text-[color:var(--bs-tone-accent)]" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </div>
              )}

              {/* Selected Work Bottom CTA */}
              <Reveal className="mt-8">
                <Link
                  href="/projeler"
                  className="action-secondary group inline-flex w-full items-center justify-center sm:w-auto"
                >
                  {workCopy.viewAll}
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
