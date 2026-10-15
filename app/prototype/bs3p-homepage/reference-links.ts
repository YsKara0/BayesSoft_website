import type { ClientReference } from "@/data/references";

// Brand sites checked on 2026-10-14; provenance is recorded in BS3P-010.
// New or changed source URLs stay unlinked until they have been verified.
const verifiedWebsites: ReadonlySet<string> = new Set([
  "https://www.tamfinans.com.tr/",
  "https://metekmakina.com/",
  "https://reviel.com.tr/",
  "https://drive.further-up.net/",
  "https://www.arel.edu.tr/",
  "https://atlidepohizmetleri.com/",
  "https://kanunieah.saglik.gov.tr/",
  "https://www.teskilat.com.tr/",
  "https://hypersense.dev/",
  "https://esenyurtzirvecilingir.com/",
]);

export function referenceWebsite(logo: ClientReference): string | undefined {
  return logo.website && verifiedWebsites.has(logo.website) ? logo.website : undefined;
}
