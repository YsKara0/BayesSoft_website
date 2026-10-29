import styles from "./services-cards.module.css";

// Text-free miniatures of the homepage system surfaces; decorative only.
export function ServiceVisual({ index }: { index: number }) {
  if (index === 0) return <div className={styles.visual} aria-hidden="true">
    <div className={styles.browser}>
      <div className={styles.browserBar}><i /><i /><i /></div>
      <div className={styles.browserBody}>
        <div className={styles.sideNav}><b className={styles.active} /><b /><b /></div>
        <div className={styles.records}><span className={styles.recordActive}><i /><b /></span><span><i /><b /></span><span><i /><b /></span></div>
      </div>
    </div>
  </div>;
  if (index === 1) return <div className={styles.visual} aria-hidden="true">
    <div className={styles.phone}>
      <div className={styles.phoneHeader}><b /><i /></div>
      <span className={styles.phoneRecord}><i /><b /></span>
      <div className={styles.phoneLines}><b /><b /></div>
      <span className={styles.phoneAction} />
    </div>
    <div className={`${styles.phone} ${styles.phoneBack}`} />
  </div>;
  if (index === 2) return <div className={styles.visual} aria-hidden="true">
    <div className={styles.flow}>
      <span className={styles.node}><b /><b /></span>
      <i className={styles.arrow} />
      <span className={`${styles.node} ${styles.gate}`}><b /></span>
      <i className={styles.arrow} />
      <span className={`${styles.node} ${styles.result}`}><b /><b /></span>
    </div>
  </div>;
  return <div className={styles.visual} aria-hidden="true">
    <div className={styles.stack}>
      {[0, 1, 2].map(layer => <span key={layer}><i /><b /><em /></span>)}
    </div>
  </div>;
}

// The four service miniatures arranged as one connected system for the Services hero.
export function SystemComposite() {
  return <div className={styles.composite}>
    {[0, 1, 2, 3].map(index => <div key={index} className={styles.compositeCell}><ServiceVisual index={index} /></div>)}
  </div>;
}
