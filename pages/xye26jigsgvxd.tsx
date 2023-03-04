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
      You forgot to make your account public? Or you decided to decline/ignore me? <br/>
If you've chosen to ignore, I'm doing the same. I wish never of this actually happened or I forget all of this which is just impossible. Thanks for your curses in advance.
Ain't running behind you anymore. Gotta play valorant ngl
</p>
    </div>
  )
}

export default Home
