import { useEffect, useRef, useState } from "react";
import { useArrowStore, useCardStore, useGradientStore } from "../../store";

export default function Size() {
  const [width, setWidth] = useState("672");
  const cardWidth = useCardStore((state) => state.width);
  const changeWidth = useCardStore((state) => state.changeWidth);
  useEffect(() => {
    setWidth(cardWidth + "");
  }, [cardWidth]);
  function widthKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeWidth(+width + 1);
    } else if (e.keyCode === 40) {
      changeWidth(+width - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(width))) {
        setWidth(cardWidth + "");
      } else {
        changeWidth(+width);
      }
    }
  }

  const [height, setHeight] = useState("332");
  const cardHeight = useCardStore((state) => state.height);
  const changeHeight = useCardStore((state) => state.changeHeight);
  useEffect(() => {
    setHeight(cardHeight + "");
  }, [cardHeight]);
  function heightKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeHeight(+height + 1);
    } else if (e.keyCode === 40) {
      changeHeight(+height - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(height))) {
        setHeight(cardHeight + "");
      } else {
        changeHeight(+height);
      }
    }
  }

  const changeVisibility = useArrowStore(
    (state) => state.changeVisibility,
  );

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

  const incrementCardWidth = useCardStore(
    (state) => state.incrementCardWidth,
  );

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

  const [round, setRound] = useState("16");
  const incrementRounded = useCardStore((state) => state.incrementRounded);
  const rounded = useCardStore((state) => state.rounded);

  useEffect(() => {
    setRound(rounded + "");
  }, [rounded]);
  function roundKeyDown(e: any) {
    if (e.keyCode === 38) {
      incrementRounded(1);
    } else if (e.keyCode === 40) {
      incrementRounded(-1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(round))) {
        setRound(rounded + "");
      } else {
        incrementRounded(Number(round), true);
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
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(width))
                ? setWidth(cardWidth + "")
                : changeWidth(Number(width))
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
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(height))
                ? setHeight(cardHeight + "")
                : changeHeight(Number(height))
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
            value={round}
            onChange={(e) => setRound(e.target.value)}
            onBlur={() =>
              Number.isNaN(Number(round))
                ? setRound(rounded + "")
                : incrementRounded(Number(round), true)
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
