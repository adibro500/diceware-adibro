let wordList = require("./diceware-adibro-wordlist");

let defOptions = {
  numOfWords: 5,
  wordSeperator: " "
};

let options = {
    numOfWords: 5,
    wordSeperator: " "
  };

var diceware = function() {};


diceware.prototype.randomWord = function() {
  let keyString = "";
  for (let i = 0; i < 5; i++) {
    keyString += Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }
  return wordList[keyString];
};

diceware.prototype.preparePassword = function(opts) {
  if (opts) {
    if (opts.hasOwnProperty("numOfWords")) options.numOfWords = opts.numOfWords;
    if (opts.hasOwnProperty("wordSeperator"))
      options.wordSeperator = opts.wordSeperator;
  } else {
    options = defOptions;
  }
  let loop = 0;
  let password = "";
  while (loop < options.numOfWords) {
    password +=
      diceware.prototype.randomWord() +
      (loop < options.numOfWords - 1 ? options.wordSeperator : "");
    loop++;
  }
  options = defOptions;
  return password;
};

module.exports = diceware;
