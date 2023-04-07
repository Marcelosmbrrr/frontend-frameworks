// Apart from primitives, the most common sort of type you’ll encounter is an object type
function printPerson(person: { name: string; age: number, optional?: boolean }) {
    console.log("Name is " + person.name);
    console.log("Age is " + person.age);
}

printPerson({ name: 'Mario', age: 20 });
printPerson({ name: 'Mario2', age: 20, optional: true });

// It’s common to want to use the same type more than once and refer to it by a single name
// For this we can use types aliases
type Point = {
    x: number;
    y: number;
};

const point: Point = {
    x: 10,
    y: 5
}

// An interface declaration is another way to name an object type
// We can use inheritance too

interface Person {
    name: string,
    age: number
}

interface Man extends Person {
    has_balls: boolean
}

const person: Man = {
    name: "Mario",
    age: 10,
    has_balls: true
}

console.log(person.name);
console.log(person.has_balls);
