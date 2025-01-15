// app.ts

// Импортируем функции из файла operations.ts
import { add, subtract, multiply, divide } from "./operations";

// Вызываем функции из operations.ts
console.log("Add:", add(5, 3)); // 8
console.log("Subtract:", subtract(5, 3)); // 2
console.log("Multiply:", multiply(5, 3)); // 15
console.log("Divide:", divide(5, 3)); // 1.666...

// Импортируем функции из файла operations2.ts
import {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./operations2";

// Вызываем переименованные функции из operations2.ts
console.log("Add Numbers:", addNumbers(10, 5)); // 15
console.log("Subtract Numbers:", subtractNumbers(10, 5)); // 5
console.log("Multiply Numbers:", multiplyNumbers(10, 5)); // 50
console.log("Divide Numbers:", divideNumbers(10, 5)); // 2
