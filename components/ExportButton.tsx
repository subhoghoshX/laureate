import html2canvas from "html2canvas";
import {
  CheckIcon,
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ExportButton({ rootRef, className }: any) {
  const [SaveIcon, setSaveIcon] = useIcon([ArrowDownTrayIcon, CheckIcon]);

  async function exportPNG() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
        backgroundColor: null,
      });
      const img = canvas.toDataURL("image/png", 1.0);

      const a = document.createElement("a");
      a.href = img;
      a.download = "tweet.png";
      a.click();
      a.remove();
      setSaveIcon(true);
    }
  }

  const [CopyIcon, setCopyIcon] = useIcon([DocumentDuplicateIcon, CheckIcon]);

  async function copytoClipboard() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
        backgroundColor: null,
      });

      canvas.toBlob((blob: any) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        navigator.clipboard.write(data);
      });
      setCopyIcon(true);
    }
  }

  return (
    <div
      className={`group flex h-full w-32 items-center justify-center overflow-hidden rounded-full bg-black text-white transition-[width] delay-300 hover:w-56 hover:delay-[0ms] dark:bg-white dark:text-neutral-800  ${className}`}
    >
      <div className="absolute opacity-100 transition-opacity delay-200 group-hover:opacity-0 group-hover:delay-[0ms]">
        Export
      </div>
      <div className="h-full w-56 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:delay-150">
        <div className="flex h-full w-full -translate-x-[62px] items-center transition-transform delay-1000 group-hover:translate-x-0 group-hover:delay-[0ms]">
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-6 hover:bg-neutral-900 dark:hover:bg-neutral-200"
            onClick={exportPNG}
          >
            <SaveIcon className="h-5 w-5" />
            <span>Save</span>
          </button>
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-4 hover:bg-neutral-900 dark:hover:bg-neutral-200"
            onClick={copytoClipboard}
          >
            <CopyIcon className="h-5 w-5" />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function useIcon(icons: any, time = 1000) {
  const [showSecondIcon, setShowSecondIcon] = useState(false);

  useEffect(() => {
    let tm: ReturnType<typeof setTimeout>;
    if (showSecondIcon) {
      tm = setTimeout(() => setShowSecondIcon(false), time);
    }
    return () => tm && clearTimeout(tm);
  });

  return [showSecondIcon ? icons[1] : icons[0], setShowSecondIcon];
}
