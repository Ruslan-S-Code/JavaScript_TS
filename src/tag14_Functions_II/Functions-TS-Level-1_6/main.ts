// 1. Определяем тип Monster
type Monster = {
  name: string; // Имя монстра
  type: string; // Тип монстра
  health: number; // Здоровье
  strength: number; // Сила
  speed: number; // Скорость
};

// 2. Функция для создания монстра
function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  return { name, type, health, strength, speed };
}

// 3. Создание объектов с разным количеством параметров

// Передаем 2 параметра
const monster1 = createMonster("Goblin", "Earth");

// Передаем 3 параметра
const monster2 = createMonster("Wyvern", "Air", 200);

// Передаем 4 параметра
const monster3 = createMonster("Dragon", "Fire", 300, 150);

// Передаем 5 параметров
const monster4 = createMonster("Troll", "Mountain", 250, 120, 40);

// 4. Выводим созданные объекты в консоль
console.log("Monster 1:", monster1);
console.log("Monster 2:", monster2);
console.log("Monster 3:", monster3);
console.log("Monster 4:", monster4);
