/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.anvuong.com.vn",
      },
    ],
  },
};

export default nextConfig;
