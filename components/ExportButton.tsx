import html2canvas from "html2canvas";
import { useCardStore } from "../store";

export default function ExportButton({ rootRef }: any) {
  const cardScale = useCardStore((state: any) => state.scale);

  async function exportPNG() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3 + 1/cardScale,
        backgroundColor: null,
      });
      const img = canvas
        .toDataURL("image/png", 1.0)
        .replace("image/png", "image/octet-stream");
      window.location.href = img;
    }
  }

  async function copytoClipboard() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
      });

    canvas.toBlob((blob:any) => {
      const data = [new ClipboardItem({"image/png":blob})];
      navigator.clipboard.write(data);
    });
  }
  }

  return (
    <button
      className="rounded bg-gray-300 px-4 py-1 leading-normal"
      onClick={exportPNG}
    >
      Download
    </button>
  );
}
