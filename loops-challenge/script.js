function sum(n) {
  let sumNumber = 0;
  for (let i = 0; i <= n; i++) {
    sumNumber += i;
  }
  console.log(sumNumber);
}

sum(10);

function sumTo(n) {
  console.log((n * (n + 1)) / 2);
}

sumTo(4);

const pets = ["pixie", "claude", "sebastian", "bug"];

let firstItem = pets.shift();
pets.push(firstItem);

console.log(pets); // -> 1. ['claude', 'sebastian', 'bug', 'pixie']

pets.reverse();

console.log(pets); // -> 2. ['pixie', 'bug', 'sebastian', 'claude']

pets.pop();

firstItem = pets.shift();
pets.push(firstItem);

console.log(pets); // -> 3. ['bug', 'sebastian', 'pixie']

for (i = 0; i <= pets.length - 1; i++) {
  let restOfWord = pets[i].slice(1);
  let firstLetter = pets[i].charAt(0).toUpperCase();
  pets[i] = firstLetter + restOfWord;
}

console.log(pets); // -> 4. ['Bug', 'Sebastian', 'Pixie]

for (i = 0; i <= pets.length - 1; i++) {
  if (pets[i].length > 3) {
    pets[i] = pets[i].substring(0, 3);
  }
}

console.log(pets); // -> 5. ['Bug', 'Seb', 'Pix']

// let numbersTotal = 0;

// while (numbersTotal < 10) {
//   console.log(Math.floor(Math.random() * 16));
//   numbersTotal++;
// }

// function generateNumbers(n, r) {
//   let numArr [];
//   let isUnique;
//   if (n <= 0 || r <= 0) {
//     return;
//   }
//   let i = 0;
//   while (i < n) {
//     randNumber = Math.floor(Math.random() * (r + 1));
//     for (i=0;i<=numArr.length-1;i++) {

//     }
//     i++;
//   }
// }

// generateNumbers(0, 0);
