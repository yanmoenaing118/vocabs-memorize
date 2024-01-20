"use client";
import React, { useState } from "react";
import ShuffleButton from "../ShuffleButton";
import Container from "./Container";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SuffleBar() {
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
    replace(queryString);
  };

  const shuffleList = () => {};

  const toggleMeaning = () => {};

  const toggleWord = () => {};

  const showAll = (isChecked: boolean) => {};

  return (
    <div className="sticky top-4">
      <div className="flex flex-col justify-between gap-7">
        <div className="flex gap-3 items-center">
          {/* <Checkbox onCheck={showAll}/> */}
          <ToggleLang lang="jp" onToggle={toggleWord} />
          <ToggleLang lang="mm" onToggle={toggleMeaning} />
        </div>
        <Chapters
          active={searchParams.get("ch")?.toString()}
          onSelect={(ch: string) => getByChapters(ch)}
        />
        <div>
          <button onClick={() => {}}>
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

const ToggleLang = ({ lang, onToggle }: any) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ToggleButton onToggle={onToggle} />
      <span className="text-white bold uppercase">{lang}</span>
    </div>
  );
};

const ToggleButton = ({ onToggle }: any) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
    onToggle();
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