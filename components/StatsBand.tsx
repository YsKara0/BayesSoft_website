const stats = [
  { value: "09", label: "yayınlanmış ve araştırma odaklı proje" },
  { value: "05", label: "ürün, backend, mobil ve AI alanında ekip üyesi" },
  { value: "04", label: "temel uzmanlık alanı: web, mobil, AI, bulut" }
];

export function StatsBand() {
  return (
    <section className="texture-inverted bg-bayes-ink px-5 py-16 text-bayes-paper md:px-8">
      <div className="mx-auto grid max-w-7xl gap-px border border-bayes-paper/30 bg-bayes-paper/30 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-bayes-ink p-8">
            <p className="font-display text-6xl leading-none md:text-7xl">{stat.value}</p>
            <p className="font-label mt-5 max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-bayes-aqua">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
