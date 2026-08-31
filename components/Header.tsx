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
    <div ref={rootRef} className={`relative ${compact ? "w-full" : "w-16"}`}>
      <button
        type="button"
        role="combobox"
        aria-label={`${copy.language.label}: ${copy.language.names[locale]}`}
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((current) => !current)}
        className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-none border border-white/20 bg-white/5 px-2 text-white shadow-sm backdrop-blur-xl transition hover:border-bayes-blue hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-blue"
      >
        <span aria-hidden="true" className={`${localeFlagClasses[locale]} language-flag`} />
        <ChevronDown className={`size-3 shrink-0 text-white/50 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute inset-x-0 top-[calc(100%+0.45rem)] z-[70] overflow-hidden rounded-none border border-white/15 bg-[#080E17] p-1.5 shadow-premium-lg"
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
                  className={`flex min-h-10 items-center justify-center rounded-none px-2 transition ${locale === option ? "border border-bayes-blue/40 bg-bayes-blue/20 text-white" : "hover:bg-white/5"}`}
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#06090E]/90 shadow-premium-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <motion.div className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-bayes-blue shadow-[0_0_10px_#0066FF]" style={{ scaleX }} />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <Logo variant="light" />

        <div className="hidden items-center gap-1 rounded-none border border-white/15 bg-white/5 p-1.5 shadow-premium-sm backdrop-blur-xl lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`rounded-none px-4 py-2.5 font-label text-[10px] uppercase tracking-[0.14em] transition ${active ? "bg-bayes-blue text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}>
                {copy.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitch />
          <Link href="/iletisim" className="action-primary group min-h-10 gap-2 px-4 text-[10px]">
            {copy.nav.cta}
            <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button type="button" aria-label={copy.nav.menu} aria-expanded={open} onClick={() => setOpen((current) => !current)} className="flex size-11 items-center justify-center rounded-none border border-white/20 bg-white/5 text-white shadow-premium-sm backdrop-blur-xl lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="border-t border-white/10 bg-[#06090E]/95 px-5 pb-5 shadow-premium-lg backdrop-blur-2xl lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`rounded-none border px-4 py-3.5 font-label text-xs uppercase tracking-[0.14em] ${pathname === item.href ? "border-bayes-blue bg-bayes-blue text-white" : "border-white/10 bg-white/5 text-white/70"}`}>
                  {copy.nav[item.key]}
                </Link>
              ))}
              <LanguageSwitch compact />
              <Link href="/iletisim" className="action-primary mt-1 px-4 py-4 text-center tracking-[0.14em]">
                {copy.nav.cta}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
