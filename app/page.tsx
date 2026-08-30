import { CallToAction } from "@/components/CallToAction";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { FeaturedCaseStudy } from "@/components/FeaturedCaseStudy";
import { Hero } from "@/components/Hero";
import { OneTeamSection } from "@/components/OneTeamSection";
import { ProcessSection } from "@/components/ProcessSection";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { WebToMobileTransition } from "@/components/WebToMobileTransition";

export default function Home() {
  return (
    <main>
      <Hero />
      <WebToMobileTransition />
      <CapabilitiesSection />
      <FeaturedCaseStudy />
      <SelectedWorkSection />
      <ClientsSection />
      <ProcessSection />
      <OneTeamSection />
      <CallToAction />
    </main>
  );
}
