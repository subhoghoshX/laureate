import Text from "./Text";
import Colors from "./Colors";
import Size from "./Card";
import Templates from "./Templates";

interface Props {
  isPanelOpen: boolean;
}

export default function SidePanel({ isPanelOpen }: Props) {
  return (
    <aside
      className={`h-full w-60 self-end overflow-hidden p-2 transition-transform duration-200 ease-out lg:translate-x-0 ${
        isPanelOpen ? "translate-x-0" : "translate-x-60"
      }`}
    >
      <div
        className={`scrollbar h-full overflow-y-auto rounded-md bg-white text-sm shadow-[1px_1px_5px_rgba(0,0,0,0.25)] dark:bg-[#2c2c2c] dark:[&_h2]:text-white`}
      >
        <Size />
        <Colors />
        <Templates />
        <Text />
      </div>
    </aside>
  );
}
