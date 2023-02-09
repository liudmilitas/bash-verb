import Link from "next/link";

function Header() {
  return (
    <header className="w-full h-full flex content-center items-center justify-center">
      <h1 className="text-3xl text-white p-4 font-bold drop-shadow-lg w-full max-w-[800px] text-center lg:text-left md:text-left">
        Спрягай-ка! 🍏
      </h1>
      <button className="rounded text-center text-white">
        <span className="collapse lg:visible whitespace-nowrap font-semibold">
          Как это работает?
        </span>
        <span className="lg:invisible text-xl border-1 border-white  bg-white bg-opacity-10">
          ?
        </span>
      </button>
    </header>
  );
}

export default Header;
