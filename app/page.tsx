import { CallToAction } from "@/components/CallToAction";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { StatsBand } from "@/components/StatsBand";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <StatsBand />
      <ProcessSection />
      <CallToAction />
    </main>
  );
}
