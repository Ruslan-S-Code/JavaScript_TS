// Функция для разворота строки
function reverseString(input: string): string {
    // Преобразуем строку в массив символов, разворачиваем его и затем объединяем обратно в строку
    return input.split('').reverse().join('');
}

// Проверка функции с вашим именем
const myName = "Ruslan"; // Замените "ВашеИмя" на ваше имя
console.log("Развернутое имя:", reverseString(myName));

// Слова для разворота
const wordsToReverse = [
    "Sergio",
    "Hannah",
    "Regallager",
    "Reliefpfeiler",
    "Rentner"
];

// Разворачиваем каждое слово и выводим результат
wordsToReverse.forEach(word => {
    console.log(`Развернутое слово "${word}":`, reverseString(word));
});

// Предложения для разворота
const sentencesToReverse = [
    "Ella mag alle Bohnen",
    "han nesaH has ennaH"
];

// Разворачиваем каждое предложение и выводим результат
sentencesToReverse.forEach(sentence => {
    console.log(`Развернутое предложение "${sentence}":`, reverseString(sentence));
});

