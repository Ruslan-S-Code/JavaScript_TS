let count = 0; // Глобальная переменная для подсчета изменений

// Функция для изменения фона через кнопки
const changeBackgroundColor = (color: string): void => {
  count++;
  console.log(`Button Click Count: ${count}, Color: ${color}`);
  document.body.style.backgroundColor = color;
};

// Функция для изменения фона через слайдеры
const updateBackgroundFromSliders = (): void => {
  const redSlider = document.getElementById("red-slider") as HTMLInputElement;
  const greenSlider = document.getElementById(
    "green-slider"
  ) as HTMLInputElement;
  const blueSlider = document.getElementById("blue-slider") as HTMLInputElement;

  if (redSlider && greenSlider && blueSlider) {
    const red = parseInt(redSlider.value, 10);
    const green = parseInt(greenSlider.value, 10);
    const blue = parseInt(blueSlider.value, 10);

    // Формируем цвет в формате RGB
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;

    // Преобразование в HEX и вывод в консоль
    const hexColor = rgbToHex(red, green, blue);
    console.log(`Slider Count: ${count}, RGB: ${rgbColor}, HEX: ${hexColor}`);
  }
};

// Функция для преобразования RGB в HEX
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (value: number): string => value.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Настройка обработчиков для кнопок
const setupButtonHandlers = (): void => {
  const pinkButton = document.getElementById(
    "pink-button"
  ) as HTMLButtonElement;
  const purpleButton = document.getElementById(
    "purple-button"
  ) as HTMLButtonElement;
  const orangeButton = document.getElementById(
    "orange-button"
  ) as HTMLButtonElement;

  if (pinkButton)
    pinkButton.addEventListener("click", () => changeBackgroundColor("pink"));
  if (purpleButton)
    purpleButton.addEventListener("click", () =>
      changeBackgroundColor("purple")
    );
  if (orangeButton)
    orangeButton.addEventListener("click", () =>
      changeBackgroundColor("orange")
    );
};

// Настройка обработчиков для слайдеров
const setupSliderHandlers = (): void => {
  const redSlider = document.getElementById("red-slider") as HTMLInputElement;
  const greenSlider = document.getElementById(
    "green-slider"
  ) as HTMLInputElement;
  const blueSlider = document.getElementById("blue-slider") as HTMLInputElement;

  if (redSlider && greenSlider && blueSlider) {
    redSlider.addEventListener("input", updateBackgroundFromSliders);
    greenSlider.addEventListener("input", updateBackgroundFromSliders);
    blueSlider.addEventListener("input", updateBackgroundFromSliders);
  }
};

// Инициализация после загрузки страницы
window.addEventListener("DOMContentLoaded", () => {
  setupButtonHandlers();
  setupSliderHandlers();
});
