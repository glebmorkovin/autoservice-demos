export const dynamic = "force-static";

export function GET() {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const origin = "https://glebmorkovin.github.io/autoservice-demos/na-vzletnoy";
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /_next/",
    `Sitemap: ${origin}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
