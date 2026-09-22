export const dynamic = "force-static";

export function GET() {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const origin = "https://glebmorkovin.github.io/autoservice-demos/na-vzletnoy";
  const lastModified = new Date().toISOString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${origin}/</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
