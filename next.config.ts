import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    // Next.js will auto-convert to these formats when the browser supports them
    formats: ["image/avif", "image/webp"],
    // Optimized device width breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    // Smaller image widths for the `sizes` prop
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Reduce quality slightly for faster loads (default is 75)
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache optimized images for 30 days
  },
  // Enable gzip/brotli compression
  compress: true,
  // Improve production performance
  reactStrictMode: true,
  // PoweredBy header removal (minor security/perf)
  poweredByHeader: false,
};

export default nextConfig;
