import { useArrowStore } from "../store/arrow";

export default function Arrow() {
  const showArrow = useArrowStore((state) => state.showArrow);
  const arrowX = useArrowStore((state) => state.X);
  const arrowY = useArrowStore((state) => state.Y);

  return (
    <>
      {showArrow && (
        <span
          className="fixed z-20 text-sm font-bold"
          style={{ left: arrowX, top: arrowY }}
        >
          ⟷
        </span>
      )}
    </>
  );
}
