console.log(typeof 15); // Prediction: number !
console.log(typeof 5.5); // Prediction: number !
console.log(typeof NaN); // Prediction: undefined * (number)
console.log(typeof "hello"); // Prediction: string !
console.log(typeof true); // Prediction: boolean !
console.log(typeof (1 != 2)); // Prediction: boolean !
console.log("hamburger" + "s"); // Prediction: hamburgers !
console.log("hamburgers" - "s"); // Prediction: hamburger * (NaN)
console.log("1" + "3"); // Prediction: 13 !
console.log("1" - "3"); // Prediction: 1 * (-2)
console.log("johnny" + 5); // Prediction: johnny5 !
console.log("johnny" - 5); // Prediction: johnny * (NaN)
console.log(99 * "luftbaloons"); // Prediction: 99luftballons * (NaN)

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

2 == "2"; //true
2 === 2; //true
2 === "2"; //false
"2" + 3 == 23; //false
"2" + 3 === 5; //true
10 % 3; //1
10 % 3 === 1; //1
(100 % 7) % 5; //NaN
(100 % 7) % 5 !== 0; //true
(100 % 7) % 9 == 2; //false
!(10 % 2); //true
!!!!((10 % 7) % 3); //NaN
10 % 3 === -1 % 2; //false
(892783 != "89278" + 3) == 0; //true
true && false; //false
false || true; //true
true || false; //true
true || false; //true
true || false + true; //true
true * false && false + true; //false
10 && 123 && -1 && 3; //-1
10 && 123 && 0 && 3; //0
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //10
3 && "Calum" && ("" || 26); //26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //null
