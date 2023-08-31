function playGuessingGame(numToGuess, totalGuesses = 10) {
    let remainingGuesses = totalGuesses;

    for (let i = 0; i < totalGuesses; i++) {
        let X = prompt(`Enter a number between 1 and 100. You have ${remainingGuesses} guesses left.`);

        if (X === null) {
            console.log("User cancelled the game.");
            break;
        }

        if (isNaN(X)) {
            console.log("Please enter a number.");
        } else {
            X = Number(X);

            if (X < numToGuess) {
                console.log(`${X} is too small. Guess a larger number.`);
            } else if (X > numToGuess) {
                console.log(`${X} is too large. Guess a smaller number.`);
            } else {
                console.log(`Congratulations! You guessed the number ${numToGuess}.`);
                return i + 1;
            }
        }

        remainingGuesses--;
    }

    console.log(`Sorry, you couldn't guess the number ${numToGuess} within ${totalGuesses} guesses.`);
    return 0;
}

// Test cases
let numToGuess1 = 5;
let totalGuesses1 = 10;
let result1 = playGuessingGame(numToGuess1, totalGuesses1);
console.log(`Number of guesses: ${result1}`);

let numToGuess2 = 7;
let totalGuesses2 = 3;
let result2 = playGuessingGame(numToGuess2, totalGuesses2);
console.log(`Number of guesses: ${result2}`);