interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

let allCharacters: Character[] = []; // Хранит всех персонажей

async function fetchCharacters(): Promise<void> {
  const url = "https://rickandmortyapi.com/api/character/";

  try {
    const response = await fetch(url);
    const data = await response.json();
    allCharacters = data.results; // Сохраняем всех персонажей
    displayCharacters(allCharacters); // Отображаем всех персонажей
  } catch (error) {
    console.error("Error while receiving data:", error);
  }
}

function displayCharacters(characters: Character[]): void {
  const container = document.getElementById("character-container");
  container!.innerHTML = ""; // Очистка контейнера перед добавлением новых персонажей

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
    container!.appendChild(characterCard);
  });
}

// Функция для фильтрации персонажей
function filterCharacters(searchTerm: string): void {
  const filteredCharacters = allCharacters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      character.gender.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  displayCharacters(filteredCharacters); // Отображаем отфильтрованных персонажей
}

// Обработчик события для поиска
const searchInput = document.getElementById("search") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  filterCharacters(searchTerm); // Фильтруем персонажей по введенному значению
});

// Изначально загружаем всех персонажей
fetchCharacters();
