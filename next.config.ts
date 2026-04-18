import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    qualities: [75, 90],
  },
};

export default nextConfig;
