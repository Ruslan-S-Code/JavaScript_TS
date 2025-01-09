// Работаем на основе предыдущей задачи

// Создаем Map с любимыми группами и их участниками
const favoriteBands = new Map<string, string[]>([
    ["The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]],
    ["Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]],
    ["Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]],
    ["Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]],
    ["U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]]
]);

// 1. Проверяем, содержится ли "Metallica" в Map
const hasMetallica = favoriteBands.has("Metallica");
console.log("Ist Metallica in der Map enthalten?", hasMetallica); // true

// 2. Создаем дублирующийся ключ "Metallica" с другими участниками
favoriteBands.set("Metallica", ["Dave Mustaine", "Ron McGovney", "Lloyd Grant"]);

// 3. Извлекаем запись для "Metallica" после добавления нового значения
const metallicaMembers = favoriteBands.get("Metallica");
console.log("Aktuelle Mitglieder von Metallica:", metallicaMembers);

// 4. Комментарий:
// Последняя запись для ключа "Metallica" перезаписывает предыдущую. 
// Поэтому на консоли мы увидим только ["Dave Mustaine", "Ron McGovney", "Lloyd Grant"].
