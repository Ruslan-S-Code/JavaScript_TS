// Получаем ссылки на элементы
const selectElement = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
const button = document.getElementById('button') as HTMLButtonElement;

// Добавляем обработчик события на кнопку
button.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем стандартное поведение кнопки

    // Получаем выбранный цвет из выпадающего списка
    const selectedColor = selectElement.value;

    // Меняем фон страницы на выбранный цвет
    document.body.style.backgroundColor = selectedColor;
});
