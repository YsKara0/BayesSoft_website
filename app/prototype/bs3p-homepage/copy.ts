import { escapeHtml } from "./html";
import { homepageTranslations, type CopyKey } from "./i18n";

export function copy(key: CopyKey): string { return escapeHtml(homepageTranslations.tr.text[key]); }
export function text(key: CopyKey, tag = "span", attributes = ""): string {
  return `<${tag} data-copy="${key}"${attributes ? ` ${attributes}` : ""}>${copy(key)}</${tag}>`;
}
