import { installLocale } from "./locale.js";
import { installHomepageGallery } from "./gallery.js";
import type { Locale } from "../../data/i18n";
import type { HomepageLocale } from "../../app/prototype/bs3p-homepage/i18n";

const dictionary = JSON.parse(document.querySelector("#homepage-translations")!.textContent!) as Record<Locale, HomepageLocale>;
const preferences = installLocale(dictionary);
installHomepageGallery(dictionary, preferences.getLocale);
