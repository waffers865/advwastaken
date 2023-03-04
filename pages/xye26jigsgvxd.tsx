import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-red-400 py-12 px-12">
      <Head>
        <title></title>
      </Head>
      <p className="text-[1.5rem] text-white opacity-80 pop">
        Population in billions, millions better than me still you choose me? <br/>
OK, I realised one day I'll have to go away from you, seeing the quote "You don't value something until it's gone forever" <br/>
I wanted to let you know you're one of my highest priority person, you may lose interest in me in future, but I wouldn't *never* in you (always my cool/sick sis). Did you realised since we were in sec. B, we been making memories?
<br/>
2 things that I can never ignore (there's more but I can't recall rn) :-<br/>
- Fireship, Beyond Fireship videos <br/>
- One of my most favourite person smiling/happy/enjoying.
<br/>
<br/>
I started making your WebApp, and just realised I know nothing about you, shall I literally make an empty WebApp ☠️ (makhan vakhan nahi laga rha joh hai vahi likh rha hu)
        <br />
        <br />
        My index page <Link href='/' className='text-blue-700 underline'>https://advwastaken.vercel.app</Link> just reached 31K views, UNBELIEVABLE  :O <br/>
        I'm never talking with you the same way I've done before, cause now I know there are some differences between you and me.
      </p>
    </div>
  );
};

export default Home;

