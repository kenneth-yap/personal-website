/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personal-website' : '',
};

export default nextConfig;
