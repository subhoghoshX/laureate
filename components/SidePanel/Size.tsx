import { useCardStore } from "../../store/card";
import Input from "./Input";

export default function Size() {
  const cardWidth = useCardStore((state) => state.width);
  const setWidth = useCardStore((state) => state.setWidth);

  const cardHeight = useCardStore((state) => state.height);
  const setHeight = useCardStore((state) => state.setHeight);

  const radius = useCardStore((state) => state.radius);
  const setRadius = useCardStore((state) => state.setRadius);

  return (
    <div className="firefox-padding-fix p-5 pr-3">
      <h2 className="font-bold">Size</h2>
      <form className="mt-4 flex flex-wrap gap-y-4">
        <Input label="W" data={cardWidth} action={setWidth} />
        <Input label="H" data={cardHeight} action={setHeight} />
        <Input label="R" data={radius} action={setRadius} />
      </form>
    </div>
  );
}
