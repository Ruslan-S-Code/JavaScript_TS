// Функция для изменения фона элементов
function toggleBackgroundColor(): void {
  // Получаем все элементы с классом "example"
  const elements = document.getElementsByClassName("example");

  // Проверяем, нужно ли включить или выключить новый фон
  let currentColor = (elements[0] as HTMLElement).style.backgroundColor;

  // Если текущий фон пустой или белый, меняем его на новый цвет
  if (currentColor === "" || currentColor === "white") {
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.backgroundColor = "lightblue";
    }
  } else {
    // Если фон уже изменен, сбрасываем его обратно
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.backgroundColor = "white";
    }
  }
}

// Добавляем обработчик события на кнопку
const button = document.querySelector("button")!;
button.addEventListener("click", toggleBackgroundColor);
