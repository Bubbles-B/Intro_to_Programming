// #1: New Insults
// #2: More Sophisticated Insults
var bodyParts = ["nose", "face", "ear", "foot", "belly"];
var adjectives2 = ["hairier", "uglier", "greasier", "smellier", "lumpier"];
var animals = ["goat", "pig", "octopus", "llama", "baboon"];
var animalParts = ["butt", "snout", "armpit", "tail", "toe"];

var part = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var adj = adjectives2[Math.floor(Math.random() * adjectives2.length)];
var animal = animals[Math.floor(Math.random() * animals.length)];
var animalPart = animalParts[Math.floor(Math.random() * animalParts.length)];


// #3: Use + or join?
// Using +
var insult = "Your " + part + " is more " + adj + " than a " + animal + "'s " + animalPart + ".";
console.log(insult);

// Using join
var insultJoin = ["You", part, " is more ", adj, " than a ", animal,"'s ", animalPart + "!"].join(" ");
console.log(insultJoin);

// #4: Joining Numbers
var numbers = [3, 2, 1];
var sentence = numbers.join(" is bigger than ");
console.log(sentence);
