export const dynamic = "force-static";

export async function GET(request: Request) {
  const origin = "https://glebmorkovin.github.io/autoservice-demos/shinomontazh-vsevolozhsk";
  const body = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
