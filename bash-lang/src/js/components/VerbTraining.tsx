"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import generatePresentSimple from "../functions/verb-functions";
import pronouns from "../pseudo-db/pronouns";
import { verbs } from "../pseudo-db/verbs";
import Keyboard from "./Keyboard";

function VerbTraining() {
  const pattern =
    "^[а-яА-ЯёЁәӘөӨҡҠғҒҫҪҙҘһҺүҮңҢ]+(?:[ -][а-яА-ЯёЁәӘөӨҡҠғҒҫҪҙҘһҺүҮңҢ]+)*$";
  const patternWarning = "Пожалуйста, пишите кириллицей";

  function getRandomVerb(){
    return verbs[Math.floor(Math.random() * verbs.length)]
  };
  const verb: any = useMemo(() => getRandomVerb(), []);
  
  const [inputData, setInputData] = useState({
    form1: "",
    form2: "",
    form3: "",
    form4: "",
    form5: "",
    form6: "",
  });

  function handleChanges(e: any) {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
    console.log(inputData);
  }

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
        <div className="flex flex-col lg:flex-row lg:gap-12 items-center w-full">
        <ul className="w-full max-w-fit divide-y-2">
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
              pattern={pattern}
              title={patternWarning}
              name={"form" + pronoun.id.toString()}
              onChange={(e) => handleChanges(e.target.value?.toLowerCase())}
              required
            />
          </li>
          ))
          }
        </ul>

        <Keyboard />
        </div>

        <button
          className="bg-lime-700 hover:bg-lime-800 text-white shadow p-2 m-4 rounded-lg hover:outline hover:outline-offset-2 hover:outline-2 hover:outline-lime-400"
          type="submit"
          onSubmit={(e) => onSubmit(e)}
        >
          Проверить
        </button>

        <Link href={"#"} className="text-left">Посмотреть формы глагола в справочнике</Link>
      </form>
    </section>
  );
}

export default VerbTraining;
