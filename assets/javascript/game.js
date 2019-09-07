var words = [
    "aker",
    "andjety",
    "anubis",
    "aqen",
    "hapi",
    "imset",
    "kherty",
    "nephthys",
    "cihuateteospirits",
    "coatlicue",
    "itztlacoliuhqui",
    "mictecacihuatl",
    "mictlantecuhtli",
    "tlaloc",
    "xolotl"];
var random = "";
var letters = []
var blanks = 0;
var blanksCorrect = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 5;

// Random word //
function RandomWord() {
    //Select a random word
    random = words[Math.floor(Math.random() * words.length)];
    //Split the word into a sub array (Broken?)
    letters = random.split(" ");
    //Select the Number of underscores (Broken?)
    blanks = random.length;
    //For loop to push underscores (Broken?)
    for (var i = 0; i < blanks; i++) {
        blanksCorrect.push("-");
    };

    document.getElementById("secretword").innerHTML = " " + blanksCorrect.join(" ");

};

// Reset back to normal //
function ResetWord() {
    blanksCorrect = [];
    guessesRemaining = 5;
    wrongGuess = [];

    RandomWord();
    
};

// Check if the letter is correct //

function LetterCheck(letters) {
    var letterInWord = false;
 
    for (var i = 0; i < blanks; i++) {
        if (random[i] == letters) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        //Broken?
        for (var i = 0; i < blanks; i++) {
            if (random[i] == letters) {
                blanksCorrect[i] = letters;
            }
        }
    }else {
        wrongGuess.push(letters);
        guessesRemaining--;
    }

};

// Add wins/losses //

function WinsLosses() {

    if (blanksCorrect.indexOf("-") == -1) {
        wins++;
        ResetWord()
        document.getElementById("wins").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        ResetWord()
        document.getElementById("losses").innerHTML = " " + losses;
    }

    document.getElementById("secretword").innerHTML = "  " + blanksCorrect.join(" ");
    document.getElementById("guesses").innerHTML = " " + guessesRemaining;

};

// On Key Up Checks //

document.onkeyup = function (listener) {
    var guesses = String.fromCharCode(listener.keyCode).toLowerCase();
    
    LetterCheck(guesses);
    WinsLosses();

    console.log(guesses);

    document.getElementById("lettersguessed").innerHTML = "  " + wrongGuess.join(" ");
}

RandomWord();