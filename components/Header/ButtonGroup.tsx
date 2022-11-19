import { MutableRefObject } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { GitHubIcon, PanelIcon } from './Icons'

interface Props {
  setIsPanelOpen: (callback: (c: boolean) => boolean) => void;
}

export default function ButtonGroup({ setIsPanelOpen }: Props) {
  function toggleDark() {
    if (JSON.parse(localStorage.getItem("isDark") || "false")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDark", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDark", "true");
    }
  }

  return (
    <div className="h-full w-auto pl-4 lg:w-56">
      <div className="relative flex h-full items-center justify-end gap-x-4">
        <a
          className="z-10"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/subhoghoshX/laureate"
        >
          <GitHubIcon className="h-[22px] w-[22px] fill-[#323232] dark:fill-white" />
        </a>
        <button className="relative z-10" onClick={toggleDark}>
          <MoonIcon className="h-6 w-6 dark:stroke-white" />
        </button>
        <button
          className="relative z-10 lg:hidden"
          onClick={() => setIsPanelOpen((c) => !c)}
        >
          <PanelIcon className="h-5 w-5 dark:fill-white" />
        </button>
      </div>
    </div>
  );
}
