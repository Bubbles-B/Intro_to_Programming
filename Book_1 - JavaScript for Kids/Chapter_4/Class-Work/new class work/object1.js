// Define an object named 'car' with properties describing its attributes
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
    isElectric: false,
    car_color: 'Blue'
}

// Access and log property values using dot notation and bracket notation
console.log('Car color:',car.car_color);
console.log('Make of car:',car['make']);

// Extract and log all keys (property names) and all values from the object
console.log('Only key:', Object.keys(car));
console.log('Only values:', Object.values(car));

// Add new properties to the object using both dot and bracket notation
car.style = 'SUV'
car['mileage'] = 15400
console.log('Full Car objec:', car)

// Update an existing property value and log the updated object
car.car_color = 'White'
console.log('new car color:', car.car_color);
console.log('Full Car objec:', car);
