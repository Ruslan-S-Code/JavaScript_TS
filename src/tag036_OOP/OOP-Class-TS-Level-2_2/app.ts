import { Car } from "./Car";
import { Driver } from "./Driver";

// Создаем автомобили
const formula1Car1 = new Car("Ferrari F1", 2004, 300); // Машина Михаэля Шумахера
const formula1Car2 = new Car("Renault F1", 2006, 290); // Машина Фернандо Алонсо
const kenBlockCar = new Car("Ford Mustang Hoonicorn", 2021, 280); // Автомобиль Кена Блока
const rallyCar1 = new Car("Subaru Impreza WRX", 2005, 260); // Машина Колина Макрея
const rallyCar2 = new Car("Peugeot 206 WRC", 2003, 250); // Машина Себастьяна Лёба

// Создаем водителей и связываем их с машинами
const driver1 = new Driver("Michael", "Schumacher", 52, formula1Car1); // Михаэль Шумахер
const driver2 = new Driver("Fernando", "Alonso", 41, formula1Car2); // Фернандо Алонсо
const driver3 = new Driver("Ken", "Block", 55, kenBlockCar); // Кен Блок
const driver4 = new Driver("Colin", "McRae", 39, rallyCar1); // Колин Макрей
const driver5 = new Driver("Sebastien", "Loeb", 48, rallyCar2); // Себастьян Лёб

// Вывод информации о водителях и их автомобилях
console.log(
  `${driver1.firstName} ${driver1.lastName} fährt ein ${driver1.car.brand}, Baujahr ${driver1.car.constructionYear}, aktuelle Geschwindigkeit: ${driver1.car.currentSpeed} km/h.`
);
console.log(
  `${driver2.firstName} ${driver2.lastName} fährt ein ${driver2.car.brand}, Baujahr ${driver2.car.constructionYear}, aktuelle Geschwindigkeit: ${driver2.car.currentSpeed} km/h.`
);
console.log(
  `${driver3.firstName} ${driver3.lastName} fährt ein ${driver3.car.brand}, Baujahr ${driver3.car.constructionYear}, aktuelle Geschwindigkeit: ${driver3.car.currentSpeed} km/h.`
);
console.log(
  `${driver4.firstName} ${driver4.lastName} fährt ein ${driver4.car.brand}, Baujahr ${driver4.car.constructionYear}, aktuelle Geschwindigkeit: ${driver4.car.currentSpeed} km/h.`
);
console.log(
  `${driver5.firstName} ${driver5.lastName} fährt ein ${driver5.car.brand}, Baujahr ${driver5.car.constructionYear}, aktuelle Geschwindigkeit: ${driver5.car.currentSpeed} km/h.`
);
