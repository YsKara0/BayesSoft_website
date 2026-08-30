"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject } from "@/data/projectTranslations";

export function ProjectsSection() {
  const { copy, locale } = useLanguage();
  const localizedProjects = projects.map((project) => localizeProject(project, locale));

  return (
    <section className="theme-section-primary relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.projects.eyebrow} title={copy.projects.title} align="left">
          {copy.projects.intro}
        </SectionIntro>

        <div className="border-t border-bayes-ink/15">
          {localizedProjects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="group grid gap-7 border-b border-bayes-ink/15 py-10 md:py-12 lg:grid-cols-[110px_.85fr_1.15fr] lg:gap-10">
                <div className="flex items-start justify-between lg:block">
                  <span className="font-display text-5xl leading-none text-bayes-ink/20">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-1 flex size-11 items-center justify-center rounded-full border border-bayes-ink/15 text-bayes-blue transition group-hover:border-bayes-teal group-hover:bg-bayes-aqua lg:mt-8">
                    {project.liveUrl ? (
                      <ExternalLink className="size-5" strokeWidth={1.5} />
                    ) : (
                      <Code2 className="size-5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-label text-[10px] font-semibold uppercase tracking-[.16em] text-bayes-blue">{project.domain}</span>
                  {project.hasDetailsPage ? <Link href={`/projeler/${project.slug}`}><h3 className="font-subheading mt-4 text-3xl leading-tight text-bayes-ink transition hover:text-bayes-blue md:text-4xl">{project.title}</h3></Link> : <h3 className="font-subheading mt-4 text-3xl leading-tight text-bayes-ink md:text-4xl">{project.title}</h3>}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => <span key={tech} className="rounded-full border border-bayes-ink/10 px-3 py-2 font-label text-[9px] uppercase tracking-[.1em] text-bayes-silver">{tech}</span>)}
                  </div>
                </div>

                <div className="grid gap-5 lg:border-l lg:border-bayes-ink/10 lg:pl-9">
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      {copy.projects.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      {copy.projects.solution}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver">
                      {project.summary}
                    </p>
                  </div>
                  <div className="border-l-2 border-bayes-teal pl-4">
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      {copy.projects.impact}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-deep">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:col-start-3 lg:pl-9">
                  {project.hasDetailsPage ? (
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-current px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-bayes-ink hover:text-bayes-paper group-hover:hover:bg-bayes-paper group-hover:hover:text-bayes-ink"
                    >
                      {copy.projects.details}
                      <ArrowUpRight className="size-4 transition duration-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-bayes-ink bg-bayes-ink px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:-translate-y-0.5 group-hover:border-bayes-teal group-hover:bg-bayes-teal group-hover:text-bayes-ink"
                    >
                      {copy.projects.live}
                      <ArrowUpRight className="size-4 transition duration-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-current px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] transition"
                    >
                      {copy.projects.source}
                      <Code2 className="size-4" strokeWidth={1.5} />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
