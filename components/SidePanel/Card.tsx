import { useCardStore } from "../../store/card";
import Input from "./Input";

export default function Card() {
  const opacity = useCardStore((state) => state.opacity);
  const setOpacity = useCardStore((state) => state.setOpacity);
  const setFont = useCardStore((state) => state.setFont);

  async function onChangeHandler(e: any) {
    const s = e.target;
    const font = s.value;
    const option = s[s.selectedIndex];
    const dataFetched = s[s.selectedIndex].getAttribute("data-fetched");

    if (font !== "system-ui" && dataFetched !== "true") {
      const res = await fetch(
        `https://fonts.googleapis.com/css2?family=${e.target.value}:wght@400;700&display=swap`,
      );

      const css = await res.text();

      const style = document.createElement("style");
      style.innerText = css;
      const head = document.head;
      head.appendChild(style);
    }
    setFont((f) => new Set([font.replaceAll("+", " "), ...f]));
    option.setAttribute("data-fetched", "true");
  }

  return (
    <div className="firefox-padding-fix border-t p-5 pr-3">
      <h2 className="font-bold">Card</h2>
      <form className="mt-4 flex flex-wrap gap-y-4">
        <Input label="Opacity" data={opacity} action={setOpacity} />
      </form>
      <div className="mt-4">
        <label htmlFor="fonts">Font</label>
        <select name="fonts" id="fonts" onChange={onChangeHandler}>
          <option value="system-ui">System UI</option>
          <option value="Comic+Neue">Comic Neue</option>
          <option value="Inter">Inter</option>
          <option value="Reggae+One">Reggae One</option>
        </select>
      </div>
    </div>
  );
}
