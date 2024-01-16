"use client";
import VocabList, { Vocabs } from "./VocabList";
import Navbar from "./Navbar";
import SuffleBar from "./SuffleBar";
import { useState } from "react";
import _, { flatMap } from "lodash";

const list: Vocabs = [
  {
    word: "きります",
    meaning: "ဖြတ်သည်။ ညှပ်သည်။ လှီးသည်။",
    hideWord: false,
    hideMeaning: false
  },
  {
    word: "おくります",
    meaning: "ပို့သည်။",
    hideWord: false,
    hideMeaning: false
  },
  {
    word: "あげます",
    meaning: "ပေးသည်",
    hideWord: false,
    hideMeaning: false
  },
  {
    word: "もらいます",
    meaning: "လက်ခံရယူသည်",
    hideWord: false,
    hideMeaning: false
  },
  {
    word: "かします",
    meaning: "ချေးငှားသည် (ချေးပေးသည်၊ ငှားပေးသည်)",
    hideWord: false,
    hideMeaning: false
  },
  {
    word: "かります",
    meaning: "ချေးငှားသည် (ချေးယူသည်၊ ငှားယူသည်)",
    hideWord: false,
    hideMeaning: false
  }
]


export default function Home() {

  const [vocabs, setVocabs] = useState<Vocabs>(list);


  const shuffleList = () => {
    setVocabs(_.shuffle(vocabs))
    console.log(vocabs)
  }


  return (
    <main>
      <Navbar />
      <SuffleBar onSuffle={shuffleList} />
      <VocabList list={vocabs}/>
    </main>
  );
}
