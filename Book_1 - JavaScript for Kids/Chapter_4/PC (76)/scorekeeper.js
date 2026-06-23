// #1: Scorekeeper

// Create an object to keep track of scores for each player.
// Each key is a player's name, and the value is their current score.
var scores = {
    Alice: 0,
    Bob: 0,
    Charlie: 0
};

// Increase Alice's score by 10 using dot notation
scores.Alice += 10;

// Increase Bob's score by 5 using bracket notation
scores["Bob"] += 5;

// Increase Charlie's score by 7
scores.Charlie += 7;

// Print the updated scores to the console
console.log("Scores after updating:");
console.log(scores);

// #2: Digging into Objects and Arrays
// Create a complex object that contains a mix of strings, arrays, and nested objects
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

// Access the number 123 from inside the nested structure
// Step-by-step:
// 1. Access the "some array" property (which is an array)
// 2. Access index 2 of that array (which is an object)
// 3. Access the "number" property of that object
var value = myCrazyObject["some array"][2].number;

// Print the extracted number to the console
console.log("The number inside the myCrazyObject:", value);
