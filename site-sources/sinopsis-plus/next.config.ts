import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/autoservice-demos/sinopsis-plus",
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
