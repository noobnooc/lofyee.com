import type { NextPage } from "next";
import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { Github, Instagram, Twitter } from "@icons-pack/react-simple-icons";
import Head from "next/head";
import { Apple } from "@icons-pack/react-simple-icons";

import icon from "../public/icon.png";
import avatar from "../public/avatar.png";

import BackgroundGradient from "../components/background-gradient";

const Home: NextPage = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden items-center justify-center py-2 bg-gray-100 text-black dark:bg-neutral-800 dark:text-gray-100">
      <Head>
        <title>Lofyee - A Lo-Fi music player</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-itunes-app" content="app-id=1663471190"></meta>
        <meta name="description" content="Lofyee, A Lo-Fi Music Player" />
        <meta
          name="keywords"
          content="Nooc, noobnooc, noocink, nookinc, Noob Nooc, Lo-Fi, Lo-Fi Music, Lo-Fi Player, Music Player"
        />
      </Head>

      <BackgroundGradient className="top-0 left-0 h-96 w-48 bg-lofyee/30 duration-500 dark:bg-lofyee/40" />
      <BackgroundGradient className="left-60 top-96 h-64 w-72 rounded-lg bg-pink-500/30  duration-700 dark:bg-pink-500/40" />
      <BackgroundGradient className="right-96 bottom-60 h-60 w-60 rounded-lg bg-orange-500/30 dark:bg-orange-500/30" />
      <BackgroundGradient className="right-0 bottom-0 h-48 w-96 rounded-full bg-yellow-500/30 dark:bg-yellow-500/50" />

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
            <img className="h-10 w-10 rounded-lg" src='/icon.png' alt="App Icon" />
            <span className="text-lofyee text-xl font-bold mx-2">Lofyee</span>
          </div>
          <a
            href="https://nooc.ink"
            className="flex items-center mx-5 px-2 border border-gray-500/20 rounded-xl dark:border-gray-100/20"
          >
            <span className="opacity-50">by</span>
            <img
              className="h-6 w-6 rounded mx-2"
              src='/avatar.png'
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
                Available on iOS AppStore now{" "}
                <a
                  href="https://apps.apple.com/us/app/lofyee-a-lo-fi-player/id1663471190"
                  className="font-semibold text-lofyee"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Download <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-lofyee">
                Lofyee - Lo-Fi Music Player
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Lofyee is a Lo-Fi music player, based on Apple Music. It
                collected some playlists on Apple Music.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://apps.apple.com/us/app/lofyee-a-lo-fi-player/id1663471190"
                  className="flex items-center rounded-md bg-lofyee px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-lofyee/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        Hosted on Vercel
      </div>
    </footer>
  );
}

export default Home;
