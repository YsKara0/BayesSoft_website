import { CallToAction } from "@/components/CallToAction";
import { PageHero } from "@/components/PageHero";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesOverview } from "@/components/ServicesOverview";

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Hizmetler" title="Kurumsal ürünleri uçtan uca tasarlayan yazılım hizmetleri.">
        Web panellerinden mobil uygulamalara, yapay zeka entegrasyonlarından bulut altyapısına
        kadar ürünün ihtiyacı olan parçaları aynı sistem içinde kuruyoruz.
      </PageHero>
      <ServicesOverview compact />
      <ProcessSection />
      <CallToAction />
    </main>
  );
}
