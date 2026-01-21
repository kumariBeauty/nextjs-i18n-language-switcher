"use client";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app-card">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>

      <div className="language-buttons">
        <button
          className={i18n.language === "en" ? "active" : ""}
          onClick={() => i18n.changeLanguage("en")}
        >
          English 🇺🇸
        </button>

        <button
          className={i18n.language === "hi" ? "active" : ""}
          onClick={() => i18n.changeLanguage("hi")}
        >
          Hindi 🇮🇳
        </button>
      </div>
    </div>
  );
}
