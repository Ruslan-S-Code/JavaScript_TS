// Тип Apple с новой добавленной свойством isSweet
type Apple = {
    color: string;
    size: string;
    isSweet: boolean; // Добавлено новое свойство
};

// Создание объектов типа Apple с новой свойством isSweet
const redApple: Apple = { color: 'red', size: 'big', isSweet: true };
const greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
const yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: true };

// Массив всех объектов Apple
const apples: Apple[] = [redApple, greenApple, yellowApple];

// Используем forEach, чтобы вывести размеры всех яблок в консоль
apples.forEach(apple => {
console.log(`Size of apple: ${apple.size}`);
});

// Используем forEach, чтобы вывести цвета всех яблок в консоль
apples.forEach(apple => {
console.log(`Color of apple: ${apple.color}`);
});

// Используем length, чтобы вывести количество яблок в массиве
console.log(`Total number of apples: ${apples.length}`);

// Создаем новый объект pinkApple и добавляем его в массив apples
const pinkApple: Apple = { color: 'pink', size: 'medium', isSweet: true };
apples.push(pinkApple);

// Проверяем обновленный массив
console.log('Updated apples array:', apples);