// Conditional types help describe the relation between the types of inputs and outputs
interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
  
type Example1 = Dog extends Animal ? number : string;
