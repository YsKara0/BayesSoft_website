"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { type Locale, translations } from "@/data/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof translations)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    let saved: Locale | null = null;
    try { saved = window.localStorage.getItem("bayessoft-locale") as Locale | null; }
    catch { /* Browser preference remains available when storage is blocked. */ }
    const browser = window.navigator.language.slice(0, 2).toLowerCase() as Locale;
    const initial = saved && saved in translations ? saved : browser in translations ? browser : "tr";
    setLocaleState(initial);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try { window.localStorage.setItem("bayessoft-locale", nextLocale); }
    catch { /* In-memory language selection still works. */ }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, copy: translations[locale] }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
