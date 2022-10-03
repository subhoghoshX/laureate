import { useEffect, useRef, useState } from "react";
import { useArrowStore } from "../../store/arrow";
import { useCardStore } from "../../store/card";

export default function Size() {
  const [widthBuffer, setWidthBuffer] = useState("672");
  const cardWidth = useCardStore((state) => state.width);
  const changeWidth = useCardStore((state) => state.changeWidth);
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

  const changeVisibility = useArrowStore((state) => state.changeVisibility);

  const changeX = useArrowStore((state) => state.changeX);
  const changeY = useArrowStore((state) => state.changeY);
  const setX = useArrowStore((state) => state.setX);
  const setY = useArrowStore((state) => state.setY);

  const widthRef = useRef<HTMLLabelElement>(null);

  function widthMouseDownHandler(e: any) {
    changeVisibility(true);
    setX(e.clientX - 10);
    setY(e.clientY - 10);
    if (widthRef.current && widthRef.current === e.target) {
      widthRef.current.requestPointerLock();
    } else if (heightRef.current && heightRef.current === e.target) {
      heightRef.current.requestPointerLock();
    }
  }

  const heightRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    document.addEventListener("pointerlockchange", () => {
      if (
        document.pointerLockElement === widthRef.current ||
        document.pointerLockElement === heightRef.current ||
        document.pointerLockElement === roundedRef.current
      ) {
        document.addEventListener("mousemove", incrementWidth);
      } else {
        document.removeEventListener("mousemove", incrementWidth);
        changeVisibility(false);
      }
    });
  }, []);

  const incrementCardWidth = useCardStore((state) => state.incrementCardWidth);

  const incrementCardHeight = useCardStore(
    (state) => state.incrementCardHeight,
  );

  function incrementWidth(e: any) {
    changeX(e.movementX);
    if (e.target === widthRef.current) {
      incrementCardWidth(e.movementX);
    } else if (e.target === heightRef.current) {
      incrementCardHeight(e.movementX);
    } else if (e.target === roundedRef.current) {
      incrementRounded(e.movementX);
    }
  }

  const [radiusBuffer, setRadiusBuffer] = useState("16");
  const incrementRounded = useCardStore((state) => state.incrementRounded);
  const rounded = useCardStore((state) => state.rounded);

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

  const roundedRef = useRef<HTMLLabelElement>(null);

  function roundedMouseDownHandler(e: any) {
    changeVisibility(true);
    setX(e.clientX - 10);
    setY(e.clientY - 10);
    console.log(roundedRef.current);
    if (roundedRef.current) {
      roundedRef.current.requestPointerLock();
    }
  }

  return (
    <div className="firefox-padding-fix p-5 pr-3">
      <h2 className="font-bold">Size</h2>
      <form className="mt-4 flex flex-wrap gap-y-4">
        <div className="flex w-1/2 gap-x-3">
          <label
            htmlFor=""
            ref={widthRef}
            className="cursor-ew-resize font-mono text-slate-500"
            onMouseDown={widthMouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
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
            onMouseDown={widthMouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
            ref={heightRef}
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
            onMouseDown={roundedMouseDownHandler}
            onMouseUp={() => {
              document.exitPointerLock();
              changeVisibility(false);
            }}
            ref={roundedRef}
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
