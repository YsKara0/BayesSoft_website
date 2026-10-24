"use client";
import { MotionProvider, useHomepageMotion } from "@/components/homepage/MotionProvider";
import { Header } from "@/components/homepage/Header";
import { Footer } from "@/components/homepage/Footer";
import { SpatialHero } from "@/components/homepage/SpatialHero";
import { ReferencesMarquee } from "@/components/homepage/ReferencesMarquee";
import { SelectedProjects } from "@/components/homepage/SelectedProjects";
import { Services } from "@/components/homepage/Services";
import { Contact } from "@/components/homepage/Contact";
import styles from "./prototype.module.css";
function Shell() {
  const { paused } = useHomepageMotion();
  return <div data-bs3p033="" data-motion-paused={paused} className={`study plus-shell bs3p-homepage bs3p-react-homepage ${styles.shell}`}>
    <Header /><main id="main-content"><SpatialHero />
      <ReferencesMarquee /><SelectedProjects /><Services /><Contact />
    </main><Footer />
  </div>;
}
export function Prototype() { return <MotionProvider><Shell /></MotionProvider>; }
