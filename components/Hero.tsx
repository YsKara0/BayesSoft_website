"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  // Guarantee programmatic muted playback across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (reducedMotion) {
        video.pause();
        return;
      }
      video.muted = true;
      video.play().catch(() => {
        // Fallback gracefully if browser has strict policy
      });
    }
  }, [reducedMotion]);

  return (
    <section className={styles.hero}>
      {/* Background Cinematic Video Layer */}
      <div className={styles.videoWrapper} aria-hidden="true">
        <video
          ref={videoRef}
          className={`${styles.bgVideo} saturate-[0.5] brightness-[0.75] contrast-[1.15]`}
          autoPlay={!reducedMotion}
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/Glowing_3D_geometric_data_network_202608311617.mp4" type="video/mp4" />
          <source src="/assets/Glowing_3D_geometric_data_network_202608311617.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/background_new2.mp4" type="video/mp4" />
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Optimized Linear Gradient Overlay */}
      <div className={styles.overlayTint} aria-hidden="true" />

      {/* Main Hero Content */}
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          <p className={styles.eyebrow}><span aria-hidden="true" />{copy.eyebrow}</p>
          {/* Existing copy and reveal sequence, styled with Balanced Premium tokens. */}
          <motion.div variants={revealItem} className="pb-1 text-left">
            <h1
              className={styles.headline}
            >
              {copy.titleLead}{" "}
              <span className={styles.accent}>
                {copy.titleAccent}
              </span>
            </h1>
          </motion.div>

          {/* Clean Subtitle */}
          <motion.p
            variants={revealItem}
            className={styles.subtitle}
          >
            {copy.body}
          </motion.p>

          {/* Existing destinations and labels, shared visual treatment for this review pass. */}
          <motion.div
            variants={revealItem}
            className={styles.actions}
          >
            <Link
              href="/iletisim"
              className={`group ${styles.primary}`}
            >
              {copy.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projeler"
              className={`group ${styles.secondary}`}
            >
              {copy.secondary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
