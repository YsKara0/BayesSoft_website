import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TeamSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
