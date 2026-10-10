"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { clientReferences } from "@/data/references";

export function ClientsSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].clients;
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePageShow = () => {
      // Ensure focus is cleared and track is actively animating after browser back navigation
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      if (tickerRef.current) {
        tickerRef.current.style.animationPlayState = "running";
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handlePageShow);
    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handlePageShow);
    };
  }, []);

  return (
    <section className="theme-light bs-section overflow-hidden border-y border-[color:var(--bs-tone-border)] bg-[var(--bs-surface-alt)] py-10 text-[color:var(--bs-tone-text)] md:py-12">
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
        <div ref={tickerRef} className="reference-ticker-track">
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
                    className={`flex h-24 w-52 shrink-0 items-center justify-center rounded-[var(--bs-radius-panel)] border border-[color:var(--bs-tone-border)] bg-[var(--bs-surface)] p-4 shadow-sm md:h-28 md:w-60 ${reference.website ? "group transition duration-300 hover:-translate-y-1 hover:border-[color:var(--bs-primary)] hover:shadow-[var(--bs-shadow-soft)]" : ""}`}
                  >
                    <div data-logo={reference.src} className="reference-logo relative w-full transition duration-300 group-hover:scale-105">
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
