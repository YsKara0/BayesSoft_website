"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { InteriorCTA } from "@/components/interior/InteriorCTA";
import { useLanguage } from "@/components/LanguageProvider";
import { projects, type Project } from "@/data/site";
import { getSelectedProjects } from "@/data/selectedProjects";
import { localizeProject } from "@/data/projectTranslations";
import styles from "@/components/interior/projects.module.css";

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

export default function ProjectsPage() {
  const { copy, locale } = useLanguage();
  const page = copy.pages.projects;
  const selected = getSelectedProjects(locale);
  const featuredIds = new Set(selected.map(project => project.id as string));
  const remaining = projects.filter(project => !project.slug || !featuredIds.has(project.slug));

  return <main id="main-content" tabIndex={-1} className={styles.catalog}>
    <div className={styles.intro}><InteriorIntro eyebrow={page.eyebrow} title={page.title}>{page.body}</InteriorIntro></div>
    <section className={styles.featured} aria-labelledby="featured-projects-title">
      <div className={styles.heading}>
        <p>{copy.homepage.text.selected}</p>
        <h2 id="featured-projects-title">{copy.homepage.text.works}</h2>
      </div>
      <div className={styles.featuredGrid}>{selected.map((project, index) => {
        const source = projects.find(item => item.slug === project.id);
        const catalogProject = source ? localizeProject(source, locale) : null;
        const technologies = catalogProject?.technologies ?? project.technologyLabels;
        return <article className={styles.feature} key={project.id} data-project-id={project.id}>
          <picture className={styles.poster}>
            <source srcSet={`${project.posterSmallSrc} 640w, ${project.posterSrc} 1080w`} sizes="(max-width: 699px) calc(100vw - 48px), (max-width: 1099px) 44vw, 30vw" />
            <Image src={project.posterSrc} alt={project.name} width={1080} height={1457}
              priority={index === 0} sizes="(max-width: 699px) 90vw, 30vw" />
          </picture>
          <div className={styles.featureBody}>
            <p className={styles.category}>{project.category}</p>
            <h3>{project.name}</h3>
            <p className={styles.description}>{catalogProject?.summary ?? project.description}</p>
            {technologies.length > 0 && <ul className={styles.tags} aria-label={copy.projects.technologies}>{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>}
            <ProjectLinks name={project.name} detailHref={project.detailHref} liveHref={project.liveHref} sourceHref={catalogProject?.sourceUrl} />
            {catalogProject && <ProjectNotes project={catalogProject} />}
          </div>
        </article>;
      })}</div>
    </section>
    <section className={styles.collection} aria-labelledby="projects-title">
      <div className={styles.heading}>
        <p>{copy.projects.eyebrow}</p>
        <div><h2 id="projects-title">{copy.projects.title}</h2><p className={styles.sectionDescription}>{copy.projects.intro}</p></div>
      </div>
      <div className={styles.cardGrid}>{remaining.map(source => {
        const project = localizeProject(source, locale);
        const detailHref = project.hasDetailsPage && project.slug ? `/projeler/${project.slug}` : null;
        const monogram = project.title.split(/[\s-]+/).filter(Boolean).slice(0, 2).map(word => word[0]).join("");
        return <article className={styles.card} key={project.slug ?? project.title} data-project-id={project.slug}>
          <div className={styles.monogram} aria-hidden="true"><span>{monogram}</span><small>{project.technologies.slice(0, 2).join(" / ")}</small></div>
          <div className={styles.cardBody}>
            <p className={styles.category}>{project.domain}</p>
            <h3>{detailHref ? <Link href={detailHref}>{project.title}</Link> : project.title}</h3>
            <p className={styles.description}>{project.summary}</p>
            <ul className={styles.tags} aria-label={copy.projects.technologies}>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
            <ProjectLinks name={project.title} detailHref={detailHref} liveHref={project.liveUrl} sourceHref={project.sourceUrl} />
            <ProjectNotes project={project} />
          </div>
        </article>;
      })}</div>
    </section>
    <InteriorCTA />
  </main>;
}
