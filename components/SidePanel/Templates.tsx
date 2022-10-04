import { useTemplateStore } from "../../store/template";

export default function Templates() {
  const selectedTemplate = useTemplateStore((state) => state.selectedTemplate);
  const setSelectedTemplate = useTemplateStore(
    (state) => state.setSelectedTemplate,
  );

  return (
    <div className="firefox-padding-fix border-t p-5 pr-3">
      <h2 className="font-bold">Templates</h2>
      <div className="mt-4 space-y-4">
        <div
          className={`rounded-lg p-3.5 ring-2 ring-gray-200 transition-shadow ${
            selectedTemplate === "first" ? "ring-blue-400" : ""
          }`}
          onClick={() => setSelectedTemplate(() => "first")}
        >
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

        <div
          className={`rounded-lg p-3.5 ring-2 ring-gray-200 transition-shadow ${
            selectedTemplate === "second" ? "ring-blue-400" : ""
          }`}
          onClick={() => setSelectedTemplate(() => "second")}
        >
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>
            <div className="w-full space-y-1">
              <div className="h-2 w-1/2 rounded-full bg-gray-300"></div>
              <div className="h-1 w-1/3 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div className="mt-1 w-full space-y-0.5 pl-8">
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 rounded-full bg-gray-300"></div>
            <div className="h-1.5 w-1/2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        <div
          className={`rounded-lg p-3.5 ring-2 ring-gray-200 transition-shadow ${
            selectedTemplate === "third" ? "ring-blue-400" : ""
          }`}
          onClick={() => setSelectedTemplate(() => "third")}
        >
          <div className="flex gap-x-2">
            <div className="h-6 w-6 shrink-0 rounded-full bg-gray-300"></div>

            <div className="w-full space-y-1">
              <div className="flex items-center gap-x-1">
                <div className="h-2 w-12 rounded-full bg-gray-300"></div>
                <div className="h-1 w-10 rounded-full bg-gray-300"></div>
              </div>
              <div className="w-full space-y-0.5 pt-0.5">
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
