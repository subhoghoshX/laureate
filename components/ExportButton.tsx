import html2canvas from "html2canvas";
import {
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

export default function ExportButton({ rootRef, className }: any) {
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
    }
  }

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
    }
  }

  return (
    <div
      className={`group flex h-full w-32 items-center justify-center overflow-hidden rounded-full bg-black text-white transition-[width] delay-300 hover:w-56 hover:delay-[0ms]  ${className}`}
    >
      <div className="absolute opacity-100 transition-opacity delay-200 group-hover:opacity-0 group-hover:delay-[0ms]">
        Export
      </div>
      <div className="h-full w-56 scale-0 opacity-0 transition-[opacity_transform] duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-150">
        <div className="flex h-full w-full -translate-x-[62px] items-center transition-transform delay-1000 group-hover:translate-x-0 group-hover:delay-[0ms]">
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-6 hover:bg-neutral-900"
            onClick={exportPNG}
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Save</span>
          </button>
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-4 hover:bg-neutral-900"
            onClick={copytoClipboard}
          >
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
