"use client";
import VocabList, { Vocabs } from "./VocabList";
import Navbar from "./Navbar";
import SuffleBar from "./SuffleBar";
import { useEffect, useState } from "react";
import _ from "lodash";
import Container from "./Container";
import list from "./data";


export default function Home() {
  const [vocabs, setVocabs] = useState<Vocabs>(list);
  const [ch, setCh] = useState(7);

  useEffect(() => {
    getChapters();
  },[])

  useEffect(() => {
    getChapters();
  }, [ch]);

  const getChapters = () => {
    setVocabs(list.filter((item) => item.ch === ch));
  };

  const shuffleList = () => {
    setVocabs(_.shuffle(vocabs));
    console.log(vocabs);
  };

  const toggleMeaning = () => {
    setVocabs(
      vocabs.map((voc) => ({
        ...voc,
        hideMeaning: !voc.hideMeaning,
      }))
    );
  };

  const toggleWord = () => {
    setVocabs(
      vocabs.map((voc) => ({
        ...voc,
        hideWord: !voc.hideWord,
      }))
    );
  };

  const showAll = (isChecked: boolean) => {
    setVocabs(
      vocabs.map((voc) => ({
        ...voc,
        hideMeaning: isChecked,
        hideWord: isChecked,
      }))
    );
  };


  return (
    <main>
      <Navbar />
      <Container>
        <div className="grid grid-cols-[120px,1fr] gap-12">
          <div className="min-h-screen">
            <SuffleBar
              showAll={showAll}
              toggleMeaning={toggleMeaning}
              toggleWord={toggleWord}
              onSuffle={shuffleList}
              active={ch}
              onSelect={setCh}
            />
          </div>
          <div>
            <VocabList list={vocabs} />
          </div>
        </div>
      </Container>
    </main>
  );
}
