"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { AIScene } from "@/components/AIScene";
import { heroFont } from "@/components/heroFont";
import { MobileScene } from "@/components/MobileScene";
import { WebScene } from "@/components/WebScene";
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
}> = {
  tr: {
    webEyebrow: "Web deneyimi",
    webTitle: "İş süreçleriniz, tek ekranda.",
    webBody: "İşinize özel yönetim panelleri, müşteri portalları ve kurumsal web platformları geliştiriyoruz.",
    mobileEyebrow: "Mobil ürün",
    mobileTitle: "İşiniz, her an yanınızda.",
    mobileBody: "İşinize özel mobil uygulamalar geliştiriyoruz. Görevleriniz ve bildirimleriniz her an yanınızda.",
    aiEyebrow: "Akıllı katman",
    aiTitle: "Tekrarlayan işleri akıllı akışlara dönüştürün.",
    aiBody: "İşinize özel AI çözümleriyle talepleri özetleyip sınıflandırıyoruz; görev oluşturma kararını ekibiniz onaylıyor.",
    scroll: "Dönüşümü keşfet",
    progress: "Web → Mobil → AI",
  },
  en: {
    webEyebrow: "Web experience",
    webTitle: "Your business processes, in one place.",
    webBody: "We build custom admin panels, customer portals and corporate web platforms for your business.",
    mobileEyebrow: "Mobile product",
    mobileTitle: "Your business, always with you.",
    mobileBody: "We build mobile apps for your business. Your tasks and notifications stay within reach.",
    aiEyebrow: "Intelligence layer",
    aiTitle: "Turn repetitive work into intelligent workflows.",
    aiBody: "Our custom AI solutions summarize and classify requests, while your team approves task creation.",
    scroll: "Explore the transition",
    progress: "Web → Mobile → AI",
  },
  de: {
    webEyebrow: "Web-Erlebnis",
    webTitle: "Ihre Geschäftsprozesse, auf einen Blick.",
    webBody: "Wir entwickeln individuelle Verwaltungsoberflächen, Kundenportale und Unternehmensplattformen für Ihr Geschäft.",
    mobileEyebrow: "Mobiles Produkt",
    mobileTitle: "Ihr Geschäft, immer dabei.",
    mobileBody: "Wir entwickeln mobile Apps für Ihr Geschäft. Aufgaben und Benachrichtigungen sind jederzeit dabei.",
    aiEyebrow: "Intelligente Ebene",
    aiTitle: "Verwandeln Sie Routinearbeit in intelligente Abläufe.",
    aiBody: "Unsere individuellen KI-Lösungen fassen Anfragen zusammen und ordnen sie ein. Ihr Team bestätigt die Aufgabenerstellung.",
    scroll: "Transformation entdecken",
    progress: "Web → Mobil → KI",
  },
};

