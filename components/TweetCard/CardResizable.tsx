import { useCardStore, useGradientStore } from "../../store";
import { Resizable } from "re-resizable";
import CardOuter from "./CardOuter";
import { useEffect, useRef } from "react";

export default function ResizableTweet({ rootRef }: any) {
  const cardWidth = useCardStore((state: any) => state.width);
  const cardHeight = useCardStore((state: any) => state.height);
  const cardRef = useRef<Resizable>(null);

  const incrementCardWidth = useCardStore(
    (state: any) => state.incrementCardWidth,
  );
  const incrementCardHeight = useCardStore(
    (state: any) => state.incrementCardHeight,
  );
  const incrementCardScale = useCardStore(
    (state: any) => state.incrementCardScale,
  );

  useEffect(changeScale, [cardWidth]);
  useEffect(() => {
    window.addEventListener('resize', changeScale);

    return () => {
      window.removeEventListener('resize', changeScale);
    }
  }, [])

  function changeScale() {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const currentCardWidth = cardRef.current?.size.width || cardWidth;
    const newScale = (width - 20) / currentCardWidth;

    incrementCardScale(newScale > 1 ? 1 : newScale);
  }

  function resizeHandler(e: any, dir: any) {
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
  }

  return (
    <Resizable
      defaultSize={{ width: cardWidth, height: cardHeight }}
      size={{ width: cardWidth, height: cardHeight }}
      onResize={resizeHandler}
      ref={cardRef}
    >
      <CardOuter rootRef={rootRef} />
    </Resizable>
  );
}
