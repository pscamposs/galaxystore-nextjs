import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  env: {
    API_URL: "https://galaxybackend.onrender.com", //https://galaxybackend.onrender.com
    NEXTAUTH_SECRET: "c16de8254bfc5688cba0c54a1bcc67968b857a7f",
  },
};

export default nextConfig;
