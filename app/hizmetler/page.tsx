"use client";

import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { InteriorCTA } from "@/components/interior/InteriorCTA";
import { ServicesExplorer } from "@/components/interior/ServicesExplorer";
import { SystemComposite } from "@/components/interior/ServiceVisual";
import { useLanguage } from "@/components/LanguageProvider";
import cards from "@/components/interior/services-cards.module.css";
import shared from "@/components/interior/interior.module.css";
import styles from "@/components/interior/pages.module.css";

export default function ServicesPage() {
  const { copy } = useLanguage();
  const page = copy.pages.services;
  return <main id="main-content" tabIndex={-1} className={styles.page}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title} visual={<SystemComposite />}>{page.body}</InteriorIntro>
    <section className={`${styles.section} ${shared.band}`} aria-labelledby="services-title">
      <div className={cards.servicesHeading}>
        <h2 id="services-title">{copy.services.title}</h2><p>{copy.services.intro}</p>
      </div>
      <ServicesExplorer items={copy.services.items} label={copy.services.eyebrow} />
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
