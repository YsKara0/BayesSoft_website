"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { HeroShowcase } from "@/components/HeroShowcase";
import { homeCopy } from "@/data/home";
import styles from "./Hero.module.css";

const heroFont = localFont({
  src: "./fonts/SpaceGrotesk-Bold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-hero",
});

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
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.hero}>
      {/* Main Hero Content */}
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial={reducedMotion ? false : "hidden"}
          animate="visible"
        >
          {/* Existing copy and reveal sequence, styled with Balanced Premium tokens. */}
          <motion.div variants={revealItem} className="pb-1">
            <h1
              className={`${styles.headline} ${heroFont.variable}`}
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
        <HeroShowcase />
      </div>
    </section>
  );
}
