"use client";
import VocabList from "./ui/VocabList";
import Navbar from "./ui/Navbar";
import FilterBar from "./ui/FilterBar";
import _ from "lodash";
import Container from "./ui/Container";
import { PropVocabSearchQuery } from "./lib/definitions";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import LoadingSkeleton from "./ui/LoadingSkeleton";
import CoverImage from "./ui/CoverImage";

export const dynamic = "force-dynamic";

export default function Home({
  searchParams,
}: {
  searchParams: PropVocabSearchQuery;
}) {
  unstable_noStore();
  const { count, offset, ch } = searchParams;
  return (
    <main>
      <CoverImage />
      <Navbar />
      <Container>
        <div className="grid grid-cols-[1fr] md:grid-cols-[220px,1fr] gap-10">
          <div className="min-h-screen hidden md:block">
            <FilterBar />
          </div>
          <div>
            <Suspense
              key={`${count}${offset || ""}${ch}`}
              fallback={<LoadingSkeleton />}
            >
              <VocabList query={searchParams} />
            </Suspense>
          </div>
        </div>
      </Container>
    </main>
  );
}
