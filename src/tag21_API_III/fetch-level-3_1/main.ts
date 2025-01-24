interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

let allCharacters: Character[] = []; // Хранит всех персонажей (Rick and Morty и Pokemon)

async function fetchRickAndMortyCharacters(): Promise<Character[]> {
  const url = "https://rickandmortyapi.com/api/character/";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Rick and Morty Characters:", data.results); // Логируем полученные данные
    return data.results.map((character: any) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      image: character.image,
    }));
  } catch (error) {
    console.error("Error while receiving data from Rick and Morty API:", error);
    return [];
  }
}

async function fetchPokemonCharacters(): Promise<Character[]> {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10"; // Пример запроса к PokeAPI

  try {
    const response = await fetch(url);
    const data = await response.json();
    const characters = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          status: "unknown", // PokeAPI не предоставляет статус, можно указать "unknown"
          species: pokemonData.species.name,
          gender: "unknown", // PokeAPI не предоставляет пол, можно указать "unknown"
          image: pokemonData.sprites.front_default,
        };
      })
    );
    console.log("Pokemon Characters:", characters); // Логируем полученные данные
    return characters; // Возвращаем массив персонажей
  } catch (error) {
    console.error("Error while receiving data from PokeAPI:", error);
    return [];
  }
}

async function fetchAllCharacters(): Promise<void> {
  const rickAndMortyCharacters = await fetchRickAndMortyCharacters();
  const pokemonCharacters = await fetchPokemonCharacters();

  allCharacters = [...rickAndMortyCharacters, ...pokemonCharacters]; // Объединяем всех персонажей
  displayCharacters(allCharacters); // Отображаем всех персонажей
}

function displayCharacters(characters: Character[]): void {
  const containerRick = document.getElementById("character-container-rick");
  const containerPokemon = document.getElementById(
    "character-container-pokemon"
  );

  if (containerRick) {
    containerRick.innerHTML = ""; // Очистка контейнера перед добавлением новых персонажей
  }
  if (containerPokemon) {
    containerPokemon.innerHTML = ""; // Очистка контейнера перед добавлением новых покемонов
  }

  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.className = "character-card";
    characterCard.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
      `;

    // Добавляем карточку в соответствующий контейнер
    if (character.species === "Human" || character.species === "Alien") {
      containerRick?.appendChild(characterCard);
    } else {
      containerPokemon?.appendChild(characterCard);
    }
  });
}

// Функция для фильтрации персонажей
function filterCharacters(searchTerm: string): Character[] {
  return allCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.gender.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

// Обработчик события для поиска
const searchInput = document.getElementById("search") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  const filteredCharacters = filterCharacters(searchTerm);
  displayCharacters(filteredCharacters); // Фильтруем и отображаем
});

// Изначально загружаем всех персонажей
fetchAllCharacters(); // Загружаем всех персонажей при загрузке страницы
