//Here, we're bringing in the words for the word.js file. Will create more words when I figure out how to make the first word work...
var words = require("./word");

function Letter(letters) {
    this.letters = letters;
}

Letter.prototype.replaceLetter = function () {
    var hidden = this.letters.replace(/[A-Z]/gi,  " _ ");
  
console.log(hidden);
};

var underscore = new Letter(words.word);

underscore.replaceLetter();