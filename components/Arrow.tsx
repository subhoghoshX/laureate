import { useArrowStore } from "../store";

export default function Arrow() {
  const showArrow = useArrowStore((state: any) => state.showArrow);
  const arrowX = useArrowStore((state: any) => state.X);
  const arrowY = useArrowStore((state: any) => state.Y);

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
