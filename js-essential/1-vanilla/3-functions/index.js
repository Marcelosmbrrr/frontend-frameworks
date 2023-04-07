// ==== COMMON NAMED FUNCTION ==== //

// Variables defined inside a function cannot be accessed from anywhere outside the function
// However, a function can access all variables and functions defined inside the scope in which it is defined

function namedFunction() {
    console.log('common named function');
}
namedFunction();

// ==== ANONYMOUS FUNCTION ==== //

// Anonymous function declaration allows function names to appear hidden in the declaration itself
const anonymousFunction = function () {
    console.log("anonymous function");
};
anonymousFunction();

// ==== IMEDIATELY INVOKED FUNCTION EXPRESSION ==== //

// If you want to execute a function immediately after the declaration, use IIFE
// The trailing parentheses ( ) are used to invoke the function
(function () {
    console.log("IIFE function");
})();
// IIFE can be created with unary operators
//This will return -2
-function () {
    return 2;
}();

// ==== Constructor Functions ==== //

// It can be used to create multiple objects that are similar
function Person(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

const person = new Person("Pedro");
console.log(person.getName());

// ==== ARROW FUNCTION ==== //

// It is generally a cleaner way of creating JavaScript functions and it is similar to the function expression

const arrowFunction = () => {
    console.log('arrow function');
}

arrowFunction();

// ==== CALLBACK ==== //

// Callback is a function passed to another function being called after 
function example(callback, message) {
    console.log(message);
    callback();
}

example(function () {
    console.log("This is the callback message");
}, "This is the message");

// ==== CLOSURE ==== //

// A closure is the combination of a function bundled together (enclosed)
// A closure uses the power of a nested function to access the outer space

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5); // add5 receives function(y){ 5 + y }
const add10 = makeAdder(10); // add10 receives function(y){ 10 + y }

console.log(add5(2)); // function(2){ 5 + 2 }
console.log(add10(2)); // function(2){ 10 + 2 }

// ==== RECURSIVE FUNCTIONS ==== //

// A function can refer to and call itself.
function count(number){
    if(number <= 10){
        console.log(number);
        number++;
        count(number);
    }
}

count(1);

// ==== GENERATOR FUNCTION ==== //

function* generator(){
    yield "Valor1";
    yield "Valor2";
    yield "Valor3";
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);




