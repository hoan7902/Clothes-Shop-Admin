/** @type {import('next').NextConfig} */
const { parsed: envVars } = require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.lep.vn"],
  },
  env: {
    ...envVars,
  },
  server: {
    http2: {
      disabled: true,
    },
  },
};

module.exports = nextConfig;
