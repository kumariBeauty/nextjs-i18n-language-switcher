"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/common.json";
import hi from "./public/locales/hi/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      hi: { translation: hi },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
