"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { HeroGeometricMesh } from "@/components/HeroGeometricMesh";
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

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline - Solid White, Compact Tracking-Tighter & Extra Bold */}
          <motion.div variants={revealItem} className="pb-1 text-left">
            <h1 className="font-display max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter text-white drop-shadow-2xl">
              {copy.titleLead}{" "}
              <span className="text-white">{copy.titleAccent}</span>
            </h1>
          </motion.div>

          {/* Clean Subtitle */}
          <motion.p
            variants={revealItem}
            className="mt-6 max-w-2xl text-left text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-300 drop-shadow-md"
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

        {/* Visual Concept 1: Interactive 3D Geometric Tech Mesh (Untouched) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={styles.visualContainer}
        >
          <div className={styles.visualFrame}>
            <HeroGeometricMesh />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
