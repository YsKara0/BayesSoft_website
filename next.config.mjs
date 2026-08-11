import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next-build",
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: __dirname
};

export default nextConfig;
