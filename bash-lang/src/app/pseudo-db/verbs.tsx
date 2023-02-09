// ГЛАГОЛ - ҠЫЛЫМ

export const verbs: object[] = [
  {
    id: 1,
    imperative: "аша",
    infinitive: "ашарға",
    properties: {
      is_regular: true,
      is_soft: false,
      is_last_vowel: true,
      is_type_a: true,
    },
    translations: {
      ru: "есть",
      eng: "to eat",
      emoji: "🍽😋",
    },
  },
  {
    id: 2,
    imperative: "эшлә",
    infinitive: "эшләргә",
    properties: {
      is_regular: true,
      is_soft: true,
      is_last_vowel: true,
      is_type_a: true,
    },
    translations: {
      ru: "работать",
      eng: "to work",
      emoji: "💼💪",
    },
  },
  {
    id: 3,
    imperative: "йөрө",
    infinitive: "йөрөргә",
    properties: {
      is_regular: true,
      is_soft: true,
      is_last_vowel: true,
      is_type_a: false,
    },
    translations: {
      ru: "ходить",
      eng: "to go",
      emoji: "🚶‍♂️👩‍🦯",
    },
  },
  {
    id: 4,
    imperative: "яҙ",
    infinitive: "яҙырға",
    properties: {
      is_regular: true,
      is_soft: false,
      is_last_vowel: false,
      is_type_a: true,
    },
    translations: {
      ru: "писать",
      eng: "to write",
      emoji: "📝✍️",
    },
  },
  {
    id: 5,
    infinitive: "кейенергә",
    imperative: "кейен",
    properties: {
      is_regular: true,
      is_soft: true,
      is_last_vowel: false,
      is_type_a: false,
    },
    translations: {
      ru: "одеваться",
      eng: "to get dressed",
      emoji: "👕👖",
    },
  },
  {
    id: 6,
    infinitive: "соҡорға",
    imperative: "соҡо",
    properties: {
      is_regular: true,
      is_soft: false,
      is_last_vowel: true,
      is_type_a: false,
    },
    translations: {
      ru: "копать",
      eng: "to dig",
      emoji: "🌱🕳️",
    },
  },
];

export function generatePresentSimple(verb: any) {
  if (verb.properties.is_regular) {
    if (verb.properties.is_last_vowel) {
      if (verb.properties.is_type_a) {
        if (verb.properties.is_soft) {
          return {
            first_singular: verb.imperative + "йем",
            second_singular: verb.imperative + "йһең",
            third_singular: verb.imperative + "й",
            first_plural: verb.imperative + "йбеҙ",
            second_plural: verb.imperative + "йһегеҙ",
            third_plural: verb.imperative + "йҙәр",
          };
        } else {
          return {
            first_singular: verb.imperative + "йым",
            second_singular: verb.imperative + "йһың",
            third_singular: verb.imperative + "й",
            first_plural: verb.imperative + "йбыҙ",
            second_plural: verb.imperative + "йһығыҙ",
            third_plural: verb.imperative + "йҙар",
          };
        }
      } else {
        if (verb.properties.is_soft) {
          return {
            first_singular: verb.imperative + "йөм",
            second_singular: verb.imperative + "йһөң",
            third_singular: verb.imperative + "й",
            first_plural: verb.imperative + "йбөҙ",
            second_plural: verb.imperative + "йһөгөҙ",
            third_plural: verb.imperative + "йҙәр",
          };
        } else {
          return {
            first_singular: verb.imperative + "йом",
            second_singular: verb.imperative + "йһоң",
            third_singular: verb.imperative + "й",
            first_plural: verb.imperative + "йбоҙ",
            second_plural: verb.imperative + "йһоғоҙ",
            third_plural: verb.imperative + "йҙар",
          };
        }
      }
    } else {
      if (verb.properties.is_soft) {
        return {
          first_singular: verb.imperative + "әм",
          second_singular: verb.imperative + "әһең",
          third_singular: verb.imperative + "ә",
          first_plural: verb.imperative + "әбеҙ",
          second_plural: verb.imperative + "әһегеҙ",
          third_plural: verb.imperative + "әләр",
        };
      } else {
        return {
          first_singular: verb.imperative + "ам",
          second_singular: verb.imperative + "аһың",
          third_singular: verb.imperative + "а",
          first_plural: verb.imperative + "абыҙ",
          second_plural: verb.imperative + "аһығыҙ",
          third_plural: verb.imperative + "алар",
        };
      }
    }
  } else {
    return "Неправильный глагол!";
  }
}
