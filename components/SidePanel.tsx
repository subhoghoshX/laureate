import { useEffect, useRef, useState } from "react";
import { useArrowStore, useCardStore } from "../store";

interface Props {
  isPanelOpen: boolean;
}

export default function SidePanel({ isPanelOpen }: Props) {
  const [width, setWidth] = useState("672");
  const cardWidth = useCardStore((state: any) => state.width);
  const changeWidth = useCardStore((state: any) => state.changeWidth);
  useEffect(() => {
    setWidth(cardWidth);
  }, [cardWidth]);
  function widthKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeWidth(+width + 1);
    } else if (e.keyCode === 40) {
      changeWidth(+width - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(width))) {
        setWidth(cardWidth);
      } else {
        changeWidth(+width);
      }
    }
  }

  const [height, setHeight] = useState("332");
  const cardHeight = useCardStore((state: any) => state.height);
  const changeHeight = useCardStore((state: any) => state.changeHeight);
  useEffect(() => {
    setHeight(cardHeight);
  }, [cardHeight]);
  function heightKeyDown(e: any) {
    if (e.keyCode === 38) {
      changeHeight(+height + 1);
    } else if (e.keyCode === 40) {
      changeHeight(+height - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(height))) {
        setHeight(cardHeight);
      } else {
        changeHeight(+height);
      }
    }
  }

  const changeVisibility = useArrowStore(
    (state: any) => state.changeVisibility,
  );

  const changeX = useArrowStore((state: any) => state.changeX);
  const changeY = useArrowStore((state: any) => state.changeY);
  const setX = useArrowStore((state: any) => state.setX);
  const setY = useArrowStore((state: any) => state.setY);

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
        document.pointerLockElement === heightRef.current
      ) {
        document.addEventListener("mousemove", incrementWidth);
      } else {
        document.removeEventListener("mousemove", incrementWidth);
      }
    });
  }, []);

  const incrementCardWidth = useCardStore(
    (state: any) => state.incrementCardWidth,
  );

  const incrementCardHeight = useCardStore(
    (state: any) => state.incrementCardHeight,
  );

  function incrementWidth(e: any) {
    changeX(e.movementX);
    if (e.target === widthRef.current) {
      incrementCardWidth(e.movementX);
    } else if (e.target === heightRef.current) {
      incrementCardHeight(e.movementX);
    }
  }

  return (
    <aside
      className={`h-full w-60 self-end overflow-hidden p-2 transition-transform duration-200 ease-out ${
        isPanelOpen ? "translate-x-0" : "translate-x-60"
      }`}
    >
      <div
        className={`scrollbar group h-full overflow-y-hidden rounded-md bg-white text-sm shadow-[1px_1px_5px_rgba(0,0,0,0.25)] hover:overflow-y-auto`}
      >
        <div className="firefox-padding-fix p-5 group-hover:pr-3.5">
          <h2 className="font-bold">Size</h2>
          <form className="mt-4 flex">
            <div className="flex gap-x-3">
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
                    ? setWidth(cardWidth)
                    : changeWidth(Number(width))
                }
                onKeyDown={widthKeyDown}
                className="w-full"
                type="text"
              />
            </div>

            <div className="flex gap-x-3">
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
                    ? setHeight(cardHeight)
                    : changeHeight(Number(height))
                }
                onKeyDown={heightKeyDown}
                className="w-full"
                type="text"
              />
            </div>
            {/* <button className="sr-only" type="submit"></button> */}
          </form>
        </div>
        <div className="firefox-padding-fix border-t p-5 group-hover:pr-3.5">
          <h2 className="font-bold">Background</h2>
          <div className="mt-3 grid grid-cols-4 gap-3">
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
          </div>
        </div>
        <div className="firefox-padding-fix border-t p-5 group-hover:pr-3.5">
          <h2 className="font-bold">Templates</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
