import pronouns from "../pseudo-db/pronouns";
import { generatePresentSimple, verbs } from "../pseudo-db/verbs";

function VerbTraining() {
  const verb: any = verbs[Math.floor(Math.random() * verbs.length)];
  console.log(generatePresentSimple(verb, true));
  return (
    <section className="h-full w-full max-w-[800px] flex flex-col justify-between items-center">
      <h3 className="text-xl text-center p-2 font-semibold">
        {verb.infinitive} (
        <span className="underline underline-offset-2 decoration-double mx-1">
          {verb.imperative}!
        </span>
        ) — {verb.translations.ru} {verb.translations.emoji}
      </h3>
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
  );
}

export default VerbTraining;
