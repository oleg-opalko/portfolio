import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: false, // `false` = 302 (тимчасовий редирект), `true` = 301 (постійний)
      },
    ];
  },
};

export default withMDX(nextConfig);
