var people = ["Teddy","Cathy","Bobby", "Fuzzy", "Jose", "Sedii"];
console.log(people);

var otherpeople = ["Ted","Cat","Bob", "Fuz", "Jo", "Sed"];
console.log(otherpeople);

people = people.concat(otherpeople); 
console.log(people);

people = people.indexOf("Jose");
console.log(people);

document.getElementById("peopleIKnow").innerHTML =  people.toString();



