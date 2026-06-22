"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectRow } from "@/components/ProjectRow";

export function ProjectsView() {
  const { t } = useLanguage();
  const { projectsPage } = content;

  return (
    <div className="py-8 sm:py-10">
      {/* header with back */}
      <Link
        href="/"
        className="label-mono inline-flex items-center gap-2 transition-colors hover:text-ink"
      >
        <span aria-hidden="true">←</span>
        {t(projectsPage.back)}
      </Link>

      <h1 className="section-title mt-8">{t(projectsPage.title)}</h1>
      <p className="mt-6 max-w-xl font-sans text-[clamp(16px,1.7vw,19px)] leading-relaxed text-body">
        {t(projectsPage.intro)}
      </p>

      <div className="mt-7 grid gap-4">
        {content.projects.map((project, i) => (
          <div key={project.id} data-reveal>
            <ProjectRow project={project} index={i} />
          </div>
        ))}

        <a
          href={projectsPage.moreCard.href}
          target="_blank"
          rel="noopener noreferrer"
          className="github-card group"
          data-reveal
        >
          <span className="label-mono text-accent">
            {t(projectsPage.moreCard.label)}
          </span>
          <h3 className="project-name">{t(projectsPage.moreCard.title)}</h3>
          <span className="btn-ink w-fit">
            {t(projectsPage.moreCard.cta)} ↗
          </span>
        </a>
      </div>
    </div>
  );
}
