"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type LogoProps = {
  variant?: "dark" | "light";
  large?: boolean;
};

export function Logo({ variant = "dark", large = false }: LogoProps) {
  const [logoReady, setLogoReady] = useState(true);
  const source = variant === "light"
    ? "/bayes_logo_white_cropped.png"
    : "/bayes_logo_dark_cropped.png";

  return (
    <Link href="/" className="group flex items-center" aria-label="BayesSoft">
      <motion.span
        className="flex shrink-0 items-center"
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.2 }}
      >
        {logoReady ? (
          <Image
            src={source}
            alt=""
            width={1327}
            height={539}
            unoptimized
            className={large ? "h-20 w-auto object-contain md:h-24" : "h-12 w-auto object-contain md:h-14"}
            onError={() => setLogoReady(false)}
          />
        ) : (
          <span className={`font-display text-xl ${variant === "light" ? "text-white" : "text-bayes-ink"}`}>BayesSoft</span>
        )}
      </motion.span>
    </Link>
  );
}
