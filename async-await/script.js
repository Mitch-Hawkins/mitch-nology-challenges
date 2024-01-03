// Async
// Async is a keyword we can add to function definitions

async function myFunction() {}
const myOtherFunction = async () => {};

// Every async function returns a Promise

async function theAnswer() {
  // return Promise.resolve(42)
  return 42;
}

const theProblem = async () => {
  // return Promise.reject(new Error('oh no))
  throw new Error("oh no");
};

// await
// we can **only** use await within an async function
// await pauses the execution of the code **within the function**
// until the promise we are waiting for resolves or rejects

const slowAdd = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject(new Error("Must use numbers"));
    }
    setTimeout(() => {
      resolve(num1 + num2);
    }, 3000);
  });
};

const slowSubtract = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject(new Error("Must use numbers"));
    }
    setTimeout(() => {
      resolve(num1 - num2);
    }, 2000);
  });
};

async function printAnswer(a, b) {
  console.log("Calculating");
  // as soon as we call await, the function stops and waits for the promise
  const result = await slowAdd(a, b);
  // the rest of the code won't happen for 3 seconds
  console.log("The answer is " + result);
  console.log("This happened after waiting");
}

async function printAnswers(a, b) {
  console.log("Calculating");
  // as soon as we call await, the function stops and waits for the promise
  const sum = await slowAdd(a, b);
  console.log("The additions result is " + sum);
  const difference = await slowSubtract(a, b);
  console.log("The subtraction result is " + difference);
  console.log("This happened after waiting");
}

printAnswers(10, 5);
