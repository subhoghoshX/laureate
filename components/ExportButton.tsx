import html2canvas from "html2canvas";

export default function ExportButton({ rootRef }: any) {
  async function exportPNG() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
      });
      const img = canvas
        .toDataURL("image/png", 1.0)
        .replace("image/png", "image/octet-stream");
      window.location.href = img;
    }
  }

  return (
    <button className="rounded bg-gray-300 px-4 py-1" onClick={exportPNG}>
      Download
    </button>
  );
}
