"use client";

import { useState } from "react";

function Keyboard() {
  const specialSymbols: string[] = [
    "ә",
    "ө",
    "ҡ",
    "ғ",
    "ҫ",
    "ҙ",
    "һ",
    "ү",
    "ң",
  ];

  const [letter, setLetter] = useState<string>("");

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLetter(e.currentTarget.innerText.toLowerCase());
  }

  // TODO: find a way to pass the letter to the input field

  return (
    <section className="py-4">
      <fieldset className="border border-solid border-lime-700 p-3 bg-emerald-50 rounded">
        <legend className="text-lime-700">Башкирские буквы</legend>
        <ul className="grid grid-cols-5 gap-2 w-full">
          {specialSymbols.map((symbol) => (
            <li key={symbol}>
              <button
                className="bg-lime-600 hover:bg-lime-700 hover:outline hover:outline-offset-2 hover:outline-lime-400 
                text-white font-bold px-4 py-2 border-b-4 border-lime-700 hover:border-lime-800 rounded uppercase duration-100"
                onClick={(e) => handleClick(e)}
              >
                {symbol}
              </button>
            </li>
          ))}
        </ul>
      </fieldset>
    </section>
  );
}

export default Keyboard;
