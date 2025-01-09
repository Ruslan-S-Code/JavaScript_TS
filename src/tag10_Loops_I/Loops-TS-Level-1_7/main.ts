// Создаем переменную-счетчик
let counter: number = 1;

// Получаем ссылку на body HTML-документа
const body: HTMLElement | null = document.querySelector('#body'); // Цикл do...while

do {
    if (body) {
        body.innerHTML += `<p> The nummer is ${counter}</p>`; // Добавляем номер в HTML-документ
    }
    
    counter++; // Увеличиваем значение счетчика
} while (counter <= 5);
