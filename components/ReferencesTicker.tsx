"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const references = [
  { name: "Arel Üniversitesi", src: "/references/arel.png" },
  { name: "Atlı Lojistik", src: "/references/atli.png" },
  { name: "Furtherup", src: "/references/further-up.png" },
  {
    name: "Kanuni Sultan Süleyman Eğitim ve Araştırma Hastanesi",
    src: "/references/kanuni_sultan_suleyman_hastanesi.png",
  },
  { name: "Metek Makina", src: "/references/metek.png" },
  { name: "Reviel", src: "/references/reviel.png" },
  { name: "Tam Finans", src: "/references/tamfinans.png" },
  { name: "Teşkilat ICOM", src: "/references/teskilat-icom.png", dark: true },
  { name: "Hypersense", src: "/references/hypersense.png" },
];

export function ReferencesTicker() {
  const { copy } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-bayes-ink py-16 md:py-20"
      aria-labelledby="references-title"
    >
      <div className="texture-inverted pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(0,196,182,0.14),transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-label text-xs font-semibold uppercase tracking-[0.24em] text-bayes-teal">
          {copy.references.eyebrow}
        </p>
        <h2
          id="references-title"
          className="font-display mt-4 max-w-3xl text-3xl leading-tight text-white md:text-4xl"
        >
          {copy.references.title}
        </h2>
      </div>

      <div
        className="reference-ticker relative mt-10"
        role="region"
        aria-label={copy.references.eyebrow}
      >
        <div className="reference-ticker-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="reference-ticker-group"
              aria-hidden={groupIndex === 1}
            >
              {references.map((reference) => (
                <div
                  key={`${groupIndex}-${reference.name}`}
                  className={`flex h-24 w-[210px] shrink-0 items-center justify-center rounded-2xl border p-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] md:h-28 md:w-[250px] md:p-5 ${
                    reference.dark
                      ? "border-white/20 bg-[#071424]"
                      : "border-white/70 bg-white/95"
                  }`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={reference.src}
                      alt={groupIndex === 0 ? reference.name : ""}
                      fill
                      sizes="250px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
