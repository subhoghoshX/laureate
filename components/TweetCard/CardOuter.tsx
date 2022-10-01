import CardInner from "./CardInner";
import { useMemo } from "react";
import { useCardStore, useGradientStore } from "../../store";

export default function CardOuter({ rootRef }: any) {
  const gradients = useGradientStore((state: any) => state.gradients);
  const gradient = useMemo(
    () => gradients.filter((gradient: any) => gradient.selected)[0],
    [gradients],
  );

  const rounded = useCardStore((state: any) => state.rounded);

  return (
    <div
      ref={rootRef}
      style={{
        background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
        borderRadius: `${rounded}px`,
      }}
      className="flex h-full items-center justify-center overflow-hidden py-16 px-20 leading-normal"
    >
      <CardInner />
    </div>
  );
}
