"use client";

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
      delayChildren: 0.25,
      staggerChildren: 0.17,
    },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale].hero;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={revealItem} className="font-label mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-bayes-mint md:text-xs">
            <span className="size-2 rounded-full bg-bayes-coral shadow-[0_0_0_6px_rgba(255,107,107,0.12)]" />
            {copy.eyebrow}
          </motion.p>
          <motion.div variants={revealItem} className="overflow-hidden pb-2">
            <h1 className="font-display max-w-5xl text-[clamp(3.15rem,6.2vw,6.7rem)] leading-[0.94] text-white">
              {copy.titleLead}{" "}
              <span className="text-bayes-teal">{copy.titleAccent}</span>
            </h1>
          </motion.div>

          <motion.p variants={revealItem} className="mt-7 max-w-3xl text-lg leading-8 text-white/74 md:text-xl md:leading-9">
            {copy.body}
          </motion.p>
          <motion.p variants={revealItem} className="mt-4 max-w-2xl text-sm leading-7 text-white/45 md:text-base md:leading-8">{copy.support}</motion.p>

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

          <motion.div variants={revealItem} className="mt-12 flex items-center gap-3 text-white/42">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/15">
              <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.18em]">Web · Mobile · AI</span>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .55, duration: 1, ease: [0.22, 1, 0.36, 1] }} className={styles.system} aria-hidden="true">
          <span className={styles.ring} />
          <span className={styles.ringTwo} />
          <span className={`${styles.connector} ${styles.connectorOne}`} />
          <span className={`${styles.connector} ${styles.connectorTwo}`} />
          <span className={`${styles.connector} ${styles.connectorThree}`} />
          <span className={`${styles.connector} ${styles.connectorFour}`} />
          <div className={styles.core}><span className={styles.coreText}>{copy.productCore}</span></div>
          <div className={`${styles.node} ${styles.nodeWeb}`}>Web</div>
          <div className={`${styles.node} ${styles.nodeMobile}`}>Mobile</div>
          <div className={`${styles.node} ${styles.nodeAi}`}>AI</div>
          <div className={`${styles.node} ${styles.nodeOperation}`}>{copy.operation}</div>
          <div className={styles.signal}>{copy.signal}</div>
        </motion.div>
      </div>
    </section>
  );
}
