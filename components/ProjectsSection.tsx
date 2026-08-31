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
    <section className="relative border-b border-white/10 bg-[#060A10] px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow={copy.projects.eyebrow} title={copy.projects.title} align="left">
          {copy.projects.intro}
        </SectionIntro>

        <div className="border-t border-white/15">
          {localizedProjects.map((project, index) => (
            <Reveal key={project.title}>
              <article className="group grid gap-7 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.015] md:py-12 lg:grid-cols-[110px_.85fr_1.15fr] lg:gap-10">
                <div className="flex items-start justify-between lg:block">
                  <span className="font-display text-5xl leading-none text-white/20 transition group-hover:text-white">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-1 flex size-11 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white transition group-hover:border-white/40 group-hover:bg-white/10 lg:mt-8">
                    {project.liveUrl ? (
                      <ExternalLink className="size-5" strokeWidth={1.5} />
                    ) : (
                      <Code2 className="size-5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                <div>
                  <span className="font-label text-[10px] font-semibold uppercase tracking-[.16em] text-bayes-blue">{project.domain}</span>
                  {project.hasDetailsPage ? (
                    <Link href={`/projeler/${project.slug}`}>
                      <h3 className="font-subheading mt-4 text-3xl leading-tight text-white transition hover:text-bayes-blue md:text-4xl">{project.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="font-subheading mt-4 text-3xl leading-tight text-white md:text-4xl">{project.title}</h3>
                  )}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-none border border-white/15 bg-white/5 px-3 py-2 font-label text-[9px] uppercase tracking-[.1em] text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 lg:border-l lg:border-white/10 lg:pl-9">
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                      {copy.projects.problem}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                      {copy.projects.solution}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver">
                      {project.summary}
                    </p>
                  </div>
                  <div className="border-l-2 border-bayes-blue pl-4">
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue">
                      {copy.projects.impact}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/90">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 lg:col-start-3 lg:pl-9">
                  {project.hasDetailsPage ? (
                    <Link
                      href={`/projeler/${project.slug}`}
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-none border border-white/20 bg-white/5 px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-bayes-blue hover:bg-bayes-blue hover:text-white"
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
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-none border border-bayes-blue bg-bayes-blue px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition duration-200 hover:bg-blue-600 hover:shadow-blue-glow"
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
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-none border border-white/20 bg-transparent px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
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
