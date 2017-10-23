//Intial Word function
function Word(word) {
    this.word = word;
};
//Prototype Method
Word.prototype.printWord = function () {
    console.log(this.word);
};
//New word object
var test = new Word("Test");
//Here's how we run the new object method
// test.printWord();
//Exporting the new object
module.exports = test;