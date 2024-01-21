import React from "react";
import Container from "./Container";
import { PropVocabSearchQuery } from "../lib/definitions";
import { getVocabList } from "../lib/data";

type Vocab = {
  word: string;
  meaning: string;
  hideWord?: boolean;
  hideMeaning?: boolean;
  conversation?: boolean;
  ch: number;
};

export type Vocabs = Vocab[];

type VocabListProps = {
  list: Vocabs;
};

export default function VocabList({ query }: { query: PropVocabSearchQuery }) {
  const list = getVocabList(query);
  console.log('query voc', query);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((item) => (
          <div
            key={item.word + item.ch}
            className="glass-card bg-white bg-opacity-20 p-4 md:p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-sm sm:text-sm md:text-base lg:text-2xl font-light mb-4 text-black">
              {query.onlyWord == "true" ? item.word : ""}
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-2xl text-gray-200">
              {query.onlyMeaning == "true" && item.meaning}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
