/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // hasil build statis di folder /out
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
