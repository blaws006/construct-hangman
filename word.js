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
var another = new Word("New Test");
//Here's how we run the new object method
// another.printWord();
//Exporting the new object
module.exports = {
    another: another,
    test: test
};