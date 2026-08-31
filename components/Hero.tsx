"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
          className={`${styles.bgVideo} saturate-[0.5] brightness-[0.75] contrast-[1.15]`}
          autoPlay
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
          className="flex w-full max-w-2xl flex-col items-start text-left lg:max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline - Compact Tracking-Tighter & Extra Bold */}
          <motion.div variants={revealItem} className="pb-1 text-left">
            <h1
              className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.02] drop-shadow-2xl ${styles.headline}`}
            >
              {copy.titleLead}{" "}
              <span className="text-bayes-blue drop-shadow-[0_0_35px_rgba(0,102,255,0.45)]">
                {copy.titleAccent}
              </span>
            </h1>
          </motion.div>

          {/* Clean Subtitle */}
          <motion.p
            variants={revealItem}
            className={`mt-6 max-w-xl text-left text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-300 drop-shadow-md ${styles.subtitle}`}
          >
            {copy.body}
          </motion.p>

          {/* Sharp Modern Buttons - Solid Matte White Primary & Glassmorphism Secondary */}
          <motion.div
            variants={revealItem}
            className="mt-9 flex flex-col items-stretch gap-3.5 sm:flex-row sm:items-center"
          >
            <Link
              href="/iletisim"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 px-7 border border-white bg-white text-[#040608] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/50"
            >
              {copy.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projeler"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 px-7 border border-white/15 bg-white/5 text-white backdrop-blur-md text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/50"
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
