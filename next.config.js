/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imgs.search.brave.com","media.graphassets.com","raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
