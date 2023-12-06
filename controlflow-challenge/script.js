// let n = 6;

// if (n % 2 > 0) {
//   console.log("n is odd");
// } else if (n % 2 == 0) {
//   console.log("n is even");
// }

// MVP:
// Check for the smallest value
// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

// const x = 0;
// const y = 10;

// if (x > y) {
//   console.log(x + " is greater than " + y);
// } else if (x < y) {
//   console.log(x + " is less than " + y);
// } else {
//   console.log(x + " is equal to " + y);
// }

// MVP:
// Console log the user's input depending on the data type
// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"

// const userInput = true;

// if (typeof userInput == "number") {
//   //needs && !isNaN(userInput)
//   console.log(userInput ** 2);
// } else if (typeof userInput == "string") {
//   console.log(userInput);
// } else {
//   console.log("Invalid Input");
// }

// MVP:
// Create a switch block that will log a string for each day of the week.
// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range

let day = 0;

switch (day) {
  case 0:
    console.log("Today is Monday");
    break;
  case 1:
    console.log("Today is Tuesday");
    break;
  case 2:
    console.log("Today is Wednesday");
    break;
  case 3:
    console.log("Today is Thursday");
    break;
  case 4:
    console.log("Today is Friday");
    break;
  case 5:
    console.log("Today is Saturday");
    break;
  case 6:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Input not accepted");
}

// MVP:
// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference
// Bonus:
// Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

let parent1 = "Brown";
let parent2 = "Blue";

switch (parent1) {
  case "Brown":
  case "brown":
    switch (parent2) {
      case "Brown":
      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 75%, green is 18.75% and blue is 6.25%`
        );
        break;
      case "Blue":
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 0% and blue is 50%`
        );
        break;
      case "Green":
      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 37.5% and blue is 12.5%`
        );
        break;
      default:
        console.log("Invalid Eye-colour input for Second Parent");
    }
    break;
  case "Blue":
  case "blue":
    switch (parent2) {
      case "Brown":
      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 0% and blue is 50%`
        );
        break;
      case "Blue":
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 1% and blue is 99%`
        );
        break;
      case "Green":
      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 50% and blue is 50%`
        );
        break;
      default:
        console.log("Invalid Eye-colour input for Second Parent");
    }
    break;
  case "Green":
  case "green":
    switch (parent2) {
      case "Brown":
      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 37.5% and blue is 12.5%`
        );
        break;
      case "Blue":
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 50% and blue is 50%`
        );
        break;
      case "Green":
      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is <1%, green is 75% and blue is 25%`
        );
        break;
      default:
        console.log("Invalid Eye-colour input for Second Parent");
    }
    break;
  default:
    console.log("Invalid Eye-colour input for First Parent");
}

let childsEyeColour = "Brown";

switch (childsEyeColour) {
  case "Brown":
  case "brown":
    console.log("Brown is my favourite eye colour");
    break;
  case "Blue":
  case "blue":
    console.log(
      "Blue is not my favourite eye colour, but neither is it my least favourite"
    );
    break;
  case "Green":
  case "green":
    console.log("Green is my least favourite eye color (Sorry)");
    break;
}
