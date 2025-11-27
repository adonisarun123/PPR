/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
    domains: ['images.unsplash.com']
  },
  compress: true,
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|js|css|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;


