interface Props {
  setIsPanelOpen: (callback: (c: boolean) => boolean) => void;
}

export default function ButtonGroup({ setIsPanelOpen }: Props) {
  return (
    <div className="flex w-56 justify-end gap-x-4">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      <button onClick={() => setIsPanelOpen((c) => !c)}>
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
  );
}
