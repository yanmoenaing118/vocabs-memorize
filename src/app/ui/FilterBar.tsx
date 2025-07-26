
"use client";
import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Select, SelectItem } from "@/app/ui/utils/Select";
import clsx from "clsx";
import Image from "next/image";


const navigateOptions: NavigateOptions = {
  scroll: false,
};

export default function FilterBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);


  const getByChapters = (ch: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("ch", ch);
    params.set("offset", "0");
    replace(`${pathname}?${params.toString()}`, navigateOptions);
  };

  const clearFilter = () => {
    replace(`${pathname}?ch=${searchParams.get("ch")?.toString() || 1}`);
  };

  const getItemsPerPage = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("count", value);
    params.set("offset", "0");
    replace(`${pathname}?${params.toString()}`, navigateOptions);
  };

  return (
    <div className="sticky top-4">
      <div className="flex flex-col justify-between gap-8">


        {/* This div now acts as a trigger to open the modal */}
      <div
        className="relative w-full h-[280px] overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsModalOpen(true)}
      >
        <Image
          src="/nami.jpg"
          alt="Namie"
          layout="fill"
          className="object-cover scale-150"
        />
      </div>

      {/* Modal for displaying the full image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[10000]"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl z-50"
            aria-label="Close image view"
          >
            &times;
          </button>
          <div
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/nami.jpg"
              alt="Namie full view"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      )}

        <div className="mt-4">
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
              className={
                active == _
                  ? "text-green-500 underline font-bold"
                  : "text-white"
              }
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
            <span
              className={clsx(
                " px-2.5 text-sm",
                index === 0 ? "text-white" : "text-black"
              )}
            >
              {no == -1 ? "All" : no}
            </span>
          </SelectItem>
        ))}
      </Select>
    </>
  );
};
