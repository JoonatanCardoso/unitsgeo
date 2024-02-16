/** @type {import('next').NextConfig} */
const nextConfig = {output: 'export', distDir: 'build', images: {
    loader: 'custom',
    loaderFile: './images-loader.js',
  }};

export default nextConfig;
