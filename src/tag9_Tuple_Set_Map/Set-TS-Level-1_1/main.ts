// 1. Создаем Set с начальными значениями
const starWarsCharacters = new Set<string>([
    "Luke Skywalker",
    "Darth Vader",
    "Obi Wan Kenobi"
]);

// 2. Выводим начальное содержимое Set
console.log("Initiales Set:", starWarsCharacters);

// 3. Добавляем "Leia Organa" в Set
starWarsCharacters.add("Leia Organa");

// 4. Выводим содержимое Set после добавления "Leia Organa"
console.log("Nach Hinzufügen von Leia Organa:", starWarsCharacters);

// 5. Повторно добавляем "Leia Organa"
starWarsCharacters.add("Leia Organa");

// 6. Выводим содержимое Set после повторного добавления "Leia Organa"
console.log("Nach erneutem Hinzufügen von Leia Organa:", starWarsCharacters);
