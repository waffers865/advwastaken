/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [


            {

        source: '/',

        destination: 'https://zetta-adv.netlify.app/',

        permanent: true,

      },

    ]

  },
}
