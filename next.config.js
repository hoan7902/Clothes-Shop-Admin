/** @type {import('next').NextConfig} */
const { parsed: localEnv } = require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.lep.vn"],
  },
  env: {
    SERVER_HOST: localEnv.SERVER_HOST,
  },
};

module.exports = nextConfig;
