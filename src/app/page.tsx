"use client";
import VocabList, { Vocabs } from "./VocabList";
import Navbar from "./Navbar";
import SuffleBar from "./SuffleBar";
import { useState } from "react";
import _ from "lodash";

const list: Vocabs = [
  {
    word: "きります",
    meaning: "ဖြတ်သည်။ ညှပ်သည်။ လှီးသည်။",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "おくります",
    meaning: "ပို့သည်။",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "あげます",
    meaning: "ပေးသည်",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "もらいます",
    meaning: "လက်ခံရယူသည်",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "かします",
    meaning: "ချေးငှားသည် (ချေးပေးသည်၊ ငှားပေးသည်)",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "かります",
    meaning: "ချေးငှားသည် (ချေးယူသည်၊ ငှားယူသည်)",
    hideWord: false,
    hideMeaning: false,
  },
  {
    word: "おしえます",
    meaning: "သင်ပေးသည်",
  },
  {
    word: "ならいます",
    meaning: "သင်ယူသည်",
  },
  {
    word: "かけます[でんわをー]",
    meaning: "ဆက်သည် (တယ်လီဖုန်းကို)",
  },
  {
    word: "て",
    meaning: "လက်",
  },
  {
    word: "はし",
    meaning: "တူ",
  },
  {
    word: "スプーン",
    meaning: "‌ဇွန်း",
  },
  {
    word: "ナイフ",
    meaning: "ဓား",
  },
  {
    word: "フｵーク",
    meaning: "‌‌ခက်ရင်း",
  },
  {
    word: "はさみ",
    meaning: "ကတ်ကြေး",
  },
  {
    word: "パソコン",
    meaning: "ကွန်ပြူတာ",
  },
  {
    word: "ケータイ",
    meaning: "မိုဘိုင်းဖုန်း",
  },
  {
    word: "メール",
    meaning: "‌အိးမေးလ်",
  },
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
  {
    word: "はな",
    meaning: "ပန်း",
  },
  {
    word: "シャツ",
    meaning: "‌‌ရှပ်အင်ကျီ",
  },
  {
    word: "プレゼン",
    meaning: "လက်ဆောင်",
  },
  {
    word: "にもつ",
    meaning: "အထုပ်အပိုး",
  },
  {
    word: "おかわ",
    meaning: "ပိုက်ဆံ",
  },
  {
    word: "きっぷ",
    meaning: "လက်မှတ်",
  },
  {
    word: "クリスマス",
    meaning: "‌ခရစ္စမတ်",
  },
  {
    word: "ちち",
    meaning: "‌‌အဖေ",
  },
  {
    word: "はは",
    meaning: "အမေ",
  },
  {
    word: "おとうさん",
    meaning: "အဖေ",
  },
  {
    word: "おかうさん",
    meaning: "အမေ",
  },
  {
    word: "もう",
    meaning: "‌နှင့်ပြီးပြီ (ပြီးနှင့်ပြီးပြီဟူသောအဓိပ္ပါယ်ကိုဆိုလိုသည်)",
  },
  {
    word: "すてきですね",
    meaning: "‌လှတယ်နော်/လှလိုက်တာနော်",
  },
  {
    word: "まだ",
    meaning: "(မ)သေးဘူး",
  },
  {
    word: "これから",
    meaning: "အခုချိန်ကစပြီး",
  },
  {
    word: "いらっしゃい",
    meaning: "ကြွပါ။ (welcome)",
  },
  {
    word: "どうぞ　おあがり　ください。",
    meaning: "ဝင်ပါ။",
  },
  {
    word: "しつれいします",
    meaning:
      "‌ခွင့်ပြုပါ။(တစ်ဉီးတစ်ယောက်ထံမှ တစ်စုံတစ်ခုကိုတောင်းဆိုရာတွင်အသုံးပြုသည်)",
  },
  {
    word: "[~は] いかがですか",
    meaning: "‌(ဆို) ဘယ်လို(သဘောရ)လဲ။ /သုံးဆောင်မလား။",
  },
  {
    word: "いただきます",
    meaning: "‌စားပါတော့မယ်",
  },
  {
    word: "ごちそうさま",
    meaning: "ကျွေးမွေးပြုစုမှုအတွက် ကျေးဇူးတင်ပါတယ်။ (စားပီးခါစပြောရန်)",
  },
  {
    word: "スペイン",
    meaning: "စပိန်",
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
