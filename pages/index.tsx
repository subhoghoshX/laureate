import Head from "next/head";
import { useRef, useState } from "react";
import Header from "../components/Header";
import SidePanel from "../components/SidePanel";
import TweetCard from "../components/TweetCard";
import ExportButton from "../components/ExportButton";
import Arrow from "../components/Arrow";
import Script from "next/script";

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const rootRef = useRef();

  return (
    <>
      <Head>
        <title>Laureate</title>
        <meta name="title" content="Laureate" />
        <meta
          name="description"
          content="Transform your tweets into beautiful images"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laureate.netlify.app/" />
        <meta property="og:title" content="Laureate" />
        <meta
          property="og:description"
          content="Transform your tweets into beautiful images"
        />
        <meta
          property="og:image"
          content="https://laureate.netlify.app/preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://laureate.netlify.app/" />
        <meta property="twitter:title" content="Laureate" />
        <meta
          property="twitter:description"
          content="Transform your tweets into beautiful images"
        />
        <meta
          property="twitter:image"
          content="https://laureate.netlify.app/preview.png"
        />
      </Head>

      <Script
        id="laureate-theme"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            JSON.parse(localStorage.getItem("isDark"))
              ? document.documentElement.classList.add('dark')
              : document.documentElement.classList.remove('dark');
            `,
        }}
      />

      <div className="relative">
        <Arrow />
        <div className="relative z-10 flex h-screen flex-col overflow-hidden">
          <Header setIsPanelOpen={setIsPanelOpen} rootRef={rootRef} />
          <SidePanel isPanelOpen={isPanelOpen} />
          <div className="absolute inset-0 z-[-10] flex items-center justify-center dark:bg-[#121212]">
            <TweetCard rootRef={rootRef} />
          </div>
          <div className="absolute bottom-8 z-[-5] flex h-12 w-full justify-center">
            <ExportButton
              rootRef={rootRef}
              className="w-36 lg:-translate-x-24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
