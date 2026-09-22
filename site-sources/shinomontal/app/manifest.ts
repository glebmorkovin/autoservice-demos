import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ШиноМонталь",
    short_name: "ШиноМонталь",
    description: "Шиномонтаж и автосервис в Кудрово",
    start_url: "/autoservice-demos/shinomontal/",
    display: "standalone",
    background_color: "#f2efe7",
    theme_color: "#d93227",
    lang: "ru",
    icons: [
      {
        src: "/autoservice-demos/shinomontal/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
