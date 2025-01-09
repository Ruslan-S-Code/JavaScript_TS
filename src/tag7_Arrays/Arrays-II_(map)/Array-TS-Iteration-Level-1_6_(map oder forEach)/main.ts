const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

// Функция для обработки имени файла
function processFileName(fileName: string): string {
    const lowerCaseName = fileName.toLowerCase(); // Привести к нижнему регистру
    const extensionIndex = lowerCaseName.lastIndexOf('.'); // Найти индекс последнего точки

    if (extensionIndex === -1) {
        return "invalid"; // Если нет расширения
    }
    
    return lowerCaseName.slice(0, extensionIndex); // Удалить расширение
}

// Используем map() для создания нового массива
const fileNames = album.map(processFileName);

// Выводим результат
console.log(fileNames);
