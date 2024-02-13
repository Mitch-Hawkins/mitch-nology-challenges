let myName: string = "Mitch";
console.log("Hello " + myName);

function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
};

let result = add(1, 2);

const names: string[] = ["John", "Kate"];
const numbers: number[] = [1, 2, 3];

names.push("Mitch");

const combineNumbersArr = (arr1: number[], arr2: number[]): number[] => {
  return [...arr1, ...arr2];
};

const combineArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2];
};

const strArr = combineArrays(["Hi", "hello"], ["nology"]);
const numArr = combineArrays([1, 2], [3, 4]);
