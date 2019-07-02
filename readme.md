# diceware-adibro
### get passwords from famouse diceware system
# Installation
```
npm i --save diceware-adibro
```
# Usage
```
const diceware = require('diceware-adibro');
const wordList = require('diceware-adibro/diceware-adibro-wordlist');
let options = {
    numOfWords: 9,  // password no. of words
    wordSeperator: "&" // words seperated by
}
const dice = new diceware();
console.log(dice.randomWord()); // get single random word
console.log(dice.preparePassword(options)); //get password phrase with options
console.log(dice.preparePassword()); // prepare password with default settings
console.log("specific json", wordList['11111']); // get specific word
console.log("all json", wordList); // get all diceware dictionary
```

Have fun !