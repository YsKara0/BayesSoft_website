import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeaturedAndSelectedWork } from "@/components/FeaturedAndSelectedWork";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { WebToMobileTransition } from "@/components/WebToMobileTransition";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebToMobileTransition />
      <CapabilitiesSection />
      <FeaturedAndSelectedWork />
      <ClientsSection />
      <ProcessSection />
    </main>
  );
}
