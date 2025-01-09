function createImageNames(): string[] {
    // Инициализируем пустой массив для хранения имен файлов
    let returnArray: string[] = [];

    // Цикл для создания 100 имен файлов
    for (let i = 1; i <= 100; i++) {
        // Форматируем номер с ведущими нулями (3 символа)
        const formattedNumber: string = i.toString().padStart(3, '0');
        // Создаем имя файла и добавляем его в массив
        returnArray.push(`image_${formattedNumber}.jpg`);
    }

    // Возвращаем массив с именами файлов
    return returnArray;
}

// Вызываем функцию и выводим результат в консоль
const imageNames = createImageNames();
console.log(imageNames);
