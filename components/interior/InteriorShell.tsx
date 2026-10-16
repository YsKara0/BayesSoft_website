"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { contactHref, siteConfig } from "@/data/config";
import styles from "./interior.module.css";

const links = [
  ["home", "/"], ["projects", "/projeler"], ["services", "/hizmetler"],
  ["about", "/hakkimizda"], ["contact", "/iletisim"],
] as const;

export function InteriorShell({ children }: { children: ReactNode }) {
  const { copy, locale, setLocale } = useLanguage();
  const t = copy.homepage.text;
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu.current?.open) {
        menu.current.open = false;
        menu.current.querySelector("summary")?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (menu.current?.open && !menu.current.contains(event.target as Node)) menu.current.open = false;
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);

  const navigation = links.map(([key, href]) => (
    <Link key={key} href={href} aria-current={(pathname === href || pathname === `${href}.html`) ? "page" : undefined}>{copy.nav[key]}</Link>
  ));
  const languages = <div className={styles.languages} role="group" aria-label={copy.language.label}>
    {(["tr", "en", "de"] as const).map(language => <button type="button" key={language} lang={language}
      aria-label={copy.language.names[language]} aria-pressed={locale === language}
      onClick={() => setLocale(language)}>{language.toUpperCase()}</button>)}
  </div>;

  return <div className={styles.shell}>
    <a className={styles.skip} href="#main-content">{t.skip}</a>
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label={t.homeLabel}>BayesSoft</Link>
      <div className={styles.desktop}>
        <nav className={styles.navigation} aria-label={t.navigation}>{navigation}</nav>
        {languages}
        <a className={styles.button} href={contactHref}>{t.cta}</a>
      </div>
      <details className={styles.mobileMenu} ref={menu}>
        <summary>{t.menu}</summary>
        <nav aria-label={t.navigation} onClick={event => {
          if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false;
        }}>{navigation}{languages}<a className={styles.button} href={contactHref}>{t.cta}</a></nav>
      </details>
    </header>
    {children}
    <footer className={styles.footer} aria-label={t.footer}>
      <div className={styles.footerBrand}>
        <Link className={styles.wordmark} href="/">BayesSoft</Link>
        <p>{copy.footer.statement}</p>
        <a href={contactHref}>{siteConfig.contactEmail}</a>
      </div>
      <nav aria-label={t.navigation}><h2>{t.footerLinks}</h2>{navigation}</nav>
      <nav aria-label={t.footerSocial}><h2>{t.footerSocial}</h2>
        <a href={siteConfig.linkedinUrl} aria-label="BayesSoft LinkedIn">LinkedIn</a>
        <a href={siteConfig.siteUrl} aria-label="BayesSoft Website">Website</a>
      </nav>
      <p className={styles.copyright}>© {new Date().getFullYear()} BayesSoft. {copy.footer.rights}</p>
    </footer>
  </div>;
}
