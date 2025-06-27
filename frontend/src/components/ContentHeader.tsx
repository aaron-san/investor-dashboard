"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const ContentHeader = () => {
  const router = useRouter();
  return (
    <section
      // style={{ gridArea: "section" }}
      className="flex gap-2 col-span-1 col-start-2 row-start-5 row-end-6 py-4 pl-4 bg-border/20 border-x border-t border-border/60 rounded-t"
    >
      <button
        onClick={() => router.back()}
        aria-label="Back"
        className="flex px-2 py-1 border border-white/20 rounded hover:text-green-300 cursor-pointer background-none items=center"
      >
        <HiArrowLeft className="mr-1 text-2xl" />
      </button>
      <button
        onClick={() => router.forward()}
        aria-label="Forward"
        className="flex px-2 py-1 border border-white/20 rounded hover:text-green-300 cursor-pointer items=center"
      >
        <HiArrowRight className="mr-1 text-2xl" />
      </button>
    </section>
  );
};

export default ContentHeader;
