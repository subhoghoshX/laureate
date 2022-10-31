import { useCardStore } from "../../store/card";
import { Switch, Listbox, Transition } from "@headlessui/react";
import { useTweetStore } from "../../store/tweet";
import { useState, Fragment, useEffect } from "react";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface Font {
  id: number;
  name: string;
  value: string;
  fetched: boolean;
}

const fonts: Font[] = [
  { id: 1, name: "System UI", value: "stystem-ui", fetched: true },
  { id: 2, name: "Comic Neue", value: "Comic+Neue", fetched: false },
  { id: 3, name: "Inter", value: "Inter", fetched: false },
  { id: 4, name: "Reggae One", value: "Reggae+One", fetched: false },
];

export default function Card() {
  const setFont = useCardStore((state) => state.setFont);
  const isMetricsVisible = useTweetStore((state) => state.isMetricsVisible);
  const setIsMetricsVisible = useTweetStore(
    (state) => state.setIsMetricsVisible,
  );

  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  useEffect(() => {
    async function onChangeHandler(font: Font) {
      setSelectedFont(font);

      if (font.fetched !== true) {
        const res = await fetch(
          `https://fonts.googleapis.com/css2?family=${font.value}:wght@400;700&display=swap`,
        );

        const css = await res.text();

        const style = document.createElement("style");
        style.innerText = css;
        const head = document.head;
        head.appendChild(style);
      }
      setFont((f) => new Set([font.name, ...f]));
      font.fetched = true;
    }

    onChangeHandler(selectedFont);
  }, [selectedFont, setFont]);

  return (
    <div className="firefox-padding-fix border-t p-5 pr-3 dark:border-[#5c5c5c]">
      <h2 className="font-bold">Text</h2>

      <Listbox value={selectedFont} onChange={setSelectedFont}>
        <div className="mt-3 flex items-center gap-x-4">
          <Listbox.Label className="text-gray-500">Font</Listbox.Label>
          <div className="relative mt-1 flex-grow">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:bg-neutral-600 dark:text-white sm:text-sm">
              <span className="block truncate">{selectedFont.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-600 sm:text-sm">
                {fonts.map((font, fontIdx) => (
                  <Listbox.Option
                    key={fontIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-4 ${
                        active
                          ? "bg-amber-100 text-amber-900"
                          : "text-gray-900 dark:text-white"
                      }`
                    }
                    value={font}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {font.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-600 dark:text-amber-500">
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      </Listbox>

      <Switch.Group>
        <div className="mt-3 flex items-center justify-between">
          <Switch.Label className="mr-4 text-gray-500">
            Public Metrics
          </Switch.Label>
          <Switch
            checked={isMetricsVisible}
            onChange={(val: boolean) => setIsMetricsVisible(() => val)}
            className={`${
              isMetricsVisible
                ? "bg-blue-600"
                : "bg-gray-200 dark:bg-neutral-600"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
          >
            <span
              className={`${
                isMetricsVisible ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}
