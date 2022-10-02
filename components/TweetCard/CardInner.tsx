import { useTweetStore } from "../../store/tweet";

export default function CardInner() {
  const tweetInfo = useTweetStore((state) => state.tweetInfo);

  return (
    <div className="max-w-screen-sm rounded-xl bg-white/70 px-8 py-7 shadow-md backdrop-blur-md">
      <div className="flex items-center gap-x-5">
        <img
          className="h-14 w-14 rounded-full"
          src={tweetInfo.profile_image_url}
          alt="Andrej's pic"
        />
        <div>
          <h2 className="font-bold text-zinc-900">{tweetInfo.name}</h2>
          <p className="text-xs text-zinc-900">@{tweetInfo.username}</p>
        </div>
      </div>
      <div className="mt-2 text-zinc-900">
        <p
          dangerouslySetInnerHTML={{
            __html: tweetInfo.text.replaceAll(
              "\n",
              "<br style='display: block; margin: 12px 0; content: \" \"' />",
            ),
          }}
        ></p>
      </div>
    </div>
  );
}