export function WebToMobileTransition() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLanguage();
  const copy = storyCopy[locale];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 30, mass: 0.22 });

  // Shared 8% crossfades: Web holds to 28%, Mobile holds 36–70%, AI holds from 78%.
  // Text and visual use the same opacity, so no scene disappears ahead of its copy.
  const webOpacity = useTransform(progress, [0, 0.28, 0.36], [1, 1, 0]);
  const webY = useTransform(progress, [0.28, 0.36], [0, -60]);
  const webPanelScale = useTransform(progress, [0, 0.28, 0.36], [1, 1, 1.04]);

  const mobileOpacity = useTransform(progress, [0.28, 0.36, 0.70, 0.78], [0, 1, 1, 0]);
  const phoneScale = useTransform(progress, [0.28, 0.34, 0.36, 1], [0.58, 1.05, 1, 1]);
  const phoneY = useTransform(progress, [0.28, 0.36], ["calc(-50% + 90px)", "-50%"]);
  const phoneRotateX = useTransform(progress, [0.28, 0.36], [14, 0]);
  const phoneRotateY = useTransform(progress, [0.28, 0.36], [-10, 0]);
  const mobileY = useTransform(progress, [0.28, 0.36], [58, 0]);

  const aiOpacity = useTransform(progress, [0.70, 0.78], [0, 1]);
  const aiY = useTransform(progress, [0.70, 0.78], [48, 0]);
  const hintOpacity = useTransform(progress, [0, 0.12], [1, 0]);

  return (
    <section ref={sectionRef} className={styles.section} aria-label={`${copy.webTitle} ${copy.mobileTitle} ${copy.aiTitle}`}>
      <div className={styles.stage}>
        <div className={styles.ambient} />

        <div className={styles.webEntry}>
          <motion.div
            className={`${styles.copyBlock} ${styles.webCopy} ${heroFont.variable}`}
            style={{ opacity: webOpacity, y: webY }}
          >
            <p className={styles.eyebrow}>{copy.webEyebrow}</p>
            <h2 className={styles.title}>{copy.webTitle}</h2>
            <p className={styles.body}>{copy.webBody}</p>
          </motion.div>

          <motion.div
            className={styles.webVisual}
            style={{
              opacity: webOpacity,
              scale: webPanelScale,
            }}
            aria-hidden="true"
          >
            <WebScene locale={locale} />
          </motion.div>
        </div>

        <motion.div
          className={`${styles.phoneWrap} ${styles.mobilePhoneWrap}`}
          style={{ opacity: mobileOpacity, scale: phoneScale, x: "-50%", y: phoneY, rotateX: phoneRotateX, rotateY: phoneRotateY, transformPerspective: 1100 }}
          aria-hidden="true"
        >
          <MobileScene locale={locale} />
        </motion.div>

        <motion.div
          className={`${styles.copyBlock} ${styles.mobileCopy} ${heroFont.variable}`}
          style={{ opacity: mobileOpacity, y: mobileY }}
        >
          <p className={styles.eyebrow}>{copy.mobileEyebrow}</p>
          <h3 className={styles.title}>{copy.mobileTitle}</h3>
          <p className={styles.body}>{copy.mobileBody}</p>
        </motion.div>

        <motion.div className={styles.aiVisual} style={{ opacity: aiOpacity, x: "-50%", y: aiY }}>
          <AIScene locale={locale} />
        </motion.div>

        <motion.div className={`${styles.copyBlock} ${styles.aiCopy} ${heroFont.variable}`} style={{ opacity: aiOpacity, y: aiY }}>
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
        <div className={`${styles.reducedCard} ${heroFont.variable}`}>
          <p className={styles.eyebrow}>{copy.webEyebrow}</p>
          <h2 className={styles.title}>{copy.webTitle}</h2>
          <p className={styles.body}>{copy.webBody}</p>
          <WebScene locale={locale} />
        </div>
        <div className={styles.reducedArrow} aria-hidden="true">↓</div>
        <div className={styles.reducedVisual} aria-hidden="true">
          <div className={styles.phoneWrap}>
            <MobileScene locale={locale} />
          </div>
        </div>
        <div className={`${styles.reducedCard} ${styles.reducedMobileCopy} ${heroFont.variable}`}>
          <p className={styles.eyebrow}>{copy.mobileEyebrow}</p>
          <h3 className={styles.title}>{copy.mobileTitle}</h3>
          <p className={styles.body}>{copy.mobileBody}</p>
        </div>
        <div className={styles.reducedArrow} aria-hidden="true">↓</div>
        <div className={`${styles.reducedCard} ${styles.reducedAICopy} ${heroFont.variable}`}>
          <p className={styles.eyebrow}>{copy.aiEyebrow}</p>
          <h3 className={styles.title}>{copy.aiTitle}</h3>
          <p className={styles.body}>{copy.aiBody}</p>
          <AIScene locale={locale} />
        </div>
      </div>
    </section>
  );
}
