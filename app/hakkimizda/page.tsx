"use client";

import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { TeamProfiles } from "@/components/interior/TeamProfiles";
import { InteriorCTA } from "@/components/interior/InteriorCTA";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/components/interior/interior.module.css";

export default function AboutPage() {
  const { copy } = useLanguage();
  const page = copy.pages.about;

  return <main id="main-content" tabIndex={-1}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title} variant="center">{page.body}</InteriorIntro>
    <TeamProfiles />
    <section className={styles.manifesto} aria-labelledby="approach-title">
      <div className={styles.manifestoHeading}>
        <p className={styles.eyebrow}>{page.approach}</p>
        <h2 id="approach-title">{page.approachTitle}</h2>
      </div>
      <ol className={styles.manifestoList}>{page.principles.map((principle, index) => <li key={principle.title}>
        <span className={styles.principleNumber} aria-hidden="true">0{index + 1}</span>
        <h3>{principle.title}</h3><p>{principle.text}</p>
      </li>)}</ol>
    </section>
    <InteriorCTA />
  </main>;
}
