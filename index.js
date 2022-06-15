/**
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word in the
 * language
 */
module.exports = function checkWord() {
  const languageRegex = require(`./word-regexes/en-regex.js`);

  return {
    check: (word) =>
      word.length > 3 && word.length < 11 ? languageRegex[word.length].test(word) : false,
    getValidWords: function (words) {
      if (Array.isArray(words)) {
        return words.filter((word) => languageRegex[word.length].test(word));
      } else {
        var type =
          words == null
            ? 'Null'
            : words == undefined
            ? 'Undefined'
            : words.__proto__.constructor.name;
        throw new Error('argument 1 must be an array. given ' + type + ' .');
      }
      return false;
    },
  };
};
