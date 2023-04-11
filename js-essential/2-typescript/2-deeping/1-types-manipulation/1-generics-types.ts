// A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable

// Here, we will use a type variable, a special kind of variable that works on types rather than values
// We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides
// We say that this version of the identity function is generic, as it works over a range of types instead of use any
function identity<Type>(arg: Type): Type {
    return arg;
}

let output = identity<string>("myString");
let output = identity("myString");
