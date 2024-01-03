import {
  validateCapitals,
  validateLength,
  validateNumber,
  validateSpecialChars,
  validateString,
} from "./validations.js";

const section = document.querySelector("section");
const input = document.querySelector("input");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  section.innerHTML = "Checking";
  const password = input.value;
  validateString(password)
    .then((result) => validateLength(result, 7))
    .then(validateCapitals)
    .then(validateNumber)
    .then(validateSpecialChars)
    .then((password) => (section.innerHTML = "Password is valid"))
    .catch((e) => (section.innerHTML = e.message));
  // .finally(() => (input.value = ""));
});
