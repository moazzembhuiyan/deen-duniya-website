import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from other devices on the LAN (e.g. http://10.10.28.227:3000).
  // Without this, Next.js blocks its dev JS from that origin, React never hydrates,
  // and every framer-motion element stays at opacity: 0 (blank page).
  allowedDevOrigins: ["10.10.28.227"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 100],
  },
};

export default nextConfig;
