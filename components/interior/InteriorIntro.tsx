import type { ReactNode } from "react";
import styles from "./interior.module.css";

// "split" is the default; "center" (About) and a side `visual` (Services) give pages their own first screen.
export function InteriorIntro({ eyebrow, title, children, variant = "split", visual }: {
  eyebrow: string; title: string; children: ReactNode; variant?: "split" | "center"; visual?: ReactNode;
}) {
  const layout = visual ? styles.introVisual : variant === "center" ? styles.introCenter : "";
  return <section className={`${styles.intro} ${layout}`} aria-labelledby="interior-title">
    <div className={styles.introText}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <div className={styles.introBody}>
        <h1 id="interior-title">{title}</h1>
        <p className={styles.lead}>{children}</p>
      </div>
    </div>
    {visual && <div className={styles.introArt} aria-hidden="true">{visual}</div>}
  </section>;
}
