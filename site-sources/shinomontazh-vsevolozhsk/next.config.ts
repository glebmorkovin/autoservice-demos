import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/autoservice-demos/shinomontazh-vsevolozhsk",
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
