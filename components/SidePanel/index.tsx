import Colors from "./Colors";
import Size from "./Size";
import Templates from "./Templates";

interface Props {
  isPanelOpen: boolean;
}

export default function SidePanel({ isPanelOpen }: Props) {
  return (
    <aside
      className={`h-full w-60 self-end overflow-hidden p-2 transition-transform duration-200 ease-out ${
        isPanelOpen ? "translate-x-0" : "translate-x-60"
      }`}
    >
      <div
        className={`scrollbar group h-full overflow-y-hidden rounded-md bg-white text-sm shadow-[1px_1px_5px_rgba(0,0,0,0.25)] hover:overflow-y-auto`}
      >
        <Size />
        <Colors />
        <Templates />
      </div>
    </aside>
  );
}
