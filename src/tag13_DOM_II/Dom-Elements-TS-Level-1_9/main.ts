// Получаем элементы из DOM
const colorSelect = document.querySelector<HTMLSelectElement>("#farbeAuswahlen");
const removeButton = document.querySelector<HTMLButtonElement>("#button");

// Проверяем, что элементы существуют
if (colorSelect && removeButton) {
  // Добавляем обработчик события на кнопку
removeButton.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    // Получаем индекс выбранного элемента
    const selectedIndex = colorSelect.selectedIndex;

    // Проверяем, что индекс валиден (выбран элемент)
    if (selectedIndex !== -1) {
      // Удаляем выбранный элемент
        colorSelect.options[selectedIndex].remove();
    } else {
        console.log("Нет выбранного элемента для удаления.");
    }
    });
}