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
        setOrResetDataBuffer();
      default:
        break;
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

  function setOrResetDataBuffer() {
    return dataBuffer && !Number.isNaN(Number(dataBuffer))
      ? setData(() => +dataBuffer)
      : setDataBuffer(data + "");
  }

  return (
    <div className="flex w-1/2 gap-x-3">
      <label
        htmlFor=""
        className="cursor-ew-resize font-mono text-slate-500"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        ref={labelRef}
      >
        {label}
      </label>
      <input
        value={dataBuffer}
        onChange={(e) => setDataBuffer(e.target.value)}
        onBlur={setOrResetDataBuffer}
        onKeyDown={keyDownHandler}
        className="w-full"
        type="text"
      />
    </div>
  );
}
