// Массив с числами
const numbers: number[] = [
    399, 10, 186, 45, 9, 171, 491, 128, 24, 288, 56, 444, 
    217, 111, 187, 89, 270, 485, 481, 179, 290, 14, 292, 
    250, 463, 189, 434, 184, 124, 443, 119, 23, 453, 305, 
    68, 477, 58, 90, 347, 147, 64, 259, 131, 153, 29, 116
];

// Находим минимальное и максимальное значение
const minValue: number = Math.min(...numbers);
const maxValue: number = Math.max(...numbers);

// Выводим результаты
console.log(`Minimum Value: ${minValue}`);
console.log(`Maximum Value: ${maxValue}`);