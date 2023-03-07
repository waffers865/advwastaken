/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [

      {

        source: '/',

        destination: 'https://advwastaken.netlify.app/',

        permanent: true,

      },

    ]

  },
}
