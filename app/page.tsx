import { CallToAction } from "@/components/CallToAction";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { ProcessSection } from "@/components/ProcessSection";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ReferencesTicker />
      <ProcessSection />
      <CallToAction />
    </main>
  );
}
