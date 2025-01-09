const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

// Функция для преобразования в верхний регистр
function toUpperCase(drink: string): string {
    return drink.toUpperCase();
}

// Используем map() для создания upperDrinks
const upperDrinks = drinks.map(toUpperCase);

// Вывод в консоль upperDrinks
console.log(upperDrinks);

// Используем map() для вывода 'I like [drink]'
drinks.map(drink => console.log(`I like ${drink}`));
