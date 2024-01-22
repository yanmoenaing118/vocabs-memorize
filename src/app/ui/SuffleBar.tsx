"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SelectDemo from "./utils/Select";

export default function SuffleBar() {
  const navigateOptions: NavigateOptions = {
    scroll: false,
  };
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const getQueryString = (key: string, value: string) => {
    const parmas = new URLSearchParams(searchParams);
    if (key && value) {
      parmas.set(key, value);
    }
    return `${pathname}?${parmas.toString()}`;
  };

  const getByChapters = (ch: string) => {
    const queryString = getQueryString("ch", ch);
    replace(queryString, navigateOptions);
  };

  const toggleWords = (isActive: boolean) => {
    const value = isActive ? "true" : "false";
    const queryString = getQueryString("onlyWord", value);
    replace(queryString, navigateOptions);
  };

  const toggleMeanings = (isActive: boolean) => {
    const value = isActive ? "true" : "false";
    const queryString = getQueryString("onlyMeaning", value);
    replace(queryString, navigateOptions);
  };

  const clearFilter = () => {
    replace(`${pathname}?ch=${searchParams.get("ch")?.toString()}`);
  };

  return (
    <div className="sticky top-4">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex gap-3">
          <button
            className="bg-gray-100 block w-full hover:bg-gray-200 text-gray-600 font-bold py-2 px-2 rounded text-sm"
            onClick={clearFilter}
          >
            Clear
          </button>
        </div>

        <div>
          <div className="text-white underline mb-1">Items per page</div>
          <SelectDemo />
        </div>

        <div className="flex gap-3 items-center">
          {/* <Checkbox onCheck={showAll}/> */}
          <ToggleLang
            active={
              searchParams.get("onlyWord")?.toString() === "true" ||
              !searchParams.has("onlyWord")
            }
            lang="jp"
            onToggle={toggleWords}
          />
          <ToggleLang
            active={
              searchParams.get("onlyMeaning")?.toString() === "true" ||
              !searchParams.has("onlyMeaning")
            }
            lang="mm"
            onToggle={toggleMeanings}
          />
        </div>
        <Chapters
          active={searchParams.get("ch")?.toString() || 1}
          onSelect={(ch: string) => getByChapters(ch)}
        />
      </div>
    </div>
  );
}

const Chapters = ({ active, onSelect }: any) => {
  return (
    <div>
      <div className="text-white underline mb-1">Chapters</div>
      <div className="grid grid-cols-4 justify-items-start gap-3 text-white">
        {new Array(8)
          .fill(0)
          .map((_, i) => i + 1)
          .map((_, i) => (
            <button
              onClick={() => onSelect(_)}
              key={_}
              className={active == _ ? "text-gray-700" : "text-white"}
            >
              {_}
            </button>
          ))}
      </div>
    </div>
  );
};

const ToggleLang = ({ active, lang, onToggle }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ToggleButton active={active} onToggle={onToggle} />
      <span className="text-white bold uppercase">{lang}</span>
    </div>
  );
};

const ToggleButton = ({ active, onToggle }: any) => {
  const [isActive, setIsActive] = useState(active);

  const toggleButton = () => {
    onToggle(!isActive);
    setIsActive(!isActive);
  };

  return (
    <button
      className={`bg-gray-300 w-12 h-6 rounded-full  transition-colors duration-300 ${
        isActive ? "bg-blue-500" : "bg-gray-500"
      }`}
      onClick={toggleButton}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? "translate-x-7" : "translate-x-0"
        }`}
      />
    </button>
  );
};

const Checkbox = ({ onCheck }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheck(isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer mr-3 mb-4">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-900 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="ml-2 text-green-200">Show Both</span>
    </label>
  );
};
