/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [


            {

        source: '/',

        destination: 'https://youtu.be/TLysAkFM4cA',

        permanent: true,

      },

    ]

  },
}
