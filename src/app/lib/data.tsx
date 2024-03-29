import { unstable_noStore } from "next/cache";
import { VocabsList } from "@/app/lib/definitions";
import { PropVocabSearchQuery } from "./definitions";
import _ from "lodash";
import { fsync } from "fs";

const list: VocabsList = [
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

  /** Ch 8 */
  {
    word: "ハンセム [な]",
    meaning: "‌ချောမောသော",
    ch: 8,
  },
  {
    word: "きれい [は]",
    meaning: "‌လှပသော၊ သန့်ရှင်းသော",
    ch: 8,
  },
  {
    word: "しずか [な]",
    meaning: "တိတ်ဆိတ်သော",
    ch: 8,
  },
  {
    word: "にぎやか [は]",
    meaning: "စည်ကားသော၊ သိုက်မြိုက်သော",
    ch: 8,
  },
  {
    word: "ゆうめい　[な]",
    meaning: "နာမည်ကြီးသော",
    ch: 8,
  },
  {
    word: "しんせつ [は]",
    meaning: "ကြင်နာတက်သော(မိမိ၏မိသားစုဝင်အကြောင်းကိုပြောရာတွင်မသုံးပါ။)",
    ch: 8,
  },
  {
    word: "げんき　[な]",
    meaning: "‌ကျန်းမာသော၊ တက်ကြွသော",
    ch: 8,
  },
  {
    word: "ひま　[は]",
    meaning: "‌အားလပ်သော",
    ch: 8,
  },
  {
    word: "べんり　[な]",
    meaning: "အဆင်ပြောသော",
    ch: 8,
  },
  {
    word: "すてき　[は]",
    meaning: "လှပသော၊ သပ်ရပ်ခန့်ငြားသော",
    ch: 8,
  },
  {
    word: "おおきい",
    meaning: "ကြီးမားသော",
    ch: 8,
  },
  {
    word: "ちいさい*",
    meaning: "သေးငယ်သော",
    ch: 8,
  },
  {
    word: "あたらしい",
    meaning: "‌သစ်လွင်သော၊လတ်ဆတ်သော",
    ch: 8,
  },
  {
    word: "ふるい",
    meaning: "‌‌ဟောင်နွမ်းသော(လူနင့်မသုံပါ)",
    ch: 8,
  },
  {
    word: "いい (よい)",
    meaning: "ကောင်းသော",
    ch: 8,
  },
  {
    word: "わるい*",
    meaning: "ဆိုးသော",
    ch: 8,
  },
  {
    word: "‌あつい",
    meaning: "အိုက်သော၊ပူသော(ရာသီဥတု၊စားသောက်စရာစသည့်အပူချိန်)",
    ch: 8,
  },
  {
    word: "さむい",
    meaning: "ချမ်းသော၊အေးသော(ရာသီဥတုအေးကြောင်းကိုပြောရာတွင်သုံးသည်။)",
    ch: 8,
  },
  {
    word: "つめたい",
    meaning: "‌အေးသော(စားသောက်စရာစသည့်အအေးဓာက်ကိုပြောရာတွင်သုံးသည်)",
    ch: 8,
  },
  {
    word: "むずかしい",
    meaning: "‌‌ခက်ခဲသော",
    ch: 8,
  },
  {
    word: "やさしい",
    meaning: "လွယ်ကူသော",
    ch: 8,
  },
  {
    word: "たかい",
    meaning: "‌‌‌‌‌ဈေးကြီးသော",
    ch: 8,
  },
  {
    word: "‌やすい",
    meaning: "ဈေးပေါသော",
    ch: 8,
  },
  {
    word: "ひくい＊",
    meaning: "နိမ့်သော၊ ပုသော",
    ch: 8,
  },
  {
    word: "おもしろい",
    meaning: "‌စိတ်ဝင်စားစရာကောင်းသော",
    ch: 8,
  },
  {
    word: "おいしい",
    meaning: "‌‌စားလို့ကောင်းသော",
    ch: 8,
  },
  {
    word: "いそがしい",
    meaning: "အလုပ်များသော၊ မအားလပ်သော",
    ch: 8,
  },
  {
    word: "たのしい",
    meaning: "‌‌‌‌‌ပျော်စရာကောင်းသော",
    ch: 8,
  },
  {
    word: "‌しろい",
    meaning: "အဖြူ၊ ဖြူသော",
    ch: 8,
  },
  {
    word: "くろい",
    meaning: "အမည်း၊ အနက်၊မည်းသော၊နက်သော",
    ch: 8,
  },
  {
    word: "あかい",
    meaning: "‌အနီ၊ နီသော",
    ch: 8,
  },
  {
    word: "あおい",
    meaning: "‌‌အပြာ၊ ပြာသော",
    ch: 8,
  },
  {
    word: "さくら",
    meaning: "ချယ်ရီ",
    ch: 8,
  },
  {
    word: "やま",
    meaning: "‌တောင်၊ တောင်ကုန်း",
    ch: 8,
  },
  {
    word: "まち",
    meaning: "‌‌မြို့",
    ch: 8,
  },
  {
    word: "たべもの",
    meaning: "စားစရာ၊ အစားအစာ",
    ch: 8,
  },
  {
    word: "ところ",
    meaning: "‌‌‌‌‌နေရာ",
    ch: 8,
  },
  {
    word: "‌レストレン",
    meaning: "အကြီးစား စားသောက်ဆိုင်",
    ch: 8,
  },
  {
    word: "せいかつ",
    meaning: "နေထိုင်မှုဘဝ",
    ch: 8,
  },

  {
    word: "[お] しごと",
    meaning: "‌အလုပ်",
    ch: 8,
  },
  {
    word: "どう",
    meaning: "‌‌ဘယ်လို",
    ch: 8,
  },
  {
    word: "どんな〜",
    meaning: "ဘယ်လို--မျိုး",
    ch: 8,
  },
  {
    word: "とても",
    meaning: "‌‌‌‌‌အလွန်၊ အရမ်း",
    ch: 8,
  },
  {
    word: "‌あまり",
    meaning: "သိပ်(အငြင်းနှင့်တွဲဲဲပြီးသာအသုံးပြုသည်)",
    ch: 8,
  },
  {
    word: "そして",
    meaning: "နောက်ပြီး၊ထို့နောက်(ဝါကျများကိုဆက်ရာတွင်အသုံးပြုသည်။)",
    ch: 8,
  },
  {
    word: "~が、~",
    meaning: "ပေမဲ့၊ သော်လည်း",
    ch: 8,
  },
  {
    word: "おげんきですか。",
    meaning: "‌နေကောင်းပါသလား။ /နေကောင်းပါရဲ့လား။",
    ch: 8,
  },
  {
    word: "そうですね。",
    meaning: "‌‌ဘယ်လိုပြောရ(ပါ့)မလဲ။",
    ch: 8,
  },
  {
    word: "[~,] もういつばいいかがですか。",
    meaning:
      "(-) နောက်တစ်ပွဲ/နောက်တစ်ခွက်ဘယ်လိုလဲ။(ထပ်ယူဉီးမလားလို့ဆိုလိုသည်။)",
    ch: 8,
  },
  {
    word: "[いいえ]　けっこうです。",
    meaning: "‌‌‌‌‌(အင့်အင့်) တော်ပါပြီ။",
    ch: 8,
  },
  {
    word: "‌もう、〜ですね。",
    meaning: "ကျ/ရောက်/တန်ပြီး(ပဲ)",
    ch: 8,
  },
  {
    word: "そろそろ　しつれいします。",
    meaning: "ပြန်လိုက်ပါဉီးမယ်၊ ပြန်တော့မယ်",
    ch: 8,
  },
  {
    word: "いいえ。",
    meaning: "‌မဟုတ်တာ",
    ch: 8,
  },
  {
    word: "また　いらっしゃって　ください。",
    meaning: "‌‌‌နောက်ထပ်လာလည်ပါဉီး။",
    ch: 8,
  },

  {
    word: "わかります",
    meaning: "‌နားလည်သည်။ သဘောပေါက်သည်။",
    ch: 9,
  },
  {
    word: "あります",
    meaning: "ရှိသည်။(ပိုင်ဆိုင်ခြင်းကိုပြသည့်သဘောဆောင်သည်)",
    ch: 9,
  },
  {
    word: "すき [な]",
    meaning: "ကြိုက်သော၊ နှစ်သက်သော",
    ch: 9,
  },
  {
    word: "きらい　[な]",
    meaning: "မုန်းသော",
    ch: 9,
  },
  {
    word: "じょうず　[な]",
    meaning: "တော်သော",
    ch: 9,
  },
  {
    word: "へた　[な]",
    meaning: "ညံ့သော",
    ch: 9,
  },
  {
    word: "のみもの",
    meaning: "‌သောက်စရာ",
    ch: 9,
  },
  {
    word: "りょうり",
    meaning: "အချက်အပြုတ်၊ ဟင်းလျာ၊ ဟင်း",
    ch: 9,
  },
  {
    word: "スポーツ",
    meaning: "‌အားကစား",
    ch: 9,
  },
  {
    word: "やきゅう",
    meaning: "ဘေ့စ်ဘော",
    ch: 9,
  },
  {
    word: "ダンス",
    meaning: "အက",
    ch: 9,
  },
  {
    word: "りょこう",
    meaning: "ခရီး",
    ch: 9,
  },
  {
    word: "おんがく",
    meaning: "ဂီတသံစဉ်",
    ch: 9,
  },
  {
    word: "うた",
    meaning: "တေးသီချင်း",
    ch: 9,
  },
  {
    word: "クラシック",
    meaning: "ဂန္တဝင်တေးသီချင်း",
    ch: 9,
  },
  {
    word: "ジャズ",
    meaning: "ဂျက်ဂီတ",
    ch: 9,
  },
  {
    word: "コンサート",
    meaning: "ဂီတပွဲ",
    ch: 9,
  },
  {
    word: "カラオケ",
    meaning: "ကာရာအိုကေ",
    ch: 9,
  },
  {
    word: "かぶき",
    meaning: "ခါဘုခိ(ဂျပန်ရိုးရာ ပြဇာတ်များထဲမှတစ်ခု)",
    ch: 9,
  },
  {
    word: "え",
    meaning: "‌‌‌‌‌ပန်းချီ၊ ရုပ်ပုံကားချပ်",
    ch: 9,
  },
  {
    word: "じ*",
    meaning: "စာလုံး၊ လက်ရေးလက်သား၊ အက္ခရာ",
    ch: 9,
  },
  {
    word: "かんじ",
    meaning: "ခန်းဂျီး",
    ch: 9,
  },
  {
    word: "ひらがな",
    meaning: "‌ဟီရဂန",
    ch: 9,
  },
  {
    word: "かたかな",
    meaning: "ခတခန",
    ch: 9,
  },
  {
    word: "ローマじ",
    meaning: "‌ရိုးမဂျီ",
    ch: 9,
  },
  {
    word: "こまかい　お金",
    meaning: "ငွေအကြွေ၊ အနုတ်",
    ch: 9,
  },
  {
    word: "チケット",
    meaning: "လက်မှတ်၊ တစ်ကတ်",
    ch: 9,
  },
  {
    word: "じかん",
    meaning: "‌‌‌‌‌အချိန်၊ ကြာချိန်",
    ch: 9,
  },
  {
    word: "ようじ",
    meaning: "(အလုပ်) ကိစ္စ",
    ch: 9,
  },
  {
    word: "やくそく",
    meaning: "ကတိ၊ ချိန်းဆိုထားသည့်ကိစ္စ",
    ch: 9,
  },
  {
    word: "アルバイト",
    meaning: "‌အချိန်ပိုင်းအလုပ်",
    ch: 9,
  },
  {
    word: "ごしゅじん",
    meaning: "ခင်ပွန်း‌‌‌ (တစ်ပါးသူ၏)",
    ch: 9,
  },
  {
    word: "おっと",
    meaning: "ခင်ပွန်း(မိမိ၏)",
    ch: 9,
  },
  {
    word: "おくさん",
    meaning: "ဇနီး(တစ်ပါးသူ၏)",
    ch: 9,
  },
  {
    word: "つま　/　かない",
    meaning: "ဇနီး(မိမိ၏)",
    ch: 9,
  },
  {
    word: "こども",
    meaning: "‌‌‌‌‌ကလေး၊သားသမီး",
    ch: 9,
  },
  {
    word: "よく",
    meaning: "ကောင်းကောင်း၊ ကောင်းစွာ၊ မကြာခဏ၊ များများ",
    ch: 9,
  },
  {
    word: "だいたい",
    meaning: "များသောအားဖြင့်၊ အကြမ်းဖျင်းအားဖြင့်",
    ch: 9,
  },
  {
    word: "たくさん",
    meaning: "များများ၊အများကြီး",
    ch: 9,
  },
  {
    word: "すこし",
    meaning: "နည်းနည်း၊ အနည်းငယ်",
    ch: 9,
  },
  {
    word: "ぜんぜん",
    meaning: "လုံးဝ(အငြင်းနှင့်တွဲ၍သုံးသည်)",
    ch: 9,
  },
  {
    word: "はやく",
    meaning: "စောစော၊မြန်မြန်",
    ch: 9,
  },
  {
    word: "〜　から",
    meaning: "ကြောင့်၊ သောကြောင့်",
    ch: 9,
  },
  {
    word: "どうして",
    meaning: "ဘာကြောင့်",
    ch: 9,
  },
  {
    word: "かして　ください。",
    meaning: "ငှားပေးပါ၊ ခဏငှားပေးပါ။",
    ch: 9,
  },
  {
    word: "いいですよ。",
    meaning: "ကောင်းပါတယ်။ ‌အေးအေး။",
    ch: 9,
  },
  {
    word: "ざんねんですが。",
    meaning: "‌စိတ်းမကောင်းပါဘူး(ဆိုပေမဲ့). စိတ်တော့မကောင်းပါဘူး",
    ch: 9,
  },
  {
    word: "ああ",
    meaning: "‌‌‌ဪ",
    ch: 9,
  },
  {
    word: "いっしょに　いかがですか。",
    meaning: "‌‌‌‌‌အတူတူဆိုဘယ်လိုလဲ။ အတူလိုက်မလား။",
    ch: 9,
  },
  {
    word: "[~ は]　ちょっと。",
    meaning:
      "- ဆိုရင်တော့...။ - ကတော့...။ (ဖိတ်ခေါ်လာမှု၊တောင်းဆိုလာမှုတို့ကိုသွယ်ဝိုက်သောနည်းဖြင့်ငြင်းဆိုသည့်အသုံး)",
    ch: 9,
  },
  {
    word: "だめですか。",
    meaning: "မရဘူးလား။ မဖြစ်ဘူးလား။",
    ch: 9,
  },
  {
    word: "またこんどあねがいします。",
    meaning:
      "နောက်တစ်ကြိမ်ထပ်ဆုံကြတာပေါ့။ ‌နောက်တစ်ကြိမ်ထပ်(ဖိတ်ပါလို့)တောင်းဆိုပါတယ်။(တစ်ဖတ်လူ၏စေတနာကိုနားလည်ပေးသည့်အနေဖြင့်အလိမ္မာနည်းဖြင့်ငြင်းဆိုသည့်အသုံး)",
    ch: 9,
  },
  {
    word: "あります",
    meaning:
      "ရှိသည်(တည်ရှိခြင်းကိုပြသည်၊ သက်မဲ့နှင့် မလှုပ်ရှားသောအရာတို့တွင်သုံးသည်။)",
    ch: 10,
  },
  {
    word: "います",
    meaning:
      "ရှိသည်။(တည်ရှိခြင်းကိုပြသည်။ သက်ရှိနှင့်လှုပ်ရှားသောအရာတို့တွင်သုံးသည်။)",
    ch: 10,
  },
  {
    word: "いろいろ「な」",
    meaning: "အမျိုးမျိုးသော",
    ch: 10,
  },
  {
    word: "おとこの　ひと",
    meaning: "အမျိုးသား၊ ယောက်ျားကြီး",
    ch: 10,
  },
  {
    word: "おんなの　ひと",
    meaning: "အမျိုးသမီး၊ မိန်းမကြီး",
    ch: 10,
  },
  {
    word: "おとこのこ",
    meaning: "ယောက်ကျားလေး",
    ch: 10,
  },
  {
    word: "おんなのこ",
    meaning: "မိန်းကလေး",
    ch: 10,
  },
  {
    word: "いぬ",
    meaning: "ခွေး",
    ch: 10,
  },
  {
    word: "ねこ",
    meaning: "ကြောင်",
    ch: 10,
  },
  {
    word: "パンダ",
    meaning: "ပန်ဒါဝက်ဝံ",
    ch: 10,
  },
  {
    word: "ぞう",
    meaning: "ဆင်",
    ch: 10,
  },
  {
    word: "き",
    meaning: "သစ်ပင်၊ သစ်သား",
    ch: 10,
  },
  {
    word: "もの",
    meaning: "ပစ္စည်း၊ အရာဝတ္ထု",
    ch: 10,
  },
  {
    word: "でんち",
    meaning: "ဓာတ်ခဲ၊ ဘတ္ထရီ",
    ch: 10,
  },
  {
    word: "はこ",
    meaning: "သေတ္တာ၊ဘူး",
    ch: 10,
  },
  {
    word: "スイッチ",
    meaning: "ခလုတ်",
    ch: 10,
  },
  {
    word: "れいぞうこ",
    meaning: "ရေခဲသေတ္တာ",
    ch: 10,
  },
  {
    word: "テーブル",
    meaning: "စားပွဲခုံ၊ ထမင်းစားစားပွဲ",
    ch: 10,
  },
  {
    word: "ベッド",
    meaning: "အိပ်ရာ၊ကုတင်",
    ch: 10,
  },
  {
    word: "たな",
    meaning: "စင်",
    ch: 10,
  },
  {
    word: "ドア",
    meaning: "တံခါးမ",
    ch: 10,
  },
  {
    word: "まど",
    meaning: "ပြတင်းပေါက်",
    ch: 10,
  },
  {
    word: "ポスト",
    meaning: "စာတိုက်ပုံး",
    ch: 10,
  },
  {
    word: "ビル",
    meaning: "အဆောက်အဉီး",
    ch: 10,
  },
  {
    word: "コンビニ",
    meaning: "၂၄နာရီစတိုး",
    ch: 10,
  },
  {
    word: "こうえん",
    meaning: "ပန်းခြံ",
    ch: 10,
  },
  {
    word: "きっさてん",
    meaning: "လက်ဖက်ရည်ဆိုင်",
    ch: 10,
  },
  {
    word: "〜や",
    meaning: "ဆိုင်",
    ch: 10,
  },
  {
    word: "のりば",
    meaning: "မှတ်တိုင်၊ ဂိတ်(ယာဉ်စီးရန်သတ်မှတ်နေရာ)",
    ch: 10,
  },
  {
    word: "けん",
    meaning: "ခရိုင်",
    ch: 10,
  },
  {
    word: "うえ",
    meaning: "အပေါ်",
    ch: 10,
  },
  {
    word: "した",
    meaning: "အောက်",
    ch: 10,
  },
  {
    word: "まえ",
    meaning: "‌ရှေ့",
    ch: 10,
  },
  {
    word: "うしろ",
    meaning: "နောက်",
    ch: 10,
  },
  {
    word: "みぎ",
    meaning: "လက်ယာ၊ ညာ(ဘက်)",
    ch: 10,
  },
  {
    word: "ひだり",
    meaning: "လက်ဝဲ၊ ဘယ်(ဘက်)",
    ch: 10,
  },
  {
    word: "なか",
    meaning: "အလယ်",
    ch: 10,
  },
  {
    word: "そと＊",
    meaning: "အပြင်",
    ch: 10,
  },
  {
    word: "となり",
    meaning: "ဘေးနား၊ ကပ်လျက်",
    ch: 10,
  },
  {
    word: "ちかく",
    meaning: "အနီးနား",
    ch: 10,
  },
  {
    word: "あいだ",
    meaning: "အကြား",
    ch: 10,
  },
  {
    word: "〜や〜「など」",
    meaning: "တို့၊ တို့(စသည်)",
    ch: 10,
  },
  {
    word: "「どうも」すみません",
    meaning: "အားနာစရာကြီး။ ကျေးဇူးတင်ပါတယ်",
    ch: 10,
  },
  {
    word: "ナンプー",
    meaning: "ငါ့းငံပြာရည်",
    ch: 10,
  },
  {
    word: "コーナー",
    meaning: "ကော်နာ",
    ch: 10,
  },
  {
    word: "いちばん　した",
    meaning: "အောက်ဆုံး",
    ch: 10,
  },
];

export const getVocabList = async (query: PropVocabSearchQuery) => {
  // await new Promise((resolve, reject) => setTimeout(resolve, 200))
  const offset = Number(query.offset || 0);
  const count = Number(query.count || 6);
  let res = list.filter((item) => item.ch === Number(query.ch));

  res = res.slice(offset * count, count * offset + count);
  return res;
};

export const getTotalVocabs = async (query: PropVocabSearchQuery) => {
  return list.filter((item) => item.ch === Number(query.ch)).length;
};

export default list;

/**
 

[
  {
    "word": "",
    "meaning": "‌",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "‌‌‌‌‌",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "‌",
    "ch": 8
  },
  {
    "word": "",
    "meaning": "‌‌‌",
    "ch": 8
  }
]

 */
