import { Dispatch, SetStateAction, useState } from "react";
import { useTweetStore } from "../store/tweet";

interface Props {
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setIsPanelOpen }: Props) {
  const [url, setUrl] = useState("");

  const setTweetInfo = useTweetStore((state) => state.setTweetInfo);

  async function handleSumbit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/hello", {
      method: "post",
      body: JSON.stringify({ tweetUrl: url }),
    });

    const data = await res.json();

    setTweetInfo({
      profile_image_url: data.includes.users[0].profile_image_url.replace(
        "_normal",
        "",
      ),
      name: data.includes.users[0].name,
      username: data.includes.users[0].username,
      text: data.data.text,
      retweet_count: data.data.public_metrics.retweet_count,
      reply_count: data.data.public_metrics.reply_count,
      like_count: data.data.public_metrics.like_count,
    });
  }

  return (
    <header className="flex items-center justify-between gap-x-4 bg-white px-4 py-2 shadow">
      <img src="/laureate-logo.svg" alt="laureate logo" className="" />
      <form className="w-1/2" onSubmit={handleSumbit}>
        <input
          className="w-full rounded-full bg-slate-200 px-6 py-2.5 text-sm"
          type="text"
          placeholder="Paste tweet link here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </form>
      <div className="flex gap-x-3">
        <button>
          <img src="/moon.svg" alt="moon icon" />
        </button>
        <button>
          <img
            onClick={() => setIsPanelOpen((c) => !c)}
            src="/flap.svg"
            alt="flap icon"
          />
        </button>
      </div>
    </header>
  );
}
