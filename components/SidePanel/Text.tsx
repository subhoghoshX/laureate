import { useCardStore } from "../../store/card";

export default function Card() {
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
    <div className="firefox-padding-fix border-t p-5 pr-3 dark:border-[#5c5c5c]">
      <h2 className="font-bold">Text</h2>
      <div className="mt-4 dark:text-white">
        <label htmlFor="fonts">Font</label>
        <select
          name="fonts"
          id="fonts"
          onChange={onChangeHandler}
          className="dark:bg-black"
        >
          <option value="system-ui">System UI</option>
          <option value="Comic+Neue">Comic Neue</option>
          <option value="Inter">Inter</option>
          <option value="Reggae+One">Reggae One</option>
        </select>
      </div>
    </div>
  );
}
