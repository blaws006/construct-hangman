var letters = require("./letter");
var inquirer = require("inquirer");
//Global variables
guessedLetter = [];
wrongGuesses = [];
numGuesses = 10;
var count = 0;
//Restarts the game 
function start(){
    letters.selectWord();
    count = 0;
    game();
};
var game = function () {
    //Checks the turn count
    if (count < 10) { 
        //Checks if the play won, gives option to play again.
        if (letters.lettersInWord.toString() == letters.blanksAndSuccesses) {
            console.log("You Win!")
            inquirer.prompt([{
                type: "list",
                name: "play",
                message: "Play Again?",
                choices: ['Yes', 'No'],
            }]).then(function (playAgain) {
                if (playAgain.play == 'Yes') {
                    start();
                }else{console.log("Game Over!")
            }
            })
        } else {
            inquirer.prompt([{
                name: "letter",
                message: "Guess a letter!"
            }]).then(function (userGuess) {
                var isLetterInWord = false;
                guessedLetter.push(userGuess.letter);
                //Compares the guessed letter to the chosen word array
                for (var i = 0; i < letters.numBlanks; i++) {
                    if (letters.chosen[i] == userGuess.letter) {
                        isLetterInWord = true;
                        console.log("Letter found");
                    }
                }
                //Replaces underscores the correctly guessed letter with 
                if (isLetterInWord) {
                    for (var i = 0; i < letters.numBlanks; i++) {
                        if (letters.chosen[i] == userGuess.letter) {
                            letters.blanksAndSuccesses[i] = userGuess.letter;
                        }
                    }
                } else {
                    console.log("Wrong!")
                    wrongGuesses.push(userGuess.letter);
                    numGuesses--;
                }
                //Prints value of words after each round
                console.log(letters.blanksAndSuccesses.join(" "));
                count++;
                game();
            });
        }
    } else { //Ran out of turns. Gives option to play again.
        console.log("You're out of turns!\n Game over...");
        inquirer.prompt([{
            type: "list",
            name: "play",
            message: "Play Again?",
            choices: ['Yes', 'No'],
        }]).then(function (playAgain) {
            if (playAgain.play == 'Yes') {
                start();
            }else{console.log("Game Over!")
        }
        })
    }
};
game();

