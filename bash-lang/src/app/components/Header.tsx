'use client';

import { useWindowSize } from "@react-hook/window-size";
import Link from "next/link";


function Header() {

  const [width, height] = useWindowSize();
  return (
    <header className="w-full max-w-[800px] h-full flex content-center text-white items-center justify-between">
      <Link href={'/'} className="text-left w-full">
      <h1 className="lg:text-3xl text-2xl py-4 pl-2 font-bold drop-shadow-lg whitespace-nowrap">
        Спрягай-ка! 🍏
      </h1>
      </Link>
      <Link href={'/about'} title="О тренажёре" className=" hover:text-emerald-50 w-fit h-full flex items-center p-2">
        {width > 840 ? <span className="whitespace-nowrap font-semibold underline underline-offset-2">
          Как это работает?
        </span> :
        <span className=" fill-white hover:fill-emerald-50 px-1">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M20.083 29.792q.75 0 1.25-.5t.5-1.25q0-.709-.5-1.23-.5-.52-1.25-.52t-1.25.52q-.5.521-.5 1.23 0 .75.5 1.25t1.25.5Zm-1.458-6.167h2.667q0-1.208.27-2.063.271-.854 1.73-2.104 1.208-1.083 1.77-2.104.563-1.021.563-2.312 0-2.25-1.521-3.542-1.521-1.292-3.896-1.292-2.125 0-3.666 1.084-1.542 1.083-2.209 2.875l2.375.916q.375-1.041 1.23-1.75.854-.708 2.187-.708 1.417 0 2.208.75.792.75.792 1.833 0 .917-.521 1.688-.521.771-1.479 1.562-1.417 1.292-1.958 2.271-.542.979-.542 2.896ZM20 36.667q-3.417 0-6.458-1.313-3.042-1.312-5.313-3.583t-3.583-5.313Q3.333 23.417 3.333 20q0-3.458 1.313-6.5 1.312-3.042 3.583-5.292t5.313-3.562Q16.583 3.333 20 3.333q3.458 0 6.5 1.313 3.042 1.312 5.292 3.562t3.562 5.292q1.313 3.042 1.313 6.5 0 3.417-1.313 6.458-1.312 3.042-3.562 5.313T26.5 35.354q-3.042 1.313-6.5 1.313Zm0-2.792q5.792 0 9.833-4.042 4.042-4.041 4.042-9.833t-4.042-9.833Q25.792 6.125 20 6.125t-9.833 4.042Q6.125 14.208 6.125 20t4.042 9.833q4.041 4.042 9.833 4.042ZM20 20Z"/></svg>
        </span>}
    </Link>
    </header>
  );
}

export default Header;
