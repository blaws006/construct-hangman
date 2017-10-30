//Here, we're bringing in the words for the word.js file.
var words = require("./word");
// Putting words from word.js into array
var wordList = [words.redskins.word, words.cowboys.word, words.giants.word, words.eagles.word, words.seahawks.word, words.fourtyniners.word, words.cardinals.word, words.rams.word, words.packers.word, words.lions.word, words.vikings.word, words.bears.word, words.panthers.word, words.saints.word, words.bucs.word, words.falcons.word, words.patriots.word, words.dolphins.word, words.jets.word, words.bills.word, words.chiefs.word, words.raiders.word, words.chargers.word, words.broncos.word, words.ravens.word, words.steelers.word, words.bengals.word, words.browns.word, words.jaguars.word, words.titans.word, words.colts.word, words.texans.word];
//Constructor for letter properties
function Letter(chosen, lettersInWord, numBlanks, remaining, blanksAndSuccesses) {
    this.chosen = chosen;
    this.lettersInWord = lettersInWord;
    this.numBlanks = numBlanks;
    this.blanksAndSuccesses = [];
}

Letter.prototype.selectWord = function () {
    this.blanksAndSuccesses = []; //Wipes the slate clean for new games

    this.chosen = wordList[Math.floor(Math.random() * (wordList.length))]; //Randomly selects the word in list

    this.lettersInWord = this.chosen.split(""); //Splits individual characters and pushes to array

    this.numBlanks = this.lettersInWord.length;

    for (var i = 0; i < this.numBlanks; i++) {
        this.blanksAndSuccesses.push("_")

    } //Converts letter characters to underscoress

    // console.log(this.chosen);
    // console.log(this.lettersInWord);
    // console.log(this.numBlanks);
    // console.log(this.blanksAndSuccesses);
    // console.log(hidden);
};

var underscore = new Letter(this.chosen); //Object to be Exported to hangman.js
underscore.selectWord();

module.exports = underscore;