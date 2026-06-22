"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em]"
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={
          lang === "pt"
            ? "text-ink transition-colors"
            : "text-mono hover:text-ink transition-colors"
        }
      >
        PT
      </button>
      <span className="text-mono/60" aria-hidden="true">
        ·
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={
          lang === "en"
            ? "text-ink transition-colors"
            : "text-mono hover:text-ink transition-colors"
        }
      >
        EN
      </button>
    </div>
  );
}
