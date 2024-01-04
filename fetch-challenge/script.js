const button = document.querySelector("button");
const input = document.querySelector("input");

const getSpecificJoke = async (query) => {
  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${query}`, //query paramters start with a question mark and then are delimited with an ampersand
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  console.log(response);
  console.log(query);
  return await response.json();
};

button.addEventListener("click", async (event) => {
  //   console.log("Jokes button clicked");

  const joke = await getSpecificJoke(input.value);

  //   console.log(joke);

  const jokesContainer = document.querySelector("section");

  jokesContainer.innerHTML = "";
  // for (let joke of jokesObjArray)
  const textNode = document.createTextNode(joke.results[0].joke); //
  const elementNode = document.createElement("p");

  elementNode.append(textNode);
  jokesContainer.append(elementNode);
});
