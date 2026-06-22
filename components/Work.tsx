"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { ProjectRow } from "./ProjectRow";

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="trabalhos" className="scroll-mt-24 py-8 sm:py-10">
      <SectionHeader
        index="01"
        label={content.sectionLabels.work}
        title={content.sections.work}
      />

      <div className="mt-7 grid gap-4">
        {content.projects.map((project, i) => (
          <div key={project.id} data-reveal>
            <ProjectRow project={project} index={i} />
          </div>
        ))}
      </div>

      <div className="mt-6" data-reveal>
        <Link href="/projetos" className="btn-outline">
          {t(content.allProjectsCta)}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
