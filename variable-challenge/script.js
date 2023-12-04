typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: undefined
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: hamburgers
"hamburgers" - "s"; // Prediction: hamburger
"1" + "3"; // Prediction: 13
"1" - "3"; // Prediction: 1
"johnny" + 5; // Prediction: johnny5
"johnny" - 5; // Prediction: johnny
99 * "luftbaloons"; // Prediction: 99luftballons

const firstName = "Mitch";
const lastName = "Hawkins";
const age = 25;

console.log(
  "Hi, my name is " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old"
);
