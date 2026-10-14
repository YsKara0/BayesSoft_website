import type { SiteLink } from "./types";

const entities: Readonly<Record<string, string>> = {
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
};
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => entities[character]);
}
export function siteLink(link: SiteLink, className = "homepage-link"): string {
  return `<a class="${escapeHtml(className)}" href="${escapeHtml(link.href)}" data-site-locale="tr">${escapeHtml(link.label)}</a>`;
}
