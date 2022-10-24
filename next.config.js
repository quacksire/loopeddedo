/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          //1593846838236
          {
            key: "Set-Cookie",
            value: `auth=Basic c2plZmZzMjQ6MTIwMzIwMDU=`,
          },
          {
            key: "Set-Cookie",
            value: `sid=1593846838236`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
