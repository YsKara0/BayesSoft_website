"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/components/LanguageProvider";
import { localeOptions, type Locale } from "@/data/i18n";
import styles from "./Header.module.css";

const navItems = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projeler" },
  { key: "services", href: "/hizmetler" },
  { key: "about", href: "/hakkimizda" },
] as const;

const localeFlagClasses: Record<Locale, string> = {
  tr: "fi fi-tr",
  en: "fi fi-gb",
  de: "fi fi-de",
};

function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = `language-options-${compact ? "mobile" : "desktop"}`;

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={`${styles.languageRoot} ${compact ? styles.languageCompact : ""}`}>
      <button
        type="button"
        role="combobox"
        aria-label={`${copy.language.label}: ${copy.language.names[locale]}`}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
        className={styles.languageButton}
      >
        <span aria-hidden="true" className={`${localeFlagClasses[locale]} language-flag`} />
        <ChevronDown className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className={styles.languageMenu}
          >
            <div id={menuId} role="listbox" aria-label={copy.language.label} className="grid gap-1">
              {localeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={locale === option}
                  onClick={() => chooseLocale(option)}
                  aria-label={copy.language.names[option]}
                  className={`${styles.languageOption} ${locale === option ? styles.languageSelected : ""}`}
                >
                  <span aria-hidden="true" className={`${localeFlagClasses[option]} language-flag`} />
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const { copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <motion.div className={styles.progress} style={{ scaleX }} />
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logo}><Logo variant="light" /></div>

        <div className={styles.desktopLinks}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
              >
                {copy.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className={styles.desktopActions}>
          <LanguageSwitch />
          <Link
            href="/iletisim"
            className={`group ${styles.contactButton}`}
          >
            {copy.nav.cta}
            <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button type="button" aria-label={copy.nav.menu} aria-expanded={open} onClick={() => setOpen((current) => !current)} aria-controls="site-mobile-menu" className={styles.menuButton}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} id="site-mobile-menu" className={styles.mobileMenu}>
            <div className={styles.mobileLinks}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`${styles.mobileLink} ${pathname === item.href ? styles.active : ""}`}
                >
                  {copy.nav[item.key]}
                </Link>
              ))}
              <LanguageSwitch compact />
              <Link
                href="/iletisim"
                className={styles.contactButton}
              >
                {copy.nav.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
