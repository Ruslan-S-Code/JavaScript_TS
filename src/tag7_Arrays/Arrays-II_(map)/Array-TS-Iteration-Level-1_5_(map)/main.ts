const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

// Функция, которая проверяет деление на 3 и добавляет 100, если делится
function processNumber(num: number): number {
    if (num % 3 === 0) {
        return num + 100;
    }
    return num;
}

// Используем map() для обработки массива checkNumber
const result = checkNumber.map(processNumber);

// Выводим результат
console.log(result);
