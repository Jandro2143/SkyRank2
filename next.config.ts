import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React strict mode
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/, // Add support for importing SVG files
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
