# Vít Stöckl — CV website

Personal CV and portfolio, live at **https://vitstoeckl.github.io/** in English, Czech, German, Spanish and Slovak.
Built with Astro + Tailwind CSS; every push to `main` rebuilds and redeploys it through GitHub Actions.

## Editing content

All text lives in `src/data/` (CV content) and `src/i18n/ui.ts` (buttons, labels). Change a file, push, and the site,
the PDF CVs and the link-preview images update by themselves.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Full build: site + PDF CVs (`dist/cv/`) + preview images (`dist/og/`). Needs Google Chrome installed |
| `npm run check` | Type check |
| `npm run admin:vault` | Lock the Umami share link with your admin passphrase (see below) |

## Settings

Set these as **GitHub → repo Settings → Secrets and variables → Actions → Variables** (or in a local `.env`, see `.env.example`):

| Variable | Purpose |
|---|---|
| `PUBLIC_UMAMI_WEBSITE_ID` | Turns on visitor statistics (Umami Cloud) |
| `PUBLIC_ADMIN_VAULT` | Encrypted Umami share link for `/admin` |
| `PUBLIC_FORMSPREE_ENDPOINT` | Sends the contact form through Formspree instead of the visitor's email app |

## Visitor statistics

Stats are collected by [Umami Cloud](https://cloud.umami.is) — no cookies, so no consent banner is needed.
Only real visits on `vitstoeckl.github.io` count; local testing never does.

**Where to look**

- **Quick view:** open `https://vitstoeckl.github.io/admin/` (not linked anywhere) and enter your passphrase.
- **Everything:** log in at [cloud.umami.is](https://cloud.umami.is).

**What you see:** visitors and page views, countries and cities, where people came from (e.g. `linkedin.com`),
devices and browsers, and these events:

| Event | When |
|---|---|
| `cv-download` | A PDF CV is downloaded (with `lang`) |
| `contact-submit` | The contact form is sent (`via`: `formspree` or `email-app`) |
| `email-click`, `linkedin-click`, `github-click` | A contact link is clicked |
| `project-open` | A project page is opened from a link (with `project`) |
| `certificate-verify` | A certificate's "Verify" link is clicked (with `certificate`) |
| `language-switch` | The language is changed (`from` → `to`) |

In Umami, open the website → **Events**, and click an event to see its details (e.g. which language CVs are downloaded).

**Not counting yourself:** on `/admin`, switch on **Don't count my visits** once in every browser and on every phone you use.

**Good to know:** the stats show *where* visitors are and *what* they did, never *who* they are — not names, not companies.
The `/admin` passphrase keeps casual visitors out; the share link it unlocks is read-only, and your full dashboard
always needs your Umami login.

**Setting up `/admin`** (once, or when you change the passphrase):

1. Umami → Settings → Websites → your site → **Share URL** → turn on, copy the link.
2. Run `npm run admin:vault`, paste the link, choose a passphrase (10+ characters).
3. Save the printed value as the GitHub variable `PUBLIC_ADMIN_VAULT`, then re-run the deploy (Actions → Deploy → Run workflow).
