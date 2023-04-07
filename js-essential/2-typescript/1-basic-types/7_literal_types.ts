// In addition to the general types string and number, we can refer to specific strings and numbers in type positions

// This can be only "hello"
let example1: "hello" = "hello";
// This can be only "hello" and "eai"
let example2: "hello" | "eai" = "eai";
