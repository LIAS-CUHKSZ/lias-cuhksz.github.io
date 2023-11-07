/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    // appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ["flowbite.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
