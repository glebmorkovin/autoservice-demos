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
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: " + origin + "/sitemap.xml",
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
