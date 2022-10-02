import { usePanStore } from "../../store";
import { useEffect } from "react";
import CardResizable from "./CardResizable";

export default function TweetCard({ rootRef }: any) {
  const spaceDown = usePanStore((state) => state.spaceDown);
  const setSpaceDown = usePanStore((state) => state.setSpaceDown);
  const mouseDown = usePanStore((state) => state.mouseDown);
  const setMouseDown = usePanStore((state) => state.setMouseDown);
  const moveBy = usePanStore((state) => state.moveBy);
  const setMoveBy = usePanStore((state) => state.setMoveBy);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 32) {
        setSpaceDown(true);
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 32) {
        setSpaceDown(false);
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
      setMoveBy({ x: moveBy.x + e.movementX, y: moveBy.y + e.movementY });
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
        spaceDown
          ? mouseDown
            ? "cursor-grabbing select-none"
            : "cursor-grab select-auto"
          : ""
      }`}
    >
      <CardResizable rootRef={rootRef} />
    </div>
  );
}
