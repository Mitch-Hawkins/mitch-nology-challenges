import { fibonacci } from "./math.js";

const form = document.querySelector("#fibonacciForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const fibString = formData.get("fibN");
  const fibSequenceNumber = parseInt(fibString);

  let value;

  try {
    value = fibonacci(fibSequenceNumber);
  } catch (e) {
    alert(e.message);
    return;
  } finally {
    const container = document.querySelector("#resultsContainer");
    container.innerHTML = `<p>Number at n = ${fibSequenceNumber} => ${value}`;
  }
});
