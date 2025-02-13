import { drivers } from "./data";

// Функция для рендеринга карточек
function renderDrivers() {
  const app = document.getElementById("app");
  if (!app) return;

  // Очищаем контейнер перед добавлением карточек
  app.innerHTML = "";

  // Создаем карточки для каждого водителя
  drivers.forEach((driver) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${driver.firstName} ${driver.lastName}</h2>
      <div class="driver-photo-container">
        <img src="${driver.photoUrl}" alt="Foto von ${driver.firstName}">
      </div>
      <p>Alter: ${driver.age} Jahre</p>
      <p>Führerschein seit: ${driver.licenseFromYear}</p>
      <p>Auto: ${driver.car.brand}</p>
      <p>Autotyp: ${driver.car.carType}</p>
      <p>Baujahr: ${driver.car.constructionYear}</p>
      <div class="car-photo-container">
        <img src="${driver.carPhotoUrl}" alt="Auto von ${driver.firstName}">
      </div>
      <p>Aktuelle Geschwindigkeit: <span class="speed">${
        driver.car.currentSpeed
      } km/h</span></p>
      <p>Geschwindigkeitsinformation: ${driver.car.getSpeedInfo()}</p>
    `;

    app.appendChild(card);
  });
}

// Инициализация рендеринга
document.addEventListener("DOMContentLoaded", () => {
  renderDrivers();
});
