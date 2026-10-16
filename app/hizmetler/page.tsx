"use client";

import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { InteriorCTA } from "@/components/interior/InteriorCTA";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/components/interior/pages.module.css";

export default function ServicesPage() {
  const { copy } = useLanguage();
  const page = copy.pages.services;
  return <main id="main-content" tabIndex={-1} className={styles.page}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title}>{page.body}</InteriorIntro>
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>{copy.services.eyebrow}</p>
        <div><h2 id="services-title">{copy.services.title}</h2><p>{copy.services.intro}</p></div>
      </div>
      <div className={styles.serviceList}>{copy.services.items.map(service => <article key={service.title} className={styles.service}>
        <h3>{service.title}</h3>
        <div><p className={styles.serviceSummary}>{service.summary}</p>
          <p className={styles.outcome}>{service.outcome}</p>
          <ul className={styles.servicePoints}>{service.points.map(point => <li key={point}>{point}</li>)}</ul>
        </div>
      </article>)}</div>
    </section>
    <section className={styles.process} aria-labelledby="process-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>{copy.process.eyebrow}</p>
        <div><h2 id="process-title">{copy.process.title}</h2><p>{copy.process.intro}</p></div>
      </div>
      <ol className={styles.processSteps}>{copy.process.items.map((step, index) => <li key={step.title}>
        <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
        <h3>{step.title}</h3><p>{step.summary}</p>
      </li>)}</ol>
    </section>
    <InteriorCTA />
  </main>;
}
