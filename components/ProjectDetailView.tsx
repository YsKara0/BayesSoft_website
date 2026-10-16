"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { localizeProject } from "@/data/projectTranslations";
import type { ProjectDetail } from "@/data/projectDetails";
import type { Project } from "@/data/site";
import { InteriorIntro } from "@/components/interior/InteriorIntro";
import styles from "@/components/interior/project-detail.module.css";

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
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
    setCurrentScreenshot(nextIndex);
  };

  const scrollScreenshots = (direction: -1 | 1) => {
    goToScreenshot(currentScreenshot + direction);
  };

  const monogram = view.title.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(word => word[0]).join("");

  return <main id="main-content" tabIndex={-1} className={styles.detail}>
    <Link href="/projeler" className={styles.back}><ArrowLeft size={17} aria-hidden="true" />{labels.back}</Link>
    <div className={styles.intro}><InteriorIntro eyebrow={view.domain} title={view.title}>{view.overview}</InteriorIntro></div>
    <section className={styles.profile} aria-labelledby="technologies-title">
      <span className={styles.mark} aria-hidden="true">{monogram}</span>
      <div><h2 id="technologies-title">{labels.technologies}</h2>
        <ul className={styles.technologies}>{view.techStack.map(technology => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </section>
    {isCompact && <p className={styles.notice}>{labels.compactNotice}</p>}
    {view.note && <section className={styles.privacy} aria-labelledby="privacy-title">
      <h2 id="privacy-title">{labels.privacy}</h2><p>{view.note}</p>
    </section>}
    {view.screenshots?.length ? <section id="screenshots" className={styles.screenshots} aria-labelledby="screenshots-title">
      <div className={styles.galleryHeading}>
        <h2 id="screenshots-title">{labels.screenshots}</h2>
        {view.screenshots.length > 1 && <div className={styles.galleryControls}>
          <button type="button" onClick={() => scrollScreenshots(-1)} disabled={currentScreenshot === 0} aria-label={labels.previousScreenshot}><ChevronLeft size={19} aria-hidden="true" /></button>
          <span className={styles.counter} role="status" aria-live="polite" aria-label={labels.screenshots}>{currentScreenshot + 1} / {view.screenshots.length}</span>
          <button type="button" onClick={() => scrollScreenshots(1)} disabled={currentScreenshot === view.screenshots.length - 1} aria-label={labels.nextScreenshot}><ChevronRight size={19} aria-hidden="true" /></button>
        </div>}
      </div>
      <div ref={screenshotsRef} className={styles.slider} role="group" tabIndex={0} aria-label={labels.screenshots}
        onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault(); scrollScreenshots(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        onScroll={event => {
          const slider = event.currentTarget;
          setCurrentScreenshot(Math.max(0, Math.min((view.screenshots?.length ?? 1) - 1, Math.round(slider.scrollLeft / (slider.clientWidth + 16)))));
        }}>
        {view.screenshots.map((src, index) => <div key={src} className={styles.slide}>
          <Image src={src} alt={`${view.title} ${index + 1}`} fill sizes="(max-width: 699px) calc(100vw - 48px), 90vw" />
        </div>)}
      </div>
      {view.screenshots.length > 1 && <div className={styles.pager}>
        {view.screenshots.map((src, index) => <button key={src} type="button" onClick={() => goToScreenshot(index)}
          aria-label={`${labels.screenshots} ${index + 1}`} aria-current={currentScreenshot === index ? "true" : undefined}>
          {String(index + 1).padStart(2, "0")}
        </button>)}
      </div>}
    </section> : null}
    <div className={styles.story}>
      <nav className={styles.outline} aria-label={view.title}>
        <a href="#problem">{labels.technicalProblem}</a>
        <a href="#solution">{labels.architecture}</a>
        <a href="#outcome">{labels.impact}</a>
        {view.screenshots?.length ? <a href="#screenshots">{labels.screenshots}</a> : null}
      </nav>
      <div className={styles.storyBody}>
        {[["problem", labels.technicalProblem, view.problem], ["solution", labels.architecture, view.solution]].map(([id, title, text]) => <section key={id} id={id} aria-labelledby={`${id}-title`}>
          <h2 id={`${id}-title`}>{title}</h2>
          <div className={styles.prose}>{text.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        </section>)}
        <section id="outcome" aria-labelledby="outcome-title">
          <h2 id="outcome-title">{labels.impact}</h2>
          {!view.keyFeatures.includes(localized.impact) && <p className={styles.impact}>{localized.impact}</p>}
          <h3>{labels.features}</h3>
          <ul className={styles.features}>{view.keyFeatures.map(feature => {
            const colon = feature.indexOf(":");
            return <li key={feature}>{colon > 0 ? <><strong>{feature.slice(0, colon + 1)}</strong>{feature.slice(colon + 1)}</> : feature}</li>;
          })}</ul>
        </section>
        {(liveUrl || sourceUrl) && <div className={styles.links}>
          {liveUrl && <a href={liveUrl} target="_blank" rel="noopener noreferrer">{labels.live}<ArrowUpRight size={18} aria-hidden="true" /></a>}
          {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{labels.source}<Code2 size={18} aria-hidden="true" /></a>}
        </div>}
      </div>
    </div>
  </main>;
}
