// ГЛАГОЛ - ҠЫЛЫМ

const verbs: object[] = [
  {
    id: 1,
    imperative: "аша",
    properties: {
      is_regular: true,
      is_soft: false,
      is_last_vowel: true,
    },
    translations: {
      ru: "есть",
      eng: "to eat",
    },
  },
  {
    id: 2,
    imperative: "эшлә",
    properties: {
      is_regular: true,
      is_soft: true,
      is_last_vowel: true,
    },
    translations: {
      ru: "работать",
      eng: "to work",
    },
  },
];

function generatePresentSimple(verb: any) {
  if (verb.properties.is_regular) {
    if (verb.properties.is_last_vowel) {
      if (verb.properties.is_soft) {
        return {
          first_singular: verb.imperative + "йем",
        };
      } else {
      }
    } else {
    }
  } else {
    return "Неправильный глагол!";
  }
}

export default verbs;
