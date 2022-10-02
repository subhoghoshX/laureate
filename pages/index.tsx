import Head from "next/head";
import { useRef, useState } from "react";
import Header from "../components/Header";
import SidePanel from "../components/SidePanel";
import TweetCard from "../components/TweetCard";
import ExportButton from "../components/ExportButton";
import Arrow from "../components/Arrow";

export default function Home() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const rootRef = useRef();

  return (
    <div>
      <Head>
        <title>Laureate</title>
        <meta name="title" content="Laureate" />
        <meta name="description" content="Transform your tweets into beautiful images" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laureate.netlify.app/" />
        <meta property="og:title" content="Laureate" />
        <meta property="og:description" content="Transform your tweets into beautiful images" />
        <meta property="og:image" content="https://laureate.netlify.app/preview.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://laureate.netlify.app/" />
        <meta property="twitter:title" content="Laureate" />
        <meta property="twitter:description" content="Transform your tweets into beautiful images" />
        <meta property="twitter:image" content="https://laureate.netlify.app/preview.png" />

      </Head>
      <div className="relative">
        <Arrow />
        <div className="relative z-10 flex h-screen flex-col overflow-hidden">
          <Header setIsPanelOpen={setIsPanelOpen} />
          <SidePanel isPanelOpen={isPanelOpen} />
          <div className="absolute inset-0 z-[-10] flex items-center justify-center">
            <TweetCard rootRef={rootRef} />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <ExportButton rootRef={rootRef} />
        </div>
      </div>
    </div>
  );
}
