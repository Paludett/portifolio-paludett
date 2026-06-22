"use client";

import { content } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";
import { LangToggle } from "./LangToggle";
import { Wordmark } from "./Wordmark";

export function Nav({ showLinks = true }: { showLinks?: boolean }) {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-hair bg-paper/80 backdrop-blur-md">
      <nav className="container-x flex h-[64px] items-center justify-between gap-6">
        <Wordmark />

        <div className="flex items-center gap-6 md:gap-9">
          {showLinks && (
            <ul className="hidden items-center gap-7 md:flex">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="label-mono transition-colors hover:text-ink"
                  >
                    {t(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}
