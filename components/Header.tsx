"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/components/LanguageProvider";
import { localeOptions, type Locale } from "@/data/i18n";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/hakkimizda" },
  { key: "services", href: "/hizmetler" },
  { key: "projects", href: "/projeler" },
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
    <div ref={rootRef} className={`relative ${compact ? "w-full" : "w-16"}`}>
      <button
        type="button"
        role="combobox"
        aria-label={`${copy.language.label}: ${copy.language.names[locale]}`}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-xl border border-white/25 bg-white/70 px-2 text-bayes-ink shadow-sm backdrop-blur-xl transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-teal"
      >
        <span aria-hidden="true" className={`${localeFlagClasses[locale]} language-flag`} />
        <ChevronDown className={`size-3 shrink-0 text-bayes-silver transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-[calc(100%+0.45rem)] z-[70] overflow-hidden rounded-xl border border-bayes-ink/10 bg-white p-1.5 shadow-premium-lg"
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
                  className={`flex min-h-10 items-center justify-center rounded-lg px-2 transition ${locale === option ? "bg-bayes-aqua ring-1 ring-inset ring-bayes-teal/20" : "hover:bg-bayes-frost"}`}
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "theme-header-scrolled border-b border-bayes-ink/10 shadow-premium-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <motion.div className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-bayes-teal" style={{ scaleX }} />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <Logo variant={pathname === "/" && !scrolled ? "light" : "dark"} />

        <div className="hidden items-center gap-1 rounded-2xl border border-white/25 bg-white/60 p-1.5 shadow-premium-sm backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`rounded-xl px-3.5 py-2.5 font-label text-[10px] uppercase tracking-[0.12em] transition ${active ? "bg-bayes-aqua text-bayes-ink" : "text-bayes-silver hover:bg-bayes-frost hover:text-bayes-ink"}`}>
                {copy.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch />
          <Link href="/iletisim" className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-bayes-coral px-4 font-label text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-premium-sm transition hover:-translate-y-0.5 hover:bg-bayes-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-coral">
            {copy.nav.cta}
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button type="button" aria-label={copy.nav.menu} aria-expanded={open} onClick={() => setOpen((current) => !current)} className="flex size-11 items-center justify-center rounded-xl border border-white/25 bg-white/70 text-bayes-ink shadow-premium-sm backdrop-blur-xl lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="theme-mobile-menu border-t border-bayes-ink/10 px-5 pb-5 shadow-premium-lg backdrop-blur-xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`rounded-xl border px-4 py-3.5 font-label text-xs uppercase tracking-[0.14em] ${pathname === item.href ? "border-bayes-teal bg-bayes-aqua text-bayes-ink" : "border-bayes-ink/10 bg-white text-bayes-silver"}`}>
                  {copy.nav[item.key]}
                </Link>
              ))}
              <LanguageSwitch compact />
              <Link href="/iletisim" className="mt-1 rounded-xl bg-bayes-coral px-4 py-4 text-center font-label text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {copy.nav.cta}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
