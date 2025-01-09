function addToFifty(): void {
    let sum = 0; // Инициализируем сумму
    console.log("Начало генерации случайных чисел...");

    // Пока сумма не превысила 50
    while (sum <= 50) {
        // Генерируем случайное число от 1 до 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        // Добавляем число к общей сумме
        sum += randomNumber;

        // Выводим текущее случайное число
        console.log(`Случайное число: ${randomNumber}, текущая сумма: ${sum}`);
    }

    // Выводим итоговое сообщение
    console.log(`${sum} > 50. Stopping right here.`);
}

// Вызов функции для тестирования
addToFifty();
