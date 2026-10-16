import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    const imageCacheHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=2592000, stale-while-revalidate=604800",
      },
    ];

    return [
      {
        source: "/assets/:path*",
        headers: imageCacheHeaders,
      },
      {
        source: "/service-img/:path*",
        headers: imageCacheHeaders,
      },
      {
        source: "/action/:path*",
        headers: imageCacheHeaders,
      },
    ];
  },
};

export default nextConfig;