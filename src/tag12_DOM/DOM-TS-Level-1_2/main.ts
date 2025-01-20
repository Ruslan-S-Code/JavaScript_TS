// Работаем с элементом с ID "info"
const infoDiv = document.getElementById("info");

if (infoDiv) {
  // Создаем h1 и добавляем его в DOM
  const h1 = document.createElement("h1");
  h1.textContent = "Hello World";
  infoDiv.appendChild(h1);

  // Создаем h2 и добавляем его в DOM
  const h2 = document.createElement("h2");
  h2.textContent = "How are you?";
  infoDiv.appendChild(h2);
} else {
  console.error('Элемент с id "info" не найден.');
}

// Работаем с элементом с ID "container"
const containerDiv = document.getElementById("container");

if (containerDiv) {
  // Создаем p и добавляем его в DOM
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is a paragraph";
  containerDiv.appendChild(paragraph);

  // Создаем input
  const input = document.createElement("input");

  // Используем setAttribute, чтобы задать тип "text"
  input.setAttribute("type", "text");

  // Добавляем input в контейнер
  containerDiv.appendChild(input);
} else {
  console.error('Элемент с id "container" не найден.');
}
