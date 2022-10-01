import { Dispatch, SetStateAction } from "react";
import { useTheme } from 'next-themes';

interface Props {
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setIsPanelOpen }: Props) {

  const { theme, setTheme } = useTheme();

  return (
    <header className="flex items-center justify-between gap-x-4 bg-white dark:bg-[#2c2c2c] px-4 py-2 shadow">
      <img src={`/laureate-logo${theme=="dark"?"-darkmode":""}.svg`} alt="laureate logo" className="" />
      <form className="w-1/2">
        <input
          className="w-full rounded-full bg-slate-200 dark:bg-[#3c3c3c] px-6 py-2.5 text-sm"
          type="text"
          placeholder="Paste tweet link here"
        />
      </form>
      <div className="flex gap-x-3">
        <button>
          <img 
            onClick={()=>theme==="light"?setTheme("dark"):setTheme("light")}
            src="/moon.svg" 
            alt="moon icon" />
        </button>
        <button>
          <img
            onClick={() => setIsPanelOpen((c) => !c)}
            src="/flap.svg"
            alt="flap icon"
          />
        </button>
      </div>
    </header>
  );
}
