import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
      {
        protocol: "https",
        hostname: "ulaman.cdn.prismic.io",
      },
      {
        protocol: "https",
        hostname: "ulamanbali.com",
      },
    ],
  },
};

export default nextConfig;
