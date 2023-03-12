import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <div>
    <div className="h-2 w-full bg-[#CB4E38]"></div>
    <div className="bg-[#18191B] min-h-screen w-full flex items-center justify-center">
      <Head>
        <title>FireZetta</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
        <img className="h-64 w-auto" src="/fire.gif" alt="loader"/>
    </div>
    </div>
  );
};

export default Home;

/**  */
