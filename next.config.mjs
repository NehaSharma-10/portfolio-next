/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.screenshotmachine.com',
                port: '',
                pathname: '/**',
            },
        ],
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    // Optimize build performance
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Reduce bundle size
    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    },
    // Enable compression
    compress: true,
    // Optimize production builds
    productionBrowserSourceMaps: false,
    // Reduce page data size
    poweredByHeader: false,
};

export default nextConfig;
