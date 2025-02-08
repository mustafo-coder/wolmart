/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d-themes.com",
      },
    ],
  },
};

export default nextConfig;
