import { useEffect, useRef, useState } from "react";
import { useArrowStore } from "../../store/arrow";
import { useCardStore } from "../../store/card";

export default function Size() {
  const [widthBuffer, setWidthBuffer] = useState("672");
  const cardWidth = useCardStore((state) => state.width);
  const changeWidth = useCardStore((state) => state.changeWidth);
  const incrementCardWidth = useCardStore((state) => state.incrementCardWidth);
  useEffect(() => {
    setWidthBuffer(cardWidth + "");
  }, [cardWidth]);
  function widthKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeWidth(+widthBuffer + 1);
    } else if (e.keyCode === 40) {
      changeWidth(+widthBuffer - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(widthBuffer))) {
        setWidthBuffer(cardWidth + "");
      } else {
        changeWidth(+widthBuffer);
      }
    }
  }

  const [heightBuffer, setHeightBuffer] = useState("332");
  const cardHeight = useCardStore((state) => state.height);
  const changeHeight = useCardStore((state) => state.changeHeight);
  const incrementCardHeight = useCardStore(
    (state) => state.incrementCardHeight,
  );
  useEffect(() => {
    setHeightBuffer(cardHeight + "");
  }, [cardHeight]);
  function heightKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeHeight(+heightBuffer + 1);
    } else if (e.keyCode === 40) {
      changeHeight(+heightBuffer - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(heightBuffer))) {
        setHeightBuffer(cardHeight + "");
      } else {
        changeHeight(+heightBuffer);
      }
    }
  }

  const [radiusBuffer, setRadiusBuffer] = useState("16");
  const rounded = useCardStore((state) => state.rounded);
  const incrementRounded = useCardStore((state) => state.incrementRounded);
  useEffect(() => {
    setRadiusBuffer(rounded + "");
  }, [rounded]);
  function roundKeyDown(e: any) {
    if (e.keyCode === 38) {
      incrementRounded(1);
    } else if (e.keyCode === 40) {
      incrementRounded(-1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(radiusBuffer))) {
        setRadiusBuffer(rounded + "");
      } else {
        incrementRounded(Number(radiusBuffer), true);
      }
    }
  }

  const changeVisibility = useArrowStore((state) => state.changeVisibility);

  const changeX = useArrowStore((state) => state.changeX);
  const setX = useArrowStore((state) => state.setX);
  const setY = useArrowStore((state) => state.setY);

  function mouseDownHandler(e: any) {
    changeVisibility(true);
    setX(e.clientX - 10);
    setY(e.clientY - 10);
    e.target.requestPointerLock();
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", () => {
      if (document.pointerLockElement) {
        document.addEventListener("mousemove", incrementDimension);
      } else {
        document.removeEventListener("mousemove", incrementDimension);
        changeVisibility(false);
      }
    });
  }, []);

  function incrementDimension(e: any) {
    changeX(e.movementX);
    switch (e.target.attributes["data-name"].value) {
      case "width":
        incrementCardWidth(e.movementX);
        break;
      case "height":
        incrementCardHeight(e.movementX);
        break;
      case "radius":
        incrementRounded(e.movementX);
    }
  }

  return (
    <div className="firefox-padding-fix p-5 pr-3">
      <h2 className="font-bold">Size</h2>
      <form className="mt-4 flex flex-wrap gap-y-4">
        <div className="flex w-1/2 gap-x-3">
          <label
            htmlFor=""
            className="cursor-ew-resize font-mono text-slate-500"
            onMouseDown={mouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
            data-name="width"
          >
            W
          </label>
          <input
            value={widthBuffer}
            onChange={(e) => setWidthBuffer(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(widthBuffer))
                ? setWidthBuffer(cardWidth + "")
                : changeWidth(Number(widthBuffer))
            }
            onKeyDown={widthKeyDown}
            className="w-full"
            type="text"
          />
        </div>

        <div className="flex w-1/2 gap-x-3">
          <label
            htmlFor=""
            className="cursor-ew-resize font-mono text-slate-500"
            onMouseDown={mouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
            data-name="height"
          >
            H
          </label>
          <input
            value={heightBuffer}
            onChange={(e) => setHeightBuffer(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(heightBuffer))
                ? setHeightBuffer(cardHeight + "")
                : changeHeight(Number(heightBuffer))
            }
            onKeyDown={heightKeyDown}
            className="w-full"
            type="text"
          />
        </div>

        <div className="flex w-1/2 gap-x-3">
          <label
            htmlFor=""
            className="cursor-ew-resize font-mono text-slate-500"
            onMouseDown={mouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
            data-name="radius"
          >
            R
          </label>
          <input
            value={radiusBuffer}
            onChange={(e) => setRadiusBuffer(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(radiusBuffer))
                ? setRadiusBuffer(rounded + "")
                : incrementRounded(Number(radiusBuffer), true)
            }
            onKeyDown={roundKeyDown}
            className="w-full"
            type="text"
          />
        </div>
      </form>
    </div>
  );
}
