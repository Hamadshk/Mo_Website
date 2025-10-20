/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledJsx: true,
  },
  // Disable Fast Refresh to prevent continuous reloading
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: false,
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig