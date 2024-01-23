"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Select, SelectItem } from "@/app/ui/utils/Select";
import ToggleButton from "./ToggleButton";

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
    replace(`${pathname}?ch=${searchParams.get("ch")?.toString() || 1}`);
  };

  const getItemsPerPage = (value: string) => {
    const queryString = getQueryString("count", value);
    replace(queryString, navigateOptions);
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
          <ItemsPerPageSelector
            value={Number(searchParams.get("count")?.toString()) || 6}
            onSelected={getItemsPerPage}
          />
        </div>

        <div className="flex gap-3 items-center">
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
      <div className="grid grid-cols-4 justify-items-start gap-2 text-white">
        {new Array(25)
          .fill(0)
          .map((_, i) => i + 1)
          .map((_, i) => (
            <button
              onClick={() => onSelect(_)}
              key={_}
              className={active == _ ? "text-black" : "text-white"}
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

const ItemsPerPageSelector = ({ value, onSelected }: any) => {
  return (
    <>
      <div className="text-white underline mb-1">Items per page</div>
      <Select value={value} width="120px" onValueChange={onSelected}>
        {[3, 6, 9, 12, 15, 18, 21].map((no) => (
          <SelectItem value={no} key={no}>
            <span className="text-black px-2.5 text-sm">{no}</span>
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
