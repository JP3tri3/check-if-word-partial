import RegexLib from '../word-regexes/en-regex';

/**
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
export function checkWord(): { check: (word: string) => boolean } {
  return {
    check: (word: string): boolean => {
      const regex: RegExp = RegexLib[word.length as keyof typeof RegexLib];
      return word.length > 3 && word.length < 11 ? regex.test(word) : false;
    },
  };
}
