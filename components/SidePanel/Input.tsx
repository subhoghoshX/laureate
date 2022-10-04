import { useEffect, useState } from "react";
import { useArrowStore } from "../../store/arrow";

interface Props {
  data: number;
  action: (callback: (dimension: number) => number) => void;
  label: string;
}

export default function ({ data, action: setData, label }: Props) {
  const [dimensionBuffer, setDimensionBuffer] = useState("");
  useEffect(() => {
    setDimensionBuffer(data + "");
  }, [data]);
  function keyDownHandler(e: any) {
    if (e.keyCode === 38) {
      setData(() => +dimensionBuffer + 1);
    } else if (e.keyCode === 40) {
      setData(() => +dimensionBuffer - 1);
    } else if (e.keyCode === 13) {
      if (Number.isNaN(Number(dimensionBuffer))) {
        setDimensionBuffer(data + "");
      } else {
        setData(() => +dimensionBuffer);
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
    document.addEventListener("pointerlockchange", pointerLockChangeHandler);
    e.target.requestPointerLock();
  }

  function pointerLockChangeHandler() {
    if (document.pointerLockElement) {
      document.addEventListener("mousemove", incrementDimension);
    } else {
      console.log("after mouseup");
      document.removeEventListener("mousemove", incrementDimension);
      setIsArrowVisible(() => false);
    }
  }

  function incrementDimension(e: any) {
    setX((X) => X + e.movementX);
    setData((data) => data + e.movementX);
  }

  function mouseUpHandler() {
    document.exitPointerLock();
    setIsArrowVisible(() => false);
    document.removeEventListener("pointerlockchange", pointerLockChangeHandler);
  }

  return (
    <div className="flex w-1/2 gap-x-3">
      <label
        htmlFor=""
        className="cursor-ew-resize font-mono text-slate-500"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        data-name="width"
      >
        {label}
      </label>
      <input
        value={dimensionBuffer}
        onChange={(e) => setDimensionBuffer(e.target.value)}
        onBlur={() =>
          Number.isNaN(Number(dimensionBuffer))
            ? setDimensionBuffer(data + "")
            : setData(() => Number(dimensionBuffer))
        }
        onKeyDown={keyDownHandler}
        className="w-full"
        type="text"
      />
    </div>
  );
}
