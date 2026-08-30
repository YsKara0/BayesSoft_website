"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { clientReferences } from "@/data/references";

export function ClientsSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].clients;

  return (
    <section className="border-y border-white/10 bg-bayes-ink px-5 py-20 text-white md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <Reveal><p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-bayes-teal">{copy.eyebrow}</p><h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.04] md:text-5xl">{copy.title}</h2></Reveal>
          <Reveal delay={.05}><p className="max-w-2xl text-lg leading-8 text-white/55 lg:ml-auto">{copy.intro}</p></Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {clientReferences.map((reference) => {
            const content = <div className={`relative h-10 w-full transition ${reference.dark ? "brightness-0 invert" : ""}`}><Image src={reference.src} alt={reference.name} fill sizes="220px" className="object-contain" /></div>;
            const classes = `group flex min-h-28 items-center justify-center border-b border-r border-white/10 p-5 transition duration-300 md:min-h-32 ${reference.dark ? "bg-[#071424] hover:bg-bayes-deep" : "bg-white/95 hover:bg-bayes-aqua"}`;
            return reference.website ? <a key={reference.name} href={reference.website} target="_blank" rel="noopener noreferrer" className={classes} aria-label={reference.name}>{content}</a> : <div key={reference.name} className={classes}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
