import { SpatialHero } from "@/components/homepage/SpatialHero";
import { ReferencesMarquee } from "@/components/homepage/ReferencesMarquee";
import { SelectedProjects } from "@/components/homepage/SelectedProjects";
import { Services } from "@/components/homepage/Services";
import { Contact } from "@/components/homepage/Contact";
export default function HomePage() {
  return <main id="main-content">
    <link rel="preload" as="image" href="/hero/system-static.svg" media="(max-width: 899px), (prefers-reduced-motion: reduce)" fetchPriority="high" />
    <SpatialHero />
    <ReferencesMarquee />
    <SelectedProjects />
    <Services />
    <Contact />
  </main>;
}
