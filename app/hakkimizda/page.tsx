import { PageHero } from "@/components/PageHero";
import { StatsBand } from "@/components/StatsBand";

const principles = [
  {
    title: "Mimari önce gelir",
    text: "Ürün hızını yalnızca arayüzle değil; doğru veri modeli, güvenli yetkilendirme ve temiz servis sınırlarıyla kurarız."
  },
  {
    title: "Arayüz üretimin parçasıdır",
    text: "Yönetim panelleri, mobil deneyimler ve müşteri ekranları tasarım sonrası eklenen yüzeyler değil; ürün mimarisinin görünen tarafıdır."
  },
  {
    title: "Güvenlik varsayılan davranıştır",
    text: "JWT, RBAC, 2FA, rate limiting, audit log ve yedekleme gibi kararları proje ihtiyacına göre erken aşamada planlarız."
  }
];

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="Kurumsal" title="BayesSoft, uygulanabilir teknoloji kararları üreten bir yazılım ekibidir.">
        Kurumsal ihtiyaçları ürün mantığıyla ele alır; backend, mobil, web panel, yapay zeka ve
        bulut katmanlarını aynı mühendislik bütünlüğü içinde geliştiririz.
      </PageHero>

      <section className="theme-section-primary border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue">
              Yaklaşım
            </p>
            <h2 className="font-display mt-5 text-4xl leading-[1.06] text-bayes-ink md:text-6xl">
              Küçük ve odaklı bir ekip, büyük sistem ciddiyetiyle çalışır.
            </h2>
          </div>
          <div className="grid gap-px border border-bayes-ink bg-bayes-ink">
            {principles.map((principle, index) => (
              <article key={principle.title} className="bg-bayes-paper p-7">
                <p className="font-label text-xs font-semibold uppercase tracking-[0.16em] text-bayes-blue">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-5 text-3xl text-bayes-ink">{principle.title}</h3>
                <p className="mt-4 leading-8 text-bayes-silver">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />
    </main>
  );
}
