"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Experience } from "@/lib/content";

export function ExperienceItem({ exp }: { exp: Experience }) {
  const { t } = useLanguage();

  return (
    <article
      className="grid gap-5 border-t border-hair py-6 md:grid-cols-[180px_1fr] md:gap-8"
      data-reveal
    >
      <div className="flex flex-col gap-1">
        <span className="label-mono text-ink">{t(exp.period)}</span>
        <span className="label-mono">{exp.location}</span>
      </div>

      <div>
        <h3 className="font-display text-[clamp(24px,3vw,36px)] leading-none text-ink">
          {t(exp.role)}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mono">
          {t(exp.org)} · {t(exp.kind)}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-body">
              <span
                className="mt-[9px] h-[6px] w-[6px] flex-none bg-ink"
                aria-hidden="true"
              />
              <span>{t(bullet)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
