import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      // style={{ gridArea: "header" }}
      className="z-10 fixed col-span-2 row-start-1 row-end-2 w-screen"
    >
      <div className="flex items-center bg-slate-800/90 px-4 border-b border-border/60 h-[46px]">
        <Link href="/" className="hover:text-green-200 text-2xl">
          Investor Dashboard
        </Link>
      </div>
    </header>
  );
};

export default Header;
