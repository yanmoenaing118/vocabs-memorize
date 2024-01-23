import React from "react";
import Container from "./Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container>
      <div className="glass-container px-3 py-2 md:px-6 md:py-4 rounded-lg shadow-lg flex items-center justify-between w-full max-w-full">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <span className="text-lg md:text-3xl font-bold text-green-300 font-serif underline">
              Memorize
            </span>
          </Link>
        </div>

        {/* <button className="border text-white p-1  md:px-4 md:py-2 rounded-md flex items-center gap-2">
          <svg
          className="scale-75"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16H22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 10V22"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden md:block">Add New</span>
        </button> */}
      </div>
    </Container>
  );
}
