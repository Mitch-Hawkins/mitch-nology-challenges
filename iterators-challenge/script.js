const arrowFunction = () => {};

// Iterators
const pets = ["pixie", "claude", "sebastian"];

//map method = applies logic to every index of an array
// input and output arrays have the same length

//filter = output array is smaller than input
//filter checks if true or not

//func parameter is essentially an algorithm/equation/validator

///[...arr] what does this copy to?

let input = ["125.12", "2626.261", "2512.2"];

output = input
  .map(parseFloat)
  .map((n) => n.toFixed(2))
  .map(parseFloat);

console.log(output);

//Find -> T (true or type??)

//FindIndex - > number

//Every -> true

//Some -> boolean

//Reduce -> Trying to turn an array int a single value
