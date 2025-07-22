// Updated Vocabs.tsx (with minor adjustments for consistency)
// Note: The main fix is in Pagination, but ensuring props are passed correctly as numbers.

"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { VocabsList, Vocab } from "../lib/definitions";
import { useCallback, useEffect, useRef, useState } from "react";
import _, { replace } from "lodash";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  TrackNextIcon,
  TrackPreviousIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import Pagination from "./Pagination";
import ShuffleBar from "./FilterBar";
import ToggleButton from "./ToggleButton";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import NoResultsFound from "./NoResultsFound";

const navigateOptions: NavigateOptions = {
  scroll: false,
};

export default function Vocabs({
  list,
  totalVocabs,
}: {
  list: VocabsList;
  totalVocabs: number;
}) {
  const query = useSearchParams();
  const [set, setSet] = useState(list);
  const pathname = usePathname();
  const router = useRouter();

  const [visibility, setVisibility] = useState({
    showMeaning: true,
    showWord: true,
  });

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    selectedVocab: Vocab | null;
  }>({
    isOpen: false,
    currentIndex: 0,
    selectedVocab: null,
  });

  const [imageLoaded, setImageLoaded] = useState(false);

  const [modalVisibility, setModalVisibility] = useState({
    showWord: true,
    showMeaning: true,
  });

  const setRef = useRef(set);
  useEffect(() => {
    setRef.current = set;
  }, [set]);

  useEffect(() => {
    if (!query.has("ch")) {
      router.replace(`${pathname}?ch=1`);
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalState({
      isOpen: false,
      currentIndex: 0,
      selectedVocab: null,
    });
  }, []);

  const navigateModal = useCallback((direction: "prev" | "next") => {
    setImageLoaded(false); // Reset image loaded state when navigating
    setModalState((prev) => {
      const len = setRef.current.length;
      const newIndex =
        direction === "next"
          ? (prev.currentIndex + 1) % len
          : (prev.currentIndex - 1 + len) % len;
      return {
        ...prev,
        currentIndex: newIndex,
        selectedVocab: setRef.current[newIndex],
      };
    });
  }, []);

  const handleKeyDownRef = useRef<any>(null);

  useEffect(() => {
    handleKeyDownRef.current= (e: KeyboardEvent) => {
      if (!modalState.isOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateModal("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateModal("next");
          break;
      }
    };
  }, [modalState.isOpen, closeModal, navigateModal]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => handleKeyDownRef.current?.(e);
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  const goToPage = (page: number) => {
    const params = new URLSearchParams(query.toString());
    params.set("offset", `${page}`);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const [openFilter, setOpenFilter] = useState(false);

  const toggleWords = (isActive: boolean) => {
    setVisibility({ ...visibility, showWord: isActive });
  };

  const toggleMeanings = (isActive: boolean) => {
    setVisibility({ ...visibility, showMeaning: isActive });
  };

  const openModal = (vocab: Vocab, index: number) => {
    setImageLoaded(false); // Reset image loaded state when opening modal
    setModalState({
      isOpen: true,
      currentIndex: index,
      selectedVocab: vocab,
    });
  };

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div className="sticky top-4 flex w-full justify-between mb-4">
        <button
          onClick={() => setOpenFilter(true)}
          className="md:hidden min-w-[48px] flex items-center justify-center border border-white"
        >
          <HamburgerMenuIcon color="white" />
        </button>
        <div className="flex gap-3 items-center">
          <ToggleLang
            active={visibility.showWord}
            lang="jp"
            onToggle={toggleWords}
          />
          <ToggleLang
            active={visibility.showMeaning}
            lang="mm"
            onToggle={toggleMeanings}
          />
        </div>
        <button
          className="border rounded px-3 py-1"
          onClick={() => setSet(_.shuffle(list))}
        >
          <svg
            width="27"
            height="22"
            viewBox="0 0 27 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3538 17.6463C26.4002 17.6927 26.4371 17.7478 26.4623 17.8085C26.4874 17.8692 26.5004 17.9343 26.5004 18C26.5004 18.0657 26.4874 18.1308 26.4623 18.1915C26.4371 18.2522 26.4002 18.3073 26.3538 18.3538L23.3538 21.3538C23.2599 21.4476 23.1327 21.5003 23 21.5003C22.8673 21.5003 22.7401 21.4476 22.6462 21.3538C22.5524 21.2599 22.4997 21.1327 22.4997 21C22.4997 20.8673 22.5524 20.7401 22.6462 20.6463L24.7925 18.5H22.1175C20.7646 18.4985 19.4315 18.1749 18.2286 17.5558C17.0257 16.9367 15.9875 16.0401 15.2 14.94L9.98625 7.64125C9.29155 6.67043 8.37553 5.8791 7.31408 5.33283C6.25262 4.78656 5.07628 4.50107 3.8825 4.5H1C0.867392 4.5 0.740215 4.44733 0.646447 4.35356C0.552679 4.25979 0.5 4.13261 0.5 4C0.5 3.8674 0.552679 3.74022 0.646447 3.64645C0.740215 3.55268 0.867392 3.5 1 3.5H3.8825C5.23538 3.50147 6.56845 3.82514 7.77138 4.44421C8.97431 5.06328 10.0125 5.95995 10.8 7.06L16.0138 14.3588C16.7084 15.3296 17.6245 16.1209 18.6859 16.6672C19.7474 17.2134 20.9237 17.4989 22.1175 17.5H24.7925L22.6462 15.3538C22.5524 15.2599 22.4997 15.1327 22.4997 15C22.4997 14.8673 22.5524 14.7401 22.6462 14.6463C22.7401 14.5524 22.8673 14.4997 23 14.4997C23.1327 14.4997 23.2599 14.5524 23.3538 14.6463L26.3538 17.6463ZM15.1675 7.96625C15.2209 8.00442 15.2814 8.03169 15.3453 8.0465C15.4093 8.06132 15.4756 8.06338 15.5403 8.05259C15.6051 8.0418 15.6671 8.01835 15.7228 7.98359C15.7785 7.94883 15.8268 7.90344 15.865 7.85L16.0138 7.64125C16.7084 6.67043 17.6245 5.8791 18.6859 5.33283C19.7474 4.78656 20.9237 4.50107 22.1175 4.5H24.7925L22.6462 6.64625C22.5524 6.74007 22.4997 6.86732 22.4997 7C22.4997 7.13269 22.5524 7.25993 22.6462 7.35375C22.7401 7.44757 22.8673 7.50028 23 7.50028C23.1327 7.50028 23.2599 7.44757 23.3538 7.35375L26.3538 4.35375C26.4002 4.30732 26.4371 4.25217 26.4623 4.19147C26.4874 4.13077 26.5004 4.06571 26.5004 4C26.5004 3.9343 26.4874 3.86923 26.4623 3.80853C26.4371 3.74783 26.4002 3.69269 26.3538 3.64625L23.3538 0.646253C23.2599 0.552433 23.1327 0.499725 23 0.499725C22.8673 0.499725 22.7401 0.552433 22.6462 0.646253C22.5524 0.740073 22.4997 0.867321 22.4997 1C22.4997 1.13269 22.5524 1.25993 22.6462 1.35375L24.7925 3.5H22.1175C20.7646 3.50147 19.4315 3.82514 18.2286 4.44421C17.0257 5.06328 15.9875 5.95995 15.2 7.06L15.0513 7.26875C15.0131 7.32218 14.9858 7.38261 14.971 7.44658C14.9562 7.51055 14.9541 7.57681 14.9649 7.64158C14.9757 7.70635 14.9992 7.76836 15.0339 7.82407C15.0687 7.87977 15.1141 7.92809 15.1675 7.96625ZM10.8325 14.0338C10.7791 13.9956 10.7186 13.9683 10.6547 13.9535C10.5907 13.9387 10.5244 13.9366 10.4597 13.9474C10.3949 13.9582 10.3329 13.9817 10.2772 14.0164C10.2215 14.0512 10.1732 14.0966 10.135 14.15L9.98625 14.3588C9.29155 15.3296 8.37553 16.1209 7.31408 16.6672C6.25262 17.2134 5.07628 17.4989 3.8825 17.5H1C0.867392 17.5 0.740215 17.5527 0.646447 17.6465C0.552679 17.7402 0.5 17.8674 0.5 18C0.5 18.1326 0.552679 18.2598 0.646447 18.3536C0.740215 18.4473 0.867392 18.5 1 18.5H3.8825C5.23538 18.4985 6.56845 18.1749 7.77138 17.5558C8.97431 16.9367 10.0125 16.0401 10.8 14.94L10.9487 14.7313C10.9869 14.6778 11.0142 14.6174 11.029 14.5534C11.0438 14.4895 11.0459 14.4232 11.0351 14.3584C11.0243 14.2937 11.0008 14.2316 10.9661 14.1759C10.9313 14.1202 10.8859 14.0719 10.8325 14.0338Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="min-h-screen">
        {set.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
            {set.map((item, index) => (
              <div
                key={item.word + item.ch}
                className="glass-card bg-black bg-opacity-10 p-4 md:p-8 rounded-lg shadow-lg cursor-pointer hover:bg-opacity-40 transition-all"
                onClick={() => openModal(item, index)}
              >
                <h1
                  className={clsx(
                    "text-2xl mb-4 text-white transition-opacity",
                    {
                      "opacity-1": visibility.showWord,
                      "opacity-0": !visibility.showWord,
                    }
                  )}
                  style={{
                    textShadow: "1px 1px 2px black"
                  }}
                >
                  {item.word}
                </h1>
                <p
                  className={clsx(
                    "text-lg lg:text-2xl text-green-300  transition-opacity",
                    {
                      "opacity-1": visibility.showMeaning,
                      "opacity-0": !visibility.showMeaning,
                    }
                  )}
                  style={{
                    textShadow: "1px 1px 2px gray"
                  }}
                >
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <NoResultsFound />
        )}
      </div>
      <div className="sticky bottom-4 flex justify-end mt-4">
        <Pagination
          // Pass as numbers for consistency
          currentPage={Number(query.get("offset") || 0)}
          totalItems={totalVocabs}
          itemsPerPage={Number(query.get("count") || 6)}
          onNext={goToPage}
          onPrev={goToPage}
        />
      </div>

      <div
        className={clsx(
          "fixed transition-transform ease-in-out duration-300 block md:hidden top-0 bottom-0 p-4 left-0 right-0 h-screen w-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen",
          {
            "-translate-x-full": !openFilter,
            "translate-x-0": openFilter,
          }
        )}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setOpenFilter(false)}
            className=" border rounded-full p-3"
          >
            <Cross1Icon color="white" />
          </button>
        </div>

        <ShuffleBar />
      </div>

      {/* Modal */}
      {modalState.isOpen && modalState.selectedVocab && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 "
          onClick={handleModalBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl h-full ">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10 transition-colors"
              aria-label="Close modal"
            >
              <Cross1Icon className="w-6 h-6" />
            </button>

            {/* Visibility controls */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              <label className="flex items-center gap-2 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-sm">
                <input
                  type="checkbox"
                  checked={modalVisibility.showWord}
                  onChange={(e) =>
                    setModalVisibility({
                      ...modalVisibility,
                      showWord: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">Word</span>
              </label>

              <label className="flex items-center gap-2 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-sm">
                <input
                  type="checkbox"
                  checked={modalVisibility.showMeaning}
                  onChange={(e) =>
                    setModalVisibility({
                      ...modalVisibility,
                      showMeaning: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">
                  Meaning
                </span>
              </label>
            </div>

            {/* Navigation buttons */}
            {set.length > 1 && (
              <>
                <button
                  onClick={() => navigateModal("prev")}
                  className="absolute right-[20%] bottom-[10%] transform  p-3 hover:bg-gray-100 rounded-full z-10 transition-colors bg-white shadow-lg opacity-70"
                  aria-label="Previous vocab"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>

                <button
                  onClick={() => navigateModal("next")}
                  className="absolute right-[5%] bottom-[10%] transform  p-3 hover:bg-gray-100 rounded-full z-10 transition-colors bg-white shadow-lg opacity-70"
                  aria-label="Next vocab"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal content */}
            <div className="h-full">
              {modalState.selectedVocab.image_url && (
                <div className="mb-2 flex-1 h-[70%] sm:w-[350px] md:w-[600px] mx-auto">
                  <img
                    key={
                      modalState.selectedVocab.word +
                      modalState.selectedVocab.ch
                    } // Force re-render on vocab change
                    src={modalState.selectedVocab.image_url}
                    alt={modalState.selectedVocab.word}
                    className={clsx(
                      "transition-opacity duration-300 ease-in-out max-h-[100%] object-contain w-full h-full",
                      {
                        "opacity-100": imageLoaded,
                        "opacity-0": !imageLoaded,
                      }
                    )}
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
              )}

              <div
                className={
                  "flex-1 flex items-center justify-center flex-col mt-7 px-4"
                }
                style={{
                  height: modalState.selectedVocab.image_url ? "auto" : "100%",
                }}
              >
                {/* Word */}
                {modalVisibility.showWord && (
                  <h2 className="text-3xl md:text-4xl font-light mb-4 md:mb-6 text-gray-800 text-center transition-opacity duration-300">
                    {modalState.selectedVocab.word}
                  </h2>
                )}

                {/* Meaning */}
                {modalVisibility.showMeaning && (
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 text-center leading-relaxed transition-opacity duration-300">
                    {modalState.selectedVocab.meaning}
                  </p>
                )}
              </div>

              {/* Navigation indicator */}
              {/* <div className="text-center text-gray-400 text-sm">
                {modalState.currentIndex + 1} of {set.length}
                {set.length > 1 && (
                  <div className="mt-2 text-xs text-gray-400">
                    Use arrow keys or buttons to navigate
                  </div>
                )}
              </div> */}
            </div>

            <span className="absolute bottom-[10%] left-4">
              {" "}
              {modalState.currentIndex + 1} / {list.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

const ToggleLang = ({ active, lang, onToggle }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ToggleButton active={active} onToggle={onToggle} />
      <span className="block mt-1 text-sm text-white bold uppercase">
        {lang}
      </span>
    </div>
  );
};
