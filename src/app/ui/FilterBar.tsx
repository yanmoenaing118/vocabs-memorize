"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Select, SelectItem } from "@/app/ui/utils/Select";
import clsx from "clsx";

const navigateOptions: NavigateOptions = {
  scroll: false,
};

export default function FilterBar() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const getQueryString = (key: string, value: string) => {
    const parmas = new URLSearchParams(searchParams.toString());
    if (key && value) {
      parmas.set(key, value);
    }
    return `${pathname}?${parmas.toString()}`;
  };

  const getByChapters = (ch: string) => {
    const queryString = getQueryString("ch", ch);
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
        

        <div className="mt-16">
          <ItemsPerPageSelector
            value={Number(searchParams.get("count")?.toString()) || 6}
            onSelected={getItemsPerPage}
          />
        </div>

        
        <Chapters
          active={searchParams.get("ch")?.toString() || 1}
          onSelect={(ch: string) => getByChapters(ch)}
        />

        <div className="flex gap-3">
          <button
            className="bg-gray-100 bg-opacity-60 block w-full hover:bg-gray-200 text-gray-600 font-bold py-2 px-2 rounded text-sm"
            onClick={clearFilter}
          >
            Reset
          </button>
        </div>
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
              className={active == _ ? "text-green-500 underline font-bold" : "text-white"}
            >
              {_}
            </button>
          ))}
      </div>
    </div>
  );
};

const ItemsPerPageSelector = ({ value, onSelected }: any) => {
  return (
    <>
      <div className="text-white underline mb-1">Items per page</div>
      <Select value={value} width="120px" onValueChange={onSelected}>
        {[-1, 3, 6, 9, 12, 15, 18, 21].map((no, index) => (
          <SelectItem value={no} key={no}>
            <span className={clsx(" px-2.5 text-sm", index === 0 ? "text-white" : "text-black")}>{no == -1 ? "All" : no}</span>
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
