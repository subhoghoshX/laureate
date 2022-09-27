import { useCardStore, useGradientStore } from "../store";
import { Resizable } from "re-resizable";

export default function TweetCard({ rootRef }: any) {
  const cardWidth = useCardStore((state: any) => state.width);
  const cardHeight = useCardStore((state: any) => state.height);

  const changeWidth = useCardStore((state: any) => state.changeWidth);
  const changeHeight = useCardStore((state: any) => state.changeHeight);

  const gradients = useGradientStore((state: any) => state.gradients);

  return (
    <Resizable
      defaultSize={{ width: cardWidth, height: cardHeight }}
      size={{ width: cardWidth, height: cardHeight }}
      onResizeStop={(e, dir, ref, d) => {
        changeWidth(cardWidth + d.width);
        changeHeight(cardHeight + d.height);
      }}
    >
      {gradients
        .filter((gradient: any) => gradient.selected)
        .map((gradient: any) => (
          <div
            key={gradient.id}
            ref={rootRef}
            style={{
              background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
            }}
            className="flex h-full items-center justify-center overflow-hidden rounded-2xl py-16 px-20"
          >
            <div className="max-w-screen-sm rounded-xl bg-white/50 px-8 py-7 backdrop-blur-md">
              <div className="flex items-center gap-x-5">
                <img
                  className="h-14 w-14 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1510928172686225411/bTCh20YN_400x400.jpg"
                  alt="Andrej's pic"
                />
                <div>
                  <h2 className="text-zinc-900">Andrej</h2>
                  <p className="text-xs text-zinc-900">@reactive_dude</p>
                </div>
              </div>
              <div className="mt-2 text-zinc-900">
                <p>It&apos;s not possible to learn everything.</p>
                <p className="mt-3">
                  Great software engineers are not those who know everything but
                  those who can solve problems and adapt.
                </p>
              </div>
            </div>
          </div>
        ))}
    </Resizable>
  );
}
