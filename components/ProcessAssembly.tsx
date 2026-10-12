"use client";

import { motion } from "framer-motion";
import type { translations } from "@/data/i18n";
import { desktopGeometry, mobileGeometry, moduleOrder, type ModuleId } from "./processAssemblyGeometry";
import styles from "./ProcessAssembly.module.css";
import { assemblyTarget, assemblyTransition } from "./processAssemblyMotion";
import { useAssemblyInteraction } from "./useAssemblyInteraction";

type ProcessCopy = (typeof translations)["tr"]["process"];

type ProcessAssemblyProps = { copy: ProcessCopy };

function Shape({ id, mobile = false }: { id: ModuleId; mobile?: boolean }) {
  const geometry = mobile ? mobileGeometry : desktopGeometry;
  const { width: w, height: h } = geometry;
  return (
    <svg className={mobile ? styles.mobileShape : styles.desktopShape} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <path data-outline={id} d={geometry.paths[id]} className={styles.outline} vectorEffect="non-scaling-stroke" />
      {id === "understand" && <g className={styles.marks} strokeLinecap="round"><path d={mobile ? "M 28 234 H 82 M 28 246 H 64" : "M 32 166 H 100 M 32 180 H 78"} /></g>}
      {id === "design" && <g className={styles.designMarks} strokeLinecap="round"><path d={mobile ? "M 404 26 H 466 M 404 39 H 444" : "M 664 24 H 758 M 664 38 H 714"} /></g>}
      {id === "build" && <g className={styles.interfaceHint}>
        <circle cx={mobile ? 186 : 228} cy={mobile ? 120 : 108} r="2.5" /><circle cx={mobile ? 197 : 239} cy={mobile ? 120 : 108} r="2.5" /><circle cx={mobile ? 208 : 250} cy={mobile ? 120 : 108} r="2.5" />
        <path d={mobile ? "M 226 120 H 442" : "M 268 108 H 746"} />
        <rect x={mobile ? 194 : 580} y={mobile ? 235 : 136} width={mobile ? 238 : 164} height="34" rx="7" />
        <path d={mobile ? "M 208 252 H 282 M 408 247 L 414 252 L 408 257" : "M 595 153 H 662 M 720 148 L 726 153 L 720 158"} />
      </g>}
      {id === "operate" && <><circle className={styles.statusDot} cx="32" cy={h - 29} r="3.5" /><path className={styles.operationMark} d={`M ${w - 76} ${h - 30} h 13 l 4 -6 l 6 12 l 4 -6 h 16`} /></>}
    </svg>
  );
}

export function ProcessAssembly({ copy }: ProcessAssemblyProps) {
  const interaction = useAssemblyInteraction();
  return (
    <figure className={styles.figure} aria-label={copy.assembly.description}>
      <div ref={interaction.hitboxRef} className={styles.hitbox} onPointerEnter={interaction.onPointerEnter} onPointerLeave={interaction.onPointerLeave}>
        <div className={styles.artifact} data-assembly-state={interaction.phase} data-interactive={interaction.interactive} aria-hidden="true">
          {moduleOrder.map((id, index) => {
            const content = <><Shape id={id} /><Shape id={id} mobile /><div className={styles.label}><span>0{index + 1}</span><strong>{copy.items[index].title}</strong></div></>;
            const className = `${styles.piece} ${styles[id]}`;
            return interaction.interactive ? (
              <motion.div
                key={id}
                className={className}
                data-module={id}
                initial={false}
                animate={assemblyTarget(id, interaction.phase, interaction.travelScale)}
                transition={assemblyTransition(interaction.phase, index)}
                onAnimationComplete={id === "operate" ? interaction.onLastPieceComplete : undefined}
              >{content}</motion.div>
            ) : <div key={id} className={className} data-module={id}>{content}</div>;
          })}
        </div>
      </div>
      <figcaption className={styles.disclosure}>{copy.assembly.disclosure}</figcaption>
    </figure>
  );
}
