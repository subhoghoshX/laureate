import html2canvas from "html2canvas";
import React from "react";

export default function ExportButton({ rootRef }: any) {
  const [show, setShow] = React.useState(false);

  async function exportPNG() {
    if (rootRef.current !== undefined) {
      const canvas = await html2canvas(rootRef.current, {
        allowTaint: true,
        useCORS: true,
        scale: 3,
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

      canvas.toBlob((blob: any) => {
        const data = [new ClipboardItem({ "image/png": blob })];
        navigator.clipboard.write(data);
      });
    }
  }

  return (
    <div>
      <div className="mb-2 flex w-screen items-center justify-center">
        {show ? (
          <div>
            <div className="mb-8 flex w-screen flex-row items-center justify-center">
              <button
                className="flex w-32  rounded-3xl bg-gray-700 px-2 py-3 text-center text-xl tracking-wide text-white shadow-lg shadow-cyan-500/50"
                onClick={exportPNG}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1.5 h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Save
              </button>
            </div>
            <div className="mb-2 flex w-screen items-center justify-center">
              <button className="flex w-32  rounded-3xl bg-gray-700 px-2 py-3 text-center text-xl tracking-wide text-white shadow-lg shadow-cyan-500/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-1.5 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
                Copy
              </button>
            </div>
          </div>
        ) : (
          <button
            className="mb:3 w-32 animate-bounce rounded-3xl bg-gray-700 px-2 py-3 leading-normal text-white shadow-lg shadow-cyan-500/50"
            onClick={() => setShow(true)}
          >
            Export
          </button>
        )}
      </div>
    </div>
  );
}
