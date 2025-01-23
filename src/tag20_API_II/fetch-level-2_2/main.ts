// Интерфейс для задач
interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Функция для получения данных из API
function fetchToDos(): void {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data: IToDo[]) => {
      // Сортируем задачи по названию
      const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
      displayToDos(sortedData);
      setupSearch(sortedData); // Настраиваем функционал поиска
    })
    .catch((error) => console.error("Error when requesting data:", error));
}

// Функция для отображения задач
function displayToDos(toDos: IToDo[]): void {
  const container = document.getElementById("todo-container");

  if (!container) {
    console.error("Container с id 'todo-container' not found.");
    return;
  }

  // Очищаем контейнер перед повторным рендерингом
  container.innerHTML = "";

  // Создаем элементы для каждой задачи
  toDos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.textContent = todo.title;

    // Устанавливаем цвет в зависимости от состояния задачи
    todoItem.style.color = todo.completed ? "green" : "red";
    todoItem.style.marginBottom = "10px";

    container.appendChild(todoItem);
  });
}

// Функция для настройки поиска
function setupSearch(toDos: IToDo[]): void {
  const input = document.getElementById("search-input") as HTMLInputElement;

  if (!input) {
    console.error("Input field с id 'search-input' not found.");
    return;
  }

  // Добавляем обработчик события input
  input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    const filteredToDos = toDos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm)
    );
    displayToDos(filteredToDos); // Отображаем только отфильтрованные задачи
  });
}

// Запуск функции при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  fetchToDos();
});
