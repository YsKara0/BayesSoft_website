import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/data/site";

export function ProjectsSection() {
  return (
    <section className="theme-section-primary relative px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Projeler" title="Problem, çözüm ve etki üzerinden okunan teknik işler.">
          Projeleri ekip ya da bireysel diye bölmeden; hangi problemi çözdüğünü, nasıl bir sistem
          kurulduğunu ve hangi etkiyi ürettiğini öne çıkarıyoruz.
        </SectionIntro>

        <div className="grid gap-px border border-bayes-ink bg-bayes-ink md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 0.03} className="h-full">
              <article className="group flex h-full min-h-[430px] flex-col bg-bayes-paper p-6 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper md:p-7">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="border border-current px-3 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                    {project.domain}
                  </span>
                  <span className="flex size-11 items-center justify-center border border-current">
                    {project.liveUrl ? (
                      <ExternalLink className="size-5" strokeWidth={1.5} />
                    ) : (
                      <Code2 className="size-5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>

                <h3 className="font-display text-3xl leading-tight">{project.title}</h3>

                <div className="mt-6 grid gap-5">
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver group-hover:text-bayes-aqua">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      Çözüm
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-silver group-hover:text-bayes-aqua">
                      {project.summary}
                    </p>
                  </div>
                  <div className="border-l-4 border-bayes-teal pl-4 group-hover:border-bayes-paper">
                    <p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-blue group-hover:text-bayes-mint">
                      Etki
                    </p>
                    <p className="mt-2 text-sm leading-7 text-bayes-deep group-hover:text-bayes-paper">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-current px-2.5 py-1 font-label text-[10px] uppercase tracking-[0.1em]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-2 pt-8">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex h-11 flex-1 items-center justify-center gap-2 border-2 border-current bg-bayes-ink px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-paper transition duration-100 group-hover:bg-bayes-paper group-hover:text-bayes-ink"
                    >
                      Live
                      <ArrowUpRight className="size-4 transition duration-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 border-2 border-current px-4 font-label text-xs font-semibold uppercase tracking-[0.12em] transition duration-100"
                    >
                      Source
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
