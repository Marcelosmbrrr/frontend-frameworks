// We can use an indexed access type to look up a specific property on another type
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"]; // type Age = number

type I1 = Person["age" | "name"]; // type I1 = string | number