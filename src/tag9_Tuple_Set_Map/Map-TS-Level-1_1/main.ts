// Создаем файл favoriteBands.ts
// Импорт не требуется, так как используется встроенный Map

// 1. Создаем Map для хранения названий групп и их участников
const favoriteBands = new Map<string, string[]>([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
    ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
    ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);

// 2. Выводим размер Map (количество групп)
console.log("Anzahl der Bands:", favoriteBands.size);

// 3. Добавляем новую группу в Map
favoriteBands.set("Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]);

// 4. Выводим размер Map после добавления новой группы
console.log("Anzahl der Bands nach dem Hinzufügen:", favoriteBands.size);

// 5. Извлекаем участников группы Kraftwerk
const kraftwerkMembers = favoriteBands.get("Kraftwerk");

if (kraftwerkMembers) {
    // 6. Выводим имя последнего участника группы Kraftwerk
    console.log("Letztes Mitglied von Kraftwerk:", kraftwerkMembers[kraftwerkMembers.length - 1]);
} else {
    console.log("Die Band Kraftwerk wurde nicht gefunden.");
}
