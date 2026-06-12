/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000, // cache optimized images up to 1 year
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
    qualities: [75],
    remotePatterns: [
      { protocol: 'https', hostname: 'flowbite.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
