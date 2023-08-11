/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
  },
  typeScript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
