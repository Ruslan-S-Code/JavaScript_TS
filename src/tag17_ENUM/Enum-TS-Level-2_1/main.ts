// Определение Enum HtmlError
enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

// Функция для случайного выбора ошибки
function showHtmlError(): void {
  // Генерация случайного числа от 0 до 5
  const randomValue = Math.floor(Math.random() * 6);

  // Условие для вывода ошибки в зависимости от случайного числа
  if (randomValue === 0 || randomValue === 1 || randomValue === 2) {
    console.log(`Error: ${HtmlError.OK} - OK`);
  } else if (randomValue === 3) {
    console.log(`Error: ${HtmlError.Redirect} - Redirect`);
  } else if (randomValue === 4) {
    console.log(`Error: ${HtmlError.BadRequest} - BadRequest`);
  } else if (randomValue === 5) {
    console.log(
      `Ошибка: ${HtmlError.InternalServerError} - InternalServerError`
    );
  }
}

// Вызов функции для демонстрации работы
showHtmlError();
