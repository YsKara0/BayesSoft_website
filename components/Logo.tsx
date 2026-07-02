"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  const [logoReady, setLogoReady] = useState(true);

  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="BayesSoft home">
      <motion.span
        aria-hidden="true"
        className="relative flex size-11 shrink-0 items-center justify-center"
        whileHover={{ rotate: -3, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      >
        {logoReady ? (
          <>
            <Image
              src="/bayes_logo_white.png"
              alt=""
              width={32}
              height={32}
              unoptimized
              className="theme-logo-dark size-8 object-contain"
              onError={() => setLogoReady(false)}
            />
            <Image
              src="/bayes_logo_dark.png"
              alt=""
              width={32}
              height={32}
              unoptimized
              className="theme-logo-light hidden size-8 object-contain"
              onError={() => setLogoReady(false)}
            />
          </>
        ) : (
          <span className="text-sm font-semibold text-bayes-frost">B</span>
        )}
      </motion.span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span className="text-base font-semibold text-bayes-frost">BayesSoft</span>
        </span>
      ) : null}
    </a>
  );
}
