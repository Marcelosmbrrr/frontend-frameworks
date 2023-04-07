// There is a primitive in JavaScript used to create a globally unique reference via the function Symbol()

const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // Can't ever happen
}