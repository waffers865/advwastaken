import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <div>
    <div className="h-2 w-full bg-[#CB4E38]"></div>
    <div className="bg-[#18191B] min-h-screen w-full flex flex-col items-center justify-center px-8">
      <Head>
        <title>Fire-off @ADVWASTAKEN</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
        <img className="h-64 w-auto" src="/fire.gif" alt="loader"/>
        <p className="text-sm underline pop decoration-[#CB4E38] text-[#eee]">Don't think I care about some people whom I gave special routes yo. I choose to remove them from my entire life ;) <br/>Sayonara, may the <span className="text-[#CB4E38]"> godly </span> flame above burn all the relations with them 🙏 and the email "advwastaken@protonmail.com".</p>
    </div>
    </div>
  );
};

export default Home;

/**  */
