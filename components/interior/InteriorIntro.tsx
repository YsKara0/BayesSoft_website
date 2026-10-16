import type { ReactNode } from "react";
import styles from "./interior.module.css";

export function InteriorIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className={styles.intro} aria-labelledby="interior-title">
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h1 id="interior-title">{title}</h1>
    <p className={styles.lead}>{children}</p>
  </section>;
}
