"use client";
import VocabList, { Vocabs } from "./VocabList";
import Navbar from "./Navbar";
import SuffleBar from "./SuffleBar";
import { useState } from "react";
import _, { flatMap, words } from "lodash";

const list: Vocabs = [
  // {
  //   word: "きります",
  //   meaning: "ဖြတ်သည်။ ညှပ်သည်။ လှီးသည်။",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "おくります",
  //   meaning: "ပို့သည်။",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "あげます",
  //   meaning: "ပေးသည်",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "もらいます",
  //   meaning: "လက်ခံရယူသည်",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "かします",
  //   meaning: "ချေးငှားသည် (ချေးပေးသည်၊ ငှားပေးသည်)",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "かります",
  //   meaning: "ချေးငှားသည် (ချေးယူသည်၊ ငှားယူသည်)",
  //   hideWord: false,
  //   hideMeaning: false
  // },
  // {
  //   word: "おしえます",
  //   meaning: "သင်ပေးသည်",
  // },
  // {
  //   word: "ならいます",
  //   meaning: "သင်ယူသည်",
  // },
  // {
  //   word: "かけます[でんわをー]",
  //   meaning: "ဆက်သည် (တယ်လီဖုန်းကို)",
  // },
  // {
  //   word: "て",
  //   meaning: "လက်",
  // },
  // {
  //   word: "はし",
  //   meaning: "တူ",
  // },
  // {
  //   word: "スプーン",
  //   meaning: "‌ဇွန်း",
  // },
  // {
  //   word: "ナイフ",
  //   meaning: "ဓား",
  // },
  // {
  //   word: "フｵーク",
  //   meaning: "‌‌ခက်ရင်း",
  // },
  // {
  //   word: "はさみ",
  //   meaning: "ကတ်ကြေး",
  // },
  // {
  //   word: "パソコン",
  //   meaning: "ကွန်ပြူတာ",
  // },
  // {
  //   word: "ケータイ",
  //   meaning: "မိုဘိုင်းဖုန်း",
  // },
  // {
  //   word: "メール",
  //   meaning: "‌အိးမေးလ်",
  // },
  {
    word: "ねんがじょう",
    meaning: "နယူးရီးယားပို့စကတ်",
  },
  {
    word: "パンチ",
    meaning: "‌‌စက္ကူအပေါက်ဖောက်စက်",
  },
  {
    word: "ホッチキス",
    meaning: "စတာပလာ",
  },
  {
    word: "セロテープ",
    meaning: "ဆိုလိုတိပ်, ကပ်တိပ်",
  },
  {
    word: "けしゴム",
    meaning: "ခဲဖျတ်",
  },
  {
    word: "かみ",
    meaning: "‌စက္ကူ",
  },
];


export default function Home() {

  const [vocabs, setVocabs] = useState<Vocabs>(list);


  const shuffleList = () => {
    setVocabs(_.shuffle(vocabs))
    console.log(vocabs)
  }


const toggleMeaning = () => {
  setVocabs(vocabs.map(voc => ({
    ...voc,
    hideMeaning: !voc.hideMeaning
  })))
}

const toggleWord = () => {
  setVocabs(vocabs.map(voc => ({
    ...voc,
    hideWord: !voc.hideWord
  })))
}

const showAll = (isChecked: boolean) => {
  setVocabs(vocabs.map(voc => ({
    ...voc,
    hideMeaning: isChecked,
    hideWord: isChecked
  })))
}


  return (
    <main>
      <Navbar />
      <SuffleBar showAll={showAll} toggleMeaning={toggleMeaning} toggleWord={toggleWord} onSuffle={shuffleList} />
      <VocabList list={vocabs}/>
    </main>
  );
}
