// ==== BASIC ERROR OBJECT AND TRY CATCH ==== //

// JavaScript supports a compact set of statements, specifically control flow statements
// You can throw exceptions using the throw statement and handle them using the try...catch statements.

try {
    let number = 10;

    if (number === 10) {
        throw new Error("I dont like the number 10.");
    }
} catch (e) {
    console.log(e);
}

// ==== OTHER ERROR OBJECTS ==== //

// Besides the generic Error constructor, there are other core error constructors in JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types

try {
    let number = 10;

    if (typeof number != "string") {
        throw new TypeError("Its not a string.");
    }
} catch (e) {
    console.log(e);
}

// ==== ERROR OBJECT PROPERTIES ==== //

// There are properties thar are defined on Error.prototype and shared by all Error instances
// There are properties are own properties of each Error instance, like:

try {
    let number = 10;

    if (typeof number != "string") {
        throw new Error("This is the message", { cause: "This is the cause" });
    }
} catch (e) {
    console.log(e.message);
    console.log(e.cause);
}

// ==== BEST PRACTICES ==== //

// Generic error throwing
try {
    const resource_exists = false;
    if (!resource_exists) {
        throw new Error("Whoops!", { cause: { code: 404, value: "searched value" } });
    }
} catch (e) {
    console.error(`${e.name}: ${e.message} - Code: ${e.cause.code}`);
}

// Specified error throwing
try {
    throw new TypeError("Is not a string.");
} catch (e) {

    if (e instanceof EvalError) {
        console.error(`${e.name}: ${e.message}`);
    } else if (e instanceof RangeError) {
        console.error(`${e.name}: ${e.message}`);
    } else if (e instanceof TypeError) {
        console.error(`${e.name}: ${e.message}`);
    } else {
        // If none of our cases matched...
        console.log("Ops! An error ocurred.")
    }
}

