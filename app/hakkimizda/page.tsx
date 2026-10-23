"use client";

import Link from "next/link";
import { InteriorIntro } from "@/components/interior/InteriorIntro";
import { TeamProfiles } from "@/components/interior/TeamProfiles";
import { useLanguage } from "@/components/LanguageProvider";
import { contactHref } from "@/data/config";
import styles from "@/components/interior/interior.module.css";

export default function AboutPage() {
  const { copy } = useLanguage();
  const page = copy.pages.about;

  return <main id="main-content" tabIndex={-1}>
    <InteriorIntro eyebrow={page.eyebrow} title={page.title}>{page.body}</InteriorIntro>
    <section className={styles.approach} aria-labelledby="approach-title">
      <div className={styles.sectionHeading}>
        <p className={styles.eyebrow}>{page.approach}</p>
        <h2 id="approach-title">{page.approachTitle}</h2>
      </div>
      <div className={styles.principles}>{page.principles.map(principle => <article key={principle.title}>
        <h3>{principle.title}</h3><p>{principle.text}</p>
      </article>)}</div>
    </section>
    <TeamProfiles />
    <section className={styles.cta} aria-labelledby="cta-title">
      <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
      <h2 id="cta-title">{copy.cta.title}</h2><p>{copy.cta.body}</p>
      <div className={styles.ctaLinks}><Link className={styles.primaryButton} href="/iletisim">{copy.cta.page}</Link>
        <a className={styles.textLink} href={contactHref}>{copy.cta.mail}</a></div>
    </section>
  </main>;
}
