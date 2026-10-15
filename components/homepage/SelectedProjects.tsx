"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getSelectedProjects } from "@/data/selectedProjects";
import { mountCylindricalGallery } from "@/lib/homepage/gallery/controller";
import { initialState } from "@/lib/homepage/gallery/state";
import { GalleryStage } from "./GalleryStage";
export function SelectedProjects() {
  const { locale, copy } = useLanguage();
  const t = copy.homepage.text;
  const projects = getSelectedProjects(locale);
  const [state, setState] = useState(initialState);
  const root = useRef<HTMLElement>(null);
  const project = projects[state.activeIndex];
  useEffect(() => { const controller = mountCylindricalGallery(root.current!, setState); return () => controller.destroy(); }, []);
  return <section className="cy-showcase homepage-section homepage-projects" id="selected-projects" ref={root} data-project-showcase data-phase="idle" data-active-index="0" aria-labelledby="selected-projects-title">
    <div className="cy-heading">
      <p className="cy-kicker">{t.selected}</p>
      <h2 id="selected-projects-title">{t.works}</h2>
      <Link className="homepage-link" href="/projeler">{t.allProjects}</Link>
    </div>
    <div className="cy-layout">
      <GalleryStage projects={projects} activeName={project.name} t={t} />
      <div className="cy-info" data-info aria-busy={state.phase === "transition"}>
        <div className="cy-navigation">
          <p className="cy-index">{String(state.activeIndex + 1).padStart(2, "0")} / 03</p>
          <div className="cy-controls" data-controls>{([-1, 1] as const).map(direction =>
            <button key={direction} type="button" data-direction={direction} aria-label={direction === -1 ? t.previous : t.next}>
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path d={direction === -1 ? "M19 12H5m6-6-6 6 6 6" : "M5 12h14m-6-6 6 6-6 6"} fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>)}</div>
        </div>
        <p className="cy-category">{project.category}</p>
        <h3 className="cy-project-name" data-name>{project.name}</h3>
        <p className="cy-technology">{project.technologyLabels.join(" / ")}</p>
        <p className="cy-description">{project.description}</p>{project.detailHref && <Link className="cy-detail" href={project.detailHref}>{t.detail}<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M5 19 19 5M5 5h14v14" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        </Link>}{project.liveHref && <a className={`homepage-live${project.detailHref ? "" : " homepage-live-only"}`} href={project.liveHref} target="_blank" rel="noopener noreferrer" aria-label={`${project.name}: ${t.live} — ${t.external}`}>{t.live} <span aria-hidden="true">↗</span>
        </a>}</div>
    </div>
    <p className="cy-sr-only" role="status" aria-live="polite" aria-atomic="true">{state.phase === "idle" && state.step !== 0 ? `${state.activeIndex + 1} / 3: ${project.name}. ${project.category}.` : ""}</p>
  </section>;
}
