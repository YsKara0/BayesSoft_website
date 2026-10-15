"use client";
import { MotionProvider, useHomepageMotion } from "./homepage/MotionProvider";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Header as HomepageHeader } from "./homepage/Header";
import { Footer as HomepageFooter } from "./homepage/Footer";
function HomepageShell({ children }: { children: ReactNode }) {
  const { paused } = useHomepageMotion();
  return <div className="study plus-shell bs3p-homepage bs3p-react-homepage" data-motion-paused={paused}>
    <HomepageHeader />{children}<HomepageFooter />
  </div>;
}

// Preserve the existing chrome on every interior route.
export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return pathname === "/" ? <MotionProvider><HomepageShell>{children}</HomepageShell></MotionProvider> : <>
    <Header />{children}<Footer />
  </>;
}
