import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-red-400 py-12 px-12">
      <Head>
        <title></title>
      </Head>
      <p className="text-[1.5rem] text-white opacity-80 pop">
      You forgot to make your account public?
</p>
    </div>
  )
}

export default Home
