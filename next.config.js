/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    BEEHIIV_API_KEY: process.env.BEEHIIV_API_KEY,
  },
};

module.exports = nextConfig;
