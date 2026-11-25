import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./lib/foto-path.mjs";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Solo frame-ancestors: una CSP completa rompería scripts inline de Next y el mapa embebido
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    viewTransition: true,
  },
  images: {
    // Fotos ya preparadas en public/fotos (scripts/preparar-fotos.mjs): Vercel no procesa imágenes
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      // Direcciones de la web antigua que Google todavía conserva
      { source: "/productos", destination: "/catalogo", permanent: true },
      { source: "/productos/:id", destination: "/catalogo/:id", permanent: true },
      { source: "/politica-privacidad", destination: "/privacidad", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/fotos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
