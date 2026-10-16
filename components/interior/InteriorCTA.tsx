"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { contactHref } from "@/data/config";
import styles from "./interior.module.css";

export function InteriorCTA() {
  const { copy } = useLanguage();
  return <section className={styles.cta} aria-labelledby="cta-title">
    <p className={styles.eyebrow}>{copy.cta.eyebrow}</p>
    <h2 id="cta-title">{copy.cta.title}</h2><p>{copy.cta.body}</p>
    <div className={styles.ctaLinks}>
      <Link className={styles.primaryButton} href="/iletisim">{copy.cta.page}</Link>
      <a className={styles.textLink} href={contactHref}>{copy.cta.mail}</a>
    </div>
  </section>;
}
