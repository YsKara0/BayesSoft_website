"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { clientReferences } from "@/data/references";
import styles from "./ClientsSection.module.css";

export function ClientsSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].clients;

  return (
    <section className={`${styles.section} theme-light bs-section overflow-hidden border-y border-[color:var(--bs-tone-border)] py-10 text-[color:var(--bs-tone-text)] md:py-12`}>
      <div className="mx-auto max-w-[1216px] px-5 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-[color:var(--bs-tone-accent)]">{copy.eyebrow}</p>
            <h2 className="font-display mt-4 max-w-3xl text-3xl leading-[1.04] text-[color:var(--bs-tone-text)] md:text-4xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={.05}>
            <p className="max-w-2xl text-lg leading-8 text-[color:var(--bs-tone-muted)] lg:ml-auto">{copy.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="reference-ticker mt-6 py-3">
        <div className="reference-ticker-track">
          {[0, 1].map((groupIndex) => (
            <div key={groupIndex} className="reference-ticker-group" aria-hidden={groupIndex === 1}>
              {clientReferences.map((reference) => {
                const Card = reference.website ? "a" : "div";
                return (
                  <Card
                    key={`${reference.name}-${groupIndex}`}
                    href={reference.website}
                    target={reference.website ? "_blank" : undefined}
                    rel={reference.website ? "noopener noreferrer" : undefined}
                    aria-label={reference.name}
                    tabIndex={groupIndex === 1 ? -1 : reference.website ? undefined : 0}
                    className={`${styles.card} ${reference.website ? "group" : ""}`}
                  >
                    <div data-logo={reference.src} className={styles.logo}>
                      <Image
                        src={reference.src}
                        alt={reference.name}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                  </Card>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
