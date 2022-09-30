import CardInner from "./CardInner";
import { useMemo } from "react";
import { useGradientStore } from "../../store";

export default function ({ rootRef }: any) {
  const gradients = useGradientStore((state: any) => state.gradients);
  const gradient = useMemo(
    () => gradients.filter((gradient: any) => gradient.selected)[0],
    [gradients],
  );

  return (
    <div
      ref={rootRef}
      style={{
        background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
      }}
      className="flex h-full items-center justify-center overflow-hidden rounded-2xl py-16 px-20 leading-normal"
    >
      <CardInner />
    </div>
  );
}
