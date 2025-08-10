import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://farooqqureshi.com';
  const currentDate = new Date().toISOString();

  // Define all pages with their metadata
  const pages = [
    { url: '/', lastmod: currentDate, changefreq: 'daily', priority: '1.0' },
    { url: '/projects', lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    { url: '/writing', lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    { url: '/artifacts', lastmod: currentDate, changefreq: 'weekly', priority: '0.7' },
    { url: '/links', lastmod: currentDate, changefreq: 'monthly', priority: '0.6' },
    { url: '/graph-view', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/sitemap', lastmod: currentDate, changefreq: 'monthly', priority: '0.4' },
    { url: '/other', lastmod: currentDate, changefreq: 'monthly', priority: '0.6' },
    { url: '/other/books', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/other/courses', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/other/images', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/other/music', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/other/pencils', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    { url: '/other/resources', lastmod: currentDate, changefreq: 'monthly', priority: '0.5' },
    // Writing articles
    { url: '/writing/writing-is-hard', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/choosing-what-to-study', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/build', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/beliefs', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/w25', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/7', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/f25', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/latin', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/reading', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/readmore', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
    { url: '/writing/substack', lastmod: currentDate, changefreq: 'yearly', priority: '0.7' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
