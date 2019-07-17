var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessAttempts = [];
var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function (event) {
    if(guessAttempts.indexOf(event.key) === -1){
       guessAttempts.push(event.key);
      }
    var userGuess = event.key;
    console.log(userGuess);
    console.log(computerGuess);
    
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        guessAttempts = [];
        document.getElementById("win-text").innerHTML = "Wins: " + wins;
        document.getElementById("loss-text").innerHTML = "Losses: " + losses;
        document.getElementById("guessleft-text").innerHTML =
            "Guesses Left: " + guessesLeft;
        document.getElementById("guesses-text").innerHTML = guessAttempts;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        //guessAttempts.push(userGuess);
        document.getElementById("win-text").innerHTML = "Wins: " + wins;
        document.getElementById("loss-text").innerHTML = "Losses: " + losses;
        document.getElementById("guessleft-text").innerHTML =
            "Guesses Left: " + guessesLeft;
        document.getElementById("guesses-text").innerHTML = guessAttempts;
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessAttempts = [];
    }
};