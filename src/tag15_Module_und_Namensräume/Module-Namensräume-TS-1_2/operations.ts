// operations.ts

// Функция для сложения
export function add(a: number, b: number): number {
  return a + b;
}

// Функция для вычитания
export function subtract(a: number, b: number): number {
  return a - b;
}

// Функция для умножения
export function multiply(a: number, b: number): number {
  return a * b;
}

// Функция для деления
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Деление на ноль невозможно");
  }
  return a / b;
}
