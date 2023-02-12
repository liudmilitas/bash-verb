import { FormEvent, useState } from "react";
import generatePresentSimple from "../functions/verb-functions";
import pronouns from "../pseudo-db/pronouns";
import { verbs } from "../pseudo-db/verbs";
import Keyboard from "./Keyboard";

function VerbTraining() {
  const pattern =
    "^[а-яА-ЯёЁәӘөӨҡҠғҒҫҪҙҘһҺүҮңҢ]+(?:[ -][а-яА-ЯёЁәӘөӨҡҠғҒҫҪҙҘһҺүҮңҢ]+)*$";
  const verb: any = verbs[Math.floor(Math.random() * verbs.length)];
  const patternWarning = "Пожалуйста, пишите кириллицей";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  console.log(generatePresentSimple(verb, true));

  return (
    <section className="h-full w-full max-w-[800px] flex flex-col justify-between items-center">
      <h3 className="text-xl text-center p-2 font-semibold">
        {verb.infinitive} (
        <span className="underline underline-offset-2 decoration-double mx-1">
          {verb.imperative}!
        </span>
        ) —{" "}
        <span className="whitespace-nowrap">
          {verb.translations.ru} {verb.translations.emoji}
        </span>
      </h3>
      <p className="text-lg text-center p-2 font-semibold">
        Образуй форму:{" "}
        <span className="whitespace-nowrap">⏰ настоящее время,</span>{" "}
        <span className="whitespace-nowrap">⛔ отрицательный залог</span>
      </p>
      <form className="flex flex-col p-4 h-full items-center">
        <ul className="w-full max-w-fit divide-y-2">
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[0].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[0].ru}
              htmlFor={pronouns[0].id.toString()}
            >
              {pronouns[0].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[0].id.toString()}
              type="text"
              placeholder={pronouns[0].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[1].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[1].ru}
              htmlFor={pronouns[1].id.toString()}
            >
              {pronouns[1].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[1].id.toString()}
              type="text"
              placeholder={pronouns[1].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[2].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[2].ru}
              htmlFor={pronouns[2].id.toString()}
            >
              {pronouns[2].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[2].id.toString()}
              type="text"
              placeholder={pronouns[2].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[3].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[3].ru}
              htmlFor={pronouns[3].id.toString()}
            >
              {pronouns[3].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[3].id.toString()}
              type="text"
              placeholder={pronouns[3].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[4].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[4].ru}
              htmlFor={pronouns[4].id.toString()}
            >
              {pronouns[4].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[4].id.toString()}
              type="text"
              placeholder={pronouns[4].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
          <li
            className="flex w-full justify-between items-center"
            key={pronouns[5].id}
          >
            <label
              className="text-gray-700 font-bold mr-2"
              title={pronouns[5].ru}
              htmlFor={pronouns[5].id.toString()}
            >
              {pronouns[5].bash.toUpperCase()}
            </label>
            <input
              className="bg-gray-50 shadow-inner rounded-lg p-2 my-2"
              id={pronouns[5].id.toString()}
              type="text"
              placeholder={pronouns[5].bash}
              pattern={pattern}
              title={patternWarning}
              required
            />
          </li>
        </ul>

        <Keyboard />

        <button
          className="bg-lime-700 hover:bg-lime-800 text-white shadow p-2 m-4 rounded-lg hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-lime-400"
          type="submit"
        >
          Проверить
        </button>
      </form>
    </section>
  );
}

export default VerbTraining;
