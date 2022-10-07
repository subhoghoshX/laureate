import { MutableRefObject } from "react";
import { useDarkStore } from "../../store/dark";
import ExportButton from "../ExportButton";

interface Props {
  setIsPanelOpen: (callback: (c: boolean) => boolean) => void;
  rootRef: MutableRefObject<undefined>;
}

export default function ButtonGroup({ setIsPanelOpen, rootRef }: Props) {
  const setIsDark = useDarkStore((state) => state.setIsDark);

  return (
    <div className="h-full w-auto pl-4 lg:w-56">
      <div className="relative flex h-full items-center justify-end gap-x-4 md:justify-between">
        <a
          className="z-10"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/subhoghoshX/laureate"
        >
          <svg
            className="h-6 w-6 fill-[#323232] dark:fill-white"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <button
          className="relative z-10"
          onClick={() => setIsDark((isDark) => !isDark)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 dark:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
        <div className="absolute hidden h-10 w-full items-center justify-center lg:flex">
          <ExportButton className="z-20" rootRef={rootRef} />
        </div>
        <button
          className="relative z-10 lg:hidden"
          onClick={() => setIsPanelOpen((c) => !c)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              fill="white"
              stroke="#323232"
              strokeWidth="2"
            />
            <path
              d="M13.5 3.5H18C19.3807 3.5 20.5 4.61929 20.5 6V18C20.5 19.3807 19.3807 20.5 18 20.5H13.5V3.5Z"
              fill="#AFAFAF"
              stroke="#323232"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
