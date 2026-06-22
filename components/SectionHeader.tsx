"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Localized } from "@/lib/content";

interface SectionHeaderProps {
  index: string;
  label: Localized;
  title: Localized;
  id?: string;
}

export function SectionHeader({ index, label, title, id }: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <header id={id} className="scroll-mt-24" data-reveal>
      <div className="flex items-center gap-4">
        <span className="label-mono text-ink">({index})</span>
        <span className="h-px flex-1 bg-[var(--hair)]" aria-hidden="true" />
        <span className="label-mono">{t(label)}</span>
      </div>
      <h2 className="section-title mt-7">{t(title)}</h2>
    </header>
  );
}
