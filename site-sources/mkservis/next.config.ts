import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/autoservice-demos/mkservis",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
