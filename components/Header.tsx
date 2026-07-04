"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Ekip", href: "/ekip" },
  { label: "Projeler", href: "/projeler" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-bayes-ink/10 transition duration-100 ${
        scrolled ? "theme-header-scrolled backdrop-blur-xl" : "bg-bayes-aqua/70 backdrop-blur-md"
      }`}
    >
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 origin-left bg-bayes-ink"
        style={{ scaleX }}
      />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border border-transparent px-4 py-3 font-label text-xs uppercase tracking-[0.16em] transition duration-100 focus-visible:border-bayes-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  active
                    ? "bg-bayes-ink text-bayes-paper"
                    : "text-bayes-ink hover:border-bayes-ink hover:bg-bayes-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/iletisim"
            className="group inline-flex min-h-11 items-center justify-center gap-2 border-2 border-bayes-ink bg-bayes-paper px-4 font-label text-xs font-semibold uppercase tracking-[0.14em] text-bayes-ink transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bayes-ink"
          >
            Proje İçin Görüşelim
            <ArrowUpRight className="size-4 transition duration-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex size-11 items-center justify-center border border-bayes-ink bg-bayes-paper text-bayes-ink lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1 }}
            className="theme-mobile-menu border-t border-bayes-ink/12 px-5 pb-5 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 pt-4">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`border px-4 py-4 font-label text-xs uppercase tracking-[0.16em] ${
                      active
                        ? "border-bayes-ink bg-bayes-ink text-bayes-paper"
                        : "border-bayes-ink/16 bg-bayes-paper text-bayes-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/iletisim"
                className="mt-2 border-2 border-bayes-ink bg-bayes-ink px-4 py-4 text-center font-label text-xs font-semibold uppercase tracking-[0.16em] text-bayes-paper"
              >
                Proje İçin Görüşelim
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
