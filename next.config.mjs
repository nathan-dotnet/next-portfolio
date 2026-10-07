/** @type {import('next').NextConfig} */
const nextConfig = {
  // The 3D scene initialises imperatively on the client; StrictMode's double-mount is unnecessary here.
  reactStrictMode: false,
};
export default nextConfig;
