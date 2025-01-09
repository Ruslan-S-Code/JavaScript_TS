function getNumberOfVowels(input: string): number {
    // Список гласных букв
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0; // Счетчик гласных

    // Приводим строку к нижнему регистру, чтобы сравнение было нечувствительным к регистру
    const lowerCaseInput = input.toLowerCase();

    // Проходим по каждому символу строки
    for (let char of lowerCaseInput) {
        if (vowels.includes(char)) {
            count++; // Если символ гласный, увеличиваем счетчик
        }
    }

    return count; // Возвращаем общее количество гласных
}

// Тестируем функцию с разными строками
console.log(getNumberOfVowels("Hello World")); // Ожидается 3 (e, o, o)
console.log(getNumberOfVowels("TypeScript"));  // Ожидается 2 (e, i)
console.log(getNumberOfVowels("ABCDEFG"));     // Ожидается 2 (A, E)
console.log(getNumberOfVowels("xyz"));         // Ожидается 0
