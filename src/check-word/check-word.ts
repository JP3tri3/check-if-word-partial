import RegexLib from './en-regex';

/**
 * @returns {boolean} a boolean, true if the given word is a valid word otherwise false
 */
const checkWord = (word: string): boolean => {
  const regex: RegExp = RegexLib[word.length as keyof typeof RegexLib];
  return word.length > 3 && word.length < 11 ? regex.test(word) : false;
};

export { checkWord };
