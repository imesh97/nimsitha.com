import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/**",
      },
    ],
  },
};

const withNextra = nextra({
  contentDirBasePath: "/blog",
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
