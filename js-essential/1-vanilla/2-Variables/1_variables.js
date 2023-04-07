// ==== VAR, LET AND CONST ====

// There are three types of variables: var, let and const
var letter_a = 'a';
let letter_b = 'a';
const letter_c = 'a';

// Back when JavaScript was first created, this was the only way to declare variables
var language = 'Javascript';

// The design of var is confusing and error-prone. So let was created in modern versions of JavaScript
let language = 'Javascript';

// When you use var, you can declare the same variable as many times as you like, but with let you can't
var example = 'Chris';
var example = 'Bob';

// This is possible with let - rewrite the value without redeclare the variable
// There's no reason to redeclare variables
let myName = 'Chris';
myName = 'Bob';

// As well as variables, you can declare constants
// You must initialize them when you declare them
// You can't assign them a new value after you've initialized them
const constant = 'a';
constant = 'This is not possible';
// You can update, add, or remove properties of an object declared using const, because even though the content of the object has changed, the constant is still pointing to the same object
const bird = { species : 'Kestrel'};
bird.species = 'This is possible';

// When to use const and when to use let?
// If you can initialize a variable when you declare it, and don't need to reassign it later, make it a constant.

















