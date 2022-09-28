import { useCardStore, useGradientStore } from "../store";
import { Resizable } from "re-resizable";
import Tweet from "./Tweet";
import { useMemo } from "react";

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

  const gradient = useMemo(
    () => gradients.filter((gradient: any) => gradient.selected)[0],
    [gradients],
  );

  return (
    <Resizable
      defaultSize={{ width: cardWidth, height: cardHeight }}
      size={{ width: cardWidth, height: cardHeight }}
      onResize={(e: any, dir) => {
        switch (dir) {
          case "left":
            incrementCardWidth(-e.movementX);
            break;
          case "right":
            incrementCardWidth(e.movementX);
            break;
          case "top":
            incrementCardHeight(-e.movementY);
            break;
          case "bottom":
            incrementCardHeight(e.movementY);
            break;
          case "topLeft":
            incrementCardWidth(-e.movementX);
            incrementCardHeight(-e.movementY);
            break;
          case "topRight":
            incrementCardWidth(e.movementX);
            incrementCardHeight(-e.movementY);
            break;
          case "bottomLeft":
            incrementCardWidth(-e.movementX);
            incrementCardHeight(e.movementY);
            break;
          case "bottomRight":
            incrementCardWidth(e.movementX);
            incrementCardHeight(e.movementY);
            break;
        }
      }}
    >
      <div
        ref={rootRef}
        style={{
          background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
        }}
        className="flex h-full items-center justify-center overflow-hidden rounded-2xl py-16 px-20"
      >
        <Tweet />
      </div>
    </Resizable>
  );
}
