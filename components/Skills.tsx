"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="habilidades" className="scroll-mt-24 py-8 sm:py-10">
      <SectionHeader
        index="02"
        label={content.sectionLabels.skills}
        title={content.sections.skills}
      />

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {content.skills.map((cat) => (
          <article
            key={cat.label.en}
            className="capability-card"
            data-reveal
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="label-mono text-accent">{cat.signal}</span>
                <h3 className="mt-3 font-sans text-[24px] font-semibold leading-none text-ink">
                  {t(cat.label)}
                </h3>
              </div>
              <span className="rounded-full border border-hair px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mono">
                {t(content.ui.stack)}
              </span>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-body">
              {t(cat.description)}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li key={item} className="tech-pill">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
