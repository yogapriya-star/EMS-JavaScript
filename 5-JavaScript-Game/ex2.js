var prompt = require("prompt-sync")()
function guess(guessNumber)
{
    var randomNumber = Math.floor(Math.random()*10)+1;
    if(randomNumber == guessNumber)
    {
        console.log("Your guess is right");
    } else {
        console.log("Your guess is wrong, Generated random number is: "+randomNumber);
    }
}

var guessNumber = prompt();
guess(guessNumber);