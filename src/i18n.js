import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector) // Detects user language automatically
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",       // Default language
    interpolation: {
      escapeValue: false,    // React already escapes
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
