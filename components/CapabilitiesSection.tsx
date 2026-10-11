"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, Database, Waypoints } from "lucide-react";
import { heroFont } from "@/components/heroFont";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import type { Locale } from "@/data/i18n";
import styles from "./CapabilitiesSection.module.css";
import mobileConcept from "@/assets/demo/demo_phone.webp";

const visualCopy: Record<Locale, { webAlt: string; mobile: string; ai: string }> = {
  tr: { webAlt: "FurtherUp Drive web platformunun mevcut ekran görüntüsü", mobile: "Mobil deneyim · Konsept çalışması", ai: "AI ve otomasyon · Görsel alanı" },
  en: { webAlt: "Existing screenshot of the FurtherUp Drive web platform", mobile: "Mobile experience · Concept study", ai: "AI and automation · Visual placeholder" },
  de: { webAlt: "Vorhandener Screenshot der FurtherUp Drive Web-Plattform", mobile: "Mobiles Erlebnis · Konzeptstudie", ai: "KI und Automation · Bildplatzhalter" },
};

export function CapabilitiesSection() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].capabilities;
  const visuals = visualCopy[locale];

  return (
    <section id="capabilities" className={`${styles.section} ${heroFont.variable} theme-dark bs-section bs-home-section bg-[var(--bs-surface-dark)] text-[color:var(--bs-tone-text)]`}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 className={styles.title}>{copy.title}</h2>
          </div>
          <p className={styles.intro}>{copy.intro}</p>
        </header>

        <div className={styles.editorial}>
          {copy.pillars.map((pillar, index) => (
            <article key={pillar.title} className={`${styles.block} ${[styles.web, styles.mobile, styles.ai][index]}`}>
              <div className={styles.text}>
                <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                <h3 className={styles.blockTitle}>{pillar.title}</h3>
                <p className={styles.summary}>{pillar.summary}</p>
              </div>
              <figure className={styles.visual}>
                {index === 0 ? (
                  <>
                    <div className={styles.webImage}>
                      <Image src="/projects/furtherup-drive/further-up-1.png" alt={visuals.webAlt} fill sizes="(min-width: 1024px) 650px, (min-width: 768px) 85vw, 90vw" className={styles.screenshot} />
                    </div>
                    <figcaption>FurtherUp Drive</figcaption>
                  </>
                ) : index === 1 ? (
                  <>
                    <div className={styles.mobileCanvas}>
                      <Image
                        src={mobileConcept}
                        alt={visuals.mobile}
                        loading="lazy"
                        sizes="(min-width: 1024px) 540px, (min-width: 640px) 520px, 90vw"
                        className={styles.mobileConcept}
                      />
                    </div>
                    <figcaption>{visuals.mobile}</figcaption>
                  </>
                ) : (
                  <>
                    <div className={styles.aiCanvas} aria-hidden="true">
                      <span className={styles.connection} />
                      <span className={styles.dataNode}><Database strokeWidth={1.25} /></span>
                      <span className={styles.aiCore}><BrainCircuit strokeWidth={1} /></span>
                      <span className={styles.flowNode}><Waypoints strokeWidth={1.25} /></span>
                    </div>
                    <figcaption>{visuals.ai}</figcaption>
                  </>
                )}
              </figure>
            </article>
          ))}
        </div>

        <div className={styles.foundation}>
          <div>
            <p className={styles.eyebrow}>{copy.foundation}</p>
            <p className={styles.foundationDetail}>{copy.foundationDetail}</p>
          </div>
          <Link href="/hizmetler" className={styles.explore}>{copy.explore}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
