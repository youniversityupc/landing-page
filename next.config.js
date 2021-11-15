const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: JSON.parse(process.env.STATIC_CONTENT_DOMAIN || "[]"),
  },
  productionBrowserSourceMaps: process.env.PRODUCTION_SOURCE_MAPS === "true",
  redirects: async () => {
    return [
      {
        source: '/prototipo',
        destination: 'https://www.figma.com/proto/neNIFk5WvrKhnBHxqsryWo/Android-Application-Mock-ups',
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(config);
