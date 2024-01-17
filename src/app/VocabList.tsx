import React from "react";
import Container from "./Container";

type Vocab = {
  word: string;
  meaning: string;
  hideWord?: boolean,
  hideMeaning?: boolean,
  conversation?: boolean,
  ch: number
};

export type Vocabs = Vocab[];

type VocabListProps = {
  list: Vocabs;
};

export default function VocabList({ list }: VocabListProps) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((item) => (
          <div key={item.word} className="glass-card bg-white bg-opacity-20 p-4 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-sm sm:text-sm md:text-base lg:text-2xl font-light mb-4 text-black">
              {!item.hideWord && item.word}
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-2xl text-gray-200">
              {!item.hideMeaning && item.meaning}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
