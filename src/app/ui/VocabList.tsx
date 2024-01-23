import React, { useEffect, useState } from "react";
import Container from "./Container";
import { PropVocabSearchQuery } from "../lib/definitions";
import { getTotalVocabs, getVocabList } from "../lib/data";
import _ from "lodash";
import clsx from "clsx";
import NoResultsFound from "./NoResultsFound";
import Vocabs from "./Vocabs";

export default async function VocabList({
  query,
}: {
  query: PropVocabSearchQuery;
}) {
  const myList = await getVocabList(query);
  const totalVocabs = await getTotalVocabs(query);

  return (
    <>
      {myList.length === 0 ? (
        <NoResultsFound />
      ) : (
        <Vocabs totalVocabs={totalVocabs} list={myList} />
      )}
    </>
  );
}
