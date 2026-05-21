import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: '/images/**' }],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
