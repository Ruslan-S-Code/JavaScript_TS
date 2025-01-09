const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

// Функция для преобразования температуры из Фаренгейтов в Цельсии
function fahrenheitToCelsius(f: number): number {
    return (f - 32) / 1.8;
}

// Используем map() для преобразования температур
const celsius = fahrenheit.map(fahrenheitToCelsius);

// Выводим результаты в консоль
console.log(celsius);