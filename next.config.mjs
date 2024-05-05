// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withPWA from "next-pwa";

const pwa = withPWA({
  dest: "public",
  sw: "service-worker.js",
});

export default pwa;
