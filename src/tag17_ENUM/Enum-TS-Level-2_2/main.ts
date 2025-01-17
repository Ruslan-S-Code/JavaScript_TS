// Определение Enum ClothingColor
enum ClothingColor {
  Gelb = "#FFFF00", // Жёлтый
  Orange = "#FFA500", // Оранжевый
  Pink = "#FFC0CB", // Розовый
  Blau = "#0000FF", // Синий
  Lila = "#800080", // Фиолетовый
  Grau = "#808080", // Серый
}

// Функция для создания кнопок
function createColorButtons() {
  const container = document.getElementById("color-container");
  if (!container) return;

  // Получение значений Enum с помощью Object.values
  const colors = Object.values(ClothingColor);

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.textContent = color; // Можно отображать цвет в тексте кнопки
    container.appendChild(button);
  });
}

// Вызов функции для создания кнопок
createColorButtons();
