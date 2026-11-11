// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL  – full origin of the deployed site, e.g. https://vitstoeckl.github.io
// BASE_PATH – sub-path when hosted under a repo, e.g. /cv  (leave empty for a root domain)
// Both can come from the shell (GitHub Actions) or from a local .env file.
const env = { ...loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), ''), ...process.env };

const site = env.SITE_URL || 'http://localhost:4321';
const rawBase = (env.BASE_PATH || '/').trim();
const base = rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
const siteRoot = new URL(base.endsWith('/') ? base : `${base}/`, site).href;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Leave out the language redirect at `/` and the internal preview-card pages.
      filter: (page) => page !== siteRoot && !page.includes('/og-card/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', cs: 'cs', de: 'de', es: 'es', sk: 'sk' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
