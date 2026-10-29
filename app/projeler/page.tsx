"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { InteriorCTA } from "@/components/interior/InteriorCTA";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, type Project } from "@/data/site";
import { getSelectedProjects } from "@/data/selectedProjects";
import { localizeProject } from "@/data/projectTranslations";
import { otherProjectsLabel, projectMeta } from "@/data/projectMeta";
import styles from "@/components/interior/projects.module.css";
import shared from "@/components/interior/interior.module.css";

function ProjectLinks({ name, detailHref, liveHref, sourceHref }: {
  name: string; detailHref?: string | null; liveHref?: string | null; sourceHref?: string;
}) {
  const { copy } = useLanguage();
  return <div className={styles.links}>
    {detailHref && <Link href={detailHref} aria-label={`${name}: ${copy.projects.details}`}>{copy.projects.details}<ArrowUpRight size={17} aria-hidden="true" /></Link>}
    {liveHref && <a href={liveHref} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${copy.projects.live}`}>{copy.projects.live}<ArrowUpRight size={17} aria-hidden="true" /></a>}
    {sourceHref && <a href={sourceHref} target="_blank" rel="noopener noreferrer" aria-label={`${name}: ${copy.projects.source}`}>{copy.projects.source}<ArrowUpRight size={17} aria-hidden="true" /></a>}
  </div>;
}

function ProjectNotes({ project }: { project: Project }) {
  const { copy } = useLanguage();
  return <details className={styles.notes}>
    <summary>{copy.projects.technicalProblem}<Plus size={16} aria-hidden="true" /></summary>
    <dl>{[[copy.projects.problem, project.problem], [copy.projects.impact, project.impact]].map(([label, text]) => <div key={label}>
      <dt>{label}</dt><dd>{text}</dd>
    </div>)}</dl>
  </details>;
}

function ProjectRow({ source, marker }: { source: Project; marker: ReactNode }) {
  const { locale } = useLanguage();
  const project = localizeProject(source, locale);
  const detailHref = project.hasDetailsPage && project.slug ? `/projeler/${project.slug}` : null;
  const kind = project.slug ? projectMeta[project.slug]?.kind[locale] : undefined;
  return <li className={styles.row} data-project-id={project.slug}>
    {marker}
    <div className={styles.rowTitle}>
      <h3>{detailHref ? <Link href={detailHref}>{project.title}</Link> : project.title}</h3>
    </div>
    <div className={styles.rowBody}>
      <p className={styles.description}>{project.summary}</p>
      {kind && <p className={styles.kind}>{kind}</p>}
      {!detailHref && <ProjectNotes project={project} />}
    </div>
    <ProjectLinks name={project.title} detailHref={detailHref} liveHref={project.liveUrl} sourceHref={project.sourceUrl} />
  </li>;
}

export default function ProjectsPage() {
  const { copy, locale } = useLanguage();
  const page = copy.pages.projects;
  const selected = getSelectedProjects(locale);
  const featuredIds = new Set(selected.map(project => project.id as string));
  const remaining = projects.filter(project => !project.slug || !featuredIds.has(project.slug));
  const logoOf = (project: Project) => project.slug ? projectMeta[project.slug]?.logo : undefined;
  const branded = remaining.filter(project => logoOf(project));
  const others = remaining.filter(project => !logoOf(project));

  return <main id="main-content" tabIndex={-1} className={styles.catalog}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title}>{page.body}</InteriorIntro>
    <section className={`${styles.featured} ${shared.band}`} aria-labelledby="featured-projects-title">
      <div className={styles.heading}>
        <p>{copy.homepage.text.selected}</p>
        <h2 id="featured-projects-title">{copy.homepage.text.works}</h2>
      </div>
      <div className={styles.featuredGrid}>{selected.map((project, index) => {
        const source = projects.find(item => item.slug === project.id);
        const catalogProject = source ? localizeProject(source, locale) : null;
        const kind = projectMeta[project.id]?.kind[locale];
        return <article className={styles.feature} key={project.id} data-project-id={project.id}>
          <picture className={styles.poster}>
            <source srcSet={`${project.posterSmallSrc} 640w, ${project.posterSrc} 1080w`} sizes="(max-width: 699px) calc(100vw - 48px), (max-width: 1099px) 44vw, 30vw" />
            <Image src={project.posterSrc} alt={project.name} width={1080} height={1457}
              priority={index === 0} sizes="(max-width: 699px) 90vw, 30vw" />
          </picture>
          <div className={styles.featureBody}>
            <h3>{project.detailHref ? <Link href={project.detailHref}>{project.name}</Link> : project.name}</h3>
            <p className={styles.description}>{catalogProject?.summary ?? project.description}</p>
            {kind && <p className={styles.kind}>{kind}</p>}
            <ProjectLinks name={project.name} detailHref={project.detailHref} liveHref={project.liveHref} sourceHref={catalogProject?.sourceUrl} />
          </div>
        </article>;
      })}</div>
    </section>
    <section className={styles.collection} aria-labelledby="projects-title">
      <div className={styles.heading}>
        <p>{copy.projects.eyebrow}</p>
        <div><h2 id="projects-title">{copy.projects.title}</h2><p className={styles.sectionDescription}>{copy.projects.intro}</p></div>
      </div>
      <ol className={styles.rows}>{branded.map(source => <ProjectRow key={source.slug ?? source.title} source={source}
        marker={<span className={`${styles.logo}${source.slug && projectMeta[source.slug]?.logoDark ? ` ${styles.logoDark}` : ""}`}><Image src={logoOf(source)!} alt="" width={140} height={56} sizes="140px" /></span>} />)}</ol>
      {others.length > 0 && <>
        <h3 className={styles.groupTitle} id="other-projects-title">{otherProjectsLabel[locale]}</h3>
        <ol className={styles.rows} aria-labelledby="other-projects-title">{others.map((source, index) => <ProjectRow key={source.slug ?? source.title} source={source}
          marker={<span className={styles.index} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>} />)}</ol>
      </>}
    </section>
    <InteriorCTA />
  </main>;
}
