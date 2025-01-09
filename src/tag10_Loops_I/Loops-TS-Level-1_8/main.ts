// Инициализируем переменную-счетчик
let number: number = 2;

// Получаем ссылку на body HTML-документа
const body: HTMLElement | null = document.querySelector('body');

// Цикл do...while
do {
    if (body) {
        body.innerHTML += `<p>${number}</p>`; // Добавляем четное число в HTML-документ
    }
    number += 2; // Увеличиваем счетчик на 2
} while (number <= 20);
