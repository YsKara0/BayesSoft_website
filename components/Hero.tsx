"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers3, ShieldCheck } from "lucide-react";
import { AmbientCanvas } from "@/components/AmbientCanvas";
import { Reveal } from "@/components/Reveal";

const capabilities = [
  { icon: Cpu, label: "AI-ready systems" },
  { icon: Layers3, label: "Product engineering" },
  { icon: ShieldCheck, label: "Reliable platforms" }
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-36">
      <div className="theme-hero-base absolute inset-0" />
      <div className="absolute inset-0 bg-mesh-lines bg-[size:58px_58px] opacity-70" />
      <AmbientCanvas />
      <div className="theme-hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-[74svh] max-w-7xl flex-col justify-center px-5 pb-14 md:min-h-[76svh] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.05] px-3 py-2 text-sm text-bayes-silver/78 backdrop-blur-md">
            <span className="size-2 rounded-full bg-bayes-teal shadow-[0_0_16px_rgba(81,214,202,0.7)]" />
            Engineering digital products with quiet precision
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-bayes-frost md:text-7xl lg:text-8xl">
            Bayessoft
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-bayes-silver/76 md:text-xl">
            A software and technology team building premium web platforms, AI-assisted
            workflows, and resilient cloud products for teams that care about craft.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-bayes-frost px-5 py-3 text-sm font-semibold text-bayes-ink transition hover:bg-white"
            >
              View portfolio
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
            <motion.a
              href="#team"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-md border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-bayes-frost backdrop-blur-md transition hover:border-bayes-teal/55 hover:bg-white/[0.08]"
            >
              Meet the team
            </motion.a>
          </div>
        </motion.div>

        <Reveal delay={0.22} className="mt-16 grid gap-3 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.label}
                className="flex min-h-20 items-center gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-bayes-blue/24 text-bayes-teal">
                  <Icon className="size-5" />
                </span>
                <span className="text-sm font-medium text-bayes-silver/82">{capability.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
