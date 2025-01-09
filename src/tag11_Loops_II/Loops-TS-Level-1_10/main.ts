function getHighestNumber(numbers: number[]): number {
    // Переменная для хранения текущего максимального значения
    let highest = numbers[0]; // Инициализируем первым элементом массива

    // Проходим по всем числам в массиве
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i]; // Если число больше текущего максимума, обновляем его
        }
    }

    // Возвращаем найденное максимальное значение
    return highest;
}

// Тестируем функцию с разными массивами
const array1 = [5, 8, 2, 10, 3];
const array2 = [15, 22, 1, 9, 7];
const array3 = [-5, -1, -10, -3];

console.log(`Höchste Zahl in Array1: ${getHighestNumber(array1)}`); // Ожидается 10
console.log(`Höchste Zahl in Array2: ${getHighestNumber(array2)}`); // Ожидается 22
console.log(`Höchste Zahl in Array3: ${getHighestNumber(array3)}`); // Ожидается -1
