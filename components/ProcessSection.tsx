"use client";

import { heroFont } from "@/components/heroFont";
import { useLanguage } from "@/components/LanguageProvider";
import { ProcessAssembly } from "@/components/ProcessAssembly";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  const { copy } = useLanguage();
  const process = copy.process;

  return (
    <section className={`${styles.section} ${heroFont.variable} theme-dark`} aria-labelledby="process-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{process.eyebrow}</p>
          <h2 id="process-title" className={styles.title}>{process.title}</h2>
        </header>
        <ProcessAssembly copy={process} />
        <ol className={styles.annotations}>
          {process.items.map((step, index) => (
            <li key={step.title}>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <div><h3>{step.title}</h3><p>{step.summary}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
