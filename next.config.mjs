/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Weather-App',
  assetPrefix: '/Weather-App/',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
