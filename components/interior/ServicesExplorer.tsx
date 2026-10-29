"use client";

import { useId, useRef, useState } from "react";
import { ServiceVisual } from "./ServiceVisual";
import styles from "./services-cards.module.css";

type ServiceItem = { title: string; summary: string; outcome: string; points: readonly string[] };

// Vertical tabs on desktop; below 700px every panel is shown in sequence and the tab list is hidden.
export function ServicesExplorer({ items, label }: { items: readonly ServiceItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const select = (index: number) => {
    setActive(index);
    tabs.current[index]?.focus();
  };

  return <div className={styles.explorer}>
    <div className={styles.tabs} role="tablist" aria-orientation="vertical" aria-label={label}
      onKeyDown={event => {
        const step = ["ArrowDown", "ArrowRight"].includes(event.key) ? 1 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 0;
        if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          select(event.key === "Home" ? 0 : items.length - 1);
        } else if (step) {
          event.preventDefault();
          select((active + step + items.length) % items.length);
        }
      }}>
      {items.map((service, index) => <button key={service.title} ref={element => { tabs.current[index] = element; }}
        type="button" role="tab" id={`${id}-tab-${index}`} aria-selected={index === active} aria-controls={`${id}-panel-${index}`}
        tabIndex={index === active ? 0 : -1} onClick={() => setActive(index)}>
        <span className={styles.tabNumber}>0{index + 1}</span>
        <span className={styles.tabTitle}>{service.title}</span>
      </button>)}
    </div>
    <div className={styles.panels}>{items.map((service, index) => <article key={service.title} className={styles.panel}
      role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} data-active={index === active}>
      <ServiceVisual index={index} />
      <div className={styles.panelBody}>
        <span className={styles.serviceNumber} aria-hidden="true">0{index + 1}</span>
        <h3>{service.title}</h3>
        <p className={styles.serviceSummary}>{service.summary}</p>
        <p className={styles.outcome}>{service.outcome}</p>
        <ul className={styles.servicePoints}>{service.points.map(point => <li key={point}>{point}</li>)}</ul>
      </div>
    </article>)}</div>
  </div>;
}
