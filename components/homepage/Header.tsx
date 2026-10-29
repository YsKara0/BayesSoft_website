"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { LanguageMenu } from "@/components/LanguageMenu";
import { contactHref } from "@/data/config";
import { navigationLinks, navigationCurrent } from "@/data/navigation";
import { useHomepageCopy } from "./useHomepageCopy";
export function NavigationLinks() {
  const t = useHomepageCopy();
  const { copy } = useLanguage();
  const pathname = usePathname();
  return <>{navigationLinks.map(([key, href]) => <Link key={href} href={href}
    aria-current={navigationCurrent(pathname, href)}>{key === "about" ? copy.nav.about : t[key]}</Link>)}</>;
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
      <Link className="wordmark" href="/" aria-label={t.homeLabel}>BayesSoft</Link>
      <div className="header-links">
        <nav className="desktop-nav" aria-label={t.navigation}>
          <NavigationLinks />
        </nav>
        <div className="header-actions">
          <LanguageMenu />{cta}</div>
      </div>
      <details className="mobile-nav" ref={menu}>
        <summary>{t.menu}</summary>
        <nav aria-label={t.navigation} onClick={e => { if ((e.target as HTMLElement).closest("a")) menu.current!.open = false; }}>
          <NavigationLinks />
          <LanguageMenu inline />{cta}</nav>
      </details>
    </header>
  </>;
}
