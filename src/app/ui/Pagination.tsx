"use client";

import { TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onNext,
  onPrev,
}: any) {
  const totalPage = Math.round(totalItems / itemsPerPage);
  const nextPage = Math.min(Number(currentPage) + 1, totalPage + 1);
  const prevPage = Math.max(Number(currentPage) - 1, 0);
  const searchParams = useSearchParams();
  const count = Number(searchParams.get("count") || 6);
  if(count === -1) {
    return null;
  }
  return (
    <div className="text-white flex gap-3 items-center">
      <button
        onClick={() => onPrev(prevPage)}
        className={clsx(
          "border border-white text-white font-bold py-2 px-3 rounded inline-flex items-center",
          {
            "opacity-25": currentPage == 0 || totalPage == 0,
          }
        )}
        disabled={currentPage == 0 || totalPage ==  0}
      >
        <TrackPreviousIcon />
      </button>
      <span>
        {currentPage} / {totalPage >= 1 ? totalPage - 1 : 0}
      </span>
      <button
        onClick={() => onNext(nextPage)}
        className={clsx(
          "border border-white text-white font-bold py-2 px-3 rounded inline-flex items-center",
          {
            "opacity-25": currentPage == totalPage - 1 || totalPage == 0,
          }
        )}
        disabled={currentPage == totalPage - 1 || totalPage == 0}
      >
        <TrackNextIcon />
      </button>
    </div>
  );
}
