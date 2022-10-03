import { useCardStore } from "../../store/card";
import { Resizable } from "re-resizable";
import CardOuter from "./CardOuter";

export default function ResizableTweet({ rootRef }: any) {
  const cardWidth = useCardStore((state) => state.width);
  const cardHeight = useCardStore((state) => state.height);
  const incrementCardWidth = useCardStore((state) => state.incrementCardWidth);
  const incrementCardHeight = useCardStore(
    (state) => state.incrementCardHeight,
  );
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
    >
      <CardOuter rootRef={rootRef} />
    </Resizable>
  );
}
