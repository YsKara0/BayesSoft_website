"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { contactHref } from "@/data/config";
import { useHomepageCopy } from "./useHomepageCopy";
export function NavigationLinks({ includeAbout = false }: { includeAbout?: boolean }) {
  const t = useHomepageCopy();
  const { copy } = useLanguage();
  const links = [
    [t.home, "#hero"], [t.projects, "#selected-projects"], [t.services, "#services"],
    ...(includeAbout ? [[copy.nav.about, "/hakkimizda"]] : []),
    [t.contact, "#contact"],
  ];
  return <>{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</>;
}
function Languages() {
  const { locale, setLocale } = useLanguage();
  const t = useHomepageCopy();
  return <div className="language-options" role="group" aria-label={t.language}>{(["tr", "en", "de"] as const).map(language => <button key={language} type="button" data-locale={language} lang={language} aria-pressed={locale === language} onClick={() => setLocale(language)}>{language.toUpperCase()}</button>)}</div>;
}
export function Header() {
  const t = useHomepageCopy();
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const abort = new AbortController();
    document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.current?.open) { menu.current.open = false; menu.current.querySelector("summary")?.focus(); } }, { signal: abort.signal });
    document.addEventListener("pointerdown", e => { if (menu.current?.open && !menu.current.contains(e.target as Node)) menu.current.open = false; }, { signal: abort.signal });
    return () => abort.abort();
  }, []);
  const cta = <a className="contact-action" href={contactHref}>{t.cta}</a>;
  return <>
    <a className="skip-link" href="#main-content">{t.skip}</a>
    <header className="prototype-header integrated-header homepage-header">
      <a className="wordmark" href="#hero" aria-label={t.homeLabel}>BayesSoft</a>
      <div className="header-links">
        <nav className="desktop-nav" aria-label={t.navigation}>
          <NavigationLinks includeAbout />
        </nav>
        <div className="header-actions">
          <Languages />{cta}</div>
      </div>
      <details className="mobile-nav" ref={menu}>
        <summary>{t.menu}</summary>
        <nav aria-label={t.navigation} onClick={e => { if ((e.target as HTMLElement).closest("a")) menu.current!.open = false; }}>
          <NavigationLinks includeAbout />
          <Languages />{cta}</nav>
      </details>
    </header>
  </>;
}
