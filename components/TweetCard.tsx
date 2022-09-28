import { useCardStore, useGradientStore } from "../store";
import { Resizable } from "re-resizable";
import Tweet from "./Tweet";

export default function TweetCard({ rootRef }: any) {
  const cardWidth = useCardStore((state: any) => state.width);
  const cardHeight = useCardStore((state: any) => state.height);

  const incrementCardWidth = useCardStore(
    (state: any) => state.incrementCardWidth,
  );
  const incrementCardHeight = useCardStore(
    (state: any) => state.incrementCardHeight,
  );

  const gradients = useGradientStore((state: any) => state.gradients);

  return (
    <Resizable
      defaultSize={{ width: cardWidth, height: cardHeight }}
      size={{ width: cardWidth, height: cardHeight }}
      onResize={(e: any, dir, ref, d) => {
        if (dir === "right") {
          incrementCardWidth(e.movementX);
        } else if (dir === "left") {
          incrementCardWidth(-e.movementX);
        } else if (dir === "top") {
          incrementCardHeight(-e.movementY);
        } else if (dir === "bottom") {
          incrementCardHeight(e.movementY);
        } else if (dir === "topRight") {
          incrementCardWidth(e.movementX);
          incrementCardHeight(-e.movementY);
        } else if (dir === "topLeft") {
          incrementCardWidth(-e.movementX);
          incrementCardHeight(-e.movementY);
        } else if (dir === "bottomLeft") {
          incrementCardWidth(-e.movementX);
          incrementCardHeight(e.movementY);
        } else if (dir === "bottomRight") {
          incrementCardWidth(e.movementX);
          incrementCardHeight(e.movementY);
        }
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
            <Tweet />
          </div>
        ))}
    </Resizable>
  );
}
