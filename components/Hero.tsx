"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { homeCopy } from "@/data/home";
import { HeroGeometricMesh } from "@/components/HeroGeometricMesh";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.14,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
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
          {/* Eyebrow */}
          <motion.p variants={revealItem} className="font-label mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-bayes-blue md:text-xs">
            <span className="size-2 rounded-none bg-bayes-blue shadow-[0_0_12px_#0066FF]" />
            {copy.eyebrow}
          </motion.p>

          {/* Punchy Main Headline */}
          <motion.div variants={revealItem} className="overflow-hidden pb-1">
            <h1 className="font-display max-w-4xl text-[clamp(2.85rem,5.8vw,5.9rem)] leading-[0.95] tracking-tight text-white">
              {copy.titleLead}{" "}
              <span className="text-bayes-blue drop-shadow-[0_0_24px_rgba(0,102,255,0.4)]">{copy.titleAccent}</span>
            </h1>
          </motion.div>

          {/* Simplified Single High-Impact Subtitle */}
          <motion.p variants={revealItem} className="mt-6 max-w-2xl text-lg leading-relaxed text-bayes-silver md:text-xl md:leading-8">
            {copy.body}
          </motion.p>

          {/* Sharp Modern Buttons */}
          <motion.div variants={revealItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim"
              className="action-primary-on-dark group min-h-[52px]"
            >
              {copy.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projeler"
              className="action-secondary-on-dark min-h-[52px] backdrop-blur-md"
            >
              {copy.secondary}
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>

          {/* Modern Engineering Telemetry Tag */}
          <motion.div variants={revealItem} className="mt-12 flex items-center gap-4 text-white/50">
            <span className="flex size-9 items-center justify-center rounded-none border border-white/15 bg-white/5 text-white/70">
              <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.18em] text-white/60">Web · Mobile · AI</span>
            <span className="text-white/20">|</span>
            <div className={styles.signal}>{copy.signal}</div>
          </motion.div>
        </motion.div>

        {/* Visual Concept 1: Interactive 3D Geometric Tech Mesh */}
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
