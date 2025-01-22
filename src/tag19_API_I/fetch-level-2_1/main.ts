type ImageData = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

// Получение данных из API
fetch("https://picsum.photos/v2/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then((data: ImageData[]) => {
    // Вызываем функцию для отображения данных на странице
    displayImages(data);
  })
  .catch((error) => console.error("Ошибка при запросе данных:", error));

// Функция для отображения данных
function displayImages(data: ImageData[]): void {
  const container = document.getElementById("image-container");

  if (!container) {
    console.error("Контейнер с id 'image-container' не найден.");
    return;
  }

  data.forEach((image) => {
    // Создаем элементы figure, img и figcaption
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");

    // Устанавливаем атрибуты и текст
    img.src = image.download_url;
    img.alt = `Image by ${image.author}`;
    figcaption.textContent = image.author;

    // Добавляем стили для img
    img.style.width = "50%";

    // Добавляем img и figcaption в figure
    figure.appendChild(img);
    figure.appendChild(figcaption);

    // Добавляем figure в контейнер
    container.appendChild(figure);
  });
}
