import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "axvpvthrjz64.compat.objectstorage.me-jeddah-1.oraclecloud.com",
        port: "",
        pathname: "/maaden-website-assets/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
