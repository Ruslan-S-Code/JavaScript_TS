// Функция для сортировки в обратном порядке
function sortDescending<T>(array: T[]): T[] {
    // Сортируем массив в прямом порядке и затем переворачиваем его
    return array.sort().reverse();
}

// Массив программных языков
const programmingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

// Массив европейских стран
const europeanCountries: string[] = [
    "Deutschland",
    "Frankreich",
    "Spanien",
    "Italien",
    "Niederlande",
    "Schweden",
    "Norwegen",
    "Dänemark",
    "Östereich",
    "Schweiz",
    "Belgien",
    "Polen"
];

// Вызов функции для программных языков
const sortedLanguages = sortDescending(programmingLanguages);
console.log("Программные языки в обратном порядке:", sortedLanguages);

// Вызов функции для европейских стран
const sortedCountries = sortDescending(europeanCountries);
console.log("Европейские страны в обратном порядке:", sortedCountries);