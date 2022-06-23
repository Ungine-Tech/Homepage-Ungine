// @ts-check

/** @type {import("next").NextConfig}  */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    compress: true,
    experimental: {
        outputStandalone: process.env.NEXT_MODE === "docker",
    },
};

module.exports = nextConfig;
