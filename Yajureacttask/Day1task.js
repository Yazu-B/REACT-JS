//Task1:
// Create variables and template literals
let firstName = "Yazu";
let lastName = "Shrestha";
// Combine into a greeting message using template literals
let message = `Hello, ${firstName} ${lastName}! Welcome!`;
// Log the message
console.log(message);


//Task2:
// Example with let and const scope
{
    let x = 10;
    console.log("Inside block (let):", x); //works
}
//console.log("Outside block (let):", x); //error
//  ReferenceError: x is not defined
// Example with const
{
    const y = 20;
    console.log("Inside block (const):", y); //works
}
//console.log("Outside block (const):", y);//error
//  ReferenceError: y is not defined


//Task3:
// Arrow function simple
const greet = (name) => `Hello, ${name}!`;
// Test it
console.log(greet("Yazu"));


//Task4:
//arrow function with multiple parameters
const multiply = (a, b) => a * b;
// Test it
console.log(multiply(5, 6));


//Task5:
//object destructing
// Create the object
const person = {
    name: "Yazu",
    age: 20,
    country: "NEPAL"
};
// Destructure the object
const { name, country } = person;
// Log them
console.log(name);     // Yazu
console.log(country);  // NEPAL


//Task6:
//array destructing
// Create the array
const numbers = [10, 20, 30, 40];
// Destructure the first two elements
const [first, second] = numbers;
// Log them
console.log(first);  // 10
console.log(second); // 20


//Task7:
//default parameter
// Function with default parameter
function sayHello(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
// Call with an argument
sayHello("Yazu");   // Output: Hello, Yazu!
// Call without an argument
sayHello();          // Output: Hello, Guest!


//Task8:
//rest operator(sum of numbers)
// Function using rest operator
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// Test it
console.log(sumAll(1, 2, 3, 4)); // Output: 10


//task9:
//spread operator with arrays
// Create the arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
// Merge them using the spread operator
const merged = [...arr1, ...arr2];
// Log the result
console.log(merged);  // [1, 2, 3, 4, 5]


//task10:
//merge and destructure objects
// Create the objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
// Merge them using spread operator
const mergedObj = { ...obj1, ...obj2 };
// Destructure to extract a and d
const { a, d } = mergedObj;
// Log the values
console.log(a); // 1
console.log(d); // 4
