"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWord = void 0;
const en_regex_1 = __importDefault(require("./en-regex"));
/**
 * @returns {boolean} a boolean, true if the given word is a valid word otherwise false
 */
const checkWord = (word) => {
    const regex = en_regex_1.default[word.length];
    return word.length > 3 && word.length < 11 ? regex.test(word) : false;
};
exports.checkWord = checkWord;
//# sourceMappingURL=check-word.js.map