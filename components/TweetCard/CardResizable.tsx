import { useCardStore } from "../../store/card";
import { Resizable } from "re-resizable";
import CardOuter from "./CardOuter";
import { useEffect, useRef } from "react";

export default function ResizableTweet({ rootRef }: any) {
  const cardWidth = useCardStore((state: any) => state.width);
  const cardHeight = useCardStore((state: any) => state.height);
  const setWidth = useCardStore((state) => state.setWidth);
  const setHeight = useCardStore((state) => state.setHeight);
  const setScale = useCardStore((state) => state.setScale);
  const cardRef = useRef<Resizable>(null);

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

    setScale(() => newScale > 1 ? 1 : newScale);
  }

  function resizeHandler(e: any, dir: any) {
    switch (dir) {
      case "left":
        setWidth((width) => width - e.movementX);
        break;
      case "right":
        setWidth((width) => width + e.movementX);
        break;
      case "top":
        setHeight((height) => height - e.movementY);
        break;
      case "bottom":
        setHeight((height) => height + e.movementY);
        break;
      case "topLeft":
        setWidth((width) => width - e.movementX);
        setHeight((height) => height - e.movementY);
        break;
      case "topRight":
        setWidth((width) => width + e.movementX);
        setHeight((height) => height - e.movementY);
        break;
      case "bottomLeft":
        setWidth((width) => width - e.movementX);
        setHeight((height) => height + e.movementY);
        break;
      case "bottomRight":
        setWidth((width) => width + e.movementX);
        setHeight((height) => height + e.movementY);
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
