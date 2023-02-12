"use client";

import { useWindowSize } from "@react-hook/window-size";
import Link from "next/link";
import { useEffect } from "react";

function Header() {
  return (
    <header className="w-full max-w-[800px] h-full flex content-center text-white items-center justify-between">
      <Link href={"/"} className="text-left">
        <h1 className="lg:text-3xl text-2xl py-4 pl-2 font-bold drop-shadow-lg whitespace-nowrap">
          Спрягай-ка! 🍏
        </h1>
      </Link>
      <Link
        href={"/about"}
        title="Как работать с тренажёром"
        className=" hover:text-emerald-50 w-fit h-full flex items-center py-4 px-2"
      >
        <span className="whitespace-nowrap font-semibold underline underline-offset-4 text-sm lg:text-base">
          О тренажёре
        </span>
      </Link>
    </header>
  );
}

export default Header;
