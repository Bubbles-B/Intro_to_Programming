/*------with 1 prompt-------*/
// // Random secret number between 1 and 20
// var secret = Math.floor(Math.random() * 20) + 1;

//  // Initialize guess with null so the while loop runs at least once
// var guess = null;

// while (guess !== secret) {
//     guess = parseInt(prompt("Please guess the secret number (1-20)"));

//     if (guess === secret) {
//         alert("Correct Guess!");
//     } else if (guess < secret) {
//         alert("Incorrect, too low");
//     } else if (guess > secret) {
//         alert("Incorrect, too high");
//     } else {
//         alert("Invalid input. Please enter a number.");
//     }
// }

/*------with 2 prompts-------*/
// // Generate a random secret number between 1 and 20
// let secret = Math.floor(Math.random() * 20) + 1;

// // First prompt: ask the user to guess the number
// let guess = parseInt(prompt("Please guess the secret number (1-20)"));

// // Keep looping until the user guesses the correct number
// while (guess !== secret) {
//     // Check if the guess is too low
//     if (guess < secret) {
//         alert("Incorrect, too low");
//     }
//     // Check if the guess is too high
//     else if (guess > secret) {
//         alert("Incorrect, too high");
//     }

//     // Ask the user to guess again (second prompt)
//     guess = parseInt(prompt("Please guess the secret number (1-20)"));
// }

// // This runs once the correct number is guessed
// alert("Correct Guess! You guessed the secret number.");



/*------with a function-------*/

function getGuess() {
    return parseInt(prompt("Please  guess the secret number(1-20)"));
}

let secret = Math.floor(Math.random() * 21);
let guess = getGuess();

while (guess != secret) {
    if (guess < secret) {
        alert("Incorrect,too low")

    } else if (guess > secret) {
        alert("Incorrect,too high")

    }

    guess = getGuess();
}

alert("Correct Guess! " + guess)