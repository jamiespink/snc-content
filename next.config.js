/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'snc-content.headless-wordpress.com'],
  },
}

module.exports = nextConfig
