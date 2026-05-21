/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ⚠️ Si el repo NO es username.github.io sino un repo de proyecto (ej: /portfolio),
  // descomenta y ajusta con el nombre exacto de tu repositorio:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
