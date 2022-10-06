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
    if (e.keyCode === 38) {
      setData(() => +dataBuffer + 1);
    } else if (e.keyCode === 40) {
      setData(() => +dataBuffer - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(dataBuffer))) {
        setDataBuffer(data + "");
      } else {
        setData(() => +dataBuffer);
      }
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

  return (
    <label className="flex h-7 border border-transparent text-xs focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 hover:border-gray-200 hover:focus-within:border-blue-500">
      <span
        className="flex w-[37%] cursor-ew-resize select-none items-center justify-center text-slate-500"
        ref={labelRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
      >
        {label}
      </span>

      <input
        value={dataBuffer}
        onChange={(e) => setDataBuffer(e.target.value)}
        onBlur={() =>
          Number.isNaN(Number(dataBuffer))
            ? setDataBuffer(data + "")
            : setData(() => Number(dataBuffer))
        }
        onClick={(e: any) => e.target.select()}
        onKeyDown={keyDownHandler}
        className="block w-[63%] cursor-default focus:outline-none"
        type="text"
      />
    </label>
  );
}
