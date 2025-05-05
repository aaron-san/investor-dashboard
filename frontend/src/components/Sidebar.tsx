"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";

interface ISidebar {
  openSidebar: boolean;
  setOpenSidebar: (c: boolean) => void;
}

const Sidebar: React.FC<ISidebar> = ({ openSidebar, setOpenSidebar }) => {
  return (
    <aside
      // style={{ gridArea: "sidebar" }}
      className="row-start-2 row-end-5 mt-12 min-h-[calc(100vh-40px)]"
    >
      <div
        className={`border-r border-y border-border/60  bg-border/20 rounded-r overflow-hidden transition-all duration-50 ease-out h-full`}
        // ${!openSidebar && "w-[40px] h-[40px] rounded-br-xl border-b"}
      >
        <div className="relative">
          <FiAlignJustify
            className="top-2 right-2 absolute hover:text-green-200 text-xl cursor-pointer"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>

        <div
          className={`flex flex-col gap-4 pt-16`}
          //  ${!openSidebar ? "" : "ml-4"}`}
        >
          <Link href="/about" className="hover:text-green-300">
            <div className="flex items-center gap-1">
              <FaRegQuestionCircle className="mx-2 text-xl" />
              {openSidebar && <p>About</p>}
            </div>
          </Link>
          <Link href="/macro" className="hover:text-green-300">
            <div className="flex items-center gap-1">
              <IoStatsChartSharp className="mx-2 text-xl" />
              {openSidebar && <p>Macro</p>}
            </div>
          </Link>
          <Link href="/data" className="hover:text-green-300">
            <div className="flex items-center gap-1">
              <CiViewTable className="mx-2 text-xl" />
              {openSidebar && <p>Data</p>}
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
