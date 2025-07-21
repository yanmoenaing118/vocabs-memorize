// Pagination.tsx (New or Updated Component)

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

interface PaginationProps {
  currentPage: string | number;
  totalItems: number;
  itemsPerPage: string | number;
  onNext: (page: number) => void;
  onPrev: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onNext,
  onPrev,
}: PaginationProps) {
  const current = Number(currentPage);
  const perPage = Number(itemsPerPage);

  // Use Math.ceil to correctly calculate total pages
  const totalPages = Math.ceil(totalItems / perPage);

  const hasPrev = current > 0;
  const hasNext = current < totalPages - 1;

  if(totalPages < 0 ) return null; 

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={!hasPrev}
        onClick={() => onPrev(current - 1)}
        className="p-2 border rounded disabled:opacity-50"
        aria-label="Previous page"
      >
        <ChevronLeftIcon />
      </button>
      <span className="text-white">
        {current + 1} / {totalPages}
      </span>
      <button
        disabled={!hasNext}
        onClick={() => onNext(current + 1)}
        className="p-2 border rounded disabled:opacity-50"
        aria-label="Next page"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}