export default function generatePresentSimple(verb: any, isNegative: boolean) {
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

    if (isNegative && is_soft) {
      return lastVowelTypeASoftEndings.map(
        (ending) => imperative + "мә" + ending
      );
    } else if (isNegative && !is_soft) {
      return lastVowelTypeAHardEndings.map(
        (ending) => imperative + "ма" + ending
      );
    } else {
      return verbType?.map((ending) => imperative + ending);
    }
  } else {
    return "Неправильный (нерегулярный) глагол!";
  }
}
