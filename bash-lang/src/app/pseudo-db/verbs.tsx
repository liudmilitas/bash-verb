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

//

export function generatePresentSimple(verb: any, isNegative: boolean) {
  // Глагольные окончания настоящего времени
  const lastVowelTypeASoftEndings = [
    "йем",
    "йһең",
    "й",
    "йбеҙ",
    "йһегеҙ",
    "йҙәр",
  ];
  const lastVowelTypeAHardEndings = [
    "йым",
    "йһың",
    "й",
    "йбыҙ",
    "йһыгыҙ",
    "йҙар",
  ];
  const lastVowelTypeOSoftEndings = [
    "йөм",
    "йһөң",
    "й",
    "йбөҙ",
    "йһөгөҙ",
    "йҙәр",
  ];
  const lastVowelTypeOHardEndings = [
    "йом",
    "йһоң",
    "й",
    "йбоҙ",
    "йһогоҙ",
    "йҙар",
  ];
  const lastConsonantSoftEndings = [
    "әм",
    "әһең",
    "ә",
    "әбеҙ",
    "әһегеҙ",
    "әләр",
  ];
  const lastConsonantHardEndings = [
    "ам",
    "аһың",
    "а",
    "абыҙ",
    "аһыгыҙ",
    "алар",
  ];

  const { properties, imperative } = verb;
  const { is_regular, is_soft, is_type_a, is_last_vowel } = properties;
  let verbType;

  if (is_regular) {
    if (is_soft && is_type_a && is_last_vowel) {
      verbType = lastVowelTypeASoftEndings;
    } else if (!is_soft && is_type_a && is_last_vowel) {
      verbType = lastVowelTypeAHardEndings;
    } else if (is_soft && !is_type_a && is_last_vowel) {
      verbType = lastVowelTypeOSoftEndings;
    } else if (!is_soft && !is_type_a && is_last_vowel) {
      verbType = lastVowelTypeOHardEndings;
    } else if (is_soft && !is_last_vowel) {
      verbType = lastConsonantSoftEndings;
    } else if (!is_soft && !is_last_vowel) {
      verbType = lastConsonantHardEndings;
    } else {
      return "Invalid verb object!";
    }

    if (isNegative && is_soft){
      if (is_last_vowel) {
        lastVowelTypeASoftEndings.map((ending) => imperative + 'мә' + ending);
      }
      return verbType?.map((ending) => imperative + 'мә' + ending);
    } else if (isNegative && !is_soft) {
      if (is_last_vowel) {
        lastVowelTypeAHardEndings.map((ending) => imperative + 'ма' + ending);
      }
      return verbType?.map((ending) => imperative + 'ма' + ending);
    } else {
      return verbType?.map((ending) => imperative + ending);
    }

  } else {
    return "Неправильный глагол!";
  }
}
