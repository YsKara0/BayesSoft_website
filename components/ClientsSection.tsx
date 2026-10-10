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
    <section className="overflow-hidden border-y border-white/10 bg-[#060A10] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="font-label text-xs font-semibold uppercase tracking-[.2em] text-bayes-blue">{copy.eyebrow}</p>
            <h2 className="font-display mt-5 max-w-3xl text-4xl leading-[1.04] text-white md:text-5xl">{copy.title}</h2>
          </Reveal>
          <Reveal delay={.05}>
            <p className="max-w-2xl text-lg leading-8 text-white/60 lg:ml-auto">{copy.intro}</p>
          </Reveal>
        </div>
      </div>

      <div className="reference-ticker mt-14 py-4">
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
                    className={`flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white p-5 shadow-sm md:h-28 md:w-60 ${reference.website ? "group transition duration-300 hover:-translate-y-1 hover:border-bayes-blue/50 hover:shadow-[0_12px_28px_rgba(0,102,255,0.25)]" : ""}`}
                  >
                    <div className="relative h-11 w-full transition duration-300 group-hover:scale-105">
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
