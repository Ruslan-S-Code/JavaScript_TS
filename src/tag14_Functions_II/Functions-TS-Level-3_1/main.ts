// Тип для объекта SuperBall
type SuperBallConfig = {
  id: string;
  color1: string; // Первый цвет (левая часть шара)
  color2: string; // Второй цвет (правая часть шара)
};

// Массив объектов SuperBall
const superBalls: SuperBallConfig[] = [
  { id: "", color1: "red", color2: "yellow" },
  { id: "", color1: "blue", color2: "green" },
  { id: "", color1: "orange", color2: "purple" },
  { id: "", color1: "pink", color2: "cyan" },
];

// Функция для изменения цвета фона и текста
function changeColors(backgroundColor: string, textColor: string): void {
  document.body.style.backgroundColor = backgroundColor;
  const heading = document.querySelector("h1");
  if (heading) heading.style.color = textColor;
  console.log(
    `Background color set to: ${backgroundColor}, Text color set to: ${textColor}`
  );
}

// Генерация SuperBalls
function generateSuperBalls(): void {
  const container = document.getElementById("superballs-container");
  if (!container) return;

  superBalls.forEach((ball) => {
    const button = document.createElement("div");
    button.className = "superball";
    button.style.background = `linear-gradient(to right, ${ball.color1} 50%, ${ball.color2} 50%)`; // Разделение на два цвета
    button.innerText = ball.id;

    // Добавляем обработчик событий
    button.addEventListener("click", () =>
      changeColors(ball.color1, ball.color2)
    ); // Меняем цвета при клике

    container.appendChild(button);
  });
}

// Инициализация
generateSuperBalls();
