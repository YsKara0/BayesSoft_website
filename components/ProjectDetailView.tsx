"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Code2, LockKeyhole } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject } from "@/data/projectTranslations";
import type { ProjectDetail } from "@/data/projectDetails";
import type { Project } from "@/data/site";

export function ProjectDetailView({ detail, project }: { detail: ProjectDetail; project: Project }) {
  const { copy, locale } = useLanguage();
  const screenshotsRef = useRef<HTMLDivElement>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const labels = copy.projects;
  const localized = localizeProject(project, locale);
  const isCompact = locale !== "tr";
  const view = isCompact
    ? { ...detail, domain: localized.domain, overview: localized.summary, problem: localized.problem, solution: `${localized.summary} ${localized.impact}`, keyFeatures: [localized.impact], note: undefined }
    : detail;
  const liveUrl = project.liveUrl || detail.liveUrl;
  const sourceUrl = project.sourceUrl || detail.sourceUrl;

  const goToScreenshot = (index: number) => {
    const slider = screenshotsRef.current;
    if (!slider || !view.screenshots) return;

    const nextIndex = Math.min(
      Math.max(index, 0),
      view.screenshots.length - 1
    );

    slider.scrollTo({
      left: nextIndex * (slider.clientWidth + 16),
      behavior: "smooth",
    });
    setCurrentScreenshot(nextIndex);
  };

  const scrollScreenshots = (direction: -1 | 1) => {
    goToScreenshot(currentScreenshot + direction);
  };

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
                <div className="relative mt-6">
                  <div
                    ref={screenshotsRef}
                    onScroll={(event) => {
                      const slider = event.currentTarget;
                      setCurrentScreenshot(Math.round(slider.scrollLeft / (slider.clientWidth + 16)));
                    }}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  >
                    {view.screenshots.map((src, index) => (
                      <div key={src} className="relative aspect-video w-full shrink-0 snap-center overflow-hidden rounded-xl border border-bayes-ink/10 bg-bayes-aqua">
                        <Image
                          src={src}
                          alt={`${view.title} ${index + 1}`}
                          fill
                          sizes="(min-width: 1280px) 800px, (min-width: 1024px) 60vw, 100vw"
                          className="object-contain transition duration-500 hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>

                  {view.screenshots.length > 1 ? (
                    <>
                      <div className="pointer-events-none absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between md:inset-x-4">
                        <button
                          type="button"
                          onClick={() => scrollScreenshots(-1)}
                          disabled={currentScreenshot === 0}
                          aria-label={labels.previousScreenshot}
                          className="pointer-events-auto flex size-9 items-center justify-center rounded-full border border-bayes-ink/10 bg-white/90 text-bayes-ink shadow-premium-sm backdrop-blur transition hover:bg-bayes-aqua disabled:opacity-0 md:size-11"
                        >
                          <ChevronLeft className="size-4" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollScreenshots(1)}
                          disabled={currentScreenshot === view.screenshots.length - 1}
                          aria-label={labels.nextScreenshot}
                          className="pointer-events-auto flex size-9 items-center justify-center rounded-full border border-bayes-ink/10 bg-white/90 text-bayes-ink shadow-premium-sm backdrop-blur transition hover:bg-bayes-aqua disabled:opacity-0 md:size-11"
                        >
                          <ChevronRight className="size-4" aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-center gap-2">
                        {view.screenshots.map((src, index) => (
                          <button
                            key={src}
                            type="button"
                            onClick={() => goToScreenshot(index)}
                            aria-label={`${labels.screenshots} ${index + 1}`}
                            aria-current={currentScreenshot === index ? "true" : undefined}
                            className={`h-2 rounded-full transition-all ${
                              currentScreenshot === index
                                ? "w-6 bg-bayes-teal"
                                : "w-2 bg-bayes-ink/20"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : null}
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
