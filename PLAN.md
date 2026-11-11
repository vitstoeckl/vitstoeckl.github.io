# CV Website — Build Plan

Personal CV / portfolio website for **Vít Stöckl**, a finance & technology student looking for a job in fintech, finance or tech.
Each step below is meant to be done in **its own session**, in order. Every step lists what to build and when it counts as done. Tick the box when a step is finished.

---

## Decisions already made (don't re-ask)

| Topic | Decision |
|---|---|
| Design | **03 Bento** from Figma: [CV Website – Design Directions](https://www.figma.com/design/3REB5g4Hu6i8hLyDVK2Uxg) (Bento frame = node `2:202`) |
| Look | Light tile grid, rounded tiles (28px), font **Manrope**, background `#EFEEEA`, tiles `#FFFFFF`, ink `#111111`, muted `#6E6E73`, accent emerald `#0E7C66`, accent-soft `#DCEFE9`, dark tile `#141414` |
| Languages | **EN** (default), **CZ**, **DE**, **ES**, **SK** |
| Sections | All: Hero, About, Key numbers, Experience, Education, Skills, Languages, Projects, **Services**, Certificates, Achievements & extracurriculars, Testimonials, Contact |
| Goal | **Part-time job** in fintech / finance / tech **+ freelance** websites & Claude AI automations |
| Name | **Vít Stöckl** (LinkedIn uses "Stoeckl"; the site uses Stöckl; file names use ASCII `Vit-Stockl`) |
| Stack | **Astro** + **Tailwind CSS v4**, self-hosted Manrope (`@fontsource-variable/manrope`) |
| Content | Plain data files in `src/data/` — editing them updates the site and the PDF |
| PDF CV | Generated automatically from the same data, one PDF per language |
| Hosting | **GitHub Pages**, auto-deploy via GitHub Actions |
| Analytics | **Umami Cloud** (free, no cookies → no consent banner needed under GDPR) + a hidden `/admin` stats page on the site |
| Who builds | Claude does everything; the user supplies content |

---

## Target folder structure

```
CV/
├─ PLAN.md                     ← this file
├─ content-inbox/              ← user drops LinkedIn PDF, photo, certificates here
├─ public/
│  ├─ images/                  ← photo, project screenshots
│  ├─ certificates/            ← certificate PDFs / images
│  └─ favicon.svg
├─ scripts/
│  └─ generate-pdf.mjs         ← builds PDF CVs after `astro build`
├─ src/
│  ├─ data/                    ← profile, experience, education, projects, certificates, achievements, testimonials, skills
│  ├─ i18n/                    ← UI texts in 5 languages + helpers
│  ├─ components/              ← Tile, Chip, Button, Nav, LangSwitcher, ThemeToggle, sections…
│  ├─ layouts/BaseLayout.astro
│  ├─ styles/global.css        ← design tokens (light + dark)
│  └─ pages/
│     ├─ index.astro           ← redirects to visitor's language
│     └─ [lang]/
│        ├─ index.astro        ← the main one-page CV
│        ├─ cv.astro           ← print layout used for the PDF
│     ├─ admin.astro           ← hidden analytics page (noindex)
│        └─ projects/[slug].astro  ← project case-study pages
├─ .github/workflows/deploy.yml
└─ astro.config.mjs
```

---

## Step 1 — Project setup  ☑

**Goal:** an empty Astro site that runs locally with the Bento design tokens.

- Clean up the leftovers of an interrupted install (`node_modules/`, default `package.json`) and start fresh.
- Create an Astro project (TypeScript, strict) with npm. Add Tailwind CSS v4 via `@tailwindcss/vite`, and `@fontsource-variable/manrope`.
- `src/styles/global.css`: color tokens as CSS variables for **light and dark** mode (dark class on `<html>`), mapped into Tailwind `@theme`; base typography (Manrope, tight letter-spacing on headings).
- `BaseLayout.astro`: `<html lang>`, meta tags, favicon, theme script (reads saved choice or system preference, no flash).
- `astro.config.mjs`: `site` and `base` read from env vars so GitHub Pages works with or without a repo sub-path. Internal links go through a `url()` helper that respects `base`.
- `.gitignore`, `git init`, first commit.
- `.claude/launch.json` with a `dev` configuration (port 4321) so the site can be previewed in the app's browser.

**Done when:** `npm run dev` shows a test page with a Bento-styled tile in the right font and colors, and the light/dark switch works.

---

## Step 2 — Content model + placeholder data  ☑

**Goal:** all site content lives in typed data files, filled with realistic placeholders.

- `src/i18n/ui.ts`: every UI label (nav, section titles, buttons, form labels, "Open to work", etc.) in EN / CZ / DE / ES / SK.
- `src/i18n/utils.ts`: `languages` list, `t(key, lang)`, `pick(localizedField, lang)` with fallback to EN, date formatting per language.
- `src/data/` (TypeScript, typed): 
  - `profile.ts` – name, title, headline, summary, status badge, location, email, socials (LinkedIn, GitHub), photo path, CV file names
  - `experience.ts` – role, company, location, dates, 2–3 achievement bullets with numbers
  - `education.ts` – school, degree, field, dates, relevant courses, thesis, GPA (optional)
  - `skills.ts` – grouped (Finance, Data & Code, Tools, Soft skills) + highlighted ones
  - `languages.ts` – language + CEFR level
  - `projects.ts` – slug, category (finance / data / web), title, summary, problem / solution / result, KPI, tags, year, links, images, `featured`
  - `certificates.ts` – name, issuer, date, verify URL, file, category
  - `achievements.ts` – awards, competitions, clubs, volunteering
  - `testimonials.ts` – quote, name, role
  - `services.ts` – freelance offers (websites; AI automation with Claude): title, short description, what's included, CTA
- Text fields that need translating use a `{ en, cs, de, es, sk }` shape.
- **Use the real content from `content-inbox/linkedin-profile.md` wherever it exists** (profile, summary, experience, education, languages, certificates). Use placeholders only for the gaps (projects, achievements, testimonials, missing dates or links), written in all 5 languages and clearly marked `// PLACEHOLDER`.
- Create the empty `content-inbox/` folder with a short README telling the user what to drop there.

**Done when:** the data type-checks (`npx astro check`) and a test page can print values in any of the 5 languages.

---

## Step 3 — Core components + Hero  ☑

**Goal:** the top of the page looks like the Figma Bento design.

- Reusable components: `Tile` (sizes, light / dark / accent variants), `Chip`, `Button` (primary / secondary / icon), `SectionHeader`, `Badge`.
- `Nav`: name on the left, pill menu in the middle (scrolls to sections, highlights the current one), language switcher + theme toggle + "Download CV" on the right; turns into a compact menu on mobile.
- `LangSwitcher`: keeps the visitor on the same section/page when switching language.
- Hero row: intro tile (status badge, headline, summary, CTA buttons, social links) + photo tile (real photo if present, otherwise a soft gradient with initials and a name card).
- `src/pages/[lang]/index.astro` with `getStaticPaths` for all 5 languages; `src/pages/index.astro` sends visitors to their browser language (fallback EN).

**Done when:** `/en/`, `/cs/`, `/de/`, `/es/`, `/sk/` show the nav and hero matching the Figma frame, on desktop and on a phone-width screen.

---

## Step 4 — All remaining sections  ☑

**Goal:** the full one-page CV.

- **Key numbers row:** dark stat tile (projects, certificates, languages — counted from data), Languages tile (chips with levels), Skills tile (grouped chips, highlights in emerald).
- **Experience:** timeline tiles, newest first, achievements as bullets.
- **Education:** tiles with degree, school, dates, courses.
- **Projects:** featured project as a large tile + grid; filter chips (All / Finance / Data / Web) that work without reloading; each card links to its detail page.
- **Certificates:** grid of tiles with initial/logo, issuer, date, "Verify ↗" and "View" links.
- **Achievements & extracurriculars:** tiles.
- **Services ("Work with me"):** two tiles (Websites · AI automation with Claude) with a short pitch, Amorby and this site as proof, and a "Have a project? Let's talk" button to Contact.
- **Testimonials:** quote tiles (hidden if there are none).
- **Contact:** large dark tile with email, LinkedIn, GitHub and a contact form (Formspree endpoint from config; if not set yet, the form falls back to opening an email).
- **Footer:** © year, language links, "Last updated" date.
- Subtle reveal-on-scroll animation (switched off for users who prefer reduced motion).

**Done when:** every section renders from data in all 5 languages, nothing overflows on mobile, and dark mode looks right everywhere.

---

## Step 5 — Project detail pages + print CV page  ☑

**Goal:** deeper pages for projects, and a clean print layout for the PDF.

- `src/pages/[lang]/projects/[slug].astro`: hero with title, KPI, tags, links; sections Problem → Solution → Result; screenshot gallery; "Next project" link; back to the main page.
- `src/pages/[lang]/cv.astro`: one-to-two-page A4 layout (no nav, print CSS) — header with contact info, summary, experience, education, skills, languages, certificates, selected projects. Uses the same data.

**Done when:** every project has a working page in all 5 languages, and printing `/en/cv/` from the browser gives a tidy A4 CV.

---

## Step 6 — SEO, PDF generation, deployment  ☑

Live at **https://vitstoeckl.github.io/** (repo `vitstoeckl/vitstoeckl.github.io`, public). Every push to `main` redeploys.

**Goal:** the site is shareable, findable, and published automatically.

- SEO: page titles and descriptions per language, `hreflang` alternates, canonical URLs, Open Graph / LinkedIn preview image (generated 1200×630 card in Bento style), `sitemap.xml`, `robots.txt`, JSON-LD `Person` data.
- `scripts/generate-pdf.mjs`: after `astro build`, serve `dist/` locally, open each `/{lang}/cv/` with Playwright (`playwright-core`, system Chrome) and save `dist/cv/Vit-Stockl-CV-{lang}.pdf`. `npm run build` runs both.
- "Download CV" buttons link to the PDF for the current language.
- `.github/workflows/deploy.yml`: build on push to `main`, deploy to GitHub Pages (official Pages actions, sets `base` automatically).
- Create the GitHub repo with `gh` (after the user confirms the name and that it may be public), push, and enable Pages.
- Optional, after asking: Formspree account for the contact form, custom domain.

**Done when:** the live GitHub Pages URL works in all 5 languages and each PDF downloads correctly.

---

## Step 7 — Analytics + admin page  ☐  *(needs a free Umami account)*

**Goal:** see who visits the site and what they do, on a private admin page.

The site is static (GitHub Pages has no server), so the stats are collected and stored by **Umami Cloud**, and the admin page shows them.

**User does first** (Claude can't create accounts): sign up at umami.is → *Umami Cloud* (free Hobby plan) → add the website → copy the **Website ID**. Later also turn on a **Share URL** for the website (Settings → Share URL).

Then:
- Add the Umami tracking script (ID in config / env var) to `BaseLayout.astro`. Turned off in local dev, so testing doesn't count as visits.
- **Custom events** for the things that matter on a CV site:
  - `cv-download` (with language)
  - `contact-submit`, `email-click`, `linkedin-click`, `github-click`
  - `project-open` (which project), `certificate-verify` (which certificate)
  - `language-switch` (from → to)
- `/admin` page:
  - not linked anywhere, `noindex`, excluded from the sitemap and `robots.txt`
  - embeds the Umami **shared dashboard** (visitors, page views, countries, referrers like linkedin.com, devices, events) + a button to the full Umami login dashboard
  - light gate: asks for a passphrase before showing anything (stored only as a hash; keeps casual visitors out)
  - "Don't count my visits" switch that sets Umami's ignore flag in your browser, so your own visits don't skew the numbers
- Short note in the README on reading the stats.

**Good to know:**
- The `/admin` gate isn't real security, because a static site can't hide data. The real protection is that the share link is long and random and read-only. Your full dashboard always needs your Umami login.
- Privacy-friendly analytics show **country, city, referrer, device, browser and what people clicked**, but **not names or companies**. Seeing "visitor from linkedin.com in Frankfurt downloaded the German CV" is possible; "Deutsche Bank looked at my CV" is not.

**Done when:** a visit and a CV download from a phone show up on `/admin` within a minute, and your own visits are excluded.

---

## Step 8 — Real content  ☐  *(needs the user's files)*

**Goal:** replace every placeholder with real information.

The user puts into `content-inbox/`:
- LinkedIn profile PDF (LinkedIn → profile → **More → Save to PDF**)
- Headshot photo
- Certificate files (PDF / images) and verify links
- Project details: screenshots, GitHub / demo links, 1–2 lines about the result of each
- Optional: grades/GPA, testimonial quotes, GitHub username, preferred email

Then:
- Extract the content, write it into `src/data/` in English, translate it into CZ / DE / ES / SK.
- Optimise and place the images; copy certificates to `public/certificates/`.
- Remove every `// PLACEHOLDER` marker; list anything still missing for the user.

**Done when:** no placeholder text is left, and the user has reviewed the English version.

---

## Step 9 — Final review & launch  ☐

**Goal:** polish and go live.

- Check every page in all languages on desktop and phone, in light and dark mode.
- Lighthouse audit (performance, accessibility, SEO ≥ 95), fix issues.
- Proofread translations (the user checks CZ / SK; Claude double-checks DE / ES).
- Final deploy; add the site link to the LinkedIn profile and to the PDF CV.

**Done when:** the user approves the live site.
