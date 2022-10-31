import { useState } from "react";
import { useTweetStore } from "../../store/tweet";

export default function Input() {
  const [url, setUrl] = useState("");

  const setTweetInfo = useTweetStore((state) => state.setTweetInfo);

  async function handleSumbit(e: any) {
    e.preventDefault();

    if (!url) return;

    const res = await fetch("/api/hello", {
      method: "post",
      body: JSON.stringify({ tweetUrl: url }),
    });

    const { includes, data } = await res.json();

    setTweetInfo(() => ({
      profile_image_url: includes.users[0].profile_image_url.replace(
        "_normal",
        "",
      ),
      name: includes.users[0].name,
      username: includes.users[0].username,
      text: data.text,
      retweet_count: data.public_metrics.retweet_count,
      reply_count: data.public_metrics.reply_count,
      like_count: data.public_metrics.like_count,
    }));

    setUrl("");
  }

  return (
    <form className="relative ml-auto flex w-1/2" onSubmit={handleSumbit}>
      <input
        className="w-full rounded-full bg-slate-200 px-6 py-2.5 pr-16 text-sm ring-blue-400 focus:outline-none focus:ring-2 dark:bg-[#3c3c3c] dark:text-white dark:placeholder-neutral-400"
        type="text"
        placeholder="Paste tweet link here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        type="submit"
        className="group absolute inset-y-0 right-0 flex w-14 items-center justify-center rounded-r-full bg-slate-300 dark:bg-[#5c5c5c] dark:hover:bg-[#6c6c6c]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-slate-700 group-hover:stroke-slate-900 dark:stroke-gray-300 dark:group-hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </form>
  );
}
