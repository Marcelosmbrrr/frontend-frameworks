// You can declare a class using the class keyword
// The attribute declaration is optional: you could omit it and in the constructor will create the name property before initializing it
// The constructor is defined using the constructor keyword
class Person {

    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

// Inheritance
// Let's define the Professor subclass
class Professor extends Person {

    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }

}

const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();

// Encapsulation
// To turn a resource into a private on just use #
class Student extends Person {

    // Private 
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }


    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }

    // Private
    #myPassword(){
        return 'This is private';
    }

}


