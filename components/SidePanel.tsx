interface Props {
  isPanelOpen: boolean;
}

export default function SidePanel({ isPanelOpen }: Props) {
  return (
    <aside className="h-full w-60 self-end overflow-hidden p-2">
      <div
        className={`h-full overflow-y-auto rounded-md bg-white text-sm shadow-[1px_1px_5px_rgba(0,0,0,0.25)] transition-transform duration-200 ease-out ${
          isPanelOpen ? "translate-x-0" : "translate-x-60"
        }`}
      >
        <div className="p-5">
          <h2 className="font-bold">Size</h2>
          <div className="mt-4 flex">
            <div className="flex gap-x-3">
              <label htmlFor="" className="font-mono text-slate-500">
                W
              </label>
              <input value={554} className="w-full" type="text" />
            </div>

            <div className="flex gap-x-3">
              <label htmlFor="" className="font-mono text-slate-500">
                H
              </label>
              <input value={224} className="w-full" type="text" />
            </div>
          </div>
        </div>
        <div className="border-t p-5">
          <h2 className="font-bold">Background</h2>
          <div className="mt-3 grid grid-cols-4 gap-3">
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
            <button className="h-9 w-9 rounded-lg bg-red-500"></button>
          </div>
        </div>
        <div className="border-t p-5">
          <h2 className="font-bold">Templates</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div className="rounded-lg border-2 p-3">
              <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
                <div className="w-full space-y-1">
                  <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
                </div>
              </div>
              <div className="mt-1 w-full space-y-0.5">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
