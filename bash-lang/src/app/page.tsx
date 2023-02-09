import styles from "./page.module.css";
import Link from "next/link";
import pronouns from "./pseudo-db/pronouns";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col content-center items-center justify-center">
        <section className="bg-white h-full rounded shadow-2xl w-full max-w-[800px] flex flex-col justify-between items-center">
          <h2 className="text-xl text-center p-2 font-semibold">Глагол</h2>
          <form className="flex flex-col p-4 h-full">
            <ul>
              {pronouns.map((pronoun) => (
                <li
                  className="flex w-full justify-between items-center"
                  key={pronoun.id}
                >
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
        </section>
      </main>
      <Footer />
    </>
  );
}
