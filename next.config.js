/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'https://snc-content.headless-wordpress.com'],
  },
}

module.exports = nextConfig
