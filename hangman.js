var letters = require("./letter");
var inquirer = require("inquirer");



var letterSplit = letters.letters.split("");

letterSplit = letterSplit.filter(function (n) {
    return n != ' ' || undefined
});
letterSplit = letterSplit.toString();
console.log(letterSplit);
// var under = letters.replaceLetter();
// var underArr = under.split("")
var guessLetters = [];
var count = 0;
var remaining = 10;
var game = function () {
    if (count < 10) {
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter!"
        }]).then(function (userGuess) {
            if (guessLetters.includes(userGuess.letter)){
                console.log("Already guessed! Try again");
                count++;
            } else{
            count++;
            guessLetters.push(userGuess.letter);
            console.log(guessLetters);
          
            if (letterSplit.includes(userGuess.letter)) {
                remaining--;
                console.log("Correct!");
                console.log("You have " + remaining + " turns left!");
            } else {
                remaining--;
                console.log("Incorrect!");
                console.log("You have " + remaining + " turns left!");
            }
        }
            game();
        });
    } else {
        console.log("Game Over!");
    }
};

game();