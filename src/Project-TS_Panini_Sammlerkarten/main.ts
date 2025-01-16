interface Card {
  firstName: string;
  lastName: string;
  stageName: string;
  albums: number;
  topSingles: number;
  netWorth: number;
  age: number;
  quote: string;
  imageUrl: string;
}

const form = document.getElementById("card-form") as HTMLFormElement;
const cardsContainer = document.getElementById(
  "cards-container"
) as HTMLDivElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Получение значений из формы
  const firstName = (
    document.getElementById("firstname-input") as HTMLInputElement
  ).value;
  const lastName = (
    document.getElementById("lastname-input") as HTMLInputElement
  ).value;
  const stageName = (
    document.getElementById("stagename-input") as HTMLInputElement
  ).value;
  const albums = Number(
    (document.getElementById("albumcount-input") as HTMLInputElement).value
  );
  const topSingles = Number(
    (document.getElementById("top10count-input") as HTMLInputElement).value
  );
  const netWorth = Number(
    (document.getElementById("networth-input") as HTMLInputElement).value
  );

  const age = Number(
    (document.getElementById("age-input") as HTMLInputElement).value
  );

  const quote = (document.getElementById("quote-input") as HTMLInputElement)
    .value;
  const imageUrl = (
    document.getElementById("imageUrl-input") as HTMLInputElement
  ).value;

  // Создание объекта карточки
  const newCard: Card = {
    firstName,
    lastName,
    stageName,
    albums,
    topSingles,
    netWorth,
    quote,
    age,
    imageUrl,
  };

  console.log(newCard);

  // Отображение карточки
  addCardToDOM(newCard);

  // Очистка формы
  form.reset();
});

function addCardToDOM(card: Card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
        <img src="${card.imageUrl}" alt="${card.stageName}" class="card-image" />
        <div class="card-info">
            <h2>${card.firstName} ${card.lastName}</h2>
            <h3>${card.stageName}</h3>
            <p><strong>Albums:</strong> ${card.albums}</p>
            <p><strong>Top 10 Singles:</strong> ${card.topSingles}</p>
            <p><strong>Net Worth:</strong> €${card.netWorth}M</p>
            <p><strong>Age:</strong> ${card.age}</p>
            <blockquote>"${card.quote}"</blockquote>
        </div>
        <button class="delete-button">Delete</button>
    `;

  console.log(cardElement);
  cardsContainer.appendChild(cardElement);

  // Кнопка удаления карточки
  const deleteButton = cardElement.querySelector(
    ".delete-button"
  ) as HTMLButtonElement;
  deleteButton.addEventListener("click", () => {
    cardsContainer.removeChild(cardElement);
  });
}
