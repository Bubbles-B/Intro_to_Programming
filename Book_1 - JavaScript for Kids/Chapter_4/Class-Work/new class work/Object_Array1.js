//Array of cars:
// Define the CAR Objects
var toyota = {
    make: "Toyota",
    year: 2022,
    colors: ['Pink', 'Blue', 'White'],
    luckyNumbers: [2, 4, 8, 16]
};

var tesla = {
    make: "Tesla",
    year: 2026,
    colors: ['Brown', 'Silver', 'White'],
    luckyNumbers: [3, 9, 40]
};

var jeep = {
    make: "Jeep",
    year: 2026,
    colors: ['Yellow', 'Black', 'White'],
    luckyNumbers: [1, 2, 3]
};

var ford = {
    make: "Ford",
    year: 2022,
    colors: ['Red', 'Blue', 'White'],
    luckyNumbers: [30, 10, 3]
};

//Create an Array of cars:
//The cars array now holds four elements, each of which is an object representing a car.
var cars = [toyota, tesla, jeep, ford];

// Accessing Objects in the Array:
console.log("Car-Object:", cars[1]); 

//Accessing Properties within an Object:
console.log("The car year:", cars[2].year); 

// Accessing Nested Arrays within Objects:
console.log("I am driving a", cars[0].make, "that has the color", cars[0].colors[1]); 