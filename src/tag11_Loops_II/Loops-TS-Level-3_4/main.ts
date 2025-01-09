// Получаем элементы из DOM
const inputNumber = document.getElementById("inputNumber") as HTMLInputElement;
const select1 = document.getElementById("select1") as HTMLSelectElement;
const select2 = document.getElementById("select2") as HTMLSelectElement;
const calculateButton = document.getElementById("calculateButton") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;
const errorMessage = document.getElementById("errorMessage") as HTMLParagraphElement;

function calculateDivisibleSum(): void {
    errorMessage.textContent = ""; // Сбрасываем ошибку
    result.textContent = ""; // Сбрасываем результат

    const maxNumber = parseInt(inputNumber.value);
    const divisor1 = parseInt(select1.value);
    const divisor2 = parseInt(select2.value);

    // Проверка на пустое значение
    if (isNaN(maxNumber)) {
        errorMessage.textContent = "Gib mir einen Zahl!";
        return;
    }

    // Проверка на одинаковые значения в select
    if (divisor1 === divisor2) {
        errorMessage.textContent = "Wählen Sie zwei verschiedene Teiler aus!";
        return;
    }

    let sum = 0;

    // Цикл для проверки чисел от 0 до maxNumber
    for (let i = 0; i <= maxNumber; i++) {
        if (i % divisor1 === 0 || i % divisor2 === 0) {
            sum += i;
        }
    }

    // Вывод результата
    result.textContent = `Die Summe aller Zahlen, die durch ${divisor1} oder ${divisor2}, gleich ${sum}.`;
}

// Обработчик события для кнопки
calculateButton.addEventListener("click", calculateDivisibleSum);
