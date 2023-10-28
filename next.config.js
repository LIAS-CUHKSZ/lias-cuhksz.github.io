/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    // appDir: true,
  },
  images: {
    domains: ["flowbite.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
