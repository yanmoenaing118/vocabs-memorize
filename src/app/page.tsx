"use client";
import VocabList from "./ui/VocabList";
import Navbar from "./ui/Navbar";
import SuffleBar from "./ui/SuffleBar";
import _ from "lodash";
import Container from "./ui/Container";
import { PropVocabSearchQuery } from "./lib/definitions";
import { unstable_noStore } from "next/cache";

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
            <VocabList query={searchParams} />
          </div>
        </div>
      </Container>
    </main>
  );
}
