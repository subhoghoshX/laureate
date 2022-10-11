import { useEffect, useRef, useState } from "react";
import { useArrowStore } from "../../store/arrow";

interface Props {
  data: number;
  action: (callback: (dimension: number) => number) => void;
  label: string;
}

export default function Input({ data, action: setData, label }: Props) {
  const labelRef = useRef(null);
  const [dataBuffer, setDataBuffer] = useState("");
  const [isPLRequested, setIsPLRequested] = useState(false);
  useEffect(() => {
    setDataBuffer(data + "");
  }, [data]);
  function keyDownHandler(e: any) {
    switch (e.code) {
      case "ArrowUp":
        setData(() => +dataBuffer + 1);
        break;
      case "ArrowDown":
        setData(() => +dataBuffer - 1);
        break;
      case "Enter":
      case "NumpadEnter":
        setDataOrResetDataBuffer();
        break;
      default:
      // Do nothing
    }
  }

  const setIsArrowVisible = useArrowStore((state) => state.setIsArrowVisible);
  const setX = useArrowStore((state) => state.setX);
  const setY = useArrowStore((state) => state.setY);

  function mouseDownHandler(e: any) {
    setIsArrowVisible(() => true);
    setX(() => e.clientX - 10);
    setY(() => e.clientY - 10);
    if (!isPLRequested) {
      document.addEventListener("pointerlockchange", pointerLockChangeHandler);
      setIsPLRequested(true);
    }
    e.target.requestPointerLock();
  }

  function pointerLockChangeHandler() {
    if (document.pointerLockElement === labelRef.current) {
      document.addEventListener("mousemove", incrementDimension);
    } else {
      document.removeEventListener("mousemove", incrementDimension);
    }
  }

  function incrementDimension(e: any) {
    setX((X) => X + e.movementX);
    setData((data) => data + e.movementX);
  }

  function mouseUpHandler() {
    document.exitPointerLock();
    setIsArrowVisible(() => false);
  }

  function setDataOrResetDataBuffer() {
    return dataBuffer && !Number.isNaN(Number(dataBuffer))
      ? setData(() => +dataBuffer)
      : setDataBuffer(data + "");
  }

  return (
    <label className="flex h-7 border border-transparent text-xs focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 hover:border-gray-200 hover:focus-within:border-blue-400 dark:hover:border-[#4c4c4c] dark:hover:focus-within:border-blue-400">
      <span
        className="flex w-[37%] cursor-ew-resize select-none items-center justify-center text-slate-500 dark:text-[#808080]"
        ref={labelRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        {label}
      </span>

      <input
        value={dataBuffer}
        onChange={(e) => setDataBuffer(e.target.value)}
        onBlur={setDataOrResetDataBuffer}
        onClick={(e: any) => e.target.select()}
        onKeyDown={keyDownHandler}
        className="block w-[63%] cursor-default focus:outline-none dark:bg-transparent dark:text-white"
        type="text"
      />
    </label>
  );
}
