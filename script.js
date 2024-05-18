const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokeImg = document.getElementById("pokemon-img");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const typeBoxMaker = (type) => {
  const typeBox = document.createElement("div");
  const typeColor = typeColors[type];

  typeBox.style.backgroundColor = typeColor;
  typeBox.classList.add("type-box");
  typeBox.textContent = type;
  return typeBox;
};

searchButton.addEventListener("click", () => {
  const pokemonNameInput = searchInput.value.toLowerCase();
  const fetchUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameInput}`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const pokemonData = data;
      console.log(pokemonData);
      pokeImg.src = pokemonData.sprites.front_default;
      pokemonName.textContent =
        pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
      pokemonId.textContent = pokemonData.id;
      weight.textContent = `Weight: ${pokemonData.weight}`;
      height.textContent = `Height: ${pokemonData.height}`;
      hp.textContent = pokemonData.stats[0].base_stat;
      attack.textContent = pokemonData.stats[1].base_stat;
      defense.textContent = pokemonData.stats[2].base_stat;
      specialAttack.textContent = pokemonData.stats[3].base_stat;
      specialDefense.textContent = pokemonData.stats[4].base_stat;
      speed.textContent = pokemonData.stats[5].base_stat;

      pokemonData.types.forEach((type) => {
        const typeBox = typeBoxMaker(type.type.name);
        types.appendChild(typeBox);
      });
    })
    .catch((error) => {
      alert("Pokemon not found");
    });
});
