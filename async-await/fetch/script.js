function sleep(interval) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("sleep has resolved");
      res();
    }, interval);
  });
}

async function myFunctionThatPauses() {
  console.log("Function has started");
  await sleep(1000);
  console.log("Function has finished");
}

function thenExample() {
  console.log("Function has started");

  sleep(1000).then(() => console.log("Function has finished"));
}

myFunctionThatPauses();

async function sum(n1, n2) {
  return n1 + n2;
}

console.log(sum(10, 10));

// Fetch (ajax)
//We want to make requests when are after the page is loaded

const button = document.querySelector("#getJokesButton");

const getRandomJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  console.log(response);
  return await response.json();
};

button.addEventListener("click", async (event) => {
  console.log("Jokes button clicked");

  const joke = await getRandomJoke();

  console.log(joke);

  const jokesContainer = document.querySelector("#jokesContainer");

  jokesContainer.innerHTML = "";

  const textNode = document.createTextNode(joke.joke);
  const elementNode = document.createElement("p");

  elementNode.append(textNode);
  jokesContainer.append(elementNode);
});

// HTTP
// HyperText Transfer Protocol
// -> TCP (reliability)
// What we use to get web page data and json data
// usually Unidirectional request

// Reuqests
// Headers
// -> query parameters
// -> Accept header (Recieve)
// -> Content-type (Sending)
// -> Authorization

// Body
// free form text (We need headers because of this fact)

// Method: (CRUD: Create, Read, Update, Delete)
// - GET -> Get data from a source / 200, 404
// - POST -> Creating data (request body) / 201, 400
// - PATCH -> updating data / 200, 404, 400
// - PUT -> rewriting data / 200, 201, 400
// - DELETE -> deleting data / 200, 401, 403, 404

// Response Codes -- Different Data/Body responses depending on the code

// 2xx -> Sign that things went well
// 200 - OK
// 201 - Created

// 4xx - Client Errors (Your Fault)
// 400 - Bad Request (bad data)
// 401 - Unauthorized
// 403 - Foribidden
// 404 - Not Found

// 5xx (Server Side Errors, their fault)
// 500 - Internal Server Error

// Responses

// Example Response

// Headers:
//  Content-type : text/csv
// Body:
// id,name,age
// 1, Calum, 26
