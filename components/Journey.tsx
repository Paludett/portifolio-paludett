"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export function Journey() {
  const { t } = useLanguage();
  const { education } = content;

  return (
    <section id="trajetoria" className="scroll-mt-24 py-8 sm:py-10">
      <SectionHeader
        index="03"
        label={content.sectionLabels.journey}
        title={content.sections.journey}
      />

      <div className="mt-7">
        {content.experiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} />
        ))}

        {/* education card — same layout pattern */}
        <article
          className="grid gap-5 border-y border-hair py-6 md:grid-cols-[180px_1fr] md:gap-8"
          data-reveal
        >
          <div className="flex flex-col gap-1">
            <span className="label-mono text-ink">{education.data.period}</span>
            <span className="label-mono">{t(content.educationLabel)}</span>
          </div>
          <div>
            <h3 className="font-display text-[clamp(24px,3vw,36px)] leading-none text-ink">
              {t(education.data.course)}
            </h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mono">
              {education.data.org}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
