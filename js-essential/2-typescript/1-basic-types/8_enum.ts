// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript
// Enums allow a developer to define a set of named constants (unchangeable variables)
// Enums come in two flavors string and numeric

// ==== NUMERIC ENUMS ==== //

// By default, enums will initialize the first value to 0 and add 1 to each additional value
enum Direction {
    Up = 1,
    Down, // this will be 2
    Left, // this will be 3
    Right, // this will be 4
}
console.log(Direction.Up);

// Numeric Enums - Fully Initialized
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

// ==== STRING ENUMS ==== //

// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
console.log(CardinalDirections.North);