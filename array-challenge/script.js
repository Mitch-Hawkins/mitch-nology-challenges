let hobbies = ["Music", "Software", "Futsal"];

console.log(hobbies[0]);

const firstHobby = hobbies.shift();
const arrayLength = hobbies.length;

hobbies.push("Board Games");

console.log(hobbies[hobbies.length - 1]);

console.log(
  "My hobbies are: " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2]
);

let groceries = ["apple", "banana", "pear", "papaya", "mango"];
let groceryList = "";

console.log(groceries.join("|"));
