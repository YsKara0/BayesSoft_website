import { adaptHomepageHero } from "./hero-adapter";
import { homepageTranslations } from "./i18n";

export function composeHomepage(heroDocument: string, sections: readonly string[], footer: string): string {
  // Reuse the complete approved document and its exact hero/source scripts.
  // Only page boundaries, metadata and new sibling sections are composed here.
  const replacements: readonly (readonly [string, string])[] = [
    ["<title>BayesSoft — Spatial Hero Plus</title>", "<title>BayesSoft — Ana Sayfa Prototipi</title>"],
    ["</head>", '<link rel="stylesheet" href="/prototype-assets/bs3p-homepage/homepage.css"><link rel="stylesheet" href="/prototype-assets/bs3p-homepage/polish.css">\n</head>'],
    ['href="#hero"', 'href="#main-content"'],
    ['<div class="study plus-shell">', '<div class="study plus-shell bs3p-homepage">'],
    ['<main id="hero">', '<main id="main-content"><section id="hero" class="homepage-hero" aria-label="BayesSoft Spatial Hero">'],
    ["</main>", `</section>\n${sections.join("\n")}\n</main>\n${footer}`],
    ["</body>", `<script type="application/json" id="homepage-translations">${JSON.stringify(homepageTranslations).replace(/</g, "\\u003c")}</script><script type="module" src="/prototype-assets/bs3p-homepage/entry.js"></script>\n</body>`],
  ];
  return replacements.reduce((html, [marker, replacement]) => {
    if (!html.includes(marker)) throw new Error(`Homepage: approved hero boundary changed: ${marker}`);
    return html.replace(marker, replacement);
  }, adaptHomepageHero(heroDocument));
}
