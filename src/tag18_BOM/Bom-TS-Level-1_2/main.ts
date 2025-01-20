// Получаем элементы с помощью querySelector
const progressElement = document.querySelector(".zeit") as HTMLElement;
const button = document.getElementById("btn") as HTMLButtonElement;

// Функция для отсчёта процентов
function startCountdown(): void {
  let percent = 100; // Начальный процент
  const intervalId = setInterval(() => {
    // Обновляем отображаемое значение процента
    progressElement.textContent = `${percent}%`;

    // Проверяем, не достигли ли мы 0%
    if (percent <= 0) {
      clearInterval(intervalId); // Останавливаем таймер
      console.log("Отсчёт завершён!");
    } else {
      percent--; // Уменьшаем процент на 1
    }
  }, 1000); // Интервал 1 секунда
}

// Обработчик события для кнопки
button.addEventListener("click", () => {
  startCountdown(); // Запускаем отсчёт при клике на кнопку
});
