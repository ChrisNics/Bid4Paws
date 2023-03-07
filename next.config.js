const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['uploads.commoninja.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploads.commoninja.com',
        port: '',
        pathname: 'searchengine/wordpress/random-avatars-of-user.png'
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '*'
      }
    ]
  }
};

module.exports = nextConfig;
