"use client";
import { MotionProvider, useHomepageMotion } from "./homepage/MotionProvider";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Header as HomepageHeader } from "./homepage/Header";
import { Footer as HomepageFooter } from "./homepage/Footer";
import { InteriorShell } from "./interior/InteriorShell";
import { projects } from "@/data/site";

const projectDetailPages = projects
  .filter(project => project.hasDetailsPage && project.slug)
  .map(project => `/projeler/${project.slug}`);
function HomepageShell({ children }: { children: ReactNode }) {
  const { paused } = useHomepageMotion();
  return <div className="study plus-shell bs3p-homepage bs3p-react-homepage" data-motion-paused={paused}>
    <HomepageHeader />{children}<HomepageFooter />
  </div>;
}

// Existing index pages and the eight real project details share the same shell.
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const interiorPages = ["/hakkimizda", "/hizmetler", "/projeler", "/iletisim", ...projectDetailPages];
  if (interiorPages.some(path => pathname === path || pathname === `${path}.html`)) return <InteriorShell>{children}</InteriorShell>;
  return pathname === "/" ? <MotionProvider><HomepageShell>{children}</HomepageShell></MotionProvider> : <>
    <Header />{children}<Footer />
  </>;
}
