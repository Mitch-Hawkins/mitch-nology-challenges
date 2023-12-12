const myForm = document.querySelector("#form");
const myButton = document.querySelector("#button");

myButton.addEventListener("click", () => {
  let text = document.getElementById("form");
  const age = parseInt(text.value); //always recieve a string back from a submit
  console.log(age);
  if (age >= 18) {
    myButton.classList.add("green");
    myButton.classList.remove("red");
  } else {
    myButton.classList.add("red");
    myButton.classList.remove("green");
  }
});

// event.preventDefault();
