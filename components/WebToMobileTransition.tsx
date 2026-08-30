"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/data/i18n";
import styles from "./WebToMobileTransition.module.css";

const storyCopy: Record<Locale, {
  webEyebrow: string;
  webTitle: string;
  webBody: string;
  mobileEyebrow: string;
  mobileTitle: string;
  mobileBody: string;
  aiEyebrow: string;
  aiTitle: string;
  aiBody: string;
  scroll: string;
  progress: string;
  appKicker: string;
  appTitle: string;
}> = {
  tr: {
    webEyebrow: "Web deneyimi",
    webTitle: "İşiniz. Web ile bağlantılı.",
    webBody: "Müşteri portalı, operasyon paneli ve web platformu aynı iş akışını görünür ve yönetilebilir hale getirir.",
    mobileEyebrow: "Mobil ürün",
    mobileTitle: "Aynı ürün. Müşterilerinizin elinde.",
    mobileBody: "Web’de çalışan ürün çekirdeği, aynı veri ve servislerle akıcı bir mobil deneyime dönüşür.",
    aiEyebrow: "Akıllı katman",
    aiTitle: "Ve yapay zekâ ile daha akıllı.",
    aiBody: "Otomasyonlar ve AI katmanları web ile mobili ayrı ürünler değil, öğrenen tek bir ekosistem haline getirir.",
    scroll: "Dönüşümü keşfet",
    progress: "Web → Mobil → AI",
    appKicker: "Canlı sistem",
    appTitle: "Her an, her yerde.",
  },
  en: {
    webEyebrow: "Web experience",
    webTitle: "Your business. Connected to the web.",
    webBody: "A customer portal, operations dashboard and web platform make the same business flow visible and manageable.",
    mobileEyebrow: "Mobile product",
    mobileTitle: "The same product. In your customers’ hands.",
    mobileBody: "The product core that runs on the web becomes a fluid mobile experience using the same data and services.",
    aiEyebrow: "Intelligence layer",
    aiTitle: "And smarter with AI.",
    aiBody: "Automation and AI connect web and mobile into one product ecosystem that learns, assists and evolves.",
    scroll: "Explore the transition",
    progress: "Web → Mobile → AI",
    appKicker: "Live system",
    appTitle: "Ready everywhere.",
  },
  de: {
    webEyebrow: "Web-Erlebnis",
    webTitle: "Ihr Unternehmen. Mit dem Web verbunden.",
    webBody: "Kundenportal, Operations-Dashboard und Web-Plattform machen denselben Geschäftsablauf sichtbar und steuerbar.",
    mobileEyebrow: "Mobiles Produkt",
    mobileTitle: "Dasselbe Produkt. In den Händen Ihrer Kunden.",
    mobileBody: "Der Produktkern aus dem Web wird mit denselben Daten und Services zu einem flüssigen mobilen Erlebnis.",
    aiEyebrow: "Intelligente Ebene",
    aiTitle: "Und intelligenter mit KI.",
    aiBody: "Automation und KI verbinden Web und Mobile zu einem lernenden, unterstützenden Produktökosystem.",
    scroll: "Transformation entdecken",
    progress: "Web → Mobil → KI",
    appKicker: "Live-System",
    appTitle: "Überall bereit.",
  },
};

function DigitalGlobe() {
  return (
    <>
      <span className={styles.orbit} />
      <span className={styles.orbitSecondary} />
      <div className={styles.globeShell}>
        <svg className={styles.globeSvg} viewBox="0 0 300 300" aria-hidden="true">
          <circle className={styles.gridLine} cx="150" cy="150" r="105" />
          <ellipse className={styles.gridLine} cx="150" cy="150" rx="58" ry="105" />
          <ellipse className={styles.gridLine} cx="150" cy="150" rx="19" ry="105" />
          <ellipse className={styles.gridLine} cx="150" cy="150" rx="105" ry="39" />
          <ellipse className={styles.gridLine} cx="150" cy="150" rx="101" ry="74" />
          <path className={styles.networkLine} d="M63 135 92 92l49 18 38-43 48 51-19 65-54 43-63-29-28-62Z" />
          <path className={styles.networkLine} d="m92 92 62 134m25-159-38 43 67 73M63 135l78-25 13 116m73-108-86-8" />
          <circle className={styles.networkDot} cx="63" cy="135" r="3" />
          <circle className={styles.networkDot} cx="92" cy="92" r="4" />
          <circle className={styles.networkDotAccent} cx="141" cy="110" r="5" />
          <circle className={styles.networkDot} cx="179" cy="67" r="3" />
          <circle className={styles.networkDot} cx="227" cy="118" r="4" />
          <circle className={styles.networkDot} cx="208" cy="183" r="3" />
          <circle className={styles.networkDot} cx="154" cy="226" r="4" />
          <circle className={styles.networkDot} cx="91" cy="197" r="3" />
        </svg>
        <span className={styles.core} />
      </div>
    </>
  );
}

