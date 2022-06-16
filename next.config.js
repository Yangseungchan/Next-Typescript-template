const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

module.exports = withBundleAnalyzer({ nextConfig });
