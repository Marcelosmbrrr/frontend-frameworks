// The keyof operator takes an object type and produces a string or numeric literal union of its keys
type Staff = {
    name: string;
    salary: number;
}
type staffKeys = keyof Staff; // "name" | "salary"