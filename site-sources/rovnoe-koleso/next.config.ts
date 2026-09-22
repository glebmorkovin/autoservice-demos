import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/autoservice-demos/rovnoe-koleso",
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
