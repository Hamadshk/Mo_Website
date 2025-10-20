/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledJsx: true,
  },
  experimental: {
    // Disable Fast Refresh completely
    reactRefresh: false,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: /node_modules/,
        poll: false,
        aggregateTimeout: 300,
      }
      // Completely disable hot module replacement
      config.infrastructureLogging = {
        level: 'error',
      }
    }
    return config
  },
}

module.exports = nextConfig