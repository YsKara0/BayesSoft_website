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
    <section className="theme-dark bs-section relative border-b border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-bg)] px-5 py-20 text-[color:var(--bs-tone-text)] md:px-8 md:py-28">
      <div className="mx-auto max-w-[1216px]">
        <SectionIntro eyebrow={copy.projects.eyebrow} title={copy.projects.title} align="left">
          {copy.projects.intro}
        </SectionIntro>

        <div className="grid gap-5">
          {localizedProjects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="theme-light bs-card group grid gap-7 p-7 md:p-10 lg:grid-cols-[110px_.85fr_1.15fr] lg:gap-10">
                <div className="flex items-start justify-between lg:block">
                  <span className="font-display text-5xl leading-none text-[color:var(--bs-tone-muted)] transition group-hover:text-[color:var(--bs-tone-text)]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-1 flex size-11 items-center justify-center rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] text-[color:var(--bs-tone-text)] transition group-hover:border-[color:var(--bs-tone-border)] group-hover:bg-[var(--bs-tone-soft)] lg:mt-8">
                    {project.liveUrl ? (
                      <ExternalLink className="size-5" strokeWidth={1.5} />
                    ) : (
                      <Code2 className="size-5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-label text-[10px] font-semibold uppercase tracking-[.16em] text-[color:var(--bs-tone-accent)]">{project.domain}</span>
                  {project.hasDetailsPage ? (
                    <Link href={`/projeler/${project.slug}`}>
                      <h3 className="font-subheading mt-4 text-3xl leading-tight text-[color:var(--bs-tone-text)] transition hover:text-[color:var(--bs-tone-accent)] md:text-4xl">{project.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="font-subheading mt-4 text-3xl leading-tight text-[color:var(--bs-tone-text)] md:text-4xl">{project.title}</h3>
                  )}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-3 py-2 font-label text-[9px] uppercase tracking-[.1em] text-[color:var(--bs-tone-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 lg:border-l lg:border-[color:var(--bs-tone-border)] lg:pl-9">
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                      {copy.projects.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--bs-tone-muted)]">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                      {copy.projects.solution}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--bs-tone-muted)]">
                      {project.summary}
                    </p>
                  </div>
                  <div className="border-l-2 border-[color:var(--bs-primary)] pl-4">
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--bs-tone-accent)]">
                      {copy.projects.impact}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--bs-tone-muted)]">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:col-start-3 lg:pl-9">
                  {project.hasDetailsPage ? (
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-tone-soft)] px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--bs-tone-text)] transition hover:border-[color:var(--bs-primary)] hover:bg-[var(--bs-primary)] hover:text-white"
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
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-primary)] bg-[var(--bs-primary)] px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:bg-blue-600 hover:shadow-[var(--bs-shadow-soft)]"
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
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[var(--bs-radius-control)] border border-[color:var(--bs-tone-border)] bg-transparent px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--bs-tone-text)] transition hover:border-[color:var(--bs-tone-border)] hover:bg-[var(--bs-tone-soft)]"
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
