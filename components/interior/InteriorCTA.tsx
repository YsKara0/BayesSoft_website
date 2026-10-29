"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { contactHref, siteConfig } from "@/data/config";
import styles from "./interior.module.css";

// Mirrors the homepage contact band so every page closes the same way.
export function InteriorCTA() {
  const t = useLanguage().copy.homepage.text;
  return <section className={`${styles.cta} ${styles.band}`} aria-labelledby="cta-title">
    <h2 id="cta-title">{t.contactTitle}</h2>
    <div className={styles.ctaDetails}>
      <p>{t.contactBody}</p>
      <div className={styles.ctaLinks}>
        <Link className={styles.primaryButton} href="/iletisim">{t.cta}</Link>
        <a className={styles.textLink} href={contactHref}>{siteConfig.contactEmail}</a>
      </div>
    </div>
  </section>;
}
