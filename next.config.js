const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
  buildExcludes: ["app-build-manifest.json"],
});

/** @type {import('next').NextConfig} */

module.exports = withPWA({
  reactStrictMode: true,
});

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// });

const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = withPWA(nextConfig);
