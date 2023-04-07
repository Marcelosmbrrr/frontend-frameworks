// ==== Numbers, Strings, Booleans, Arrays, Objects ==== //

// You can store numbers in variables
const number = 30;

// Strings are pieces of text
const string = "My name is Mario";

// Booleans are true/false values
const boolean = false;

// An array is a single object 
// Arrays are generally described as "list-like objects" - basically single objects that contain multiple values stored in a list
const array = [10, 20, "A", false];
array[1] = 'This is possible because array is an JS object';
console.log(array[1]);

// In programming, an object is a structure of code that models a real-life object
const dog = { name : 'Spot', breed : 'Dalmatian' };
console.log(dog.name);