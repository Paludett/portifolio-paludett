"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const { t } = useLanguage();
  const { contact } = content;

  return (
    <section id="contato" className="scroll-mt-24 py-8 sm:py-10">
      <SectionHeader
        index="04"
        label={content.sectionLabels.contact}
        title={content.sections.contact}
      />

      <div className="mt-7" data-reveal>
        <p className="max-w-xl font-sans text-[clamp(16px,1.7vw,19px)] leading-relaxed text-body">
          {t(contact.intro)}
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-6 inline-block font-display text-[clamp(24px,4.2vw,50px)] leading-none text-ink transition-opacity hover:opacity-70"
        >
          {contact.email}
        </a>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
