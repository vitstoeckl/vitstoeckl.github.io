import type { APIRoute } from 'astro';

/** `robots.txt`: allow everything except the private stats page; point crawlers to the sitemap (respects BASE_PATH). */
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const sitemap = new URL(`${base}/sitemap-index.xml`, site);
  return new Response(`User-agent: *\nAllow: /\nDisallow: ${base}/admin\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
