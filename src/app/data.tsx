import { Vocabs } from "./VocabList";

const list: Vocabs = [
  {
    word: "きります",
    meaning: "ဖြတ်သည်။ ညှပ်သည်။ လှီးသည်။",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "おくります",
    meaning: "ပို့သည်။",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "あげます",
    meaning: "ပေးသည်",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "もらいます",
    meaning: "လက်ခံရယူသည်",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "かします",
    meaning: "ချေးငှားသည် (ချေးပေးသည်၊ ငှားပေးသည်)",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "かります",
    meaning: "ချေးငှားသည် (ချေးယူသည်၊ ငှားယူသည်)",
    hideWord: false,
    hideMeaning: false,
    ch: 7,
  },
  {
    word: "おしえます",
    meaning: "သင်ပေးသည်",
    ch: 7,
  },
  {
    word: "ならいます",
    meaning: "သင်ယူသည်",
    ch: 7,
  },
  {
    word: "かけます[でんわをー]",
    meaning: "ဆက်သည် (တယ်လီဖုန်းကို)",
    ch: 7,
  },
  {
    word: "て",
    meaning: "လက်",
    ch: 7,
  },
  {
    word: "はし",
    meaning: "တူ",
    ch: 7,
  },
  {
    word: "スプーン",
    meaning: "‌ဇွန်း",
    ch: 7,
  },
  {
    word: "ナイフ",
    meaning: "ဓား",
    ch: 7,
  },
  {
    word: "フｵーク",
    meaning: "‌‌ခက်ရင်း",
    ch: 7,
  },
  {
    word: "はさみ",
    meaning: "ကတ်ကြေး",
    ch: 7,
  },
  {
    word: "パソコン",
    meaning: "ကွန်ပြူတာ",
    ch: 7,
  },
  {
    word: "ケータイ",
    meaning: "မိုဘိုင်းဖုန်း",
    ch: 7,
  },
  {
    word: "メール",
    meaning: "‌အိးမေးလ်",
    ch: 7,
  },
  {
    word: "ねんがじょう",
    meaning: "နယူးရီးယားပို့စကတ်",
    ch: 7,
  },
  {
    word: "パンチ",
    meaning: "‌‌စက္ကူအပေါက်ဖောက်စက်",
    ch: 7,
  },
  {
    word: "ホッチキス",
    meaning: "စတာပလာ",
    ch: 7,
  },
  {
    word: "セロテープ",
    meaning: "ဆိုလိုတိပ်, ကပ်တိပ်",
    ch: 7,
  },
  {
    word: "けしゴム",
    meaning: "ခဲဖျတ်",
    ch: 7,
  },
  {
    word: "かみ",
    meaning: "‌စက္ကူ",
    ch: 7,
  },
  {
    word: "はな",
    meaning: "ပန်း",
    ch: 7,
  },
  {
    word: "シャツ",
    meaning: "‌‌ရှပ်အင်ကျီ",
    ch: 7,
  },
  {
    word: "プレゼン",
    meaning: "လက်ဆောင်",
    ch: 7,
  },
  {
    word: "にもつ",
    meaning: "အထုပ်အပိုး",
    ch: 7,
  },
  {
    word: "おかわ",
    meaning: "ပိုက်ဆံ",
    ch: 7,
  },
  {
    word: "きっぷ",
    meaning: "လက်မှတ်",
    ch: 7,
  },
  {
    word: "クリスマス",
    meaning: "‌ခရစ္စမတ်",
    ch: 7,
  },
  {
    word: "ちち",
    meaning: "‌‌အဖေ",
    ch: 7,
  },
  {
    word: "はは",
    meaning: "အမေ",
    ch: 7,
  },
  {
    word: "おとうさん",
    meaning: "အဖေ",
    ch: 7,
  },
  {
    word: "おかうさん",
    meaning: "အမေ",
    ch: 7,
  },
  {
    word: "もう",
    meaning: "‌နှင့်ပြီးပြီ (ပြီးနှင့်ပြီးပြီဟူသောအဓိပ္ပါယ်ကိုဆိုလိုသည်)",
    ch: 7,
  },
  {
    word: "すてきですね",
    meaning: "‌လှတယ်နော်/လှလိုက်တာနော်",
    ch: 7,
  },
  {
    word: "まだ",
    meaning: "(မ)သေးဘူး",
    ch: 7,
  },
  {
    word: "これから",
    meaning: "အခုချိန်ကစပြီး",
    ch: 7,
  },
  {
    word: "いらっしゃい",
    meaning: "ကြွပါ။ (welcome)",
    ch: 7,
  },
  {
    word: "どうぞ　おあがり　ください。",
    meaning: "ဝင်ပါ။",
    ch: 7,
  },
  {
    word: "しつれいします",
    meaning:
      "‌ခွင့်ပြုပါ။(တစ်ဉီးတစ်ယောက်ထံမှ တစ်စုံတစ်ခုကိုတောင်းဆိုရာတွင်အသုံးပြုသည်)",
    ch: 7,
  },
  {
    word: "[~は] いかがですか",
    meaning: "‌(ဆို) ဘယ်လို(သဘောရ)လဲ။ /သုံးဆောင်မလား။",
    ch: 7,
  },
  {
    word: "いただきます",
    meaning: "‌စားပါတော့မယ်",
    ch: 7,
  },
  {
    word: "ごちそうさま",
    meaning: "ကျွေးမွေးပြုစုမှုအတွက် ကျေးဇူးတင်ပါတယ်။ (စားပီးခါစပြောရန်)",
    ch: 7,
  },
  {
    word: "スペイン",
    meaning: "စပိန်",
    ch: 7,
  },
  {
    word: "スペイン",
    meaning: "စပိန်",
    ch: 8,
  },
];

const getListByCh = (ch: number) => {
    return list.filter(item => item.ch === ch)
}

export default  list;