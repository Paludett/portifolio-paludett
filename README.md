# Lorenzo Paludett — Portfolio

(Projeto em adamento...)

Bilingual (PT/EN) editorial portfolio. Next.js App Router + TypeScript + Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx            fonts, providers, background grid, side labels
  page.tsx              home: Hero → Skills → Work → Journey → Contact
  projetos/page.tsx     full project list + "more on GitHub"
components/             Nav, SectionHeader, ProjectRow, ExperienceItem, LangToggle, ...
context/LanguageContext.tsx   PT/EN state, persisted to localStorage
lib/content.ts         all copy (PT + EN), typed — edit text here
```

## Editing content

All text lives in `lib/content.ts` as typed `{ pt, en }` objects. Add/change
projects, skills, experience there — no component edits needed.

## Notes

- Language toggle persists in `localStorage` (`lp-lang`), no i18n lib.
- Scroll reveal via IntersectionObserver on `[data-reveal]`; respects
  `prefers-reduced-motion`.
- Fonts via `next/font`: Instrument Serif, Space Mono, Familjen Grotesk.
- `BolãoTPM` link (`https://boltpm.vercel.app`) — CONFIRM before deploy.
