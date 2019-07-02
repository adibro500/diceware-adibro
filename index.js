const diceware = require('./diceware-adibro');
const wordList = require('./diceware-adibro-wordlist');
let options = {
    numOfWords: 9,
    wordSeperator: "&" 
}
const dice = new diceware();
console.log(dice.randomWord());
console.log(dice.preparePassword(options));
console.log(dice.preparePassword());
console.log("specific json", wordList['11111']);
console.log("all json", wordList);