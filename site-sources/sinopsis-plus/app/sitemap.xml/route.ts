export const dynamic = "force-static";

function publicOrigin(request: Request) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;

  if (configured) {
    try {
      return configured.replace(/\/$/, "");
    } catch {
      // Fall through to the active request origin.
    }
  }

  return "https://glebmorkovin.github.io/autoservice-demos/sinopsis-plus";
}

export function GET(request: Request) {
  const origin = publicOrigin(request);
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    "<url><loc>" +
    origin +
    "/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>" +
    "</urlset>";

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
