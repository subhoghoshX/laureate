import { usePanStore } from "../../store/pan";
import { useEffect } from "react";
import CardResizable from "./CardResizable";

export default function TweetCard({ rootRef }: any) {
  const isSpaceDown = usePanStore((state) => state.isSpaceDown);
  const setIsSpaceDown = usePanStore((state) => state.setIsSpaceDown);
  const isMouseDown = usePanStore((state) => state.isMouseDown);
  const setIsMouseDown = usePanStore((state) => state.setIsMouseDown);
  const moveBy = usePanStore((state) => state.moveBy);
  const setMoveBy = usePanStore((state) => state.setMoveBy);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        setIsSpaceDown(() => true);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.code === "Space") {
        setIsSpaceDown(() => false);
      }
    });
  }, [setIsSpaceDown]);

  function mouseDownHandler() {
    setIsMouseDown(() => true);
  }
  function mouseUpHandler() {
    setIsMouseDown(() => false);
  }
  function mouseMoveHandler(e: any) {
    if (isMouseDown && isSpaceDown) {
      setMoveBy(() => ({
        X: moveBy.X + e.movementX,
        Y: moveBy.Y + e.movementY,
      }));
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
        isSpaceDown
          ? isMouseDown
            ? "cursor-grabbing select-none"
            : "cursor-grab select-auto"
          : ""
      }`}
    >
      <CardResizable rootRef={rootRef} />
    </div>
  );
}
