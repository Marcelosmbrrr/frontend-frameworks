// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// Every object in JavaScript has a built-in property, which is called its prototype
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain
// The chain ends when we reach a prototype that has null for its own prototype

const example = 'My name is Mario';
console.log(example.length);

// So when we access .length, the browser looks for .length in example
// Can't find it there, so looks in the prototype object that, being an string, is the String prototype
// We can use the function .getPrototypeOf() to get the correspondent prototype 

// Shadowing properties
// Rewriting property resource
const myDate = new Date(1995, 11, 17);
console.log(myDate.getYear()); // 95
myDate.getYear = function () {
    console.log("something else!");
};
myDate.getYear();

// Setting a prototype
// The Object.create() method creates a new object prototype
const personPrototype = {
    greet() {
        console.log("hello!");
    },
};
const carl = Object.create(personPrototype);
carl.greet();

// Prototypes and inheritance
// If Professor and Student objects can have Person prototypes, then they can inherit the common properties




