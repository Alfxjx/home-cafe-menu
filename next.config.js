const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
  pwa: {
    dest: 'public',
  }
})

module.exports = nextConfig
