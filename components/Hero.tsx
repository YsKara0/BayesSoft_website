"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
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

  // Guarantee programmatic muted playback across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Fallback gracefully if browser has strict policy
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Cinematic Video Layer */}
      <div className={styles.videoWrapper} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/background_new.mp4" type="video/mp4" />
          <source src="/assets/background_new.mp4" type="video/mp4" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Dark Navy Overlays */}
      <div className={styles.overlayTint} aria-hidden="true" />
      <div className={styles.overlayVignette} aria-hidden="true" />
      <div className={styles.overlayGrid} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      {/* Main Hero Content */}
      <div className={styles.inner}>
        <motion.div
          className="flex flex-col items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Top Live Telemetry Badge */}
          <motion.div
            variants={revealItem}
            className="mb-8 inline-flex items-center gap-2.5 border border-white/10 bg-[#080E17]/85 px-3.5 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-none bg-bayes-blue opacity-75" />
              <span className="relative inline-flex size-2 rounded-none bg-bayes-blue shadow-[0_0_10px_#0066FF]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
              SYS.CORE // ACTIVE STREAM
            </span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bayes-blue">
              {copy.eyebrow}
            </span>
          </motion.div>

          {/* Punchy Main Headline */}
          <motion.div variants={revealItem} className="overflow-hidden pb-1">
            <h1 className="font-display max-w-5xl text-center text-[clamp(2.9rem,6.4vw,6.4rem)] leading-[0.95] tracking-tight text-white">
              {copy.titleLead}{" "}
              <span className="text-bayes-blue drop-shadow-[0_0_35px_rgba(0,102,255,0.45)]">
                {copy.titleAccent}
              </span>
            </h1>
          </motion.div>

          {/* Simplified Single High-Impact Subtitle */}
          <motion.p
            variants={revealItem}
            className="mt-7 max-w-2xl text-center text-lg leading-relaxed text-bayes-silver md:text-xl md:leading-8"
          >
            {copy.body}
          </motion.p>

          {/* Sharp Modern Buttons */}
          <motion.div
            variants={revealItem}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/iletisim"
              className="action-primary-on-dark group min-h-[52px] px-7"
            >
              {copy.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projeler"
              className="action-secondary-on-dark min-h-[52px] px-7 backdrop-blur-md"
            >
              {copy.secondary}
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          {/* Modern Engineering Telemetry Status Bar */}
          <motion.div
            variants={revealItem}
            className="mt-14 flex flex-wrap items-center justify-center gap-4 text-white/50"
          >
            <span className="flex size-9 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white/70">
              <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.18em] text-white/70">
              Web · Mobile · AI
            </span>
            <span className="hidden text-white/20 sm:inline">|</span>
            <div className={styles.signal}>{copy.signal}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
