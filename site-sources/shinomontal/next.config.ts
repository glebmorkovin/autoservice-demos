import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/autoservice-demos/shinomontal",
  output: "export",
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
