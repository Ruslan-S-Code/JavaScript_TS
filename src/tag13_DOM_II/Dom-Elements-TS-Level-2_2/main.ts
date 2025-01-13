// Определение типа для данных формы
type FormData = {
    vorname: string;
    nachname: string;
    land: string;
};

// Получение элементов формы
const form = document.getElementById('form1') as HTMLFormElement;
const vornameInput = document.getElementById('vorname') as HTMLInputElement;
const nachnameInput = document.getElementById('nachname') as HTMLInputElement;
const landSelect = document.getElementById('land') as HTMLSelectElement;

// Добавление обработчика события для формы
if (form && vornameInput && nachnameInput && landSelect) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение отправки формы

        // Создаём объект с данными из формы
        const formData: FormData = {
            vorname: vornameInput.value.trim(),
            nachname: nachnameInput.value.trim(),
            land: landSelect.value,
        };

        // Выводим объект в консоль
        console.log('Form Data:', formData);
    });
}
