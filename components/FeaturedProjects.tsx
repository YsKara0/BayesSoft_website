"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject } from "@/data/projectTranslations";

const featuredTitles = [
  "Tam Finans Multi-Platform Fintech System",
  "Smart Hospital System - Kanuni Sultan Süleyman Hospital",
  "AI-Powered Chatbot Platform"
];

export function FeaturedProjects() {
  const { copy, locale } = useLanguage();
  const featuredProjects = featuredTitles
    .map((title) => projects.find((project) => project.title === title))
    .filter(Boolean)
    .slice(0, 3)
    .map((project) => project ? localizeProject(project, locale) : project);

  return (
    <section className="theme-section-primary border-b border-bayes-ink/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.featured.eyebrow} title={copy.featured.title}>
          {copy.featured.intro}
        </SectionIntro>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) =>
            project ? (
              <article key={project.title} className="flex min-h-[360px] flex-col rounded-[1.5rem] border border-bayes-ink/10 bg-bayes-paper p-7 shadow-premium-sm transition duration-300 hover:-translate-y-1 hover:border-bayes-teal/40 hover:shadow-premium-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="border border-bayes-ink px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                    {project.domain}
                  </span>
                  <span className="font-display text-5xl leading-none text-bayes-ink/18">0{index + 1}</span>
                </div>
                {project.hasDetailsPage ? (
                  <Link href={`/projeler/${project.slug}`} className="hover:text-bayes-blue transition duration-100">
                    <h3 className="font-subheading mt-8 text-3xl leading-tight text-bayes-ink hover:underline">{project.title}</h3>
                  </Link>
                ) : (
                  <h3 className="font-subheading mt-8 text-3xl leading-tight text-bayes-ink">{project.title}</h3>
                )}
                <p className="mt-5 leading-8 text-bayes-silver">{project.summary}</p>
                <p className="mt-auto border-l-4 border-bayes-teal pl-4 pt-7 text-sm leading-7 text-bayes-deep">
                  {project.impact}
                </p>
              </article>
            ) : null
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projeler"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-bayes-ink px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-paper shadow-premium-sm transition hover:-translate-y-0.5 hover:bg-bayes-teal hover:text-bayes-ink"
          >
            {copy.featured.all}
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
