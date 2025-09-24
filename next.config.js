// module.exports = {
//   output: "export",
//   trailingSlash: true,
//   images: {
//     unoptimized: true
//   },
//   experimental: {
//     appDir: true,
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/robert-portfolio",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;