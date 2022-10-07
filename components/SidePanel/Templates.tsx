import { useTemplateStore } from "../../store/template";

export default function Templates() {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setSelectedTemplate = useTemplateStore(
    (state) => state.setSelectedTemplate,
  );

  return (
    <div className="firefox-padding-fix border-t p-5 pr-3 dark:border-[#5c5c5c]">
      <h2 className="font-bold">Templates</h2>
      <div className="mt-4 space-y-4">
        <div
          className={`rounded-lg p-3.5 ring-2 transition-shadow ${
            selectedTemplate === "first"
              ? "ring-blue-400"
              : "ring-gray-200 dark:ring-neutral-600"
          }`}
          onClick={() => setSelectedTemplate(() => "first")}
        >
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300 dark:bg-[#4c4c4c]"></div>
            <div className="w-full space-y-1 dark:[&>div]:bg-[#4c4c4c]">
              <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
              <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-1 w-full space-y-0.5 dark:[&>div]:bg-[#4c4c4c]">
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div
          className={`rounded-lg p-3.5 ring-2 transition-shadow ${
            selectedTemplate === "second"
              ? "ring-blue-400"
              : "ring-gray-200 dark:ring-neutral-600"
          }`}
          onClick={() => setSelectedTemplate(() => "second")}
        >
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300 dark:bg-[#4c4c4c]"></div>
            <div className="w-full space-y-1 dark:[&>div]:bg-[#4c4c4c]">
              <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
              <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-1 w-full space-y-0.5 pl-8 dark:[&>div]:bg-[#4c4c4c]">
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div
          className={`rounded-lg p-3.5 ring-2 transition-shadow ${
            selectedTemplate === "third"
              ? "ring-blue-400"
              : "ring-gray-200 dark:ring-neutral-600"
          }`}
          onClick={() => setSelectedTemplate(() => "third")}
        >
          <div className="flex gap-x-2">
            <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300 dark:bg-[#4c4c4c]"></div>

            <div className="w-full space-y-1">
              <div className="flex items-center gap-x-1 dark:[&>div]:bg-[#4c4c4c]">
                <div className="h-2 w-12 rounded-full bg-gray-300"></div>
                <div className="h-1 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div className="w-full space-y-0.5 pt-0.5 dark:[&>div]:bg-[#4c4c4c]">
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 rounded-full bg-gray-300"></div>
                <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
