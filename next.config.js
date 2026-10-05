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
    // Long-lived caching only for production builds, where asset URLs are hashed.
    // In dev, chunk URLs are not hashed and this would pin stale JS in the browser.
    if (process.env.NODE_ENV !== 'production') return [];
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


