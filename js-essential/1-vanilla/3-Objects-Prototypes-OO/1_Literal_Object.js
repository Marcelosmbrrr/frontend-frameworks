// An object is a collection of related data and/or functionality
// These usually consist of several variables and functions (which are called properties and methods when they are inside objects)
const person = {
    name: ["Bob", "Smith"],
    born_at: 1992,
    attrObj: {},
    attrArr: [],
    setName: (new_value) => {
        this.name = new_value;
    },
    getAge: () => {
        return new Date().getFullYear() - this.born_at;
    }
};

console.log(person.name);
console.log(person.getAge());
person.attrObj["new_attr"] = 50;
console.log(person.attrObj.new_attr);

// What is "this"?
// The this keyword refers to the current object the code is being written inside
const persons = {
    person1: {
        name: 'Chris',
        printName: function () {
            console.log(`His name is ${this.name}`)
        }
    },
    person2: {
        name: 'Mario',
        printName: function () {
            console.log(`His name is ${this.name}`)
        }
    }
};

persons.person1.printName();
persons.person2.printName();

// We can use functions to create constructors for literal Objects
// A constructor is just a function called using the new keyword
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
}

const salva = new Person("Salva");
salva.name;

const frankie = new Person("Frankie");
frankie.name;