

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guesses = [];





document.onkeyup = function(event) { //when user releases key

    var userGuess = event.key; //what the user is doing

    guesses.push(userGuess); //push the user choices into guesses array

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]; //code for random computer guess

    if(userGuess === computerChoice){ //if user guess the computer guess then they win, guesses start back at 0 or an empty array and Guesses left resets to 9
      wins++;
      guessesLeft = 9;
      guesses.length = 0; //this didn't work before because I was using "var" in the function. Don't do that because you already declared it up there. REMEMBER THIS!

    }

    else if(guessesLeft === 0){ //if guesses left = 0 then losses goes up and game start over
      losses++;
      guessesLeft = 9;
      guesses.length = 0;
    }

    else if (userGuess !== computerChoice ){ // if userGuess does not = to the computer choice
      guessesLeft--; //guesses left goes down by 1 each time
    }

console.log(computerChoice) //just so I can see what the computer picked


    var html = //this is the text that will go on the screen
      "<p>You chose: " + userGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>losses: " + losses + "</p>" +
      "<p>Guesses left: " + guessesLeft + "</p>" +
      "<p>You Guesses so far: " + guesses + "</p>";

  document.getElementById("game").innerHTML = html; //had to grab the div from my html page to push my game into it, "game" is the name i assigned it


  };
