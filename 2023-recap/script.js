import { createNode } from "./dom-functions.js";
import { divide } from "./math.js";

const form = document.querySelector("form");
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const answerSection = document.querySelector("section");
console.log(form);
form.addEventListener("submit", (event) => {
  answerSection.innerHTML = "";
  event.preventDefault();
  try {
    const answer = divide(input1.value, input2.value);
    createNode(answerSection, "h2", answer);
  } catch (e) {
    console.warn(e);
    createNode(answerSection, "p", "Cannot Divide by zero", false);
  } finally {
    input1.value = "";
    input2.value = "";
  }
});
