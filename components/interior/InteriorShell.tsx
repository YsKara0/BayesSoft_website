"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageMenu } from "@/components/LanguageMenu";
import { contactHref, siteConfig } from "@/data/config";
import { navigationLinks, navigationCurrent } from "@/data/navigation";
import { socialLinks } from "@/data/site";
import styles from "./interior.module.css";

const footerSocials = socialLinks.filter(link => ["GitHub", "LinkedIn", "X"].includes(link.label));

export function InteriorShell({ children }: { children: ReactNode }) {
  const { copy } = useLanguage();
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

  const navigation = navigationLinks.map(([key, href]) => (
    <Link key={key} href={href} aria-current={navigationCurrent(pathname, href)}>{key === "about" ? copy.nav.about : t[key]}</Link>
  ));

  return <div className={styles.shell}>
    <a className={styles.skip} href="#main-content">{t.skip}</a>
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label={t.homeLabel}>BayesSoft</Link>
      <div className={styles.desktop}>
        <nav className={styles.navigation} aria-label={t.navigation}>{navigation}</nav>
        <LanguageMenu />
        <a className={styles.button} href={contactHref}>{t.cta}</a>
      </div>
      <details className={styles.mobileMenu} ref={menu}>
        <summary>{t.menu}</summary>
        <nav aria-label={t.navigation} onClick={event => {
          if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false;
        }}>{navigation}<LanguageMenu inline /><a className={styles.button} href={contactHref}>{t.cta}</a></nav>
      </details>
    </header>
    {children}
    <footer className={styles.footer} aria-label={t.footer}>
      <div className={styles.footerBrand}>
        <Link className={styles.wordmark} href="/">BayesSoft</Link>
        <p>{t.footerBrand}</p>
        <a href={contactHref}>{siteConfig.contactEmail}</a>
      </div>
      <nav aria-label={t.footerSocial}><h2>{t.footerSocial}</h2>
        {footerSocials.map(link => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
          aria-label={`${link.label} — ${t.external}`}>{link.label} <span aria-hidden="true">↗</span></a>)}
      </nav>
      <p className={styles.copyright}>© {new Date().getFullYear()} BayesSoft. {t.rights}</p>
    </footer>
  </div>;
}
