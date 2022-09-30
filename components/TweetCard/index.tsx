import { usePanStore } from "../../store";
import { useEffect } from "react";
import CardResizable from "./CardResizable";

export default function TweetCard({ rootRef }: any) {
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
