import { useGradientStore } from "../../store/gradient";

export default function Colors() {
  const gradients = useGradientStore((state) => state.gradients);
  const selectedGradient = useGradientStore((state) => state.selectedGradient);
  const setSelectedGradient = useGradientStore(
    (state) => state.setSelectedGradient,
  );

  return (
    <div className="firefox-padding-fix border-t p-5 pr-3 dark:border-[#5c5c5c]">
      <h2 className="font-bold">Colors</h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {gradients.map((gradient) => (
          <button
            key={gradient.id}
            style={{
              background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
            }}
            className={`h-9 w-9 rounded-lg ${
              JSON.stringify(gradient) === JSON.stringify(selectedGradient)
                ? `ring-2 ring-blue-400`
                : ""
            }`}
            onClick={() => setSelectedGradient(() => gradient)}
          ></button>
        ))}
      </div>
    </div>
  );
}
