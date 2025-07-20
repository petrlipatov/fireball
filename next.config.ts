import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  webpack(config, { dev }) {
    if (dev) {
      config.watchOptions = {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: ["node_modules/**", ".git/**", ".next/**", "public/audio/**"],
      };
    }

    return config;
  },
};

export default nextConfig;
