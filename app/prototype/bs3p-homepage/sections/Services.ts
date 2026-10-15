import { text } from "../copy";

export function Services(): string {
  return `<section id="services" class="homepage-section homepage-services homepage-band" aria-labelledby="services-title">
    ${text("services", "h2", 'id="services-title"')}
    <div class="homepage-service-grid">${(["web", "mobile", "ai", "custom"] as const).map(key => `<article class="homepage-service">${text(`${key}Title`, "h3")}${text(`${key}Body`, "p")}</article>`).join("")}</div>
  </section>`;
}
