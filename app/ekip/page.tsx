import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";

export default function TeamPage() {
  return (
    <main>
      <PageHero eyebrow="Ekip" title="BayesSoft ekibi, farklı uzmanlıkların aynı ürün disipliniyle birleşmesidir.">
        Backend, frontend, mobil, güvenlik ve yapay zeka alanlarında çalışan ekip üyeleri;
        projeleri fikirden üretime kadar birlikte taşır.
      </PageHero>
      <TeamSection />
    </main>
  );
}
