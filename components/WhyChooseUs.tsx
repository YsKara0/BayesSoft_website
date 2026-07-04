import { CheckCircle2, LockKeyhole, Route, Workflow } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";

const reasons = [
  {
    title: "Tek ekip, tek mimari",
    text: "Backend, mobil uygulama, web panel ve entegrasyonları aynı teknik plan içinde geliştiririz.",
    icon: Workflow
  },
  {
    title: "Güvenlik baştan düşünülür",
    text: "JWT, RBAC, 2FA, audit log, rate limiting ve yedekleme kararlarını proje başında netleştiririz.",
    icon: LockKeyhole
  },
  {
    title: "Yol haritası görünürdür",
    text: "Keşif, prototip, geliştirme ve yayın aşamalarında kapsamı, riski ve çıktıyı açık tutarız.",
    icon: Route
  },
  {
    title: "Üretim sonrası destek",
    text: "Yayın sonrası performans, güvenlik ve yeni modül ihtiyaçlarını sürdürülebilir şekilde yönetiriz.",
    icon: CheckCircle2
  }
];

export function WhyChooseUs() {
  return (
    <section className="theme-section-secondary border-b-4 border-bayes-ink px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Neden BayesSoft" title="Kurumsal üründe güven, yalnızca iyi görünen arayüzden gelmez.">
          Kullanıcı deneyimini, veri güvenliğini, servis mimarisini ve yayın sonrası sürdürülebilirliği aynı masada çözeriz.
        </SectionIntro>

        <div className="grid gap-px border border-bayes-ink bg-bayes-ink md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article key={reason.title} className="group min-h-[300px] bg-bayes-paper p-7 transition duration-100 hover:bg-bayes-ink hover:text-bayes-paper">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-label text-xs font-semibold uppercase tracking-[0.18em] text-bayes-blue group-hover:text-bayes-mint">
                    0{index + 1}
                  </p>
                  <span className="flex size-12 items-center justify-center border border-current">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="font-display mt-10 text-3xl leading-tight">{reason.title}</h3>
                <p className="mt-5 leading-8 text-bayes-silver group-hover:text-bayes-aqua">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
