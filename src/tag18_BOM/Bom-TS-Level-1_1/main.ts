// Функция, которая через x секунд выводит текст
function displayTextAfterDelay(text: string, delayInSeconds: number): void {
  console.log("Start: Warten für 3 Sekunden"); // Сообщение о начале
  setTimeout(() => {
    console.log(text); // Основное сообщение
    console.log("Endlich Feierabend!"); // Сообщение о завершении
  }, delayInSeconds * 3000); // Задержка в миллисекундах
}

// Функция, которая каждую секунду выводит текст, а через заданное время останавливается
function displayTextWithInterval(
  text: string,
  durationInSeconds: number
): void {
  let counter = 0;
  const interval = setInterval(() => {
    console.log(text); // Вывод текста каждую секунду
    counter++;
    if (counter >= durationInSeconds) {
      // Когда счётчик достигает заданного времени
      clearInterval(interval); // Останавливаем интервал
      console.log("Erledigt. Du hast 3 Sekunden verschwendet."); // Сообщение о завершении
    }
  }, 3000); // Интервал в 1 секунду
}

// Тестирование
displayTextAfterDelay("Erledigt. Du hast 3 Sekunden verschwendet.", 3); // Сообщение появится через 3 секунд
displayTextWithInterval("Erledigt. Du hast 3 Sekunden verschwendet.", 5); // Сообщение будет выводиться каждую секунду в течение 5 секунд