function PhoneVisual({
  appKicker,
  appTitle,
  globeStyle,
  uiStyle,
}: {
  appKicker: string;
  appTitle: string;
  globeStyle?: React.ComponentProps<typeof motion.div>["style"];
  uiStyle?: React.ComponentProps<typeof motion.div>["style"];
}) {
  return (
    <div className={styles.phone}>
      <div className={styles.screen}>
        <div className={styles.screenGrid} />
        <div className={styles.statusBar}><span>09:41</span><span>● 5G</span></div>
        <motion.div className={styles.screenGlobe} style={globeStyle} />
        <motion.div className={styles.appUi} style={uiStyle}>
          <div className={styles.appKicker}>{appKicker}</div>
          <div className={styles.appTitle}>{appTitle}</div>
          <div className={styles.appHero}>
            <svg className={styles.appHeroLine} viewBox="0 0 180 50" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 43 C24 35 28 15 54 26 S92 45 112 19 148 20 180 3" fill="none" stroke="#00C4B6" strokeWidth="3" />
              <circle cx="180" cy="3" r="4" fill="#FF6B6B" />
            </svg>
          </div>
          <div className={styles.appCards}>
            {[0, 1].map((item) => (
              <div className={styles.appCard} key={item}>
                <span className={styles.appCardIcon} />
                <span className={styles.appCardLine} />
                <span className={`${styles.appCardLine} ${styles.appCardLineShort}`} />
              </div>
            ))}
          </div>
          <div className={styles.appNav}>
            {[0, 1, 2, 3].map((item) => <span className={styles.appNavDot} key={item} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function WebToMobileTransition() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLanguage();
  const copy = storyCopy[locale];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 30, mass: 0.22 });

  const webOpacity = useTransform(progress, [0, 0.28, 0.48], [1, 1, 0]);
  const webY = useTransform(progress, [0, 0.48], [0, -70]);
  const worldScale = useTransform(progress, [0, 0.46, 0.62], [1, 3.8, 5.3]);
  const worldOpacity = useTransform(progress, [0, 0.45, 0.63], [1, 0.95, 0]);
  const worldRotate = useTransform(progress, [0, 0.62], [-7, 16]);

  const phoneOpacity = useTransform(progress, [0.46, 0.57, 1], [0, 1, 1]);
  const phoneScale = useTransform(progress, [0.45, 0.68, 0.86, 1], [0.58, 1.05, 1, 0.84]);
  const phoneY = useTransform(progress, [0.45, 0.7], ["calc(-50% + 90px)", "-50%"]);
  const phoneRotateX = useTransform(progress, [0.45, 0.69], [14, 0]);
  const phoneRotateY = useTransform(progress, [0.45, 0.69], [-10, 0]);

  const screenGlobeScale = useTransform(progress, [0.45, 0.7, 0.9], [3.5, 1.12, 0.7]);
  const screenGlobeY = useTransform(progress, [0.45, 0.9], [85, -34]);
  const screenGlobeOpacity = useTransform(progress, [0.72, 0.92], [0.94, 0.3]);
  const uiOpacity = useTransform(progress, [0.7, 0.86], [0, 1]);
  const uiY = useTransform(progress, [0.7, 0.9], [24, 0]);

  const mobileOpacity = useTransform(progress, [0.62, 0.76, 0.9, 1], [0, 1, 1, 0]);
  const mobileY = useTransform(progress, [0.62, 0.78], [58, 0]);
  const aiOpacity = useTransform(progress, [0.9, 0.98], [0, 1]);
  const aiY = useTransform(progress, [0.9, 1], [48, 0]);
  const ecosystemOpacity = useTransform(progress, [0.84, 0.97], [0, 1]);
  const ecosystemScale = useTransform(progress, [0.84, 1], [0.82, 1]);
  const hintOpacity = useTransform(progress, [0, 0.16], [1, 0]);

  return (
    <section ref={sectionRef} className={styles.section} aria-label={`${copy.webTitle} ${copy.mobileTitle} ${copy.aiTitle}`}>
      <div className={styles.stage}>
        <div className={styles.ambient} />

        <motion.div
          className={`${styles.copyBlock} ${styles.webCopy}`}
          style={{ opacity: webOpacity, y: webY }}
        >
          <p className={styles.eyebrow}>{copy.webEyebrow}</p>
          <h2 className={styles.title}>{copy.webTitle}</h2>
          <p className={styles.body}>{copy.webBody}</p>
        </motion.div>

        <motion.div
          className={styles.worldScene}
          style={{
            opacity: worldOpacity,
            scale: worldScale,
            rotate: worldRotate,
            x: "-50%",
            y: "-50%",
          }}
          aria-hidden="true"
        >
          <DigitalGlobe />
        </motion.div>

        <motion.div
          className={styles.phoneWrap}
          style={{
            opacity: phoneOpacity,
            scale: phoneScale,
            x: "-50%",
            y: phoneY,
            rotateX: phoneRotateX,
            rotateY: phoneRotateY,
            transformPerspective: 1100,
          }}
          aria-hidden="true"
        >
          <PhoneVisual
            appKicker={copy.appKicker}
            appTitle={copy.appTitle}
            globeStyle={{
              opacity: screenGlobeOpacity,
              scale: screenGlobeScale,
              x: "-50%",
              y: screenGlobeY,
            }}
            uiStyle={{ opacity: uiOpacity, y: uiY }}
          />
        </motion.div>

        <motion.div
          className={`${styles.copyBlock} ${styles.mobileCopy}`}
          style={{ opacity: mobileOpacity, y: mobileY }}
        >
          <p className={styles.eyebrow}>{copy.mobileEyebrow}</p>
          <h3 className={styles.title}>{copy.mobileTitle}</h3>
          <p className={styles.body}>{copy.mobileBody}</p>
        </motion.div>

        <motion.div className={styles.ecosystem} style={{ opacity: ecosystemOpacity, scale: ecosystemScale, x: "-50%", y: "-50%" }} aria-hidden="true">
          <svg className={styles.ecosystemLines} viewBox="0 0 600 600" preserveAspectRatio="none">
            <path d="M300 300 300 54M300 300 60 300M300 300 540 300M300 300 300 546" />
          </svg>
          <span className={`${styles.ecosystemNode} ${styles.nodeAi}`}>AI</span>
          <span className={`${styles.ecosystemNode} ${styles.nodeWeb}`}>Web</span>
          <span className={`${styles.ecosystemNode} ${styles.nodeMobile}`}>Mobile</span>
          <span className={`${styles.ecosystemNode} ${styles.nodeCore}`}>Product core</span>
        </motion.div>

        <motion.div className={`${styles.copyBlock} ${styles.aiCopy}`} style={{ opacity: aiOpacity, y: aiY }}>
          <p className={styles.eyebrow}>{copy.aiEyebrow}</p>
          <h3 className={styles.title}>{copy.aiTitle}</h3>
          <p className={styles.body}>{copy.aiBody}</p>
        </motion.div>

        <motion.div className={styles.scrollHint} style={{ opacity: hintOpacity }} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span>{copy.scroll}</span>
        </motion.div>

        <div className={styles.timeline} aria-hidden="true">
          <span>{copy.progress}</span>
          <span className={styles.timelineTrack}>
            <motion.span className={styles.timelineProgress} style={{ scaleX: progress }} />
          </span>
        </div>
      </div>

      <div className={styles.reducedStory}>
        <div className={styles.reducedCard}>
          <p className={styles.eyebrow}>{copy.webEyebrow}</p>
          <h2 className={styles.title}>{copy.webTitle}</h2>
          <p className={styles.body}>{copy.webBody}</p>
        </div>
        <div className={styles.reducedArrow} aria-hidden="true">↓</div>
        <div className={styles.reducedVisual} aria-hidden="true">
          <div className={styles.phoneWrap}>
            <PhoneVisual appKicker={copy.appKicker} appTitle={copy.appTitle} />
          </div>
        </div>
        <div className={styles.reducedCard}>
          <p className={styles.eyebrow}>{copy.mobileEyebrow}</p>
          <h3 className={styles.title}>{copy.mobileTitle}</h3>
          <p className={styles.body}>{copy.mobileBody}</p>
        </div>
        <div className={styles.reducedArrow} aria-hidden="true">↓</div>
        <div className={styles.reducedCard}>
          <p className={styles.eyebrow}>{copy.aiEyebrow}</p>
          <h3 className={styles.title}>{copy.aiTitle}</h3>
          <p className={styles.body}>{copy.aiBody}</p>
        </div>
      </div>
    </section>
  );
}
