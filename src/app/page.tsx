"use client";
import VocabList from "./ui/VocabList";
import Navbar from "./ui/Navbar";
import SuffleBar from "./ui/SuffleBar";
import _ from "lodash";
import Container from "./ui/Container";
import { PropVocabSearchQuery } from "./lib/definitions";
import { unstable_noStore } from "next/cache";
import { Suspense } from "react";
import LoadingSkeleton from "./ui/LoadingSkeleton";

export default function Home({
  searchParams,
}: {
  searchParams: PropVocabSearchQuery;
}) {
  unstable_noStore();
  return (
    <main>
      <Navbar />
      <Container>
        <div className="grid grid-cols-[120px,1fr] gap-12">
          <div className="min-h-screen">
            <SuffleBar />
          </div>
          <div>
            <Suspense key={searchParams.ch} fallback={<LoadingSkeleton />}>
              <VocabList query={searchParams} />
            </Suspense>
          </div>
        </div>
      </Container>
    </main>
  );
}
