import { unstable_noStore } from "next/cache";
import { VocabsList } from "@/app/lib/definitions";
import { PropVocabSearchQuery } from "./definitions";
import _ from "lodash";
import { fsync } from "fs";
import { list } from "@/data";



export const getVocabList = async (query: PropVocabSearchQuery) => {

  const offset = Number(query.offset || 0);
  const count = Number(query.count || 6);
  let res = list.filter((item) => item.ch === Number(query.ch));

  res = Number(query.count) === -1 ? res : res.slice(offset * count, count * offset + count);
  return res;
};

export const getTotalVocabs = async (query: PropVocabSearchQuery) => {
  return list.filter((item) => item.ch === Number(query.ch)).length;
};

export default list;
