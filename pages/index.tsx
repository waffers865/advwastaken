import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-cover bg-center bg-[url('/bg.gif')] bg-[#111] bg-fixed flex-col">
      <Head>
        <title>ADV</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      <div className="h-24 w-full p-4 flex justify-end items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <a href="/">
                <div className="px-4 py-4 flex items-center pop space-x-3">
                  <svg
                    className="mr-2"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.49996 7C7.96131 5.53865 9.5935 4.41899 10.6975 3.74088C11.5021 3.24665 12.4978 3.24665 13.3024 3.74088C14.4064 4.41899 16.0386 5.53865 17.5 7C20.6683 10.1684 20.5 12 20.5 15C20.5 16.4098 20.3895 17.5988 20.2725 18.4632C20.1493 19.3726 19.3561 20 18.4384 20H17C15.8954 20 15 19.1046 15 18V16C15 15.2043 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87864 13.8787C9.31603 14.4413 8.99996 15.2043 8.99996 16V18C8.99996 19.1046 8.10453 20 6.99996 20H5.56152C4.64378 20 3.85061 19.3726 3.72745 18.4631C3.61039 17.5988 3.49997 16.4098 3.49997 15C3.49997 12 3.33157 10.1684 6.49996 7Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Home
                </div>
              </a>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="h-screen flex items-center justify-center w-full flex ">
        <div className="h-auto space-y-2 p-4 rounded-xl w-80 flex flex-col items-center justify-center backdrop-blur-md bg-white">
          <p className="cc text-2xl">ADV</p>
          <p className="pop text-sm opacity-60">@advwastaken/coffeebyte</p>
	  <p className="pop text-xs opacity-30 items-center">Your ip is not in my discord-frnds-ip-list, so, Congrats you found my 2/5 Personal Webapp, Here instead of static/still background, I use animated backgrounds (when you realise you've been at like level 1 / year 2017 versions of my WebApps all along yet 💀). Hope you like it.</p>
<p className="pop text-sm opacity-60 flex">This WebApp still at 8K, raise it up yo <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" className="px-2 bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
</svg></p>
	
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center w-full flex">
        <p className="pop text-xl mb-8 text-white">
          <span className="underline decoration-black"> Sponsored by</span>
        </p>
        <Link href="https://wheregroup.com/">
          <div className="rounded-2xl backdrop-blur-md bg-black/60 h-auto w-80 py-12 px-8 flex flex-col space-y-8 items-center justify-center shadow-2xl">
            <svg
              version="1.1"
              id="Layer_1"
              viewBox="0 0 168.3 176.6"
              height={60}
            >
              <title>Wheregroup Logo</title>
              <g>
                <path
                  className="st0 fill-white"
                  d="M5.2,36C16.1,21.1,31.1,10.4,48.7,4.9c-1.2,2.1-2,4.5-2,7c-0.1,23.8,31.7,37.3,51.5,39.3
		c16.5,1.6,40.6-6.3,32-27.1c-1.1-2.6-2.7-4.9-4.4-7.1c13.6,8.9,25,20.7,33.4,34.7c-2-1.6-4.1-3.2-6.5-4.2
		c-20.8-8.9-27.4,18.2-26.1,33.6c1.6,18.5,13.4,51.7,36.7,50.6c1.9-0.1,3.9-0.8,5.6-1.8c-5.3,15.6-14.6,29.1-27.5,39.5
		c1.1-3.3,2.1-6.8,2.4-10.3c2.8-26-15.4-49.6-42.4-49.9c-30.4-0.4-55.9,26.4-56.3,56.3c-0.1,3.9,0.6,7.8,1.6,11.5
		c-19.5-10-35.3-25.5-45.7-44.8c4.7,1.5,9.6,2.5,14.5,2.5c30.3-0.3,57.4-25.7,56.7-56.7c-0.6-28-25-47.7-52.2-45.6
		C14.9,32.7,9.9,34.1,5.2,36z"
                />
                <path
                  className="st0 fill-white"
                  d="M62.7,12.6C62.6,0.1,79.7-0.7,88.5,0.9c11.5,2,25.6,8.5,30.4,20c5.7,13.8-11.7,18.3-22,17.2
		C84.3,36.6,62.8,27.9,62.7,12.6z"
                />
              </g>
            </svg>

            <svg
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 499.13 76.26"
              height={30}
            >
              <path
                className="cls-1 fill-[#eee]"
                d="M86.48,391.6q4.13,13.72,8.22,24.89T102.79,437q2.92-10.08,5.91-23.74t5.74-28.87h5.73q-1.59,9.15-3.14,17.14t-3.29,15.2q-1.71,7.21-3.61,13.83t-4.13,13H99.76l-4-9.75q-2-4.86-4-10t-4-10.79q-2-5.64-4-11.95-2,6.35-4,12t-4,10.81q-2,5.18-4,10t-4.1,9.7H61.66q-2.31-6.4-4.24-13t-3.6-13.83q-1.66-7.21-3.18-15.2t-3.06-17.12h6q1.32,7.52,2.67,14.73t2.86,14q1.5,6.75,3.06,12.77T65.3,437q3.65-9.48,7.85-20.52t8.29-24.82h5Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M132.21,443.52v-59h5.55v16.17a35.34,35.34,0,0,1,5.55-1.58,29.14,29.14,0,0,1,5.64-.55,21.82,21.82,0,0,1,8.53,1.45,13.26,13.26,0,0,1,5.47,4.14,16.1,16.1,0,0,1,2.86,6.45,39.41,39.41,0,0,1,.81,8.28v24.68h-5.55V420.64a41.72,41.72,0,0,0-.64-7.95,13.4,13.4,0,0,0-2.13-5.29,8.32,8.32,0,0,0-4-2.95,18.73,18.73,0,0,0-6.23-.89,20.63,20.63,0,0,0-3.12.25c-1.11.18-2.15.36-3.11.56s-1.84.41-2.61.64a11.91,11.91,0,0,0-1.49.51v38Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M179.86,421.41a28,28,0,0,1,1.66-10.12,22.19,22.19,0,0,1,4.36-7.22,17.08,17.08,0,0,1,6.14-4.31,18.76,18.76,0,0,1,7.13-1.41q8.11,0,12.94,5.29T216.92,420c0,.46,0,.92,0,1.37s-.07.88-.12,1.28h-31q.25,8.11,4,12.47t12,4.35a24.19,24.19,0,0,0,7.17-.85,29.67,29.67,0,0,0,3.84-1.45l1,4.78a22.38,22.38,0,0,1-4.49,1.62,28.07,28.07,0,0,1-7.72.94,25.68,25.68,0,0,1-9.91-1.71,17.7,17.7,0,0,1-6.75-4.78,19,19,0,0,1-3.84-7.3A33.87,33.87,0,0,1,179.86,421.41Zm31.34-3.51Q211,411,208,407.14a10.51,10.51,0,0,0-8.71-3.84,11.59,11.59,0,0,0-5.34,1.2,13.51,13.51,0,0,0-4.1,3.2,15.17,15.17,0,0,0-2.73,4.65,19.18,19.18,0,0,0-1.15,5.55Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M246,398.52a29.28,29.28,0,0,1,5.16.43,15.93,15.93,0,0,1,3.38.85l-1.11,4.78a12,12,0,0,0-2.78-.72,31.19,31.19,0,0,0-5.51-.39,26.15,26.15,0,0,0-5.76.51,16.15,16.15,0,0,0-2.86.86v38.68H231v-42.1a42,42,0,0,1,5.89-1.92A36.83,36.83,0,0,1,246,398.52Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M262,421.41a28,28,0,0,1,1.66-10.12,22.19,22.19,0,0,1,4.36-7.22,17.08,17.08,0,0,1,6.14-4.31,18.76,18.76,0,0,1,7.13-1.41q8.11,0,12.94,5.29T299.07,420c0,.46,0,.92-.05,1.37s-.07.88-.12,1.28h-31q.25,8.11,4,12.47t12,4.35a24.19,24.19,0,0,0,7.17-.85,29.67,29.67,0,0,0,3.84-1.45l1,4.78a22.38,22.38,0,0,1-4.49,1.62,28.07,28.07,0,0,1-7.72.94,25.68,25.68,0,0,1-9.91-1.71A17.7,17.7,0,0,1,267,438a19,19,0,0,1-3.84-7.3A33.87,33.87,0,0,1,262,421.41Zm31.34-3.51q-.18-6.91-3.25-10.76a10.51,10.51,0,0,0-8.71-3.84,11.59,11.59,0,0,0-5.34,1.2,13.51,13.51,0,0,0-4.1,3.2,15.17,15.17,0,0,0-2.73,4.65,19.18,19.18,0,0,0-1.15,5.55Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M353,415.51h5.81V441.9a44.15,44.15,0,0,1-6.36,1.75,54.17,54.17,0,0,1-11.66,1.07A28,28,0,0,1,330,442.67a24.42,24.42,0,0,1-8.58-5.94,27.41,27.41,0,0,1-5.68-9.65,39.16,39.16,0,0,1-2.05-13.19,36.51,36.51,0,0,1,2.22-13.19,27.94,27.94,0,0,1,6-9.65,25.9,25.9,0,0,1,8.84-5.94,28.39,28.39,0,0,1,10.76-2.05,35.11,35.11,0,0,1,10.84,1.41,28.56,28.56,0,0,1,6.24,2.69l-2,4.95a19.58,19.58,0,0,0-6.49-2.77,35.2,35.2,0,0,0-8.88-1.07,21.74,21.74,0,0,0-8.37,1.62,18.85,18.85,0,0,0-6.83,4.87,23.57,23.57,0,0,0-4.57,8,33.76,33.76,0,0,0-1.66,11.1,38,38,0,0,0,1.37,10.63,22.23,22.23,0,0,0,4.14,8.11,18.16,18.16,0,0,0,6.87,5.17,23.54,23.54,0,0,0,9.48,1.79,46.63,46.63,0,0,0,7.3-.47,20.68,20.68,0,0,0,4-.89V415.51Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M388.65,398.52a29.28,29.28,0,0,1,5.16.43,15.79,15.79,0,0,1,3.37.85l-1.11,4.78a11.9,11.9,0,0,0-2.77-.72,31.27,31.27,0,0,0-5.51-.39A26.15,26.15,0,0,0,382,404a16.15,16.15,0,0,0-2.86.86v38.68h-5.55v-42.1a42,42,0,0,1,5.89-1.92A36.83,36.83,0,0,1,388.65,398.52Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M444.92,421.49a28.74,28.74,0,0,1-1.49,9.48,21.05,21.05,0,0,1-4.19,7.26,19,19,0,0,1-6.36,4.65,20.53,20.53,0,0,1-16.22,0,19.16,19.16,0,0,1-6.37-4.65,21.19,21.19,0,0,1-4.18-7.26,30.71,30.71,0,0,1,0-19,21.6,21.6,0,0,1,4.18-7.3,18.89,18.89,0,0,1,6.37-4.7,20.64,20.64,0,0,1,16.22,0,18.76,18.76,0,0,1,6.36,4.7,21.62,21.62,0,0,1,4.19,7.3A28.74,28.74,0,0,1,444.92,421.49Zm-5.89,0q0-8.28-3.84-13.19a13.51,13.51,0,0,0-20.84,0q-3.84,4.9-3.84,13.19t3.84,13.15a13.58,13.58,0,0,0,20.84,0Q439,429.78,439,421.49Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M492.57,442q-2.47.67-6.66,1.53a52.17,52.17,0,0,1-10.25.86,20.89,20.89,0,0,1-8.28-1.45,13.55,13.55,0,0,1-5.38-4.1,16.62,16.62,0,0,1-2.95-6.41,36.06,36.06,0,0,1-.89-8.28V399.37h5.55v23a39.72,39.72,0,0,0,.68,7.94,13.06,13.06,0,0,0,2.22,5.25,8.7,8.7,0,0,0,4,2.9,17.23,17.23,0,0,0,5.94.9,46.82,46.82,0,0,0,6.83-.43,17.69,17.69,0,0,0,3.67-.77V399.37h5.55V442Z"
                transform="translate(-47.58 -383.06)"
              />
              <path
                className="cls-1 fill-[#eee]"
                d="M514.51,459.32H509V400.91a49.51,49.51,0,0,1,6.32-1.62,51.21,51.21,0,0,1,9.74-.77,23.62,23.62,0,0,1,8.84,1.58,19.05,19.05,0,0,1,6.83,4.57,20.92,20.92,0,0,1,4.44,7.26,26.15,26.15,0,0,1,1.58,9.64,33.92,33.92,0,0,1-1.32,8.47,23.24,23.24,0,0,1-3.06,6.5,17.22,17.22,0,0,1-6.64,5.52,23.05,23.05,0,0,1-8.4,2.18,35.66,35.66,0,0,1-12.78-1.54v16.62Zm0-21.74a31.77,31.77,0,0,0,12.09,1.78,14.77,14.77,0,0,0,6.59-1.75,13.26,13.26,0,0,0,4.66-4.5,23.5,23.5,0,0,0,3-11.53c.16-5.81-1.45-10.26-4.36-13.37a15,15,0,0,0-11.53-4.65,46.47,46.47,0,0,0-6.61.38,25.53,25.53,0,0,0-3.8.81v32.83Z"
                transform="translate(-47.58 -383.06)"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="h-12 py-4 bg-black/60 backdrop-blur-md px-8 flex items-center justify-center">
        <p className="pop text-white text-sm">Ⓒ Abhyudaya 2023</p>
      </div>
    </div>
  );
};

export default Home;

/**  */
