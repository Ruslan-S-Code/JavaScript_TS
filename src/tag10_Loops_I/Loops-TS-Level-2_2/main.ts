function generateLoop(): void {
    // Получаем элементы HTML
    const inputElement = document.getElementById("numberInput") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLElement;

    // Получаем значение из поля ввода
    const inputValue: number = parseInt(inputElement.value, 10);

    // Проверяем корректность значения
    if (isNaN(inputValue) || inputValue < 0) {
        resultElement.textContent = "Please enter a valid number (>= 0).";
        return;
    }

    // Создаем строку с нужным количеством "o"
    let output: string = "L";
    for (let i = 0; i < inputValue; i++) {
        output += "o";
    }
    output += "p";

    // Выводим результат в HTML
    resultElement.textContent = output;
}
