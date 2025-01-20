// Функция для получения данных о браузере и устройстве
function displayBrowserInfo(): void {
  // Получаем данные о браузере
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;
  const platform = navigator.platform;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;

  // Дополнительные данные (Bonus)
  const language = navigator.language;
  const cookiesEnabled = navigator.cookieEnabled;
  const hardwareConcurrency = navigator.hardwareConcurrency;
  const maxTouchPoints = navigator.maxTouchPoints;

  // Выводим данные на страницу
  const infoContainer = document.querySelector(".browser-info") as HTMLElement;

  if (infoContainer) {
    infoContainer.innerHTML = `
        <p><strong>Browser Name:</strong> ${browserName}</p>
        <p><strong>Browser Version:</strong> ${browserVersion}</p>
        <p><strong>Operating System Architecture:</strong> ${platform}</p>
        <p><strong>Window Resolution:</strong> ${screenWidth}x${screenHeight}</p>
        <p><strong>Document Width & Height:</strong> ${documentWidth}x${documentHeight}</p>
        <p><strong>Color Depth:</strong> ${colorDepth} bits</p>
        <p><strong>Pixel Depth:</strong> ${pixelDepth} bits</p>
  
        <p><strong>Language:</strong> ${language}</p>
        <p><strong>Cookies Enabled:</strong> ${cookiesEnabled}</p>
        <p><strong>Hardware Concurrency (CPU cores):</strong> ${hardwareConcurrency}</p>
        <p><strong>Max Touch Points:</strong> ${maxTouchPoints}</p>
      `;
  }
}

// Добавляем обработчик для кнопки
const button = document.querySelector("#btn") as HTMLButtonElement;
if (button) {
  button.addEventListener("click", displayBrowserInfo); // При нажатии на кнопку вызываем функцию для отображения информации
}
