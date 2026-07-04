"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/site";

type Filter = "team" | "individual";

const filters: { label: string; value: Filter }[] = [
  { label: "Team Projects", value: "team" },
  { label: "Individual Projects", value: "individual" }
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("team");
  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="theme-section-secondary relative px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Portfolio" title="Systems with a polished surface and a serious core.">
          Explore collaborative BayesSoft builds and standout individual projects from the
          people behind the team.
        </SectionIntro>

        <div className="mb-8 flex justify-center">
          <div className="grid w-full max-w-xl grid-cols-2 rounded-md border border-white/10 bg-white/[0.04] p-1">
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => setFilter(item.value)}
                className={`relative min-h-11 rounded-md px-3 text-sm font-semibold transition ${
                  filter === item.value ? "text-bayes-ink" : "text-bayes-silver/72 hover:text-bayes-frost"
                }`}
              >
                {filter === item.value ? (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-md bg-bayes-frost"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -18 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="group flex min-h-[380px] flex-col rounded-md border border-white/10 bg-white/[0.045] p-6 shadow-premium-sm transition hover:border-bayes-teal/35 hover:bg-white/[0.065]"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                      project.category === "team"
                        ? "bg-bayes-blue/28 text-bayes-teal"
                        : "bg-bayes-gold/16 text-bayes-gold"
                    }`}
                  >
                    {project.category === "team" ? "Team Project" : project.owner}
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-md border border-white/10 bg-black/10 text-bayes-silver/72 transition group-hover:border-bayes-teal/35 group-hover:text-bayes-frost">
                    {project.category === "team" ? (
                      <ExternalLink className="size-5" />
                    ) : (
                      <Code2 className="size-5" />
                    )}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-bayes-frost">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-bayes-silver/70">{project.summary}</p>
                <p className="mt-4 border-l border-bayes-teal/35 pl-4 text-sm leading-7 text-bayes-silver/58">
                  {project.impact}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-black/12 px-2.5 py-1 text-xs text-bayes-silver/70"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 pt-8">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-bayes-frost px-4 text-sm font-semibold text-bayes-ink transition hover:bg-white"
                    >
                      Live
                      <ArrowUpRight className="size-4 transition group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm font-semibold text-bayes-frost transition hover:border-bayes-teal/40 hover:bg-white/[0.07]"
                    >
                      Source
                      <Code2 className="size-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
