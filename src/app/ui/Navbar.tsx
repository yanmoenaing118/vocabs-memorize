import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container className="hidden md:block">
      <div className="glass-container  h-14 rounded-lg flex items-center justify-end w-full max-w-full">
        <div className="flex items-center space-x-4 justify-end -mt-16">
          <Link href="/" >
            <span className="text-lg md:text-3xl font-bold text-green-500 font-serif underline">
              Memorize
            </span>
          </Link>
        </div>

       
      </div>
    </Container>
  );
}
