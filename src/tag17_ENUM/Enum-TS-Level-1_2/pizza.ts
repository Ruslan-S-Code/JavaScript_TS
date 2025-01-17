// Определение Enum для размера пиццы
enum PizzaSize {
  Small,
  Medium,
  Large,
  Family,
}

// Определение Enum для ингредиентов пиццы
enum pizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Mushroom,
  Peppers,
  Olives,
  Ham,
  Pineapple,
}

// Тип Pizza с размерами и ингредиентами
type Pizza = {
  size: PizzaSize;
  ingredients: pizzaIngredients[];
};

// Пицца Parmigiana
const parmigiana: Pizza = {
  size: PizzaSize.Small,
  ingredients: [pizzaIngredients.Cheese, pizzaIngredients.Onion],
};
// Выводим информацию о пиццe на консоль
console.log("Parmigiana:", parmigiana);

// Пицца Padana
const padana: Pizza = {
  size: PizzaSize.Medium,
  ingredients: [
    pizzaIngredients.Salami,
    pizzaIngredients.Mushroom,
    pizzaIngredients.Olives,
  ],
};
// Выводим информацию о пиццe на консоль
console.log("Padana:", padana);

// Пицца Fugnghi
const funghi: Pizza = {
  size: PizzaSize.Large,
  ingredients: [
    pizzaIngredients.Ham,
    pizzaIngredients.Mushroom,
    pizzaIngredients.Olives,
    pizzaIngredients.Pineapple,
    pizzaIngredients.Onion,
  ],
};
// Выводим информацию о пиццe на консоль
console.log("Funghi:", funghi);

// Пицца Carbonara
const carbonara: Pizza = {
  size: PizzaSize.Family,
  ingredients: [
    pizzaIngredients.Cheese,
    pizzaIngredients.Olives,
    pizzaIngredients.Peppers,
    pizzaIngredients.Onion,
  ],
};
// Выводим информацию о пиццe на консоль
console.log("Carbonara:", carbonara);
