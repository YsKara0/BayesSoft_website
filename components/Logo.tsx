"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  const [logoReady, setLogoReady] = useState(true);

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="BayesSoft ana sayfa">
      <motion.span
        aria-hidden="true"
        className="relative flex size-11 shrink-0 items-center justify-center border border-bayes-ink bg-bayes-paper"
        whileHover={{ rotate: -2 }}
        transition={{ duration: 0.1 }}
      >
        {logoReady ? (
          <Image
            src="/bayes_logo_dark.png"
            alt=""
            width={32}
            height={32}
            unoptimized
            className="size-8 object-contain"
            onError={() => setLogoReady(false)}
          />
        ) : (
          <span className="font-label text-sm font-semibold text-bayes-ink">B</span>
        )}
      </motion.span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl text-bayes-ink">BayesSoft</span>
          <span className="font-label mt-1 text-[10px] uppercase tracking-[0.18em] text-bayes-silver">
            Technology
          </span>
        </span>
      ) : null}
    </Link>
  );
}
