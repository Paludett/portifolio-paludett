"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-hair py-10">
      <div className="flex items-center justify-between gap-4">
        <span className="label-mono">{content.footer.copyright}</span>
        <a href="#top" className="label-mono transition-colors hover:text-ink">
          {t(content.footer.top)}
        </a>
      </div>
    </footer>
  );
}
