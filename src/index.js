"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const en_regex_1 = __importDefault(require("./word-regexes/en-regex"));
/**
 * @returns {{check: (function(*=): boolean)}} a function that determines if the given word is a valid word
 */
exports.default = (word) => {
    const regex = en_regex_1.default[word.length];
    return word.length > 3 && word.length < 11 ? regex.test(word) : false;
};
//# sourceMappingURL=index.js.map