import type { NextConfig } from 'next';

// a static export: `next build` writes the whole site to out/
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
