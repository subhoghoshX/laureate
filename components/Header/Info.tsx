import { useState } from "react";

export default function Info() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="relative mr-auto h-10 w-10">
      <button
        className="group flex h-full w-full items-center justify-center rounded-full bg-slate-200 dark:bg-[#3c3c3c]"
        onClick={() => setIsDemoOpen((c) => !c)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 dark:stroke-gray-200 dark:group-hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </button>
      <aside
        className={`h-90 absolute -right-[108px] top-14 z-10 w-64 translate-y-40 self-end overflow-hidden rounded-md bg-white opacity-0 shadow-[1px_1px_5px_rgba(0,0,0,0.25)] ease-out dark:bg-[#2c2c2c] ${
          isDemoOpen
            ? "!translate-y-0 !opacity-100 transition-[transform,opacity] duration-200"
            : "pointer-events-none transition-[transform,opacity] duration-200"
        }`}
      >
        <h2 className="px-4 pt-6 font-bold text-gray-700 dark:text-white">
          How to use the app
        </h2>
        <ul className="h-full w-full list-disc space-y-3 p-5 pl-8 pb-7 text-justify text-sm text-gray-700 dark:text-gray-300">
          <li>
            To generate the image, paste a tweet link into the input field
            above.
          </li>
          <li>
            To resize the card, move your mouse cursor to the card&apos;s edge.
          </li>
          <li>
            To move the card, press{" "}
            <span className="rounded bg-gray-200 px-1 pb-0.5 dark:bg-[#5c5c5c]">
              space
            </span>{" "}
            and the left mouse button.
          </li>
          <li className="[&>span]:font-semibold">
            You can change the <span>color</span>, <span>width</span>,{" "}
            <span>height</span>, <span>border radius</span>,{" "}
            <span>layouts</span>, and many other settings in the side panel on
            the right.
          </li>
        </ul>
      </aside>
    </div>
  );
}
