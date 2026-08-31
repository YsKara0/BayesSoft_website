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
        <div className={styles.globeInnerMesh}>
          <svg className={styles.globeSvg} viewBox="0 0 300 300" aria-hidden="true">
            <defs>
              <linearGradient id="polyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066FF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#003D99" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Polygonal Icosahedron Matrix */}
            <polygon points="150,30 250,85 250,215 150,270 50,215 50,85" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
            <polygon points="150,75 220,115 220,185 150,225 80,185 80,115" stroke="rgba(0,102,255,0.4)" strokeWidth="1.2" fill="url(#polyGrad)" />
            
            <path className={styles.networkLine} d="M50 85 L150 75 L250 85 M50 215 L150 225 L250 215 M150 30 L150 75 M150 225 L150 270 M80 115 L220 185 M80 185 L220 115" />
            <line x1="150" y1="75" x2="150" y2="225" stroke="#0066FF" strokeWidth="1.5" />
            
            {/* Vertex Markers */}
            <rect x="146" y="26" width="8" height="8" fill="#0066FF" transform="rotate(45 150 30)" />
            <rect x="246" y="81" width="8" height="8" fill="#FFFFFF" transform="rotate(45 250 85)" />
            <rect x="246" y="211" width="8" height="8" fill="#38BDF8" transform="rotate(45 250 215)" />
            <rect x="146" y="266" width="8" height="8" fill="#FFFFFF" transform="rotate(45 150 270)" />
            <rect x="46" y="211" width="8" height="8" fill="#0066FF" transform="rotate(45 50 215)" />
            <rect x="46" y="81" width="8" height="8" fill="#FFFFFF" transform="rotate(45 50 85)" />
            
            <rect x="145" y="70" width="10" height="10" fill="#0066FF" transform="rotate(45 150 75)" />
            <rect x="145" y="220" width="10" height="10" fill="#38BDF8" transform="rotate(45 150 225)" />
          </svg>
        </div>
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
      {/* iPhone 17 Pro Physical Buttons */}
      <span className={styles.btnAction} aria-hidden="true" />
      <span className={styles.btnVolUp} aria-hidden="true" />
      <span className={styles.btnVolDown} aria-hidden="true" />
      <span className={styles.btnPower} aria-hidden="true" />

      <div className={styles.screen}>
        {/* iPhone 17 Pro Dynamic Island */}
        <div className={styles.dynamicIsland} aria-hidden="true">
          <span className={styles.islandLens} />
          <span className={styles.islandSensor} />
        </div>

        <div className={styles.screenGrid} />
        <div className={styles.statusBar}><span>09:41</span><span>● 5G / LIVE</span></div>
        <motion.div className={styles.screenGlobe} style={globeStyle} />
        <motion.div className={styles.appUi} style={uiStyle}>
          <div className={styles.appKicker}>{appKicker}</div>
          <div className={styles.appTitle}>{appTitle}</div>
          <div className={styles.appHero}>
            <svg className={styles.appHeroLine} viewBox="0 0 180 50" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points="0,42 35,28 75,38 115,14 148,22 180,4 180,50 0,50" fill="url(#chartFill)" />
              <polyline points="0,42 35,28 75,38 115,14 148,22 180,4" fill="none" stroke="#0066FF" strokeWidth="2.5" />
              <rect x="32" y="25" width="6" height="6" fill="#FFFFFF" transform="rotate(45 35 28)" />
              <rect x="112" y="11" width="6" height="6" fill="#38BDF8" transform="rotate(45 115 14)" />
              <rect x="177" y="1" width="6" height="6" fill="#0066FF" transform="rotate(45 180 4)" />
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
        </motion.div>
        <span className={styles.homeBar} aria-hidden="true" />
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

  // Paced animation transforms with generous hold at the end
  const webOpacity = useTransform(progress, [0, 0.18, 0.32], [1, 1, 0]);
  const webY = useTransform(progress, [0, 0.32], [0, -60]);
  const worldScale = useTransform(progress, [0, 0.30, 0.44], [1, 3.8, 5.3]);
  const worldOpacity = useTransform(progress, [0, 0.28, 0.44], [1, 0.95, 0]);
  const worldRotate = useTransform(progress, [0, 0.44], [-7, 16]);

  const phoneOpacity = useTransform(progress, [0.30, 0.42, 1], [0, 1, 1]);
  const phoneScale = useTransform(progress, [0.30, 0.52, 0.68, 1], [0.58, 1.05, 1, 1]);
  const phoneY = useTransform(progress, [0.30, 0.52], ["calc(-50% + 90px)", "-50%"]);
  const phoneRotateX = useTransform(progress, [0.30, 0.52], [14, 0]);
  const phoneRotateY = useTransform(progress, [0.30, 0.52], [-10, 0]);

  const screenGlobeScale = useTransform(progress, [0.30, 0.50, 0.68], [3.5, 1.12, 0.7]);
  const screenGlobeY = useTransform(progress, [0.30, 0.68], [85, -34]);
  const screenGlobeOpacity = useTransform(progress, [0.52, 0.70], [0.94, 0.3]);
  const uiOpacity = useTransform(progress, [0.50, 0.64], [0, 1]);
  const uiY = useTransform(progress, [0.50, 0.68], [24, 0]);

  const mobileOpacity = useTransform(progress, [0.38, 0.50, 0.65, 0.72], [0, 1, 1, 0]);
  const mobileY = useTransform(progress, [0.38, 0.52], [58, 0]);
  const aiOpacity = useTransform(progress, [0.70, 0.78], [0, 1]);
  const aiY = useTransform(progress, [0.70, 0.78], [48, 0]);
  const ecosystemOpacity = useTransform(progress, [0.65, 0.76], [0, 1]);
  const ecosystemScale = useTransform(progress, [0.65, 0.78], [0.82, 1]);
  const hintOpacity = useTransform(progress, [0, 0.12], [1, 0]);

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
