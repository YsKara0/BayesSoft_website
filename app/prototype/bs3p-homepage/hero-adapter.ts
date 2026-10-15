import { Header } from "./sections/Header";
import { SPATIAL_FACES } from "../spatial-hero/faces";
import { homepageTranslations } from "./i18n";

// Adapt presentation in this document; never change the source prism or scene.
export function adaptHomepageHero(document: string): string {
  const wordmark = document.match(/<a class="wordmark"[\s\S]*?<\/a>/)?.[0];
  if (!wordmark) throw new Error("Homepage: missing source wordmark.");
  let html = document.replace(/<header class="prototype-header integrated-header">[\s\S]*?<\/header>/, Header(wordmark));
  let index = 0;
  html = html.replace(/<p class="face-heading">[\s\S]*?<\/p>/g, () => {
    const key = `hero${index++}` as "hero0" | "hero1" | "hero2" | "hero3";
    return `<p class="face-heading" data-hero-copy="${key}">${homepageTranslations.tr.text[key].replace(/\n/g, "<br>")}</p>`;
  });
  SPATIAL_FACES.forEach(({ text }, face) => {
    html = html.replace(`class="sr-only">${text}<`, `class="sr-only" data-hero-accessible="hero${face}">${text}<`);
  });
  const messages = JSON.stringify(SPATIAL_FACES.map(face => face.text));
  if (!html.includes(messages)) throw new Error("Homepage: prism message contract changed.");
  return html.replace(messages, `(window.__bs3pMessages=${messages})`);
}
