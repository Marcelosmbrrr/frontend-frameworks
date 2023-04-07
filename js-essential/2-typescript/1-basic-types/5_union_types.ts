// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators
// A union type is a type formed from two or more other types, representing values that may be any one of those types
let identifier: string | number = 10;
identifier = "10";

let items: string[] | string = ["item-1", "item-2"];
items = "single-item";