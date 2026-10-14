import type { ApproachStep } from "../types";
import { escapeHtml } from "../html";

export function Approach(steps: readonly ApproachStep[]): string {
  return `<section id="approach" class="homepage-section homepage-approach" aria-labelledby="approach-title">
    <h2 id="approach-title">Çalışma yaklaşımımız</h2>
    <ol class="homepage-approach-list" role="list">${steps.map((step, index) => `<li>
      <span class="homepage-step-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <h3>${escapeHtml(step.title)}</h3><p>${escapeHtml(step.description)}</p>
    </li>`).join("")}</ol>
  </section>`;
}
