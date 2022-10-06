import { useCardStore } from "../../store/card";
import { Resizable, ResizeDirection } from "re-resizable";
import CardOuter from "./CardOuter";


const MIN_ALLOWED_CARD_SIZE = 0;

function calculateNewSize(calculatorCallback: () => number) {
  const newSize = calculatorCallback();

  return newSize <= MIN_ALLOWED_CARD_SIZE ? MIN_ALLOWED_CARD_SIZE : newSize;
};

export default function ResizableTweet({ rootRef }: any) {
  const cardWidth = useCardStore((state) => state.width);
  const cardHeight = useCardStore((state) => state.height);
  const setWidth = useCardStore((state) => state.setWidth);
  const setHeight = useCardStore((state) => state.setHeight);

  function resizeHandler(e: any, dir: ResizeDirection) {
    switch (dir) {
      case "left":
        setWidth((width) => calculateNewSize(() => width - e.movementX));
        break;
      case "right":
        setWidth((width) => calculateNewSize(() => width + e.movementX));
        break;
      case "top":
        setHeight((height) => calculateNewSize(() => height - e.movementY));
        break;
      case "bottom":
        setHeight((height) => calculateNewSize(() => height + e.movementY));
        break;
      case "topLeft":
        setWidth((width) => calculateNewSize(() => width - e.movementX));
        setHeight((height) => calculateNewSize(() => height - e.movementY));
        break;
      case "topRight":
        setWidth((width) => calculateNewSize(() => width + e.movementX));
        setHeight((height) => calculateNewSize(() => height - e.movementY));
        break;
      case "bottomLeft":
        setWidth((width) => calculateNewSize(() => width - e.movementX));
        setHeight((height) => calculateNewSize(() => height + e.movementY));
        break;
      case "bottomRight":
        setWidth((width) => calculateNewSize(() => width + e.movementX));
        setHeight((height) => calculateNewSize(() => height + e.movementY));
        break;
    }
  }

  return (
    <Resizable
      defaultSize={{ width: cardWidth, height: cardHeight }}
      size={{ width: cardWidth, height: cardHeight }}
      onResize={resizeHandler}
      className="lg:-translate-x-24"
    >
      <CardOuter rootRef={rootRef} />
    </Resizable>
  );
}
