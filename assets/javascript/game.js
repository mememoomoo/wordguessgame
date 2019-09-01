var words=["aker", "andjety", "anubis", "aqen", "hapi", "imset", "kherty", "nephthys" , "cihuateteospirits", "coatlicue", "itztlacoliuhqui", "mictecacihuatl", "mictlantecuhtli", "tlaloc", "xolotl"];
var random = "";
var letters= []
var blanks = 0;
var blanksCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 5;

function Game() {
    random = words[Math.floor(Math.random() * words.length)];
    letters = random.split("");
    blanks = letters.length;
    for (var i = 0; i < blanks; i++) {
        blanksCorrect.push("_");
    }
    document.getElementById("secretword").innerHTML = "  " + blanksCorrect.join("  ");
    console.log(random);
    console.log(letters)
    console.log(blanks)
    console.log(blanksCorrect)
}

function reset() {
    guessesRemaining = 5;
    wrongGuess = [];
    blanksCorrect = [];
    Game()
}

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (random[i] == letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (random[i] == letter) {
                blanksCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (letters.toString() == blanksCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("wins").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losses").innerHTML = " " + losses;
    }
 
    document.getElementById("secretword").innerHTML = "  " + blanksCorrect.join(" ");
    document.getElementById("guesses").innerHTML = " " + guessesRemaining;
}

Game()

document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);
    document.getElementById("lettersguessed").innerHTML = "  " + wrongGuess.join(" ");
}