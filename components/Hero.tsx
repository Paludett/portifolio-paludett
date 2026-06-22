"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  const { hero } = content;

  return (
    <section className="grid gap-8 pt-10 pb-10 sm:pt-12 sm:pb-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
      <div>
        <p className="label-mono text-accent">
          {hero.firstName} {hero.lastName}
        </p>

        <h1 className="hero-name mt-5">{t(hero.role)}</h1>

        <p className="mt-8 max-w-2xl font-sans text-[clamp(17px,1.7vw,20px)] leading-relaxed text-body">
          {t(hero.about)}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {hero.meta.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#trabalhos" className="btn-ink">
            {t(hero.status.cta)}
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href={content.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="dev-panel" aria-label="Developer profile summary">
        <div className="border-b border-hair px-5 py-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mono">
            {hero.panel.path}
          </span>
        </div>

        <div className="space-y-3 p-5 font-mono text-[12px] leading-relaxed">
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-ink">{hero.panel.command}</span>
          </p>
          {hero.panel.lines.map((line) => (
            <p key={line.en} className="text-body">
              {t(line)}
            </p>
          ))}
        </div>

        <dl className="grid border-t border-hair sm:grid-cols-3">
          {hero.stats.map((stat) => (
            <div key={stat.value} className="border-hair p-5 sm:border-r last:border-r-0">
              <dt className="font-mono text-[22px] font-bold leading-none text-ink">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[12px] leading-snug text-body">{t(stat.label)}</dd>
            </div>
          ))}
        </dl>

        <dl className="border-t border-hair px-5 py-2">
          {hero.status.fields.map((field) => (
            <div
              key={field.label.en}
              className="flex items-baseline justify-between gap-6 border-b border-hair py-3 last:border-b-0"
            >
              <dt className="label-mono">{t(field.label)}</dt>
              <dd className="text-right font-sans text-[15px] text-ink">
                {t(field.value)}
              </dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
