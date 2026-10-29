"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./LanguageMenu.module.css";

const locales = ["tr", "en", "de"] as const;

// One globe button for the whole site; `inline` expands in place inside mobile menus.
export function LanguageMenu({ inline = false }: { inline?: boolean }) {
  const { copy, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    const element = root.current;
    if (!open || !element) return;
    const outside = (event: PointerEvent) => {
      if (!element.contains(event.target as Node)) setOpen(false);
    };
    // Native listener so Escape closes only this menu, not a surrounding mobile menu listening on document.
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", outside);
    element.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      element.removeEventListener("keydown", escape);
    };
  }, [open]);

  return <div ref={root} className={`${styles.menu}${inline ? ` ${styles.inline}` : ""}`}>
    <button ref={button} type="button" className={styles.trigger} aria-expanded={open} aria-controls={panelId}
      aria-label={`${copy.language.label}: ${copy.language.names[locale]}`} onClick={() => setOpen(value => !value)}>
      <Globe size={16} aria-hidden="true" />
      <span>{locale.toUpperCase()}</span>
      <ChevronDown size={14} aria-hidden="true" className={styles.chevron} />
    </button>
    <div id={panelId} className={styles.panel} role="group" aria-label={copy.language.label} hidden={!open}>
      {locales.map(language => <button key={language} type="button" lang={language} aria-pressed={locale === language}
        onClick={() => { setLocale(language); setOpen(false); button.current?.focus(); }}>
        <span>{copy.language.names[language]}</span>
        <small>{language.toUpperCase()}</small>
        {locale === language && <Check size={15} aria-hidden="true" />}
      </button>)}
    </div>
  </div>;
}
