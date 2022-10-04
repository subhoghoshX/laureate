import { useCardStore } from "../../store/card";
import { useTemplateStore } from "../../store/template";
import { useTweetStore } from "../../store/tweet";

export default function CardInner() {
  const tweetInfo = useTweetStore((state) => state.tweetInfo);
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const opacity = useCardStore((state) => state.opacity);

  return (
    <div
      className="max-w-screen-sm rounded-xl bg-white/70 px-8 py-7 shadow-md backdrop-blur-md"
      style={{ backgroundColor: `rgba(255,255,255, ${opacity / 100})` }}
    >
      <div
        className={`flex gap-x-5 ${
          selectedTemplate === "third" ? "items-start" : "items-center"
        }`}
      >
        <img
          className="h-14 w-14 rounded-full"
          src={tweetInfo.profile_image_url}
          alt="Andrej's pic"
        />
        <div>
          <div
            className={`${
              selectedTemplate === "third" ? "flex items-center gap-x-2" : ""
            }`}
          >
            <h2 className="font-bold text-zinc-900">{tweetInfo.name}</h2>
            <p className="text-xs text-zinc-900">@{tweetInfo.username}</p>
          </div>
          <div
            className={`mt-2 text-zinc-900 ${
              selectedTemplate === "third" ? "block" : "hidden"
            }`}
          >
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
      </div>
      <div
        className={`mt-2 text-zinc-900 ${
          selectedTemplate === "second" ? "pl-20" : ""
        } ${selectedTemplate === "third" ? "hidden" : "block"}`}
      >
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
