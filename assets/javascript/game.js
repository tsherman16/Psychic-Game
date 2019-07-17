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
var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    console.log(computerGuess);
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft--;
        console.log("Wins: " + wins);
        console.log("Guesses-Left: " + guessesLeft);
        document.getElementById("win-text").innerHTML = "Wins: " + wins;
        document.getElementById("loss-text").innerHTML = "Losses: " + losses;
        document.getElementById("guessleft-text").innerHTML =
            "Guesses Left: " + guessesLeft;
    } else if (userGuess !== computerGuess) {
        losses++;
        guessesLeft--;
        console.log("Wins: " + wins);
        console.log("Guesses-Left: " + guessesLeft);
        document.getElementById("win-text").innerHTML = "Wins: " + wins;
        document.getElementById("loss-text").innerHTML = "Losses: " + losses;
        document.getElementById("guessleft-text").innerHTML =
            "Guesses Left: " + guessesLeft;
    }
};