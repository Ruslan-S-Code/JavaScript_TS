// Определяем массив цветов
const colors: string[] = [
  "#f6c89f",
  "#ffe7d1",
  "#4b8e8d",
  "#396362",
  "#666",
  "#333",
];

let count = 0;

// Функция для изменения цвета кнопок
function changeButtonColors(): void {
  // Получаем все кнопки навигации, кроме кнопки "Change Me"
  const navButtons = document.querySelectorAll(
    ".nav-button:not(#change-button)"
  );

  // Назначаем цвет каждой кнопке
  navButtons.forEach((button, index) => {
    // Выбираем цвет, используя индекс кнопки и количество доступных цветов
    const color = colors[(index + count) % colors.length];
    (button as HTMLButtonElement).style.backgroundColor = color;
  });
  count++;
}

// setInterval(changeButtonColors, 10);

// Добавляем обработчик события на кнопку "Change Me"
const changeButton = document.getElementById("change-button");
changeButton?.addEventListener("click", changeButtonColors);
