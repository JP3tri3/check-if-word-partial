# check-if-word-partial

Check if word exists. Partial version of check-if-word npm package by (Devdutta Bain <devdutta.bain@gmail.com>), which was built on top of check-word by ( < david.barinas.dev@gmail.com >)"
[s0c5]<david.barinas.dev@gmail.com>. Separated Regex and downsized to check only 4 to 10 letter words for specific use.

### install

```bash
$ npm install check-if-word-partial
```

### how to use?

```javascript
var checkWord = require('check-if-word'),
    words     = checkWord('en'); // setup the language for check, default is en

words.check('dog'); // false (less than 4 letters)
words.check('perro'); // false (wrong word)
words.check('test'); // true

words.getValidWords(["ajsk", "test", "object", "opal", "perl", "perlpali"]); // [ 'test', 'object', 'opal' ]

...

```

### credits

thanks to repository [check-if-word](https://github.com/devduttabain/node-check-if-word)
