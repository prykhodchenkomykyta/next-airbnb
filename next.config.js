/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'localhost'],
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoia3VsdGlhcGthIiwiYSI6ImNsYm9hejNyaDA2MDQzcmp1MjkwZXZlNGMifQ.IDXhTtSYzW8GgH4gXIGy7w'
  }
};
