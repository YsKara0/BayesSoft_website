"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

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
  const { copy } = useLanguage();

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden border-b border-white/10 bg-bayes-ink px-5 pb-14 pt-32 md:px-8 md:pb-20">
      <video
        className="hero-video absolute inset-0 -z-30 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(11,25,44,0.94)_0%,rgba(11,25,44,0.72)_48%,rgba(11,25,44,0.28)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(11,25,44,0.88)_0%,transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_30%,rgba(0,196,182,0.16),transparent_34%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={revealItem} className="overflow-hidden pb-2">
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7rem)] leading-[0.96] text-white">
              {copy.hero.titleLead}{" "}
              <span className="text-bayes-teal">{copy.hero.titleAccent}</span>{" "}
              {copy.hero.titleEnd}
            </h1>
          </motion.div>

          <motion.p variants={revealItem} className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            {copy.hero.body}
          </motion.p>

          <motion.div variants={revealItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/iletisim"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-bayes-coral px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-premium-lg transition hover:-translate-y-1 hover:bg-white hover:text-bayes-ink"
            >
              {copy.hero.primary}
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 font-label text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-bayes-teal hover:bg-bayes-teal hover:text-bayes-ink"
            >
              {copy.hero.secondary}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.65 }}
          className="mt-14 flex items-center gap-3 text-white/45"
        >
          <span className="flex size-9 items-center justify-center rounded-full border border-white/15">
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </span>
          <span className="font-label text-[10px] uppercase tracking-[0.18em]">BayesSoft</span>
        </motion.div>
      </div>
    </section>
  );
}
