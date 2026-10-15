import { installLocale } from "./locale.js";
import { installHomepageGallery } from "./gallery.js";
const dictionary = JSON.parse(document.querySelector("#homepage-translations").textContent);
const preferences = installLocale(dictionary);
installHomepageGallery(dictionary, preferences.getLocale);
