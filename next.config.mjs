/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
};

export default nextConfig;
