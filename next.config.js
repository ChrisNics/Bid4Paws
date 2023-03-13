const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['uploads.commoninja.com', 'res.cloudinary.com', 'images.pexels.com', 'randomuser.me'],
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
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '*'
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '*'
      }
    ]
  }
};

module.exports = nextConfig;
