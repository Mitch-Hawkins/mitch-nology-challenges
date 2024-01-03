import { generateRandomNumber } from "./number-gen.js";
import { clearNode, createNode } from "./dom-functions.js";

const section = document.querySelector("section");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  clearNode(section);
  createNode(section, "p", "...loading");
  button.innerText = "Generating";
  button.disabled = true;
  generateRandomNumber()
    .then((number) => {
      clearNode(section);
      createNode(section, "h3", number, "success");
    })
    .catch((err) => {
      console.warn(err);
      clearNode(section);
      createNode(section, "h3", "Oops something went wrong", "danger");
    })
    .finally(() => {
      button.innerText = "Generate";
      button.disabled = false;
    });
  console.log("Doing other stuff");
});
