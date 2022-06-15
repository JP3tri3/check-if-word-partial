const assert = require('assert');

const checkWords = require('./index');
const englishWords = checkWords('en');

const words = [
  ['hello', true],
  ['test', true],
  ['zymogenesis', false],
  ['zzzzzzzzzzzzzzz', false],
  ['SAM', false],
  ['zzzs', true],
];

function testWords(words) {
  function test([word, expected]) {
    assert(englishWords.check(word) === expected);
  }
}

testWords(words);
