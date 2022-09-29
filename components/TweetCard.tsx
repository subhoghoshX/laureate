import { useCardStore, useGradientStore } from "../store";
import { Resizable } from "re-resizable";
import Tweet from "./Tweet";
import { useMemo } from "react";
import { usePanStore } from "../store";
import { useEffect } from "react";

export default function TweetCard({ rootRef }: any) {
  const cardWidth = useCardStore((state: any) => state.width);
  const cardHeight = useCardStore((state: any) => state.height);
  const incrementCardWidth = useCardStore(
    (state: any) => state.incrementCardWidth,
  );
  const incrementCardHeight = useCardStore(
    (state: any) => state.incrementCardHeight,
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

  const gradients = useGradientStore((state: any) => state.gradients);
  const gradient = useMemo(
    () => gradients.filter((gradient: any) => gradient.selected)[0],
    [gradients],
  );

  const spaceDown = usePanStore((state: any) => state.spaceDown);
  const changeSpaceDown = usePanStore((state: any) => state.changeSpaceDown);
  const mouseDown = usePanStore((state: any) => state.mouseDown);
  const setMouseDown = usePanStore((state: any) => state.setMouseDown);
  const moveBy = usePanStore((state: any) => state.moveBy);
  const setMoveBy = usePanStore((state: any) => state.setMoveBy);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        changeSpaceDown(true);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 32) {
        changeSpaceDown(false);
      }
    });
  }, []);

  function mouseDownHandler() {
    setMouseDown(true);
  }
  function mouseUpHandler() {
    setMouseDown(false);
  }
  function mouseMoveHandler(e: any) {
    if (mouseDown && spaceDown) {
      setMoveBy({ X: moveBy.X + e.movementX, Y: moveBy.Y + e.movementY });
    }
  }

  return (
    <div
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseMove={mouseMoveHandler}
      style={{
        transform: `translate(${moveBy.X}px, ${moveBy.Y}px)`,
      }}
      className={`${
        spaceDown ? (mouseDown ? "cursor-grabbing" : "cursor-grab") : ""
      }`}
    >
      <Resizable
        defaultSize={{ width: cardWidth, height: cardHeight }}
        size={{ width: cardWidth, height: cardHeight }}
        onResize={resizeHandler}
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
    </div>
  );
}
