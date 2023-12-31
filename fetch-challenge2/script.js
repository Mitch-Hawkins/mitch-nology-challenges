let pokeMax = 493;
let pokePerPage = 40;
let numberOfPages = Math.ceil(pokeMax / pokePerPage);
const url = `https://pokeapi.co/api/v2/pokemon/`;
let pokemonArr = [];

const getPokemon = async (offset) => {
  const response = fetch(
    `${url}?limit=${pokePerPage}&offset=${pokePerPage * offset}` //change this to use the .next/.previous
  ).then((res) => res.json());
  // console.log(response);
  return response;
};

async function getMultiplePokemonInIdOrder() {
  const promisesArr = [];
  for (i = 0; i < numberOfPages; i++) {
    promisesArr.push(getPokemon(i));
  }
  pokemonArr = await Promise.all(promisesArr);
  console.log(pokemonArr);
  return pokemonArr;
}

async function onPageLoad() {
  const pokemonArr = await getMultiplePokemonInIdOrder();
  RefreshHTML(pokemonArr);
}

async function filterPokemonBySearch() {
  //const pokemonArr = await getMultiplePokemon(pokeMax);
  const filteredArr = pokemonArr.filter((mon) =>
    mon.name.includes(searchBar.value)
  );
  const dexIdArray = filteredArr.map((mon) => mon.id);
  console.log(filteredArr);
  const filteredPokemon = await getMultiplePokemonInIdOrder(dexIdArray);
  return filteredPokemon;
}

onPageLoad();

// async function getMultiplePokemon(n) {
//   const promisesArr = [];
//   for (i = 1; i <= n; i++) {
//     promisesArr.push(getPokemon(i));
//   }
//   const pokemonArr = await Promise.all(promisesArr);

//   return pokemonArr;
// }

//====REFRESH HTML====================================================================

async function RefreshHTML(pokemonArr) {
  const cardsContainer = document.querySelector("section");
  cardsContainer.innerHTML = "";
  for (i = 0; i < pokemonArr.length; i++) {
    const nameParagraph = document.createElement("p");
    const type1Paragraph = document.createElement("p");
    const type2Paragraph = document.createElement("p");
    const ability1Paragraph = document.createElement("p");
    const ability2Paragraph = document.createElement("p");
    const ability3Paragraph = document.createElement("p");
    const pokemonCard = document.createElement("div");
    const pokemonName = document.createTextNode(pokemonArr[i].name);
    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemonArr[i].sprites.other.dream_world.front_default;
    const pokemonType1 = document.createTextNode(
      pokemonArr[i].types[0].type.name
    );
    let pokemonType2;
    if (pokemonArr[i].types.length == 2) {
      pokemonType2 = document.createTextNode(pokemonArr[i].types[1].type.name);
    }

    const pokemonAbility1 = document.createTextNode(
      pokemonArr[i].abilities[0].ability.name
    );

    let pokemonAbility2;
    if (pokemonArr[i].abilities.length >= 2) {
      pokemonAbility2 = document.createTextNode(
        pokemonArr[i].abilities[1].ability.name
      );
    }

    let pokemonAbility3;
    if (pokemonArr[i].abilities.length == 3) {
      pokemonAbility3 = document.createTextNode(
        pokemonArr[i].abilities[2].ability.name
      );
    }

    pokemonCard.append(pokemonImg);

    pokemonCard.append(nameParagraph);
    nameParagraph.append(`Name: ${pokemonName.textContent}`);

    pokemonCard.append(type1Paragraph);
    pokemonCard.append(`Primary Type: ${pokemonType1.textContent}`);

    if (pokemonArr[i].types.length == 2) {
      pokemonCard.append(type2Paragraph);
      pokemonCard.append(`Secondary Type: ${pokemonType2.textContent}`);
    }

    const abilityButton = document.createElement("button");
    abilityButton.textContent = "Abilities";
    pokemonCard.append(abilityButton);
    const abilityDialog = document.createElement("dialog");
    const dialogContainer = document.querySelector("article");
    const closeDialogButton = document.createElement("button");

    abilityDialog.append(ability1Paragraph);
    ability1Paragraph.append(`Primary Ability: ${pokemonAbility1.textContent}`);

    if (
      pokemonArr[i].abilities.length >= 2 &&
      pokemonArr[i].abilities[1].is_hidden
    ) {
      abilityDialog.append(ability2Paragraph);
      ability2Paragraph.append(
        `Hidden Ability: ${pokemonAbility2.textContent}`
      );
    } else if (
      pokemonArr[i].abilities.length >= 2 &&
      pokemonArr[i].abilities[1].is_hidden == false
    ) {
      abilityDialog.append(ability2Paragraph);
      ability2Paragraph.append(
        `Secondary Ability: ${pokemonAbility2.textContent}`
      );
    }

    if (pokemonArr[i].abilities.length == 3) {
      abilityDialog.append(ability3Paragraph);
      ability3Paragraph.append(
        `Hidden Ability: ${pokemonAbility3.textContent}`
      );
    }

    abilityDialog.append(closeDialogButton);
    closeDialogButton.append("Close");

    dialogContainer.append(abilityDialog);

    pokemonCard.addEventListener("click", () => {
      abilityDialog.showModal();
    });

    closeDialogButton.addEventListener("click", () => {
      abilityDialog.close();
    });

    cardsContainer.append(pokemonCard);
  }
}

//===========================================================================================

//====Search Bar Functionality===============================================================

const searchBar = document.querySelector("input");

searchBar.addEventListener("input", async () => {
  RefreshHTML(filterPokemonBySearch());
});

// async function filterPokemonBySearch() {
//   const pokemonArr = await getMultiplePokemon(pokeMax);
//   const filteredArr = pokemonArr.filter((mon) =>
//     mon.name.includes(searchBar.value)
//   );
//   const dexIdArray = filteredArr.map((mon) => mon.id);
//   console.log(filteredArr);
//   const filteredPokemon = await getMultiplePokemonInIdOrder(dexIdArray);
//   return filteredPokemon;
// }
