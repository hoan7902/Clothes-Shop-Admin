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
};

module.exports = nextConfig;
