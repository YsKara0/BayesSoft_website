"use client";
import { useLanguage } from "@/components/LanguageProvider";
export function useHomepageCopy() { return useLanguage().copy.homepage.text; }
