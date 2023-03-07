/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [

      {

        source: '/',

        destination: 'https://coffeeadv.netlify.app/',

        permanent: true,

      },

    ]

  },
}
