import { useArrowStore } from "../store/arrow";

export default function Arrow() {
  const isArrowVisible = useArrowStore((state) => state.isArrowVisible);
  const arrowX = useArrowStore((state) => state.X);
  const arrowY = useArrowStore((state) => state.Y);

  return (
    <>
      {isArrowVisible && (
        <span
          className="fixed z-20 text-sm font-bold dark:text-white"
          style={{ left: arrowX, top: arrowY }}
        >
          ⟷
        </span>
      )}
    </>
  );
}
