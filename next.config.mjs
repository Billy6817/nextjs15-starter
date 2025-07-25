/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    // Next.js 15 中 serverActions 的正确配置格式
    serverActions: {
      allowedOrigins: ['localhost:3000'],
    },
    // Turbopack 在 Next.js 15 中默认启用，无需手动配置
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // 开发时的优化配置
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // 开发环境优化
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
