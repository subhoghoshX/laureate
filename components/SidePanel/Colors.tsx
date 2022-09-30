import { useGradientStore } from "../../store";

export default function Colors() {
  const gradients = useGradientStore((state: any) => state.gradients);
  const selectGradient = useGradientStore((state: any) => state.selectGradient);

  return (
    <div className="firefox-padding-fix border-t p-5 group-hover:pr-3.5">
      <h2 className="font-bold">Colors</h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {gradients.map((gradient: any) => (
          <button
            key={gradient.id}
            style={{
              background: `linear-gradient(to bottom right, ${gradient.from}, ${gradient.to})`,
            }}
            className={`h-9 w-9 rounded-lg ${
              gradient.selected ? `ring-2` : ""
            }`}
            onClick={() => selectGradient(gradient.id)}
          ></button>
        ))}
      </div>
    </div>
  );
}
