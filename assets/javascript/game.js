var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
    }
    if (userGuess !== computerGuess) {
        losses++
    }
    for (var i = 9; i === 0; i--) {
        if (userGuess === computerGuess) {
            guessesLeft = 9;
        } else if (userGuess !== computerGuess) {
            return i;
        } guessLeft = i;
    }
    };


    document.getElementById("win-text").innerHTML = "Wins: " + wins;
    document.getElementById("loss-text").innerHTML = "Losses: " + losses;
    document.getElementById("guessleft-text").innerHTML = "Guesses Left: " + guessesLeft;
