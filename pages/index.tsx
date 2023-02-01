import type { NextPage } from "next";
import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import Head from "next/head";
import Image from "next/image";
import { Apple } from "@icons-pack/react-simple-icons";

import icon from "../public/icon.png";
import avatar from "../public/avatar.png";

import BackgroundGradient from "../components/background-gradient";

const Home: NextPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden items-center justify-center py-2 bg-gray-100 text-black dark:bg-neutral-900 dark:text-gray-100">
      <Head>
        <title>Lofyee - A Lo-Fi music player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundGradient className="top-0 left-0 h-96 w-48 bg-pink-500/30 duration-500 dark:bg-blue-500/40" />
      <BackgroundGradient className="left-60 top-96 h-64 w-72 rounded-lg bg-yellow-500/30  duration-700 dark:bg-indigo-500/40" />
      <BackgroundGradient className="right-96 bottom-60 h-60 w-60 rounded-lg bg-red-500/30 dark:bg-violet-500/30" />
      <BackgroundGradient className="right-0 bottom-0 h-48 w-96 rounded-full bg-orange-500/30 dark:bg-cyan-500/30" />

      <Main />
      <Footer />
    </div>
  );
};

function Main() {
  return (
    <div className="isolate">
      <div className="mx-auto max-w-2xl py-2 lg:py-5">
        <div className="flex items-stretch justify-between">
          <div className="flex items-center mx-5">
            <Image className="h-10 w-10 rounded-lg" src={icon} alt="App Icon" />
            <span className="text-rose-500 text-xl font-bold mx-2">Lofyee</span>
          </div>
          <a
            href="https://nooc.ink"
            className="flex items-center mx-5 px-2 border rounded-xl dark:border-gray-500"
          >
            <span className="opacity-50">by</span>
            <Image
              className="h-6 w-6 rounded mx-2"
              src={avatar}
              alt="Nooc Avatar"
            />
            Nooc
          </a>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 dark:ring-gray-100/10 hover:ring-gray-900/20 dark:hover:ring-gray-100/20">
                Now available on AppStore{" "}
                <a
                  href="https://apps.apple.com/us/app/lofyee-a-lo-fi-player/id1663471190"
                  className="font-semibold text-rose-500"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Download <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-rose-500">
                Lofyee - Lo-Fi Music Player
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Lofyee is a Lo-Fi music player, based on Apple Music. It
                collected some playlists on Apple Music.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://apps.apple.com/us/app/lofyee-a-lo-fi-player/id1663471190"
                  className="flex items-center rounded-md bg-rose-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Apple className="mx-1 -translate-y-0.5" size={20} />
                  AppStore
                </a>
                {/* <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}

export function Footer() {
  return (
    <footer aria-label="Site Footer" className="pb-16 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <svg
            className="cursor-pointer  text-gray-700 dark:text-gray-400"
            width="35px"
            viewBox="0 0 291 249"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Nooc"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Avatar-Template"
                transform="translate(-54.000000, -54.000000)"
                fill="currentColor"
              >
                <path
                  d="M199.5,54 C279.857431,54 345,119.142569 345,199.5 C345,239.745848 328.65989,276.17526 302.25197,302.515935 L199,199.264935 L96.249446,302.016217 C70.1345949,275.715474 54,239.491955 54,199.5 C54,119.142569 119.142569,54 199.5,54 Z"
                  id="Sun"
                ></path>
              </g>
            </g>
          </svg>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          An idealist between existentialism and nihilism.
        </p>

        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400"
                href="/privacy"
              >
                Privacy
              </a>
            </li>
          </ul>
        </nav>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.instagram.com/noobnooc/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/noobnooc"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/noobnooc/kosto-rim"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden />
            </a>
          </li>

          <li>
            <a
              href="mailto:nooc@nooc.ink"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-gray-400"
            >
              <span className="sr-only">Email</span>
              <EnvelopeIcon className="h-6 w-6" aria-hidden />
            </a>
          </li>
        </ul>
      </div>

      <p className="flex items-center justify-center text-sm text-gray-500">
        Crafted by
        <a
          className="mx-1 underline"
          href="https://nooc.ink"
          target="_blank"
          rel="noreferrer"
        >
          Nooc
        </a>
        with <HeartIcon className="ml-1 h-5 w-5" />
      </p>
      <p className="text-center text-sm text-gray-500">© 2022</p>
      <div className="mt-4 text-center text-sm text-gray-500">
        <p className="my-1 uppercase opacity-60">Acknowledgement</p>
        Powered by TypeScript / React / TailwindCSS and more
        <br />
        Hosted on Cloudflare Pages
      </div>
    </footer>
  );
}

export default Home;
