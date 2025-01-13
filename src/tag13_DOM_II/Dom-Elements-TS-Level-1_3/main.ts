// Получаем элементы
const gameList = document.querySelector<HTMLUListElement>("#myList");
const button1 = document.querySelector<HTMLButtonElement>("#button1");
const button2 = document.querySelector<HTMLButtonElement>("#button2");
const button3 = document.querySelector<HTMLButtonElement>("#button3");
const button4 = document.querySelector<HTMLButtonElement>("#button4");
const outputElement = document.querySelector<HTMLOutputElement>("output");

// Проверяем, что все элементы существуют
if (gameList && button1 && button2 && button3 && button4 && outputElement) {
  // Кнопка: Первый элемент
    button1.addEventListener("click", () => {
    const result = gameList.firstElementChild;
    if (result) {
        outputElement.innerHTML = `First Element: ${result.innerHTML}`;
    } else {
        outputElement.innerHTML = "No first element!";
    }
    });

  // Кнопка: Последний элемент
    button2.addEventListener("click", () => {
    const result = gameList.lastElementChild;
    if (result) {
        outputElement.innerHTML = `Last Element: ${result.innerHTML}`;
    } else {
        outputElement.innerHTML = "No last element!";
    }
    });

  // Кнопка: Следующий элемент от первого
    button3.addEventListener("click", () => {
    const firstChild = gameList.firstElementChild;
    const result = firstChild?.nextElementSibling;
    if (result) {
        outputElement.innerHTML = `Next Element from First: ${result.innerHTML}`;
    } else {
        outputElement.innerHTML = "No next element from the first!";
    }
    });

  // Кнопка: Предыдущий элемент от последнего
    button4.addEventListener("click", () => {
    const lastChild = gameList.lastElementChild;
    const result = lastChild?.previousElementSibling;
    if (result) {
        outputElement.innerHTML = `Previous Element from Last: ${result.innerHTML}`;
    } else {
        outputElement.innerHTML = "No previous element from the last!";
    }
    });
}