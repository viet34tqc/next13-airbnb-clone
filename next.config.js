/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
});

module.exports = withBundleAnalyzer(nextConfig);
