/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Add trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

