// Создаем класс IceCreamFlavor
class IceCreamFlavor {
  // Атрибуты класса
  name: string;
  price: number;
  isPopular: boolean;
  description?: string; // Optional означает, что описание может отсутствовать

  // Конструктор класса
  constructor(
    name: string = "",
    price: number = 0,
    isPopular: boolean = false,
    description?: string
  ) {
    this.name = name;
    this.price = price;
    this.isPopular = isPopular;
    this.description = description;
  }
}

// Создаем 4 экземпляра класса
const flavor1 = new IceCreamFlavor(
  "Vanilla",
  2.5,
  true,
  "Classic vanilla flavor"
);
const flavor2 = new IceCreamFlavor(
  "Chocolate",
  3.0,
  true,
  "Rich chocolate taste"
);
const flavor3 = new IceCreamFlavor(
  "Strawberry",
  2.8,
  false,
  "Fresh strawberry flavor"
);
const flavor4 = new IceCreamFlavor(
  "Mint",
  3.2,
  true,
  "Cool mint with chocolate chips"
);

// Сохраняем экземпляры в массив
const iceCreamArray: IceCreamFlavor[] = [flavor1, flavor2, flavor3, flavor4];

// Фильтруем популярные сорта и выводим их названия
const popularFlavors = iceCreamArray.filter((flavor) => flavor.isPopular);
popularFlavors.forEach((flavor) => console.log(flavor.name));
