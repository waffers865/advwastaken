/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {

    return [

      {

        source: '/xye26jigsgvxd',

        destination: 'https://open.spotify.com/playlist/42SCM805xE9BS1Cp8y9Ktp?si=-6QbaB-vSoGOsYvgi9cwMg&pt=f19f3ceb2a02b10aa98072ad9950c951',

        permanent: true,

      },
            {

        source: '/',

        destination: 'https://coffeeadv.netlify.app/',

        permanent: true,

      },

    ]

  },
}
