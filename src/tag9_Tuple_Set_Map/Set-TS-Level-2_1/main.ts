// 1. Создаем массив с персонажами Marvel
const marvelCharacters: string[] = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Spider Man"
];

// 2. Добавляем повторно "Iron Man" и "Thor" в конец массива
marvelCharacters.push("Iron Man", "Thor");

// 3. Выводим содержимое массива
console.log("Inhalt des Arrays:", marvelCharacters);

// 4. Создаем Set на основе массива
const marvelCharacterSet = new Set<string>(marvelCharacters);

// 5. Выводим содержимое Set
console.log("Inhalt des Sets:", marvelCharacterSet);
