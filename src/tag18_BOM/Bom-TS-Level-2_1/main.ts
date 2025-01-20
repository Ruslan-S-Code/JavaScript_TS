function startCountdown(): void {
  const countElement = document.getElementById("count") as HTMLElement; // Получаем элемент с id "count"

  if (!countElement) return; // Если элемент не найден, ничего не делаем

  let counter = 10; // Начальное значение для обратного отсчета

  // Функция, которая обновляет текст элемента и уменьшает значение counter
  const interval = setInterval(() => {
    if (counter > 0) {
      countElement.textContent = `${counter}`; // Обновляем текст элемента
      counter--; // Уменьшаем значение счетчика
    } else {
      clearInterval(interval); // Останавливаем интервал
      countElement.parentElement?.remove(); // Удаляем весь блок с текстом
    }
  }, 1000); // Интервал в 1000 миллисекунд (1 секунда)
}

// Запускаем функцию при загрузке страницы
window.addEventListener("load", startCountdown);
