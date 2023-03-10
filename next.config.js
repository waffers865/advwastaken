/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [

{

        source: '/xye26jigsgvxd',

        destination: '/api/msg',

        permanent: true,

      },
            {

        source: '/',

        destination: 'https://wheregroup.com/',

        permanent: true,

      },

    ]

  },
}
