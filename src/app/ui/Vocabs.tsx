"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { VocabsList } from "../lib/definitions";
import { useEffect, useState } from "react";
import _ from "lodash";

export default function Vocabs({ list }: { list: VocabsList }) {
  const query = useSearchParams();
  const [set,setSet] = useState(list);

  useEffect(() => {
    if(!query) return;
    setSet(_.shuffle(set));
  }, [query])
  return set.map((item) => (
    <div
      key={item.word + item.ch}
      className="glass-card bg-white bg-opacity-20 p-4 md:p-8 rounded-lg shadow-lg"
    >
      <h1
        className={clsx(
          "text-sm sm:text-sm md:text-base lg:text-2xl font-light mb-4 text-black transition-opacity",
          {
            "opacity-1": query.get("onlyWorld")?.toString() === "true",
            "opacity-0": query.get("onlyWord")?.toString() === "false",
          }
        )}
      >
        {item.word}
      </h1>
      <p
        className={clsx(
          "text-sm sm:text-sm md:text-base lg:text-2xl text-gray-200  transition-opacity",
          {
            "opacity-1": query.get("onlyMeaning")?.toString() === "true",
            "opacity-0": query.get("onlyMeaning")?.toString() === "false",
          }
        )}
      >
        {item.meaning}
      </p>
    </div>
  ));
}
