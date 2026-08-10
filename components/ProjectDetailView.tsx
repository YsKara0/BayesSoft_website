"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, LockKeyhole } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject } from "@/data/projectTranslations";
import type { ProjectDetail } from "@/data/projectDetails";
import type { Project } from "@/data/site";

export function ProjectDetailView({ detail, project }: { detail: ProjectDetail; project: Project }) {
  const { copy, locale } = useLanguage();
  const labels = copy.projects;
  const localized = localizeProject(project, locale);
  const isCompact = locale !== "tr";
  const view = isCompact
    ? { ...detail, domain: localized.domain, overview: localized.summary, problem: localized.problem, solution: `${localized.summary} ${localized.impact}`, keyFeatures: [localized.impact], note: undefined }
    : detail;
  const liveUrl = project.liveUrl || detail.liveUrl;
  const sourceUrl = project.sourceUrl || detail.sourceUrl;

  return (
    <main className="min-h-screen bg-bayes-frost pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link href="/projeler" className="group inline-flex items-center gap-2 rounded-xl border border-bayes-ink/10 bg-white px-4 py-3 font-label text-[10px] uppercase tracking-[0.12em] text-bayes-ink shadow-premium-sm transition hover:border-bayes-teal hover:text-bayes-blue">
          <ArrowLeft className="size-4 transition group-hover:-translate-x-1" /> {labels.back}
        </Link>

        <header className="relative mt-8 overflow-hidden rounded-[2rem] bg-bayes-ink px-6 py-12 text-white shadow-premium-lg md:px-12 md:py-16">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-bayes-teal/20 blur-3xl" />
          <span className="relative inline-flex rounded-full border border-bayes-teal/35 bg-bayes-teal/10 px-4 py-2 font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-mint">{view.domain}</span>
          <h1 className="font-display relative mt-7 max-w-5xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">{view.title}</h1>
          <p className="relative mt-7 max-w-3xl text-lg leading-8 text-white/65 md:text-xl">{view.overview}</p>
        </header>

        {isCompact ? <div className="mt-6 flex items-start gap-3 rounded-2xl border border-bayes-teal/25 bg-bayes-aqua p-5 text-sm leading-7 text-bayes-deep"><LockKeyhole className="mt-1 size-4 shrink-0 text-bayes-blue" />{labels.compactNotice}</div> : null}
        {view.note ? <div className="mt-6 rounded-2xl border border-bayes-coral/30 bg-bayes-coral/10 p-6"><p className="font-label text-[10px] font-semibold uppercase tracking-[0.14em] text-bayes-coral">{labels.privacy}</p><p className="mt-3 text-sm leading-7 text-bayes-ink">{view.note}</p></div> : null}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            {[[labels.technicalProblem, view.problem], [labels.architecture, view.solution]].map(([title, text]) => (
              <section key={title} className="rounded-[1.5rem] border border-bayes-ink/10 bg-white p-6 shadow-premium-sm md:p-9">
                <h2 className="font-display text-2xl text-bayes-ink md:text-3xl">{title}</h2>
                <p className="mt-5 whitespace-pre-line text-base leading-8 text-bayes-silver md:text-lg">{text}</p>
              </section>
            ))}

            {view.screenshots?.length ? (
              <section className="rounded-[1.5rem] border border-bayes-ink/10 bg-white p-6 shadow-premium-sm md:p-9">
                <h2 className="font-display text-2xl text-bayes-ink md:text-3xl">{labels.screenshots}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {view.screenshots.map((src, index) => <div key={src} className="relative h-64 overflow-hidden rounded-xl bg-bayes-aqua"><Image src={src} alt={`${view.title} ${index + 1}`} fill className="object-cover transition duration-500 hover:scale-105" /></div>)}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <section className="rounded-[1.5rem] bg-bayes-ink p-6 text-white shadow-premium-lg">
              <h2 className="font-subheading text-xl text-bayes-teal">{labels.features}</h2>
              <ul className="mt-5 space-y-4">
                {view.keyFeatures.map((feature) => <li key={feature} className="border-l-2 border-bayes-coral pl-4 text-sm leading-7 text-white/70">{feature}</li>)}
              </ul>
            </section>

            <section className="rounded-[1.5rem] border border-bayes-ink/10 bg-white p-6 shadow-premium-sm">
              <h2 className="font-subheading text-xl text-bayes-ink">{labels.technologies}</h2>
              <div className="mt-5 flex flex-wrap gap-2">{view.techStack.map((tech) => <span key={tech} className="rounded-lg bg-bayes-aqua px-3 py-2 font-label text-[10px] uppercase tracking-[0.08em] text-bayes-deep">{tech}</span>)}</div>
            </section>

            {(liveUrl || sourceUrl) ? <div className="grid gap-3">
              {liveUrl ? <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-bayes-coral px-5 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-bayes-ink">{labels.live}<ArrowUpRight className="size-4" /></a> : null}
              {sourceUrl ? <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-bayes-ink/15 bg-white px-5 font-label text-xs font-semibold uppercase tracking-[0.12em] text-bayes-ink transition hover:border-bayes-teal hover:bg-bayes-aqua">{labels.source}<Code2 className="size-4" /></a> : null}
            </div> : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
