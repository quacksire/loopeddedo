/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Set-Cookie',
            value: `auth=Basic c2plZmZzMjQ6MTIwMzIwMDU=`,
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
