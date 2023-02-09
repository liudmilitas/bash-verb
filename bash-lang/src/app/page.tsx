import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const pronouns = [
    {
      id: 1,
      bash: "Мин",
      ru: "Я",
      eng: "I",
    },
    {
      id: 2,
      bash: "Һин",
      ru: "Ты",
      eng: "You (singular)",
    },
    {
      id: 3,
      bash: "Ул",
      ru: "Он | Она | Оно",
      eng: "He | She | it",
    },
    {
      id: 4,
      bash: "Бeҙ",
      ru: "Мы",
      eng: "We",
    },
    {
      id: 5,
      bash: "Һеҙ",
      ru: "Вы",
      eng: "You (plural)",
    },
    {
      id: 6,
      bash: "Улар",
      ru: "Они",
      eng: "They",
    },
  ];

  return (
    <main
      className={
        "bg-gradient-to-r from-emerald-500 to-lime-600 flex flex-col justify-around items-center lg:px-16 md:px-12 sm:px-6 p-4 h-full min-h-screen " +
        styles.pattern
      }
    >
      <section className="w-full h-full flex flex-col content-center items-center justify-center">
        <h1 className="text-3xl text-white p-4 font-bold drop-shadow-lg w-full max-w-[800px] text-center lg:text-left md:text-left">
          Спрягай-ка! 🍏
        </h1>
        <div className="bg-white h-full rounded shadow-2xl w-full max-w-[800px] flex flex-col justify-between items-center">
          <h2 className="text-xl text-center p-2 font-semibold">Глагол</h2>
          <form className="flex flex-col p-4 h-full">
            <ul>
              {pronouns.map((pronoun) => (
                <li className="flex w-full justify-between items-center">
                  <label
                    className="text-gray-700 font-bold mr-2"
                    title={pronoun.ru}
                    htmlFor={pronoun.id.toString()}
                  >
                    {pronoun.bash.toUpperCase()}
                  </label>
                  <input
                    className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
                    id={pronoun.id.toString()}
                    type="text"
                    placeholder={pronoun.bash}
                  />
                </li>
              ))}
            </ul>

            <button
              className="bg-lime-700 hover:bg-lime-800 text-white shadow p-2 m-4 rounded-lg hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-emerald-500"
              type="submit"
            >
              Проверить
            </button>
          </form>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center text-white p-2 mt-8 drop-shadow-lg fill-white">
        <p className=" text-white p-1 drop-shadow w-full text-center font-semibold">
          Спрягай-ка! — Тренажёр башкирской грамматики
        </p>
        <div className="flex">
          <Link
            target={"_blank"}
            className="flex mx-2 hover:fill-emerald-100 hover:text-emerald-100 font-semibold"
            href="https://github.com/liudmilitas/bash-lang"
          >
            <svg className="w-6 h-6 fill-inherit" viewBox="0 0 64 64">
              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
            </svg>
            liudmilitas
          </Link>
          <span className="font-semibold">2023</span>
        </div>
      </div>
    </main>
  );
}
