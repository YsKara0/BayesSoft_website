"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      onClick={toggleTheme}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="flex size-10 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-bayes-frost transition hover:border-bayes-teal/45 hover:bg-white/[0.07]"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </motion.button>
  );
}
