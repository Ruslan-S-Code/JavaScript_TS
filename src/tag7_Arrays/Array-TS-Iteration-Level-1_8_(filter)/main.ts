const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Функция для фильтрации четных чисел
function printEvenNumbers(): number[] {
    return zahlen.filter((num) => num % 2 === 0);
}

// Функция для фильтрации нечетных чисел
function printOddNumbers(): number[] {
    return zahlen.filter((num) => num % 2 !== 0);
}

const evenNumbers = printEvenNumbers(); // Вызываем функцию для четных чисел
const oddNumbers = printOddNumbers();   // Вызываем функцию для нечетных чисел

console.log('Even Numbers:', evenNumbers); // Проверка результата
console.log('Odd Numbers:', oddNumbers);

const printEvenNumbersArrow = (): number[] => zahlen.filter(num => num % 2 === 0);
const printOddNumbersArrow = (): number[] => zahlen.filter(num => num % 2 !== 0);

const evenNumbersArrow = printEvenNumbersArrow(); // Проверка результата
const oddNumbersArrow = printOddNumbersArrow();   // Проверка результата

console.log('Even Numbers (Arrow):', evenNumbersArrow);
console.log('Odd Numbers (Arrow):', oddNumbersArrow);
