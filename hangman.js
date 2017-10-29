var letters = require("./letter");
var inquirer = require("inquirer");

guessedLetter = [];
wrongGuesses = [];
numGuesses = 10;
var count = 0;
var game = function () {
    if (count < 10) {
        inquirer.prompt([{
            name: "letter",
            message: "Guess a letter!"
        }]).then(function (userGuess) {
            var isLetterInWord = false;
            guessedLetter.push(userGuess.letter);
            console.log(guessedLetter);
            for (var i = 0; i < letters.numBlanks; i++) {
                if (letters.chosen[i] == userGuess.letter) {
                    isLetterInWord = true;
                    console.log("Letter found");
                }
            }
            if (isLetterInWord) {
                for (var i = 0; i < letters.numBlanks; i++) {
                    if (letters.chosen[i] == userGuess.letter) {
                        letters.blanksAndSuccesses[i] = userGuess.letter;
                    }
                }
            } else {
                wrongGuesses.push(userGuess.letter);
                numGuesses--; 
            }
            console.log(letters.blanksAndSuccesses);
            count++;
            game();
        });
    } else {
        console.log("Game Over!");
    }
};

game();