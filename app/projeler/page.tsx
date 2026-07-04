import { PageHero } from "@/components/PageHero";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero eyebrow="Projeler" title="BayesSoft tarafından geliştirilen ürünler ve teknik çalışmalar.">
        Projeler artık ayrı bir sayfada ve tek liste halinde yer alıyor; ayrım odağı kişi değil,
        çözülen problem ve yaratılan teknik etki.
      </PageHero>
      <ProjectsSection />
    </main>
  );
}
