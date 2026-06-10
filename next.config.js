/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/airpods-pro-clone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.apple.com.cn',
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;