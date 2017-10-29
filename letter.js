//Here, we're bringing in the words for the word.js file. Will create more words when I figure out how to make the first word work...
var words = require("./word");

var wordList = [words.another.word, words.test.word];
// var chosen = "";
// var lettersInWord = [];
// var numBlanks = 0;
// var remaining = 10;
// var blanksAndSuccesses = [];

function Letter(chosen, lettersInWord, numBlanks, remaining, blanksAndSuccesses) {
    this.chosen = chosen;
    this.lettersInWord = lettersInWord;
    this.numBlanks = numBlanks;
    this.blanksAndSuccesses = [];
}

Letter.prototype.selectWord = function () {
  
    this.chosen = wordList[Math.floor(Math.random() * (wordList.length))];
    this.lettersInWord = this.chosen.split("");
    // this.lettersInWord = this.lettersInWord.filter(function (n) {
    //     return n != ' ' || undefined
    // });
    this.numBlanks = this.lettersInWord.length;
    var hidden = this.chosen.replace(/[A-Z]/gi, " _ ");
 
 
    for (var i = 0; i < this.numBlanks; i++){
        this.blanksAndSuccesses.push("_")
    }
   
    // console.log(this.chosen);
    // console.log(this.lettersInWord);
    // console.log(this.numBlanks);
    // console.log(this.blanksAndSuccesses);
    // console.log(hidden);
};

var underscore = new Letter(this.chosen);
underscore.selectWord();

module.exports = underscore;