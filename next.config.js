/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
}

module.exports = nextConfig
