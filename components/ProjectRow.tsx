"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { content } from "@/lib/content";
import type { Project } from "@/lib/content";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {  
  const { t } = useLanguage();
  const idx = String(index + 1).padStart(2, "0");
  const links =
    project.links ??
    (project.href ? [{ label: content.ui.demo, href: project.href }] : []);
  const detailsLabel = t(content.ui.details);

  return (
    <article id={project.id} className="project-card scroll-mt-24">
      <div className="project-preview" aria-hidden="true">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-body">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
              {t(project.type)}
            </p>
            <p className="mt-2 font-mono text-[24px] font-bold leading-none text-ink">
              {project.name}
            </p>
          </div>
          <div className="mt-6 grid gap-2">
            {project.metrics.map((metric) => (
              <div key={metric} className="preview-line">
                <span>{metric}</span>
                <span />
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((item) => (
              <span key={item} className="preview-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-mono text-ink">({idx})</span>
          <span className="project-status">{t(project.status)}</span>
          <span className="label-mono">
            {project.year} / {t(project.type)}
          </span>
        </div>

        <h3 className="project-name mt-5">{project.name}</h3>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-body">
          {t(project.description)}
        </p>

        <p className="mt-4 max-w-2xl border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-ink">
          {t(project.impact)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/projetos#${project.id}`} className="btn-outline">
            {detailsLabel}
            <span aria-hidden="true">→</span>
          </Link>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink"
            >
              {t(link.label)}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
