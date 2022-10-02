import html2canvas from "html2canvas";

export default function ExportButton({ rootRef }: any) {
  async function exportPNG() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
        backgroundColor: null,
      });
      const img = canvas
        .toDataURL("image/png", 1.0);

      const a = document.createElement('a');
      a.href = img;
      a.download = 'tweet.png'
      a.click();
      a.remove();
    }
  }

  async function copytoClipboard() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
      });

      canvas.toBlob((blob: any) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        navigator.clipboard.write(data);
      });
    }
  }

  return (
    <div className="group flex h-11 w-32 items-center justify-center overflow-hidden rounded-full bg-black text-white transition-[width] delay-300 hover:w-56 hover:delay-[0ms]">
      <div className="absolute opacity-100 transition-opacity delay-200 group-hover:opacity-0 group-hover:delay-[0ms]">
        Export
      </div>
      <div className="h-full w-56 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:delay-150">
        <div className="flex h-full w-full -translate-x-[62px] items-center transition-transform delay-1000 group-hover:translate-x-0 group-hover:delay-[0ms]">
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-6 hover:bg-neutral-900"
            onClick={exportPNG}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Save</span>
          </button>
          <button
            className="flex h-full w-1/2 items-center gap-x-1.5 pl-4 hover:bg-neutral-900"
            onClick={copytoClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
