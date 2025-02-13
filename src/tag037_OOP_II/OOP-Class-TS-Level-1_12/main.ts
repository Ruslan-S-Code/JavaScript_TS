// Класс IceCreamFlavor
class IceCreamFlavor {
  private _name: string;
  private _price: number;
  private _isPopular: boolean;
  private _description?: string;

  constructor(
    name: string,
    price: number,
    isPopular: boolean,
    description?: string
  ) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
  }

  public get name(): string {
    return this._name;
  }

  public get price(): number {
    return this._price;
  }

  public get isPopular(): boolean {
    return this._isPopular;
  }

  public get description(): string | undefined {
    return this._description;
  }
}

// Создаем массив мороженого
const flavors: IceCreamFlavor[] = [
  new IceCreamFlavor("Vanilla", 2.1, true, "Classic vanilla flavor"),
  new IceCreamFlavor("Chocolate", 2.5, true, "Rich chocolate taste"),
  new IceCreamFlavor("Strawberry", 2.2, false, "Fresh strawberry flavor"),
  new IceCreamFlavor("Mint", 2.4, true, "Cool mint with chocolate chips"),
];

// Функция для рендеринга карточек в контейнере
function renderFlavors(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = ""; // Очищаем контейнер перед добавлением карточек

  flavors.forEach((flavor, index) => {
    // Создаем карточку
    const flavorDiv = document.createElement("div");
    flavorDiv.classList.add("flavor");

    flavorDiv.innerHTML = `
        <h2>${flavor.name} ${flavor.isPopular ? "⭐" : ""}</h2>
        <p>Price: ${flavor.price.toFixed(2)} Euro</p>
        <p>${flavor.description || "No description available."}</p>
        <p>Total Scoops: <span id="total-scoops-${index}">0</span></p>
        <p>Total Price: <span id="total-price-${index}">0.00</span> Euro</p>
        <button id="add-scoop-${index}">+1</button>

      `;

    // Логика для кнопки "+1 Scoop"
    const button = flavorDiv.querySelector(`#add-scoop-${index}`);
    let scoops = 0;

    button?.addEventListener("click", () => {
      scoops++;
      const totalScoopsElement = document.getElementById(
        `total-scoops-${index}`
      );
      const totalPriceElement = document.getElementById(`total-price-${index}`);

      if (totalScoopsElement && totalPriceElement) {
        totalScoopsElement.textContent = scoops.toString();
        totalPriceElement.textContent = (scoops * flavor.price).toFixed(2);
      }
    });

    app.appendChild(flavorDiv); // Добавляем карточку в контейнер
  });
}

// Инициализация рендеринга
document.addEventListener("DOMContentLoaded", () => {
  renderFlavors();
});
