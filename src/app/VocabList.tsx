import React from "react";
import Container from "./Container";

type Vocab = {
  word: string;
  meaning: string;
  hideWord: boolean,
  hideMeaning: boolean
};

export type Vocabs = Vocab[];

type VocabListProps = {
  list: Vocabs;
};

export default function VocabList({ list }: VocabListProps) {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        {list.map((item) => (
          <div key={item.word} className="glass-card bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-white">
              {item.word}
            </h1>
            <p className="text-gray-200">
              {item.meaning}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
