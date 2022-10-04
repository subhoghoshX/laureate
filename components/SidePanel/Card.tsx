import { useCardStore } from "../../store/card";
import Input from "./Input";

export default function Card() {
  const opacity = useCardStore((state) => state.opacity);
  const setOpacity = useCardStore((state) => state.setOpacity);
  return (
    <div className="firefox-padding-fix border-t p-5 pr-3">
      <h2 className="font-bold">Card</h2>
      <form className="mt-4 flex flex-wrap gap-y-4">
        <Input label="Opacity" data={opacity} action={setOpacity} />
      </form>
    </div>
  );
}
