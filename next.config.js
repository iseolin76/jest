/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: ["localhost", "youtube.com", "*"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
