import { useCardStore } from "../../store/card";
import { Resizable } from "re-resizable";
import CardOuter from "./CardOuter";
import { useEffect, useState } from "react";
import { MIN_ALLOWED_HEIGHT, MIN_ALLOWED_WIDTH } from "../../store/constants";

export default function ResizableTweet({ rootRef }: any) {
  const [widthBuffer, setWidthBuffer] = useState(672);
  const [heightBuffer, setHeightBuffer] = useState(332);

  const cardWidth = useCardStore((state) => state.width);
  const cardHeight = useCardStore((state) => state.height);
  const setWidth = useCardStore((state) => state.setWidth);
  const setHeight = useCardStore((state) => state.setHeight);
  function resizeHandler(e: any, dir: any) {
    switch (dir) {
      case "left":
        setWidthBuffer((width) => width - e.movementX);
        break;
      case "right":
        setWidthBuffer((width) => width + e.movementX);
        break;
      case "top":
        setHeightBuffer((height) => height - e.movementY);
        break;
      case "bottom":
        setHeightBuffer((height) => height + e.movementY);
        break;
      case "topLeft":
        setWidthBuffer((width) => width - e.movementX);
        setHeightBuffer((height) => height - e.movementY);
        break;
      case "topRight":
        setWidthBuffer((width) => width + e.movementX);
        setHeightBuffer((height) => height - e.movementY);
        break;
      case "bottomLeft":
        setWidthBuffer((width) => width - e.movementX);
        setHeightBuffer((height) => height + e.movementY);
        break;
      case "bottomRight":
        setWidthBuffer((width) => width + e.movementX);
        setHeightBuffer((height) => height + e.movementY);
        break;
    }
  }

  function resizeStopHandler() {
    if (widthBuffer < MIN_ALLOWED_WIDTH) {
      setWidthBuffer(MIN_ALLOWED_WIDTH);
    }

    if (heightBuffer < MIN_ALLOWED_HEIGHT) {
      setHeightBuffer(MIN_ALLOWED_HEIGHT);
    }
  }

  useEffect(() => {
    setWidth(() => widthBuffer);
  }, [widthBuffer, setWidth]);

  useEffect(() => {
    setHeight(() => heightBuffer);
  }, [heightBuffer, setHeight]);

  return (
    <Resizable
      size={{ width: cardWidth, height: cardHeight }}
      onResize={resizeHandler}
      onResizeStop={resizeStopHandler}
      className="lg:-translate-x-24"
      minHeight={MIN_ALLOWED_HEIGHT}
      minWidth={MIN_ALLOWED_WIDTH}
    >
      <CardOuter rootRef={rootRef} />
    </Resizable>
  );
}
